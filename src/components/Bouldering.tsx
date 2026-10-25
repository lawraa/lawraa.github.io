import { lazy, Suspense, useState } from 'react'
import { stats, styleRatings, photos, gyms, type ClimbingPhoto } from '../data/bouldering'
import { icons, ext } from './links'
import { Lightbox, PageIntro, Tag, SectionHeading } from './ui'
import { focusOpener } from './focusOpener'
import { durationSince } from '../lib/duration'
import ErrorBoundary from './ErrorBoundary'

// Leaflet is only needed here, so it loads as its own chunk.
const BoulderingMap = lazy(() => import('./BoulderingMap'))

function RadarChart() {
  const size = 320
  const c = size / 2
  const maxR = size / 2 - 56
  const n = styleRatings.length
  const angle = (i: number) => (2 * Math.PI * i) / n - Math.PI / 2
  const point = (value: number, i: number) => {
    const r = (value / 10) * maxR
    return { x: c + r * Math.cos(angle(i)), y: c + r * Math.sin(angle(i)) }
  }
  const ring = (level: number) => styleRatings.map((_, i) => { const p = point(level * 2, i); return `${p.x},${p.y}` }).join(' ')
  const data = styleRatings.map(({ value }, i) => { const p = point(value, i); return `${p.x},${p.y}` }).join(' ')

  return (
    // The viewBox is padded 64 units each side for the labels. The SVG scales with its box,
    // so label size is set per breakpoint to land near 14px on screen.
    <svg viewBox={`-64 0 ${size + 128} ${size}`} className="w-full max-w-[440px] [&_text]:text-[23px] sm:[&_text]:text-[14px]" role="img"
      aria-label={`Self-rated climbing style out of 10: ${styleRatings.map(r => `${r.label} ${r.value}`).join(', ')}`}>
      {[1, 2, 3, 4, 5].map(l => <polygon key={l} points={ring(l)} className="fill-none stroke-line forced-colors:stroke-[GrayText]" strokeWidth="1" />)}
      {styleRatings.map((_, i) => { const p = point(10, i); return <line key={i} x1={c} y1={c} x2={p.x} y2={p.y} className="stroke-line forced-colors:stroke-[GrayText]" strokeWidth="1" /> })}
      <polygon points={data} className="fill-butter stroke-forest" fillOpacity="0.55" strokeWidth="2.5" strokeLinejoin="round" />
      {styleRatings.map(({ value }, i) => { const p = point(value, i); return <circle key={i} cx={p.x} cy={p.y} r="4.5" className="fill-tomato stroke-white" strokeWidth="1.5" /> })}
      {styleRatings.map(({ label, value }, i) => {
        const a = angle(i)
        const lx = c + (maxR + 24) * Math.cos(a)
        const ly = c + (maxR + 24) * Math.sin(a)
        const anchor = Math.abs(Math.cos(a)) < 0.1 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end'
        return (
          <text key={label} x={lx} y={ly} textAnchor={anchor} dy="0.35em" className="fill-mute forced-colors:fill-[CanvasText]">
            {label} <tspan fontWeight="700" className="fill-ink forced-colors:fill-[CanvasText]">{value}</tspan>
          </text>
        )
      })}
    </svg>
  )
}

function MapUnavailable() {
  return (
    <div className="flex h-[360px] flex-col items-center justify-center gap-4 rounded-3xl bg-forest-tint px-6 text-center sm:h-[min(440px,75svh)]">
      <p className="text-mute">The map couldn't load.</p>
      <button
        type="button"
        onClick={() => location.reload()}
        className="cursor-pointer rounded-full px-4 py-2 text-meta font-semibold text-forest ring-[1.5px] ring-inset ring-forest transition-colors hover:bg-paper"
      >
        Try again
      </button>
    </div>
  )
}

export default function Bouldering() {
  const [lightbox, setLightbox] = useState<ClimbingPhoto>()
  const countries = new Set(gyms.map(g => g.country)).size

  return (
    <div className="pb-24">
      <PageIntro title="Bouldering">
        <p>
          <strong className="font-semibold text-forest">{gyms.length} gyms</strong> in{' '}
          <strong className="font-semibold text-forest">{countries} countries</strong>, a peak grade of{' '}
          <strong className="font-semibold text-forest">{stats.highestGrade}</strong>, and{' '}
          <strong className="font-semibold text-forest">{durationSince(new Date(2025, 1, 1))}</strong> on the wall.
        </p>
        <p className="mt-3">
          I like studying a route, planning the moves, and getting a little further each attempt. Always happy to climb
          together or trade beta.
        </p>
        <a
          href={`https://instagram.com/${stats.instagram}`}
          {...ext}
          className="mt-5 inline-flex items-center gap-2 text-[1.0625rem] font-semibold text-forest hover:text-tomato transition-colors"
        >
          <icons.instagram /> @{stats.instagram}
        </a>
      </PageIntro>

      <section aria-labelledby="gallery" className="pb-20 sm:pb-24">
        <SectionHeading id="gallery">On the wall</SectionHeading>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <li key={photo.id}>
              <button
                type="button"
                onClick={e => { focusOpener(e); setLightbox(photo) }}
                className="peer lift block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-forest-tint"
                aria-label={`Enlarge photo: ${photo.caption}`}
              >
                <img
                  src={photo.thumbUrl ?? photo.src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading={i < 3 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  decoding="async"
                />
              </button>
              <p className="mt-3 font-semibold leading-snug transition-colors peer-hover:text-tomato">{photo.caption}</p>
              <p className="mt-0.5 text-meta text-mute">{photo.location}</p>
              <div className="mt-2"><Tag>{photo.grade}</Tag></div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="style" className="grid items-start gap-8 pb-20 sm:pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:pt-8">
          <SectionHeading id="style">Style profile</SectionHeading>
          <p className="mt-4 text-[1.0625rem] text-mute">Self-rated, out of 10.</p>
        </div>
        <div className="flex justify-center rounded-3xl bg-paper p-4 sm:p-8"><RadarChart /></div>
      </section>

      <section aria-labelledby="gyms">
        <SectionHeading id="gyms" className="mb-6">Gyms I've climbed</SectionHeading>
        {/* Placeholder matching the chips (two rows on phones), the map, and the caption and list row below it */}
        <ErrorBoundary fallback={<MapUnavailable />}>
          <Suspense fallback={<><div className="mb-4 h-[5.5rem] sm:h-10" /><div className="h-[360px] rounded-3xl bg-forest-tint sm:h-[min(440px,75svh)]" /><div className="h-[7.5rem]" /></>}>
            <BoulderingMap />
          </Suspense>
        </ErrorBoundary>
      </section>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.caption}
          caption={<><span className="font-semibold text-white">{lightbox.caption}</span> · {lightbox.location}</>}
          onClose={() => setLightbox(undefined)}
        />
      )}
    </div>
  )
}
