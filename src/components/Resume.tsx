import { Link } from 'react-router-dom'
import { resumeData } from '../data/resume'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-xs font-mono uppercase tracking-wider mb-6"
      style={{ color: 'var(--color-accent)' }}
    >
      {children}
    </h3>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 list-disc pl-5">
      {items.map((d, i) => (
        <li key={i} className="text-sm" style={{ color: 'var(--color-secondary)' }}>
          {d}
        </li>
      ))}
    </ul>
  )
}

export default function Resume() {
  return (
    <div className="max-w-[860px] mx-auto px-6 pt-32 pb-20">
      <Link to="/" className="link-underline text-sm mb-8 inline-block">
        &larr; Back
      </Link>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Summary */}
      <div className="mb-12">
        <SectionTitle>Summary</SectionTitle>
        <div className="space-y-2">
          {resumeData.summary.map((s, i) => (
            <p key={i} className="text-sm" style={{ color: 'var(--color-secondary)' }}>
              {s}
            </p>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <SectionTitle>Core Skills</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((s) => (
            <span
              key={s}
              className="text-xs font-mono px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-secondary)',
                border: '1px solid var(--color-border, rgba(255,255,255,0.08))',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-10">
          {resumeData.experience.map((exp) => (
            <div key={exp.org + exp.role}>
              <div className="flex items-start justify-between gap-4 mb-1">
                <div className="min-w-0">
                  <h4 className="font-medium">{exp.role}</h4>
                  <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                    {exp.org}
                    {exp.location ? ` · ${exp.location}` : ''}
                    {exp.type ? ` · ${exp.type}` : ''}
                  </p>
                </div>
                <span className="text-xs font-mono shrink-0" style={{ color: 'var(--color-secondary)' }}>
                  {exp.dates}
                </span>
              </div>
              <BulletList items={exp.bullets} />
            </div>
          ))}
        </div>
      </div>

      {/* Research */}
      <div className="mb-12">
        <SectionTitle>Research</SectionTitle>
        <div className="space-y-10">
          {resumeData.research.map((exp) => (
            <div key={exp.org + exp.role}>
              <div className="flex items-start justify-between gap-4 mb-1">
                <div className="min-w-0">
                  <h4 className="font-medium">{exp.role}</h4>
                  <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                    {exp.org}
                    {exp.location ? ` · ${exp.location}` : ''}
                  </p>
                </div>
                <span className="text-xs font-mono shrink-0" style={{ color: 'var(--color-secondary)' }}>
                  {exp.dates}
                </span>
              </div>
              <BulletList items={exp.bullets} />
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="mb-12">
        <SectionTitle>Publications & Service</SectionTitle>
        <div className="space-y-6">
          {resumeData.publications.map((p) => (
            <div key={p.title}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-medium">{p.title}</p>
                <span className="text-xs font-mono shrink-0" style={{ color: 'var(--color-secondary)' }}>
                  {p.venue} {p.year}
                </span>
              </div>
              <p className="text-sm mt-1" style={{ color: 'var(--color-secondary)' }}>
                {p.authorship ? `${p.authorship}` : ''}
                {p.note ? `${p.authorship ? ' · ' : ''}${p.note}` : ''}
              </p>

              {/* Optional links (only render if you later fill them) */}
              {p.links && (p.links.paper || p.links.project || p.links.bibtex) && (
                <div className="flex gap-3 mt-2 text-sm">
                  {p.links.paper && (
                    <a className="link-underline" href={p.links.paper} target="_blank" rel="noreferrer">
                      Paper
                    </a>
                  )}
                  {p.links.project && (
                    <a className="link-underline" href={p.links.project} target="_blank" rel="noreferrer">
                      Project
                    </a>
                  )}
                  {p.links.bibtex && (
                    <a className="link-underline" href={p.links.bibtex} target="_blank" rel="noreferrer">
                      BibTeX
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-8">
          {resumeData.education.map((edu) => (
            <div key={edu.school + edu.degree}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h4 className="font-medium text-sm">{edu.degree}</h4>
                {edu.dates && (
                  <span className="text-xs font-mono shrink-0" style={{ color: 'var(--color-secondary)' }}>
                    {edu.dates}
                  </span>
                )}
              </div>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                {edu.school}
                {edu.location ? ` · ${edu.location}` : ''}
              </p>
              {edu.note && (
                <p className="text-sm mt-1" style={{ color: 'var(--color-secondary)' }}>
                  {edu.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}