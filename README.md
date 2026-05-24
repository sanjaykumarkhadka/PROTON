# PROTON — Landing Page

Marketing landing page for **PROTON**, an India-first LED display control systems brand
(receiving cards, sending controllers, video processors and software).

Built with **Next.js 14 (App Router)** + plain CSS. Dark, electron-orbit theme.
No build configuration needed — Vercel auto-detects Next.js.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
```

## Project structure

```
proton-web/
├── app/
│   ├── layout.js     # root layout + SEO metadata
│   ├── page.js       # the full landing page
│   └── globals.css   # theme + all styles
├── next.config.mjs
├── package.json
└── vercel.json
```

---

## Deploy to GitHub + Vercel

### Step 1 — Push this folder to your repo

From inside the `proton-web` folder:

```bash
git init
git add .
git commit -m "PROTON landing page"
git branch -M main
git remote add origin https://github.com/sanjaykumarkhadka/PROTON.git
git push -u origin main
```

> If the repo already has commits, run `git pull --rebase origin main` first,
> or (only if you want to overwrite an empty repo) `git push -u origin main --force`.

### Step 2 — Deploy on Vercel (two options)

**Option A — Dashboard (easiest)**
1. Go to https://vercel.com/new
2. "Import Git Repository" → select **sanjaykumarkhadka/PROTON**
3. Vercel auto-detects **Next.js** — leave all defaults
4. Click **Deploy**. Your site goes live at `https://proton-xxxx.vercel.app`
5. Every future `git push` to `main` auto-deploys.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel          # follow prompts (links the project)
vercel --prod   # promote to production
```

### Step 3 — (optional) Custom domain
In the Vercel project → **Settings → Domains**, add your domain (e.g. `proton.in`)
and point its DNS as Vercel instructs.

---

## Notes
- `node_modules/` and `.next/` are git-ignored; Vercel installs and builds fresh.
- All product specs, prices and market figures are planning estimates shown for illustration.
- "Proton" may be a registered trademark of other companies in unrelated classes —
  verify trademark availability before commercial use.
