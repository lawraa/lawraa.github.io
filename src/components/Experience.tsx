import { Link } from 'react-router-dom'
import { papers } from '../data/research'
import { icons, ext } from './links'
import { Tag, SectionHeading } from './ui'

const industryItems = [
  { role: 'Software Development Engineer', org: 'Amazon\u00a0· Seattle', dates: 'Sep 2026 – Present' },
  { role: 'MEng in EECS, capstone', org: 'UC Berkeley', dates: 'Aug 2025 – May 2026' },
  { role: 'Industry/Lab Researcher', org: 'TrendForce Corporation', dates: 'Oct 2024 – Jun 2025' },
  { role: 'Software Engineer Intern', org: 'Pegatron Corporation', dates: 'Jun – Sep 2023' },
  { role: 'Software Engineer Intern', org: 'IADIY Photonics', dates: 'Summers 2021 & 2022' },
]

const researchItems = [
  { role: 'Research Assistant', org: 'NTU Robot Learning Lab\u00a0· Shao\u2011Hua\u00a0Sun', dates: 'Oct 2023 – Jun 2025' },
  { role: 'Undergraduate Researcher', org: 'NTU Speech Processing & ML Lab\u00a0· Hung\u2011yi\u00a0Lee', dates: 'Jul 2023 – Jun 2025' },
  { role: 'Undergraduate Researcher', org: 'NTU Wireless & Mobile Networking Lab\u00a0· Hung\u2011Yu\u00a0Wei', dates: 'Jan 2023 – Jan 2024' },
]

function Timeline({ items }: { items: { role: string; org: string; dates: string }[] }) {
  return (
    <ul className="border-t border-line">
      {items.map(item => (
        <li key={item.org + item.role} className="grid gap-x-6 gap-y-0.5 border-b border-line py-4 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <p className="font-semibold leading-snug">{item.role}</p>
            {/* Plain wrapping (not the global 'pretty') so the line breaks after the dot, not before "Lab" */}
            <p className="text-meta text-mute" style={{ textWrap: 'wrap' }}>{item.org}</p>
          </div>
          <p className="tabular text-meta text-mute sm:text-right sm:whitespace-nowrap">{item.dates}</p>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <section className="pb-24" aria-labelledby="experience">
      <SectionHeading id="experience">Experience</SectionHeading>

      <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <h3 className="mb-3 font-sans text-meta font-semibold text-ink">Industry</h3>
          <Timeline items={industryItems} />
        </div>
        <div>
          <h3 className="mb-3 font-sans text-meta font-semibold text-ink">Research labs</h3>
          <Timeline items={researchItems} />

          <div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h3 className="font-sans text-meta font-semibold text-ink">Publications</h3>
            <Link to="/publications" className="inline-flex items-center gap-1.5 whitespace-nowrap text-meta font-semibold text-tomato hover:underline underline-offset-4">
              All publications <icons.arrow size={15} />
            </Link>
          </div>
          <ul className="mt-3 border-t border-line">
            {papers.map(pub => (
              <li key={pub.id} className="flex items-start justify-between gap-4 border-b border-line py-4">
                <a href={pub.paperUrl} {...ext} className="min-w-0 font-semibold leading-snug hover:text-tomato transition-colors">
                  {pub.title.split(':')[0]}
                  {pub.coFirstAuthors?.includes('Shou-Jen Chen') && (
                    <span className="block text-meta font-normal text-mute">Co-first author</span>
                  )}
                </a>
                <span className="shrink-0"><Tag tone="butter">{pub.venue} {pub.year}</Tag></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
