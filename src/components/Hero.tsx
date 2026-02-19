import { Link } from 'react-router-dom'

export default function Hero() {
  const specializations = ['Reinforcement Learning', 'LLM Evaluation', 'Vision Systems', 'Simulation & Embodied AI', 'ML Infrastructure']

  return (
    <section className="pt-32 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-6">
        <div className="min-w-0">
          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            Shou-Jen (Lawrance) Chen
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-secondary)' }}>
            ML Engineer — turning messy real-world data into working AI systems through automated evaluation and feedback loops.
          </p>
        </div>

        <img
          src="/lawry/portrait.jpg"
          alt="Lawrance Chen"
          className="shrink-0 w-52 h-52 rounded-lg object-cover self-center sm:self-start"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {specializations.map((s) => (
          <span
            key={s}
            className="text-xs font-mono px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-secondary)',
            }}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-8">
        <a
          href="mailto:chenlawrance@gmail.com"
          className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
          style={{ color: 'var(--color-secondary)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          chenlawrance@gmail.com
        </a>
        <span style={{ color: 'var(--color-border, #e5e7eb)' }}>·</span>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/lawraa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-secondary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/shou-jen-chen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-secondary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://scholar.google.com/citations?user=CfXMOEYAAAAJ&hl=en&oi=sra"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className="transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-secondary)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5 12 0z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          to="/work"
          className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
          }}
        >
          View Work
        </Link>
        <a
          href="#contact"
          className="link-underline text-sm font-medium py-2"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
