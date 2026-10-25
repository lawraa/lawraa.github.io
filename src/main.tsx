import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// A deploy changes chunk hashes; a tab opened before it can't load the lazy map chunk.
// Reload to pick up the new build. If that can't help (offline, or it just reloaded and the
// chunk still fails), skip it and let the map's error boundary show a retry instead.
window.addEventListener('vite:preloadError', () => {
  if (!navigator.onLine) return // reloading offline would replace the site with the browser's error page
  try {
    const last = Number(sessionStorage.getItem('reloaded-for-new-build') ?? 0)
    if (Date.now() - last < 10_000) return
    sessionStorage.setItem('reloaded-for-new-build', String(Date.now()))
  } catch {
    return // storage blocked: skip the reload rather than risk a loop
  }
  location.reload()
})

// Rubber-band scrolling past either end shows the html background. Match it to the nearer end:
// sage behind the header at the top, forest behind the footer at the bottom.
const root = document.documentElement
const matchOverscroll = () => {
  const nearBottom = window.scrollY > (root.scrollHeight - window.innerHeight) / 2
  root.style.backgroundColor = nearBottom ? 'var(--color-forest)' : ''
}
window.addEventListener('scroll', matchOverscroll, { passive: true })
matchOverscroll() // a restored scroll position may already be near the bottom

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
