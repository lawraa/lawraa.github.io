export interface ClimbingStats {
  highestGrade: string
  apeIndex: string
  homegym: string
  instagram: string
}

export interface ClimbingPhoto {
  id: string
  caption: string
  grade: string
  location: string
  color: string
  src?: string
}

export const stats: ClimbingStats = {
  highestGrade: 'V8',
  apeIndex: '+9 cm',
  homegym: 'Oaks, CA',
  instagram: 'climblog.lawry',
}

export const styleRatings = [
  { label: 'Technical', value: 8 },
  { label: 'Static',    value: 9 },
  { label: 'Dynamic',   value: 6 },
  { label: 'Balance',   value: 8 },
  { label: 'Power',     value: 5 },
  { label: 'Slab',      value: 7 },
]

export const photos: ClimbingPhoto[] = [
  {
    id: '1',
    caption: 'First competition ever',
    grade: '2nd Place',
    location: 'Taipei, Taiwan',
    color: '#4a6741',
    src: '/bouldering/comp.JPG',
  },
  {
    id: '2',
    caption: 'Taiwan Home Gym',
    grade: 'Gym Bros',
    location: 'Taipei, Taiwan',
    color: '#7a6b5d',
    src: '/bouldering/home_gym_taiwan.JPG',
  },
  {
    id: '3',
    caption: 'Thailand Climbing Trip',
    grade: 'Go Bould',
    location: 'Phuket, Thailand',
    color: '#5b6e8a',
    src: '/bouldering/thailand.JPG',
  },
  {
    id: '4',
    caption: 'Climbing in the States',
    grade: 'U.S. Home Gym',
    location: 'Berkeley, CA',
    color: '#8a7a5b',
    src: '/bouldering/oaks.jpeg',
  },
  {
    id: '5',
    caption: 'Climbing in LA',
    grade: 'Bouldering Date',
    location: 'Los Angeles, CA',
    color: '#6b5b7a',
    src: '/bouldering/LA.JPG',
  },
  {
    id: '6',
    caption: '2nd Competition',
    grade: 'Gym Bros',
    location: 'Redwood City, CA',
    color: '#7a5b5b',
    src: '/bouldering/comp2.JPG',
  },
]

export interface ClimbingGym {
  name: string
  city: string
  country: string
  lat: number
  lng: number
}

export const gyms: ClimbingGym[] = [
  // ── USA ──────────────────────────────────────────────────────────────
  { name: 'The Oaks Climbing',                city: 'Berkeley',      country: 'USA',      lat: 37.8724, lng: -122.2738 },
  { name: 'Pacific Pipe',                      city: 'Oakland',       country: 'USA',      lat: 37.7773, lng: -122.2512 },
  { name: 'Berkeley Ironworks',                city: 'Berkeley',      country: 'USA',      lat: 37.8780, lng: -122.2754 },
  { name: 'Mosaic Boulders',                   city: 'Berkeley',      country: 'USA',      lat: 37.8517, lng: -122.2787 },
  { name: 'Dogpatch Boulders',                 city: 'San Francisco', country: 'USA',      lat: 37.7614, lng: -122.3888 },
  { name: 'Hyperion Climbing',                 city: 'Redwood City',  country: 'USA',      lat: 37.5067, lng: -122.2162 },
  { name: 'Cliffs of Id',                      city: 'Los Angeles',   country: 'USA',      lat: 34.0572, lng: -118.2294 },
  { name: 'Benchmark Climbing',                city: 'Berkeley',      country: 'USA',      lat: 37.8672, lng: -122.2780 },
  { name: 'UCB Recreational Sports Facility',  city: 'Berkeley',      country: 'USA',      lat: 37.8672, lng: -122.2585 },

  // ── Taiwan ───────────────────────────────────────────────────────────
  { name: 'YongHe Climbing Gym',               city: 'Taipei',        country: 'Taiwan',   lat: 25.0094, lng: 121.5133 },
  { name: '千手抱石',                            city: 'Taoyuan',       country: 'Taiwan',   lat: 24.9831, lng: 121.3121 },
  { name: 'RedRock Hsinchu',                   city: 'Hsinchu',       country: 'Taiwan',   lat: 24.8009, lng: 120.9811 },
  { name: 'BABO PAPAK',                        city: 'Hsinchu',       country: 'Taiwan',   lat: 24.7979, lng: 120.9828 },
  { name: 'CORNER Bouldering Gym - Huashan',   city: 'Taipei',        country: 'Taiwan',   lat: 25.0442, lng: 121.5302 },
  { name: 'CORNER Bouldering Gym - Zhongshan', city: 'Taipei',        country: 'Taiwan',   lat: 25.0515, lng: 121.5228 },
  { name: 'T-UP Climbing Gym - A19',           city: 'Taoyuan',       country: 'Taiwan',   lat: 24.9762, lng: 121.2393 },
  { name: 'T-UP Climbing Gym - Nangang',       city: 'Taipei',        country: 'Taiwan',   lat: 25.0524, lng: 121.6072 },
  { name: 'T-UP Climbing Gym - Wanhua',        city: 'Taipei',        country: 'Taiwan',   lat: 25.0370, lng: 121.4989 },
  { name: 'JT久淘 Climbing',                    city: 'New Taipei',    country: 'Taiwan',   lat: 25.0648, lng: 121.4680 },
  { name: 'Flow-Bouldering Gym',               city: 'Taipei',        country: 'Taiwan',   lat: 25.0481, lng: 121.5466 },
  { name: 'Civic Bouldergym Taipei',           city: 'Taipei',        country: 'Taiwan',   lat: 25.053959, lng: 121.613832 },
    
  // ── Thailand ─────────────────────────────────────────────────────────
  { name: 'Go Bould',                          city: 'Phuket',        country: 'Thailand', lat:  7.8793, lng:  98.3923 },
  { name: 'Alpine Outpost',                    city: 'Chiang Mai',    country: 'Thailand', lat: 18.7878, lng:  98.9853 },
  { name: 'Main Wall Climbing Gym',            city: 'Chiang Mai',    country: 'Thailand', lat: 18.7957, lng:  98.9891 },
]
