import { useState } from 'react'
import { Link } from 'react-router-dom'
import { stats, styleRatings, photos, gyms } from '../data/bouldering'

function timeClimbing(): string {
  const start = new Date(2025, 1, 1) // Feb 2025
  const now = new Date()
  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  if (years === 0) return `${months}mo`
  if (months === 0) return `${years}yr`
  return `${years}yr ${months}mo`
}

function RadarChart() {
  const size = 300
  const cx = size / 2
  const cy = size / 2
  const maxR = size / 2 - 48
  const n = styleRatings.length
  const levels = 5
  const maxVal = 10

  const angle = (i: number) => (2 * Math.PI * i) / n - Math.PI / 2

  const point = (value: number, i: number) => {
    const r = (value / maxVal) * maxR
    return {
      x: cx + r * Math.cos(angle(i)),
      y: cy + r * Math.sin(angle(i)),
    }
  }

  const gridPoints = (level: number) =>
    styleRatings
      .map((_, i) => {
        const v = (level / levels) * maxVal
        const p = point(v, i)
        return `${p.x},${p.y}`
      })
      .join(' ')

  const dataPoints = styleRatings
    .map(({ value }, i) => {
      const p = point(value, i)
      return `${p.x},${p.y}`
    })
    .join(' ')

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-xs mx-auto"
      aria-label="Style ratings radar chart"
    >
      {/* Grid rings */}
      {Array.from({ length: levels }, (_, lvl) => lvl + 1).map((lvl) => (
        <polygon
          key={lvl}
          points={gridPoints(lvl)}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
        />
      ))}

      {/* Axis lines */}
      {styleRatings.map((_, i) => {
        const p = point(maxVal, i)
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="var(--color-border)"
            strokeWidth="1"
          />
        )
      })}

      {/* Data polygon */}
      <polygon
        points={dataPoints}
        fill="var(--color-accent)"
        fillOpacity="0.2"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Data dots */}
      {styleRatings.map(({ value }, i) => {
        const p = point(value, i)
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="var(--color-accent)"
          />
        )
      })}

      {/* Labels */}
      {styleRatings.map(({ label }, i) => {
        const labelR = maxR + 22
        const a = angle(i)
        const lx = cx + labelR * Math.cos(a)
        const ly = cy + labelR * Math.sin(a)
        const anchor =
          Math.abs(Math.cos(a)) < 0.1
            ? 'middle'
            : Math.cos(a) > 0
            ? 'start'
            : 'end'
        return (
          <text
            key={i}
            x={lx}
            y={ly}
            textAnchor={anchor}
            dominantBaseline="middle"
            fontSize="10"
            fontFamily="var(--font-mono, monospace)"
            fill="var(--color-secondary)"
          >
            {label}
          </text>
        )
      })}

      {/* Center dot */}
      <circle cx={cx} cy={cy} r="3" fill="var(--color-border)" />
    </svg>
  )
}

export default function Bouldering() {
  const [lightbox, setLightbox] = useState<string | undefined>(undefined)

  return (
    <>
    <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
      <Link to="/" className="link-underline text-sm mb-8 inline-block">
        &larr; Back
      </Link>

      {/* <h1 className="text-4xl font-semibold tracking-tight mb-3">Bouldering</h1> */}
      
      <h2 className="text-2xl font-semibold tracking-tight mb-8">Bouldering</h2>
      {/* <p className="text-lg mb-8" style={{ color: 'var(--color-secondary)' }}>
        Bouldering is my favorite way to think with my body. I like studying a route, planning moves, and slowly improving each attempt. It teaches patience and builds a kind of strength you don’t always see from the outside. Always happy to climb together or exchange beta.
      </p> */}
      <p className="text-base mb-8" style={{ color: 'var(--color-secondary)' }}>
        Bouldering is my favorite way to think with my body. I like studying a route, planning moves, and slowly improving each attempt. It teaches patience and builds a kind of strength you don’t always see from the outside. Always happy to climb together or exchange beta.
      </p>

      {/* Instagram Link */}
      <div className="flex items-center gap-3 mb-12">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-secondary)' }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <div>
            <a
              href={`https://instagram.com/${stats.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium"
            >
              @{stats.instagram}
            </a>
            <p className="text-xs mt-0.5" style={{ color: 'var(--color-secondary)' }}>
              Follow my climbing account on Instagram
            </p>
          </div>
        </div>

      {/* Stats */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent)' }}>
          Stats
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Highest Grade',  value: stats.highestGrade },
            { label: 'Ape Index',  value: stats.apeIndex },
            { label: 'Current Home Gym',  value: stats.homegym },
            { label: 'Time Climbing',  value: timeClimbing() },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-xl p-4"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <p className="text-2xl font-semibold mb-1">{value}</p>
              <p className="text-xs" style={{ color: 'var(--color-secondary)' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Style Radar */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--color-accent)' }}>
          Style Profile
        </h2>
        <p className="text-xs mb-8" style={{ color: 'var(--color-secondary)' }}>
          Self-rated climbing style on a 0–10 scale.
        </p>
        <RadarChart />
      </section>

      {/* Photo Gallery */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent)' }}>
          Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {photos.map((photo) => {
            const src = photo.src
            return (
            <div key={photo.id} className="group">
              <div
                onClick={() => src && setLightbox(src)}
                className="aspect-[4/5] rounded-lg flex items-end p-3 relative overflow-hidden transition-transform duration-200 ease-out group-hover:scale-[1.03] group-hover:shadow-lg"
                style={{ backgroundColor: photo.color, cursor: src ? 'zoom-in' : 'default' }}
              >
                {src ? (
                  <img
                    src={src}
                    alt={photo.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </div>
                )}
                <div className="relative z-10 w-full">
                  <span className="text-xs font-mono font-medium text-white/90 bg-black/30 px-1.5 py-0.5 rounded">
                    {photo.grade}
                  </span>
                </div>
              </div>
              <p className="text-xs mt-1.5 truncate" style={{ color: 'var(--color-secondary)' }}>
                {photo.caption}
              </p>
              <p className="text-xs font-mono" style={{ color: 'var(--color-secondary)', opacity: 0.6 }}>
                {photo.location}
              </p>
            </div>
          )})}
        </div>
      </section>

      {/* Gyms Visited */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent)' }}>
          Gyms I've Visited
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {gyms.map((gym) => (
            <div
              key={gym.name}
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" style={{ color: 'var(--color-accent)' }}>
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{gym.name}</p>
                <p className="text-xs truncate" style={{ color: 'var(--color-secondary)' }}>
                  {gym.city} · {gym.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>

    {/* Lightbox */}
    {lightbox && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
        onClick={() => setLightbox(undefined)}
      >
        <img
          src={lightbox}
          alt="Full size"
          className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={() => setLightbox(undefined)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    )}
    </>
  )
}
