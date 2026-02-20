import { useState } from 'react'
import type { Project } from '../data/projects'

function DetailImage({ src, alt, rows }: { src: string; alt: string; rows?: number }) {
  const [wide, setWide] = useState(false)
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src)
  const rowSpan = rows ?? 1

  return (
    <div
      className="rounded-lg overflow-hidden border"
      style={{
        borderColor: 'var(--color-border)',
        gridColumn: wide ? '1 / -1' : undefined,
        gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
      }}
    >
      {isVideo ? (
        <video
          src={src}
          className="w-full h-full"
          style={{ objectFit: 'cover' }}
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
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={e => {
            const img = e.currentTarget
            if (img.naturalWidth / img.naturalHeight > 1.4) setWide(true)
          }}
        />
      )}
    </div>
  )
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className="rounded-xl overflow-hidden transition-colors"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="p-5">
        <div className="flex items-center gap-5">
          {/* Square thumbnail on the left */}
          {project.imageUrl && (
            <div
              className="shrink-0 w-44 h-44 rounded-lg overflow-hidden border-4"
              style={{
                backgroundColor: 'var(--color-surface-hover)',
                borderColor: 'var(--color-border)',
              }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-base mb-0.5">{project.title}</h3>
            <p className="text-xs font-mono mb-1" style={{ color: 'var(--color-accent)' }}>
              {project.subtitle}
            </p>

            {project.affiliation && (
              <p className="text-xs mb-3" style={{ color: 'var(--color-secondary)' }}>
                {project.affiliation}
              </p>
            )}

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-secondary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2 mb-4">
              {project.description.map((para, i) => (
                <p key={i} className="text-xs leading-relaxed" style={{ color: 'var(--color-secondary)' }}>
                  {para}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors"
                style={{ color: 'var(--color-accent)', background: 'none', border: 'none', padding: 0 }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform"
                  style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                {expanded ? 'Hide' : 'Expand'}
              </button>

              {/* External links */}
              <div className="flex items-center gap-3">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Source code"
                    className="transition-colors"
                    style={{ color: 'var(--color-secondary)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#181717')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
                    onClick={e => e.stopPropagation()}
                  >
                    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Video"
                    className="transition-colors"
                    style={{ color: 'var(--color-secondary)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FF0000')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
                    onClick={e => e.stopPropagation()}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                )}
                {project.pdfUrl && (
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="PDF"
                    className="transition-colors"
                    style={{ color: 'var(--color-secondary)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E5352A')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-secondary)')}
                    onClick={e => e.stopPropagation()}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="9" y1="13" x2="15" y2="13"/>
                      <line x1="9" y1="17" x2="15" y2="17"/>
                      <polyline points="9 9 10 9"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Expandable case study */}
        <div className={`expand-content ${expanded ? 'expanded' : ''}`}>
          <div className="expand-inner">
            <div className="mt-5 pt-5 space-y-4 text-xs" style={{ borderTop: '1px solid var(--color-border)' }}>
              {[
                { label: 'Problem', value: project.problem },
                { label: 'Approach', value: project.approach },
                { label: 'Architecture', value: project.architecture },
                { label: 'Results', value: project.results },
                { label: 'Reflection', value: project.reflection },
              ].map(({ label, value }) => (
                <div key={label}>
                  <h4 className="font-medium text-xs uppercase tracking-wider mb-1.5" style={{ color: 'var(--color-accent)' }}>
                    {label}
                  </h4>
                  <p style={{ color: 'var(--color-secondary)' }}>{value}</p>
                </div>
              ))}

              {project.detailImages && project.detailImages.length > 0 && (
                <div>
                  <h4 className="font-medium text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--color-accent)' }}>
                    Gallery
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.detailImages.map((item, i) => {
                      const src = typeof item === 'string' ? item : item.src
                      const rows = typeof item === 'string' ? undefined : item.rows
                      return <DetailImage key={i} src={src} alt={`${project.title} detail ${i + 1}`} rows={rows} />
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
