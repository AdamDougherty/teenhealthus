# Teen Health — Starter Site (charity: water–inspired)

This is a **starter** rebuild that keeps Teen Health’s mission / concepts, but moves to a **cleaner, modern, donation-forward** layout inspired by the *feel* of charity: water:
- big, confident typography
- lots of whitespace
- high contrast
- bold yellow CTA buttons
- simple “pillars” (Why / What we do / How to help)

> ⚠️ Important: this starter does **not** include any charity: water assets (logos, photos, illustrations) and does **not** copy their layouts 1:1. It only borrows general design patterns and a similar color energy.

---

## Tech stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Motion (scroll reveal fades)**
- Lightweight content in `/content/*` (edit in code, no CMS yet)

---

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run start
```

---

## Pages (slimmed down)

The current teenhealth.us site appears to have many endpoints (multiple “Did you know”, “Nutrition matters”, “Barriers to access”, “Food rescue”, etc.). This starter intentionally **consolidates** into fewer, clearer pages:

- `/` — Home
- `/programs` — What we do (program pillars)
- `/learn` — Consolidated “education / context” hub (cards)
- `/learn/[slug]` — Individual articles (from `/content/articles.ts`)
- `/get-involved` — Donate / volunteer / product donations / partnerships
- `/about` — Mission, story, transparency, contact

---

## Content editing

### Programs
Edit: `content/programs.ts`

### Articles
Edit: `content/articles.ts`

These are plain TypeScript objects (easy to swap to MDX/CMS later).

---

## Brand & theme

### Colors
Edit in:
- `tailwind.config.ts` (theme colors)
- `app/globals.css` (small globals)

### Fonts
Configured in `app/layout.tsx` using `next/font/google`:
- Inter (primary sans)
- Playfair Display (bold serif for headings)

Swap these to your preferred brand fonts anytime.

### Motion / scroll reveals
Subtle scroll fades are handled with `components/Reveal.tsx` (Motion / Framer Motion).
Wrap sections or cards in `<Reveal>` to animate them into view.

---

## Contact form

`/about` includes a simple contact form. It posts to:
- `POST /api/contact` (stubbed)

Right now it just returns `200` with a message. Hook it up to:
- Formspree
- Resend
- SendGrid
- AWS SES
- etc.

---

## SEO

- `app/sitemap.ts`
- `app/robots.ts`

Update the base URL in `lib/site.ts`.

---

## Next steps (recommended)

1. Replace placeholder imagery in `public/` with real field photos.
2. Confirm/refresh any stats and impact numbers.
3. Connect donations to the actual payment flow (Stripe, Donorbox, etc.).
4. Add a CMS (Sanity / Contentful / Strapi / MDX) once content grows.

---

## License

This starter is provided as-is for your project.
