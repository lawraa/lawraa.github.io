import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { icons } from './links'

export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className="pt-14 sm:pt-20 pb-10 sm:pb-14">
      <h1 className="text-forest font-bold text-5xl sm:text-6xl tracking-[-0.03em] leading-[1.02]">{title}</h1>
      {children && <div className="mt-5 max-w-[62ch] text-lg text-mute">{children}</div>}
    </header>
  )
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
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.8125rem] font-semibold leading-6 ${tagTones[tone]}`}>
      {children}
    </span>
  )
}

export function Lightbox({ src, alt, caption, onClose }: { src: string; alt: string; caption?: ReactNode; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 p-4 sm:p-8 bg-forest-deep/95"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain bg-paper"
        onClick={e => e.stopPropagation()}
      />
      {caption && <div className="text-center text-sm text-forest-tint">{caption}</div>}
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
