import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FEATURED_IDS = [
  'llm-personalized-assistive-design',
  'emg-imu-quadruped',
  'colm-llm-discussion',
]

export default function FeaturedProjects() {
  const ref = useScrollReveal()
  const featured = FEATURED_IDS
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean) as typeof projects

  return (
    <section className="py-16 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div ref={ref} className="reveal">
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>Projects</p>
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
            <Link to="/work" className="link-underline text-sm">
              View all &rarr;
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          {featured.map(project => (
            <div
              key={project.id}
              className="rounded-xl p-5 flex flex-col sm:flex-row gap-5 card"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              {project.imageUrl && (
                <div
                  className={`shrink-0 w-full h-40 sm:w-36 sm:h-36 rounded-lg overflow-hidden${project.imageFit === 'contain' ? ' p-2' : ''}`}
                  style={{ backgroundColor: 'var(--color-surface-hover)' }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  />
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
      </div>
    </section>
  )
}
