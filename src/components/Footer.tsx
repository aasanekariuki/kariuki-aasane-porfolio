export default function Footer() {
  return (
    <footer className="border-t border-line py-9">
      <div className="max-w-[1180px] mx-auto px-6 md:px-7 flex flex-wrap justify-between items-center gap-3 font-mono text-xs text-ink-faint">
        <div className="font-serif text-[15px] text-ink-dim">AASANE</div>
        <div>Economics × Mathematics × Technology × Capital</div>
        <div>Nairobi, Kenya · © {new Date().getFullYear()} Aasane Kariuki</div>
      </div>
    </footer>
  )
}
