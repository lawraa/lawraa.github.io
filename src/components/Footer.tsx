import { useCopied } from '../hooks/useCopied'
import { EMAIL, socials, ext, icons } from './links'

export default function Footer() {
  const [copied, copy] = useCopied()
  const copyEmail = () => copy(EMAIL).catch(() => { window.location.href = `mailto:${EMAIL}` })

  return (
    <footer id="contact" className="bg-forest text-forest-tint">
      <div className="mx-auto max-w-[1160px] px-5 py-16 sm:px-10 sm:py-20">
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">Contact</h2>
        <p className="mt-5 max-w-[56ch] text-lg">Email is the best way to reach me.</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-butter px-5 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-white"
          >
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            className="cursor-pointer rounded-full px-5 py-3 text-[0.9375rem] font-semibold text-white ring-[1.5px] ring-inset ring-forest-tint/60 transition-colors hover:bg-white/10"
          >
            {copied ? 'Copied to clipboard' : 'Copy email'}
          </button>
          <a
            href="/resume.pdf"
            {...ext}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.9375rem] font-semibold text-white ring-[1.5px] ring-inset ring-forest-tint/60 transition-colors hover:bg-white/10"
          >
            Resume PDF <icons.external size={16} />
          </a>
          <span role="status" className="sr-only">{copied ? 'Email copied to clipboard' : ''}</span>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-white/15 pt-6 text-[0.9375rem] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shou-Jen (Lawrance) Chen</p>
          <ul className="grid grid-cols-2 gap-x-6 font-medium sm:flex sm:flex-wrap">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} {...ext} className="inline-flex items-center gap-2 py-2.5 text-white hover:text-butter transition-colors">
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
