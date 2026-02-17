import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="work" className="py-16">
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Selected Work</h2>
      <p className="text-sm mb-8" style={{ color: 'var(--color-secondary)' }}>
        Click a project to expand the full case study.
      </p>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
