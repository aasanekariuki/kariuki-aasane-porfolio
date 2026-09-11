export default function ResumeCTA() {
  return (
    <section id="resume" className="py-20 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-7">
        <div className="bg-bg-raised border border-line rounded flex flex-wrap justify-between items-center gap-6 p-10 md:p-12">
          <div>
            <h3 className="font-serif text-2xl text-ink">Résumé</h3>
            <p className="text-ink-dim text-sm mt-2 max-w-[420px]">
              Summary, education, experience, projects, leadership, and technical &amp;
              analytical skills — one page, kept current.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded bg-ink text-bg hover:bg-white transition-colors"
          >
            Download résumé
          </button>
        </div>
      </div>
    </section>
  )
}
