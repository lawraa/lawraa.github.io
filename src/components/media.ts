// How a card image fills its frame. An explicit imageFit wins; otherwise a thumbUrl is a
// pre-composed card image (contain), and a plain imageUrl is a photo (cover).
export const fitClass = (m: { thumbUrl?: string; imageFit?: 'cover' | 'contain' }) =>
  m.imageFit === 'cover' ? 'object-cover'
    : m.imageFit === 'contain' ? 'object-contain p-4'
    : m.thumbUrl ? 'object-contain'
    : 'object-cover'
