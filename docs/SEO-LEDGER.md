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
| 2026-10-25 | garage | `/brands/chamberlain/` (EN and ES) | Repair symptom table (check first / needs a technician) and three repair FAQs with published prices | chamberlain garage door opener repair | 116 / 0 / 64.9 (90 days to 24 Oct) | 2026-11-15 | |
| 2026-10-25 | garage | `/service-areas/pembroke-pines/` and the ES page | Three depth sections (springs, openers, replacement approvals), two local notes, three FAQs (townhouse, heavy insulated door, keeping the opener) | garage door repair pembroke pines | 123 / 0 / 69.7, plus 55 / 0 / 64.6 and 35 / 0 / 61.1 on two variants (90 days to 24 Oct) | 2026-11-15 | |
| 2026-10-25 | airduct | `/services/air-duct-sanitizing/`, `/services/dryer-vent-cleaning/`, `/services/commercial-air-duct-cleaning/` (EN and ES copy, titles untouched) | Depth sections: "air vent sanitizing" wording and what it is; the dryer transition hose; commercial scope and scheduling | air vent sanitizing near me / dryer hose cleaning near me / commercial air duct cleaning | 125 / 0 / 58; 85 / 0 / 48.5; 105 / 0 / 42.6 (90 days to 24 Oct) | 2026-11-15 | |
| 2026-10-25 | airduct | all English city pages `/service-areas/{city}/` | One paragraph naming residential, commercial and air conditioning duct cleaning, linking the commercial and sanitizing service pages | air duct cleaning {city} long tail (Boca, West Palm, Deerfield, Winter Park) | Boca about 800 impressions and West Palm about 500 over 90 days, at positions 26 to 44, 0 clicks | 2026-11-15 | |
| 2026-10-25 | airduct | English city pages that have their own dryer vent page, except the six DRYER_LED cities (e.g. Delray Beach, Boynton Beach, Boca Raton, Coral Springs, Miami Beach) | Description no longer mentions dryer vents, so the dedicated dryer page owns the dryer searches | dryer vent / dryer duct cleaning {city} | dryer queries, city page vs dryer page: Delray 177 / 0 / 38.8 vs 152 / 0 / 19.3; Boynton 145 / 0 / 28.1 vs 64 / 0 / 19.2; Boca 29 / 0 / 43.1 vs 49 / 0 / 20.2; Coral Springs 71 / 0 / 19.7 vs 14 / 0 / 11.5 (28 days to 22 Oct) | 2026-11-15 | |
| 2026-10-25 | airduct | `/services/air-duct-cleaning/`, `/services/dryer-vent-cleaning/` | Descriptions cut from 162 and 161 characters to 151 (were truncated, one repeated "NADCA" twice) | site wide head terms | audit warning only | 2026-11-15 | |
| 2026-10-22 | airduct | all Spanish city pages `/es/areas-de-servicio/{city}/` | Description, answer box and price FAQ now say "ductos de aire acondicionado" and "precio" (the phrase never appeared on these pages) | limpieza de ductos de aire acondicionado precio / cuanto cuesta limpiar los ductos de aire acondicionado | Tampa ES 28 / 0 / 6.1 for the precio query; Hialeah ES page 72 / 4 / 5.6; all Spanish pages 3,438 / 51 / 8.8 (28 days to 19 Oct) | 2026-11-12 | |
| 2026-10-22 | airduct | `/service-areas/fort-lauderdale/` | New depth block answering "Is HVAC duct cleaning in Fort Lauderdale different from air duct cleaning?" with both published prices. Revival: "air duct cleaning fort lauderdale" answered, "hvac duct cleaning fort lauderdale" was partial | air duct cleaning fort lauderdale / hvac duct cleaning fort lauderdale | 199 / 0 / 14.6 and 13 / 0 / 22.2; page 696 / 0 (28 days); page 1,827 / 0 over 90 days | 2026-11-12 | |
| 2026-10-21 | dryer | `/`, `/services/dryer-vent-cleaning/` (EN and ES) | Titles split so home and service page no longer share one | dryer vent cleaning florida / dryer duct cleaning service | none (pre launch) | 2026-11-18 | |
| 2026-10-21 | dryer | all city pages, EN and ES | Search vocabulary in description and answer box ("dryer duct"; "precio", "ducto", "cerca de usted") | dryer vent cleaning {city} / limpieza de ventila de secadora {ciudad} | none (pre launch) | 2026-11-11 | |
| 2026-10-21 | dryer | 6 new cities, 3 new regions, 4 new services, 5 new guides | New pages | see `research/fl-dryervent/SEO-LESSONS.md` | none (new) | 2026-11-18 | |
| 2026-10-18 | airduct | English titles of Greenacres, Lake Worth Beach, Coconut Creek, Lehigh Acres, Bonita Springs, Deerfield Beach (backfilled from commit 8cb9cf2) | Titles now lead with "Dryer Vent & Air Duct Cleaning in {city}" | dryer vent cleaning near me (phones) on those pages | in the commit; on 22 Oct also watch the air duct queries they carry, e.g. "air duct cleaning in bonita springs fl" 114 / 0 / 7.2 and the Deerfield page 1,557 / 0 / 24.8 | 2026-11-15 | |
| 2026-10-15 | airduct | every city dryer vent page EN and ES; Sunrise air duct repair page (backfilled, bf99ea8) | Repair and installation section, FAQ, $200 to $600 in the table and description | dryer vent repair / installation near me | in the commit | 2026-11-05 | |
| 2026-10-06 | airduct | Greenacres dryer page; St. Petersburg title; Spanish air duct cleaning title; mold cost post; "licensed" removed sitewide (backfilled, f3f85a5) | See commit | air duct cleaning services st petersburg; limpieza de ductos de aire acondicionado precio | in the commit | 2026-11-03 | |
| 2026-10-02 | airduct + garage | ES AC leak guide, kitchen vent guide, Broward hub, HVAC cleaning title, dryer vent installation title, ES air duct description; garage emergency repair, tune-up, fiberglass and off-track titles (backfilled, 6a49530) | See commit | see commit | in the commit | 2026-10-30 | |
| 2026-09-30 | airduct | Fort Myers title; Lake Worth Beach dryer page; Lakeland repair page; furnace guide; installation page repair answer (backfilled, 352f5a2) | See commit. Judge Fort Myers on phones only: the desktop position 1 with no clicks is a rank tracker | duct cleaning fort myers | in the commit | 2026-10-28 | |
