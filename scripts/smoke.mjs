// Loads every route on a phone and a desktop viewport against a running build
// (vite preview) and fails on console errors, broken same-origin requests,
// a missing or duplicate h1, or horizontal overflow.
import puppeteer from 'puppeteer-core'

const base = process.env.BASE_URL ?? 'http://localhost:4173/'
const origin = new URL(base).origin
const routes = ['', '#/work', '#/publications', '#/bouldering', '#/drawing']
const viewports = [
  { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
  { width: 1440, height: 900 },
]
const sameOrigin = url => { try { return new URL(url).origin === origin } catch { return false } }

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH, args: ['--no-sandbox'] })
const failures = []
for (const viewport of viewports) {
  for (const route of routes) {
    const page = await browser.newPage()
    await page.setViewport(viewport)
    const errors = []
    // Map tiles come from a third party; their outages should not fail the build.
    page.on('console', m => { if (m.type() === 'error' && (!m.location().url || sameOrigin(m.location().url))) errors.push(m.text()) })
    page.on('pageerror', e => errors.push(String(e)))
    page.on('requestfailed', r => { if (sameOrigin(r.url())) errors.push(`failed ${r.url()}`) })
    page.on('response', r => { if (r.status() >= 400 && sameOrigin(r.url())) errors.push(`${r.status()} ${r.url()}`) })
    await page.goto(base + route, { waitUntil: 'networkidle2', timeout: 60000 })
    const res = await page.evaluate(() => ({
      h1: document.querySelectorAll('h1').length,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      brokenImages: [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.loading !== 'lazy').map(i => i.src),
    }))
    if (res.h1 !== 1) errors.push(`h1 count ${res.h1}`)
    for (const src of res.brokenImages) if (sameOrigin(src)) errors.push(`broken image ${src}`)
    if (res.scrollWidth > res.clientWidth) errors.push(`horizontal overflow ${res.scrollWidth} > ${res.clientWidth}`)
    const id = `${viewport.width}px /${route}`
    console.log(errors.length ? 'FAIL' : 'ok  ', id, errors.join(' | '))
    if (errors.length) failures.push(id)
    await page.close()
  }
}
await browser.close()
process.exit(failures.length ? 1 : 0)
