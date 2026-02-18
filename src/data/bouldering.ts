export interface ClimbingStats {
  highestGrade: string
  totalSends: number
  favoriteCrag: string
  yearsClimbing: number
  instagram: string
}

export interface ClimbingPhoto {
  id: string
  caption: string
  grade: string
  location: string
  color: string // placeholder color until real photos are added
}

export const stats: ClimbingStats = {
  highestGrade: 'V7',
  totalSends: 200,
  favoriteCrag: 'Bishop, CA',
  yearsClimbing: 3,
  instagram: 'climblog.lawry',
}

export const gradeDistribution = [
  { grade: 'V0–V2', count: 45 },
  { grade: 'V3–V4', count: 68 },
  { grade: 'V5', count: 42 },
  { grade: 'V6', count: 30 },
  { grade: 'V7', count: 15 },
]

export const photos: ClimbingPhoto[] = [
  {
    id: '1',
    caption: 'Heel hook crux on a steep overhang',
    grade: 'V6',
    location: 'Bishop, CA',
    color: '#4a6741',
  },
  {
    id: '2',
    caption: 'Slab balance problem',
    grade: 'V4',
    location: 'Castle Rock, CA',
    color: '#7a6b5d',
  },
  {
    id: '3',
    caption: 'Crimpy face climb',
    grade: 'V7',
    location: 'Yosemite, CA',
    color: '#5b6e8a',
  },
  {
    id: '4',
    caption: 'Dynamic move to a jug',
    grade: 'V5',
    location: 'Stinson Beach, CA',
    color: '#8a7a5b',
  },
  {
    id: '5',
    caption: 'Technical arête problem',
    grade: 'V6',
    location: 'Tramway, CA',
    color: '#6b5b7a',
  },
  {
    id: '6',
    caption: 'Roof problem with kneebar rest',
    grade: 'V5',
    location: 'Red Rocks, NV',
    color: '#7a5b5b',
  },
]
