# Teen Health

A modern, donation-forward website for Teen Health — supporting vulnerable youth and young adults with nourishing food, hydration, and personal care.

## Tech stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Motion** (scroll reveal animations)
- Content managed in `/content/*` (plain TypeScript — swap to CMS anytime)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, mission, programs, impact stats, CTA |
| `/programs` | Program pillars (Essential Kits, Food Rescue, Local Distribution) |
| `/learn` | Educational articles hub |
| `/learn/[slug]` | Individual articles |
| `/get-involved` | Donate, volunteer, product donations, partnerships |
| `/about` | Mission, story, team, contact form |
| `/partner` | Corporate partnership inquiry + form |
| `/donate-product` | Product donation inquiry + form |
| `/distribute` | Distribution partner application + form |
| `/volunteer` | Volunteer interest + form |
| `/contact` | General contact |

## Local development

```bash
npm install
npm run dev        # → http://localhost:3000
```

## Production deployment

### Server: `159.65.75.30`

The site runs on a DigitalOcean droplet at `/var/www/teenhealth-starter`, managed by **pm2**.

### Deploy steps

```bash
# 1. Build locally to catch errors
npm run build

# 2. Sync files to production (excludes node_modules, .next, .git)
rsync -avz --delete \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.git' \
  ./ root@159.65.75.30:/var/www/teenhealth-starter/

# 3. SSH in, install deps, build, and restart
ssh root@159.65.75.30 "cd /var/www/teenhealth-starter && npm install && npm run build && pm2 restart teenhealth"
```

### pm2 commands (on server)

```bash
pm2 status              # Check process status
pm2 logs teenhealth     # View logs
pm2 restart teenhealth  # Restart
pm2 stop teenhealth     # Stop
```

### Production config highlights

The `next.config.mjs` includes:
- **Image optimization** — AVIF + WebP with 30-day cache
- **Compression** — gzip enabled
- **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`
- **Static asset caching** — immutable 1-year cache for `/_next/static/`, 30-day cache for `/images/`
- **Powered-by header removed** — hides Next.js fingerprint

## Content editing

| Content | File |
|---|---|
| Programs | `content/programs.ts` |
| Articles | `content/articles.ts` |
| Site metadata | `lib/site.ts` |
| Brand colors | `tailwind.config.ts` |
| Global styles | `app/globals.css` |

## Forms

All forms POST to `/api/contact`. Connect to a real email provider (Resend, SendGrid, etc.) for delivery:

- **Contact** — `/about`
- **Partner inquiry** — `/partner`
- **Product donation** — `/donate-product`
- **Distribution partner** — `/distribute`
- **Volunteer interest** — `/volunteer`

## SEO

- `app/sitemap.ts` — auto-generated sitemap
- `app/robots.ts` — crawl config
- Base URL configured in `lib/site.ts`

---

Built with care by [Adam Dougherty](mailto:adam@blizzfull.com)
