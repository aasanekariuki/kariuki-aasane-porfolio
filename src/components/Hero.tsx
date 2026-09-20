import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const [time, setTime] = useState('')
  const [imgError, setImgError] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })
  const orbX = useTransform(springX, [-500, 500], [-16, 16])
  const orbY = useTransform(springY, [-500, 500], [-16, 16])
  // slightly stronger parallax for the photo card, opposite tilt on X for depth
  const cardX = useTransform(springX, [-500, 500], [10, -10])
  const cardY = useTransform(springY, [-500, 500], [-10, 10])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2)
      mouseY.set(event.clientY - window.innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="
        relative min-h-[calc(100vh-72px)]
        overflow-hidden
        flex items-center
        pt-20 pb-16
        md:pt-24 md:pb-20
        bg-deep-navy
      "
    >
      {/* Sky-blue wash */}
      <div
        className="
          pointer-events-none
          absolute -top-40 -left-40
          w-[560px] h-[560px]
          rounded-full
          bg-sky/[0.14]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-32 -right-20
          w-[420px] h-[420px]
          rounded-full
          bg-blue/[0.12]
          blur-[110px]
        "
      />

      {/* Faint technical dot grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.35]
          bg-[radial-gradient(circle,var(--color-ink-faint)_1px,transparent_1px)]
          bg-[size:28px_28px]
          [mask-image:linear-gradient(to_bottom,black,transparent_75%)]
        "
      />

      <motion.div
        style={{ x: orbX, y: orbY }}
        className="
          pointer-events-none
          absolute
          left-[60%] top-1/3
          w-[300px] h-[300px]
          rounded-full
          bg-gold/[0.10]
          blur-[90px]
        "
      />

      <div
        className="
          relative z-10
          max-w-[1180px]
          mx-auto
          px-6 md:px-7
          w-full
          grid
          md:grid-cols-[1.05fr_0.95fr]
          gap-12
          lg:gap-16
          items-center
        "
      >
        {/* LEFT */}
        <div>
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-line
              bg-bg-raised
              pl-3 pr-4 py-1.5
              mb-7
              font-mono
              text-[11px]
              text-ink-dim
            "
          >
            <span className="relative flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-sky" />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-sky animate-ping opacity-60" />
            </span>

            <span className="text-white font-medium">Building in public</span>
            <span className="text-ink-faint">·</span>
            <span>Nairobi, KE</span>
            <span className="text-ink-faint">·</span>
            <span className="text-ink-faint">{time} EAT</span>
          </motion.div>

          {/* Headline */}
          <h1
            className="
              font-serif
              text-[12vw]
              sm:text-6xl
              md:text-[4.3rem]
              lg:text-[5rem]
              xl:text-[5.4rem]
              leading-[0.98]
              tracking-[-0.03em]
              text-white
              font-medium
            "
          >
            <RevealLine delay={0.05}>Hi, I'm</RevealLine>

            <RevealLine delay={0.16}>
              <span className="relative inline-block text-sky">
                Aasane.
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.75,
                    duration: 0.4,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="
                    absolute -right-2 bottom-1
                    w-2 h-2 rounded-full
                    bg-gold
                    hidden md:block
                  "
                />
              </span>
            </RevealLine>

            <RevealLine delay={0.27}>Mathematics &amp;</RevealLine>

            <RevealLine delay={0.38}>
              <em className="italic text-ink-dim">Economics Frontier.</em>
            </RevealLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="mt-7 max-w-[500px] text-base sm:text-lg text-ink-dim leading-relaxed"
          >
            Building at the nexus of technology, data, finance, and entrepreneurship. I turn complex data systems and capital into scalable, real-world ventures, currently engineering what’s next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-8 grid sm:grid-cols-3 gap-4 max-w-[px]"
          >
            <Meta label="Field" value="Economics & Mathematics" />
            <Meta label="Based" value="Nairobi, Kenya" />
            <Meta label="Status" value="University of Nairobi" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="mt-9 flex items-center gap-3 flex-wrap"
          >
            <MagneticButton href="#nairobikonnekt" primary>
              Explore my work
            </MagneticButton>

            <MagneticButton href="#resume">
              View résumé
              <ArrowUpRight size={15} />
            </MagneticButton>
          </motion.div>

          {/* Stack row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 pt-6 border-t border-line"
          >
            <div className="font-mono text-[9px] tracking-[0.14em] text-ink-faint mb-3">
              Working with
            </div>

            <div className="flex flex-wrap gap-2">
              {['Python', 'React', 'TypeScript', 'SQL', 'Node.js'].map((tool) => (
                <span
                  key={tool}
                  className="
                    rounded-full
                    border border-line
                    bg-bg-raised
                    px-3 py-1
                    text-xs
                    text-ink-dim
                    hover:border-sky
                    hover:text-sky
                    transition-colors
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT — floating profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[380px] md:min-h-[500px] flex items-center justify-center"
        >
          {/* Mouse-parallax wrapper */}
          <motion.div
            style={{ x: cardX, y: cardY }}
            className="relative w-full max-w-[380px]"
          >
            {/* Idle floating wrapper */}
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [0, 1, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Rotating glow ring behind the photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  pointer-events-none
                  absolute -inset-6
                  rounded-[2.5rem]
                  opacity-60
                  blur-2xl
                  bg-[conic-gradient(from_0deg,var(--color-sky)_0%,transparent_25%,var(--color-gold)_50%,transparent_75%,var(--color-sky)_100%)]
                "
              />

              {/* Photo frame */}
              <div
                className="
                  relative
                  aspect-[4/5]
                  w-full
                  rounded-[2rem]
                  border border-line
                  bg-bg-raised
                  shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]
                  overflow-hidden
                "
              >
                {!imgError ? (
                  // Replace the src below with your own photo.
                  // Drop the file in your `public/images/` folder as `aasane-profile.jpg`,
                  // or point this at wherever you keep it.
                  <img
                    src="/image/Aasane.png"
                    alt="Aasane Kariuki"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Fallback shown until a real photo is added
                  <div className="w-full h-full flex items-center justify-center bg-bg-inset">
                    <span className="font-serif text-6xl text-ink-faint">
                      AK
                    </span>
                  </div>
                )}

                {/* Subtle bottom gradient so any caption/badge stays readable */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-x-0 bottom-0 h-24
                    bg-gradient-to-t from-black/40 to-transparent
                  "
                />
              </div>
            </motion.div>

            {/* Overlapping stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="
                absolute
                -bottom-6 left-6
                md:-bottom-8 md:left-8
                w-[220px]
                rounded-xl
                border border-line
                bg-bg-raised
                shadow-[0_20px_40px_-16px_rgba(0,0,0,0.5)]
                p-4
              "
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sky/10">
                  <span className="w-2 h-2 rounded-full bg-sky" />
                </span>

                <span className="text-sm font-medium text-white">
                  One builder, many systems
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div>
                  <div className="font-mono text-[9px] tracking-wide text-ink-faint">
                    Projects
                  </div>
                  <div className="text-sm text-white font-medium">live</div>
                </div>

                <div>
                  <div className="font-mono text-[9px] tracking-wide text-ink-faint">
                    Stack
                  </div>
                  <div className="text-sm text-white font-medium">
                    4 connected
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          hidden md:flex
          flex-col
          items-center
          gap-2
          text-ink-faint
          hover:text-sky
          transition-colors
          group
        "
      >
        <span className="font-mono text-[9px] tracking-[0.2em]">
          scroll
        </span>

        <ArrowDown
          size={14}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />
      </motion.button>
    </motion.section>
  )
}

function RevealLine({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="group">
      <div className="font-mono text-[9px] tracking-[0.16em] text-ink-faint mb-1.5">
        {label}
      </div>

      <div className="text-xs text-ink-dim group-hover:text-white transition-colors">
        {value}
      </div>
    </div>
  )
}

function MagneticButton({
  href,
  children,
  primary = false,
}: {
  href: string
  children: ReactNode
  primary?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, {
    stiffness: 200,
    damping: 15,
    mass: 0.3,
  })
  const springY = useSpring(y, {
    stiffness: 200,
    damping: 15,
    mass: 0.3,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)

    x.set(relX * 0.25)
    y.set(relY * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={`
        group
        inline-flex
        items-center
        gap-2
        text-sm
        font-medium
        px-5
        py-3
        rounded-lg
        transition-colors
        duration-300
        ${
          primary
            ? 'bg-blue text-white hover:bg-sky shadow-sm shadow-blue/20'
            : 'border border-line text-ink hover:border-sky hover:text-sky'
        }
      `}
    >
      {children}
    </motion.a>
  )
}