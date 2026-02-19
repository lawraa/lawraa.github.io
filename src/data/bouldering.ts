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
  highestGrade: 'V7',
  apeIndex: '+9 cm',
  homegym: 'Oaks, CA',
  instagram: 'climblog.lawry',
}

// Self-rated 0–10 per style
export const styleRatings = [
  { label: 'Technical',        value: 8 },
  { label: 'Static',    value: 9 },
  { label: 'Dynamic',     value: 6 },
  { label: 'Balance',        value: 8 },
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
    src: 'public/bouldering/comp.JPG',
  },
  {
    id: '2',
    caption: 'Taiwan Home Gym',
    grade: 'Gym Bros',
    location: 'Taipei, Taiwan',
    color: '#7a6b5d',
    src: 'public/bouldering/home_gym_taiwan.JPG',
  },
  {
    id: '3',
    caption: 'Thailand Climbing Trip',
    grade: 'Go Bould',
    location: 'Phuket, Thailand',
    color: '#5b6e8a',
    src: 'public/bouldering/thailand.JPG',
  },
  {
    id: '4',
    caption: 'Climbing in the States',
    grade: 'U.S. Home Gym',
    location: 'Berkeley, CA',
    color: '#8a7a5b',
    src: 'public/bouldering/oaks.jpeg',
  },
  {
    id: '5',
    caption: 'Climbing in LA',
    grade: 'Bouldering Date',
    location: 'Los Angeles, CA',
    color: '#6b5b7a',
    src: 'public/bouldering/LA.JPG',
  },
  {
    id: '6',
    caption: '2nd Competition',
    grade: 'Gym Bros',
    location: 'Redwood City, CA',
    color: '#7a5b5b',
    src: 'public/bouldering/comp2.JPG',
  },
]

export interface ClimbingGym {
  name: string
  city: string
  country: string
}

export const gyms: ClimbingGym[] = [
  
  { name: 'The Oaks Climbing', city: 'Berkeley', country: 'USA' },
  { name: 'Pacific Pipe', city: 'Oakland', country: 'USA' },
  { name: 'Berkeley Ironworks', city: 'Berkeley', country: 'USA' },
  { name: 'Mosaic Boulders', city: 'Berkeley', country: 'USA' },
  { name: 'Dogpatch Boulders', city: 'San Francisco', country: 'USA' },
  { name: 'Hyperion Climbing', city: 'Redwood City', country: 'USA' },
  { name: 'Touchstone Climbing - The Studio', city: 'San Francisco', country: 'USA' },
  { name: 'Cliffs of Id', city: 'Los Angeles', country: 'USA' },
  { name: 'UCB Recreational Sports Facility', city: 'Berkeley', country: 'USA' },

  { name: 'YongHe Climbing Gym', city: 'Taipei', country: 'Taiwan' },
  { name: '千手抱石', city: 'Taoyuan', country: 'Taiwan' },
  { name: 'RedRock Hsinchu', city: 'Hsinchu', country: 'Taiwan' },
  { name: 'BABO PAPAK', city: 'Hsinchu', country: 'Taiwan' },
  { name: 'CORNER Bouldering Gym - Huashan', city: 'Taipei', country: 'Taiwan' },
  { name: 'CORNER Bouldering Gym - Zhongshan', city: 'Taipei', country: 'Taiwan' },
  { name: 'T-UP Climbing Gym - A19', city: 'Taoyuan', country: 'Taiwan' },
  { name: 'T-UP Climbing Gym - Nangang', city: 'Taipei', country: 'Taiwan' },
  { name: 'T-UP Climbing Gym - Wanhua', city: 'Taipei', country: 'Taiwan' },
  { name: 'JT久淘 Climbing', city: 'New Taipei', country: 'Taiwan' },
  { name: 'Flow-Bouldering Gym', city: 'Taipei', country: 'Taiwan' },
  { name: 'Civic Bouldergym Taipei', city: 'Taipei', country: 'Taiwan' },


  { name: 'Go Bould', city: 'Phuket', country: 'Thailand' },
  { name: 'Alpine Outpost', city: 'Chiang Mai', country: 'Thailand' },
  { name: 'Main Wall Climbing Gym', city: 'Chiang Mai', country: 'Thailand' },

]
