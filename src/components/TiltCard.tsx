import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * TiltCard — cursor-tracked 3D tilt (rotateX/rotateY via Framer Motion
 * springs) plus a highlight sheen that brightens with the tilt angle.
 * Shared by Thesis.tsx and About.tsx so every card in the site tilts the
 * same way instead of each section reinventing it slightly differently.
 */
export default function TiltCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 18 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 18 })
  const glareOpacity = useTransform(springRotateX, [-8, 0, 8], [0.12, 0, 0.12])

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
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.01 }}
      className={`
        relative
        h-full
        rounded-xl
        border border-line
        bg-bg-raised
        shadow-[0_1px_2px_rgba(15,23,42,0.04)]
        hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.18)]
        hover:border-line-strong
        transition-shadow
        duration-300
        overflow-hidden
        ${className}
      `}
    >
      <motion.div
        style={{ opacity: glareOpacity }}
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-br
          from-blue-bright
          via-transparent
          to-transparent
        "
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  )
}