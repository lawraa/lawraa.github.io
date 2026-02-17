import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold tracking-tight mb-8">Capabilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((category) => (
          <div key={category.title}>
            <h3 className="font-medium text-sm mb-3">{category.title}</h3>
            <ul className="space-y-1.5">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-sm"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
