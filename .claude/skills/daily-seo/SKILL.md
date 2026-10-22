---
name: daily-seo
description: Daily SEO optimisation run for the owner's three Florida lead generation sites (Florida Breeze Air Duct, Garage Door Fixers, Dryer Vent Florida). Pulls Search Console and GA4, checks the health of every site, evaluates changes made two or more weeks ago, ships at most three small data backed improvements, logs them, pushes, and reports in Hebrew. Use for the scheduled daily routine or when asked to "optimise the sites" / "תעשה אופטימיזציה".
---

# Daily SEO run

You are continuing work that a person has been doing by hand: reading the
search data for three sites, finding the few changes the data actually
supports, shipping them carefully, and writing down what to check later.
The point of running it daily is steady, measured progress, not daily churn.
**Most days the right number of content changes is one or two. Some days it
is zero, and a run that ships nothing but reports honestly is a good run.**

Read these before changing anything. They are the memory of this work:

1. `docs/FL-AIRDUCT-FULL-RECORD.md` sections 6, 7, 12 and 13: what the data
   showed and what went wrong.
2. `docs/SITE-PLAYBOOK.md`: the rules every site follows.
3. `research/fl-dryervent/SEO-LESSONS.md`: the lessons, as a table.
4. `docs/SEO-LEDGER.md`: every page change with its baseline and the date it
   can be judged. **This is how you avoid editing the same page every day.**
5. The newest file in `docs/seo-reports/`: what yesterday's run saw and left
   open.

## The sites

| | Air duct | Garage | Dryer vent |
|---|---|---|---|
| Folder | repo root (`.`) | `sites/fl-garage` | `sites/fl-dryervent` |
| Domain | floridabreezeairduct.com | garage-door-fixers.com | dryerventflorida.com |
| Search Console | `sc-domain:floridabreezeairduct.com` | `sc-domain:garage-door-fixers.com` | `sc-domain:dryerventflorida.com` (skip if not verified yet) |
| GA4 | property 545663484 | property 548175529 | measurement id G-DGWK813VWZ (find the property id with the GA4 admin "list properties" tool) |
| Lead events | `generate_lead`, `phone_call`, `form_submit` | `new_lead` (since 19 Sep 2026; `generate_lead` before), `phone_call`, `booking_open`, `quote_blocked` | `generate_lead`, `phone_call`, `booking_open`, `quote_step` |
| Source of truth for prices and facts | `src/data/services.ts`, `src/data/business.ts` | `sites/fl-garage/src/data/*` | `sites/fl-dryervent/src/data/*` and `research/fl-dryervent/CONTENT-SPEC.md` |

Netlify builds each site from the branch **`claude/website-help-0x9abn`**
and only rebuilds a site when its own folder changed. All work is committed
and pushed to that branch, whatever branch name the session suggests,
because that is the branch the live sites are built from.

## Never

These come from the owner directly or from damage already done once.

- **Never touch tracking on the air duct site**: the GA4 snippet, event code,
  forms, popup, phone number or anything in `BaseLayout.astro` that reports
  events. The owner's words: everything there is built and tracked. Content,
  titles, descriptions and data files are fine.
- **Never link the sites to each other**, or mention one on another.
- **Never invent**: no reviews, ratings, star counts, job counts, years in
  business, addresses, licences, certifications, testimonials or
  statistics. Numbers only from the site's own data files and the sources
  already cited on the site.
- **Never write "licensed"** on the dryer vent or air duct sites. The garage
  site says "Licensed & insured" today; that is an open owner question, so
  report it, do not change it.
- **Never change a published price.** If a page and the data file disagree,
  the data file wins and the page is fixed.
- **No dashes as punctuation** in any copy (no em dash, no en dash, no spaced
  hyphen). Commas, full stops, "to" for ranges.
- **Never change a URL** or delete a page. If a page must move, it needs a
  301 and the owner's yes.
- **Never edit a page listed in `docs/SEO-LEDGER.md` with a `judge on` date
  in the future**, unless the change fixes something broken (a build error,
  a broken link, a factual error). Then note the reason in the ledger.
- **Never change a title more than once in 28 days.** Google needs two to
  four weeks to settle; changing it again resets the experiment.
- **No API keys or secrets** in the repo, in commits or in the report.
- **No model names or identifiers** in commits, code comments or files.
- **No pull requests**, no force pushes, no history rewrites.

## The run, in order

### 0. Set up (fresh container every day)

```bash
git fetch origin claude/website-help-0x9abn
git checkout claude/website-help-0x9abn
git pull --ff-only origin claude/website-help-0x9abn
npm ci                              # air duct, repo root
(cd sites/fl-garage && npm ci)
(cd sites/fl-dryervent && npm ci)
```

Install only what a site needs if time is short; a site you will not touch
today still needs a build for the health check.

### 1. Health check, every site, before any data

For each site: `npm run build`, then
`python3 scripts/seo-audit.py <dist>` (`dist`, `sites/fl-garage/dist`,
`sites/fl-dryervent/dist`).

- A failed build or a hard failure in the audit is today's first job, ahead
  of any optimisation. Fix it, rebuild, re-audit.
- Warnings are a backlog. Fix at most a handful per run, and only on pages
  not under a ledger hold.

### 2. Pull the data

Use the Composio connector. Find tools with `COMPOSIO_SEARCH_TOOLS`
("google search console search analytics", "google analytics run report",
"google analytics list properties"). The remote workbench sandbox can reset
between calls: **fetch and save in the same cell**, and keep only summaries.

Search Console, per site, two windows ending 3 days ago (GSC lags):
the last 28 days and the 28 before that.
- dimensions `query,page` (top 1,000 rows), `page`, `query`, `country`,
  `device`.

