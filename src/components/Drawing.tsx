import { useState } from 'react'
import { drawings, type Drawing as DrawingItem } from '../data/drawings'
import { icons } from './links'
import { Lightbox, PageIntro } from './ui'

function timeDrawing(): string {
  const start = new Date(2026, 4, 1) // May 2026
  const now = new Date()
  const totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  if (totalMonths < 1) return 'less than a month'
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const y = years ? `${years} year${years > 1 ? 's' : ''}` : ''
  const m = months ? `${months} month${months > 1 ? 's' : ''}` : ''
  return [y, m].filter(Boolean).join(' and ')
}

export default function Drawing() {
  const [lightbox, setLightbox] = useState<DrawingItem>()

  return (
    <div className="pb-24">
      <PageIntro title="Drawing">
        <p>
          <strong className="font-semibold text-forest">{drawings.length} {drawings.length === 1 ? 'drawing' : 'drawings'}</strong> and{' '}
          <strong className="font-semibold text-forest">{timeDrawing()}</strong> of practice so far.
        </p>
        <p className="mt-3">
          Right now I'm working on realistic portraits in pencil.
        </p>
      </PageIntro>

      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {drawings.map(drawing => (
          <li key={drawing.id}>
            <button
              type="button"
              onClick={() => setLightbox(drawing)}
              className="group block w-full cursor-zoom-in text-left"
              aria-label={`View ${drawing.title} full size`}
            >
              <div className="lift aspect-square overflow-hidden rounded-2xl bg-paper">
                <img src={drawing.src} alt="" className="h-full w-full object-cover" draggable={false} />
              </div>
              <h2 className="mt-4 font-sans text-lg font-semibold group-hover:text-tomato transition-colors">{drawing.title}</h2>
            </button>
            <p className="text-[15px] text-mute">{drawing.medium} · {drawing.date}</p>
            {drawing.description && (
              <p className="mt-2 text-[17px] leading-relaxed text-mute">
                {drawing.description}
                {drawing.link && (
                  <>
                    {' '}
                    <a href={drawing.link.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-0.5">
                      {drawing.link.label} <icons.external size={13} />
                    </a>
                  </>
                )}
              </p>
            )}
          </li>
        ))}
      </ul>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.title}
          caption={<><span className="font-semibold text-white">{lightbox.title}</span> · {lightbox.medium} · {lightbox.date}</>}
          onClose={() => setLightbox(undefined)}
        />
      )}
    </div>
  )
}
