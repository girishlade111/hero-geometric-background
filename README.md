# Hero Geometric Background

An animated landing page for "HexaFlow AI" featuring a mesmerizing geometric hero section — rotating 3D-style polygon meshes with smooth motion effects, plus a full marketing-page section stack (features, process, about, team, contact, footer).

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

**Live demo:** https://girishlade111.github.io/hero-geometric-background/

## What it does

- **Animated geometric hero** (`components/kokonutui/hero-geometric.tsx`) — layered rotating geometric shapes/polygons with staggered entrance animations via Framer Motion.
- **Custom cursor follower** — a smooth, physics-feel cursor glow that tracks the pointer across the page.
- **Full landing-page sections** — sticky navigation, AI automation showcase, process steps, features grid, about, call-to-action blocks, team section, contact section, and footer.
- **Dark-first design** — deep black (`#030303`) theme with red accent styling, Geist font, fully responsive.
- **shadcn/ui component set** — pre-wired Radix primitives (accordion, dialog, dropdown, tabs, toast, etc.) ready to reuse.

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui (Radix UI primitives), `class-variance-authority`, `clsx`, `tailwind-merge`
- **Animation:** Framer Motion, `@react-three/fiber` / `@react-three/drei`
- **Icons:** Lucide React
- **Fonts:** Geist (via `geist` package)
- **Other:** `next-themes` (dark/light theming), `cmdk`, `embla-carousel-react`, `date-fns`, `@vercel/analytics`

## Quick start

Prerequisites: Node.js 18+ and npm.

```bash
# install dependencies
npm install --legacy-peer-deps

# start the dev server
npm run dev
# open http://localhost:3000

# production build (static export to ./out)
npm run build
```

No environment variables are required — the site runs fully client-side.

## Project structure

```
hero-geometric-background/
├── app/
│   ├── page.tsx          # Home page — composes all sections
│   ├── layout.tsx        # Root layout (fonts, theme provider, analytics)
│   └── globals.css       # Tailwind + global styles
├── components/
│   ├── kokonutui/
│   │   └── hero-geometric.tsx   # Animated geometric hero (the star of the show)
│   ├── navigation.tsx    # Sticky navbar
│   ├── cursor-follower.tsx      # Custom cursor glow
│   ├── ai-automation-section.tsx
│   ├── process-section.tsx
│   ├── features.tsx
│   ├── about.tsx
│   ├── cta.tsx / pre-footer-cta.tsx
│   ├── team-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── 3d-bear.tsx
│   └── ui/               # shadcn/ui primitives (button, dialog, input, ...)
├── lib/                  # Utilities (cn helper, etc.)
├── public/               # Static assets
├── styles/               # Extra stylesheets
├── next.config.mjs       # Static export (output: 'export') + basePath for GitHub Pages
└── components.json       # shadcn/ui config
```

## Deployment

The site is statically exported (`output: 'export'` in `next.config.mjs`), so it can be hosted anywhere that serves static files:

- **GitHub Pages (current):** the `out/` directory from `npm run build` is published to the `gh-pages` branch → https://girishlade111.github.io/hero-geometric-background/
- **Note on `basePath`:** `next.config.mjs` sets `basePath: '/hero-geometric-background'` for the GitHub Pages subpath. Remove the `basePath` (and keep `output: 'export'`) if you deploy to a root domain or Vercel.

## Origin

Originally generated with [v0.app](https://v0.app) and customized afterward.

---

Built by Girish Lade — https://ladestack.in
