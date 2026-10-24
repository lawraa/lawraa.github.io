import { useState } from 'react'
import { publications } from '../data/research'
import { icons } from './links'
import { PageIntro, Tag } from './ui'

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

function Authors({ authors, coFirstAuthors }: { authors: string[]; coFirstAuthors?: string[] }) {
  return (
    <p className="text-[17px] text-mute">
      {authors.map((author, i) => (
        <span key={author}>
          {author === 'Shou-Jen Chen' ? <strong className="font-semibold text-ink">{author}</strong> : author}
          {coFirstAuthors?.includes(author) && <sup>*</sup>}
          {i < authors.length - 1 && ', '}
        </span>
      ))}
      {coFirstAuthors && coFirstAuthors.length > 0 && <span className="block text-[15px]">* equal contribution</span>}
    </p>
  )
}

export default function Research() {
  const [openBibtex, setOpenBibtex] = useState<string | null>(null)
  const papers = publications.filter(pub => !pub.tags.includes('Review'))
  const service = publications.filter(pub => pub.tags.includes('Review'))

  return (
    <div className="pb-24">
      <PageIntro title="Publications">
        <p>Peer-reviewed papers from my time in the NTU Robot Learning Lab and Speech Processing &amp; ML Lab, plus academic service.</p>
      </PageIntro>

      <div className="border-b border-line">
        {papers.map(pub => (
          <article key={pub.id} className="grid gap-6 border-t border-line py-10 sm:py-12 md:grid-cols-[300px_minmax(0,1fr)] lg:gap-12">
            {pub.imageUrl && (
              <a href={pub.paperUrl} {...ext} className="lift block aspect-[4/3] overflow-hidden rounded-2xl bg-paper" aria-label={`Open paper: ${pub.title}`}>
                <img src={pub.thumbUrl ?? pub.imageUrl} alt="" className={`h-full w-full ${pub.thumbUrl ? 'object-contain' : 'object-cover'}`} />
              </a>
            )}
            <div className="min-w-0">
              <h2 className="text-forest text-2xl sm:text-[28px] font-bold leading-[1.15] tracking-[-0.015em]">
                {pub.title}
              </h2>
              <div className="mt-3"><Tag tone="butter">{pub.venue} {pub.year}</Tag></div>
              <div className="mt-3"><Authors authors={pub.authors} coFirstAuthors={pub.coFirstAuthors} /></div>
              <p className="mt-4 max-w-[72ch] text-[17px] leading-[1.7] text-mute">{pub.summary.trim()}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[15px] font-semibold">
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
                    className="cursor-pointer text-forest hover:text-tomato transition-colors"
                  >
                    {openBibtex === pub.id ? 'Hide BibTeX' : 'BibTeX'}
                  </button>
                )}
              </div>

              {openBibtex === pub.id && pub.bibtex && (
                <pre className="mt-4 max-h-72 overflow-auto rounded-2xl bg-paper p-5 font-mono text-[13px] leading-relaxed text-mute whitespace-pre-wrap break-words">
                  {pub.bibtex}
                </pre>
              )}
            </div>
          </article>
        ))}
      </div>

      {service.length > 0 && (
        <section className="mt-16" aria-labelledby="service">
          <h2 id="service" className="text-forest text-3xl font-bold tracking-[-0.02em]">Academic service</h2>
          <ul className="mt-5 border-t border-line">
            {service.map(pub => (
              <li key={pub.id} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4">
                <p className="font-semibold">Reviewer, IEEE Spoken Language Technology Workshop</p>
                <p className="tabular text-[15px] text-mute">{pub.year}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
