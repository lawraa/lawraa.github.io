import type { ReactNode } from 'react'
import { resumeData, type Experience } from '../data/resume'
import { icons } from './links'
import { PageIntro, Tag } from './ui'

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
]

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 pt-12 first:pt-0" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="text-forest text-3xl font-bold tracking-[-0.02em]">{title}</h2>
      <div className="mt-5 border-t border-line">{children}</div>
    </section>
  )
}

function Entry({ title, meta, dates, children }: { title: string; meta: string; dates?: string; children?: ReactNode }) {
  return (
    <div className="border-b border-line py-6">
      <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <h3 className="font-sans text-lg font-semibold leading-snug">{title}</h3>
          <p className="text-[15px] text-mute">{meta}</p>
        </div>
        {dates && <p className="tabular text-[15px] text-mute sm:text-right sm:whitespace-nowrap">{dates}</p>}
      </div>
      {children}
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <ul className="mt-3 max-w-[78ch] space-y-2 text-[17px] leading-relaxed text-mute">
      {items.map((d, i) => (
        <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-[0.8em] before:h-[2px] before:w-2.5 before:bg-forest">
          {d}
        </li>
      ))}
    </ul>
  )
}

const expMeta = (exp: Experience, withType = true) =>
  [...new Set([exp.org, exp.location, withType ? exp.type : undefined].filter(Boolean))].join(' · ')

export default function Resume() {
  return (
    <div className="pb-24">
      <PageIntro title="Resume" />

      <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-forest-deep"
          >
            <icons.download /> Download PDF
          </a>
          <nav className="mt-8 hidden lg:block" aria-label="Resume sections">
            <ul className="space-y-2 text-[15px] font-medium">
              {sections.map(s => (
                <li key={s.id}><a href={`#${s.id}`} onClick={e => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }) }} className="text-mute hover:text-tomato transition-colors">{s.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="mt-8">
            <p className="text-[15px] font-semibold">Core skills</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {resumeData.skills.map(s => <Tag key={s}>{s}</Tag>)}
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <Section id="experience" title="Experience">
            {resumeData.experience.map(exp => (
              <Entry key={exp.org + exp.role} title={exp.role} meta={expMeta(exp)} dates={exp.dates}>
                <Bullets items={exp.bullets} />
              </Entry>
            ))}
          </Section>

          <Section id="research" title="Research">
            {resumeData.research.map(exp => (
              <Entry key={exp.org + exp.role} title={exp.role} meta={expMeta(exp, false)} dates={exp.dates}>
                <Bullets items={exp.bullets} />
              </Entry>
            ))}
          </Section>

          <Section id="publications" title="Publications & service">
            {resumeData.publications.map(p => (
              <Entry key={p.title} title={p.title} meta={[p.authorship, p.note].filter(Boolean).join(' · ')} dates={`${p.venue} ${p.year}`}>
                {p.links?.paper && (
                  <a href={p.links.paper} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-[15px] font-semibold text-forest hover:text-tomato transition-colors">
                    Paper <icons.external />
                  </a>
                )}
              </Entry>
            ))}
          </Section>

          <Section id="education" title="Education">
            {resumeData.education.map(edu => (
              <Entry key={edu.school + edu.degree} title={edu.degree} meta={[edu.school, edu.location].filter(Boolean).join(' · ')} dates={edu.dates}>
                {edu.note && <p className="mt-2 max-w-[78ch] text-[17px] text-mute">{edu.note}</p>}
              </Entry>
            ))}
          </Section>
        </div>
      </div>
    </div>
  )
}
