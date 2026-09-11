import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

// --- EmailJS config -------------------------------------------------
// Sign up free at emailjs.com, add an Email Service + Template, then
// paste those three IDs here. Nothing sends until these are filled in.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
// ---------------------------------------------------------------------

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-7">
        <span className="font-mono text-xs text-ink-faint">GET IN TOUCH</span>
        <h2 className="mt-3.5 font-serif text-[clamp(30px,5vw,46px)] text-ink">
          Let's build something useful.
        </h2>
        <p className="mt-4 text-ink-dim max-w-[480px] text-base">
          I'm interested in technology, markets, difficult problems, and people
          building ambitious things.
        </p>

        <div className="flex gap-7 mt-8 flex-wrap font-mono text-sm">
          <a href="mailto:hello@aasane.dev" className="border-b border-line-strong pb-1 hover:border-blue hover:text-blue transition-colors">
            Email
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="border-b border-line-strong pb-1 hover:border-blue hover:text-blue transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="border-b border-line-strong pb-1 hover:border-blue hover:text-blue transition-colors">
            LinkedIn
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 max-w-[520px] flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-mono text-xs text-ink-faint">NAME</label>
            <input
              id="name"
              name="user_name"
              type="text"
              required
              className="bg-bg-inset border border-line-strong rounded px-4 py-3 text-sm text-ink focus:border-blue outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-mono text-xs text-ink-faint">EMAIL</label>
            <input
              id="email"
              name="user_email"
              type="email"
              required
              className="bg-bg-inset border border-line-strong rounded px-4 py-3 text-sm text-ink focus:border-blue outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-xs text-ink-faint">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-bg-inset border border-line-strong rounded px-4 py-3 text-sm text-ink focus:border-blue outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="self-start inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded bg-ink text-bg hover:bg-white transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="text-green text-sm">Message sent — thanks, I'll reply soon.</p>
          )}
          {status === 'error' && (
            <p className="text-ink-dim text-sm">
              {EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID'
                ? 'Contact form needs an EmailJS service/template/public key set in Contact.tsx before it can send.'
                : 'Something went wrong sending that — try the email link above instead.'}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
