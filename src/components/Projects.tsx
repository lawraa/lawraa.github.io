import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { pillClass, pillCountClass } from './pill'
import { PageIntro } from './ui'

const tagCounts = projects.reduce<Record<string, number>>((acc, p) => {
  p.tags.forEach(t => { acc[t] = (acc[t] || 0) + 1 })
  return acc
}, {})

const filterTags = Object.entries(tagCounts)
  .filter(([, count]) => count >= 2)
  .sort((a, b) => b[1] - a[1])
  .map(([tag]) => tag)

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const { hash } = useLocation()
  const target = hash.slice(1)

  useEffect(() => {
    if (!target) return
    const el = document.getElementById(target)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }))
  }, [target])

  const filtered = activeTag ? projects.filter(p => p.tags.includes(activeTag)) : projects

  return (
    <div className="pb-16">
      <PageIntro title="Projects">
        <p>
          Course, research and internship projects from Berkeley, National Taiwan University and industry. Papers are
          under <Link to="/publications" className="link">publications</Link>.
        </p>
      </PageIntro>

      <div className="flex flex-wrap gap-2 pb-8" role="group" aria-label="Filter projects by topic">
        <button onClick={() => setActiveTag(null)} className={pillClass(activeTag === null)} aria-pressed={activeTag === null}>
          All <span className={pillCountClass(activeTag === null)}>{projects.length}</span>
        </button>
        {filterTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={pillClass(activeTag === tag)}
            aria-pressed={activeTag === tag}
          >
            {tag} <span className={pillCountClass(activeTag === tag)}>{tagCounts[tag]}</span>
          </button>
        ))}
      </div>

      <p role="status" className="sr-only">Showing {filtered.length} of {projects.length} projects</p>
      <div className="border-b border-line">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} defaultExpanded={project.id === target} />
        ))}
      </div>
    </div>
  )
}
