# SEO ledger

One row per page change, so the daily run knows what is on hold and what is
ready to be judged. Rules in `.claude/skills/daily-seo/SKILL.md`.

- `judge on`: change date + 28 days for a title, + 21 days for copy. Until
  then the page is on hold (no further edits except fixes to broken things).
- `baseline`: the target query on that page over the 28 days before the
  change: impressions / clicks / average position.
- `result`: filled in when judged: `better`, `worse` or `flat`, with the
  numbers from the 28 days after.

Newest first.

| Date | Site | Page | Change | Target query | Baseline (impr / clicks / pos) | Judge on | Result |
|---|---|---|---|---|---|---|---|
| 2026-10-21 | dryer | `/`, `/services/dryer-vent-cleaning/` (EN and ES) | Titles split so home and service page no longer share one | dryer vent cleaning florida / dryer duct cleaning service | none (pre launch) | 2026-11-18 | |
| 2026-10-21 | dryer | all city pages, EN and ES | Search vocabulary in description and answer box ("dryer duct"; "precio", "ducto", "cerca de usted") | dryer vent cleaning {city} / limpieza de ventila de secadora {ciudad} | none (pre launch) | 2026-11-11 | |
| 2026-10-21 | dryer | 6 new cities, 3 new regions, 4 new services, 5 new guides | New pages | see `research/fl-dryervent/SEO-LESSONS.md` | none (new) | 2026-11-18 | |
