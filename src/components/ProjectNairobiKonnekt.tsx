import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import TiltCard from './TiltCard'

const ARCHITECTURE = [
  { label: 'Passenger', tag: 'Entry point' },
  { label: 'Web / mobile interface', tag: 'Next.js' },
  { label: 'API layer', tag: 'REST' },
  { label: 'Business logic', tag: 'Flask' },
  { label: 'Database', tag: 'PostgreSQL' },
  { label: 'SACCO / driver / business ecosystem', tag: 'Network' },
]

const STACK = {
  Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  Backend: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'REST APIs', 'JWT auth'],
  'Integrations (planned)': ['M-Pesa STK Push', 'Route management', 'Booking system', 'Wallets'],
}

const FEATURES = [
  {
    role: 'Passenger',
    color: 'text-blue',
    items: ['Discover routes', 'View fares', 'Identify SACCOs', 'Estimated arrival', 'Bookings'],
  },
  {
    role: 'Driver',
    color: 'text-gold',
    items: ['Manage routes', 'Manage availability', 'View passenger info', 'Manage trips'],
  },
  {
    role: 'SACCO',
    color: 'text-blue-bright',
    items: ['Route management', 'Fleet management', 'Bookings', 'Wallet', 'Operational data'],
  },
  {
    role: 'Marketplace',
    color: 'text-ink',
    items: ['Local businesses', 'Services', 'Vendors', 'Future commerce layer'],
  },
]

export default function ProjectNairobiKonnekt() {
  return (
    <main className="relative pt-16 pb-28">
      <div className="max-w-[860px] mx-auto px-6 md:px-7">
        {/* Back link */}
        <a
          href="/#nairobikonnekt"
          className="
            inline-flex items-center gap-1.5
            text-sm text-ink-faint hover:text-blue
            transition-colors
            mb-12 mt-8
          "
        >
          <ArrowLeft size={14} />
          Back to projects
        </a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="
              inline-flex items-center gap-1.5
              rounded-full border border-line-strong
              px-3 py-1
              text-xs text-ink-dim
              mb-6
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold pulse-dot" />
            In development
          </span>

          <h1 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-ink font-medium">
            NairobiKonnekt
          </h1>
          <p className="mt-3 italic text-lg text-ink-dim">Get to know your city.</p>

          <p className="mt-6 text-base md:text-lg text-ink-dim leading-relaxed max-w-[640px]">
            NairobiKonnekt is a community-first mobility and commerce platform
            designed around Nairobi's informal transport and business
            ecosystem. The initial product connects passengers, drivers,
            SACCOs, routes, and local businesses. The long-term vision is
            infrastructure that ties together mobility, commerce, payments,
            logistics, and urban data — starting from the routes and
            relationships that already move the city.
          </p>
        </motion.div>

        {/* System architecture */}
        <div className="mt-20">
          <div className="font-mono text-[11px] tracking-[0.14em] text-ink-faint mb-8">
            System architecture
          </div>

          <div className="max-w-[420px]">
            {ARCHITECTURE.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="flex items-center justify-between rounded-lg border border-line bg-bg-raised px-4 py-3">
                  <span className="text-sm font-medium text-ink">{layer.label}</span>
                  <span className="font-mono text-[10px] text-ink-faint">{layer.tag}</span>
                </div>

                {i < ARCHITECTURE.length - 1 && (
                  <div className="relative h-8 w-px bg-line-strong mx-auto">
                    <motion.span
                      className="absolute -left-[3px] w-[7px] h-[7px] rounded-full bg-blue"
                      animate={{ top: ['0%', '100%'] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 0.25,
                      }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="mt-20 grid sm:grid-cols-2 gap-10">
          {Object.entries(STACK).map(([group, tools], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={group.startsWith('Integrations') ? 'sm:col-span-2' : ''}
            >
              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-faint mb-4">
                {group}
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-line bg-bg-raised px-3 py-1.5 text-sm text-ink-dim"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature breakdown */}
        <div className="mt-20">
          <div className="font-mono text-[11px] tracking-[0.14em] text-ink-faint mb-8">
            What each side of the system does
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {FEATURES.map((group, i) => (
              <motion.div
                key={group.role}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TiltCard>
                  <div className="p-5 h-full">
                    <div className={`text-xs font-mono tracking-[0.1em] mb-4 ${group.color}`}>
                      {group.role.toUpperCase()}
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-ink-dim">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-24 pt-10 border-t border-line flex items-center justify-between flex-wrap gap-4"
        >
          <p className="text-ink-dim text-sm max-w-[420px]">
            Interested in how this system is being built, or want to talk
            through the approach?
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue text-white px-5 py-3 text-sm font-medium hover:bg-blue-dark transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </main>
  )
}