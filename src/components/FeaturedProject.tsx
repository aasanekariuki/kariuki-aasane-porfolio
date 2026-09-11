'use client'

import { useMemo, useRef } from 'react'
import type { MouseEvent } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowUpRight,
  Boxes,
  BusFront,
  Database,
  GitBranch,
  MapPin,
  Smartphone,
  WalletCards,
  Zap,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const ARCH_STEPS = [
  { label: 'Passenger', tag: 'ENTRY POINT' },
  { label: 'Web / mobile interface', tag: 'NEXT.JS' },
  { label: 'API layer', tag: 'REST' },
  { label: 'Authentication', tag: 'JWT' },
  { label: 'Business logic', tag: 'FLASK' },
  { label: 'Database', tag: 'POSTGRESQL' },
  { label: 'SACCO / driver / business ecosystem', tag: 'NETWORK' },
]

const FRONTEND = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'shadcn/ui',
  'Framer Motion',
]

const BACKEND = [
  'Flask',
  'SQLAlchemy',
  'PostgreSQL',
  'SQLite',
  'REST APIs',
  'JWT auth',
]

const INTEGRATIONS = [
  'M-Pesa STK Push',
  'Route management',
  'Booking system',
  'Wallets',
]

const CARDS = [
  {
    number: '01',
    title: 'PASSENGER',
    icon: Smartphone,
    description: 'The front door to the network.',
    items: [
      'Discover routes',
      'View fares',
      'Identify SACCOs',
      'Estimated arrival',
      'Bookings',
    ],
  },
  {
    number: '02',
    title: 'DRIVER',
    icon: BusFront,
    description: 'The people moving the city.',
    items: [
      'Manage routes',
      'Manage availability',
      'View passenger info',
      'Manage trips',
    ],
  },
  {
    number: '03',
    title: 'SACCO',
    icon: Boxes,
    description: 'The operational backbone.',
    items: [
      'Route management',
      'Fleet management',
      'Bookings',
      'Wallet',
      'Operational data',
    ],
  },
  {
    number: '04',
    title: 'MARKETPLACE',
    icon: WalletCards,
    description: 'The layer beyond transport.',
    items: [
      'Local businesses',
      'Services',
      'Vendors',
      'Future commerce layer',
    ],
  },
]

const CLOSING =
  "NairobiKonnekt starts small on purpose: one city, one transport network, one set of relationships already in motion. Every layer above it — the wallets, the bookings, the marketplace — is built to sit on top of that foundation, not replace it. The bet is that the fastest way to build real infrastructure for Nairobi is to start with the routes people already take and the SACCOs that already run them."

