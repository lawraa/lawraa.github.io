import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { stats, styleRatings, photos, gyms } from '../data/bouldering'
import BoulderingMap from './BoulderingMap'

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
      {Array.from({ length: levels }, (_, lvl) => lvl + 1).map((lvl) => (
        <polygon
          key={lvl}
          points={gridPoints(lvl)}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
        />
      ))}
      {styleRatings.map((_, i) => {
        const p = point(maxVal, i)
        return (
          <line
            key={i}
            x1={cx} y1={cy} x2={p.x} y2={p.y}
            stroke="var(--color-border)"
            strokeWidth="1"
          />
        )
      })}
      <polygon
        points={dataPoints}
        fill="var(--color-accent)"
        fillOpacity="0.2"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {styleRatings.map(({ value }, i) => {
        const p = point(value, i)
        return (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--color-accent)" />
        )
      })}
      {styleRatings.map(({ label }, i) => {
        const labelR = maxR + 22
        const a = angle(i)
        const lx = cx + labelR * Math.cos(a)
        const ly = cy + labelR * Math.sin(a)
        const anchor =
          Math.abs(Math.cos(a)) < 0.1 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end'
        return (
          <text
            key={i}
            x={lx} y={ly}
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
      <circle cx={cx} cy={cy} r="3" fill="var(--color-border)" />
    </svg>
  )
}

export default function Bouldering() {
  const [lightbox, setLightbox] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!lightbox) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(undefined) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  const countries = [...new Set(gyms.map(g => g.country))]

  return (
    <>
      <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="link-underline text-sm mb-8 inline-block">
          &larr; Back
        </Link>

        <h2 className="text-2xl font-semibold tracking-tight mb-3">Bouldering</h2>

        {/* Journey summary */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
          {[
            { n: String(gyms.length), label: 'gyms visited' },
            { n: String(countries.length), label: 'countries' },
            { n: stats.highestGrade, label: 'peak grade' },
            { n: timeClimbing(), label: 'climbing' },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="text-2xl font-semibold tracking-tight">{n}</p>
              <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--color-secondary)' }}>{label}</p>
            </div>
          ))}
        </div>

        <p className="text-base mb-6" style={{ color: 'var(--color-secondary)' }}>
          Bouldering is my favorite way to think with my body. I like studying a route, planning moves, and slowly improving each attempt. It teaches patience and builds a kind of strength you don't always see from the outside. Always happy to climb together or exchange beta.
        </p>

        {/* Instagram */}
        <div className="flex items-center gap-3 mb-14">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-secondary)' }}>
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

        {/* Style Radar */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>
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
              )
            })}
          </div>
        </section>

        {/* Gyms Map */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>
            Gyms I've Visited
          </h2>
          <p className="text-xs mb-6" style={{ color: 'var(--color-secondary)' }}>
            {gyms.length} gyms across {countries.length} countries. Use the tabs to zoom into each region.
          </p>
          <BoulderingMap />
        </section>
      </div>

      {/* Lightbox — portalled to body */}
      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
