import { useReveal } from '../hooks/useReveal'

const TOPICS = ['Equities', 'Macroeconomics', 'Crypto', 'Fintech', 'Real estate', 'Portfolio construction', 'Business analysis', 'Capital allocation']

export default function Capital() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="capital" className="py-20 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-7">
        <div className="max-w-[640px] mb-14">
          <span className="font-mono text-xs text-ink-faint">FINANCE</span>
          <h2 className="mt-3.5 font-serif text-[clamp(28px,4vw,40px)] leading-tight text-ink">Capital &amp; Markets</h2>
          <p className="mt-3.5 text-ink-dim text-base">
            An active interest in how capital is allocated — not a claim to running
            money professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          <div className="flex flex-wrap gap-2.5 content-start">
            {TOPICS.map((t) => (
              <span key={t} className="font-mono text-xs border border-line-strong text-ink-dim px-3 py-1.5 rounded">
                {t}
              </span>
            ))}
          </div>
          <div className="border border-dashed border-line-strong rounded p-7">
            <span className="block font-mono text-[11.5px] text-gold mb-2.5">INVESTMENT NOTES — COMING SOON</span>
            <p className="text-ink-dim text-sm leading-relaxed">
              A place to publish short research pieces: company analysis, market
              theses, economic observations, and investment frameworks. Nothing
              published yet — this space is reserved for the first note.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
