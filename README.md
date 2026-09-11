# Portfolio — Aasane Kariuki

Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion + Three.js
(react-three-fiber / drei) + EmailJS.

## Run locally
npm install
npm run dev

## Build
npm run build   # outputs to dist/

## Before you publish
1. `src/components/Contact.tsx` — set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
   EMAILJS_PUBLIC_KEY from your EmailJS dashboard (emailjs.com). Until then the
   form shows a friendly "not configured" message instead of failing silently.
2. `src/components/Contact.tsx` — swap the placeholder GitHub/LinkedIn URLs
   and the `hello@aasane.dev` email for your real ones.
3. `src/components/Writing.tsx` — add entries to the ARTICLES array as you
   publish; it renders an empty state until then.

## Deploy
1. Push this folder to a GitHub repo
2. Import it at vercel.com (New Project → your repo) — Vercel auto-detects Vite
3. Deploy. Done.
# kariuki-aasane-porfolio
