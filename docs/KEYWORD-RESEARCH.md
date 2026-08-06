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

**5. "Technician" and "company" framing. Fixed.**

`garage door technician` and `garage door tech` are 22,200 each at $59.84.
`garage door company` 18,100 at $36.02, `garage door companies` 18,100 at
$32.39, `garage door companies near me` 27,100 at $27.52.

No title on the site contained the word. The three existing trust articles
cover choosing a *company*, which is a different question from what a
*technician* is and does.

Added `garage-door-technician-what-they-do`, covering licensing in New York
honestly (there is no dedicated state licence), what happens step by step on
a service call, what a stocked van carries, and the technician versus
salesman distinction. It opens by saying plainly that tech, technician,
expert, specialist, doctor and vendor all describe the same person and none
of them is a qualification, which serves the whole synonym cluster without
keyword stuffing and is also true.

## Second pass, systematic audit

The first pass was a spot check of nine terms. This is the real thing: every
keyword carrying volume or CPC, matched token by token against the full
published corpus.

| | Before this session | After |
|---|---|---|
| Keywords with data | 306 | 306 |
| Covered | 212 | 208 |
| Value covered, excluding typos | 87% | **98.3%** |
| Remaining real gap value | 15.5M | 2.0M |

Clustering the full 3,956 keywords surfaced four gaps the spot check missed.

**Sizes and dimensions.** 127 keywords, 68,390 volume, 82 uncovered, and no
coverage at all. Low CPC at $2.60 because much of it is retail shopping, but
this is somebody measuring an opening before replacing a door, which is a
$1,056 to $4,620 job here. One guide covers 82 keywords at once, which is
the best coverage-per-article ratio in the whole dataset. Added
`standard-garage-door-sizes`.

**Dead opener.** `garage door opener quit working` 2,900 at $19.59,
uncovered. Added `garage-door-opener-quit-working`, built around the point
that most dead openers were killed by an unbalanced door, so replacing the
opener without touching the spring just kills the new one.

**The jamb cluster.** `garage door jamb` 1,600, `jamb replacement` 320 at
$10.21, `jamb wraps` 590, `jamb trim` 590. Zero coverage, and rotted jambs
are a genuine recurring New York job because of road salt. Added
`garage-door-jamb-replacement`.

**Locks and security.** `garage door locks` 8,100 at $4.71 plus a 48 keyword
cluster, almost entirely uncovered. Added `garage-door-locks-and-security`,
leading with the manual lock engaged against a powered opener, which is one
of the most expensive avoidable repairs in the trade.

## What remains uncovered, and why it stays that way

`garage door for sale` 12,100, `garage door lowes` 12,100, `garage door usa`
2,900, `garage door with screen` 27,100, `garage door for barn` 3,600.
Retail and product shopping intent. We install doors, we do not sell them
over a counter, and writing for a Lowes shopper produces traffic that never
converts.

`garage door weatherstripping` 27,100 at $1.02, `gasket replacement` 8,100
at $4.43, `lube` 22,200 at $0.64, `trim` 6,600 at $0.56. The DIY parts
cluster. Combined volume is large and combined CPC is under $1.60.

Seasonal decor: 84 keywords, 32,940 volume, $1.44 average CPC. Christmas and
Halloween door covers, magnets, wreaths. Not this business.

## Deliberately not pursued

The DIY parts cluster: insulation, seals, weather stripping, lubricant,
glass, bottom rubber. Combined volume is substantial and combined CPC is
under $1.60. These searchers buy at a hardware store. Writing for them costs
effort and returns traffic that never converts, and it dilutes the topical
signal of a repair site.

The site's existing insulated-vs-uninsulated article is the right amount of
coverage for that topic: enough to serve the buying decision, not a bid for
the whole DIY cluster.
