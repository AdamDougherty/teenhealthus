# CLAUDE.md — Teen Health Project Guidelines

## Project Overview

Teen Health is a nonprofit website supporting vulnerable youth with food, hydration, and personal care. Built with Next.js 14 (App Router, RSC), TypeScript, Tailwind CSS, and Motion for animations.

**GitHub:** github.com/AdamDougherty/teenhealthus
**Live site:** https://teenhealth.us (also responds at www.teenhealth.us). Note: the GitHub repo name is `teenhealthus` but the actual domain is `teenhealth.us` — do not guess `teenhealthus.org`, it does not exist.
**Production:** 159.65.75.30 (DigitalOcean droplet, pm2-managed at /var/www/teenhealth-starter, fronted by Caddy at /etc/caddy/Caddyfile)

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
3. Upload only what's needed at runtime (skips ~377MB of `node_modules` and dev-only artifacts; `npm install` on the server rebuilds dependencies from `package-lock.json`):
   ```
   scp -r app components content lib public package.json package-lock.json next.config.mjs next-env.d.ts postcss.config.mjs tailwind.config.ts tsconfig.json root@159.65.75.30:/var/www/teenhealth-starter/
   ```
4. `ssh root@159.65.75.30 "cd /var/www/teenhealth-starter && npm install && npm run build && pm2 restart teenhealth"`

If a new top-level file or directory is added that needs to ship (rare), add it to the `scp` list above. New code inside `app/`, `components/`, `content/`, `lib/`, or `public/` ships automatically.

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

## PartnerLogoGrid (components/PartnerLogoGrid.tsx)

**Do not revert this component during merge conflict resolution.** The correct version uses:
- Paginated slider (arrows + dots), NOT a flat grid with card boxes
- `mix-blend-multiply` on beige `#f5f0eb` background — no white card wrappers, no shadows, no rings
- Uniform `max-h-[66px]` for standard logos; `size: "lg"` only for logos with excessive whitespace in their source image (Anthropic, Salesforce)
- No `skipBlend` or `rounded` flags — all logos use `mix-blend-multiply`
