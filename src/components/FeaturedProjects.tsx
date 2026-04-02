import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const FEATURED_IDS = [
  'llm-personalized-assistive-design',
  'emg-imu-quadruped',
  'colm-llm-discussion',
]

export default function FeaturedProjects() {
  const featured = FEATURED_IDS
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean) as typeof projects

  return (
    <section className="py-16 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
        <Link to="/work" className="link-underline text-sm">
          View all projects &rarr;
        </Link>
      </div>
      <div className="space-y-4">
        {featured.map(project => (
          <div
            key={project.id}
            className="rounded-xl p-5 flex flex-col sm:flex-row gap-5"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            {project.imageUrl && (
              <div
                className="shrink-0 w-full h-40 sm:w-36 sm:h-36 rounded-lg overflow-hidden border-2"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-hover)' }}
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-0.5">{project.title}</h3>
              {project.affiliation && (
                <p className="text-xs mb-1.5" style={{ color: 'var(--color-secondary)' }}>
                  {project.affiliation}
                </p>
              )}
              <p className="text-xs font-mono mb-3" style={{ color: 'var(--color-accent)' }}>
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-secondary)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
