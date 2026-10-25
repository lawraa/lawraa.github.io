import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { icons } from './links'
import { Tag, type TagTone } from './ui'

const FEATURED: { id: string; field: string; tone: TagTone }[] = [
  { id: 'llm-personalized-assistive-design', field: 'LLMs × Robotics', tone: 'butter' },
  { id: 'emg-imu-quadruped', field: 'Embedded systems', tone: 'forest' },
  { id: 'colm-llm-discussion', field: 'Research · COLM 2024', tone: 'mint' },
]

export default function FeaturedProjects() {
  const featured = FEATURED.flatMap(f => {
    const project = projects.find(p => p.id === f.id)
    return project ? [{ ...f, project }] : []
  })

  return (
    <section className="pb-24" aria-labelledby="selected-work">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 id="selected-work" className="text-forest font-bold text-3xl sm:text-[34px] tracking-[-0.02em]">
          Selected work
        </h2>
        <Link to="/work" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-tomato hover:underline underline-offset-4">
          All {projects.length} projects <icons.arrow size={15} />
        </Link>
      </div>

      <ul className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map(({ project, field, tone }) => (
          <li key={project.id}>
            <Link to={`/work#${project.id}`} className="group block">
              <div className="lift aspect-[16/10] overflow-hidden rounded-2xl bg-paper">
                {project.imageUrl && (
                  <img
                    src={project.thumbUrl ?? project.imageUrl}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full ${project.thumbUrl ? 'object-contain' : project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
                  />
                )}
              </div>
              <h3 className="mt-4 font-sans text-lg font-semibold leading-snug group-hover:text-tomato transition-colors">
                {project.title.split(':')[0].replace(/ \(.*\)$/, '')}
              </h3>
              <p className="mt-1 text-[15px] leading-relaxed text-mute">{project.subtitle}</p>
              <div className="mt-3"><Tag tone={tone}>{field}</Tag></div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
