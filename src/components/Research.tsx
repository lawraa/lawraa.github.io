import { useState } from 'react'
import { Link } from 'react-router-dom'
import { publications } from '../data/research'

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

  return (
    <div className="max-w-[1000px] mx-auto px-6 pt-32 pb-20">
      <Link to="/" className="link-underline text-sm mb-8 inline-block">
        &larr; Back
      </Link>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Research & Publications</h2>
      <p className="text-sm mb-10" style={{ color: 'var(--color-secondary)' }}>
        Published work and academic contributions.
      </p>

      <div>
        {publications.map((pub, idx) => (
          <article key={pub.id}>
            {idx > 0 && (
              <div className="border-t my-8" style={{ borderColor: 'var(--color-border)' }} />
            )}

            <div className="flex items-center gap-8">
              {/* Thumbnail */}
              {pub.imageUrl && (
                <div className="shrink-0 w-55 h-55 rounded-lg overflow-hidden border-3" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <img
                    src={pub.imageUrl}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="min-w-0 flex-1">
                {/* Title + venue */}
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="font-medium text-base">{pub.title}</h3>
                  <span
                    className="text-xs font-mono shrink-0"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {pub.venue} {pub.year}
                  </span>
                </div>

                {/* Authors */}
                <Authors authors={pub.authors} coFirstAuthors={pub.coFirstAuthors} />

                {/* Summary */}
                <p className="text-sm mb-3" style={{ color: 'var(--color-secondary)' }}>
                  {pub.summary}
                </p>

                {/* Tags */}
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

            {/* Links row */}
            {(pub.paperUrl || pub.projectUrl || pub.codeUrl || pub.bibtex) && (
              <div className="flex items-center gap-3 text-xs font-medium">
                {pub.paperUrl && (
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Paper
                  </a>
                )}
                {pub.projectUrl && (
                  <a
                    href={pub.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Project
                  </a>
                )}
                {pub.codeUrl && (
                  <a
                    href={pub.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Code
                  </a>
                )}
                {pub.bibtex && (
                  <>
                    {(pub.paperUrl || pub.projectUrl || pub.codeUrl) && (
                      <span style={{ color: 'var(--color-border)' }}>|</span>
                    )}
                    <button
                      onClick={() =>
                        setOpenBibtex(openBibtex === pub.id ? null : pub.id)
                      }
                      className="link-underline cursor-pointer"
                      style={{ background: 'none', border: 'none', padding: 0 }}
                    >
                      BibTeX
                    </button>
                  </>
                )}
              </div>
            )}

                {/* BibTeX block */}
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
    </div>
  )
}
