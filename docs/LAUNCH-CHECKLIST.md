# New site checklist

Work top to bottom. Nothing below "Launch gate" ships until everything above
it is checked.

## Phase 1 — Decide (before any code)

- [ ] Vertical picked, with real search demand verified (keyword data, not a
      hunch)
- [ ] Service area picked: one state or metro, 30 to 40 target cities listed
- [ ] Competitor scan: are the top 3 results real local companies or thin
      directories? Thin directories mean an easy market
- [ ] Second language decision made (see playbook criteria)
- [ ] **Fulfillment partner identified.** Who does the work when a lead comes
      in? A site with no buyer for its leads is a hobby
- [ ] Brand name and domain chosen, domain bought

## Phase 2 — Build

- [ ] Repo cloned from the site template, `business.ts` filled in:
      `siteId`, `vertical`, `serviceArea`, `timezone`, name, phone, email
- [ ] `services.ts`: 8 to 12 services, each with answer, intro, benefits,
      process, quick facts, FAQ
- [ ] `cities.ts`: 30 to 40 cities, each with a genuinely unique `intro` and
      `local` paragraph, plus nearby links
- [ ] `regions.ts`: 3 to 5 county/metro pages
- [ ] 40+ articles, human-written, each targeting a real query
- [ ] Second language mirrored in full (if applicable)
- [ ] Logo, favicon, OG image (PNG, 1200x630, never SVG)
- [ ] Real photos in place, before/after slider populated

## Phase 3 — Technical SEO

- [ ] Unique title + meta description on every page, keyword first
- [ ] Canonical on every page, trailing-slash form consistent
- [ ] **301 edge redirect** enforcing the canonical URL form
- [ ] JSON-LD: LocalBusiness, Service, Article, FAQPage, BreadcrumbList
- [ ] No fake AggregateRating
- [ ] hreflang reciprocal + x-default (if bilingual)
- [ ] `sitemap-index.xml` generated, noindex pages excluded
- [ ] `robots.txt`, `llms.txt`, `llms-full.txt`
- [ ] Custom 404 page
- [ ] Mobile: zero horizontal overflow at 375px and 390px, verified in a real
      browser, not just a media query

## Phase 4 — Conversion

- [ ] Contact form + thank-you page (noindex) in every language
- [ ] `LeadMeta.astro` inside **every** form, correct `source` value
- [ ] Popup: engagement trigger, context-aware offer, discount framing
- [ ] Sticky mobile CTA
- [ ] Form notifications on: email to an inbox that is actually read
- [ ] Test lead submitted end to end, arrives with correct `site_id`,
      `locale`, `vertical`

## Phase 5 — Measurement

- [ ] GA4 property created, tag installed sitewide
- [ ] Events firing: `phone_call`, `generate_lead`, `popup_view`,
      `popup_close`
- [ ] `generate_lead` and `phone_call` marked as Key Events
- [ ] Search Console: domain property verified, sitemap submitted
- [ ] GA4 linked to Search Console

## Launch gate

- [ ] `npm run build` clean, expected page count
- [ ] Live URLs spot-checked: home, a service, a city, a region, an article,
      in both languages
- [ ] Pipeline test lead reached the CRM **and** triggered the AI call
- [ ] Someone is ready to answer a real lead tomorrow morning

## Phase 6 — First 30 days

- [ ] Request indexing manually for home, top services, top regions
- [ ] Citations: Yelp, Angi, BBB, Thumbtack, Nextdoor, Bing Places, Apple
      Business Connect. Identical NAP everywhere
- [ ] Google Business Profile **only if** a real address and real
      verification video are possible. Never fake it
- [ ] First Search Console data reviewed at day 14 and day 30
- [ ] First review requested from the first completed job