function Chip({
  children,
  planned = false,
}: {
  children: string
  planned?: boolean
}) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-md
        border
        px-3 py-1.5
        font-mono text-[11px]
        tracking-[-0.01em]
        text-ink-dim
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-sky/40
        hover:text-white
        ${
          planned
            ? 'border-dashed border-gold/30 bg-gold/[0.025]'
            : 'border-line-strong bg-white/[0.015]'
        }
      `}
    >
      {children}
    </span>
  )
}

function DestinationLine({ text }: { text: string }) {
  const reduceMotion = useReducedMotion()
  const letters = useMemo(() => text.split(''), [text])

  return (
    <p className="mt-4 font-mono text-[13px] tracking-[0.08em] text-ink-dim md:text-sm">
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: reduceMotion ? 0 : i * 0.018,
            duration: 0.25,
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </p>
  )
}

function TitleUnderline() {
  const reduceMotion = useReducedMotion()

  return (
    <svg
      className="mt-2 h-2.5 w-[170px] text-sky"
      viewBox="0 0 170 10"
      aria-hidden="true"
    >
      <motion.path
        d="M1,7 C38,2 74,9 112,4 S151,7 169,3"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={
          reduceMotion
            ? undefined
            : { pathLength: 0, opacity: 0 }
        }
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: 'easeInOut',
          delay: 0.1,
        }}
      />
    </svg>
  )
}

function ArchitectureLine({
  steps,
}: {
  steps: typeof ARCH_STEPS
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.82', 'end 0.62'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  })

  const dotTop = useTransform(
    progress,
    [0, 1],
    ['0%', '100%']
  )

  return (
    <div
      ref={ref}
      className="relative max-w-[700px]"
    >
      <div className="absolute bottom-3 left-[15px] top-3 w-px bg-line">
        <motion.div
          className="absolute inset-0 origin-top bg-gradient-to-b from-sky via-blue to-gold"
          style={
            reduceMotion
              ? { scaleY: 1 }
              : { scaleY: progress }
          }
        />

        {!reduceMotion && (
          <motion.div
            className="
              absolute left-1/2
              h-2.5 w-2.5
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-sky
              shadow-[0_0_14px_3px_rgba(56,189,248,0.35)]
            "
            style={{ top: dotTop }}
          />
        )}
      </div>

      <ol className="relative z-10 flex flex-col gap-5 md:gap-6">
        {steps.map((step, index) => (
          <motion.li
            key={step.label}
            initial={
              reduceMotion
                ? undefined
                : { opacity: 0, x: -8 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.4,
              delay: index * 0.04,
            }}
            className="grid grid-cols-[32px_1fr] items-start gap-3"
          >
            <span
              className="
                mt-1
                h-3 w-3
                justify-self-center
                rounded-full
                border-2 border-sky/70
                bg-bg-raised
                shadow-[0_0_0_3px_rgba(56,189,248,0.035)]
              "
            />

            <div
              className="
                flex flex-col gap-1.5
                border-b border-line
                pb-3.5
                sm:flex-row
                sm:items-baseline
                sm:justify-between
                sm:gap-6
              "
            >
              <span className="font-mono text-[12px] text-white md:text-[13px]">
                {step.label}
              </span>

              <span className="font-mono text-[9px] tracking-[0.1em] text-ink-faint md:text-[10px]">
                {step.tag}
              </span>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}

function SystemCard({
  number,
  title,
  icon: Icon,
  description,
  items,
}: {
  number: string
  title: string
  icon: typeof Smartphone
  description: string
  items: string[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const rotateX = useSpring(0, {
    stiffness: 180,
    damping: 20,
    mass: 0.45,
  })

  const rotateY = useSpring(0, {
    stiffness: 180,
    damping: 20,
    mass: 0.45,
  })

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5

    rotateY.set(px * 7)
    rotateX.set(py * -7)
  }

  function onMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="
        group relative
        min-h-[275px]
        overflow-hidden
        rounded-xl
        border border-line
        bg-bg-raised
        p-5
        transition-colors duration-300
        hover:border-sky/30
        [will-change:transform]
      "
    >
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16
          h-40 w-40
          rounded-full
          bg-sky/[0.045]
          blur-3xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative flex items-start justify-between">
        <div
          className="
            flex h-9 w-9
            items-center justify-center
            rounded-lg
            border border-line-strong
            bg-bg-inset
            text-sky
          "
          style={{ transform: 'translateZ(16px)' }}
        >
          <Icon size={16} strokeWidth={1.6} />
        </div>

        <span
          className="
            font-mono text-[9px]
            tracking-[0.14em]
            text-ink-faint
          "
        >
          {number}
        </span>
      </div>

      <div
        className="relative mt-8"
        style={{ transform: 'translateZ(12px)' }}
      >
        <div className="mb-2 h-px w-7 bg-sky/70 transition-all duration-300 group-hover:w-12" />

        <h5 className="font-mono text-[11px] font-medium tracking-[0.13em] text-sky">
          {title}
        </h5>

        <p className="mt-2 max-w-[220px] text-[12px] leading-relaxed text-ink-faint">
          {description}
        </p>
      </div>

      <ul
        className="relative mt-6 flex flex-col gap-2"
        style={{ transform: 'translateZ(8px)' }}
      >
        {items.map((item) => (
          <li
            key={item}
            className="
              flex items-start gap-2
              text-[12.5px]
              leading-relaxed
              text-ink-dim
            "
          >
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-line-strong transition-colors group-hover:bg-sky/60" />
            {item}
          </li>
        ))}
      </ul>

      <div
        className="
          pointer-events-none absolute
          bottom-4 right-5
          flex items-center gap-1.5
          font-mono text-[7px]
          tracking-[0.12em]
          text-ink-faint
        "
      >
        <span className="h-1 w-1 rounded-full bg-sky/70" />
        CONNECTED
      </div>
    </motion.div>
  )
}

function NetworkVisual() {
  return (
    <div className="relative hidden h-[250px] overflow-hidden rounded-xl border border-line bg-bg-inset/50 lg:block">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:38px_38px]" />

      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky/30 bg-sky/[0.04] shadow-[0_0_50px_rgba(56,189,248,0.08)]">
        <div className="absolute inset-3 rounded-full border border-blue/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin
            size={22}
            className="text-sky"
            strokeWidth={1.4}
          />
        </div>
      </div>

      {[
        {
          className: 'left-[18%] top-[22%]',
          label: 'PASSENGER',
          icon: Smartphone,
        },
        {
          className: 'right-[16%] top-[20%]',
          label: 'DRIVER',
          icon: BusFront,
        },
        {
          className: 'left-[15%] bottom-[19%]',
          label: 'SACCO',
          icon: Boxes,
        },
        {
          className: 'right-[13%] bottom-[18%]',
          label: 'COMMERCE',
          icon: WalletCards,
        },
      ].map(({ className, label, icon: Icon }) => (
        <div
          key={label}
          className={`absolute ${className} flex flex-col items-center gap-2`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong bg-bg-raised text-ink-dim">
            <Icon size={14} strokeWidth={1.4} />
          </div>
          <span className="font-mono text-[7px] tracking-[0.12em] text-ink-faint">
            {label}
          </span>
        </div>
      ))}

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 250"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M105 62 L250 125 L395 60"
          fill="none"
          stroke="var(--color-sky)"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <path
          d="M95 190 L250 125 L405 190"
          fill="none"
          stroke="var(--color-blue)"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      </svg>

      <div className="absolute bottom-4 left-5 flex items-center gap-2 font-mono text-[7px] tracking-[0.13em] text-ink-faint">
        <GitBranch size={10} className="text-gold" />
        CITY NETWORK / 001
      </div>

      <div className="absolute right-5 top-5">
        <Zap size={13} className="text-gold/70" />
      </div>
    </div>
  )
}

export default function FeaturedProject() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="nairobikonnekt"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-sky/[0.035] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-blue/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-[1180px] px-6 md:px-7">
        {/* HEADER */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-[650px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-sky" />

              <span className="font-mono text-[9px] tracking-[0.16em] text-sky">
                FEATURED PROJECT / 001
              </span>
            </div>

            <h2 className="font-serif text-[clamp(34px,5vw,54px)] leading-[0.98] tracking-[-0.035em] text-white">
              NairobiKonnekt
              <span className="text-sky">.</span>
            </h2>

            <TitleUnderline />

            <DestinationLine text="Not just an app. A system." />
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.025] px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              <span className="font-mono text-[9px] tracking-[0.1em] text-gold">
                IN DEVELOPMENT
              </span>
            </div>
          </div>
        </div>

        {/* MAIN PROJECT PANEL */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-bg-raised">
          {/* Top accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-sky/60 to-transparent" />

          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            {/* PROJECT INTRO */}
            <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <span className="rounded-md border border-sky/20 bg-sky/[0.04] px-2 py-1 font-mono text-[8px] tracking-[0.12em] text-sky">
                    URBAN INFRASTRUCTURE
                  </span>

                  <span className="font-mono text-[8px] tracking-[0.12em] text-ink-faint">
                    NAIROBI / KE
                  </span>
                </div>

                <h3 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.05] tracking-[-0.025em] text-white">
                  NairobiKonnekt
                </h3>

                <p className="mt-2 font-serif text-lg italic text-sky/80">
                  Get to know your city.
                </p>

                <p className="mt-6 max-w-[680px] text-[14px] leading-[1.85] text-ink-dim md:text-[15px]">
                  NairobiKonnekt is a community-first mobility and
                  commerce platform designed around Nairobi's informal
                  transport and business ecosystem. The initial product
                  connects passengers, drivers, SACCOs, routes, and local
                  businesses. The long-term vision is infrastructure that
                  ties together mobility, commerce, payments, logistics,
                  and urban data — starting from the routes and
                  relationships that already move the city.
                </p>
              </div>

              <NetworkVisual />
            </div>

            {/* ARCHITECTURE */}
            <div className="mt-12 border-t border-line pt-10 md:mt-14 md:pt-12">
              <div className="mb-8 flex items-end justify-between gap-6">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Database
                      size={12}
                      className="text-sky"
                      strokeWidth={1.5}
                    />

                    <span className="font-mono text-[9px] tracking-[0.14em] text-sky">
                      SYSTEM ARCHITECTURE
                    </span>
                  </div>

                  <p className="text-[12px] text-ink-faint">
                    From entry point to city-scale network.
                  </p>
                </div>

                <span className="hidden font-mono text-[8px] tracking-[0.12em] text-ink-faint sm:block">
                  FLOW / 001 → 007
                </span>
              </div>

              <ArchitectureLine steps={ARCH_STEPS} />

              {/* STACK */}
              <div className="mt-10 grid gap-8 border-t border-line pt-9 md:grid-cols-2">
                <div>
                  <span className="mb-3 block font-mono text-[9px] tracking-[0.14em] text-ink-faint">
                    FRONTEND
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {FRONTEND.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="mb-3 block font-mono text-[9px] tracking-[0.14em] text-ink-faint">
                    BACKEND
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {BACKEND.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <span className="mb-3 block font-mono text-[9px] tracking-[0.14em] text-gold/70">
                  INTEGRATIONS / PLANNED
                </span>

                <div className="flex flex-wrap gap-2">
                  {INTEGRATIONS.map((item) => (
                    <Chip key={item} planned>
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            {/* ECOSYSTEM */}
            <div className="mt-12 border-t border-line pt-10 md:mt-14 md:pt-12">
              <div className="mb-8 flex items-end justify-between gap-6">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Boxes
                      size={12}
                      className="text-gold"
                      strokeWidth={1.5}
                    />

                    <span className="font-mono text-[9px] tracking-[0.14em] text-gold">
                      THE ECOSYSTEM
                    </span>
                  </div>

                  <p className="text-[12px] text-ink-faint">
                    Four connected surfaces. One underlying network.
                  </p>
                </div>

                <span className="hidden font-mono text-[8px] tracking-[0.12em] text-ink-faint sm:block">
                  ACTORS / 004
                </span>
              </div>

              <div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                style={{ perspective: 1200 }}
              >
                {CARDS.map((card) => (
                  <SystemCard
                    key={card.title}
                    number={card.number}
                    title={card.title}
                    icon={card.icon}
                    description={card.description}
                    items={card.items}
                  />
                ))}
              </div>
            </div>

            {/* CLOSING */}
            <div className="mt-12 grid gap-8 border-t border-line pt-9 md:mt-14 md:grid-cols-[1fr_auto] md:items-end md:pt-10">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-px w-5 bg-gold/70" />

                  <span className="font-mono text-[8px] tracking-[0.15em] text-ink-faint">
                    THE THESIS
                  </span>
                </div>

                <p className="max-w-[720px] text-[14px] leading-[1.85] text-ink-dim md:text-[15px]">
                  {CLOSING}
                </p>
              </div>

              <a
                href="#writing"
                className="
                  group
                  inline-flex w-fit
                  items-center gap-2
                  rounded-lg
                  border border-line-strong
                  bg-bg-inset
                  px-4 py-2.5
                  font-mono text-[10px]
                  tracking-[0.04em]
                  text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-sky/40
                "
              >
                <span>Read the full case study</span>

                <ArrowUpRight
                  size={13}
                  className="
                    text-sky
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>

          {/* Bottom metadata strip */}
          <div className="flex flex-col gap-2 border-t border-line bg-bg-inset/50 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <span className="font-mono text-[7px] tracking-[0.15em] text-ink-faint">
              NAIROBIKONNEKT / SYSTEM 001
            </span>

            <div className="flex items-center gap-4 font-mono text-[7px] tracking-[0.12em] text-ink-faint">
              <span>MOBILITY</span>
              <span className="h-1 w-1 rounded-full bg-line-strong" />
              <span>COMMERCE</span>
              <span className="h-1 w-1 rounded-full bg-line-strong" />
              <span>DATA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}