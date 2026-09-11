import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  FlaskConical,
  Layers3,
  Truck,
  Users,
  Utensils,
} from 'lucide-react'
import TiltCard from './TiltCard'

const PROJECTS = [
  {
    icon: Truck,
    number: '01',
    category: 'Professional experience',
    categoryColor: 'text-sky',
    accent: 'bg-sky',
    title: 'CentyPay / Centy ERP',
    role: 'Software Developer',
    description:
  'Software development across the Centy ERP ecosystem, contributing to CentyFleet, CentyBooks, CentyGuard, HR, Payroll, Payments, and other business modules. Work included mobile and web development, UAT testing, product demonstrations, codebase research, integrations, workflow design, debugging, and product delivery within an established engineering team.',    tags: ['Software', 'Mobile', 'UAT'],
  },
  {
    icon: Users,
    number: '02',
    category: 'Community & leadership',
    categoryColor: 'text-gold',
    accent: 'bg-gold',
    title: 'Nairobi Young Investors Network',
    role: 'Founder / Chairperson',
    description:
      'A community initiative focused on investment education, financial markets, entrepreneurship, fintech, and blockchain — built around research and networking for young investors.',
    tags: ['Finance', 'Community', 'Research'],
  },
  {
    icon: Utensils,
    number: '03',
    category: 'Community & impact',
    categoryColor: 'text-sky',
    accent: 'bg-blue',
    title: 'Fichauchi — Community Impact',
    role: 'Technology & Community Lead',
    description:
      'A community project supporting Contributing to Fichauchi, a community-focused organization working to improve the lives of children and underserved communities through food support, clothing drives, community fundraising, and grassroots initiatives. My role spans both technology and direct community engagement — from building and improving the organization’s digital presence and website to participating in fundraising, organizing initiatives, distributing clothing, and engaging directly with the children and communities we serve. through food assistance and community fundraising in Kibra.',
    tags: ['Impact', 'Community', 'Action'],
  },
  {
    icon: FlaskConical,
    number: '04',
    category: 'Ongoing',
    categoryColor: 'text-ink-faint',
    accent: 'bg-ink-faint',
    title: 'Personal Research',
    role: 'Open category',
    description:
      'A flexible, expanding category for independent work in economics, financial markets, AI, mathematical modelling, and African technology ecosystems. New entries appear here as the work matures.',
    tags: ['Economics', 'AI', 'Markets'],
  },
]

export default function OtherProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Ambient system glow */}
      <div className="pointer-events-none absolute left-[-12%] top-[20%] h-[420px] w-[420px] rounded-full bg-sky/[0.025] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-12%] bottom-[5%] h-[420px] w-[420px] rounded-full bg-blue/[0.025] blur-[120px]" />

      <div className="mx-auto max-w-[1180px] px-6 md:px-7">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[720px]"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />

            <span className="font-mono text-[9px] tracking-[0.17em] text-gold">
              SELECTED WORK / 002
            </span>
          </div>

          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="font-serif text-[clamp(36px,5vw,56px)] font-medium leading-[0.98] tracking-[-0.035em] text-white">
                Other Projects
                <span className="text-sky">.</span>
              </h2>

              <div className="mt-3 h-px w-20 bg-gradient-to-r from-sky to-transparent" />

              <p className="mt-5 max-w-[650px] text-[14px] leading-[1.8] text-ink-dim md:text-[15px]">
                NairobiKonnekt sits inside a wider set of professional work,
                community initiatives, and open-ended research.
              </p>
            </div>

            <div className="hidden pb-1 text-right md:block">
              <div className="font-mono text-[8px] tracking-[0.14em] text-ink-faint">
                PORTFOLIO
              </div>
              <div className="mt-2 font-mono text-[9px] tracking-[0.12em] text-sky">
                04 PROJECTS
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                }}
              >
                <TiltCard>
                  <article className="group relative min-h-[330px] overflow-hidden rounded-xl border border-line bg-bg-raised">
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky/[0.035] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top technical line */}
                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex h-full flex-col p-6 md:p-7">
                      {/* META ROW */}
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-center gap-3">
                          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-bg-inset text-sky transition-all duration-300 group-hover:border-sky/30">
                            <Icon
                              size={18}
                              strokeWidth={1.5}
                            />

                            <span
                              className={`
                                absolute -bottom-1 -right-1
                                h-2 w-2 rounded-full
                                ${project.accent}
                              `}
                            />
                          </div>

                          <div>
                            <div
                              className={`
                                font-mono text-[8px]
                                uppercase tracking-[0.14em]
                                ${project.categoryColor}
                              `}
                            >
                              {project.category}
                            </div>

                            <div className="mt-1 font-mono text-[8px] tracking-[0.1em] text-ink-faint">
                              PROJECT / {project.number}
                            </div>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={15}
                          className="
                            text-ink-faint
                            transition-all duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-sky
                          "
                        />
                      </div>

                      {/* TITLE */}
                      <div className="mt-9">
                        <div className="mb-2 h-[2px] w-7 bg-sky/60 transition-all duration-300 group-hover:w-12" />

                        <div className="flex flex-wrap items-baseline justify-between gap-3">
                          <h3 className="font-serif text-[25px] leading-tight tracking-[-0.025em] text-white">
                            {project.title}
                          </h3>

                          <span className="font-mono text-[9px] tracking-[0.08em] text-ink-faint">
                            {project.role}
                          </span>
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="mt-5 max-w-[570px] text-[13px] leading-[1.8] text-ink-dim md:text-[13.5px]">
                        {project.description}
                      </p>

                      {/* FOOTER */}
                      <div className="mt-auto pt-8">
                        <div className="border-t border-line pt-4">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="
                                    rounded-md
                                    border border-line
                                    bg-bg-inset
                                    px-2 py-1
                                    font-mono text-[8px]
                                    tracking-[0.05em]
                                    text-ink-faint
                                    transition-colors duration-200
                                    group-hover:border-line-strong
                                    group-hover:text-ink-dim
                                  "
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <span className="font-mono text-[8px] tracking-[0.1em] text-ink-faint">
                              ACTIVE
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

        {/* BOTTOM SIGNAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 flex items-center gap-4 md:mt-14"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-sky/25" />

          <div className="flex items-center gap-2">
            <Layers3
              size={11}
              strokeWidth={1.5}
              className="text-gold"
            />

            <span className="font-mono text-[8px] tracking-[0.15em] text-ink-faint">
              WORK × COMMUNITY × RESEARCH
            </span>
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-line to-gold/20" />
        </motion.div>
      </div>
    </section>
  )
}