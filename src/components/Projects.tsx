import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [showBackTop, setShowBackTop] = useState(false)

  const tagCounts = projects.reduce<Record<string, number>>((acc, p) => {
    p.tags.forEach(t => { acc[t] = (acc[t] || 0) + 1 })
    return acc
  }, {})
  const allTags = Object.entries(tagCounts)
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)

  const filtered = activeTag ? projects.filter(p => p.tags.includes(activeTag)) : projects

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20 page-animate">
      <Link to="/" className="link-underline text-sm mb-8 inline-block">
        &larr; Back
      </Link>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Projects</h2>
      <p className="text-sm mb-1" style={{ color: 'var(--color-secondary)' }}>
        Click a project to expand the full case study.
      </p>
      <p className="text-sm mb-6" style={{ color: 'var(--color-secondary)' }}>
        Also see my{' '}
        <Link to="/publications" className="link-underline font-medium" style={{ color: 'var(--color-accent)' }}>
          publications &rarr;
        </Link>
      </p>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className="text-xs font-mono px-3 py-1.5 rounded-full transition-colors cursor-pointer"
          style={{
            backgroundColor: activeTag === null ? 'var(--color-text)' : 'var(--color-surface)',
            color: activeTag === null ? 'var(--color-bg)' : 'var(--color-secondary)',
          }}
        >
          All ({projects.length})
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className="text-xs font-mono px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            style={{
              backgroundColor: activeTag === tag ? 'var(--color-text)' : 'var(--color-surface)',
              color: activeTag === tag ? 'var(--color-bg)' : 'var(--color-secondary)',
            }}
          >
            {tag} ({tagCounts[tag]})
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {showBackTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all cursor-pointer"
          style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  )
}
