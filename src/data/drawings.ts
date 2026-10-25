export interface Drawing {
  id: string
  src: string
  title: string
  date: string
  medium: string
  description?: string
  link?: { label: string; url: string }
}

// First month of practice, for "N months of practice so far"
export const drawingSince = new Date(2026, 4, 1)

export const drawings: Drawing[] = [
  {
    id: '1',
    src: '/drawings/drawing_05162026.jpg',
    title: 'Portrait Study',
    date: 'May 2026',
    medium: 'Pencil on paper',
    description: 'First drawing, following',
    link: { label: 'this tutorial', url: 'https://youtu.be/Zi0zRKOm6GM?si=VCuNcA5d3rM2vEFc' },
  },
]
