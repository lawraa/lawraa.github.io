import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// A deploy changes chunk hashes; a tab opened before it can't load the lazy map chunk.
// Reload once to pick up the new build instead of rendering a blank page.
window.addEventListener('vite:preloadError', () => {
  try {
    if (sessionStorage.getItem('reloaded-for-new-build')) return
    sessionStorage.setItem('reloaded-for-new-build', '1')
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
