import { skills } from '../data/skills'
import type { JSX } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const categoryIcons: Record<string, JSX.Element> = {
  'Machine Learning': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2"/>
      <circle cx="4" cy="20" r="2"/>
      <circle cx="20" cy="20" r="2"/>
      <path d="M12 6v6M4 18l6.5-6M20 18l-6.5-6"/>
    </svg>
  ),
  'Systems & Infrastructure': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="6" rx="1"/>
      <rect x="2" y="13" width="20" height="6" rx="1"/>
      <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none"/>
      <circle cx="6" cy="16" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
  'Simulation & Robotics': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  ),
  'Languages & Tools': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
}

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section className="py-16">
      <div ref={ref} className="reveal">
        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>Skills</p>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-xl p-5 card"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <div className="flex items-center gap-2 mb-4" style={{ color: 'var(--color-text)' }}>
                {categoryIcons[category.title]}
                <h3 className="font-medium text-sm">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm flex items-center gap-2"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
