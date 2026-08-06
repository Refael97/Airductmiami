# Keyword research, garage door vertical, US

Source: a 4,994 row US English export for the seed term "garage door",
6 August 2026. 3,956 unique keywords after deduplication, 4,730,640 total
monthly volume. 306 keywords carry volume data and 281 carry CPC.

Raw file archived at `docs/research/garage-door-keywords-2026-08-06.csv`.

---

## The finding that governs everything else

**CPC is the qualifying filter, not volume.**

High commercial value:

| Keyword | Volume | CPC |
|---|---|---|
| garage door emergency repair | 12,100 | **$81.23** |
| garage door technician | 22,200 | $59.84 |
| garage door tech | 22,200 | $59.84 |
| who fix garage door | 260 | $53.20 |
| garage door fix | 246,000 | $51.94 |
| garage door repair | 246,000 | $51.67 |
| garage door repair near me | 165,000 | $46.96 |
| garage door maintenance near me | 18,100 | $45.89 |
| garagedoorrepair | 246,000 | $44.14 |
| repair garage door | 301,000 | $43.95 |
| garage door opener repair | 110,000 | $36.87 |
| garage door quote | 720 | $37.43 |
| garage door spring replacement | 27,100 | $30.37 |

Comparable volume, near zero value:

| Keyword | Volume | CPC |
|---|---|---|
| garage door insulation | 49,500 | $1.51 |
| garage door bottom seal | 27,100 | $0.87 |
| garage door weather stripping | 27,100 | $1.14 |
| garage door lube | 22,200 | $0.64 |
| garage door seal | 27,100 | $1.13 |

Someone searching "bottom seal" is buying a twelve dollar strip of rubber at
a hardware store. They are not a customer. Advertisers pay $81 a click on
"emergency repair" because they know precisely what that lead is worth.

Two consequences. Chase CPC, not volume. And accept that paid is closed to
us at these prices, which makes organic the entire game.

## Repair outweighs installation roughly ten to one

Repair intent, combined: about **1.6 million** monthly.
Installation intent, combined: about **150,000**.

The site's emphasis should follow that ratio.

## "Near me" is about 855,000 monthly on its own

| Keyword | Volume |
|---|---|
| fix garage door near me | 246,000 |
| garage door fix near me | 201,000 |
| garage door repair services near me | 201,000 |
| garage door repair near me | 165,000 |
| garage door companies near me | 27,100 |
| garage door maintenance near me | 18,100 |
| garage door near me | 14,800 |

This cluster is won through Google Business Profile and city pages, not
through articles. The site already carries 41 city pages. GBP is the missing
half, and it is blocked until there is a real review collection process,
because a profile is where reviews get displayed.

## Typos and no-space variants carry real volume

`garagedoorrepair` 246,000 at $44.14. `garagedoor` 201,000.
`garage door 0pener` 135,000, with a zero instead of a letter O.
`garage door insolation` 60,500.

Do not write these into titles. Google resolves them. They are recorded here
so nobody mistakes them for an opportunity later.

## The symptom cluster, which is where the panic buyers are

| Keyword | Volume | CPC |
|---|---|---|
| garage door will not open | 3,600 | $27.57 |
| garage door won't close | 3,600 | $19.08 |
| garage door is not opening | 1,900 | $27.64 |
| garage door not opening | 1,600 | $32.65 |
| garage door is not closing | 1,900 | $24.37 |
| garage door jammed | 590 | $33.24 |
| garage door is stuck | 590 | $26.76 |
| garage door will not open all the way | 720 | $22.37 |
| garage door won't open or close | 170 | $28.00 |
| garage door acting like something is in the way | 30 | $35.61 |

Low volume individually, very high intent, and the site already covers most
of it well.

---

## Coverage audit against the site

Already strong: springs, cables, off track, panels, opener repair, safety
sensors, remotes, symptoms, the whole cost cluster, brands (LiftMaster,
Chamberlain, Genie, Clopay, Amarr), door materials, opener drive types.
48 articles, 10 services, 15 product pages, 41 cities, 6 regions.

### Gaps identified, and what was done

**1. The word "maintenance" was nearly absent. Fixed.**

"garage door maintenance near me" is 18,100 at $45.89, the second highest
CPC in the dataset among terms with real volume. "garage door maintenance"
adds 6,600 at $29.69. The site called the service a tune-up, which almost
nobody searches, and the meta title contained the word maintenance nowhere.

Changed the tune-up service title to `Garage Door Maintenance & Tune-Up in
New York | From $95`. Slug left alone deliberately, since the page is
already indexed and a URL change costs more than it gains.

**2. Opener diagnostic codes. Zero coverage. Fixed.**

`garage door blinks 10 times` 170 at $13.85, `blinks 5 times` 30 at $18.93,
`linear garage door 4 flashes` 20 at $14.32, plus a wide zero-volume tail:
sensor flashing red, flashing yellow light, 3 blinks, 5 beeps, opener
beeping, and brand-prefixed variants.

Small individually, but it is a closed finite topic with high intent,
somebody standing under the motor counting flashes, and nobody covers it
well. Added `garage-door-opener-blinking-light-codes`.

**Note on accuracy.** That article deliberately does not publish a full code
table. The up and down LED mappings are genuinely model specific and changed
between board generations. It states confidently only what holds across the
range, principally that ten flashes on LiftMaster and Chamberlain means the
safety sensors, and directs readers to their model's chart for the rest. A
wrong code table sends a reader to buy the wrong part, which is worse than
no table.

**3. "Opens by itself". Zero coverage. Fixed.**

`why garage door open by itself` 1,300 and `why garage door opens by itself`
1,000, plus a tail of "on its own" and "randomly" variants. Added
`garage-door-opens-by-itself`, built around the fixed-code opener problem
that most homeowners have never heard of.

**4. Remote and keypad programming. Barely covered. Fixed.**

`how to program a garage door opener` 18,100, `how to program garage door
remote` 18,100, `garage door keypad programming` 3,600, `garage door opener
remote` 33,100, `garage door universal remote` 18,100.

Large volume, low CPC at $1.51 to $3.31. This is DIY traffic, not lead
traffic, and it should be judged as authority and internal-link fuel for the
opener services rather than as a lead source. Added
`how-to-program-a-garage-door-remote`.

**5. "Technician" and "company" framing. Partially open.**

`garage door technician` and `garage door tech` are 22,200 each at $59.84.
`garage door company` 18,100 at $36.02, `garage door companies` 18,100 at
$32.39, `garage door companies near me` 27,100 at $27.52.

The intent is identical to "repair near me", so this needs the vocabulary
present on pages that already serve that intent rather than a new page. A
thin page built to catch the word would be worse than nothing. The word
appears in 17 files already; the open question is whether it appears in
titles and headings on the pages that matter.

**Not done. Next pass.**

## Deliberately not pursued

The DIY parts cluster: insulation, seals, weather stripping, lubricant,
glass, bottom rubber. Combined volume is substantial and combined CPC is
under $1.60. These searchers buy at a hardware store. Writing for them costs
effort and returns traffic that never converts, and it dilutes the topical
signal of a repair site.

The site's existing insulated-vs-uninsulated article is the right amount of
coverage for that topic: enough to serve the buying decision, not a bid for
the whole DIY cluster.
