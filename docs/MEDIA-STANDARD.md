# Media standard

What imagery a site carries, where it comes from, and the line we do not
cross.

## The line

**Generated imagery may illustrate. It may not impersonate.**

| Use | Allowed | Why |
|---|---|---|
| Hero illustration or scene | Yes, generated | Decorative, claims nothing |
| Atmosphere: clean home, comfortable room | Yes, generated | Decorative |
| Icons, patterns, backgrounds, OG image | Yes, generated | Decorative |
| Equipment or technique diagrams | Yes, generated | Educational, must be accurate |
| Article illustrations | Yes, generated | Labelled as illustration where it matters |
| "Before / after" of our work | **No, real only** | It is evidence of work performed |
| "Our team", "our truck", "our technician" | **No, real only** | It is a claim about the business |
| Customer testimonial video or UGC | **No, real only** | It impersonates a real person |
| Certificates, licenses, badges | **No, real only** | Documents |

A generated before/after is a fabricated proof of work. It is the same
category of problem as a fake review, and it is the single easiest thing for
a competitor to expose.

## Standing exception, recorded 3 September 2026

The promo popup on the Florida site carries a generated photograph of a
technician in Florida Breeze uniform beside branded equipment. That sits in
the "real only" row above, and it ships at the owner's explicit direction
after the conflict was raised.

Recording it here rather than quietly amending the rule, because a standard
the site does not follow is worse than no standard. The rule stands. This is
a known exception to it, and the risks it carries are the ones the rule
exists to prevent:

- It is a claim that the business has a uniformed technician and that
  equipment. If a customer books on the strength of it and something else
  arrives, the gap is the complaint.
- It must never be uploaded to Google Business Profile, Yelp or any
  directory, where photographs are read as documentation of the business
  rather than as decoration. That is a listing suspension.
- It should be replaced with a real photograph of the actual crew the first
  week one exists. That photo will outperform it anyway.

Nothing else moves. No generated before/after, no generated review, no
generated certificate, no generated rating.

## What a site launches with

Launch does not wait for real photos. The launch set is:

1. **Hero visual**: generated scene fitting the vertical and region
2. **Section imagery**: 3 to 6 generated atmosphere or process visuals
3. **Icons**: inline SVG per service, in the brand's stroke style
4. **OG image**: 1200x630 PNG, brand and value proposition
5. **Logo and favicon**

Real-work galleries and before/after sliders are **built but empty**, or
simply not shown, until the first real jobs produce photos. The component
exists so the day the partner sends photos, they drop in.

## Getting real photos

Part of the fulfillment agreement from day one: the partner photographs each
job, before and after, same angle, decent light. It costs them a minute and
it is the highest-value marketing asset the site will ever have. Site one's
real before/after photos outperform anything that could be generated.

Per photo received: optimize to WebP, add descriptive alt text naming the
city and the service, and log which job it came from.

## Generation rules (Higgsfield or similar)

- Prompt for the region: Florida homes and New York homes do not look alike,
  and neither do their garages, roofs, or streets
- Match brand colors so generated imagery sits inside the palette
- No visible text in generated images; text is added in HTML so it stays
  translatable and searchable
- No recognizable faces presented as staff or customers
- No fabricated brand names, license plates, or signage
- Generate at 2x the display size, then optimize

## Delivery rules

- WebP, sized to the largest slot it fills, never full resolution
- Every image has meaningful `alt` text in the page's language
- Explicit `width` and `height` on every image to prevent layout shift
- Hero image eager, everything else lazy
- Total page weight target under 1MB on mobile

## Per-vertical expectations

Research pass 9 decides the media plan. What customers expect differs:
air duct buyers want to see inside ducts; garage door buyers want to see
doors, openers, and finished installs; restoration buyers want to see damage
and recovery. Build the plan from what the top organic competitors actually
show, then do it better with real photos as they arrive.
