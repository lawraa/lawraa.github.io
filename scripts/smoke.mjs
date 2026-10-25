// Smoke test against a running build (vite preview). Fails on:
// - static: an asset path in src/ or index.html with no file in public/, or 404.html routes out of sync with src/pages.ts
// - every route, phone and desktop: console errors, broken same-origin requests, a missing or duplicate h1,
//   horizontal overflow, broken images
// - interactions: mobile menu closing, lightbox focus handling, /work deep links opening the case study,
//   and the map chunk failing without taking the page down
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import puppeteer from 'puppeteer-core'

const base = process.env.BASE_URL ?? 'http://localhost:4173/'
const origin = new URL(base).origin
const failures = []
const report = (id, errors) => {
  console.log(errors.length ? 'FAIL' : 'ok  ', id, errors.join(' | '))
  if (errors.length) failures.push(id)
}

// Static checks
const pagePaths = [...readFileSync('src/pages.ts', 'utf8').matchAll(/path: '([^']+)'/g)].map(m => m[1])
{
  const sources = ['index.html']
  const walk = dir => readdirSync(dir, { withFileTypes: true }).forEach(e => {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (/\.(ts|tsx)$/.test(e.name)) sources.push(p)
  })
  walk('src')
  const missing = new Set()
  for (const file of sources) {
    for (const [, path] of readFileSync(file, 'utf8').matchAll(/['"`](\/[\w./-]+\.(?:jpe?g|png|webp|svg|pdf|mp4|ico))['"`]/g)) {
      if (!existsSync(join('public', path))) missing.add(`${path} (${file})`)
    }
  }
  report('asset paths exist in public/', [...missing].map(m => `missing ${m}`))

  const notFound = readFileSync('public/404.html', 'utf8')
  const redirected = JSON.parse(notFound.match(/var routes = (\[[^\]]*\])/)[1].replace(/'/g, '"'))
  const expected = pagePaths.filter(p => p !== '/')
  const drift = [
    ...expected.filter(p => !redirected.includes(p)).map(p => `404.html missing ${p}`),
    ...redirected.filter(p => !expected.includes(p)).map(p => `404.html has unknown ${p}`),
  ]
  report('404.html routes match src/pages.ts', drift)
}

// CI passes CHROME_PATH; locally fall back to the standard macOS install
const executablePath = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const browser = await puppeteer.launch({ executablePath, args: ['--no-sandbox'] })
const phone = { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }
const desktop = { width: 1440, height: 900 }
const sameOrigin = url => { try { return new URL(url).origin === origin } catch { return false } }

// Opens a page that records errors from the site's own scripts and requests.
// Map tiles come from a third party; their outages should not fail the build.
async function open(viewport, hash) {
  const page = await browser.newPage()
  await page.setViewport(viewport)
  const errors = []
  page.on('console', m => { if (m.type() === 'error' && (!m.location().url || sameOrigin(m.location().url))) errors.push(m.text()) })
  page.on('pageerror', e => errors.push(String(e)))
  page.on('requestfailed', r => {
    // Chrome cancels the rest of a video download once it has what it needs; the deep-link check verifies the video loaded
    if (r.resourceType() === 'media' && r.failure()?.errorText === 'net::ERR_ABORTED') return
    if (sameOrigin(r.url())) errors.push(`failed ${r.url()}`)
  })
  page.on('response', r => { if (r.status() >= 400 && sameOrigin(r.url())) errors.push(`${r.status()} ${r.url()}`) })
  await page.goto(base + hash, { waitUntil: 'networkidle2', timeout: 60000 })
  return { page, errors }
}

const brokenImages = page => page.evaluate(() =>
  [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.loading !== 'lazy').map(i => i.src))

for (const viewport of [phone, desktop]) {
  for (const path of pagePaths) {
    const hash = path === '/' ? '' : `#${path}`
    const { page, errors } = await open(viewport, hash)
    const res = await page.evaluate(() => ({
      hash: location.hash,
      h1: document.querySelectorAll('h1').length,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }))
    // An unknown route redirects home, so a page listed in pages.ts without a <Route> in App.tsx shows up here
    if (res.hash !== hash) errors.push(`landed on "${res.hash || '/'}" (missing <Route> in App.tsx?)`)
    if (res.h1 !== 1) errors.push(`h1 count ${res.h1}`)
    for (const src of await brokenImages(page)) if (sameOrigin(src)) errors.push(`broken image ${src}`)
    if (res.scrollWidth > res.clientWidth) errors.push(`horizontal overflow ${res.scrollWidth} > ${res.clientWidth}`)
    report(`${viewport.width}px /${hash}`, errors)
    await page.close()
  }
}

const expanded = page => page.$eval('header button[aria-expanded]', b => b.getAttribute('aria-expanded'))
const active = page => page.evaluate(() => {
  const e = document.activeElement
  return e?.getAttribute('aria-label') ?? e?.textContent?.trim() ?? ''
})

// Mobile menu: a tap below it (on the page intro, itself a <header>) closes it; Escape closes it and returns focus
{
  const { page, errors } = await open(phone, '#/bouldering')
  await page.tap('header button[aria-expanded]')
  if (await expanded(page) !== 'true') errors.push('menu did not open')
  // Tap the page intro's empty bottom padding at the right edge: inside a <header>, below the menu,
  // and away from the Instagram link (a tap near a link activates it)
  const spot = await page.evaluate(() => {
    const menuBottom = document.querySelector('header nav[aria-label=Primary]:not(.hidden)').getBoundingClientRect().bottom
    const r = document.querySelector('main header').getBoundingClientRect()
    if (r.bottom - 12 <= menuBottom) throw new Error('page intro is hidden behind the menu')
    return { x: r.right - 20, y: r.bottom - 12 }
  })
  await page.touchscreen.tap(spot.x, spot.y)
  if (await expanded(page) !== 'false') errors.push('tap outside the menu left it open')
  await page.tap('header button[aria-expanded]')
  await page.keyboard.press('Tab')
  if (await active(page) !== 'Home') errors.push(`Tab from the toggle went to "${await active(page)}", not the first menu link`)
  await page.keyboard.press('Escape')
  if (await expanded(page) !== 'false') errors.push('Escape left the menu open')
  if (!(await active(page)).includes('navigation')) errors.push(`focus after Escape on "${await active(page)}", not the menu toggle`)
  report('mobile menu closes', errors)
  await page.close()
}

// Lightbox: focus moves to Close, Tab stays there, scroll is locked, Escape restores focus and scroll
{
  const { page, errors } = await open(desktop, '#/bouldering')
  const opener = await page.$('main button.cursor-zoom-in')
  const label = await opener.evaluate(b => b.getAttribute('aria-label'))
  await opener.click()
  if (!(await page.$('[role=dialog]'))) errors.push('dialog did not open')
  if (await active(page) !== 'Close') errors.push(`focus in dialog on "${await active(page)}"`)
  await page.keyboard.press('Tab')
  if (await active(page) !== 'Close') errors.push('Tab left the dialog')
  if (await page.evaluate(() => document.body.style.overflow) !== 'hidden') errors.push('page scroll not locked')
  await page.keyboard.press('Escape')
  if (await page.$('[role=dialog]')) errors.push('Escape did not close the dialog')
  if (await active(page) !== label) errors.push(`focus after close on "${await active(page)}", not the photo`)
  if (await page.evaluate(() => document.body.style.overflow) !== '') errors.push('page scroll still locked')
  report('lightbox focus', errors)
  await page.close()
}

// Deep link into /work: lands below the sticky header, focused, with the case study open and its gallery loaded
for (const viewport of [phone, desktop]) {
  const id = 'emg-imu-quadruped'
  const { page, errors } = await open(viewport, `#/work#${id}`)
  // Projects scrolls to the card after fonts.ready and one animation frame; wait two frames past that
  await page.evaluate(async () => {
    await document.fonts.ready
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))
  })
  const res = await page.evaluate(id => {
    const card = document.getElementById(id)
    const toggle = card?.querySelector('button[aria-expanded]')
    const region = toggle && document.getElementById(toggle.getAttribute('aria-controls'))
    return {
      top: card ? Math.round(card.getBoundingClientRect().top) : null,
      focused: document.activeElement === card,
      expanded: toggle?.getAttribute('aria-expanded'),
      inert: region?.inert,
      media: region ? region.querySelectorAll('img, video').length : 0,
    }
  }, id)
  if (res.top === null) errors.push(`no project "${id}" on /work; pick another id with a gallery video in this check`)
  else if (res.top < 0 || res.top > 120) errors.push(`card top at ${res.top}px`)
  if (res.top !== null && !res.focused) errors.push('card did not take focus')
  if (res.expanded !== 'true' || res.inert !== false) errors.push('case study not open')
  if (res.media === 0) errors.push('gallery did not mount')
  await page.waitForNetworkIdle({ idleTime: 300, timeout: 30000 })
  for (const src of await brokenImages(page)) if (sameOrigin(src)) errors.push(`broken image ${src}`)
  const videos = await page.$$eval(`#${id} video`, vs => vs.map(v => ({ src: v.currentSrc, ok: v.readyState >= 1 && !v.error })))
  for (const v of videos) if (!v.ok) errors.push(`video did not load ${v.src}`)
  report(`${viewport.width}px deep link /#/work#${id}`, errors)
  await page.close()
}

// The lazy map chunk failing to load (offline, or a deploy mid-session) leaves the rest of the page standing
{
  const page = await browser.newPage()
  await page.setViewport(desktop)
  await page.setRequestInterception(true)
  page.on('request', r => /BoulderingMap-[\w-]+\.js/.test(r.url()) ? r.abort() : r.continue())
  let loads = 0
  page.on('load', () => loads++)
  await page.goto(base + '#/bouldering', { waitUntil: 'networkidle2', timeout: 60000 })
  const errors = []
  // main.tsx reloads once for a possibly new build, then the guard stops it and the map's boundary shows a retry
  const shown = await page.waitForFunction(() => document.body.innerText.includes("The map couldn't load"), { timeout: 15000 })
    .then(() => true, () => false)
  if (!shown) errors.push('no map fallback shown')
  if (loads !== 2) errors.push(`expected one reload, saw ${loads - 1}`)
  const kept = await page.evaluate(() => !!document.querySelector('header') && !!document.querySelector('footer'))
  if (!kept) errors.push('page unmounted')
  report('map chunk failure keeps the page', errors)
  await page.close()
}

await browser.close()
process.exit(failures.length ? 1 : 0)
