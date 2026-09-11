import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'nairobikonnekt', label: 'NairobiKonnekt' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = LINKS.map(({ id }) =>
        document.getElementById(id)
      )

      let current = 'about'

      sections.forEach((section) => {
        if (!section) return

        if (section.getBoundingClientRect().top <= 150) {
          current = section.id
        }
      })

      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleNavClick = (id: string) => {
    setOpen(false)

    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header
      className={`
        sticky top-0 z-50
        transition-all duration-500
        ${
          scrolled
            ? 'border-b border-line bg-deep-navy/85 backdrop-blur-2xl'
            : 'bg-deep-navy/40 backdrop-blur-md'
        }
      `}
    >
      <nav
        className={`
          mx-auto flex max-w-[1180px] items-center justify-between
          px-6 md:px-7
          transition-all duration-500
          ${scrolled ? 'h-[66px]' : 'h-[78px]'}
        `}
      >
        {/* BRAND */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group relative flex items-center"
          aria-label="Go to home"
        >
          <div className="relative">
            <div
              className="
                absolute -inset-3 -z-10
                rounded-full
                bg-sky/10
                opacity-0 blur-xl
                transition-all duration-500
                group-hover:opacity-100
              "
            />

            <span
              className="
                block
                font-serif
                text-[19px]
                font-medium
                tracking-[-0.035em]
                text-white
                transition-transform duration-300
                group-hover:-translate-y-0.5
                md:text-[21px]
              "
            >
              AASANE
              <span className="ml-[5px] text-sky">KARIUKI</span>
            </span>

            <span
              className="
                absolute
                -bottom-1 left-0
                h-px w-0
                bg-gradient-to-r
                from-sky
                via-blue
                to-gold
                transition-all duration-500
                group-hover:w-full
              "
            />
          </div>
        </button>

        {/* DESKTOP NAV */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const isActive = active === link.id

            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    group relative
                    rounded-lg
                    px-3 py-2
                    text-[13px]
                    transition-all duration-300
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-ink-dim hover:text-white'
                    }
                  `}
                >
                  <span className="relative z-10">
                    {link.label}
                  </span>

                  <span
                    className={`
                      absolute inset-0 -z-0
                      rounded-lg
                      bg-white/[0.035]
                      transition-all duration-300
                      ${
                        isActive
                          ? 'scale-100 opacity-100'
                          : 'scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                      }
                    `}
                  />

                  <span
                    className={`
                      absolute
                      bottom-0 left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-sky
                      transition-all duration-300
                      ${
                        isActive
                          ? 'w-4 opacity-100'
                          : 'w-0 opacity-0 group-hover:w-3 group-hover:opacity-70'
                      }
                    `}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        {/* RESUME */}
        <div className="hidden md:block">
          <a
            href="#resume"
            className="
              group
              relative inline-flex
              items-center gap-2
              overflow-hidden
              rounded-lg
              border border-line-strong
              px-4 py-2.5
              text-[13px]
              font-medium
              text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-sky/50
            "
          >
            <span
              className="
                absolute inset-0
                -z-10
                translate-y-full
                bg-gradient-to-r
                from-sky/10
                to-blue/10
                transition-transform duration-300
                group-hover:translate-y-0
              "
            />

            <span>Résumé</span>

            <ArrowUpRight
              size={14}
              className="
                text-sky
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen((value) => !value)}
          className="
            relative flex h-10 w-10
            items-center justify-center
            rounded-lg
            border border-line-strong
            text-white
            transition-all duration-300
            hover:border-sky/50
            hover:bg-white/[0.035]
            md:hidden
          "
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span
            className={`
              transition-transform duration-300
              ${open ? 'rotate-90' : 'rotate-0'}
            `}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden
          border-t border-line
          bg-deep-navy/95
          backdrop-blur-2xl
          transition-all duration-500
          md:hidden
          ${
            open
              ? 'max-h-[520px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <div className="mx-auto max-w-[1180px] px-6 py-3">
          {LINKS.map((link, index) => {
            const isActive = active === link.id

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`
                  flex w-full
                  items-center justify-between
                  border-b border-line
                  py-4
                  text-left text-sm
                  transition-all duration-300
                  ${
                    isActive
                      ? 'text-white'
                      : 'text-ink-dim hover:text-white'
                  }
                `}
                style={{
                  transitionDelay: open
                    ? `${index * 35}ms`
                    : '0ms',
                }}
              >
                <span>{link.label}</span>

                <span
                  className={`
                    h-1.5 w-1.5
                    rounded-full
                    bg-sky
                    transition-all duration-300
                    ${
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                    }
                  `}
                />
              </button>
            )
          })}

          <a
            href="#resume"
            onClick={() => setOpen(false)}
            className="
              flex items-center justify-between
              py-4
              text-sm
              text-white
            "
          >
            <span>Résumé</span>

            <ArrowUpRight
              size={15}
              className="text-sky"
            />
          </a>
        </div>
      </div>
    </header>
  )
}