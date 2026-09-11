import { useRef, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  TrendingUp,
  Sigma,
  Cpu,
  Database,
  Landmark,
  ArrowUpRight,
  Waypoints,
  BookOpen,
  LineChart,
  Activity,
  CircleDot,
} from 'lucide-react'

const LENSES = [
  {
    icon: TrendingUp,
    label: 'Economics',
    text: 'Understand incentives — why people, firms, and markets behave the way they do.',
  },
  {
    icon: Sigma,
    label: 'Mathematics',
    text: 'Understand structure — the formal shape underneath a messy problem.',
  },
  {
    icon: Cpu,
    label: 'Technology',
    text: 'Build — turn a structural understanding into something people can use.',
  },
  {
    icon: Database,
    label: 'Data',
    text: 'Test assumptions — check whether the model survives contact with reality.',
  },
  {
    icon: Landmark,
    label: 'Finance',
    text: 'Allocate capital — decide where belief and evidence justify commitment.',
  },
]

const PROJECTS = [
  {
    icon: Waypoints,
    name: 'NairobiKonnekt',
    description:
        'A digital infrastructure platform connecting Nairobi’s commuters, matatu routes, SACCOs, and local SMEs through accessible city data — starting with mobility and building toward a connected urban commerce and services ecosystem.',

    href: '#nairobikonnekt',
    code: 'NK-01',
    metric: 'LIVE',
  },
  {
    icon: LineChart,
    name: 'Capital Models',
    description:
      'Economic and mathematical models for thinking about markets, incentives, risk, returns, valuation, and capital allocation — built to turn assumptions into numbers that can be tested and argued with Small models for allocation decisions, built to be argued with.',
    href: '#projects',
    code: 'CM-02',
    metric: 'BUILDING',
  },
  {
    icon: BookOpen,
    name: 'Systems Journal',
    description:
      'Public notes on what held up and what broke under pressure.',
    href: '#writing',
    code: 'SJ-03',
    metric: 'OPEN',
  },
]

