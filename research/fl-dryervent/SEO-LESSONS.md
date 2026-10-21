# Dryer Vent Florida: Florida Breeze lessons, applied

Every rule below comes from what the air duct site's Search Console data
actually showed (`docs/FL-AIRDUCT-FULL-RECORD.md`, sections 6, 7 and 13).
Dryer Vent Florida has no search data of its own yet, so this is the
starting position, to be checked against its own GSC from day 14.

| Lesson on Florida Breeze | What it looked like there | Applied on Dryer Vent Florida (2026-10-21) |
|---|---|---|
| Spanish is the lever | ES position 13 vs EN 32, CTR 1.54% vs 0.24% | Full Spanish mirror: 37 cities, 6 regions, 9 services, 17 guides, booking form, popup, chat |
| Spanish cities follow Hispanic density, not the English list | Deerfield, Bradenton, Winter Park, Plantation: indexed, zero Spanish impressions. Clicks came from Kissimmee, Orlando, Tampa, Kendall, West Palm Beach, Hialeah, Miami | Added Hialeah, Kendall, Doral, Homestead, Miami Gardens, Pembroke Pines with the strongest Spanish copy on the site |
| The vocabulary must be on the page | 52 city pages never said "AC vent"; Spanish pages said "ductos de aire acondicionado" and won | English city answer and description say "dryer vent and dryer duct cleaning"; Spanish say "precio", "ducto de la secadora", "cerca de usted" |
| Two of our own pages on one query lose to each other | Dryer city pages at 22.7 lost to the general city page at 11.0; ~1,400 impressions, zero clicks | One page per intent: home owns "dryer vent cleaning florida", the service page owns "dryer duct cleaning service", city pages own "{city}". No two pages share a title (audited) |
| Home should own the Florida-qualified head term | Home at 51.5 chasing national terms | Home title "Dryer Vent Cleaning in Florida \| $100 to $200" |
| Price in the title | Only differentiator competitors will not copy | Every city, region and priced service title carries the published price when it fits in 60 characters |
| Descriptions under 155, unique per page | 172 to 184 characters, cut off, identical across cities | All 152 indexable pages: titles ≤ 60, descriptions 120 to 158, no duplicates (scripted audit) |
| Hand-written city depth ranks; templates do not | The pages that ranked had a `cityDetail` entry | All 37 cities hand written in both languages, no shared paragraphs |
| Regional layer | "air duct cleaning broward" had nowhere to land | Palm Beach, Broward, Miami-Dade counties plus Central Florida, Tampa Bay, Southwest Florida |
| Internal links to articles | 107 articles, zero inbound links from money pages | `relatedContent.ts` maps every service and city to guides; EN and ES articles paired for hreflang |
| Trailing slash by 301, not canonical | Google overrode the canonical tag | Edge function kept; zero internal links without the slash (audited) |
| Placeholders ship | Fake rating, address, job count went live | No address, rating, founding year or reviews in data or schema (audited) |
| Count the lead once | `generate_lead` doubled for six weeks | Thank-you event gated on a submit marker; popup reports its own |
| Lead email needs a place | ZIP-only leads | Popup, contact and booking forms resolve ZIP to city and county |

## What to check, and when

- Day 14 after GSC verification: impressions by language. If Spanish is not
  ahead on position, the Florida Breeze pattern is not repeating and the
  Spanish depth plan needs revisiting.
- Which page Google picks for "dryer vent cleaning" and "dryer duct
  cleaning": home or `/services/dryer-vent-cleaning/`. If both show for one
  query, sharpen the loser rather than adding a page.
- The six Hispanic-dense cities against the original 31 on Spanish
  impressions.
- Commercial and inspection service pages: highest bid keywords in the
  export, worth knowing early whether organic touches them at all.
