import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { featuredProjects } from '../data/featured'
import { fitClass } from './media'
import { icons } from './links'
import { Tag, SectionHeading } from './ui'

// A bad id is caught by tests/featured.test.ts; at runtime the card is skipped rather than breaking the page
const featured = featuredProjects.flatMap(f => {
  const project = projects.find(p => p.id === f.id)
  return project ? [{ ...f, project }] : []
})

export default function FeaturedProjects() {
  return (
    <section className="pb-24" aria-labelledby="selected-work">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <SectionHeading id="selected-work">Selected work</SectionHeading>
        <Link to="/work" className="inline-flex items-center gap-1.5 text-meta font-semibold text-tomato hover:underline underline-offset-4">
          All {projects.length} projects <icons.arrow size={15} />
        </Link>
      </div>

      <ul className="mt-6 grid gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-5 lg:gap-x-6">
        {featured.map(({ project, title, field, tone }) => (
          <li key={project.id} className="flex">
            {/* Named by the title alone; the subtitle and field tag become its description */}
            <Link
              to={`/work#${project.id}`}
              aria-labelledby={`featured-${project.id}`}
              aria-describedby={`featured-${project.id}-desc`}
              className="group flex w-full flex-col"
            >
              <div className="lift aspect-[16/10] overflow-hidden rounded-2xl bg-paper">
                {project.imageUrl && (
                  <img
                    src={project.thumbUrl ?? project.imageUrl}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full ${fitClass(project)}`}
                  />
                )}
              </div>
              <h3 id={`featured-${project.id}`} className="mt-4 font-sans text-lg font-semibold leading-snug group-hover:text-tomato transition-colors">
                {title}
              </h3>
              <p id={`featured-${project.id}-desc`} className="mt-1 text-meta leading-relaxed text-mute">{project.subtitle}</p>
              <div className="mt-auto pt-3"><Tag tone={tone}>{field}</Tag></div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