export default function Thesis() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-deep-navy"
    >
      {/* Ambient system lights */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-sky/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute top-[45%] -left-40 w-[420px] h-[420px] rounded-full bg-blue/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[20%] w-[280px] h-[280px] rounded-full bg-gold/[0.035] blur-[100px]" />

      {/* Technical grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-7">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-[720px]"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky/20" />
            </div>

            <div className="font-mono text-[10px] tracking-[0.16em] text-sky">
              01 / HOW I THINK
            </div>
          </div>

          <div className="flex items-start justify-between gap-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.03em] text-white font-medium">
                The{' '}
                <span className="italic text-sky">
                  Thesis.
                </span>
              </h2>

              <p className="mt-6 text-base md:text-lg text-ink-dim leading-relaxed">
                Economics, mathematics, technology, and finance aren't separate
                disciplines to me. They're different lenses pointed at the same
                object: systems, and how they behave under pressure.
              </p>
            </div>

            {/* System index */}
            <div className="hidden md:block shrink-0 pt-2">
              <div className="font-mono text-[9px] tracking-[0.16em] text-ink-faint">
                SYSTEM / 001
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Activity size={12} className="text-sky" />
                <span className="font-mono text-[9px] text-sky">
                  ANALYZING
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LENS SYSTEM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid sm:grid-cols-2 md:grid-cols-5 border-y border-line"
        >
          {LENSES.map((lens, i) => (
            <motion.div
              key={lens.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              className="
                group
                relative
                py-7
                px-5
                first:pl-0
                md:first:pl-0
                md:border-r
                border-line
                last:border-r-0
                hover:bg-white/[0.015]
                transition-colors
              "
            >
              {/* Number */}
              <div className="absolute top-3 right-4 font-mono text-[8px] text-ink-faint opacity-60">
                0{i + 1}
              </div>

              {/* Icon frame */}
              <div className="relative w-9 h-9 mb-5">
                <div className="absolute inset-0 rounded-lg border border-line group-hover:border-sky/40 transition-colors" />
                <div className="absolute inset-[3px] rounded-md bg-sky/[0.06] flex items-center justify-center group-hover:bg-sky/[0.12] transition-colors">
                  <lens.icon
                    size={16}
                    className="text-sky group-hover:text-white transition-colors"
                    strokeWidth={1.7}
                  />
                </div>
              </div>

              <div className="text-sm font-medium text-white mb-2">
                {lens.label}
              </div>

              <p className="text-[13px] text-ink-dim leading-relaxed pr-2">
                {lens.text}
              </p>

              {/* Bottom signal */}
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px w-8 bg-line-strong group-hover:w-12 group-hover:bg-sky transition-all duration-500" />
                <span className="font-mono text-[8px] text-ink-faint group-hover:text-sky transition-colors">
                  LENS
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CLOSING THESIS */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 max-w-[760px] relative"
        >
          <div className="absolute -left-4 top-1 w-px h-full bg-gradient-to-b from-sky/60 via-blue/20 to-transparent hidden md:block" />

          <p className="text-base md:text-lg text-ink-dim leading-relaxed">
            Entrepreneurship is what closes the loop — it takes an idea out of
            the notebook and puts it in front of real incentives, real users,
            and real capital, where it either{' '}
            <span className="text-white">holds up</span> or it doesn't.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-7"
          >
            <div>
              <div className="font-mono text-[10px] tracking-[0.16em] text-gold mb-3">
                02 / ACTIVE SYSTEMS
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-white tracking-[-0.02em]">
                What I'm{' '}
                <span className="italic text-sky">building.</span>
              </h3>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono text-[9px] text-ink-faint">
              <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
              03 SYSTEMS ONLINE
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TiltCard>
                  <a href={project.href} className="block h-full">
                    {/* Card header */}
                    <div className="flex items-center justify-between mb-7">
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-line bg-sky/[0.06] group-hover:bg-sky/[0.1]">
                        <project.icon
                          size={19}
                          className="text-sky"
                          strokeWidth={1.6}
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[8px] tracking-[0.12em] text-ink-faint">
                          {project.code}
                        </span>

                        <span className="flex items-center gap-1.5 rounded-full border border-line px-2 py-1">
                          <span className="w-1 h-1 rounded-full bg-sky" />
                          <span className="font-mono text-[7px] text-ink-faint">
                            {project.metric}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Card title */}
                    <h3 className="text-lg font-medium text-white mb-2">
                      {project.name}
                    </h3>

                    <p className="text-sm text-ink-dim leading-relaxed mb-7">
                      {project.description}
                    </p>

                    {/* Card footer */}
                    <div className="pt-4 border-t border-line flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sky">
                        Explore
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </span>

                      <span className="font-mono text-[8px] text-ink-faint">
                        OPEN →
                      </span>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FINAL SYSTEM STATEMENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-sky/40 to-transparent" />

          <div className="flex items-center gap-2">
            <CircleDot size={12} className="text-gold" />
            <span className="font-mono text-[8px] tracking-[0.15em] text-ink-faint">
              THEORY → BUILD → TEST → REPEAT
            </span>
          </div>

          <div className="flex-1 h-px bg-gradient-to-l from-sky/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

/**
 * TiltCard — interactive 3D project surface.
 */
function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springRotateX = useSpring(rotateX, {
    stiffness: 150,
    damping: 18,
  })

  const springRotateY = useSpring(rotateY, {
    stiffness: 150,
    damping: 18,
  })

  const glareOpacity = useTransform(
    springRotateX,
    [-8, 0, 8],
    [0.12, 0, 0.12]
  )

  const glareX = useTransform(
    springRotateY,
    [-8, 0, 8],
    ['15%', '50%', '85%']
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    rotateY.set((px - 0.5) * 14)
    rotateX.set((0.5 - py) * 14)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
      }}
      whileHover={{ scale: 1.015 }}
      className="
        group
        relative
        h-full
        min-h-[270px]
        rounded-2xl
        border border-line
        bg-bg-raised
        p-6
        overflow-hidden
        shadow-[0_1px_2px_rgba(0,0,0,0.25)]
        hover:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)]
        hover:border-sky/30
        transition-shadow
        duration-500
      "
    >
      {/* Inner grid */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

      {/* Top-right decorative orbit */}
      <div className="pointer-events-none absolute -top-14 -right-14 w-32 h-32 rounded-full border border-sky/10 group-hover:border-sky/20 transition-colors duration-500" />

      <div className="pointer-events-none absolute -top-8 -right-8 w-20 h-20 rounded-full border border-gold/[0.08] group-hover:rotate-45 transition-transform duration-700" />

      {/* Glare */}
      <motion.div
        style={{
          opacity: glareOpacity,
          left: glareX,
        }}
        className="
          pointer-events-none
          absolute
          top-0
          -translate-x-1/2
          w-[45%]
          h-full
          bg-gradient-to-r
          from-transparent
          via-sky/[0.12]
          to-transparent
          blur-2xl
        "
      />

      {/* Gold corner marker */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16">
        <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-gold opacity-40 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-gold/40 to-transparent" />
        <div className="absolute bottom-4 right-4 h-8 w-px bg-gradient-to-t from-gold/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}