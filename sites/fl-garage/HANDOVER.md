# Garage Door Fixers, Florida: build handover

Site two of the network, rebuilt for Florida on 6 September 2026. This
file is the current state and the exact next actions.

## Why this site moved from New York to Florida

The Florida air duct site reached five to six organic leads a week inside
two months, with no Google Business Profile. The New York garage door
site had one click in three months. Fulfillment partners exist in
Florida and did not in New York.

The domain is geo-neutral, so it carried over unchanged. What was thrown
away is the New York content, which was all of it that mattered: every
city, every region, every local claim in every article. The template,
the price architecture and the trust rules carried over intact.

The New York research brief is kept at `research/ny-garage/BRIEF.md` as
the record of how the template was designed. The Florida brief at
`research/fl-garage/BRIEF.md` is the one that governs this site now, and
`research/fl-garage/MARKET.md` is the competitive research behind it.

## What exists

| Cluster | English | Spanish | Path |
|---|---|---|---|
| Home | 1 | 1 | `/`, `/es/` |
| Published prices | 1 | 1 | `/prices/`, `/es/precios/` |
| Services | 12 + hub | 12 + hub | `/services/`, `/es/servicios/` |
| Regions | 7 | 7 | `/service-areas/{region}/` |
| Cities | 52 | 52 | `/service-areas/{city}/` |
| Buyer's guide | 10 + hub | 10 + hub | `/buyers-guide/`, `/es/guia-de-compra/` |
| Brands | 6 | 6 | `/brands/`, `/es/marcas/` |
| Guides | 68 | pending | `/blog/`, `/es/blog/` |
| Core | 5 | 5 | About, FAQ, Contact, Thank you, Privacy |
| Agent surface | 3 | shared | `/agent.json`, `/llms.txt`, `/llms-full.txt` |

Everything renders from typed data in `src/data/`. Change a price in
`services.ts` and it changes on the service page, the price list, the
homepage panel, every city page, both languages, `agent.json` and both
llms files at once. They cannot drift apart, which matters because
publishing prices is this site's whole differentiator.

## How the two languages work

English is canonical and lives at the site root. Spanish lives under
`/es/` and is written natively, not machine translated.

- One component per page type in `src/components/pages/`, taking a
  locale. `src/pages` and `src/pages/es` are thin route files. The two
  languages cannot drift structurally because they are the same
  component.
- UI strings and locale-aware paths live in `src/data/ui.ts`.
- Long form Spanish lives in `.es.ts` mirrors keyed by the same slug as
  the English, merged by `src/lib/i18n.ts`.
- **A slug with no Spanish entry falls back to English rather than
  breaking the build.** That is deliberate: it lets the mirror land
  region by region. It also means a missing translation is invisible, so
  check what is actually translated before claiming the mirror is done.
- Slugs are identical across languages for services, cities, regions,
  products and brands. Only articles get their own Spanish slug, and
  they declare `enSlug` in frontmatter to pair up for hreflang.

## Blocked on you

**1. Point Netlify at the new base directory.** The Netlify site was
created against `sites/ny-garage`, which no longer exists. Change the
base directory to `sites/fl-garage` in the Netlify UI, or create the
site fresh. The build command and publish directory are unchanged.

**2. The phone number is shared with the air duct site.**
`(561) 897-9930` rings a technician's mobile phone and is published on
both brands. Whoever answers must not greet a garage door caller with
the air duct brand name. A second number is a few dollars a month and
removes the problem; if you take one, change it in `src/data/business.ts`
and nowhere else.

**3. Confirm the brand name is clear in Florida.** The market research
found a "Garage Doors Fixers" Yelp listing in Sunrise, Broward County,
one letter from ours and in the same trade and county, and an active
"Garage Door Fix, LLC" in Cape Coral since 2012. Run
`search.sunbiz.org` for "Garage Door Fixers", "Garage Doors Fixers" and
"Garage Door Fix" before anything is printed or filed, and confirm our
own LLC filing is active. See `research/fl-garage/MARKET.md` section 6.

**4. Three published prices need your decision.** The market research
checked every line against published Florida ranges and flagged three:

| Line | Site says | Market | Suggested |
|---|---|---|---|
| Labor per hour | $45 to $120 | $75 to $150 | Raise, or drop the line since we price by job |
| Emergency premium | $150 to $300 | $75 to $200 | Lower, and define "after hours" |
| Hurricane-rated floor | from $1,800 | $1,200 to $1,800 for a single | Split: wind-rated single from $1,200, double from $1,800 |

Changing any of them is a one-line edit in `services.ts`, but it has to
match what the technician will actually charge, which is your call not
mine. There is also a gap: the site never states a service call fee
policy. Competitors advertise "no service call fee". Decide and say so.

**5. Fulfillment coverage.** The site promises same-day service across
seven regions. Confirm which regions the partners actually cover so the
arrival windows are real, and narrow the copy if any region is thin.

## Deliberately not done

**No street address.** Service Area Business. The contact page says so.

**No reviews, no rating, no review count.** Not on the pages, not in the
schema, not in `agent.json`, which carries `rating: null` and a note
telling agents not to infer one. The FAQ answers it directly.

**No before and after imagery.** The component pattern exists and stays
unused until real jobs produce real photos.

**No Google Business Profile.** The air duct site proved the model works
without one. Create it only when a real verifiable address exists.

## Images still needed

Three homepage door cards and one service illustration reference files
that are not in the repo yet. Each renders without an image rather than
broken, so the site is fine until they land:

- `florida-cbs-double-door.webp`, 1980s concrete block and stucco house,
  barrel tile roof, single sixteen foot white steel double door
- `coastal-impact-garage-door.webp`, impact-rated door on a coastal
  block house, reinforcing struts visible. Also used as the storm band
  background on the homepage
- `new-build-three-car-garage.webp`, master planned subdivision, a
  double and a single door in matching tan

Generate per `docs/MEDIA-STANDARD.md`, at 2x display size, then convert
to WebP. Alt text for all three is already written in `pageImages.ts` in
both languages.

## Next content

The Spanish article mirror is the largest remaining piece: 68 English
guides, none translated yet. The market research says to prioritise the
cost, symptom and hurricane clusters, because no Florida garage door
company has published a word of Spanish on any of them outside Miami.

## Running it

```
cd sites/fl-garage
npm install
npm run dev      # localhost:4321
npm run build    # writes dist/
```

The form is Netlify Forms with a honeypot, a four second timing guard, a
Florida ZIP prefix check (320 to 349) and a sales pitch filter in both
languages. `LeadMeta.astro` puts the eight network lead fields on it,
including `locale`, so one pipeline and one agent serve this brand
alongside the air duct site with no per-site logic.

Set `PUBLIC_FORM_ENDPOINT` in the host's environment to post straight to
a Make webhook instead, which is how this site runs on a host with no
forms product. It is `PUBLIC_` because it ends up in the HTML, which is
fine for a webhook address. Never put a signing secret in it.
