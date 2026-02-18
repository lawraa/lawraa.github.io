import { Link } from 'react-router-dom'
import { stats, gradeDistribution, photos } from '../data/bouldering'

const maxCount = Math.max(...gradeDistribution.map((g) => g.count))

export default function Bouldering() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pt-32 pb-20">
      <Link
        to="/"
        className="link-underline text-sm mb-8 inline-block"
      >
        &larr; Back
      </Link>

      <h1 className="text-4xl font-semibold tracking-tight mb-3">Bouldering</h1>
      <p className="text-lg mb-12" style={{ color: 'var(--color-secondary)' }}>
        When I'm not building ML systems, I'm pulling on rocks. Bouldering is how I think about problems physically — read the sequence, commit to the move, adjust on the next attempt.
      </p>

      {/* Stats */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent)' }}>
          Stats
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Highest Grade', value: stats.highestGrade },
            { label: 'Total Sends', value: stats.totalSends.toString() },
            { label: 'Favorite Crag', value: stats.favoriteCrag },
            { label: 'Years Climbing', value: stats.yearsClimbing.toString() },
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

      {/* Grade Distribution */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent)' }}>
          Grade Distribution
        </h2>
        <div className="space-y-3">
          {gradeDistribution.map(({ grade, count }) => (
            <div key={grade} className="flex items-center gap-3">
              <span className="text-sm font-mono w-14 shrink-0">{grade}</span>
              <div className="flex-1 h-6 rounded overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div
                  className="h-full rounded transition-all"
                  style={{
                    width: `${(count / maxCount) * 100}%`,
                    backgroundColor: 'var(--color-accent)',
                    opacity: 0.7,
                  }}
                />
              </div>
              <span className="text-sm font-mono w-8 text-right" style={{ color: 'var(--color-secondary)' }}>
                {count}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'var(--color-accent)' }}>
          Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {photos.map((photo) => (
            <div key={photo.id} className="group">
              <div
                className="aspect-[4/5] rounded-lg flex items-end p-3 relative overflow-hidden"
                style={{ backgroundColor: photo.color }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
                <div className="relative z-10 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-white/90 bg-black/30 px-1.5 py-0.5 rounded">
                      {photo.grade}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs mt-1.5 truncate" style={{ color: 'var(--color-secondary)' }}>
                {photo.caption}
              </p>
              <p className="text-xs font-mono" style={{ color: 'var(--color-secondary)', opacity: 0.6 }}>
                {photo.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Link */}
      <section className="py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-secondary)' }}>
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
              Follow my climbing log on Instagram
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
