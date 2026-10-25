import type { MouseEvent } from 'react'

// Safari doesn't focus a button on click; focus it so Lightbox can hand focus back to it on close.
export const focusOpener = (e: MouseEvent<HTMLElement>) => e.currentTarget.focus({ preventScroll: true })
