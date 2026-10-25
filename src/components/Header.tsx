import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/',             label: 'Home' },
  { to: '/work',         label: 'Projects' },
  { to: '/publications', label: 'Publications' },
  { to: '/bouldering',   label: 'Bouldering' },
  { to: '/drawing',      label: 'Drawing' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)

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
    // Close when the page scrolls or a tap lands outside the header.
    const onScroll = () => setMenuOpen(false)
    const onPointer = (e: PointerEvent) => {
      if (!(e.target as Element).closest('header')) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 bg-sage transition-[border-color] duration-200 border-b ${scrolled || menuOpen ? 'border-line' : 'border-transparent'}`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-5 sm:px-10">
        <Link to="/" onClick={() => setMenuOpen(false)} className="font-display text-xl font-bold tracking-[-0.01em] text-forest" aria-label="Lawrance Chen, home">
          Lawrance Chen
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium" aria-label="Primary">
          {navLinks.map(({ to, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? 'page' : undefined}
                className={`py-1 border-b-2 transition-colors ${active ? 'text-ink border-tomato' : 'text-mute border-transparent hover:text-ink hover:border-line'}`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <button
          ref={toggleRef}
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

      {menuOpen && (
        <nav ref={menuRef} className="md:hidden border-t border-line px-5 pb-5 pt-2" aria-label="Primary">
          {navLinks.map(({ to, label }) => {
            const active = pathname === to
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-3 font-display text-2xl font-semibold border-b border-line last:border-b-0 ${active ? 'text-tomato' : 'text-forest'}`}
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
