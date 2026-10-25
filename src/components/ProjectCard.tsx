import { useState } from 'react'
import type { Project } from '../data/projects'
import { fitClass } from './media'
import { icons, ext } from './links'
import { Lightbox, Tag } from './ui'

function DetailMedia({ src, alt, rows, poster, onOpen }: { src: string; alt: string; rows?: number; poster?: string; onOpen: (src: string) => void }) {
  const [wide, setWide] = useState(false)
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src)

  return (
    <div
      className="overflow-hidden rounded-xl bg-paper"
      style={{ gridColumn: wide ? '1 / -1' : undefined, gridRow: rows && rows > 1 ? `span ${rows}` : undefined }}
    >
      {isVideo ? (
        <video
          src={src}
          poster={poster}
          className="h-full w-full object-cover"
          controls
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={e => {
            const v = e.currentTarget
            if (v.videoWidth / v.videoHeight > 1.4) setWide(true)
          }}
        />
      ) : (
        <button type="button" className="focus-inset block h-full w-full cursor-zoom-in" onClick={() => onOpen(src)} aria-label={`Enlarge ${alt}`}>
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onLoad={e => {
              const img = e.currentTarget
              if (img.naturalWidth / img.naturalHeight > 1.4) setWide(true)
            }}
          />
        </button>
      )}
    </div>
  )
}

export default function ProjectCard({ project, defaultExpanded = false }: { project: Project; defaultExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  // Gallery media mounts on first open so collapsed cards don't download it.
  const [opened, setOpened] = useState(defaultExpanded)
  const [lightbox, setLightbox] = useState<string>()
  const sectionsId = `${project.id}-case-study`
  const title = project.title

  const sections = [
    { label: 'Problem', value: project.problem },
    { label: 'Approach', value: project.approach },
    { label: 'Architecture', value: project.architecture },
    { label: 'Results', value: project.results },
    { label: 'Reflection', value: project.reflection },
  ]

  return (
    <article id={project.id} className="border-t border-line py-10 sm:py-12">
      <div className={`grid gap-6 sm:gap-8 ${project.imageUrl ? 'md:grid-cols-[300px_minmax(0,1fr)] lg:gap-12' : ''}`}>
        {project.imageUrl && (
          <button
            type="button"
            onClick={() => setLightbox(project.imageUrl)}
            className="lift aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-paper"
            aria-label={`Enlarge image for ${title}`}
          >
            <img
              src={project.thumbUrl ?? project.imageUrl}
              alt=""
              loading="lazy"
              decoding="async"
              className={`h-full w-full ${fitClass(project)}`}
            />
          </button>
        )}

        <div className="min-w-0">
          <h2 className="text-forest text-2xl sm:text-[1.75rem] font-bold leading-[1.15] tracking-[-0.015em]">
            {title}
          </h2>
          {project.affiliation && <p className="mt-1.5 text-[0.9375rem] font-medium text-mute">{project.affiliation}</p>}
          <p className="mt-3 max-w-[66ch] text-lg leading-relaxed">{project.subtitle}</p>

          <div className="mt-4 space-y-3 max-w-[70ch] text-[1.0625rem] leading-relaxed text-mute">
            {project.description.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.9375rem] font-semibold">
            <button
              type="button"
              onClick={() => { setExpanded(e => !e); setOpened(true) }}
              aria-expanded={expanded}
              aria-controls={sectionsId}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-forest ring-[1.5px] ring-inset ring-forest transition-colors hover:bg-forest-tint"
            >
              {expanded ? 'Hide case study' : 'Read case study'}
              <span className={`transition-transform duration-300 motion-reduce:transition-none ${expanded ? 'rotate-180' : ''}`}><icons.chevron /></span>
            </button>
            {project.codeUrl && (
              <a href={project.codeUrl} {...ext} className="inline-flex items-center gap-1.5 text-forest hover:text-tomato transition-colors">
                <icons.github size={16} /> Code
              </a>
            )}
            {project.pdfUrl && (
              <a href={project.pdfUrl} {...ext} className="inline-flex items-center gap-1 text-forest hover:text-tomato transition-colors">
                {project.pdfLabel ?? 'Report PDF'} <icons.external />
              </a>
            )}
            {project.videoUrl && (
              <a href={project.videoUrl} {...ext} className="inline-flex items-center gap-1 text-forest hover:text-tomato transition-colors">
                Video <icons.external />
              </a>
            )}
          </div>
        </div>
      </div>

      <div id={sectionsId} className={`expand-content ${expanded ? 'expanded' : ''}`} inert={!expanded}>
        <div className="expand-inner">
          <dl className="mt-10 grid gap-x-12 gap-y-1.5 rounded-3xl bg-paper p-6 sm:p-10 md:grid-cols-[160px_minmax(0,1fr)] md:gap-y-6">
            {sections.map(({ label, value }, i) => (
              <div key={label} className="contents">
                <dt className={`font-display text-lg font-bold text-forest md:mt-0 ${i > 0 ? 'mt-5' : ''}`}>{label}</dt>
                <dd className="max-w-[72ch] text-[1.0625rem] leading-[1.7] text-mute">{value}</dd>
              </div>
            ))}
            {opened && project.detailImages && project.detailImages.length > 0 && (
              <div className="contents">
                <dt className="mt-5 font-display text-lg font-bold text-forest md:mt-0">Gallery</dt>
                <dd className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.detailImages.map((item, i) => {
                    const src = typeof item === 'string' ? item : item.src
                    const rows = typeof item === 'string' ? undefined : item.rows
                    const poster = typeof item === 'string' ? undefined : item.poster
                    return <DetailMedia key={src} src={src} rows={rows} poster={poster} alt={`${title}, figure ${i + 1}`} onOpen={setLightbox} />
                  })}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      {lightbox && <Lightbox src={lightbox} alt={title} caption={title} onClose={() => setLightbox(undefined)} />}
    </article>
  )
}
