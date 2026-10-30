# Adarsh Yadav — Portfolio

Personal portfolio at **[dev-adarshy.in](https://dev-adarshy.in)**, rebuilt from flat HTML/CSS/JS on a modern stack.

## Stack

- **React 19 + TypeScript**, bundled with **Vite**
- **Tailwind CSS v4** for styling (design tokens in `src/index.css`)
- **Framer Motion** for scroll reveals, magnetic buttons, 3D tilt cards and transitions
- **lucide-react** icons, self-hosted **Inter** and **Space Grotesk** variable fonts

## Features

- Dark and light themes (follows the OS setting, remembered per visitor)
- Animated aurora background, cursor glow and scroll progress bar
- Typewriter role text, animated stat counters, infinite tech-stack marquee
- Spotlight-border cards, 3D tilt project cards, magnetic CTAs
- Active-section navbar pill and an animated mobile menu
- Fully responsive, respects `prefers-reduced-motion`, SEO and Open Graph meta tags

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Editing content

All text, links, skills and projects live in **`src/data/portfolio.ts`**, so you never need to touch the components.
Replace the resume at `public/Adarsh_Yadav_Resume.pdf` and the photos in `src/assets/`.

## Project structure

```
public/            static files served as-is (resume, favicon)
src/
  assets/          images and tech-stack logos
  components/      Navbar, Hero, About, Skills, Projects, Contact, Footer, …
  data/            portfolio.ts (all site content)
  hooks/           useTheme, useTypewriter, useActiveSection
  App.tsx          page composition
  index.css        Tailwind setup, colour tokens, custom utilities
```

## Deploying

Any static host works: build command `npm run build`, output directory `dist`.
On Vercel or Netlify, import the repo and these settings are detected automatically.
