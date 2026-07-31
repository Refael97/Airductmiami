# Keyword data (Google Trends, US-NY)

Source: five Trends exports for New York state, top and rising searches.
Windows: 12 months (2025-07-31 to 2026-07-31) and a 24-hour snapshot
(2026-07-30 to 2026-07-31). "Search interest" is relative to the top query
in each export (100 = the peak term), not absolute volume.

This closes gap 2 in the brief. Every architecture decision below is now
backed by data rather than inference.

**Noise filter applied**: the exports contain out-of-state queries
(Cincinnati, Irvine, Orange County, Charlotte, Colorado Springs, Houston,
Buena Park, Dana Point, Brea, Laguna Hills, Tustin, Fountain Valley, Lake
Forest). Trends spillover, excluded from all conclusions.

---

## 1. The emergency thesis is confirmed, and it is the hottest cluster

| Query | Interest | Change |
|---|---|---|
| `garage door emergency repair` | 68 | **+600%** |
| `emergency garage door repair` | 68 | **+550%** |
| `garage door repair emergency` | 67 | **+550%** |
| `same day garage door repair` | 8 | **+700%** |
| `emergency garage door repair near me` | 20 | **Breakout** |
| `24 hour garage door repair` | 3 | **Breakout** |

Three phrasings of the same intent all sit near the top of the board, each
up 5 to 6x year over year. Brief v1 called this an emergency vertical from
market logic. The data says it is not just true, it is **accelerating**.

**Build implication**: a dedicated emergency service page, emergency
framing in the header and hero, and emergency sections on every city page.
All three phrasings get used naturally across titles and H2s.

## 2. The single most validating query in the whole dataset

| Query | Change |
|---|---|
| `overpriced garage door repair invoice` | **+1,250%** |

New Yorkers are searching, in these words, for what to do after being
overcharged for a garage door repair. This is the differentiator from the
voice-of-customer pass appearing as a live, exploding search behavior.

Supporting price-intent queries:

| Query | Interest | Change |
|---|---|---|
| `garage door repair cost` | 26 | +50% |
| `garage door repair prices` | 3 | **Breakout** |
| `garage door cost` | 13 | +20% |
| `new garage door cost` | 2 | +60% |
| `how much is a new garage door` | 1 | +60% |
| `garage door prices` | 3 | +70% |

**Build implication**: the published-price play is not a hunch. It gets the
homepage price table, a cost cluster, **and an article aimed straight at
`overpriced garage door repair invoice`**: what a fair invoice looks like,
what to do if you were overcharged, and the real ranges. That article is a
trust magnet and it currently has no serious competitor.

## 3. Two markets in the data, exactly as the product pass predicted

**Repair market** (`garage door repair near me` = **100**, the top query in
its export, +50%).

**Product market** (`garage door opener` = **100**, the top query in its
export). This half of the board was completely missing from brief v1:

| Query | Interest | Change |
|---|---|---|
| `garage door opener` | 100 | flat |
| `garage door near me` | 27 | +110% |
| `garage door replacement` | 22 | +40% |
| `new garage door` | 21 | **+120%** |
| `garage door installation` | 21 | +70% |
| `garage door company` | 16 | **+190%** |
| `garage door installation near me` | 5 | **+400%** |
| `garage door company near me` | 5 | **+750%** |

The product and installation side is as large as repair and rising faster.
The product cluster added in `PRODUCT-TAXONOMY.md` is not optional.

## 4. Smart and WiFi openers are the fastest-rising product segment

| Query | Interest | Change |
|---|---|---|
| `smart garage door opener` | 7 | +170% |
| `smart garage door` | 11 | +140% |
| `wireless garage door` | 6 | +160% |
| `garage door app` | 6 | +90% |
| `wifi garage door opener` | 2 | **Breakout** |
| `myq garage door` | 6 | +20% |
| `ring garage door opener` | 1 | +300% |
| `remote garage door opener app` | 0 | +130% |
| `smart garage door controller` | 1 | +60% |
| `genie signature series 3/4 hp ultra-quiet belt drive smart opener` | 0 | **+2,400%** |

**This is a segment, not a feature.** The product pass listed WiFi as a
sub-bullet; the data says it deserves its own page and article cluster:
smart opener installation, retrofitting a smart controller to an existing
opener, myQ vs Ring vs app-native, and "quiet plus smart" (that Genie
long-tail combines belt drive, 3/4 HP, ultra-quiet **and** smart in one
query, which is exactly the bedroom-over-garage buyer).

## 5. DIY and how-to demand is enormous, which validates the Precision model

| Query | Interest | Change |
|---|---|---|
| `how to repair garage door` | 34 | +130% |
| `how to program garage door opener` | 12 | +130% |
| `how to program a garage door opener` | 10 | **+650%** |
| `fix garage door` | 12 | +250% |
| `how to fix garage door` | 11 | **+450%** |
| `how to fix garage door sensor` | 9 | **Breakout** |
| `how to secure garage door` | 10 | **Breakout** |
| `how to program genie garage door opener` | 2 | **Breakout** |

Precision's strategy of one generous how-to page per symptom is aimed at
real, large, growing demand. `how to program a garage door opener` alone
justifies a page, and brand variants ("genie", "liftmaster", "chamberlain")
each justify their own.

