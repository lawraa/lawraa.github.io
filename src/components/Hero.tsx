export default function Hero() {
  const specializations = ['Deep Learning', 'MLOps', 'Real-Time Systems', 'NLP']

  return (
    <section className="pt-32 pb-20">
      <h1 className="text-4xl font-semibold tracking-tight mb-3">
        Lawrance Chen
      </h1>
      <p className="text-lg mb-6" style={{ color: 'var(--color-secondary)' }}>
        ML Engineer — building systems that learn from data and work in production.
      </p>
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
      <div className="flex gap-4">
        <a
          href="#work"
          className="text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
          }}
        >
          View Work
        </a>
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
