import { lazy, Suspense, useState } from 'react'
import { stats, styleRatings, photos, gyms } from '../data/bouldering'
import { icons } from './links'
import { Lightbox, PageIntro, Tag } from './ui'

// Leaflet is only needed here, so it loads as its own chunk.
const BoulderingMap = lazy(() => import('./BoulderingMap'))

function timeClimbing(): string {
  const start = new Date(2025, 1, 1) // Feb 2025
  const now = new Date()
  const totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const y = years ? `${years} year${years > 1 ? 's' : ''}` : ''
  const m = months ? `${months} month${months > 1 ? 's' : ''}` : ''
  return [y, m].filter(Boolean).join(' and ')
}

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
    <svg viewBox={`-64 0 ${size + 128} ${size}`} className="w-full max-w-[440px] [&_text]:text-[23px] sm:[&_text]:text-[14px]" role="img"
      aria-label={`Self-rated climbing style out of 10: ${styleRatings.map(r => `${r.label} ${r.value}`).join(', ')}`}>
      {[1, 2, 3, 4, 5].map(l => <polygon key={l} points={ring(l)} fill="none" stroke="#cfd6cf" strokeWidth="1" />)}
      {styleRatings.map((_, i) => { const p = point(10, i); return <line key={i} x1={c} y1={c} x2={p.x} y2={p.y} stroke="#cfd6cf" strokeWidth="1" /> })}
      <polygon points={data} fill="#f3d36b" fillOpacity="0.55" stroke="#1f4d3a" strokeWidth="2.5" strokeLinejoin="round" />
      {styleRatings.map(({ value }, i) => { const p = point(value, i); return <circle key={i} cx={p.x} cy={p.y} r="4.5" fill="#bf3a24" stroke="#fff" strokeWidth="1.5" /> })}
      {styleRatings.map(({ label, value }, i) => {
        const a = angle(i)
        const lx = c + (maxR + 24) * Math.cos(a)
        const ly = c + (maxR + 24) * Math.sin(a)
        const anchor = Math.abs(Math.cos(a)) < 0.1 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end'
        return (
          <text key={label} x={lx} y={ly} textAnchor={anchor} dominantBaseline="middle" fontFamily="Hanken Grotesk, sans-serif" fill="#525a55">
            {label} <tspan fontWeight="700" fill="#1a1d1b">{value}</tspan>
          </text>
        )
      })}
    </svg>
  )
}

export default function Bouldering() {
  const [lightbox, setLightbox] = useState<(typeof photos)[number]>()
  const countries = new Set(gyms.map(g => g.country)).size

  return (
    <div className="pb-24">
      <PageIntro title="Bouldering">
        <p>
          <strong className="font-semibold text-forest">{gyms.length} gyms</strong> in{' '}
          <strong className="font-semibold text-forest">{countries} countries</strong>, a peak grade of{' '}
          <strong className="font-semibold text-forest">{stats.highestGrade}</strong>, and{' '}
          <strong className="font-semibold text-forest">{timeClimbing()}</strong> on the wall.
        </p>
        <p className="mt-3">
          I like studying a route, planning the moves, and getting a little further each attempt. Always happy to climb
          together or trade beta.
        </p>
        <a
          href={`https://instagram.com/${stats.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-[17px] font-semibold text-forest hover:text-tomato transition-colors"
        >
          <icons.instagram /> @{stats.instagram}
        </a>
      </PageIntro>

      <section aria-labelledby="gallery" className="pb-20">
        <h2 id="gallery" className="text-forest text-3xl font-bold tracking-[-0.02em]">On the wall</h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-3">
          {photos.map(photo => (
            <li key={photo.id}>
              <button
                type="button"
                onClick={() => setLightbox(photo)}
                className="peer lift block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-forest-tint"
                aria-label={`Enlarge photo: ${photo.caption}`}
              >
                {photo.src && <img src={photo.thumb ?? photo.src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />}
              </button>
              <p className="mt-3 font-semibold leading-snug transition-colors peer-hover:text-tomato">{photo.caption}</p>
              <p className="mt-0.5 text-[15px] text-mute">{photo.location}</p>
              <div className="mt-2"><Tag>{photo.grade}</Tag></div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="style" className="grid items-start gap-8 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:pt-8">
          <h2 id="style" className="text-forest text-3xl font-bold tracking-[-0.02em]">Style profile</h2>
          <p className="mt-4 text-[17px] text-mute">Self-rated, out of 10.</p>
        </div>
        <div className="flex justify-center rounded-3xl bg-paper p-4 sm:p-8"><RadarChart /></div>
      </section>

      <section aria-labelledby="gyms">
        <h2 id="gyms" className="mb-6 text-forest text-3xl font-bold tracking-[-0.02em]">Gyms I've climbed</h2>
        <Suspense fallback={<div className="h-[420px] rounded-3xl bg-forest-tint sm:h-[500px]" />}>
          <BoulderingMap />
        </Suspense>
      </section>

      {lightbox?.src && (
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
