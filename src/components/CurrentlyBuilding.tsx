import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Compass,
  Sigma,
  Sparkles,
} from 'lucide-react'
import TiltCard from './TiltCard'

const ITEMS = [
  {
    status: 'Active',
    live: true,
    index: '01',
    icon: Compass,
    title: 'NairobiKonnekt',
    label: 'PRODUCT / MOBILITY',
    description:
      'Building the first functional version of the platform — passenger and driver flows first, SACCO tooling next.',
    tags: ['Product', 'Mobility', 'Infrastructure'],
    accent: 'sky',
  },
  {
    status: 'Ongoing',
    live: false,
    index: '02',
    icon: ChartNoAxesCombined,
    title: 'Investment Intelligence',
    label: 'RESEARCH / CAPITAL',
    description:
      'Studying financial markets, valuation, portfolio strategy, and capital allocation in depth.',
    tags: ['Markets', 'Valuation', 'Strategy'],
    accent: 'gold',
  },
  {
    status: 'Ongoing',
    live: false,
    index: '03',
    icon: Code2,
    title: 'Engineering Depth',
    label: 'SYSTEMS / SOFTWARE',
    description:
      'Improving backend, cloud, systems architecture, and applied AI capability.',
    tags: ['Backend', 'Cloud', 'AI'],
    accent: 'blue',
  },
  {
    status: 'Ongoing',
    live: false,
    index: '04',
    icon: Sigma,
    title: 'Mathematical Depth',
    label: 'ANALYSIS / MODELLING',
    description:
      'Strengthening probability, statistics, calculus, and quantitative modelling.',
    tags: ['Probability', 'Statistics', 'Modelling'],
    accent: 'sky',
  },
  {
    status: 'Ongoing',
    live: false,
    index: '05',
    icon: BrainCircuit,
    title: 'Personal Operating System',
    label: 'DISCIPLINE / EXECUTION',
    description:
      'Developing discipline, execution, communication, and leadership as deliberately as any technical skill.',
    tags: ['Discipline', 'Leadership', 'Execution'],
    accent: 'gold',
    fullWidth: true,
  },
]

const ACCENT_STYLES = {
  sky: {
    text: 'text-sky',
    border: 'group-hover:border-sky/30',
    line: 'from-sky',
    glow: 'bg-sky/[0.045]',
    dot: 'bg-sky',
  },
  blue: {
    text: 'text-blue',
    border: 'group-hover:border-blue/30',
    line: 'from-blue',
    glow: 'bg-blue/[0.045]',
    dot: 'bg-blue',
  },
  gold: {
    text: 'text-gold',
    border: 'group-hover:border-gold/30',
    line: 'from-gold',
    glow: 'bg-gold/[0.045]',
    dot: 'bg-gold',
  },
}

export default function CurrentlyBuilding() {
  return (
    <section
      id="currently-building"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-[10%] h-[420px] w-[420px] rounded-full bg-sky/[0.025] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[5%] h-[480px] w-[480px] rounded-full bg-blue/[0.025] blur-[140px]" />

      <div className="mx-auto max-w-[1180px] px-6 md:px-7">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />

            <span className="font-mono text-[9px] tracking-[0.18em] text-gold">
              LIVE WORKSPACE / 004
            </span>

            <span className="hidden font-mono text-[8px] tracking-[0.14em] text-ink-faint md:block">
              UPDATED CONTINUOUSLY
            </span>
          </div>

          <div className="mt-5 flex items-end justify-between gap-10">
            <div>
              <h2 className="font-serif text-[clamp(38px,5vw,58px)] font-medium leading-[0.98] tracking-[-0.04em] text-white">
                Currently Building
                <span className="text-sky">.</span>
              </h2>

              <div className="mt-4 h-px w-24 bg-gradient-to-r from-sky via-blue to-transparent" />

              <p className="mt-5 max-w-[620px] text-[14px] leading-[1.8] text-ink-dim md:text-[15px]">
                A live status, not a highlight reel. Updated as the work moves.
              </p>
            </div>

            <div className="hidden text-right md:block">
              <div className="font-mono text-[8px] tracking-[0.16em] text-ink-faint">
                ACTIVE THREADS
              </div>

              <div className="mt-2 flex items-center justify-end gap-2 font-mono text-[9px] tracking-[0.1em] text-sky">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky shadow-[0_0_10px_rgba(56,189,248,0.55)]" />
                05 IN PROGRESS
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-16">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            const accent = ACCENT_STYLES[item.accent as keyof typeof ACCENT_STYLES]

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                }}
                className={item.fullWidth ? 'sm:col-span-2' : ''}
              >
                <TiltCard>
                  <article
                    className={`group relative min-h-[310px] overflow-hidden rounded-xl border border-line bg-bg-raised transition-all duration-500 ${accent.border}`}
                  >
                    {/* Card glow */}
                    <div
                      className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full ${accent.glow} blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                    />

                    {/* Top accent line */}
                    <div
                      className={`absolute left-0 right-0 top-0 h-px bg-gradient-to-r ${accent.line} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="relative flex h-full flex-col p-6 md:p-7">
                      {/* Card metadata */}
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`relative flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-bg-inset ${accent.text} transition-all duration-300 group-hover:border-line-strong`}
                          >
                            <Icon size={17} strokeWidth={1.5} />

                            <span
                              className={`absolute -bottom-1 -right-1 h-2 w-2 rounded-full ${accent.dot} ${
                                item.live ? 'pulse-dot' : ''
                              }`}
                            />
                          </div>

                          <div>
                            <div
                              className={`font-mono text-[8px] tracking-[0.15em] ${accent.text}`}
                            >
                              {item.label}
                            </div>

                            <div className="mt-1 font-mono text-[8px] tracking-[0.1em] text-ink-faint">
                              THREAD / {item.index}
                            </div>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={15}
                          className={`text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${accent.text}`}
                        />
                      </div>

                      {/* Status */}
                      <div className="mt-8 flex items-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${item.live ? 'bg-gold pulse-dot' : 'bg-ink-faint'}`}
                        />

                        <span
                          className={`font-mono text-[9px] uppercase tracking-[0.14em] ${
                            item.live ? 'text-gold' : 'text-ink-faint'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Main content */}
                      <div className="mt-3">
                        <h3 className="font-serif text-[25px] leading-tight tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-sky">
                          {item.title}
                        </h3>

                        <p className="mt-4 max-w-[560px] text-[13px] leading-[1.8] text-ink-dim md:text-[13.5px]">
                          {item.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-auto pt-8">
                        <div className="border-t border-line pt-4">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-1.5">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-md border border-line bg-bg-inset px-2 py-1 font-mono text-[8px] tracking-[0.05em] text-ink-faint transition-colors duration-300 group-hover:border-line-strong group-hover:text-ink-dim"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <span className="font-mono text-[8px] tracking-[0.1em] text-ink-faint">
                              0{item.index}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom signal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 flex items-center gap-4 md:mt-14"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-sky/25" />

          <div className="flex items-center gap-2">
            <Sparkles
              size={11}
              strokeWidth={1.5}
              className="text-gold"
            />

            <span className="font-mono text-[8px] tracking-[0.15em] text-ink-faint">
              THINK × BUILD × REFINE
            </span>
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-line to-gold/20" />
        </motion.div>
      </div>
    </section>
  )
}