**Note the safety angle**: `how to secure garage door` is a Breakout and is
not about repair at all. It is a homeowner worried about break-ins through
the garage. That is an article, and it sells deadbolts, side locks, smart
monitoring, and a service visit.

## 6. Component and symptom queries, ranked

| Query | Interest | Change |
|---|---|---|
| `garage door sensor` | 14 | +140% |
| `garage door spring` | 18 | +50% |
| `garage door spring replacement` | 5 | +140% |
| `garage door spring repair` | 22 | flat to +130% |
| `garage door cable replacement` | 12 | +60% to +850% |
| `broken garage door spring` | 3 | **Breakout** |
| `broken garage door` | 5 | +350% |
| `garage door off track repair` | 4 | +160% |
| `garage door safety sensors` | 2 | **Breakout** |
| `garage door track repair` | 6 | +30% |
| `garage door opener repair` | 46 | +20% |
| `garage door keypad` | 7 | flat |
| `garage door remote` / `universal garage door remote` | 17 / 2 | flat / +90% |
| `garage door seal` / `threshold seal` | 7 / 1 | flat / +100% |
| `garage door opener bracket` | 2 | **Breakout** |

Sensors and cables are rising fastest among components. Springs are the
largest steady base.

## 7. Insulation confirmed as a New York play

| Query | Interest | Change |
|---|---|---|
| `garage door insulation` | 8 to 13 | +110%, also **Breakout** |
| `garage door insulation panels` | 0 | +150% |
| `garage door insulation kit` | 1 | +60% |

The product pass argued insulation matters in a real winter in a way it
never did in Florida. The data agrees. Insulation gets a service page (we
install insulated doors and insulate existing ones), an R-value article, and
a place in the buyer's guide.

## 8. Aesthetic and upgrade demand

| Query | Interest | Change |
|---|---|---|
| `black garage door` | 11 | **+170%** |
| `garage door with entry door` | 1 | +60% |
| `garage door screen` / `garage screen door` | 5 / 5 | +40% |
| `christmas garage door decor` | 0 | +120% |

`black garage door` at +170% is a design trend with real search behind it,
and it is a natural product-page angle plus a gallery hook.

## 9. Brands, with real volume

| Brand query | Interest |
|---|---|
| `chamberlain garage door` | 14 |
| `chamberlain garage door opener` | 11 |
| `liftmaster garage door opener` | 10 |
| `genie garage door opener` | 9 |
| `craftsman garage door opener` | 6 to 7 |
| `clopay garage door` | 4 |
| `precision garage door` | 4 to 6 |

Note that `precision garage door` is itself a searched brand: the franchise
competitor has built brand demand in New York. That is what a mature player
looks like, and it is a long-term benchmark.

## 10. Geography: the data adds upstate New York

Brief v1 focused on NYC outer boroughs, Long Island and Westchester. The
Trends data shows real, rising demand upstate:

| Query | Interest | Change |
|---|---|---|
| `garage door repair syracuse` | 10 | **+140%** |
| `garage door repair rochester ny` | 7 | flat |
| `garage door repair buffalo ny` | 6 | +20% |
| `garage door repair brooklyn` | 8 | +40% |
| `long island garage door repair` | 6 | **+100%** |
| `garage door repair long island` | 6 | +9% |
| `garage door repair queens` | 4 | +7% |
| `garage door repair staten island` | 2 | +30% |

**Syracuse outranks Brooklyn and Long Island in this data, and is rising
fastest.** Upstate metros have far more single-family homes with garages
per capita than NYC, and far weaker local competition.

This does not change the launch plan, which stays downstate where the
fulfillment partner will be. It does mean **upstate is the natural phase-2
expansion**, or even a second site, and city pages for Syracuse, Rochester,
Buffalo and Albany are cheap to add to the same build.

## 11. Commercial segment is real

`commercial garage door repair` at 12 with a stable trend, and
`commercial garage door maintenance` as a Breakout. Confirms the All Door &
Garage read: roll-up gates, loading docks and maintenance contracts are a
live, higher-value segment. One commercial page at launch, expandable.

---

## What changes in the plan

1. **Emergency page and framing move to the top priority.** Three phrasings
   at 5 to 7x growth.
2. **New article, high priority**: what to do about an overpriced garage
   door repair invoice. +1,250% and nobody credible is answering it.
3. **Smart/WiFi opener cluster** promoted from a bullet to its own page plus
   3 to 4 articles.
4. **Insulation** gets a service page, not just an article.
5. **Programming and remote-syncing how-tos** per brand: `how to program a
   garage door opener` +650% with brand variants breaking out.
6. **Home-security-through-the-garage article**, from the `how to secure
   garage door` Breakout.
7. **Sensor cluster** expanded: sensors are +140% with two Breakouts.
   Follow Precision's split: sensor guide, won't close, closes then
   reverses, how to fix sensors.
8. **Upstate city pages** (Syracuse, Rochester, Buffalo, Albany) added as a
   phase-2 block. Syracuse first, it is the strongest signal in the file.
9. **`black garage door`** angle on the product pages and in the gallery.
10. Commercial page confirmed for launch.
