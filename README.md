# Comfylady — Corporate Website

A premium, informational corporate website for **Comfylady**, a manufacturer,
exporter and OEM partner in feminine hygiene. Brand-led, trust-building and
lead-generation oriented.

> **This is not an eCommerce site.** There is no cart, checkout or purchase
> flow anywhere in the codebase. Product pages are informational, and every
> commercial path terminates in an enquiry.

---

## Stack

| Concern | Choice |
| --- | --- |
| Framework | React 19 + TypeScript, Vite 8 |
| Styling | Tailwind CSS 3 (custom design tokens) |
| Motion | Framer Motion (component + scroll), GSAP + ScrollTrigger (hero timeline) |
| Smooth scroll | Lenis, synced to GSAP's ticker |
| Routing | React Router 7 (lazy-loaded pages) |
| Icons | Lucide React (explicit registry — see below) |
| SEO | react-helmet-async, JSON-LD structured data |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
npx oxlint src   # lint
```

---

## Editing content

**All copy lives in one file: `src/content/content.ts`.**

Every headline, paragraph, button label, feature, FAQ answer, legal clause and
meta description is exported from there. No component hardcodes user-facing
text. To change wording anywhere on the site, edit that file — nothing else.

The file is organised in the order you would work through the site:

| Export | Covers |
| --- | --- |
| `brand`, `contactDetails`, `socialLinks` | Company identity and contact facts |
| `navigation`, `footerContent`, `marquee` | Chrome |
| `home` | Every section of the home page, section by section |
| `whyChooseUs`, `products`, `productSpecs`, `journeySteps`, `qualityStats`, `trustBadges`, `testimonials`, `faqs` | Shared data sets used across pages |
| `about`, `brandValues` | About page |
| `productsPage` | Products page (incl. B2B services) |
| `whyPage` | Why Comfylady page |
| `qualityPage` | Quality & Sustainability page |
| `faqPage`, `contactPage` | FAQ and Contact |
| `legalPages` | Privacy Policy and Terms & Conditions |
| `seo` | Per-page title, description, keywords, canonical path |
| `imagePrompts` | AI generation prompts for every image |

### Adding an icon

Icons are referenced from content by name (`icon: 'ShieldCheck'`). Names are
resolved through an **explicit registry** in `src/components/Icon.tsx`, not a
barrel import — `import * as icons from 'lucide-react'` defeats tree-shaking and
pulls ~240 kB of icons into the bundle. If you add an icon name to
`content.ts`, add the same import to that registry.

Social brand marks (Instagram, Facebook, LinkedIn, YouTube) are hand-drawn SVGs
in `src/components/SocialIcon.tsx`, because Lucide v1 removed brand icons.

---

## Images

No stock photography is bundled. Images are referenced by path from
`public/images/`, and **any missing file degrades into an on-brand blush
placeholder card** (`src/components/SmartImage.tsx`) that names the expected
filename — so the site is fully presentable before art direction is finished.

Ready-to-paste generation prompts for all 19 images are in
[`IMAGE-PROMPTS.md`](./IMAGE-PROMPTS.md) and in `content.ts` → `imagePrompts`.
Drop generated JPEGs into `public/images/` using the exact filenames listed;
nothing in the code needs to change.

---

## Structure

```
src/
├── animations/    Framer variants, GSAP setup, motion-tag helper
├── assets/
├── components/    Reusable UI (buttons, cards, accordion, forms, SEO…)
├── content/       ← ALL site copy
├── hooks/         Smooth scroll, parallax, pointer, count-up
├── layouts/       RootLayout, Header, Footer
├── pages/         One file per route
├── routes/        Route table (lazy-loaded)
├── sections/      Page sections, grouped by page + shared/
├── types/         TypeScript interfaces
└── utils/         Motion helpers, JSON-LD schema builders
```

Pages: Home · About · Products · Why Comfylady · Quality · FAQ · Contact ·
Privacy Policy · Terms & Conditions · 404.

---

## Design system

Tokens are defined in `tailwind.config.js`; component classes in `src/index.css`.

- **Colour** — `rose` (soft rose pink, primary), `blush` (secondary),
  `nude` (warm accent), `cream`/`shell` (soft white grounds), `ink` (deep charcoal text)
- **Type** — Fahkwang throughout, across both the `display` (editorial) and
  `sans` (UI) roles; weight and tracking carry the hierarchy instead of a
  second typeface
- **Scale** — `.display-hero`, `.display-xl/lg/md/sm`, `.eyebrow`, `.lead`; all
  fluid via `clamp()`, so 2K/4K and ultrawide screens scale up rather than
  stretching a fixed layout
- **Layout** — `.shell` (full-bleed, max 2200px), `.shell-narrow` (reading width),
  `.section` (fluid vertical rhythm)
- **Easing** — one curve everywhere: `cubic-bezier(0.16, 1, 0.3, 1)`

### Responsiveness

Breakpoints run `xs` 400 → `4xl` 2560. Horizontal scrolling is prevented
structurally: `overflow-x` is clipped at the root, and every wide element
(tables, the testimonial rail, the marquee) scrolls inside its own container.
Both data tables also have a stacked-card rendering below `md`.

### Motion

- Every section reveals on scroll through shared Framer variants
- Display headlines use masked word-by-word reveals (`TextReveal`)
- The hero is a single GSAP timeline; images parallax against scroll; the hero
  artwork and CTA light fields drift with the pointer
- **Reduced motion is respected throughout** — Lenis is not booted, GSAP
  timelines are skipped, pointer effects are disabled, and CSS animations are
  neutralised by a global `prefers-reduced-motion` block

---

## Accessibility

- Skip-to-content link, single `<h1>` per page, ordered heading levels
- Full keyboard operation: accordion, pillar tab list (arrow keys), product
  drawer and mobile menu all trap Escape and manage focus
- Form errors wired via `aria-invalid` / `aria-describedby`, surfaced only after
  a field is touched; results counts announced with `aria-live`
- The testimonial rail pauses on hover **and** on keyboard focus
- Decorative layers marked `aria-hidden`; icons never carry meaning alone

## SEO

- Per-page title, description, keywords and canonical from `seo` in content.ts
- Open Graph + Twitter card tags
- JSON-LD: `Organization`, `WebSite`, `ItemList` (products, no offers —
  informational site), `FAQPage`, `BreadcrumbList`
- `public/robots.txt` and `public/sitemap.xml` ship ready; update the domain in
  `brand.domain` (content.ts) plus those two files when the live host is known

---

## Before launch

1. **Images** — generate and drop in the 19 files (see `IMAGE-PROMPTS.md`).
   Replace the founder portrait with a real photograph.
2. **Domain** — set `brand.domain` in `content.ts`, and update `robots.txt`,
   `sitemap.xml` and the canonical/OG URLs in `index.html`.
3. **Email addresses** — `info@` and `sales@` are placeholders from the brief;
   confirm before publishing.
4. **Forms are front-end only.** Neither the contact form
   (`src/components/ContactForm.tsx`) nor the footer newsletter
   (`src/layouts/Footer.tsx`) transmits anything — both simulate success after a
   short delay. Wire them to your endpoint, CRM or form service before launch.
5. **Social links** point to `#` — set real URLs in `socialLinks`.
6. **Legal pages** are drafted as reasonable, industry-standard starting points.
   Have them reviewed by a qualified adviser before publishing.
7. **SPA hosting** — configure the host to rewrite all paths to `index.html`,
   or deep links will 404.
