import { Link } from 'react-router-dom'
import { notes } from '../data/notes'

export default function Notes() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pt-32 pb-20">
      <Link to="/" className="link-underline text-sm mb-8 inline-block">
        &larr; Back
      </Link>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Research & Publications</h2>
      <p className="text-sm mb-8" style={{ color: 'var(--color-secondary)' }}>
        Published work and academic contributions.
      </p>
      <div className="space-y-6">
        {notes.map((note) => (
          <article key={note.id} className="group">
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h3 className="font-medium text-base">
                {note.url ? (
                  <a href={note.url} className="link-underline">
                    {note.title}
                  </a>
                ) : (
                  note.title
                )}
              </h3>
              <time
                className="text-xs font-mono shrink-0"
                style={{ color: 'var(--color-secondary)' }}
              >
                {note.date}
              </time>
            </div>
            <p className="text-sm mb-2" style={{ color: 'var(--color-secondary)' }}>
              {note.summary}
            </p>
            <div className="flex gap-1.5">
              {note.tags.map((tag) => (
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
          </article>
        ))}
      </div>
    </div>
  )
}
