import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import { gyms } from '../data/bouldering'

const COUNTRY_COLORS: Record<string, string> = {
  USA:     '#3a6ff7',
  Taiwan:  '#e8734a',
  Thailand:'#3db88a',
}

const REGION_VIEWS: Record<string, { bounds: [[number,number],[number,number]] } | { center: [number,number]; zoom: number }> = {
  all:      { center: [22, 140], zoom: 3 },
  USA:      { bounds: [[33.8, -123.0], [38.2, -118.0]] },
  Taiwan:   { bounds: [[24.6, 120.8], [25.2, 121.75]] },
  Thailand: { bounds: [[7.5, 98.0], [19.2, 99.5]] },
}

const REGIONS = [
  { key: 'all',      label: 'All',      flag: '🌏' },
  { key: 'USA',      label: 'USA',      flag: '🇺🇸' },
  { key: 'Taiwan',   label: 'Taiwan',   flag: '🇹🇼' },
  { key: 'Thailand', label: 'Thailand', flag: '🇹🇭' },
]

function MapController({ region }: { region: string }) {
  const map = useMap()
  useEffect(() => {
    const view = REGION_VIEWS[region]
    if (!view) return
    if ('bounds' in view) {
      map.flyToBounds(view.bounds, { padding: [32, 32], duration: 1.0 })
    } else {
      map.flyTo(view.center, view.zoom, { duration: 1.0 })
    }
  }, [region, map])
  return null
}

export default function BoulderingMap() {
  const [region, setRegion] = useState('all')
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const tileUrl = isDark
    ? 'https://{s}.basemaps.cartocdn.com/dark_matter/{z}/{x}/{y}.png'
    : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'

  const visible = region === 'all' ? gyms : gyms.filter(g => g.country === region)

  return (
    <div>
      {/* Region tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {REGIONS.map(r => {
          const count = r.key === 'all' ? gyms.length : gyms.filter(g => g.country === r.key).length
          const active = region === r.key
          return (
            <button
              key={r.key}
              onClick={() => setRegion(r.key)}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              style={{
                backgroundColor: active ? COUNTRY_COLORS[r.key] ?? 'var(--color-text)' : 'var(--color-surface)',
                color: active ? '#fff' : 'var(--color-secondary)',
                border: `1px solid ${active ? 'transparent' : 'var(--color-border)'}`,
              }}
            >
              <span>{r.flag}</span>
              <span>{r.label}</span>
              <span style={{ opacity: 0.75 }}>({count})</span>
            </button>
          )
        })}
      </div>

      {/* Map */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: '1px solid var(--color-border)' }}
      >
        <MapContainer
          center={[22, 140]}
          zoom={3}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '420px' }}
        >
          <TileLayer
            key={isDark ? 'dark' : 'light'}
            url={tileUrl}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>'
            subdomains="abcd"
            maxZoom={19}
          />
          <MapController region={region} />
          {visible.map(gym => (
            <CircleMarker
              key={gym.name}
              center={[gym.lat, gym.lng]}
              radius={6}
              pathOptions={{
                fillColor: COUNTRY_COLORS[gym.country] ?? '#6b6b6b',
                fillOpacity: 0.95,
                color: isDark ? '#1a1a1a' : '#ffffff',
                weight: 2,
              }}
            >
              <Popup>
                <div className="bouldering-popup">
                  <strong>{gym.name}</strong>
                  <span>{gym.city} · {gym.country}</span>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3">
        {Object.entries(COUNTRY_COLORS).map(([country, color]) => (
          <span key={country} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-secondary)' }}>
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: color }} />
            {country} ({gyms.filter(g => g.country === country).length})
          </span>
        ))}
        <span className="text-xs ml-auto" style={{ color: 'var(--color-secondary)', opacity: 0.6 }}>
          click a pin to see details
        </span>
      </div>
    </div>
  )
}
