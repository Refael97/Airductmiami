# Analytics and Search Console audit, 8 August 2026

Pulled live from Google Search Console and GA4 through Composio, both
properties. Netlify is not connected to this session, so build and deploy
state was read from the repo configuration rather than the Netlify API.

Window: GSC 10 May to 6 August 2026. GA4 last 30 days.

---

## 1. The garage door traffic is bots, and the numbers prove it

GA4, garage-door-fixers.com, last 30 days:

| Country | Users | Sessions | Engagement (sec) | Engaged sessions |
|---|---|---|---|---|
| Czechia | 65 | 65 | **0** | **0** |
| Netherlands | 47 | 47 | **0** | **0** |
| United States | 30 | 30 | **22** | **0** |
| France | 13 | 13 | **0** | **0** |
| Israel | 3 | 10 | **675** | **7** |
| China | 2 | 2 | 0 | 0 |
| Poland | 2 | 2 | 1 | 0 |

Czechia recorded 65 sessions and zero seconds of engagement. That is not a
low number, it is an impossible one for humans. Netherlands the same at 47.
France the same at 13.

**The United States rows are bots too.** 30 sessions, 22 seconds of
engagement in total, zero engaged sessions. That is 0.73 seconds per session.
Country is not the filter, engagement is.

Israel is the one real row: 3 users, 10 sessions, 675 seconds, 7 engaged
sessions. That is the owner.

### The smoking gun

Browser and operating system, same period:

| Browser / OS | Sessions | Engagement (sec) |
|---|---|---|
| **Chrome / iOS** | **126** | **0** |
| Safari / iOS | 16 | 16 |
| Chrome / Windows | 14 | 22 |
| Chrome / Macintosh | 9 | 675 |

126 sessions of Chrome on iOS with zero engagement. The top three bot
countries total 125. They are the same traffic, running headless with a
spoofed mobile user agent. Chrome on Macintosh with 675 seconds is the owner.

Source for every bot row is `(direct) / (none)`. Bots send no referrer.

### What to do about it

Nothing for rankings. Crawlers do not affect how Google ranks a site.

For measurement, the fix is a reporting habit rather than a code change:
**read Engaged sessions, never Users.** GA4 already separates them correctly,
and the separation is total here. Also add the owner's IP as internal traffic
under Admin, Data Streams, Configure tag settings.

And for the next few months the number that matters is in Search Console, not
Analytics. A Czech scraper cannot generate a Google impression.

### The Florida property is clean by comparison

| Channel | Sessions | Users | Engaged sessions | Engagement (sec) |
|---|---|---|---|---|
| Organic Search | 62 | 46 | **37** | **2,151** |
| Direct | 38 | 37 | 5 | 121 |

United States: 61 users, 70 sessions, 2,094 seconds. Real people, engaging.
The Direct row is where the small amount of bot traffic sits.

---

## 2. Spanish is outranking English by a factor of five

This is the largest finding in the whole audit.

Florida Breeze, GSC, page positions:

| Spanish page | Position | CTR |
|---|---|---|
| /es/blog/instalacion-ventila-secadora-florida | **2.0** | 50% |
| /es/blog/limpieza-de-ductos-casa-nueva/ | **2.3** | 33% |
| /es/blog/limpieza-de-ductos-y-alergias/ | **3.3** | 33% |
| /es/areas-de-servicio/kissimmee/ | **3.8** | 5% |
| /es/blog/deshumidificador-prevencion-moho/ | **4.3** | 9% |
| /es/blog/humedad-ideal-interior-florida/ | **4.5** | 2% |
| /es/servicios/attic-insulation/ | **5.4** | 12.5% |
| /es/areas-de-servicio/tampa/ | **6.1** | 12.5% |
| /es/areas-de-servicio/west-palm-beach/ | **6.5** | 50% |
| /es/blog/estandares-nadca-explicados/ | **6.9** | 2% |

| English page | Position | CTR |
|---|---|---|
| Homepage | 36.3 | 1.4% |
| /service-areas/fort-myers/ | 33.6 | 1.3% |
| /service-areas/naples/ | 24.6 | 1.7% |
| /service-areas/bonita-springs/ | 38.5 | 1.4% |
| /service-areas/pembroke-pines/ | 50.7 | 0.6% |
| /blog/black-mold-air-vents/ | 58.0 | 1.1% |
| /service-areas/boca-raton/ | 61 to 74 | 0 |

Spanish sits on page one. English sits on pages three to six. Spanish click
through runs 5 to 50 percent against roughly 1 percent for English.

The reason is competition. Almost nobody in the Florida duct trade publishes
real Spanish content, and South Florida is heavily Hispanic. The Spanish side
is not a nice-to-have translation layer, it is the part of this site that
actually ranks.

**This should drive the next content decisions on every service site in the
network that serves a Hispanic market.**

---

## 3. Twelve thousand internal links were firing 301 redirects

The Florida site's internal links omitted trailing slashes while the site
serves pages at the trailing-slash form and redirects everything else.

