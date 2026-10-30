# Adarsh Yadav — AI Engineer & Full-Stack Developer

Personal portfolio at **[dev-adarshy.in](https://dev-adarshy.in)**.

## Stack

- **Next.js 16 (App Router)** with **static export** — every page is pre-rendered HTML (fast, SEO-friendly, hostable anywhere)
- **React 19 + TypeScript**, server components by default, client components only where interaction is needed
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`) and **Framer Motion**
- `next/font` for self-hosted Inter, Space Grotesk and JetBrains Mono

## What's inside

- **Home**: hero with a live AI-pipeline demo card, bento-grid About (live IST clock, current project, focus areas),
  services, filterable project grid, scroll-drawn experience timeline, tech stack, contact form
- **Case-study pages** at `/projects/<slug>/` — overview, problem, how it works, highlights, stack — generated from data
- **⌘K / Ctrl+K command palette** to jump to any section or project, copy email, toggle theme
- Dark / light themes, reduced-motion support, skip link, keyboard-friendly
- SEO: per-page metadata, Open Graph image, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`, web manifest

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Editing content

Content lives in `src/content/` — no component changes needed:

| File | What it holds |
| --- | --- |
| `profile.ts` | name, headline, bio, services, experience timeline, achievements, links |
| `projects.ts` | projects + case-study content (add an entry → a new page is generated) |
| `skills.ts` | tech stack groups (logos in `public/stack/`) |

Replace the résumé at `public/Adarsh_Yadav_Resume.pdf`.

## Structure

```
src/
  app/                 routes: page.tsx, projects/[slug], sitemap, robots, OG image, 404
  components/
    layout/            Navbar, Footer, CommandPalette, Background, Providers (theme + palette state)
    sections/          Hero, About, Services, Work, Experience, Skills, Contact
    ui/                Section, Reveal, SpotlightCard, MagneticButton, icons
  content/             all site content
  lib/                 hooks (typewriter, active section)
public/                images, logos, résumé, favicon
```

## Deploying

Build command `npm run build`, output directory `out`.
Vercel and Netlify detect Next.js automatically; for GitHub Pages, upload `out/` with the Pages action.
