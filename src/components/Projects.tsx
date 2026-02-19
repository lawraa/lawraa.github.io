import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
      <Link to="/" className="link-underline text-sm mb-8 inline-block">
        &larr; Back
      </Link>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Projects</h2>
      <p className="text-sm mb-8" style={{ color: 'var(--color-secondary)' }}>
        Click a project to expand the full case study.
      </p>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