| | Before | After |
|---|---|---|
| Internal links missing the trailing slash | **12,086** | 116 |
| Internal links with it | 1,028 | **12,998** |
| Double-slash links | 0 | 0 |

Every one of those 12,086 links took a visitor and a crawler through a 301
before reaching the page. That wastes crawl budget on a site with 230 pages,
passes link equity through a redirect, and is the direct cause of the
duplicate URLs Search Console was reporting:

- `/about` at 44 impressions, position 13.5, alongside `/about/` at 7 impressions, position 40.1
- `/blog` at 42 impressions, position 9.0, alongside `/blog/` at 3 impressions, position 20
- `/service-areas/bonita-springs` at 36 impressions alongside `/service-areas/bonita-springs/` at 145
- `/blog/air-duct-sealing-benefits` alongside `/blog/air-duct-sealing-benefits/`

Two versions of the same page each accumulating separate impressions and
separate positions is authority split in half.

Fixed across the whole source: the `ui.ts` path helpers and locale strings,
hardcoded hrefs in 11 templates, `altHref` in 16 files, breadcrumb `href`
values in 10 templates, and 343 markdown links across 100 articles.
Breadcrumb structured data now emits trailing-slash URLs as well.

The trailing-slash edge function stays. It is the safety net for external
links and old index entries, not the primary mechanism.

**ny-garage was checked and is clean:** 0 slashless internal links against
15,443 correct ones. The problem was Florida only.

---

## 4. Internal linking to articles was zero on both sites

Same structural gap found on ny-garage earlier the same day, and it is worse
here because there are more articles.

Florida Breeze carries 107 articles, 51 English and 56 Spanish. Before this
pass, the 11 service pages and 40 city pages linked to none of them, in
either language.

Added `src/lib/relatedContent.ts`, which bridges the blog `category` field to
service slugs, since this site's blog schema has no `relatedServices` field.
The mapping is hand written rather than inferred, because a wrong pairing
sends a reader from a dryer vent page to a mould article and wastes the click.

| Page type | Guide links before | After |
|---|---|---|
| English service pages | 0 | 6 |
| Spanish service pages | 0 | 6 |
| English city pages | 0 | 6 |
| Spanish city pages | 0 | 6 |
| Sitewide, English articles | ~0 | 297 |
| Sitewide, Spanish articles | ~0 | 308 |

City pages get a fixed editorial pick rather than most-recent, so link
targets stay stable instead of churning every time an article ships.

---

## 5. Search Console findings not yet acted on

**Florida, close to page one and worth a push:**

| Query | Impressions | Position |
|---|---|---|
| ac vent cleaning deerfield beach fl | 16 | **16.1** |
| air duct cleaning | 99 | 22.1 |
| air duct cleaners near me | 2 | 21.0 |
| air duct and vent cleaning services | 9 | 31.9 |
| air duct cleaning aventura | 5 | 30.0 |
| air duct cleaning belleair beach | 3 | 31.0 |

**Florida, high impressions and buried:** Boca Raton takes 28 impressions at
position 61.5 and another 28 at 73.9 on the `fl` variant. Pembroke Pines has
180 impressions at position 50.7. Both are real demand landing on weak pages.

**Garage door, local intent already registering:**

| Query | Position |
|---|---|
| garage door for sale near me | **12** |
| garage door near me | **13** |
| garage door openers installers near me | **17** |
| garage door opener installation near me | 20 |
| garage door company | 22 |
| garage door opener repair | 23 |
| bay ridge | 16.5 |

Also `door repair smithtown`, `door replacement smithtown`, `door
installation garden city`, `double doors hicksville`, `bayside garage doors`.
The city pages are being matched to genuinely local queries three weeks in.

**Two housekeeping items on the garage site:**

`http://garage-door-fixers.com/` is indexed separately at position 87.2 with
5 impressions, against the `https://` version at 16.5. Legacy index entries
from before SSL was provisioned. It resolves on its own as Google recrawls.

`/contact/` appeared at position 196. Not urgent, but the contact page has no
business ranking that deep for anything.

**One oddity worth knowing:** `bayside breeze air duct services llc` returns
the Florida site at position 1.8. If that is not the registered entity name,
Google is associating the site with a different company.

---

## 6. Still blocked, and still the biggest constraint

Neither of these is a code problem and neither can be fixed from this repo.

**The garage site has no live phone number.** `phoneLive: false`. The keyword
research put `garage door emergency repair` at $81.23 per click and the whole
"near me" cluster at 855,000 monthly searches. Somebody whose door is stuck
open at two in the morning calls, they do not fill in a form. The site can
rank perfectly and lose the traffic on arrival.

**Neither site has a Google Business Profile.** The "near me" cluster is won
through GBP, not through content, and GBP is where reviews are displayed.
Given what was found on the Florida homepage this morning, do not open a
profile until there is a real process for collecting real reviews. A profile
with zero reviews is fine. A profile with manufactured ones ends the business.
