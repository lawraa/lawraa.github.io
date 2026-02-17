import { useState } from 'react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className="rounded-xl p-5 cursor-pointer transition-colors"
      style={{
        backgroundColor: 'var(--color-surface)',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = 'var(--color-surface)')
      }
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-semibold text-base mb-1">{project.title}</h3>
          <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
            {project.subtitle}
          </p>
        </div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 mt-1 transition-transform"
          style={{
            color: 'var(--color-secondary)',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-0.5 rounded"
            style={{
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-secondary)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={`expand-content ${expanded ? 'expanded' : ''}`}>
        <div className="expand-inner">
          <div className="mt-5 pt-5 space-y-4 text-sm" style={{ borderTop: '1px solid var(--color-border)' }}>
            {[
              { label: 'Problem', value: project.problem },
              { label: 'Approach', value: project.approach },
              { label: 'Architecture', value: project.architecture },
              { label: 'Results', value: project.results },
              { label: 'Lessons', value: project.lessons },
            ].map(({ label, value }) => (
              <div key={label}>
                <h4 className="font-medium text-xs uppercase tracking-wider mb-1.5" style={{ color: 'var(--color-accent)' }}>
                  {label}
                </h4>
                <p style={{ color: 'var(--color-secondary)' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