GA4, per site, last 7 and last 28 days: sessions, engaged sessions, and the
lead events in the table above, by `sessionDefaultChannelGroup` and
`pagePath`.

**Bot filter.** These sites attract bot traffic that makes numbers look
alive. Ignore it, and say in the report how much you ignored:
- sessions with zero engagement (engagement is the filter, not country);
- desktop only bursts on a single day;
- queries at position about 1 with impressions and zero clicks that make no
  sense for the business (seen before: "Fort Myers" variants, "Amarr" plus
  "Palm Beach" on the garage site).

If Composio fails or a property is missing, do the health check, the
warnings backlog and the report, and say plainly that data was unavailable.
Do not make content changes blind.

### 3. Judge what is due

For every ledger row whose `judge on` date has passed and has no result:
pull the same query/page pair for the 28 days after the change and compare
with the baseline in the row. Write the result in the ledger: `better`,
`worse`, `flat`, with the numbers. If worse by a clear margin (position down
3 or more on the target query with similar impressions), propose the revert
in the report; revert it yourself only if it is a title or description.

### 4. Find today's opportunities

Rank candidates across all three sites. The levers, in the order they paid
off on the air duct site:

1. **Something broken** on a page that has impressions.
2. **Self competition.** One query, two or more URLs from the same site in
   the results, neither getting clicks. Fix by sharpening the loser's title,
   description and H1 toward its own intent and linking it to the winner.
   This was the cause of 26 dryer vent pages with zero clicks.
3. **Vocabulary gap.** A query with impressions on a page whose visible text
   never contains the query's words. Put the phrasing on the page (answer
   box, description, a heading, an FAQ), not only in the title. The "AC
   vent" and "ductos de aire acondicionado" case: same business, the page
   that used the searcher's words won.
4. **Striking distance.** Page/query at position 5 to 20 with real
   impressions: description with the price, a better title (once per 28
   days), and one more paragraph or FAQ answering exactly that query.
5. **Good position, no clicks** (position under 10, 0 to 1% CTR over a
   meaningful sample): the title and description are the problem. Price in
   the title, keyword first, under 60 characters.
6. **Spanish depth.** Spanish pages ranked 19 positions higher and converted
   6 times better. Spanish city pages follow Hispanic population, not the
   English city list. A Spanish query with impressions and a thin Spanish
   page is a high value change.
7. **A query with impressions and no matching page.** First try a section on
   the closest existing page. A new page only when the intent is genuinely
   different, the query family has at least about 50 impressions in 28
   days, and you can write it with real, specific content. **More English
   pages at position 30 add impressions, not clicks.**
8. **Internal links** to a page that just started ranking, from older related
   pages in the same language.

Ignore national head terms a small local site cannot win, and positions
beyond 40 unless several queries point the same way.

### 5. Ship, within today's budget

- **At most three change sets per day across all sites**, at most one per
  page. A change set is one idea on one page (or one template change that
  applies the same fix to a set of pages).
- Edit the data files the pages render from, not the built HTML.
- Follow the writing rules: specific, local, plain; a technician talking to
  a homeowner; answer first; tables for prices and limits; Spanish written
  natively with "usted", not translated. No two pages may share sentences.
- Titles at most 60 characters, keyword first, price when it fits;
  descriptions 120 to 155, unique, with the price. The shared helpers in
  each site's `src/lib/meta.ts` already do this; extend them rather than
  hard coding.
- Rebuild, re-run `scripts/seo-audit.py` (no hard failures), and if you
  changed layout or a component, check the page at 375 and 1280 widths with
  Playwright (`executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'`
  or whatever `/opt/pw-browsers` contains; never run `playwright install`).

### 6. Record

- `docs/SEO-LEDGER.md`: one row per page changed, with the baseline numbers
  (target query, impressions, clicks, position over the 28 days before) and
  `judge on` = today + 28 days for titles, + 21 days for copy.
- `docs/CHANGELOG-SEO.md`: one line per change set, newest first, in the
  existing format (date, change, why, watch).

### 7. Commit and push

One commit per site touched, message in the repo's style, ending with the
attribution lines the session's system prompt asks for. Then:

```bash
git push -u origin claude/website-help-0x9abn
```

On a network error retry up to four times, waiting 2, 4, 8 and 16 seconds.
Never push with failing builds or audit hard failures.

### 8. Report

Write `docs/seo-reports/YYYY-MM-DD.md` (commit it with the rest) and end the
run with the same content as your final message, **in Hebrew**, short and
plain. The owner reads it on a phone. Structure:

1. **שורה תחתונה**: one or two sentences. Leads this week vs last week per
   site, and the single most important thing.
2. **מה השתנה היום**: each change, the page, why (the query and the
   numbers), and when it will be judged.
3. **מה נבדק**: ledger results that came due, better or worse, with numbers.
4. **בריאות**: builds, audit, anything fixed.
5. **צריך ממך**: things only the owner can do (Search Console verification,
   GA4 key events, Business Profile, phone numbers, prices, the garage
   licence wording). Only list what is still open.
6. If data was unavailable or bot traffic was filtered, say so in one line.

Numbers in the report come from the data you pulled today, never from
memory or from an earlier report.

## Cadence on top of the daily run

- **Mondays**: add a week over week table per site (clicks, impressions,
  average position, leads by event) to the report.
- **First run of the month**: also pick up to two article topics from query
  gaps found that month (not from a calendar), and do one internal link
  pass. Write the articles only if today's budget allows; otherwise list
  them in the report as next.
- **Every quarter** (first run in January, April, July, October): list pages
  with zero impressions after 90 days as candidates to rewrite or merge.
  Propose; the owner decides.
