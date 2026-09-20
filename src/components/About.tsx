import { motion } from 'framer-motion'
import {
  GraduationCap,
  Code2,
  LineChart,
  ArrowUp,
  Activity,
  Layers3,
  BarChart3,
} from 'lucide-react'

import TiltCard from './TiltCard'

const GROUPS = [
  {
  icon: GraduationCap,

  title: 'Academic',

  subtitle: 'University of Nairobi — Economics & Mathematics',

  code: '01 / THEORY',

  items: [

    // Economics
    'Microeconomics',
    'Macroeconomics',
    'Econometrics',
    'Financial economics',
    'Development economics',
    'Public economics',
    'International economics',
    'Monetary economics',
    'Economic policy & institutions',

    // Mathematics & Quantitative Methods
    'Calculus',
    'Linear algebra',
    'Differential equations',
    'Probability & statistics',
    'Mathematical modelling',
    'Optimization',
    'Numerical methods',
    'Statistical inference',
    'Time-series analysis',


  ],

  illustration: 'academic' as const,
},
  {
  icon: Code2,

  title: 'Technical',

  subtitle: 'Software engineering, product development & creative technology',

  code: '02 / BUILD',

  items: [
    'JavaScript / TypeScript · Python · SQL · HTML · CSS',
    'React · Next.js · Vite · Tailwind · Flask · Node.js',
    'PostgreSQL · SQLite · databases · APIs · authentication',
    'Git · GitHub · Linux · cloud development · deployment',
    'React Native & Expo · mobile application development',
    'Web3 · blockchain · crypto · smart-contract ecosystems',
    'M-Pesa · STK Push · payment & third-party integrations',
    'Figma · Canva · UI/UX · prototyping · design systems',
    'Video editing · motion · visual storytelling · presentations',
    'Product architecture · technical research · rapid prototyping',
  ],

  illustration: 'technical' as const,
},
  {
  icon: LineChart,

  title: 'Financial / Analytical',

  subtitle: 'Markets, capital, quantitative analysis & strategy',

  code: '03 / CAPITAL',

  items: [
    'Investment analysis & equity research',
    'Valuation & financial modelling',
    'Portfolio construction & asset allocation',
    'Risk / return & quantitative analysis',
    'Econometrics, forecasting & time-series',
    'Macroeconomics & financial economics',
    'Corporate finance & capital allocation',
    'Fintech, crypto & blockchain',
    'Real estate & property economics',
    'Venture capital & startup finance',
    'Market research & business strategy',
    'Scenario, sensitivity & uncertainty analysis',
  ],

  illustration: 'financial' as const,

  fullWidth: true,
},
  
]

export default function About() {
  return (
    <section
      id="about-detail"
      className="relative overflow-hidden bg-deep-navy py-24 md:py-32"
    >
      {/* Ambient system glow */}
      <div className="pointer-events-none absolute -top-48 right-[-10%] h-[520px] w-[520px] rounded-full bg-sky/[0.055] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-10%] h-[460px] w-[460px] rounded-full bg-blue/[0.045] blur-[120px]" />

      {/* Technical grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-7">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px]"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky animate-pulse" />
              <span className="h-1.5 w-1.5 rounded-full bg-sky/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-sky/20" />
            </div>

            <div className="font-mono text-[10px] tracking-[0.16em] text-gold">
              PROFILE / CAPABILITY
            </div>
          </div>

          <div className="flex items-start justify-between gap-10">
            <div>
              <h2 className="font-serif text-4xl font-medium leading-[1.02] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
                About
                <span className="italic text-sky">.</span>
              </h2>

              <p className="mt-6 max-w-[620px] text-base leading-relaxed text-ink-dim md:text-lg">
                Three overlapping systems of capability, built up in parallel
                rather than in sequence.
              </p>
            </div>

            <div className="hidden shrink-0 pt-2 text-right md:block">
              <div className="font-mono text-[9px] tracking-[0.15em] text-ink-faint">
                PROFILE / 003
              </div>

              <div className="mt-3 flex items-center justify-end gap-2">
                <Activity size={12} className="text-sky" />
                <span className="font-mono text-[9px] tracking-[0.1em] text-sky">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CAPABILITY GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={group.fullWidth ? 'md:col-span-2' : ''}
            >
              <TiltCard>
                <div
                  className={`
                    relative grid h-full
                    ${group.fullWidth
                      ? 'sm:grid-cols-[1fr_280px]'
                      : 'grid-cols-1 sm:grid-cols-[1fr_140px]'}
                    gap-8
                    p-6 md:p-7
                  `}
                >
                  {/* Decorative number */}
                  <div className="pointer-events-none absolute right-5 top-5 font-mono text-[8px] tracking-[0.12em] text-ink-faint">
                    {group.code}
                  </div>

                  {/* CONTENT */}
                  <div className="relative">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-sky/[0.055]">
                        <group.icon
                          size={19}
                          className="text-sky"
                          strokeWidth={1.7}
                        />
                      </div>

                      <div className="h-px w-10 bg-gradient-to-r from-sky/50 to-transparent" />
                    </div>

                    <h3 className="text-lg font-medium text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1.5 max-w-[520px] text-sm leading-relaxed text-ink-faint">
                      {group.subtitle}
                    </p>

                    <div className="my-6 h-px bg-line" />

                    <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="group/item flex items-start gap-2.5 text-sm text-ink-dim"
                        >
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-line-strong transition-colors group-hover/item:bg-sky" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ILLUSTRATION */}
                  <div className="relative hidden min-h-[190px] items-center justify-center sm:flex">
                    {group.illustration && (
                      <Illustration kind={group.illustration} />
                    )}
                  </div>

                  {/* Bottom status */}
                  <div className="absolute bottom-4 right-5 hidden items-center gap-2 sm:flex">
                    <span className="font-mono text-[7px] tracking-[0.12em] text-ink-faint">
                      SYSTEM ONLINE
                    </span>
                    <span className="h-1 w-1 rounded-full bg-sky" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* FOOTER SIGNAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-sky/30" />

          <div className="flex items-center gap-2">
            <Layers3 size={11} className="text-gold" />
            <span className="font-mono text-[8px] tracking-[0.15em] text-ink-faint">
              THEORY × CODE × CAPITAL
            </span>
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-line to-sky/30" />
        </motion.div>
      </div>
    </section>
  )
}

