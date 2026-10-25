import { useCopied } from '../hooks/useCopied'
import { EMAIL, socials, ext, icons } from './links'

export default function Footer() {
  const [copied, copy] = useCopied()
  const copyEmail = () => copy(EMAIL).catch(() => { window.location.href = `mailto:${EMAIL}` })

  return (
    <footer id="contact" className="bg-forest text-forest-tint forced-colors:border-t forced-colors:border-[CanvasText]">
      <div className="mx-auto max-w-[1160px] px-5 py-16 sm:px-10 sm:py-20">
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">Contact</h2>
        <p className="mt-5 max-w-[56ch] text-lg">Email is the best way to reach me.</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-butter px-5 py-3 text-meta font-semibold text-ink transition-colors hover:bg-white"
          >
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            aria-label="Copy email"
            className="cursor-pointer rounded-full px-5 py-3 text-meta font-semibold text-white ring-[1.5px] ring-inset transform-gpu ring-forest-tint/60 transition-colors hover:bg-white/10"
          >
            {/* Both labels share one cell so the button keeps its width and the row doesn't shift */}
            <span className="grid">
              <span className={`col-start-1 row-start-1 ${copied ? 'invisible' : ''}`}>Copy email</span>
              <span className={`col-start-1 row-start-1 ${copied ? '' : 'invisible'}`}>Copied</span>
            </span>
          </button>
          <a
            href="/resume.pdf"
            {...ext}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-meta font-semibold text-white ring-[1.5px] ring-inset transform-gpu ring-forest-tint/60 transition-colors hover:bg-white/10"
          >
            Resume PDF <icons.external size={16} />
          </a>
          <span role="status" className="sr-only">{copied ? 'Email copied to clipboard' : ''}</span>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-white/15 pt-6 text-meta sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shou-Jen (Lawrance) Chen</p>
          <ul className="grid grid-cols-2 gap-x-6 font-medium sm:flex sm:flex-wrap">
            {socials.map(({ label, href, Icon, ariaLabel }) => (
              <li key={label}>
                <a href={href} {...ext} aria-label={ariaLabel} className="inline-flex items-center gap-2 py-2.5 text-white hover:text-butter transition-colors">
                  <Icon size={label === 'X' ? 14 : 16} /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
