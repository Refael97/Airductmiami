# precisiondoormiami.com: full teardown

Pulled and analysed 9 September 2026. Every number here was measured from the
live site, not estimated. This is the competitor the owner named as ranking
first, and the question is what they have that we do not.

The short version: **their website is not why they rank first.** On almost
every measurable on-page dimension we already beat them, in several cases by
a wide margin. What they have is a national franchise behind the domain, a
verified Google Business Profile, a real address, real reviews, real named
technicians and real job photos. Those are the things worth copying, and only
one of them is a website change.

## 1. Stack and scale

| | Precision Miami | Garage Door Fixers (ours) |
|---|---|---|
| Platform | WordPress, Divi theme, WP Rocket, Yoast | Astro static |
| URLs in sitemap | **151** (58 of them duplicated across two sitemaps) | **328** |
| Real unique pages | roughly 93 | 383 built |
| Homepage words | **1,540** | comparable |
| Location page words | **809** | 2,300 to 2,600 |
| Part page words | **1,099** | 2,300 to 2,600 |
| Spanish pages | **12** | **164** |
| Scripts / stylesheets on homepage | 17 / 18 | far fewer, static |
| HTML weight, homepage | 164KB | far lighter |

Their sitemap index lists two children, `page-sitemap.xml` (92) and
`project-sitemap.xml` (59), and the second one is mostly the same location
pages again. So the true page count is around 93, not 151.

## 2. What they have that we do not

This is the part that matters, so it is first.

1. **A real street address and a verified Google Business Profile.** Not
   visible in the HTML as such, but it is the foundation of everything else
   below, and per the Whitespark 2026 survey GBP is roughly 32% of local
   ranking signal. We publish no address by policy and have no profile.
2. **Named technicians with photographs.** `/employees/` carries 18 uploaded
   images including individual portraits with real names: Alejandro P.,
   Fabian V., Orlando R. This is the strongest first-party trust signal on
   their entire site and it costs nothing but photographs.
3. **A real before-and-after gallery.** `/before-and-after/` carries 26
   images of actual jobs, files dating back to 2022. Ours has none.
4. **Financing.** `/financing-options/`, 828 words. On a $3,000 average close
   this is a genuine conversion lever and we do not mention it at all.
5. **A published warranty page.** `/warranty/` plus `/warranty-details/`.
6. **Coupons page.** `/coupons-and-discounts/`, 517 words, a permanent URL
   rather than a popup.
7. **A booking widget.** "Book Online" opens a scheduler from
   `roverdirect.iaanswers.com`, which is the Precision Door franchise
   answering and booking platform. Genuine appointment setting, not a form.
8. **Hyperlocal coverage at neighbourhood level.** 58 location pages, and
   they are not cities: Flagami, Coral Terrace, Ives Estates, Kendale Lakes,
   The Hammocks, Three Lakes, West Little River, Olympia Heights. That is a
   granularity we do not attempt.
9. **`/parts-comparison/`.** A page comparing part grades, which is a buying
   guide angle our parts catalogue does not have yet.
10. **A careers link** to `jobs.precisiondoor.net`, the franchise's hiring
    site, which is a real corporate-scale signal.

## 3. Where we already beat them, measurably

**Schema. This one is not close.** Every page on their site emits the same
Yoast default block: `WebSite`, `WebPage`, `Organization`, `BreadcrumbList`,
`ImageObject`, `SearchAction`. Verified on the homepage, a service page, a
part page, a location page, the reviews page, the FAQ page and a Spanish
page. All seven identical.

That means they have **no `LocalBusiness`**, **no `Service`**, **no
`FAQPage` even on `/faq/`**, no `areaServed`, no `AggregateOffer`. We emit
`HomeAndConstructionBusiness` with full `areaServed`, plus `Service` and
`FAQPage` per page.

**Content depth.** Their location page is 809 words against our 2,300 to
2,600. Their part page is 1,099 against ours at the same 2,300 to 2,600.

**Spanish.** They have 12 Spanish pages. We have 164. And their Spanish is
structurally weaker than the count suggests: interior pages carry only 2
hreflang tags where the homepage carries 4, and `/es/locations/` is a
222-word archive stub rather than real Spanish city pages. They have no
Spanish equivalent for the great majority of their English pages.

