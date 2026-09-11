import { useReveal } from '../hooks/useReveal'

const ROWS = [
  { num: '01', name: 'Understand', items: 'Economics · History · First principles' },
  { num: '02', name: 'Model', items: 'Mathematics · Statistics · Probability' },
  { num: '03', name: 'Build', items: 'Software · AI · Infrastructure' },
  { num: '04', name: 'Test', items: 'Data · Experiments · Markets' },
  { num: '05', name: 'Allocate', items: 'Capital · Time · Attention' },
  { num: '06', name: 'Compound', items: 'Knowledge · Systems · Relationships · Businesses' },
]

export default function Framework() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="framework" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1180px] mx-auto px-6 md:px-7">
        <div className="max-w-[640px] mb-14">
          <span className="font-mono text-xs text-ink-faint">METHOD</span>
          <h2 className="mt-3.5 font-serif text-[clamp(28px,4vw,40px)] leading-tight text-ink">
            How a Problem Moves Through Me
          </h2>
          <p className="mt-3.5 text-ink-dim text-base">
            The same six-stage process, whether the problem is a market, a model, or a
            piece of software.
          </p>
        </div>

        <div>
          {ROWS.map((row, i) => (
            <div
              key={row.num}
              className={`grid grid-cols-[40px_1fr] md:grid-cols-[70px_1fr_1.4fr] gap-4 md:gap-6 items-start py-6 border-t border-line ${
                i === ROWS.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="font-mono text-ink-faint text-[13px] pt-1">{row.num}</div>
              <div className="font-serif text-xl text-ink">{row.name}</div>
              <div className="col-span-2 md:col-span-1 text-ink-dim text-sm leading-relaxed">
                {row.items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
