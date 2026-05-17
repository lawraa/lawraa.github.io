export interface Drawing {
  id: string
  src: string
  title: string
  date: string
  medium: string
  description?: string
  link?: { label: string; url: string }
}

export const drawings: Drawing[] = [
  {
    id: '1',
    src: '/drawings/drawing_05162026.jpg',
    title: 'Portrait Study',
    date: 'May 2026',
    medium: 'Pencil on paper',
    description: 'First drawing following a tutorial.',
    link: { label: 'Tutorial', url: 'https://youtu.be/Zi0zRKOm6GM?si=VCuNcA5d3rM2vEFc' },
  },
]
