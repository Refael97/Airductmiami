# SEO change log

One line per change: date, what, why, what to watch. Newest first.

| Date | Change | Why | Watch |
|---|---|---|---|
| 2026-09-13 | City page descriptions and the templated intro now say "AC duct or AC vent cleaning" | The 52 English city pages contained "AC vent", "AC duct" and "air conditioner" zero times, while Search Console showed them ranked for "ac vent cleaning deerfield beach fl" at position 9.2 with 67 impressions and no clicks, plus "ac duct cleaning" and a city across Bradenton, Hollywood, Pembroke Pines, Boca Raton, Sarasota and Clearwater. The Spanish pages do carry the phrase and the best converting query on the site is "limpieza de ductos de aire acondicionado cerca de mi" at position 3.8 and 15 percent CTR | Position and CTR on the "ac vent" and "ac duct" plus city queries. First check day 14 |
| 2026-09-13 | `generate_lead` gated on a marker the form leaves behind, and given service, city, source and language | It fired on every load of a thank-you page, so refreshes, back-button returns and bookmarks all counted. 26 events from 13 users over 30 days, on the one number the business steers by | That the event count stops running at roughly two per user. Owner still has to tick it as a key event in GA4, which has no API |
| 2026-09-13 | Lead emails carry the city and county behind the ZIP | A popup lead arrived as five digits. Nobody dispatching from an inbox can place 33019 | That `zip_city` and `zip_county` appear on real leads, and are blank rather than wrong for out of state ZIPs |
| 2026-09-06 | `ny-garage` re-pointed at Florida as `fl-garage`: 332 pages, 166 English and 166 Spanish. 52 cities, 7 regions, 12 services including a hurricane cluster, 68 guides, full Spanish mirror | New York produced one click in three months. Florida produced five to six organic leads a week on the air duct site inside two months, with no Business Profile, and has fulfillment partners. The hurricane and code cluster is empty across every Florida competitor checked, and Spanish is empty everywhere outside Miami-Dade | Whether the Spanish city pages outside Miami repeat what Spanish did on the air duct site, where it ranks at position 2 to 7 against 24 to 60 for English. First check at day 14 |
| 2026-08-02 | `ny-garage` built: 131 pages, brand book applied, agent surface live | Site two of the network. Published prices are the differentiator in a market where directories own every cost query because contractors will not answer them | Nothing yet, blocked on domain and phone. First thing to watch after launch is whether the cost cluster takes any of the directory positions |
| 2026-07-31 | Air duct mold removal cost guide (EN+ES) | 'air duct mold removal' 92 impressions at position 91, cost sub-queries had no page. Cost cluster is our lane | Position on the mold cost queries, and whether it passes equity to the service page |
| 2026-07-30 | Network lead contract (`LeadMeta.astro`) on all forms | One pipeline and one AI agent for every site | Test lead carries `site_id`, `locale`, `vertical` |
| 2026-07-30 | Sticky mobile bar switched from call to quote form | Form leads preferred over calls right now | `generate_lead` from `quote_bar` trigger |
| 2026-07-30 | Popup: engagement trigger, context offer, discount framing | 30 views, 0 leads on the 3s timer + fixed $99 | Conversion rate by `offer` and `trigger` |
| 2026-07-30 | GA4 installed with lead events | No visibility into on-site behavior | `phone_call`, `generate_lead` firing |
| 2026-07-23 | Titles sharpened on 4 pages at positions 16 to 21 | Striking distance, numbers pull clicks | CTR and position on those 4 |
| 2026-07-15 | 301 edge redirect enforcing trailing slash | 30 duplicate URL pairs splitting signals | Pairs collapsing to one URL |
| 2026-07-15 | Homepage titles rewritten keyword-first | 158 impressions, 1 click | Homepage CTR |
| 2026-07-15 | Mold service renamed to "Air Duct Mold Removal" | Top non-brand query at position 96 | Position for "air duct mold removal" |
| 2026-07-15 | 5 new Spanish articles | ES ranks 12 vs EN 48 | Impressions on the new ES URLs |
| 2026-07-13 | Dryer Vent Installation service + 3 regional pages (EN+ES) | 28 impressions with no matching page | Whether the service page takes over from the blog post |
