import { useReveal } from '../hooks/useReveal'

type Article = { title: string; category: string; readingTime: string; date: string; abstract: string }

// Empty for now — add entries here as you publish, matching this shape.
const ARTICLES: Article[] = []

export default function Writing() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="writing" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-[1180px] mx-auto px-6 md:px-7">
        <div className="max-w-[640px] mb-14">
          <span className="font-mono text-xs text-ink-faint">NOTEBOOK</span>
          <h2 className="mt-3.5 font-serif text-[clamp(28px,4vw,40px)] leading-tight text-ink">
            Notes From the Frontier
          </h2>
          <p className="mt-3.5 text-ink-dim text-base">
            Thinking in progress on technology, economics, markets, and systems —
            closer to a research notebook than a blog.
          </p>
        </div>

        {ARTICLES.length === 0 ? (
          <div className="border-y border-line py-10">
            <p className="text-ink-dim text-sm max-w-[480px]">
              Nothing published here yet. First notes are in progress — check back
              soon, or read{' '}
              <a href="#capital" className="text-blue border-b border-blue">
                Capital &amp; Markets
              </a>{' '}
              in the meantime.
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            {ARTICLES.map((a) => (
              <div
                key={a.title}
                className="grid grid-cols-[100px_1fr_auto] gap-6 items-baseline py-6 border-t border-line last:border-b"
              >
                <div className="font-mono text-[11.5px] text-ink-faint">{a.date}</div>
                <div>
                  <div className="font-serif text-[17px] text-ink">{a.title}</div>
                  <div className="text-ink-dim text-[13.5px] mt-1.5 max-w-[520px]">{a.abstract}</div>
                </div>
                <div className="font-mono text-[11px] text-blue whitespace-nowrap">
                  {a.category} · {a.readingTime}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
