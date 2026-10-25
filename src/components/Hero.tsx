import { Link } from 'react-router-dom'
import { EMAIL, icons, socials, ext } from './links'

export default function Hero() {
  return (
    <section className="grid gap-12 pt-10 pb-20 sm:pt-14 sm:pb-24 md:grid-cols-[minmax(0,1fr)_300px] md:gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-[72px]">
      <div className="min-w-0">
        <h1 className="text-forest font-bold text-[clamp(2.75rem,6.4vw,4.75rem)] leading-[0.98] tracking-[-0.035em]">
          Shou-Jen (Lawrance) Chen
        </h1>
        <p className="mt-5 text-lg sm:text-xl font-medium">
          Software Development Engineer at Amazon ·{' '}
          <span className="whitespace-nowrap">UC Berkeley EECS MEng</span>
        </p>

        <div className="mt-6 max-w-[64ch] space-y-4 text-mute text-[1.0625rem] sm:text-lg leading-[1.65]">
          <p>
            Before Amazon, I did a Master of Engineering in EECS at UC Berkeley, focused on robotics and embedded systems. My capstone used an LLM to design
            a <span className="mark">custom assistive gripper for each patient</span>, testing every design in MuJoCo
            simulation. I've also built a quadruped you steer with a wristband, and co-authored a paper on multi-agent LLM discussion at{' '}
            <a href="https://arxiv.org/abs/2405.06373" {...ext} className="link">COLM&nbsp;2024</a>.
          </p>
          <p>
            Before Berkeley I studied Electrical Engineering at National Taiwan University and did research with{' '}
            <a href="https://shaohua0116.github.io/" {...ext} className="link">Shao-Hua Sun</a> and{' '}
            <a href="https://speech.ee.ntu.edu.tw/~hylee/index.php" {...ext} className="link">Hung&#8209;yi Lee</a>.
            Outside of work I boulder and draw.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-meta font-semibold text-white transition-colors hover:bg-forest-deep"
            >
              See projects <icons.arrow />
            </Link>
            <a
              href="/resume.pdf"
              {...ext}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-meta font-semibold text-forest ring-[1.5px] ring-inset ring-forest transition-colors hover:bg-forest-tint"
            >
              Resume PDF <icons.external size={16} />
            </a>
          </div>
          <ul className="flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 text-meta font-semibold text-forest">
            <li><a href={`mailto:${EMAIL}`} className="inline-flex min-h-11 items-center hover:text-tomato transition-colors">Email</a></li>
            {socials.map(({ label, href }) => (
              <li key={label}><a href={href} {...ext} className="inline-flex min-h-11 min-w-6 items-center hover:text-tomato transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[400px] md:max-w-[340px] md:justify-self-end print:max-w-[3in]">
        <div className="aspect-[340/400] overflow-hidden rounded-3xl bg-paper">
          <img
            src="/lawry/portrait.jpg"
            width={1200}
            height={1200}
            fetchPriority="high"
            alt="Portrait of Lawrance Chen in Berkeley graduation regalia"
            className="h-full w-full object-cover object-[50%_20%]"
          />
        </div>
        <p className="mt-3 rounded-2xl bg-forest px-5 py-4 text-meta leading-snug text-forest-tint">
          <span className="font-semibold text-butter">Now</span> · Software Development Engineer at Amazon, Seattle
        </p>
      </div>
    </section>
  )
}