**Published prices.** They publish none. `MARKET.md` already found this and
it holds: their cost pages are titled `garage-door-replacement-cost` and
`garage-door-spring-replacement-cost` but the number is not on the page.

**Image accessibility and SEO.** Measured across five of their pages, 84
content images: only **42% have meaningful alt text**, 67% are webp, 70%
lazy loaded, 75% carry srcset. The entire before-and-after gallery has empty
alt attributes, which means 26 job photos contribute nothing to image search.

**Page weight.** 17 external scripts and 18 stylesheets on the homepage,
164KB of HTML, on Divi plus WP Rocket. Our static build is far lighter.

## 4. Lead capture, in detail

The owner asked about this specifically.

**There is no lead form on the homepage.** The only `<form>` element in the
entire homepage HTML is the search box. Their capture is:

1. **Phone, everywhere.** `(305) 783-3573`, in the header, in an
   always-visible sticky bar, as an `h2` inside page content, and repeated in
   the footer. Marked "Call 24/7".
2. **"Book Online"**, a JavaScript widget with class `rd-init` loaded from
   `roverdirect.iaanswers.com/js/integrate.js`. It appears in the header, the
   mobile nav, several in-page buttons and a call-to-action band.
3. **CallRail** is present, which means their phone numbers are dynamically
   swapped for call tracking and attribution.
4. **Google Tag Manager**, container `GTM-NWGFD2WX`.

**What this tells us.** They are a phone-first operation with franchise
dispatch behind it. They are not trying to capture a form fill and follow up;
they are trying to book the job in the moment. That works when you have staff
answering 24/7, which the franchise provides.

**Our position is different and not worse.** We run three separate capture
surfaces, all with structured lead data: the contact form, the promo popup
with four routed offers, and the item request forms on the parts and doors
catalogues. Every lead arrives tagged with site, vertical, locale, source,
page, and for the catalogues the exact part or door requested. They get a
phone call with none of that context.

## 5. Why they actually rank first

Being honest about this matters more than listing features.

- **Franchise authority.** They are a Precision Door Service franchise. The
  national domain `precisiondoor.net` is decades old with enormous authority,
  and the franchise network cross-references its locations.
- **Google Business Profile with a real address**, which is roughly a third
  of local ranking signal and gates the Map Pack entirely.
- **Review volume across Google, BBB and Angi**, referenced on their pages.
- **Domain age and accumulated links.**
- **Neighbourhood-level pages**, 58 of them, which is genuinely good local
  SEO practice even though each page is thin.

None of that is the website's on-page quality. Their pages are, by
measurement, thinner than ours, with weaker schema, worse image
accessibility, no published prices and a Spanish section that is a token
rather than a mirror.

## 6. What to do, in order of value

1. **A real address and a Google Business Profile.** This remains the single
   largest gap and it is not a content problem. Nothing on this list comes
   close to it. See `docs/TRUST-AND-CLAIMS.md` for why we have not faked one.
2. **Named technicians with photographs.** Cheap, honest, and the strongest
   trust asset on their site. We need the owner or a fulfilment partner to
   supply real photos and first names.
3. **A before-and-after gallery of real jobs.** Their 26 photos are their
   best content asset and ours has none. Real photos only.
4. **A financing page.** On a $3,000 average close with a $1,500 margin, this
   is a conversion lever we are simply not pulling.
5. **A warranty page.** We mention a one year warranty in copy but do not
   give it a page.
6. **Neighbourhood-level pages inside our biggest cities.** They have 58 in
   Miami-Dade alone. We have city-level only. This is where their local SEO
   is genuinely better structured than ours.
7. **A parts comparison page**, good grade against builder grade, to sit
   above our parts catalogue.

Items 2 through 7 are all things we can build. Item 1 is the owner's
decision and is worth more than all the others combined.

## 7. What not to copy

- **Their thin pages.** 809 words on a location page is not a target.
- **Their schema.** Yoast defaults on every page is a missed opportunity, not
  a model.
- **Their empty alt attributes**, particularly on the job gallery.
- **Their token Spanish.** Twelve pages with inconsistent hreflang is worse
  than no Spanish strategy, because it looks handled and is not.
- **Phone-only capture.** It works for them because a franchise answers 24/7.
  Without that, a missed call is a lost lead with no record.
