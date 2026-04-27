import { useState } from 'react'
import { Link } from 'react-router-dom'
import { publications } from '../data/research'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Authors({ authors, coFirstAuthors }: { authors: string[], coFirstAuthors?: string[] }) {
  const isCoFirst = (name: string) => coFirstAuthors?.includes(name) ?? false
  const hasCoFirst = coFirstAuthors && coFirstAuthors.length > 0

  return (
    <div className="mb-1">
      <p className="text-sm" style={{ color: 'var(--color-secondary)' }}>
        {authors.map((author, i) => (
          <span key={author}>
            {author === 'Shou-Jen Chen'
              ? <strong style={{ color: 'var(--color-text)' }}>{author}</strong>
              : author}
            {isCoFirst(author) && <sup>*</sup>}
            {i < authors.length - 1 && ', '}
          </span>
        ))}
      </p>
      {hasCoFirst && (
        <p className="text-xs mt-0.5" style={{ color: 'var(--color-secondary)', opacity: 0.6 }}>
          * equal contribution
        </p>
      )}
    </div>
  )
}

export default function Research() {
  const [openBibtex, setOpenBibtex] = useState<string | null>(null)
  const serviceRef = useScrollReveal()

  const papers = publications.filter(pub => !pub.tags.includes('Review'))
  const service = publications.filter(pub => pub.tags.includes('Review'))

  return (
    <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20 page-animate">
      <Link to="/" className="link-underline text-sm mb-8 inline-block">
        &larr; Back
      </Link>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Research & Publications</h2>
      <p className="text-sm mb-10" style={{ color: 'var(--color-secondary)' }}>
        Published work and academic contributions.
      </p>

      {/* Papers */}
      <div>
        {papers.map((pub, idx) => (
          <article key={pub.id}>
            {idx > 0 && (
              <div className="border-t my-8" style={{ borderColor: 'var(--color-border)' }} />
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {pub.imageUrl && (
                <div className="shrink-0 w-full h-52 sm:w-52 sm:h-52 rounded-lg overflow-hidden border-2" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <img
                    src={pub.imageUrl}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1">
                  <h3 className="font-medium text-base">{pub.title}</h3>
                  <span
                    className="text-xs font-mono sm:shrink-0"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {pub.venue} {pub.year}
                  </span>
                </div>

                <Authors authors={pub.authors} coFirstAuthors={pub.coFirstAuthors} />

                <p className="text-sm mb-3" style={{ color: 'var(--color-secondary)' }}>
                  {pub.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(pub.paperUrl || pub.projectUrl || pub.codeUrl || pub.bibtex) && (
                  <div className="flex items-center gap-3 text-xs font-medium">
                    {pub.paperUrl && (
                      <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                        Paper
                      </a>
                    )}
                    {pub.projectUrl && (
                      <a href={pub.projectUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                        Project
                      </a>
                    )}
                    {pub.codeUrl && (
                      <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                        Code
                      </a>
                    )}
                    {pub.bibtex && (
                      <>
                        {(pub.paperUrl || pub.projectUrl || pub.codeUrl) && (
                          <span style={{ color: 'var(--color-border)' }}>|</span>
                        )}
                        <button
                          onClick={() => setOpenBibtex(openBibtex === pub.id ? null : pub.id)}
                          className="link-underline cursor-pointer"
                          style={{ background: 'none', border: 'none', padding: 0 }}
                        >
                          BibTeX
                        </button>
                      </>
                    )}
                  </div>
                )}

                {openBibtex === pub.id && pub.bibtex && (
                  <pre
                    className="mt-3 p-4 rounded-lg text-xs overflow-x-auto"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-secondary)',
                      fontFamily: 'var(--font-mono, monospace)',
                      lineHeight: '1.6',
                    }}
                  >
                    {pub.bibtex}
                  </pre>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Academic Service */}
      {service.length > 0 && (
        <div ref={serviceRef} className="mt-14 reveal">
          <div className="border-t mb-8" style={{ borderColor: 'var(--color-border)' }} />
          <h3
            className="text-xs font-mono uppercase tracking-wider mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            Academic Service
          </h3>
          <div className="space-y-4">
            {service.map(pub => (
              <div key={pub.id} className="flex items-start gap-3">
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded shrink-0 mt-0.5"
                  style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-secondary)' }}
                >
                  Reviewer
                </span>
                <div>
                  <p className="text-sm font-medium">{pub.title.replace(' — Reviewer', '')}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-secondary)' }}>
                    {pub.venue} {pub.year} · {pub.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
