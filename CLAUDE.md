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

### Always edit on main (never on worktree branches)

**Rule:** All source edits and commits must happen in the main checkout at `C:/Users/agentuser/Dev/teenhealth/` on the `main` branch. Even if a session auto-launches inside a worktree (`.claude/worktrees/<name>/` on branch `claude/<name>`), do NOT commit there.

**Why:** localhost:3000 serves from the main checkout, and the deploy reads from main. Commits on worktree branches that aren't merged silently never reach production, so the user sees changes "disappear" between sessions. Multiple weeks of work were lost this way before being recovered manually on 2026-05-02 and 2026-05-03.

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

## Food as Medicine (app/food-as-medicine/)

Converted on 2026-07-30 from a standalone `public/food-as-medicine.html` into a real route at `/food-as-medicine`. It now gets the shared Nav and Footer, appears in the sitemap, and `/food-as-medicine.html` permanently redirects to it (`next.config.mjs`).

It is still **styled differently from the rest of the site**, deliberately — the conversion preserved its original design rather than rebuilding it:
- `food-as-medicine.css` holds its ~314 lines of custom CSS, every rule scoped under `.fam`. The page's outermost `<div>` carries that class; **do not remove it** or the reset (`.fam *`) and layout rules stop applying.
- Its headings use **Lora**, not the site's `--font-serif` (Kazimir Text). Lora is loaded with `next/font` inside `page.tsx` and exposed as `--font-lora`.
- It uses its own `.btn-sun` / `.card` / `.sec` classes rather than `components/Button.tsx` and `components/Card.tsx`, so shared-component changes do not reach it.

`FamEffects.tsx` is a small client component reproducing the original inline script (scroll-reveal on `.rv` elements plus smooth anchor scrolling). The rest of the site uses `<Reveal>`; this page does not.

**Still worth knowing:** its donate buttons silently stayed `mailto:` links throughout the entire Classy era and were only caught during the Zeffy migration. When changing donation links site-wide, grep this page too — it has 5 (four amount tiers plus a main Donate button).

If it is ever restyled to use the shared components, delete `food-as-medicine.css`, the `.fam` wrapper, and the Lora import together.

## PartnerLogoGrid (components/PartnerLogoGrid.tsx)

**Do not revert this component during merge conflict resolution.** The correct version uses:
- Paginated slider (arrows + dots), NOT a flat grid with card boxes
- `mix-blend-multiply` on beige `#f5f0eb` background — no white card wrappers, no shadows, no rings
- Uniform `max-h-[66px]` for standard logos; `size: "lg"` only for logos with excessive whitespace in their source image (Anthropic, Salesforce)
- No `skipBlend` or `rounded` flags — all logos use `mix-blend-multiply`
- Flex rows with fixed-width cells (`w-1/5` desktop, `w-1/3` mobile), NOT `grid-cols` — so a partial last page centers its logos instead of left-aligning them
