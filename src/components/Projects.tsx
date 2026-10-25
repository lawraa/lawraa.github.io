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
  .filter(([, count]) => count >= 3)
  .sort((a, b) => b[1] - a[1])
  .map(([tag]) => tag)

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const { hash } = useLocation()
  const target = hash.slice(1)

  // Wait for web fonts so the layout above the card has settled, then jump without animating.
  useEffect(() => {
    if (!target) return
    let cancelled = false
    document.fonts.ready.then(() => requestAnimationFrame(() => {
      const card = document.getElementById(target)
      if (cancelled || !card) return
      card.scrollIntoView({ block: 'start', behavior: 'instant' })
      // Reading and Tab continue from the card, not from the top of the page
      card.focus({ preventScroll: true })
    }))
    return () => { cancelled = true }
  }, [target])

  const filtered = activeTag ? projects.filter(p => p.tags.includes(activeTag)) : projects

  return (
    <div className="pb-24">
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

      <p role="status" className="sr-only">Showing {filtered.length} of {projects.length} projects{activeTag && ` tagged ${activeTag}`}</p>
      <div className="border-b border-line">
        {filtered.map(project => (
          // Keyed on being the target so a hash change on an open page remounts that card expanded
          <ProjectCard key={project.id === target ? `${project.id}#target` : project.id} project={project} defaultExpanded={project.id === target} />
        ))}
      </div>
    </div>
  )
}
