import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  dark: boolean
  onToggleDark: () => void
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Projects' },
  { to: '/publications', label: 'Publications' },
  { to: '/resume', label: 'Resume' },
  { to: '/bouldering', label: 'Bouldering' },
]

export default function Header({ dark, onToggleDark }: HeaderProps) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'color-mix(in srgb, var(--color-bg) 85%, transparent)' }}>
      <div className="max-w-[800px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6 text-sm" style={{ color: 'var(--color-secondary)' }}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="link-underline"
              style={location.pathname === to ? { color: 'var(--color-text)' } : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded-lg transition-colors cursor-pointer"
          style={{ color: 'var(--color-secondary)' }}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Dark mode toggle */}
        <button
          onClick={onToggleDark}
          className="p-2 rounded-lg transition-colors cursor-pointer"
          style={{ color: 'var(--color-secondary)' }}
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="sm:hidden border-t px-6 py-4 space-y-4"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block text-sm font-medium"
              style={{ color: location.pathname === to ? 'var(--color-text)' : 'var(--color-secondary)' }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
