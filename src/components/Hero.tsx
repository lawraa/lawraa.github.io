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
