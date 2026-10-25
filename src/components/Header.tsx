import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { pages } from '../pages'

export default function Header() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const [prevPath, setPrevPath] = useState(pathname)

  // Close on any navigation, including browser Back/Forward
  if (pathname !== prevPath) {
    setPrevPath(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      // The menu unmounts on close, so hand focus back to the toggle if it was inside.
      if (menuRef.current?.contains(document.activeElement)) toggleRef.current?.focus()
      setMenuOpen(false)
    }
    // Close when the page scrolls, a tap lands outside the site header, or the desktop nav takes over.
    const close = () => setMenuOpen(false)
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close()
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', close, { passive: true })
    document.addEventListener('pointerdown', onPointer)
    desktop.addEventListener('change', close)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', close)
      document.removeEventListener('pointerdown', onPointer)
      desktop.removeEventListener('change', close)
    }
  }, [menuOpen])

  // Tapping the page you're on returns to its top (and drops a /work#project deep link)
  const onNavClick = (to: string) => (e: MouseEvent) => {
    setMenuOpen(false)
    if (to !== pathname) return
    e.preventDefault()
    if (hash) navigate(to, { replace: true })
    window.scrollTo({ top: 0 })
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 bg-sage transition-[border-color] duration-200 border-b ${scrolled || menuOpen ? 'border-line' : 'border-transparent'}`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-5 sm:px-10">
        <Link to="/" onClick={onNavClick('/')} className="font-display text-xl font-bold tracking-[-0.01em] text-forest" aria-label="Lawrance Chen, home">
          Lawrance Chen
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-meta font-medium" aria-label="Primary">
          {pages.map(({ path: to, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? 'page' : undefined}
                onClick={onNavClick(to)}
                className={`py-1 border-b-2 transition-colors ${active ? 'text-ink border-tomato' : 'text-mute border-transparent hover:text-ink hover:border-line forced-colors:border-[Canvas]'}`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <button
          ref={toggleRef}
          // 22px icon + 11px padding = 44px tap target; the negative margin keeps it aligned to the edge
          className="md:hidden -mr-[11px] p-[11px] rounded-full text-forest cursor-pointer hover:bg-forest-tint transition-colors"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Overlay below the bar, so opening it never changes the header height or shifts the page */}
      {menuOpen && (
        <nav ref={menuRef} className="absolute inset-x-0 top-full border-y border-line bg-sage px-5 pb-5 pt-2 md:hidden" aria-label="Primary">
          {pages.map(({ path: to, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? 'page' : undefined}
                onClick={onNavClick(to)}
                className={`flex items-center justify-between py-3 font-display text-2xl font-semibold border-b border-line last:border-b-0 ${active ? 'text-tomato forced-colors:underline forced-colors:underline-offset-4' : 'text-forest'}`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
