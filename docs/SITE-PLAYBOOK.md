# Service site playbook

The rules every site in the network follows. They are written from what
actually moved the numbers on the first site, not from generic SEO advice.

## Non-negotiables

1. **One repo, one static build.** Astro, zero JS by default, deployed to
   Netlify. Fast pages are a ranking factor and a conversion factor, and a
   static site has nothing to break at 2am.
2. **One source of truth per site**: `src/data/business.ts`. Name, phone,
   email, service area, network identity. Nothing hardcoded in templates.
3. **Data-driven pages.** Services and cities live in typed data files;
   templates render them. Adding a city is a data edit, not a new page file.
4. **Every page earns its place.** A page exists because a real query exists
   for it. No page is published to "have more pages."
5. **Human writing.** No em dashes, no "in today's fast-paced world", no
   robotic listicle voice. Every claim is one a technician would actually
   make.
6. **Never contradict yourself across the site.** If the blog says a real
   cleaning costs $300 to $600, no popup, page, or AI agent may offer $99.
   Consistency is the trust asset.
7. **The sites do not link to each other.** Ever. Cross-linking a network of
   same-owner money sites is a link scheme; one penalty would take down all
   of them. Each site stands alone.

## Page architecture (the shape that worked)

| Bucket | Count | Purpose |
|---|---|---|
| Core | 8 | Home, About, Contact, Services hub, Areas hub, Blog hub, FAQ, Privacy |
| Services | 8 to 12 | One per real service, each a money page |
| Cities | 30 to 40 | `/service-areas/{city}` with genuinely local copy |
| Regions | 3 to 5 | County / metro pages, the layer between state and city |
| Articles | 40 to 60 | Cost guides, how-often, symptoms, safety, comparisons |
| Second language | mirror | Only where the market justifies it (see below) |

**Regional pages matter more than they look.** Queries like "air duct
cleaning broward" have no city page to land on and no state page that feels
local. That layer was pure upside on site one.

## SEO rules

- Unique title and meta description per page. **Keyword first, value second,
  brand last**: `Air Duct Cleaning in Florida | Free Quotes | Brand`.
- Numbers in titles pull clicks: `$300 to $700`, `The 30% to 50% Rule`.
- JSON-LD everywhere: LocalBusiness sitewide, Service on service pages,
  Article on posts, FAQPage on every FAQ block, BreadcrumbList on deep pages.
- **No fake review schema.** AggregateRating only with real reviews.
- One canonical URL form, enforced by a server-side 301, not just a canonical
  tag. Google overrode our canonical tag on a real page; only the redirect
  fixed it.
- `sitemap-index.xml`, `robots.txt` welcoming AI crawlers, `llms.txt` and
  `llms-full.txt` for answer engines.
- hreflang reciprocal on every translated page, plus `x-default`.

## GEO / AEO rules (answer engines)

- Every page opens with a short, quotable direct answer before any depth.
- FAQ block on every service, city, and article page, wired to FAQPage
  schema.
- Extractable facts in tables: price ranges, frequencies, durations, limits.
- Self-contained sentences. An engine quoting one line out of context must
  still be correct.

## Conversion rules

- **Three paths, always**: a sticky mobile CTA, an engagement popup, and a
  full contact form. Different visitors convert differently.
- Popup fires on **engagement** (45% scroll or 25s), never on a timer from
  page load. A popup before the first paragraph is an interruption.
- Popup offer matches page context (dryer pages get the dryer offer).
- **Discount framing, never a cheap fixed price.** "$50 off" reads as a real
  business; "$99 total" reads like the bait ads our own scam article warns
  about.
- Every CTA is measured separately in GA4: `phone_call`, `generate_lead`
  (with `form_type`), `popup_view` (with `trigger` and `offer`).
- Excluded surfaces: no popup or sticky bar on contact, thank-you, or privacy
  pages.

## Second language: when it is worth it

On site one, Spanish pages average position **12** versus **48** for English,
with 4x the CTR, and produced the first real lead. Add a second language when:

- the service area has a large speaker population, and
- competitors publish only in English (check by searching two head terms).

If yes, mirror the whole site, not a token page: services, cities, articles,
forms, thank-you pages. Native-quality writing, never machine translation.

## What we do not do

- No PBNs, no cross-network links, no purchased links.
- No scaled AI content dumps. Volume without intent does not rank in 2026.
- No fake addresses or spoofed Google Business verification.
- No stock photos pretending to be our work. Real before/after only.
