# Florida Breeze Air Duct: the complete record

Everything done on `floridabreezeairduct.com`, why it was done, what the
numbers said before and after, and what is still open. Written 14 September
2026.

This is the internal document. It holds the reasoning, the measurements and
the mistakes. It is the opposite of `partner-skill/local-service-site/`,
which is the handover version and deliberately carries none of this.

The garage site appears only where it explains something here. Its own
record lives in `sites/fl-garage/`.

---

## Contents

1. [The business as the site states it](#1-the-business-as-the-site-states-it)
2. [Timeline](#2-timeline)
3. [The site today](#3-the-site-today)
4. [How it is built](#4-how-it-is-built)
5. [The rules that constrain everything](#5-the-rules-that-constrain-everything)
6. [What the search data actually says](#6-what-the-search-data-actually-says)
7. [Every optimisation shipped](#7-every-optimisation-shipped)
8. [Conversion and the lead pipeline](#8-conversion-and-the-lead-pipeline)
9. [Measurement](#9-measurement)
10. [Infrastructure and deploy](#10-infrastructure-and-deploy)
11. [Research done that was never shipped](#11-research-done-that-was-never-shipped)
12. [Open items, ranked](#12-open-items-ranked)
13. [What went wrong, and what it taught us](#13-what-went-wrong-and-what-it-taught-us)
14. [File map](#14-file-map)

---

## 1. The business as the site states it

From `src/data/business.ts`, the single source of truth. Everything on the
site, and the `LocalBusiness` structured data, reads from here.

| Field | Value |
|---|---|
| `siteId` | `fl-airduct` |
| Name | Florida Breeze Air Duct |
| Legal name | Florida Breeze Air Duct LLC — **marked TODO, never confirmed** |
| Service area | Florida, statewide |
| Phone | (561) 897-9930 |
| Email | info@floridabreezeairduct.com — **marked TODO, never confirmed** |
| Address | 123 Biscayne Blvd, Suite 100, Miami FL 33131 — **placeholder, still TODO** |
| Coordinates | Miami city centre — **placeholder, still TODO** |
| Hours | Mon–Fri 08:00–19:00, Sat 09:00–17:00, Sun 10:00–16:00 |
| Founding year | 2012 — **marked TODO, never confirmed.** Renders as "Since 2012" on `/about` and `/es/nosotros`, and as `foundingDate` in schema |
| Rating / review count | `0` / `0`, deliberately |
| Social | Facebook only |

### The placeholders that matter

Four `TODO`s have been carried since the first build and are still there.

**The address is fabricated.** 123 Biscayne Blvd is a placeholder from the
scaffold and it is emitted in `LocalBusiness` structured data on every page.
`TRUST-AND-CLAIMS.md` forbids publishing a street the business does not
occupy, and this is exactly that. It has not been removed because nobody has
supplied the real one or confirmed the business is address-less and should
publish a service area instead.

**"Since 2012" is unverified.** If the company is newer, that is an invented
founding date rendered in two languages and in schema.

**The legal name and inbox are unconfirmed.** The legal name feeds schema;
the inbox is printed on the contact page as a live channel.

### What was deliberately zeroed

On 4 August 2026 the rating `4.9` and review count `487` were removed. They
were scaffold placeholders being rendered as real figures on the home and
about pages in both languages. The site's first Search Console impression
was July 2026, so a 487-review history was not survivable. No rating is
published until real star ratings exist.

Three social profiles (Instagram, YouTube, Yelp) were removed on 9 August
for the same reason: they were emitted as `sameAs` in schema, which tells
search engines "this entity is also that entity", so placeholders were
claiming the business was the same thing as yelp.com on all 230 pages.

---

## 2. Timeline

### Before August 2026: the build and the first fixes

The site predates this repository's git history. The change log picks it up
in mid-July.

| Date | What |
|---|---|
| 13 Jul | Dryer Vent Installation service plus 3 regional pages, EN+ES. 28 impressions existed with no page to land on |
| 15 Jul | Mold service renamed to "Air Duct Mold Removal". Top non-brand query sat at position 96 |
| 15 Jul | 5 new Spanish articles. Spanish already ranked 12 against English at 48 |
| 15 Jul | Homepage titles rewritten keyword-first. 158 impressions, 1 click |
| 15 Jul | 301 edge redirect enforcing the trailing slash. 30 duplicate URL pairs were splitting signals |
| 23 Jul | Titles sharpened on 4 pages sitting at positions 16 to 21 |
| 30 Jul | GA4 installed with lead events |
| 30 Jul | Popup switched to an engagement trigger and a discount frame. It had 30 views and 0 leads on a 3-second timer with a fixed $99 |
| 30 Jul | Sticky mobile bar switched from call to quote form |
| 30 Jul | Network lead contract (`LeadMeta.astro`) on every form |
| 31 Jul | Air duct mold removal cost guide, EN+ES |

### August 2026

| Date | What |
|---|---|
| 2 Aug | Homepage imagery wired up |
| 3 Aug | Stopped publishing contact channels that do not work; quote form made to say why it refused to send |
| 4 Aug | **Fabricated rating, review count and job count removed** |
| 8 Aug | **Full GSC + GA4 audit.** The three findings below reshaped the whole plan |
| 8 Aug | Service page illustrations wired, both languages, all 22 service pages |
| 9 Aug | Real Facebook page added, three placeholder profiles removed |
| 16 Aug | Titles and descriptions rewritten for click-through across the site, driven by the GSC export |
| 27 Aug | Dryer vent city pages built; city pages given real local depth |
| 27 Aug | Every blog title and description rewritten in both languages for the snippet |
| 27 Aug | New city pages linked from both hubs; attic duct gap covered |
| 27 Aug | Last slashless links closed; every page brought under the SERP limits |
| 28 Aug | Last two hardcoded phone numbers routed through `business.ts` |
| 28 Aug | Depth moved to where the market is: Orlando, Tampa, the Gulf coast |
| 28 Aug | **Air duct repair city pages**, a page type the site did not have |
| 28 Aug | Answer engine surface rebuilt; **a fire statistic that was wrong was corrected** |
| 28 Aug | Vocabulary the site never used covered, plus the sanitizing upsell |

### September 2026

| Date | What |
|---|---|
| 2 Sep | Spanish city pages given the depth, because Spanish is what converts |
| 3 Sep | Photographic hero and desktop side image on the promo popup, encoded as real WebP |
| 7 Sep | **GSC analysis (`research/fl-airduct/GSC-2026-09-07.md`)** — the document that set the current plan |
| 7 Sep | City pages carrying the most stranded impressions thickened |
| 7 Sep | **Ten real customer reviews added**, running on every page |
| 7 Sep | Sliding glass door repair added as a service, both languages — **against the research recommendation, on the owner's decision** |
| 7 Sep | Palm Beach and west coast city pages thickened; West Palm Beach given Spanish depth; last five gaps in city depth closed |
| 8 Sep | Popup offer matched to the service on the page |
| 8 Sep | "Company is growing" made checkable; review count dropped from the ticker heading |
| 8 Sep | Popup stopped clipping its own submit button |
| 8 Sep | **14 Spanish-dense cities added** across three commits, targeting Hispanic population density rather than the English city list |
| 9 Sep | Both About pages say the company is part of a group |
| 13 Sep | Lead counting fixed, ZIP-to-city in the lead email, "AC vent" vocabulary added |

36 commits touch the air duct site in this repository. The change log in
`docs/CHANGELOG-SEO.md` carries the one-line-per-change version.

---

## 3. The site today

299 built pages: **167 English, 132 Spanish**.

| Bucket | Count | Route |
|---|---|---|
| Services | 12 | `/services/{slug}/` |
| Cities | 52 | `/service-areas/{city}/` |
| Dryer vent by city | 26 | `/service-areas/{city}/dryer-vent-cleaning/` |
| Air duct repair by city | 11 | `/service-areas/{city}/air-duct-repair/` |
| Regions | 3 | Broward, Palm Beach, South Florida |
| Articles | 110 | 54 English, 56 Spanish |
| Core | 8 | Home, About, Contact, Services hub, Areas hub, Blog hub, FAQ, Privacy |

### The twelve services

`air-duct-cleaning`, `dryer-vent-cleaning`, `dryer-vent-installation`,
`hvac-cleaning`, `air-duct-repair`, `mold-remediation`,
`air-duct-sanitizing`, `commercial-air-duct-cleaning`,
`uv-light-installation`, `indoor-air-quality-testing`, `attic-insulation`,
`sliding-glass-door-repair`.

Eleven of them sit inside one entity: the air in the house and the system
that moves it. The twelfth is discussed in section 11.

### City depth

`cityDetail.ts` carries hand-written neighbourhood-level content for **25 of
the 52 cities**. A city page with a `cityDetail` entry ranks; one without it
is the template plus two unique paragraphs. This file is the single biggest
lever on the English side and it is a little under half deployed.

### Reviews

Ten real reviews, supplied by the owner on 7 September, collected from leads
the site produced between July and September 2026. They run on every page.

Rules recorded in `src/data/reviews.ts` and worth repeating:

- One of the eleven supplied was **dropped** — the owner's own note said it
  was not an air duct lead, came from Nassau County New York, and looked
  like SEO spam. It was also the only one that never named the business.
- Nothing is written, improved or translated by us. A Spanish review shows
  in Spanish on the English pages. The FTC rule on fake and misleading
  reviews (16 CFR part 465) reaches substantially altered reviews, not only
  invented ones.
- Where a customer's stated city and their ZIP disagreed, the ZIP decided.
  Where they disagreed by state, the city is omitted rather than guessed:
  one reviewer's page said Miami and their ZIP was Brooklyn.
- **No star ratings**, because none of them gave one. Hence no `rating`
  field, no `AggregateRating` schema anywhere, and no "rated 5 stars".

---

## 4. How it is built

### The stack

Astro, static output, TypeScript data files, zero JS by default, deployed on
Netlify. Nothing renders at request time.

### Data first

Everything that repeats lives in typed data files under `src/data/`.
Templates render them and hold no facts.

| File | Holds |
|---|---|
| `business.ts` | NAP, hours, network identity. Single source of truth |
| `services.ts` / `services.es.ts` | The 12 services, both languages |
| `cities.ts` / `cities.es.ts` | The 52 cities: name, county, region, intro, local hook, nearby links |
| `cityDetail.ts` | Neighbourhood-level depth for 25 cities, plus the dryer vent and repair blocks that decide which sub-pages exist |
| `regions.ts` | County and metro pages |
| `reviews.ts` | The ten real reviews |
| `facts.ts` | Extractable facts: prices, frequencies, durations |
| `pageImages.ts` | Which illustration goes where, with alt text |
| `ui.ts` | Every repeated interface string, both languages, plus the path helpers |
| `flZips.ts` | All 1,473 Florida ZIP codes (added 13 Sep, see section 8) |

Adding a city is a data edit. This is what lets one change land on 52 pages
at once and what makes the Spanish side a mirror rather than a rewrite.

### Routing and the two languages

English at the root, Spanish under `/es/` with **translated route
segments**, not just translated content: `/service-areas/tampa/` mirrors to
`/es/areas-de-servicio/tampa/`, `/services/` to `/es/servicios/`, `/blog/`
to `/es/blog/`, `/contact/` to `/es/contacto/`.

`src/lib/i18n.ts` merges the English data with the `.es.ts` mirror keyed by
slug, falling back to English where a Spanish entry does not exist yet, so a
half-written mirror renders rather than breaking the build.

hreflang is reciprocal on every translated page, plus `x-default`.

### Structured data

`LocalBusiness` sitewide, `Service` on service pages, `Article` on posts,
`FAQPage` on every FAQ block, `BreadcrumbList` on deep pages. Breadcrumb
URLs emit the trailing-slash form.

No `AggregateRating` anywhere, per section 3.

### The answer engine surface

Three files, all generated from the same data the pages are built from so
they cannot go stale:

- `/llms.txt` — short index, an H1, a blockquote summary, H2 sections of links
- `/llms-full.txt` — the exhaustive version with every page's direct answer
- `/agent.json` — machine-readable business, services, prices, areas, lead
  endpoint

Plus `robots.txt` explicitly welcoming ClaudeBot, PerplexityBot,
Google-Extended, CCBot and the rest.

`/llms.txt` used to be a hand-written file in `public/`. By 28 August it
listed 44 lines against a site of 268 pages, carried Spanish article titles
from before they were rewritten, had no trailing slashes, and was missing
every city dryer vent and duct repair page. It is now generated. A stale
summary of the site is worse than none, because its entire purpose is to be
trusted.

### Page-level AEO

Every page opens with a short, quotable direct answer before any depth. FAQ
blocks everywhere, wired to `FAQPage`. Facts in tables. Self-contained
sentences, so an engine quoting one line out of context is still correct.

---

## 5. The rules that constrain everything

From `docs/TRUST-AND-CLAIMS.md`. These are not style preferences; they are
what the business survives on.

- **No review, rating, star count or testimonial that did not come from a
  real customer.** No `AggregateRating` without real reviews.
- **Never publish a street address the business does not occupy.** (Still
  violated — see section 1.)
- **Prices agree everywhere.** Site, popup, phone, AI agent. A visitor who
  reads $300 to $600 and hears $99 on the phone learns not to trust either.
- **No unverifiable superlatives.** No "#1 in Florida", no "certified" with
  no certificate.
- **Statistics get a real source.** On 28 August a fire statistic on the
  dryer vent content was found to be wrong and was corrected.
- **The brand may be new; it may not pretend to be old.**
- **Generated imagery may illustrate; it may not impersonate.** See
  `MEDIA-STANDARD.md`.
- **The sites never link to each other.** A same-owner link network is a
  link scheme, and one penalty would take down all of them.
- **The sites do not share content.** Duplicate service pages across brands
  is scaled-content abuse.

The test, verbatim from the document: *if a customer, a competitor, or a
regulator saw exactly how this was made, would it still stand?*

---

## 6. What the search data actually says

### The finding that governs the whole site

Search Console, `sc-domain:floridabreezeairduct.com`, 8 June to 4 September
2026, final data:

| | English | Spanish |
|---|---|---|
| Pages with impressions | 166 | 120 |
| Impressions | 25,841 | 3,955 |
| Clicks | 63 | 61 |
| CTR | 0.24% | **1.54%** |
| Average position | 32.4 | **13.3** |

**Spanish earns the same number of clicks from 15% of the impressions.** It
ranks 19 positions higher and converts at 6.4 times the rate.

The reason is competition. Almost nobody in the Florida duct trade publishes
real Spanish content, and South Florida is heavily Hispanic. The Spanish
side is not a translation layer. It is the part of this site that ranks.

This single table is the most valuable thing we know about this business,
and it is why `partner-skill/` does not mention a second language at all.

### The consequence, stated plainly

The English side is not short of pages. It has 166, they pull 25,841
impressions, and they produce 63 clicks, because position 32 is the second
and third page of results. **Adding English pages adds impressions at
position 32. It does not add clicks.**

More pages was the wrong lever. The right levers are Spanish depth, and
depth on English pages that already have impressions.

### Where the English demand is stranded

27 queries sit between position 21 and 40 with 50+ impressions each,
carrying **4,421 impressions and zero clicks between them**. A second pool
at position 5 to 20 is worth 1,526 impressions.

| Query | Impressions | Position |
|---|---|---|
| air duct cleaning | 642 | **16.8** |
| air duct cleaning deerfield | 585 | 33.0 |
| air duct cleaning near me | 572 | 28.4 |
| air duct cleaning services near me | 445 | 30.0 |
| air duct cleaning services | 354 | 36.6 |
| air duct cleaning bradenton | 292 | 21.8 |
| air duct cleaning pembroke pines | 210 | 32.2 |
| air duct cleaning kendall fl | 128 | 15.2 |
| air duct cleaning sunrise fl | 125 | 18.7 |

`air duct cleaning` at position 16.8 with 642 impressions is the head term
for the whole business and the single most valuable line in the data.

### The Spanish city list was copied from the English one, and that was wrong

Deerfield Beach, Bradenton, Winter Park and Plantation all have Spanish
pages. All four are indexed — checked through the URL Inspection API, all
"Submitted and indexed", verdict PASS, crawled within the week. All four get
**zero Spanish impressions**, because there is little Spanish search demand
for duct cleaning in those towns.

The cities where Spanish already wins are Kissimmee, Orlando, Tampa,
Kendall, West Palm Beach, Hialeah and Miami. That is Hispanic population
density, not the English city list. Fourteen Spanish-dense cities were added
on 8 September on exactly that basis.

### The one query that earns every Spanish click

| Query | Impressions | Clicks | Position |
|---|---|---|---|
| limpieza de ductos de aire acondicionado cerca de mi | 53 | 4 | 10.4 |
| limpieza de ductos de aire acondicionado precio | 32 | 0 | 12.1 |
| limpieza de ductos miami | 28 | 0 | 26.5 |
| limpieza de conductos de aire acondicionado precio | 18 | 0 | 7.7 |

Every Spanish click came from the first one, landing on four different city
pages at positions 2 to 6. Moving it from 10.4 to 3 is the highest-value
single action available on this site.

### The most recent window: 15 August to 13 September 2026

| Page | Impressions | Clicks | Position |
|---|---|---|---|
| `/` | 3,263 | 4 | 51.5 |
| `/service-areas/deerfield-beach/` | 1,819 | 1 | 27.4 |
| `/service-areas/hollywood/` | 1,132 | 1 | 17.4 |
| `/service-areas/bradenton/` | 1,103 | 1 | 14.7 |
| `/service-areas/st-petersburg/` | 622 | 2 | 21.2 |
| `/blog/hvac-uv-light-cost/` | 331 | **7** | 5.7 |
| `/es/areas-de-servicio/kissimmee/` | 41 | **6** | 4.0 |

`/blog/hvac-uv-light-cost/` is the best English page on the site by clicks,
and the Spanish Kissimmee page earns almost as many from an eighth of the
impressions at 14.6% CTR.

**The homepage is the biggest single problem by volume.** 3,263 impressions
at position 51.5 for four clicks. It ranks 45 to 85 on unqualified national
head terms it cannot win (`air duct cleaning near me`, `air duct cleaning
services`, `ac duct cleaning near me`), and 19 to 42 on the Florida-
qualified versions (`air duct cleaning florida`, `air duct cleaning of
florida`) which are the ones it should own. It is also a second, weaker
listing against `/services/air-duct-cleaning/`, which holds position 16.2 on
the head term.

### The dryer vent problem

Every one of the 26 dryer vent city pages, plus the English and Spanish
service pages, has **zero clicks** across roughly 1,400 impressions. Not
one.

The cause is our own two pages competing. On Deerfield Beach:

| Page | Query | Impressions | Position |
|---|---|---|---|
| `/service-areas/deerfield-beach/` | dryer vent cleaning deerfield beach fl | 119 | **11.0** |
| `/service-areas/deerfield-beach/dryer-vent-cleaning/` | (generic terms only) | 150 | **22.7** |

Google prefers our general city page over the page built specifically for
the query. Same pattern on Boca Raton. The dedicated pages were built on 27
August for exactly this demand, and three weeks later they rank worse than
the pages they were meant to relieve.

This is unresolved. The fix is consolidation or sharp differentiation, and
it is a structural decision, not a copy edit.

---

## 7. Every optimisation shipped

### 15 July: the trailing slash

30 duplicate URL pairs — `/about` and `/about/` — each accumulating separate
impressions and separate positions. Google was overriding the canonical tag
on a real page, so a canonical tag alone was not enough.

Fixed with a Netlify **edge function**, not a `[[redirects]]` rule. Netlify's
redirect matcher ignores trailing slashes, so a forced `/page` → `/page/`
rule matches its own target and loops forever. This actually happened on
`/thank-you/`. The edge function compares the raw pathname string and its
target always ends with a slash, so a loop is impossible by construction.

### 8 August: the internal link audit

The site's own internal links omitted the trailing slash while the site
serves the slash form.

| | Before | After |
|---|---|---|
| Internal links missing the trailing slash | **12,086** | 116 |
| Internal links with it | 1,028 | **12,998** |

Every one of those 12,086 links sent a visitor and a crawler through a 301
before reaching the page. On a 230-page site that wastes crawl budget and
passes equity through a redirect.

Fixed across `ui.ts` path helpers and locale strings, hardcoded hrefs in 11
templates, `altHref` in 16 files, breadcrumb hrefs in 10 templates, and 343
markdown links across 100 articles.

### 8 August: internal linking to articles was zero

107 articles existed. The 11 service pages and 40 city pages linked to
**none of them**, in either language.

`src/lib/relatedContent.ts` was added, bridging the blog `category` field to
service slugs. The mapping is hand-written rather than inferred, because a
wrong pairing sends a reader from a dryer vent page to a mould article and
wastes the click.

| Page type | Before | After |
|---|---|---|
| Service pages, each language | 0 | 6 |
| City pages, each language | 0 | 6 |
| Sitewide, English articles | ~0 | 297 |
| Sitewide, Spanish articles | ~0 | 308 |

City pages get a fixed editorial pick rather than most-recent, so link
targets stay stable instead of churning every time an article ships.

### 16 and 27 August: titles and descriptions

Three problems, all found in the GSC export.

Descriptions ran 172 to 184 characters against Google's ~155 truncation, so
the closing hook was cut off every time. Every city said the identical
sentence, which gives a searcher no reason to choose us. And no price
appeared anywhere, despite the site publishing them in the FAQ on every
page.

`src/lib/meta.ts` now builds every title and description from one place with
a `fit()` helper that trims on a word boundary, and `LIMITS` of 60 and 155.
Price in the title is the differentiator a competitor cannot copy without
committing to it.

### 27–28 August: new page types

Dryer vent city pages (26) and air duct repair city pages (11). Both were
built only for cities carrying a hand-written block in `cityDetail`.
Generating one for all 52 from a template would be a doorway pattern, and
Google is explicitly good at detecting exactly that.

### 2 and 7 September: depth where it pays

Spanish city depth first, then the English cities carrying the most stranded
impressions: Hollywood, Bradenton, Sunrise, Clearwater, Plantation, and then
the Palm Beach and west coast set.

### 13 September: the "AC vent" vocabulary gap

All 52 English city pages contained the strings "AC vent", "AC duct" and
"air conditioner" **zero times**. Google was showing them anyway:

| Query | Impressions | Position | Clicks |
|---|---|---|---|
| ac vent cleaning deerfield beach fl | 67 | **9.2** | 0 |
| ac vent cleaning cape coral fl | 13 | 30.1 | 0 |
| ac duct cleaning bradenton fl | 11 | 13.3 | 0 |
| ac duct cleaning hollywood fl | 11 | 14.6 | 0 |
| ac duct cleaning pembroke pines | 10 | 18.4 | 0 |
| ac duct cleaning boca raton | 16 | 44.3 | 0 |

**The Spanish pages are the control group and they settle it.** They carry
the phrase, because "ductos de aire acondicionado" is simply how it is said,
and the best-converting query on the whole site is `limpieza de ductos de
aire acondicionado cerca de mi` at position 3.8 with 15.4% CTR. Same
business, same service, same state. The difference is the vocabulary on the
page.

Added to the meta description and the templated intro on all 52 pages, not
the title: on Deerfield the duct phrasing is worth roughly 615 impressions a
month against 67 for the AC phrasing, and the title has room for one lead
term.

The `/services/air-duct-cleaning/` page already used "AC duct" 5 times and
"AC vent" 3 times, and holds position 16.2. The city pages had never been
given the same treatment.

---

## 8. Conversion and the lead pipeline

### Three paths, always

A sticky mobile bar, an engagement popup, and the contact form. Different
visitors convert differently. None of the three appears on `/contact/`,
`/thank-you/` or `/privacy/`, whose own goal is the form.

### The popup

Fires at **45% scroll depth or 25 seconds**, whichever comes first, once per
session. It used to fire on a 3-second timer with a fixed $99 offer: 30
views, 0 leads. A popup before the first paragraph is an interruption, and
"$99 total" reads like the bait ads our own scam article warns about.

It now uses **discount framing** ("$X off") rather than a cheap fixed price,
and the offer **matches the page context** — dryer pages get the dryer
offer. It submits over `fetch` and stays on the page, with a fallback to a
normal POST if the network fails so a lead is never lost.

### The lead contract

`src/components/LeadMeta.astro` puts the same hidden fields on every form on
every site in the network:

`site_id`, `vertical`, `brand`, `locale`, `service_area`, `timezone`,
`source`, `page`, plus `name`, `phone` and the optional fields.

One pipeline and one AI voice agent serve every brand because nothing about
the brand is hardcoded in the pipeline; it all travels with the lead.
Netlify Forms → webhook → Make → CRM sheet, owner notification, and an
outbound AI call. The agent brief is at `docs/agents/fl-airduct-voice-agent.md`.

Rules the pipeline enforces: the call fires within 2 minutes, never before
8am or after 8pm in the lead's timezone, opens in the lead's language, and
retries at +20 minutes then +2 hours and then stops.

### ZIP to city, added 13 September

A popup lead used to arrive as five digits. Nobody dispatching from an inbox
can place 33019.

All **1,473 Florida ZIP codes** across 545 USPS city and county pairs, from
the GeoNames CC BY 4.0 postal file, now resolve the typed ZIP into two
hidden fields so the email reads `33019 / Hollywood / Broward County`. The
visitor is never asked for a city.

Stored as ranges in `src/data/flZips.ts` because Florida ZIPs run in blocks
(`33019-33027,33029`), expanded once at build time into
`/data/fl-zip-cities.json`, which the popup fetches when it opens rather
than bundling 41KB into every page. Out-of-state ZIPs and typos resolve to
blank rather than to a guess, and the submit waits at most 1.2 seconds for
the lookup.

**One caveat recorded in the data file**: the place name is the USPS mailing
city, not the municipality. A Doral address files under Miami; a Weston
address under Fort Lauderdale. The county never has that problem, which is
why it travels alongside.

---

## 9. Measurement

GA4 property `545663484`, measurement ID `G-EK5SGJE8MP`.

### What 30 days looks like (15 Aug – 13 Sep 2026)

| Event | Count | Users |
|---|---|---|
| page_view | 283 | 152 |
| user_engagement | 212 | 100 |
| session_start | 199 | 152 |
| first_visit | 151 | 151 |
| popup_view | 124 | 91 |
| popup_close | 83 | 67 |
| scroll | 27 | 17 |
| **generate_lead** | **26** | **13** |
| form_start | 15 | 13 |
| phone_call | 11 | 6 |
| form_submit | 2 | 2 |

### Two things were wrong, both fixed on 13 September

**It counted the wrong thing.** `generate_lead` fired on every load of a
thank-you page: refreshes, back-button returns, bookmarks. 26 events from 13
users is exactly the doubling you would expect, against 2 `form_submit`
events. The number the business steers by was roughly twice the truth.

The form now leaves a marker in `sessionStorage` on its way out and the
thank-you page fires only if it finds one, then deletes it. No marker, no
conversion. A marker older than ten minutes is ignored. The popup is
excluded because it submits over `fetch`, stays on the page and reports its
own event; without the exclusion its marker would sit in storage and fire on
some unrelated visit weeks later.

Verified in a real browser: submit then land fires once, two further loads
fire nothing, a direct visit in a clean session fires nothing.

**Nothing was marked as a conversion.** The property's key events were
`purchase`, `close_convert_lead` and `qualify_lead` — the GA4 defaults for a
lead-gen property. None has ever fired here and none ever will. The
conversion column read zero while real leads arrived.

There is no Admin API for creating a key event, so this is the one part that
has to be clicked. The exact steps are in `docs/GA4-CONVERSIONS.md`.

### Parameters now carried

Both forms report the same shape: `form_type`, `service`, `lead_city`,
`source`, `site_language`, `page_path`. `phone_call` gained `placement`
(header, footer, promo_popup, sidebar, page_body), `phone_number` and
`site_language`.

These are collected but **not yet reportable**: GA4 will not break a report
down by a parameter until it is registered as a custom dimension, and
registration is not retroactive.

### The reporting habit that matters

From the 8 August audit, and it is about the garage property but the lesson
applies to both: **read Engaged sessions, never Users.** That property
showed 126 sessions of Chrome on iOS with zero seconds of engagement across
Czechia, the Netherlands and France — headless bots with a spoofed mobile
user agent, all `(direct) / (none)`.

The Florida property is clean by comparison: Organic Search 62 sessions, 46
users, **37 engaged**, 2,151 seconds. Real people.

---

## 10. Infrastructure and deploy

- **Domain**: Cloudflare.
- **Hosting**: Netlify, project `musical-basbousa-a8e370`, base directory
  `/`, deploying from `github.com/Refael97/Airductmiami`.
- **Build**: `npm run build`, publish `dist`.
- **Build skipping**: both sites live in one repo, so each site's
  `netlify.toml` carries an `ignore` command. Netlify's semantics are
  inverted and easy to get backwards: **exit 0 means SKIP, non-zero means
  PROCEED**. `git diff --quiet` exits 0 when there are no differences, which
  is exactly right. On the first build `CACHED_COMMIT_REF` is empty and the
  diff errors, so the build proceeds — failing towards building is the safe
  direction.
- **Trailing slash**: the edge function described in section 7, never a
  redirect rule.
- **Forms**: Netlify Forms, with the field list built from the static HTML at
  deploy time. A field injected at runtime is dropped, which is why the ZIP
  fields are in the markup.

### The current deploy problem, unresolved

Nothing pushed after roughly midday on 10 September has reached either live
site. Verified against the live sites rather than the dashboard:

| Commit | When | Live? |
|---|---|---|
| Garage Facebook footer | 10 Sep 09:15 | yes |
| Garage tune-up title | 10 Sep 12:02 | yes |
| Garage Amarr work | 10 Sep 20:20 | **no** |
| Air duct work of 13 Sep | 13 Sep 21:04 | **no** |

The Netlify dashboard reads "Last update on Sep 10". The branch is correct —
commits from 8 and 9 September are live, which proves the wiring. The
`ignore` scripts were checked against the files each commit touched and
would have allowed both builds.

So the cause is on the Netlify side: auto-publishing paused, a locked
deploy, a failed build, exhausted build minutes, or a broken GitHub webhook.
It needs someone to open the **Deploys** tab on each project.

---

## 11. Research done that was never shipped

This section is the most important one in the document.

### The mold licensing verdict, and the fact that nothing changed

`research/fl-airduct/MOLD.md` is a 569-line research pass on Florida Chapter
468 Part XVI, which licenses mold assessors and mold remediators.

Its verdict, on the assumption that the company holds no MRSR or MRSA
licence: **both the mold page and the indoor air quality page are live
exposure.** The mold page offers a licensed service by name and by price;
the IAQ page offers the other licensed service inside an unlicensed-sounding
wrapper. The exposure exists as soon as the offer is published.

**Every item on its "stop claiming" list is still live today.** Checked
against the built site on 14 September:

| Item | Status |
|---|---|
| Service titled "Air Duct Mold Removal & Remediation" | still live |
| "identification, removal, and prevention of mold growth" | still live |
| "EPA-registered antimicrobial treatment" | still live |
| Price "$500 to $3,000+" on a mold removal page | still live |
| IAQ page offering "air and surface samples ... to detect and quantify" | still live |
| `regions.ts` selling mold remediation and mold removal | still live, 5 mentions |
| The recommended disclaimer "we are not a licensed mold remediator" | **absent** |

`grep -rl "mold-remediation" src/` returns **50 files**. The exposure is not
one page; it is the service data, the icon component, the services hub, two
region entries and about 30 content files across both languages. Any fix is
a data and content sweep.

The research also wrote out exactly what may still be said truthfully, and
several items are stronger sales copy than what is there now — particularly
"we are not a licensed mold remediator, and when a job needs one we will say
so and stop, rather than sell you a cleaning that will not fix it."

The search data agrees the current approach is not working anyway: 158 mold
queries, **516 impressions, zero clicks, average position 64.4**. The page
was renamed on 15 July specifically to chase this, and in two months the
head query moved from position 96 to 89.6.

**Nothing in the mold cluster should ship until this is settled, and what is
already shipped should come down.** It needs one fact from the owner: does
the company, or the fulfilment partner performing the work, hold an MRSR
licence?

### Sliding glass doors: shipped against the recommendation

`research/fl-airduct/SLIDING-DOORS.md` is 663 lines and its verdict on
whether the vertical belongs on the air duct site is **"No. Not in any
form."**

Three reasons it gave:

1. **No topical bridge.** The other eleven services sit inside one entity:
   the air in the house and the system that moves it. A sliding glass door
   is a structural opening in an exterior wall. No shared vocabulary,
   trigger, technician, supplier or schema type.
2. **The site cannot afford dilution**, because it has not cashed in the
   focus it already has: 4,421 impressions at position 21 to 40 returning
   nothing. Every internal link spent on sliding doors is one not spent
   moving Bradenton from 19.8 to 9.
3. **It breaks the playbook's own architecture rule** and the
   trust-and-claims requirement that each site be defensible on its own.

The owner read the research and decided to ship it anyway on 7 September.
The page is live at `/services/sliding-glass-door-repair/` with published
prices of $150 to $400, both languages, and it does carry the honest
licensing position: repair needs no contractor licence, replacement needs
one plus a permit and an NOA.

Recorded here without argument. It is the owner's business and the owner's
call. What is worth watching is whether the air duct site's topical signal
softens over the next two quarters, because that is the cost the research
predicted and it is measurable.

---

## 12. Open items, ranked

**1. The mold licensing exposure.** Section 11. Legal before commercial.
Needs one answer from the owner.

**2. The deploy pipeline.** Section 10. Everything below this line is
theoretical until pushes reach the live sites again.

**3. The placeholder address, founding year, legal name and inbox.** Section
1. The address is published in schema on every page and breaks our own
rules.

**4. Mark `generate_lead` and `phone_call` as key events in GA4**, and
register the five custom dimensions. No API, has to be clicked. Steps in
`docs/GA4-CONVERSIONS.md`.

**5. Google Business Profile.** Still absent. Roughly a third of local
ranking signal and the whole Map Pack sit behind it, and the "near me"
cluster is won through GBP rather than content. A US-based collaborator is
now helping with this. Do not open it until there is a real review
collection process; a profile with zero reviews is fine, a profile with
manufactured ones ends the business.

**6. The homepage at position 51.5 over 3,263 impressions.** It chases
national head terms it cannot win and competes with its own service page. It
should own the Florida-qualified terms where it already sits at 19 to 42.

**7. The dryer vent cannibalisation.** 26 pages, ~1,400 impressions, zero
clicks, losing to our own city pages. Structural decision required.

**8. The Spanish "cerca de mi" query from 10.4 to 3.** The highest-value
single action on the site, per the 7 September analysis.

**9. `cityDetail` covers 25 of 52 cities.** The pages that rank are the ones
with a hand-written entry.

**10. `/es/blog/aire-acondicionado-gotea-agua/`** — the highest-impression
Spanish page at 350 impressions, position 50.4, one click, with ~190
impressions of query family at position 60 to 80. Either rewritten to win or
conceded. Worth noting honestly: a leaking air conditioner is an HVAC repair
call, not a duct cleaning call, so it may not convert even if it ranks.

**11. Rename the Facebook page** to match the site exactly. Site says
"Florida Breeze Air Duct", Facebook says "Florida Breeze AirDuct services".
NAP consistency.

**12. Eleven unresolved `nearby` slugs** in `src/data/cities.ts`.

**13. Real before/after job photos** from fulfilment partners. The one
content gap we cannot fill ourselves.

**14. One oddity, unexplained.** `bayside breeze air duct services llc`
returns this site at position 1.8. If that is not the registered entity
name, Google is associating the site with a different company.

---

## 13. What went wrong, and what it taught us

**Placeholders ship.** A 4.9 rating, 487 reviews, a job count, three social
profiles and a Miami street address all went live because they were in the
scaffold and nobody removed them. Four of the five were caught. The address
is still there, thirteen months later in site-time. Scaffold values are not
neutral; they are claims.

**A canonical tag is not a redirect.** Google overrode ours on a real page.
Only a server-side 301 fixed it.

**Netlify's `ignore` semantics are inverted** and the obvious reading is
backwards. Exit 0 skips.

**A forced trailing-slash redirect rule loops forever** on Netlify, because
its matcher ignores trailing slashes so the rule matches its own target.
This took down `/thank-you/` once.

**Internal links are content.** 12,086 of ours went through a 301, and 107
articles had no inbound links from the pages that should have been sending
readers to them. Neither is visible in a browser.

**Generated summary files go stale silently.** `/llms.txt` was a month out
of date and wrong in four separate ways before anyone looked. Generate, do
not write.

**Analytics that counts the wrong thing is worse than none**, because
decisions get made on it. `generate_lead` was double-counting for six weeks.

**Bots make a property look alive.** 126 sessions with zero engagement.
Engagement is the filter, not country.

**Research that is not shipped is not protection.** The mold research is
excellent, it was finished, and every exposure it identified is still live.
A finished investigation and an unchanged site is the same risk as never
having investigated, plus a written record that the risk was known.

**The lever is rarely the obvious one.** The request that produced the 7
September analysis was "more pages, more Spanish, more services, more
areas". The data agreed with one of the four.

---

## 14. File map

```
docs/
  00-README.md              network operating manual, read order
  TRUST-AND-CLAIMS.md       what may and may not be claimed. Read first
  RESEARCH-PROTOCOL.md      the nine research passes
  SITE-PLAYBOOK.md          build rules: architecture, SEO, GEO, conversion
  AGENT-SURFACE.md          llms.txt, agent.json, robots.txt standard
  MEDIA-STANDARD.md         imagery: generated, shot, never faked
  BUILD-PIPELINE.md         domain, build, deploy, forms, phone, analytics
  LAUNCH-CHECKLIST.md       phase-gated checklist
  LEAD-PIPELINE.md          the lead contract and the one AI agent
  MAINTENANCE.md            the weekly and monthly loop
  CHANGELOG-SEO.md          one line per change, newest first
  GA4-CONVERSIONS.md        what fires, and what must be clicked by hand
  ANALYTICS-AUDIT-2026-08-08.md
  FL-AIRDUCT-FULL-RECORD.md this file
  agents/fl-airduct-voice-agent.md
  opportunities/            MacDill AFB Bldg 861 tender, separate thread

research/fl-airduct/
  GSC-2026-09-07.md         the analysis that set the current plan
  MOLD.md                   licensing exposure and market position
  SLIDING-DOORS.md          is it a vertical, and does it belong here

partner-skill/
  local-service-site/       the handover version. None of the above

src/data/                   the site's facts
src/lib/meta.ts             every title and description
src/lib/i18n.ts             the English/Spanish merge
src/lib/relatedContent.ts   the article linking bridge
netlify/edge-functions/     trailing-slash canonicalisation
```
