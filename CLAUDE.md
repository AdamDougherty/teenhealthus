# CLAUDE.md — Teen Health Project Guidelines

## Project Overview

Teen Health is a nonprofit website supporting vulnerable youth with food, hydration, and personal care. Built with Next.js 14 (App Router, RSC), TypeScript, Tailwind CSS, and Motion for animations.

**GitHub:** github.com/AdamDougherty/teenhealthus
**Production:** 159.65.75.30 (DigitalOcean droplet, pm2-managed at /var/www/teenhealth-starter)

## Environment

- **Platform:** Windows (RDP). PowerShell doesn't support `&&` — use `;` or run commands separately.
- **Deploy with `scp`**, not `rsync` (unavailable on Windows).
- **Shell in Claude Code:** bash — use Unix syntax (forward slashes, /dev/null).
- **Dev server:** `npm run dev` → http://localhost:3000

## Key Directories

| Path | Purpose |
|---|---|
| `app/` | Next.js App Router pages and layouts |
| `components/` | Shared React components |
| `content/` | Content data files (articles.ts, programs.ts) |
| `lib/` | Utilities and site config (site.ts) |
| `public/` | Static assets (images, etc.) |
| `branding/` | Brand assets |
| `tailwind.config.ts` | Brand colors and theme |
| `app/globals.css` | Global styles |

## Workflows

### "Make it live" (deploy)
1. Confirm user has previewed at localhost:3000
2. `git add -A && git commit -m "..." && git push`
3. `scp -r ./* root@159.65.75.30:/var/www/teenhealth-starter/`
4. `ssh root@159.65.75.30 "cd /var/www/teenhealth-starter && npm install && npm run build && pm2 restart teenhealth"`

### "Undo" (revert last commit)
1. Show last commit: `git log -1 --pretty=format:"%s"`
2. `git revert HEAD --no-edit`

## Browser Testing

- **ALWAYS use Playwright** (via `npx playwright`) to automate Chrome for any browser testing, screenshots, or visual checks.
- **NEVER use the Chrome MCP plugin** (preview_start, preview_screenshot, preview_click, etc.) — always use Playwright directly instead.
- Playwright is installed globally (v1.59.0). Run tests with `npx playwright test` or use the Playwright API via Node scripts.

## Development Rules

- Always preview changes at localhost:3000 before deploying
- Never deploy without user confirmation
- Content edits go in `/content/*.ts` files
- All forms POST to `/api/contact`
- Image optimization: AVIF + WebP with 30-day cache configured in next.config.mjs
