import { useState } from 'react'
import { drawings, type Drawing as DrawingItem } from '../data/drawings'
import { icons, ext } from './links'
import { Lightbox, PageIntro } from './ui'
import { durationSince } from '../lib/duration'

export default function Drawing() {
  const [lightbox, setLightbox] = useState<DrawingItem>()

  return (
    <div className="pb-24">
      <PageIntro title="Drawing">
        <p>
          <strong className="font-semibold text-forest">{drawings.length} {drawings.length === 1 ? 'drawing' : 'drawings'}</strong> and{' '}
          <strong className="font-semibold text-forest">{durationSince(new Date(2026, 4, 1))}</strong> of practice so far.
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
              className="peer lift block aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl bg-paper"
              aria-label={`View ${drawing.title} full size`}
            >
              <img src={drawing.src} alt="" className="h-full w-full object-cover" draggable={false} loading="lazy" decoding="async" />
            </button>
            <h2 className="mt-4 font-sans text-lg font-semibold transition-colors peer-hover:text-tomato">{drawing.title}</h2>
            <p className="text-[0.9375rem] text-mute">{drawing.medium} · {drawing.date}</p>
            {drawing.description && (
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-mute">
                {drawing.description}
                {drawing.link && (
                  <>
                    {' '}
                    <a href={drawing.link.url} {...ext} className="link inline-flex items-center gap-0.5">
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
