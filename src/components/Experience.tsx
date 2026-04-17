import { Link } from 'react-router-dom'
import { publications } from '../data/research'

const industryItems = [
  { role: 'Pursuing MEng in EECS (Open for Jobs)', org: 'UC Berkeley · MEng Capstone', dates: 'Aug 2025 – Present' },
  { role: 'Software Engineering Job Simulation', org: 'JPMorgan Chase & Co. (Forage)', dates: 'Apr 2026' },
  { role: 'Industry Researcher', org: 'TrendForce Corporation', dates: 'Oct 2024 – Jun 2025' },
  { role: 'Software Engineer Intern', org: 'Pegatron Corporation', dates: 'Jul – Aug 2023' },
  { role: 'Software Engineer Intern', org: 'IADIY Photonics', dates: '2020 & 2021' },
]

const researchItems = [
  { role: 'Research Assistant', org: 'NTU Robot Learning Lab (Shao-Hua, Sun)', dates: 'Oct 2023 – Jun 2025' },
  { role: 'Undergraduate Researcher', org: 'NTU SPMLab (Hung-yi Lee)', dates: 'Jul 2023 – Jun 2025' },
]

const papers = publications.filter(p => !p.tags.includes('Review'))

export default function Experience() {
  return (
    <section className="py-16 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <h2 className="text-2xl font-semibold tracking-tight mb-8">Background</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        {/* Industry */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider mb-5" style={{ color: 'var(--color-accent)' }}>
            Industry
          </h3>
          <div className="space-y-5">
            {industryItems.map(item => (
              <div key={item.org} className="flex gap-3">
                <div
                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
                <div>
                  <p className="text-sm font-medium leading-snug">{item.role}</p>
                  <p className="text-xs" style={{ color: 'var(--color-secondary)' }}>{item.org}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--color-secondary)', opacity: 0.7 }}>
                    {item.dates}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider mb-5" style={{ color: 'var(--color-accent)' }}>
            Research
          </h3>
          <div className="space-y-5">
            {researchItems.map(item => (
              <div key={item.org} className="flex gap-3">
                <div
                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
                <div>
                  <p className="text-sm font-medium leading-snug">{item.role}</p>
                  <p className="text-xs" style={{ color: 'var(--color-secondary)' }}>{item.org}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--color-secondary)', opacity: 0.7 }}>
                    {item.dates}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Publications teaser */}
      <div
        className="rounded-xl px-5 py-4 flex items-start justify-between gap-4"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="min-w-0">
          <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--color-accent)' }}>
            Publications ({papers.length})
          </p>
          <div className="space-y-1.5">
            {papers.map(pub => (
              <p key={pub.id} className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                  {pub.title.split(':')[0]}
                </span>
                {' '}· {pub.venue} {pub.year}
              </p>
            ))}
          </div>
        </div>
        <Link to="/publications" className="link-underline text-xs shrink-0 pt-0.5">
          View all &rarr;
        </Link>
      </div>
    </section>
  )
}
