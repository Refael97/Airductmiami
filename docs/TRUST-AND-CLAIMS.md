# Trust and claims policy

This file constrains every other file. When a growth tactic conflicts with a
rule here, the rule wins. The reason is not squeamishness: fabricated trust
signals are the fastest way to lose a whole network at once, and they are
enforced by regulators, not just by platforms.

## Reviews and testimonials

**Never publish a review, testimonial, rating, or review count that did not
come from a real customer.** No invented names, no generated quotes, no
placeholder star ratings, no `AggregateRating` schema without real reviews
behind it.

Why, concretely: the FTC's rule on fake reviews carries per-violation
penalties, and Google removes fake reviews and suspends the profiles behind
them. One suspended profile in a network invites scrutiny of the rest.

**What we do instead**, in order of speed:

1. **Real trust signals that need no customer** and fill the same visual
   slot: licensed and insured, industry standard followed (NADCA, IICRC,
   IDA), written guarantee, upfront pricing, same-week availability, years of
   experience, service area coverage.
2. **A review engine from day one.** Every completed job triggers an
   automatic request in the customer's language with a direct review link.
   Ten real reviews in month two beats fifty fake ones ever.
3. **Real work photos** from the first jobs, which double as before/after
   proof.
4. **Real named case notes** once customers agree: "Boynton Beach condo, musty
   AC smell, coil mold removed" is credible and true, and needs no invented
   five-star quote.

A site launches with zero reviews and honest trust signals. That is normal
and fine.

## Business address

Service businesses in this network are **Service Area Businesses**: they
travel to the customer and do not receive customers at a location.

- **Never publish a street address the business does not occupy.** Not a
  rented mailbox, not a random plausible street, not a coworking suite that
  nobody sits in.
- Display **service area** instead: state, counties, cities served.
- `LocalBusiness` schema uses `areaServed` and omits `streetAddress` rather
  than carrying a fake one.
- Google Business Profile is created **only** when a real verifiable address
  and real verification video exist. Until then the site runs without it,
  which is a real cost we accept rather than risk a fabricated verification.

## Phone numbers

Every site gets its **own** number that actually rings and is actually
answered (by a person or by the AI agent). A number that goes nowhere is
worse than no number: it converts a lead into a bad experience.

## Claims about the work

- Prices published on the site, in the popup, and in the AI agent script must
  agree. A visitor who reads a $300 to $600 range and hears $99 on the phone
  learns not to trust either.
- No unverifiable superlatives: "#1 in Florida", "voted best", "certified"
  when no certificate exists.
- Statistics get a real source. "Clogged dryer vents cause thousands of home
  fires a year" is defensible; an invented percentage is not.
- Guarantees are only published if the fulfillment partner will honor them.

## Somebody else's product specifications

Added 10 September 2026, when the Amarr page started publishing the
manufacturer's own figures for the commercial 2000, 2400 and 2500 series.

A specification is a claim about a third party's product, and getting one
wrong is worse than the usual kind of wrong: the reader orders a door on it.
So the rules are tighter than for our own copy.

- Every number comes from the manufacturer's own published chart. Not a
  dealer's summary, not a PDF on somebody's reseller site, not memory.
- The page says where the figures came from and on what date. Spec charts
  get revised, and a stale figure presented as current is a false claim even
  though it was true when it was written.
- The page also says that we confirm against the current drawing before
  anything is ordered, because that is what actually happens.
- If the manufacturer's site cannot be read, nothing gets published. On
  9 September the Amarr site was unreachable from the build environment and
  the honest answer was to say the work was blocked, not to reconstruct the
  line-up from search snippets.
- Naming a model is not claiming a dealership. The independent-company
  disclosure stays on the page.

## Identity

- The brand may be new; it may not pretend to be old. No "serving families
  since 1998" on a site launched this year.
- No implying affiliation with a certifying body we have not joined.
- Generated imagery may illustrate; it may not impersonate. See
  `MEDIA-STANDARD.md`.

## Network hygiene

- Sites never link to each other. A same-owner link network is a link scheme.
- Sites do not share content. Duplicate service pages across brands is
  scaled-content abuse.
- Each site is defensible on its own: real service, real fulfillment, real
  contact path.

## The test

Before publishing anything, ask: **if a customer, a competitor, or a
regulator saw exactly how this was made, would it still stand?** If the
honest version of a tactic works, use the honest version. If it only works
while nobody looks, it is not a tactic, it is a liability.

## Campaign landing pages, 16 September 2026

Two Google Ads landing pages shipped: `/musty-ac-smell/` and
`/mold-in-air-ducts/`. Four things in the supplied brief were not built as
written, each because a standard already recorded here or in a sibling
document says otherwise. Recorded so the next person does not "fix" them
back.

