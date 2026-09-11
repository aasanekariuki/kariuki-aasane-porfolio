import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ArrowUpRight,
  GraduationCap,
  Layers3,
  MapPin,
  Terminal,
} from 'lucide-react'

const ENTRIES = [
  {
    title: 'University of Nairobi',
    subtitle: 'Economics & Mathematics',
    description:
      'Interdisciplinary training combining economic theory with mathematical and quantitative methods, including econometrics, statistics, probability, calculus, mathematical modelling, financial economics, and analytical problem-solving.',
    type: 'EDUCATION',
    period: 'ACADEMIC',
  },
  {
    title: 'Moringa School',
    subtitle: 'Software Engineering / Cloud Development',
    description:
      'Intensive software engineering training covering full-stack web development, JavaScript, Python, databases, APIs, authentication, cloud development, software architecture, version control, and modern engineering workflows.',
    type: 'EDUCATION',
    period: 'ENGINEERING',
  },
  {
    title: 'CentyPay',
    subtitle: 'Software Development — Fleet',
    description:
      'Worked across the Centy product ecosystem, contributing to full-stack development, application features, APIs, database workflows, testing, debugging, and product delivery. Took ownership of fleet-related development through the CentyFleet module, including mobile development, UAT, demonstrations, and understanding the wider HR and fleet codebases.',
    type: 'EXPERIENCE',
    period: 'PRODUCT',
  },
  {
    title: 'NairobiKonnekt',
    subtitle: 'Founder / Product Builder',
    description:
      "Independently designing and building a mobility and commerce platform for Nairobi's informal transport ecosystem. Working across product strategy, UX, frontend and backend engineering, route data, SACCO workflows, commuter experiences, business listings, payments, and the broader data infrastructure required to connect Nairobi's transport and commerce networks.",
    type: 'BUILDING',
    period: 'INDEPENDENT',
  },
  {
    title: 'Fichauchi',
    subtitle: 'Technology & Community Development',
    description:
      'Contributing across both technology and community initiatives, including designing and building the organisation’s digital presence while supporting its broader work around children, community development, food support, clothing initiatives, and grassroots impact.',
    type: 'EXPERIENCE',
    period: 'IMPACT',
  },
]

