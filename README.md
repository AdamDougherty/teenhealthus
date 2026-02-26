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

## Repository

**GitHub:** [github.com/AdamDougherty/teenhealthus](https://github.com/AdamDougherty/teenhealthus)

## Getting started (for non-technical users)

These steps will get the site running on your computer so you can make changes. You'll use **Antigravity** (or another AI coding assistant) to do the actual editing.

### Prerequisites

You need two things installed on your Mac:

1. **Node.js** (version 20 or newer) — [download here](https://nodejs.org/)
2. **Git** — usually pre-installed on Mac. To check, open Terminal and type `git --version`. If it's not installed, you'll be prompted to install it.

### Step 1: Clone the repository

Open Terminal and run these commands one at a time:

```bash
cd ~/Dev
git clone https://github.com/AdamDougherty/teenhealthus.git
cd teenhealthus
```

> **What this does:** Downloads the entire website project into a folder called `teenhealthus` inside your `Dev` folder. If you don't have a `Dev` folder, run `mkdir ~/Dev` first.

### Step 2: Install dependencies

```bash
npm install
```

> **What this does:** Downloads all the software libraries the site needs to run. This only needs to be done once (or when dependencies change).

### Step 3: Start the local server

```bash
npm run dev
```

> **What this does:** Starts the website on your computer. Open your browser and go to **http://localhost:3000** to see it.

### Step 4: Make changes with Antigravity

1. Open the `teenhealthus` folder in your code editor (VS Code, Cursor, etc.)
2. Open Antigravity / Opus in the sidebar
3. Ask it to make changes in plain English, for example:
   - *"Change the hero headline to 'Supporting youth in Orange County'"*
   - *"Update the Executive Director team photo to use the image I just added to public/images/team/"*
   - *"Add a new article about food insecurity in content/articles.ts"*
4. Antigravity will edit the files for you — you'll see the changes live at `localhost:3000`

### Step 5: Save and push your changes

When you're happy with changes, ask Antigravity:

> *"Commit my changes and push to GitHub"*

Or run manually:
```bash
git add -A
git commit -m "Describe what you changed"
git push
```

### Step 6: Deploy to production

Ask Antigravity:

> *"Deploy to production"*

Or run manually:
```bash
rsync -avz --delete --exclude='node_modules' --exclude='.next' --exclude='.git' ./ root@159.65.75.30:/var/www/teenhealth-starter/
ssh root@159.65.75.30 "cd /var/www/teenhealth-starter && npm install && npm run build && pm2 restart teenhealth"
```

## Local development (quick reference)

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
