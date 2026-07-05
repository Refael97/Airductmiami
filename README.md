# Air Duct Florida — SEO & AI-Optimized Website

A fast, static, 100-page website for an air duct / dryer vent cleaning business
serving **all of Florida**. Built with [Astro](https://astro.build) for maximum
SEO performance (zero JavaScript by default) and optimized for AI answer engines
(ChatGPT, Perplexity, Google AI Overviews).

## What's inside

- **~106 pages**: home + 7 core pages, 10 service pages, 38 Florida city pages,
  and 50 educational blog articles.
- **SEO built in**: unique title/meta/canonical per page, Open Graph + Twitter
  cards, automatic `sitemap-index.xml`, `robots.txt`, and JSON-LD structured
  data (`HVACBusiness`/`LocalBusiness`, `Service`, `Article`, `FAQPage`,
  `BreadcrumbList`, `WebSite`).
- **AI-engine optimization (AEO/GEO)**: answer-first content, FAQ blocks (with
  `FAQPage` schema) on every service/city/article, plus `llms.txt` for LLMs.
- **Programmatic pages**: services and cities render from typed data files, so
  adding a city or service is a one-line data edit.

## Project structure

```
src/
  data/
    business.ts   # ⚠️ business NAP (name, phone, address) — PLACEHOLDERS to replace
    services.ts   # 10 services (content + FAQ + facts)
    cities.ts     # 38 Florida cities (unique local copy)
  content/
    blog/         # 50 Markdown articles
  content.config.ts # blog collection schema
  layouts/BaseLayout.astro   # SEO <head>, meta, JSON-LD
  components/     # Header, Footer, FAQ, Breadcrumbs, CTABand, JsonLd
  lib/schema.ts   # JSON-LD builders
  pages/          # routes (services/[service], service-areas/[city], blog/[...slug])
  styles/global.css
public/
  robots.txt  llms.txt  favicon.svg  og-image.svg
astro.config.mjs  # set the production `site` URL here
```

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # preview the production build
```

## Before launch — required customization

1. **Business details** — edit `src/data/business.ts` and replace every value
   marked `TODO` (name, phone, email, address, coordinates, hours, social).
   This feeds the header, footer, contact page, and LocalBusiness schema, so
   accuracy matters for local SEO.
2. **Domain** — set the real domain in `astro.config.mjs` (`SITE_URL`) and in
   `public/robots.txt` (the `Sitemap:` line). Canonical URLs, the sitemap, and
   structured data all derive from this.
3. **Contact form** — the form in `src/pages/contact.astro` posts to `#`. Point
   its `action` at a form handler (Formspree, Netlify Forms, Web3Forms, etc.).
4. **OG image / favicon** — replace `public/og-image.svg` (1200×630) and
   `public/favicon.svg` with branded assets. A PNG OG image renders more widely
   on social platforms.
5. **Reviews / rating** — update `ratingValue` and `reviewCount` in
   `business.ts` to real numbers (only claim real reviews).

## Adding content

- **New city page**: add an entry to `cities.ts`. A full local page is generated
  automatically.
- **New service**: add an entry to `services.ts`.
- **New article**: add a Markdown file to `src/content/blog/` with the frontmatter
  fields defined in `src/content.config.ts` (`title`, `description`, `answer`,
  `pubDate`, `category`, `tags`, `faq`).

## Deployment

The site is fully static — deploy the `dist/` folder anywhere. Recommended:

- **Netlify / Vercel / Cloudflare Pages**: connect the repo, set build command
  `npm run build` and publish directory `dist`. No server or runtime needed.
- After deploying, submit `https://your-domain/sitemap-index.xml` in Google
  Search Console and Bing Webmaster Tools.

## SEO / AI notes

- Every page ships answer-first copy and FAQ schema so answer engines can quote
  it directly.
- Keep NAP (name, address, phone) identical everywhere — it all flows from
  `business.ts`, so edit it in one place.
- `llms.txt` at the site root gives LLMs a concise, structured overview.