const ICONS = [GraduationCap, GraduationCap, Terminal, Layers3, MapPin]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  })

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Ambient atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-[18%] h-[420px] w-[420px] rounded-full bg-sky/[0.025] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[10%] h-[500px] w-[500px] rounded-full bg-blue/[0.025] blur-[130px]" />

      <div className="mx-auto max-w-[1180px] px-6 md:px-7">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sky" />

            <span className="font-mono text-[9px] tracking-[0.18em] text-sky">
              TRAJECTORY / 003
            </span>

            <span className="hidden font-mono text-[8px] tracking-[0.12em] text-ink-faint md:block">
              SYSTEM LOG
            </span>
          </div>

          <div className="mt-5 flex items-end justify-between gap-10">
            <div>
              <h2 className="font-serif text-[clamp(38px,5vw,58px)] font-medium leading-[0.98] tracking-[-0.04em] text-white">
                Experience
                <span className="text-sky">.</span>
              </h2>

              <div className="mt-4 h-px w-24 bg-gradient-to-r from-sky via-blue to-transparent" />

              <p className="mt-5 max-w-[620px] text-[14px] leading-[1.8] text-ink-dim md:text-[15px]">
                Less a résumé, more a trajectory — each stage building on the
                last.
              </p>
            </div>

            <div className="hidden text-right md:block">
              <div className="font-mono text-[8px] tracking-[0.16em] text-ink-faint">
                CURRENT LOCATION
              </div>

              <div className="mt-2 flex items-center justify-end gap-2 font-mono text-[9px] tracking-[0.1em] text-sky">
                <span className="h-1.5 w-1.5 rounded-full bg-sky shadow-[0_0_10px_rgba(56,189,248,0.55)]" />
                NAIROBI, KE
              </div>
            </div>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div
          ref={containerRef}
          className="relative mt-14 max-w-[900px] md:mt-16"
        >
          {/* Horizontal progress indicator */}
          <div className="mb-10 flex items-center gap-4 md:mb-12">
            <span className="font-mono text-[8px] tracking-[0.14em] text-ink-faint">
              ORIGIN
            </span>

            <div className="relative h-px flex-1 overflow-hidden bg-line">
              <motion.div
                style={{ width: progressWidth }}
                className="absolute left-0 top-0 h-px bg-gradient-to-r from-sky to-blue"
              />
            </div>

            <span className="font-mono text-[8px] tracking-[0.14em] text-ink-faint">
              NOW
            </span>
          </div>

          {/* Vertical track */}
          <div className="absolute bottom-5 left-[5px] top-[84px] w-px bg-line" />

          {/* Scroll-linked line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute bottom-5 left-[4px] top-[84px] w-[2px] origin-top bg-gradient-to-b from-sky via-blue to-sky"
          />

          {/* Timeline entries */}
          <div className="space-y-7 md:space-y-8">
            {ENTRIES.map((entry, i) => {
              const Icon = ICONS[i]

              return (
                <motion.article
                  key={entry.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-90px' }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.06,
                  }}
                  className="group relative pl-10 md:pl-14"
                >
                  {/* Marker */}
                  <div className="absolute left-0 top-1.5 flex h-[12px] w-[12px] items-center justify-center">
                    <span className="absolute h-[12px] w-[12px] rounded-full border border-sky/30 bg-bg" />

                    <span className="relative h-[5px] w-[5px] rounded-full bg-sky shadow-[0_0_12px_rgba(56,189,248,0.75)] transition-all duration-300 group-hover:h-[7px] group-hover:w-[7px]" />
                  </div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-xl border border-line bg-bg-raised transition-all duration-500 group-hover:border-line-strong group-hover:bg-bg-raised">
                    {/* Hover light */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky/[0.035] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top accent */}
                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative p-5 md:p-6">
                      {/* Meta */}
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-bg-inset text-sky transition-all duration-300 group-hover:border-sky/30">
                            <Icon size={15} strokeWidth={1.5} />
                          </div>

                          <div>
                            <div className="font-mono text-[8px] tracking-[0.15em] text-sky">
                              {entry.type}
                            </div>

                            <div className="mt-1 font-mono text-[8px] tracking-[0.1em] text-ink-faint">
                              STAGE / {String(i + 1).padStart(2, '0')}
                            </div>
                          </div>
                        </div>

                        <span className="font-mono text-[8px] tracking-[0.12em] text-ink-faint">
                          {entry.period}
                        </span>
                      </div>

                      {/* Main content */}
                      <div className="mt-6">
                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <h3 className="font-serif text-[22px] leading-tight tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-sky">
                            {entry.title}
                          </h3>

                          <span className="font-mono text-[9px] tracking-[0.07em] text-ink-faint">
                            0{i + 1}
                          </span>
                        </div>

                        <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-faint">
                          {entry.subtitle}
                        </div>

                        <p className="mt-4 max-w-[650px] text-[13px] leading-[1.8] text-ink-dim md:text-[13.5px]">
                          {entry.description}
                        </p>
                      </div>

                      {/* Bottom signal */}
                      <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                        <div className="h-px w-5 bg-sky/50 transition-all duration-300 group-hover:w-9" />

                        <span className="font-mono text-[8px] tracking-[0.12em] text-ink-faint">
                          CONTINUING →
                        </span>

                        <div className="ml-auto flex gap-1">
                          <span className="h-1 w-1 rounded-full bg-sky/50" />
                          <span className="h-1 w-1 rounded-full bg-sky/30" />
                          <span className="h-1 w-1 rounded-full bg-sky/15" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* Timeline endpoint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex items-center gap-3 pl-10 md:pl-14"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-sky/25 bg-bg-inset">
              <ArrowUpRight size={12} className="text-sky" />
            </div>

            <div>
              <div className="font-mono text-[8px] tracking-[0.14em] text-sky">
                NEXT CHAPTER
              </div>

              <div className="mt-1 text-[11px] text-ink-faint">
                Still being built.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom system readout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center gap-4 md:mt-16"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-sky/20" />

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky shadow-[0_0_8px_rgba(56,189,248,0.5)]" />

            <span className="font-mono text-[8px] tracking-[0.15em] text-ink-faint">
              TRAJECTORY ACTIVE
            </span>
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-line to-blue/20" />
        </motion.div>
      </div>
    </section>
  )
}