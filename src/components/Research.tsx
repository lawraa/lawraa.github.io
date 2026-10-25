import { useState } from 'react'
import { Link } from 'react-router-dom'
import { papers, service } from '../data/research'
import { projects } from '../data/projects'
import { useCopied } from '../hooks/useCopied'
import { fitClass } from './media'
import { icons, ext } from './links'
import { PageIntro, Tag } from './ui'

function Authors({ authors, coFirstAuthors }: { authors: string[]; coFirstAuthors?: string[] }) {
  return (
    <p className="text-[1.0625rem] text-mute">
      {authors.map((author, i) => (
        <span key={author}>
          {author === 'Shou-Jen Chen' ? <strong className="font-semibold text-ink">{author}</strong> : author}
          {coFirstAuthors?.includes(author) && <sup>*</sup>}
          {i < authors.length - 1 && ', '}
        </span>
      ))}
      {coFirstAuthors && coFirstAuthors.length > 0 && <span className="block text-[0.9375rem]">* equal contribution</span>}
    </p>
  )
}

function Bibtex({ id, text }: { id: string; text: string }) {
  const [copied, copy] = useCopied()
  // Clipboard can be blocked; the text is still selectable.
  const copyText = () => copy(text).catch(() => {})

  return (
    <div id={id} className="relative mt-4">
      <pre className="max-h-72 overflow-auto rounded-2xl bg-paper p-5 pt-12 font-mono sm:pt-5 sm:pr-24 text-[0.8125rem] leading-relaxed text-mute whitespace-pre-wrap break-words">
        {text}
      </pre>
      <button
        type="button"
        onClick={copyText}
        className="absolute top-3 right-3 cursor-pointer rounded-full bg-sage px-3 py-1.5 text-[0.8125rem] font-semibold text-forest ring-1 ring-inset ring-line transition-colors hover:ring-forest"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <span role="status" className="sr-only">{copied ? 'BibTeX copied to clipboard' : ''}</span>
    </div>
  )
}

export default function Research() {
  const [openBibtex, setOpenBibtex] = useState<string | null>(null)

  return (
    <div className="pb-24">
      <PageIntro title="Publications">
        <p>Peer-reviewed papers from my time in the NTU Robot Learning Lab and Speech Processing &amp; ML Lab, plus academic service.</p>
      </PageIntro>

      <div className="border-b border-line">
        {papers.map(pub => (
          <article key={pub.id} className={`grid gap-6 border-t border-line py-10 sm:py-12 ${pub.imageUrl && pub.paperUrl ? 'md:grid-cols-[300px_minmax(0,1fr)] lg:gap-12' : ''}`}>
            {pub.imageUrl && pub.paperUrl && (
              <a href={pub.paperUrl} {...ext} className="lift block aspect-[4/3] overflow-hidden rounded-2xl bg-paper" aria-label={`Open paper: ${pub.title}`}>
                <img src={pub.thumbUrl ?? pub.imageUrl} alt="" decoding="async" className={`h-full w-full ${fitClass(pub)}`} />
              </a>
            )}
            <div className="min-w-0">
              <h2 className="text-forest text-2xl sm:text-[1.75rem] font-bold leading-[1.15] tracking-[-0.015em]">
                {pub.title}
              </h2>
              <div className="mt-3"><Tag tone="butter">{pub.venue} {pub.year}</Tag></div>
              <div className="mt-3"><Authors authors={pub.authors} coFirstAuthors={pub.coFirstAuthors} /></div>
              <p className="mt-4 max-w-[72ch] text-[1.0625rem] leading-[1.7] text-mute">{pub.summary.trim()}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.9375rem] font-semibold">
                {pub.paperUrl && (
                  <a href={pub.paperUrl} {...ext} className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-white transition-colors hover:bg-forest-deep">
                    Read paper <icons.external />
                  </a>
                )}
                {pub.codeUrl && (
                  <a href={pub.codeUrl} {...ext} className="inline-flex items-center gap-1.5 text-forest hover:text-tomato transition-colors">
                    <icons.github size={16} /> Code
                  </a>
                )}
                {projects.some(p => p.id === pub.id) && (
                  <Link to={`/work#${pub.id}`} className="inline-flex items-center gap-1.5 text-forest hover:text-tomato transition-colors">
                    Case study <icons.arrow size={15} />
                  </Link>
                )}
                {pub.projectUrl && (
                  <a href={pub.projectUrl} {...ext} className="inline-flex items-center gap-1 text-forest hover:text-tomato transition-colors">
                    Project page <icons.external />
                  </a>
                )}
                {pub.bibtex && (
                  <button
                    type="button"
                    onClick={() => setOpenBibtex(openBibtex === pub.id ? null : pub.id)}
                    aria-expanded={openBibtex === pub.id}
                    aria-controls={`${pub.id}-bibtex`}
                    className="-my-2 cursor-pointer py-2 text-forest hover:text-tomato transition-colors"
                  >
                    {openBibtex === pub.id ? 'Hide BibTeX' : 'BibTeX'}
                  </button>
                )}
              </div>

              {openBibtex === pub.id && pub.bibtex && <Bibtex id={`${pub.id}-bibtex`} text={pub.bibtex} />}
            </div>
          </article>
        ))}
      </div>

      {service.length > 0 && (
        <section className="mt-20 sm:mt-24" aria-labelledby="service">
          <h2 id="service" className="text-forest text-3xl sm:text-[2.125rem] font-bold tracking-[-0.02em]">Academic service</h2>
          <ul className="mt-5 border-t border-line">
            {service.map(pub => (
              <li key={pub.id} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4">
                <p className="font-semibold">{pub.title}</p>
                <p className="tabular text-[0.9375rem] text-mute">{pub.year}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
