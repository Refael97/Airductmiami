# Maintenance routine

The loop that turns a launched site into a growing one. Same cadence for
every site in the network; as sites are added, the weekly pass is run per
site and the monthly pass compares them.

## Daily (yours, 5 minutes)

- Any new lead answered or forwarded within the hour. A cold lead is a lost
  lead.
- Any failed AI call in the CRM followed up by a human.

## Weekly (mine, ~30 minutes per site)

1. **Pull Search Console** (28-day window, plus the 7-day trend): totals,
   queries, pages, devices, countries.
2. **Find the gaps**, in this order:
   - Queries with impressions and **no matching page** → new page or new
     section. (This found the dryer vent installation service and the
     regional pages.)
   - Pages at **position 5 to 20** → title, description, and content push.
     Cheapest wins available.
   - Pages with impressions and **0 clicks at a good position** → the title
     is the problem, not the ranking.
   - Duplicate URLs, index errors, canonical conflicts.
3. **Ship the fixes**, verified in a browser, committed and pushed.
4. **Pull GA4**: `generate_lead`, `phone_call`, `popup_view` → conversion
   rate by source. Compare popup offer variants.
5. **One-line log** in `docs/CHANGELOG-SEO.md`: date, what changed, why, what
   to watch.

## Monthly

- **Two to four new articles** on the site, chosen from the query gaps found
  during the month, never from a generic content calendar.
- **Refresh one existing top page**: new data, new FAQ entries, updated
  prices, better internal links.
- **Internal link pass**: newly ranking pages get links from older relevant
  pages.
- **Citations pass**: one new legitimate directory or partner listing.
- **Review push**: ask every completed customer, in their language.
- **Numbers review**: impressions, clicks, average position, leads, and cost
  per lead if any spend exists. Compare month over month, and across sites
  once there is more than one.

## Quarterly

- Full technical audit against the launch checklist. Things drift.
- Competitor scan: who moved into the top 3 and what do they have that we do
  not.
- Prune: any page with zero impressions after 90 days gets rewritten,
  merged, or removed.
- Price and offer review across the site, the popup, and the AI agent script,
  all three must still agree.

## Rules for changes

1. **Data first.** Every change traces back to a query, an event, or a lead.
   No redesigns because something feels stale.
2. **Never break what works.** Pages that rank are edited, not replaced.
   Merging two ranking pages is a last resort, not a first move.
3. **One meaningful change at a time per page**, so the next report can
   attribute the movement.
4. **Verify in a real browser** before pushing: build, screenshot, check
   mobile overflow.
5. **Expect a 2 to 4 week lag.** Judge a change on the report after next, not
   the next morning.
6. **Automated audit reports are inputs, not instructions.** They routinely
   recommend building pages that already exist. Cross-check against the repo
   before acting.

## What "healthy" looks like, month by month

| Month | Impressions | Position | Leads |
|---|---|---|---|
| 1 | first hundreds | 40 to 60 | 0 to 1 |
| 2 | low thousands | 30 to 45 | 1 to 3 |
| 3 | thousands | 25 to 40 | 3 to 8 |
| 6 | tens of thousands | 10 to 25 | steady flow |

Site one hit 3,419 impressions and its first lead inside month two, which is
the pace to hold new sites against.
