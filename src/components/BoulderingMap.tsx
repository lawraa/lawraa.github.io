import { useEffect, useState } from 'react'
import { Browser } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './BoulderingMap.css'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import { gyms } from '../data/bouldering'
import { icons } from './links'

const COUNTRY_COLORS: Record<string, string> = {
  USA:      '#1f4d3a',
  Taiwan:   '#bf3a24',
  Thailand: '#f3d36b',
}

// Longitudes are unwrapped east of the antimeridian (US gyms at lng + 360) so one
// Pacific-centred view holds Taiwan, Thailand and California together.
const unwrap = (lng: number) => (lng < 0 ? lng + 360 : lng)

const REGION_VIEWS: Record<string, { bounds: [[number, number], [number, number]] }> = {
  all:      { bounds: [[6, 96], [48, 266]] },
  USA:      { bounds: [[29.2, 236.8], [48.2, 265.0]] },
  Taiwan:   { bounds: [[24.6, 120.8], [25.2, 121.75]] },
  Thailand: { bounds: [[7.5, 98.0], [19.2, 99.5]] },
}

const REGIONS = ['all', 'USA', 'Taiwan', 'Thailand']

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function MapController({ region }: { region: string }) {
  const map = useMap()
  useEffect(() => {
    map.getContainer().setAttribute('aria-label', `Map of ${gyms.length} climbing gyms. The same gyms are listed below the map.`)
  }, [map])
  useEffect(() => {
    const view = REGION_VIEWS[region]
    if (!view) return
    if (reduceMotion()) map.fitBounds(view.bounds, { padding: [32, 32], animate: false })
    else map.flyToBounds(view.bounds, { padding: [32, 32], duration: 1.0 })
  }, [region, map])
  return null
}

export default function BoulderingMap() {
  const [region, setRegion] = useState('all')
  const visible = region === 'all' ? gyms : gyms.filter(g => g.country === region)

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Zoom to region">
        {REGIONS.map(key => {
          const count = key === 'all' ? gyms.length : gyms.filter(g => g.country === key).length
          const active = region === key
          return (
            <button
              key={key}
              onClick={() => setRegion(key)}
              aria-pressed={active}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-3.5 py-1.5 text-[15px] font-semibold transition-colors ${
                active ? 'bg-forest text-white' : 'bg-paper text-mute ring-1 ring-inset ring-line hover:text-ink hover:ring-forest'
              }`}
            >
              {key !== 'all' && <span className="h-2.5 w-2.5 rounded-full ring-1 ring-white/70" style={{ backgroundColor: COUNTRY_COLORS[key] }} aria-hidden="true" />}
              {key === 'all' ? 'All regions' : key}{' '}
              <span className={`tabular ${active ? 'opacity-70' : ''}`}>{count}</span>
            </button>
          )
        })}
      </div>

      <div className="isolate h-[360px] overflow-hidden rounded-3xl ring-1 ring-line sm:h-[440px]">
        {/* One-finger drag would trap page scrolling on phones; zoom buttons and pinch still work there. */}
        <MapContainer
          bounds={REGION_VIEWS.all.bounds}
          boundsOptions={{ padding: [32, 32] }}
          scrollWheelZoom={false}
          dragging={!Browser.mobile}
          zoomAnimation={!reduceMotion()}
          className="h-full w-full"
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri, HERE, Garmin, &copy; OpenStreetMap contributors"
            maxZoom={16}
          />
          <MapController region={region} />
          {visible.map(gym => (
            <CircleMarker
              key={gym.name}
              center={[gym.lat, unwrap(gym.lng)]}
              radius={7}
              pathOptions={{ fillColor: COUNTRY_COLORS[gym.country] ?? '#525a55', fillOpacity: 1, color: gym.country === 'Thailand' ? '#1f4d3a' : '#ffffff', weight: 2 }}
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
      <p className="mt-3 text-[15px] text-mute">Select a pin to see the gym, or open the list below.</p>

      <details className="group mt-6 border-t border-line">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-forest hover:text-tomato transition-colors [&::-webkit-details-marker]:hidden">
          All {gyms.length} gyms as a list
          <span className="transition-transform duration-300 motion-reduce:transition-none group-open:rotate-180"><icons.chevron /></span>
        </summary>
        <div className="grid gap-x-12 gap-y-8 pb-4 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.filter(r => r !== 'all').map(country => (
            <div key={country}>
              <h3 className="flex items-center gap-2 font-sans text-[15px] font-semibold text-ink">
                <span className="h-2.5 w-2.5 rounded-full ring-1 ring-forest/30" style={{ backgroundColor: COUNTRY_COLORS[country] }} aria-hidden="true" />
                {country}
              </h3>
              <ul className="mt-2 border-t border-line">
                {gyms.filter(g => g.country === country).map(gym => (
                  <li key={gym.name} className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 text-[15px]">
                    <span className="min-w-0">{gym.name}</span>
                    <span className="shrink-0 text-mute">{gym.city}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </div>
  )
}
