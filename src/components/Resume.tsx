import { Link } from 'react-router-dom'
import { experience, education } from '../data/resume'

export default function Resume() {
  return (
    <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
      <Link to="/" className="link-underline text-sm mb-8 inline-block">
        &larr; Back
      </Link>
      <h2 className="text-2xl font-semibold tracking-tight mb-8">Resume</h2>

      <div className="mb-12">
        <h3 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent)' }}>
          Experience
        </h3>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.company + exp.role}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h4 className="font-medium">{exp.role}</h4>
                <span className="text-xs font-mono shrink-0" style={{ color: 'var(--color-secondary)' }}>
                  {exp.period}
                </span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--color-secondary)' }}>
                {exp.company}
              </p>
              <ul className="space-y-1">
                {exp.description.map((d, i) => (
                  <li key={i} className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent)' }}>
          Education
        </h3>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.school}>
              <h4 className="font-medium text-sm mb-1">{edu.degree}</h4>
              <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
                {edu.school}
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
