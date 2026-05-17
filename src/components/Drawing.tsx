import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { drawings } from '../data/drawings'

function timeDrawing(): string {
  const start = new Date(2026, 4, 1) // May 2026
  const now = new Date()
  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())
  if (totalMonths < 1) return '< 1mo'
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  if (years === 0) return `${months}mo`
  if (months === 0) return `${years}yr`
  return `${years}yr ${months}mo`
}

export default function Drawing() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string; medium: string; date: string } | null>(null)

  useEffect(() => {
    if (!lightbox) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  return (
    <>
      <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20 page-animate">
        <Link to="/" className="link-underline text-sm mb-8 inline-block">
          &larr; Back
        </Link>

        <h2 className="text-2xl font-semibold tracking-tight mb-3">Drawing</h2>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-x-8 gap-y-3 mb-6 pb-6 border-b"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {[
            { n: String(drawings.length), label: drawings.length === 1 ? 'drawing' : 'drawings' },
            { n: timeDrawing(), label: 'practicing' },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="text-2xl font-semibold tracking-tight">{n}</p>
              <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--color-secondary)' }}>{label}</p>
            </div>
          ))}
        </div>

        <p className="text-base mb-14" style={{ color: 'var(--color-secondary)' }}>
          I recently started drawing as a way to slow down and pay closer attention to the world. Right now I'm focusing on drawing realistic portraits, but I hope to explore other subjects and styles over time.
          This is a living gallery; every piece here represents something I learned.
        </p>

        {/* Gallery */}
        <section>
          <h2
            className="text-xs font-mono uppercase tracking-wider mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {drawings.map((drawing) => (
              <div key={drawing.id} className="group flex flex-col gap-2">
                <button
                  onClick={() => setLightbox({ src: drawing.src, title: drawing.title, medium: drawing.medium, date: drawing.date })}
                  className="w-full aspect-square rounded-xl overflow-hidden relative card cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties}
                  aria-label={`View ${drawing.title} full size`}
                >
                  <img
                    src={drawing.src}
                    alt={drawing.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                    draggable={false}
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }}
                  >
                    <span className="text-xs font-mono text-white/90">{drawing.medium}</span>
                  </div>
                </button>

                <div>
                  <p className="text-sm font-medium leading-snug">{drawing.title}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--color-secondary)' }}>
                    {drawing.date}
                  </p>
                  {drawing.description && (
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--color-secondary)', opacity: 0.8 }}>
                      {drawing.description}
                      {drawing.link && (
                        <>
                          {' '}
                          <a
                            href={drawing.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {drawing.link.label} ↗
                          </a>
                        </>
                      )}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Placeholder slots so the grid doesn't look empty */}
            {drawings.length < 3 &&
              Array.from({ length: Math.min(3 - drawings.length, 5) }).map((_, i) => (
                <div key={`ph-${i}`} className="flex flex-col gap-2">
                  <div
                    className="w-full aspect-square rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: 'var(--color-border)' }}
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                    <span
                      className="text-xs font-mono"
                      style={{ color: 'var(--color-border)' }}
                    >
                      coming soon
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative flex flex-col items-center max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[78vh] max-w-[88vw] rounded-2xl object-contain shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-white/90">{lightbox.title}</p>
                <p className="text-xs font-mono text-white/50 mt-0.5">
                  {lightbox.medium} · {lightbox.date}
                </p>
              </div>
            </div>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>,
          document.body
        )}
    </>
  )
}