function Illustration({
  kind,
}: {
  kind: 'academic' | 'technical' | 'financial'
}) {
  if (kind === 'academic') {
    return (
      <div className="relative h-[190px] w-[190px]">
        <div className="absolute inset-[15px] rounded-full border border-line" />
        <div className="absolute inset-[35px] rounded-full border border-sky/10" />

        <div className="absolute left-1/2 top-1/2 h-[1px] w-[125px] -translate-x-1/2 -translate-y-1/2 rotate-[28deg] bg-gradient-to-r from-transparent via-sky/50 to-transparent" />

        <div className="absolute left-1/2 top-1/2 h-[1px] w-[125px] -translate-x-1/2 -translate-y-1/2 -rotate-[38deg] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <svg
          viewBox="0 0 160 160"
          className="absolute inset-0 h-full w-full"
        >
          <line
            x1="25"
            y1="132"
            x2="25"
            y2="25"
            stroke="var(--color-line-strong)"
            strokeWidth="1"
          />

          <line
            x1="25"
            y1="132"
            x2="140"
            y2="132"
            stroke="var(--color-line-strong)"
            strokeWidth="1"
          />

          <path
            d="M25 116 C 48 121, 55 72, 76 79 S 108 52, 140 25"
            fill="none"
            stroke="var(--color-sky)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle
            cx="76"
            cy="79"
            r="4"
            fill="var(--color-gold)"
          />

          <circle
            cx="140"
            cy="25"
            r="4"
            fill="var(--color-sky)"
          />

          <circle
            cx="25"
            cy="116"
            r="3"
            fill="var(--color-blue)"
          />
        </svg>

        <div className="absolute bottom-1 left-1 font-mono text-[7px] tracking-[0.12em] text-ink-faint">
          MODEL / 01
        </div>

        <div className="absolute right-0 top-1 font-mono text-[7px] tracking-[0.12em] text-sky">
          Σ → ∞
        </div>
      </div>
    )
  }

  if (kind === 'technical') {
    return (
      <div className="relative h-[190px] w-[190px]">
        <div className="absolute inset-[14px] rounded-2xl border border-line bg-bg-inset/60" />

        <div className="absolute inset-[25px] rounded-xl border border-line" />

        <div className="absolute left-[40px] top-[45px] flex h-[92px] w-[110px] items-center justify-center">
          <div className="absolute h-14 w-14 rotate-45 rounded-lg border border-sky/30" />
          <div className="absolute h-9 w-9 rotate-45 rounded-md border border-gold/30" />

          <Code2
            size={25}
            className="relative z-10 text-sky"
            strokeWidth={1.4}
          />
        </div>

        <div className="absolute left-[35px] top-[31px] flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        </div>

        <div className="absolute bottom-[37px] left-[38px] right-[38px] space-y-2">
          <div className="h-1 rounded-full bg-sky/50" />
          <div className="h-1 w-[72%] rounded-full bg-line-strong" />
          <div className="h-1 w-[48%] rounded-full bg-gold/50" />
        </div>

        <div className="absolute bottom-1 right-0 font-mono text-[7px] tracking-[0.12em] text-ink-faint">
          BUILD / API
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[190px] w-[250px]">
      {/* Chart frame */}
      <div className="absolute inset-[8px] rounded-2xl border border-line bg-bg-inset/40 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="font-mono text-[7px] tracking-[0.12em] text-ink-faint">
            CAPITAL / SIGNAL
          </div>

          <BarChart3 size={12} className="text-sky" strokeWidth={1.5} />
        </div>

        <div className="relative h-[105px]">
          {/* Grid */}
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:26px_26px]" />

          <svg
            viewBox="0 0 210 105"
            className="relative h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="financialLine" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--color-blue)" />
                <stop offset="70%" stopColor="var(--color-sky)" />
                <stop offset="100%" stopColor="var(--color-gold)" />
              </linearGradient>
            </defs>

            <path
              d="M5 86 C 28 79, 36 82, 54 65 S 82 70, 101 47 S 129 53, 146 35 S 179 37, 205 14"
              fill="none"
              stroke="url(#financialLine)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <circle
              cx="205"
              cy="14"
              r="3"
              fill="var(--color-gold)"
            />

            <circle
              cx="146"
              cy="35"
              r="2.5"
              fill="var(--color-sky)"
            />
          </svg>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="font-mono text-[7px] text-ink-faint">
            ALLOCATION
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[7px] text-sky">
            <ArrowUp size={9} />
            ANALYSIS
          </div>
        </div>
      </div>

      {/* Floating metric */}
      <div className="absolute -right-1 top-[-2px] rounded-lg border border-line bg-bg-raised px-3 py-2 shadow-xl">
        <div className="font-mono text-[7px] text-ink-faint">
          MODEL
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="font-mono text-[8px] text-white">
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  )
}