**Star ratings on the reviews.** Asked for; not built. `src/data/reviews.ts`
records that none of these eleven customers gave a rating, which is why the
site has no `rating` field and no `AggregateRating` schema anywhere. Stars
invented for a paid page are the FTC problem in 16 CFR part 465, on the page
most likely to be screenshotted by a competitor.

**A photograph captioned as a job in Boca Raton.** Asked for; not built.
`mold-on-supply-register.webp` is a generated illustration.
`docs/MEDIA-STANDARD.md` allows generated imagery to illustrate a condition
and puts "before/after of our work" in the real-only row. Naming a city and
calling it a typical call turns an illustration into evidence. It ships
captioned as an illustration. The before/after on `/musty-ac-smell/` is the
real customer-supplied pair from the home page and carries no such caveat.

**A team or truck photograph.** Asked for; not built. Real-only row, and we
have none. The one generated technician on the site is the recorded standing
exception in `docs/MEDIA-STANDARD.md`, not a precedent.

**The mold page's offer.** This is the substantial one, and it is set out in
full in the page's own header comment and in `research/fl-airduct/MOLD.md`.
The brief asked for a free duct mold inspection, a duct mold removal price
and a written quote for heavier contamination. Florida licenses mold
assessment and mold remediation separately under chapter 468 part XVI, and
s.468.8419(1) prohibits performing **or offering to perform** either without
the licence, with penalties graduating to a third degree felony. "Offer to
perform" reaches marketing: the offer sits on the page whether or not a job
is booked. We hold neither licence and duct cleaning carries no chapter 489
exemption.

So the page keeps the URL, the search intent and the traffic, and changes
what it offers: what growth looks like, what cleaning and sanitizing to the
NADCA source-removal standard does fix, and an explicit "what we do / what we
don't" split naming the licensed line and saying we stop at it. MOLD.md
already argued that this is stronger copy than the alternative, not weaker,
and in a market advertising "$49 mold specials" that looks right.

**Still open, and not created by these pages:** "Licensed & Insured" appears
site-wide with no licence number behind it, including in the footer of both
new pages. Duct cleaning is not a licensed activity in Florida. MOLD.md
flags this as the "certified when no certificate exists" case this document
already prohibits. It was not changed here because changing it on two pages
out of 302 helps nobody; it needs the owner's answer and a site-wide sweep.

## The licence claim, removed site-wide, 16 September 2026

Asked directly whether a licence number exists, the owner's answer was no.
That settles what `research/fl-airduct/MOLD.md` had flagged as an open item
and this document had left standing: "Licensed & Insured" was on 175 pages
with nothing behind it.

It had to go, and not only because it was unevidenced. **Air duct cleaning is
not a licensed trade in Florida.** There is no state duct cleaning licence, so
the claim was not merely unproven: it named a credential that does not exist.
That is exactly the "certified when no certificate exists" case this document
prohibits, and it was the single most repeated sentence on the site.

What changed:

| Was | Is |
|---|---|
| "Licensed & Insured · Serving all of Florida" | "Insured · Serving all of Florida" |
| "Con licencia y asegurados · Servicio en toda Florida" | "Asegurados · Servicio en toda Florida" |
| "licensed and insured technicians" | "insured technicians" |
| `standards.licensed: true` in facts.ts | removed, with a note on what to do if a real licence is ever held |

The FAQ answers were not edited, they were rewritten, because the honest
answer is a better answer than the one it replaces:

> Insured, yes, and we will send the certificate before an appointment if you
> ask. On licensing the honest answer is more useful than a yes: air duct
> cleaning is not a licensed trade in Florida. There is no state duct cleaning
> licence to hold, so a company advertising one is describing something that
> does not exist, and a number printed on a website proves nothing by itself.

That is the same position `/services/sliding-glass-door-repair/` already took
and the same one `/mold-in-air-ducts/` takes. The site now says one thing about
licensing everywhere.

**Two blog articles were also corrected, and this is the part worth noticing.**
"How to choose a duct cleaning company" and its Spanish twin told readers to
check that a company is licensed. That advice sent people looking for a
credential that does not exist, which is how the confusion propagates. They now
tell readers to verify insurance, and that the licence question only has a real
answer where the work crosses into a trade Florida does license.

The question text "Are you licensed and insured?" is kept as a question,
because it is what people ask and a FAQ that dodges the word is less useful
than one that answers it.

**Still open, and now inconsistent:** the promo popup still offers "$100 off
air duct mold removal" on mold pages, in both languages. Under
s.468.8419(1) that is an offer to perform mold remediation, the same problem
`/mold-in-air-ducts/` was rebuilt to avoid. It was left alone here because
changing which service gets discounted is a business decision rather than a
copy fix, but it is the one place left where the site offers a licensed
service by name and at a price.
