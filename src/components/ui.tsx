import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { icons } from './links'

export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className="pt-14 sm:pt-20 pb-10 sm:pb-14">
      <h1 className="text-forest font-bold text-[min(3rem,13vw)] sm:text-6xl tracking-[-0.03em] leading-[1.02]">{title}</h1>
      {children && <div className="mt-5 max-w-[62ch] text-lg text-mute">{children}</div>}
    </header>
  )
}

// A section inside a page; the page title itself is PageIntro's h1
export function SectionHeading({ id, className = '', children }: { id: string; className?: string; children: ReactNode }) {
  return <h2 id={id} className={`text-forest text-3xl sm:text-[2.125rem] font-bold tracking-[-0.02em] ${className}`}>{children}</h2>
}

const tagTones = {
  plain: 'bg-paper text-mute ring-1 ring-inset ring-line',
  butter: 'bg-butter text-ink',
  forest: 'bg-forest text-white',
  mint: 'bg-forest-tint text-forest',
}

export type TagTone = keyof typeof tagTones

export function Tag({ children, tone = 'plain' }: { children: ReactNode; tone?: TagTone }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-[0.3125rem] text-[0.8125rem] forced-colors:outline forced-colors:outline-1 forced-colors:-outline-offset-1 font-semibold leading-[1.125rem] ${tagTones[tone]}`}>
      {children}
    </span>
  )
}

export function Lightbox({ src, alt, caption, onClose }: { src: string; alt: string; caption?: ReactNode; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const captionId = useId()

  // Lock scroll, move focus into the dialog and hand it back on close.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      opener?.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      // The close button is the only control, so Tab stays on it.
      if (e.key === 'Tab') { e.preventDefault(); closeRef.current?.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 p-4 sm:p-8 bg-forest-deep"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      // Name the dialog by its visible caption when there is one, so the title isn't read twice
      aria-label={caption ? undefined : alt}
      aria-labelledby={caption ? captionId : undefined}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[80vh] supports-[height:1svh]:max-h-[80svh] max-w-[92vw] rounded-2xl object-contain bg-paper"
        onClick={e => e.stopPropagation()}
      />
      {caption && <div id={captionId} className="text-center text-meta text-forest-tint">{caption}</div>}
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] p-2 rounded-full text-forest-tint hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        aria-label="Close"
      >
        <icons.close />
      </button>
    </div>,
    document.body,
  )
}
