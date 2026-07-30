# Research brief: garage door services, New York (`ny-garage`)

Vertical: garage-door-repair · Area: NYC outer boroughs + Long Island ·
Date: 2026-07-30 · Status: **v1, action plan drafted, two gaps open**

> Method note: passes 1, 2, 3, 5 (partial), 6, 7, 8, 9 completed from search
> and public pricing data. **Pass 4 full crawls are blocked**: the sandbox
> network refuses direct fetches of competitor sites (403 through the proxy,
> and curl is blocked entirely). Structural findings below come from search
> result summaries and are marked as such. See "Open gaps".

---

## 1. Market

- **What it is**: repair and replacement of residential garage doors,
  springs, cables, rollers, tracks, panels, and openers.
- **Buying trigger**: overwhelmingly **breakage, not planning**. A snapped
  torsion spring traps the car inside. This is an emergency vertical, unlike
  air duct cleaning which is maintenance-driven.
- **What that changes**: response speed beats content depth. Same-day and
  24/7 availability is the headline, not a footnote. Phone and instant form
  matter more than long educational reading.
- **Typical job value**: $170 to $700 for repairs, $1,000 to $4,600 for a
  new door. Materially higher per job than air duct.
- **Seasonality**: winter spike (cold weather breaks fatigued springs),
  secondary spike after storms. Steady baseline year round.
- **Safety and liability**: torsion springs are under extreme tension and DIY
  attempts cause serious injuries. Every credible competitor says so, and it
  is both true and a conversion argument.

## 2. Competitors, general

| Company | URL | Angle |
|---|---|---|
| Precision Door | precisiondoorlongisland.com | National franchise, brand trust, heavy ad spend |
| A1 Garage Door | a1garage.com | National, strong content and price guides |
| Clopay | clopaydoor.com | Manufacturer, owns buying-guide content |
| Angi / HomeAdvisor / Yelp | — | **Own most cost-query SERPs**, not service companies |

## 3. Competitors, local

Two clearly separate groups, and the split is the opportunity.

**Group A, established family operators** (real businesses, weak web):

| Company | URL | Signal |
|---|---|---|
| Fenton Garage Doors | fentongaragedoors.com | 70+ years, Brooklyn/Queens/SI |
| L&L Overhead Doors | lldoorsinc.com | NYC + Nassau + Suffolk, has borough pages |
| A Better Door | abetterdoorny.com | Since 1988, Nassau/Suffolk |
| All Island Garage Door | allislandgaragedoor.com | Since 1998, family, LI |
| G&M Garage Doors | gandmgaragedoors.com | Since 1987, Suffolk/Nassau |
| Joe Manna and Sons | joemannaandsonsgaragedoor.com | Staten Island, legacy |
| Eagle Garage Doors | eaglegaragedoorllc.com | Staten Island/NJ |

**Group B, thin SEO/lead-gen sites** (weak businesses, aggressive web):

`garagedoorrepair-service.com` · `queensnygaragedoorrepair.com` ·
`samedaygaragedoorgaterepair.com` · `tristategarageservices.com`
("ONLY $29 Service Charge") · `brooklyn-garage-doors-gates.com` ·
`mrgaragedoorrepairman.com` · `smartestgaragedoors.com` ·
`hogaragedoorrepair.com` · `garagedoorrepairsstatenisland.com`

Group B is large, which means the SERP is beatable: these sites are thin,
templated, phone-number-first, and carry the bait pricing pattern customers
already distrust.

## 4. Competitors, top organic (partial, crawls blocked)

What is visible from SERP-level data:

- **`longislandgaragedoorservice.com` runs the model we would run**:
  programmatic location pages at `/garage-doors-{city}-ny`, down to
  neighborhood level (Jackson Heights), plus `/locations` hub and county
  pages. This is the structural benchmark to match and exceed.
- Title pattern across the top: `{City} Garage Door Repair | {hook} |
  {phone or brand}`. Phone numbers appear **inside title tags** frequently.
- Nearly every top result leads with: same-day, 24/7 emergency, licensed and
  insured, free estimate.
- Cost queries are dominated by **Angi, HomeGuide, This Old House,
  Homewyse, Fixurge**, not by service companies. A service company that
  publishes honest, local, specific pricing has an open lane.

### What they all do (table stakes)

Same-day/24-7 messaging · phone-first CTA · licensed and insured ·
free estimate · service list covering springs, cables, openers, off-track,
panels · borough or county coverage lists.

### What almost none of them do (our opening)

1. **Publish real price ranges.** Most say "call for a quote". The
   directories rank for cost queries precisely because contractors refuse to
   answer them.
2. **Serve a second language properly.** No evidence of full Spanish or
   Russian sites among the local players.
3. **Neighborhood-level pages with genuinely local copy.** Where they exist
   they are thin and templated.
4. **Structured, agent-readable data.** None.
5. **Educational depth**: spring lifespan, what breaks and why, how to tell
   an honest quote from a bait quote.
6. **Real before/after or job photography** at any scale.

## 5. SEO landscape

- Leaders are old domains with local authority; the thin sites are
  disposable and rank on exact-match domains and volume of location pages.
- **Directory dominance is high** on informational and cost queries (Angi,
  Yelp, BBB, Expertise.com), which is the same pattern that made the air
  duct market enterable.
- Local pack is competitive and will remain out of reach until a real
  verifiable address exists. **This vertical is more phone-driven than air
  duct, so the missing Google Business Profile costs more here.** Plan
  organic-first, and prioritize a real address sooner.
- Entry verdict: **medium difficulty, high value**. Harder SERP than air
  duct, but 2 to 4x the job value and an emergency trigger that converts
  faster.

## 6. Keywords (clusters, to be volume-validated)

| Cluster | Examples | Target page |
|---|---|---|
| Money, local | `garage door repair {borough/city}`, `garage door repair near me` | City pages |
| Money, service | `garage door spring replacement`, `garage door opener installation`, `garage door cable repair`, `off track garage door repair` | Service pages |
| Emergency | `emergency garage door repair`, `same day garage door repair`, `garage door won't close` | Service + city, prominent |
| Cost | `garage door spring replacement cost`, `how much to fix garage door`, `garage door opener installation cost NY` | Cost guides |
| Symptom | `garage door making noise`, `garage door won't open`, `garage door off track`, `loud bang garage door` | Articles |
| Lifespan/maintenance | `how long do garage door springs last`, `garage door maintenance` | Articles |
| Trust | `garage door repair scams`, `how to choose garage door company` | Articles (proven pattern from site one) |

## 7. Languages

| Language | Base | Competitors publishing | Verdict |
|---|---|---|---|
| **Spanish** | Most-spoken non-English language in Queens; very large in Bronx and Brooklyn | None found among local players | **Yes, full mirror** |
| **Russian** | Concentrated in Sheepshead Bay, Brighton Beach, Bensonhurst, which **also have private garages** | None found | **Strong candidate, phase 2** |
| Chinese / Korean | Flushing, Bayside; Bayside is a garage-heavy area | None found | Evaluate in phase 3 |

The Spanish decision repeats the air duct pattern exactly: large speaker
base, zero competitor coverage. Russian is the more unusual play and the
geographic overlap with garage-owning neighborhoods is unusually clean.

## 8. Geography and economics

**Critical constraint: Manhattan is nearly worthless here.** Residential
private garages barely exist there. The money is where houses have
driveways.

Priority tiers:

**Tier 1, Long Island (highest garage density, highest job values)**
Nassau: Hempstead, Levittown, Hicksville, Freeport, Valley Stream, Garden
City, Massapequa, Mineola, Great Neck, Long Beach
Suffolk: Huntington, Babylon, Islip, Smithtown, Brentwood, Commack,
Patchogue, Riverhead

**Tier 2, Staten Island** (highest car ownership in NYC): Great Kills,
Tottenville, New Dorp, Todt Hill, Annadale, Eltingville, West Brighton

**Tier 3, Queens** (garage-heavy pockets): Bayside, Douglaston, Whitestone,
Forest Hills, Jamaica Estates, Howard Beach, Middle Village, Bellerose,
Fresh Meadows, Rego Park

**Tier 4, Brooklyn** (specific neighborhoods only): Bay Ridge, Dyker
Heights, Marine Park, Mill Basin, Bergen Beach, Canarsie, Sheepshead Bay,
Midwood, Gerritsen Beach

**Tier 5, Bronx + Westchester**: Riverdale, Throgs Neck, Country Club,
Pelham Bay; Yonkers, New Rochelle, Mount Vernon, Scarsdale

Region pages: Long Island (Nassau) · Long Island (Suffolk) · Staten Island ·
Queens · Brooklyn · Westchester.

## 9a. Prices (real market data, becomes our published ranges)

| Job | Range | Notes |
|---|---|---|
| Spring replacement, single | $170 to $400 | NYC average ~$282 |
| Spring replacement, both | +$150 to $300 over single | Standard upsell, and legitimate |
| Cable repair | $100 to $350 | Average ~$225 |
| Cable + drum | $250 to $425 | When drum damage is found |
| Tension adjustment only | $95 to $150 | Cable slipped, not damaged |
| Off-track repair | $150 to $700 | Severe cases exceed $1,000 |
| Opener installation | $281 to $630 | NYC average ~$453 |
| Emergency / same-day premium | $200 to $350 | 24/7 call-out |
| New door installation | $1,056 to $4,620 | Wide, depends on material and size |
| Labor | $50 to $150 per hour | NYC rates |

## 9b. Media expectations

- Competitors show: finished door photos, truck and technician shots, brand
  logos (LiftMaster, Clopay, Chamberlain), minimal real work photography.
- Before/after is **rare** in this vertical, which makes it a differentiator
  once real jobs produce photos (broken spring, off-track door, bent panel
  are all visually obvious).
- Launch plan: generated hero and section imagery, inline SVG service icons,
  OG image. Before/after component built and hidden until real photos exist.
  Per `MEDIA-STANDARD.md`, no generated proof-of-work.

## 9c. Voice of customer

> Full deep dive in `VOICE-OF-CUSTOMER.md`: verbatim review language,
> the documented scam pattern with the numbers that expose it, the 15
> questions customers actually ask, and headline candidates.

**Headline finding**: every competitor already claims "upfront pricing, no
hidden fees", and then says "call for a quote". The claim is table stakes;
publishing actual numbers is the open lane, and it is why the directories
own every cost query.

**Second finding**: every established local competitor leads with age
(since 1983, since 1988, 70+ years, family owned). A new brand cannot
compete there and will not fake it, so the trust block is built from
published prices, written estimates before work, licensed and insured, real
arrival windows, and a published warranty.

**What gets sold**: spring replacement (the volume driver), opener
install/repair, cable and roller work, off-track correction, panel
replacement, full door replacement (the value driver), tune-ups.

**Questions before buying**: How fast can you get here? How much, roughly?
Can I use the door at all right now? Do I need one spring or two? Is this
worth repairing or should I replace the door? Are you licensed and insured?

**Complaints** (these become our promises):
1. Bait pricing: a low advertised service fee, then a much larger bill
2. Pressure to replace parts that were not broken
3. Exploiting emergencies for inflated prices
4. Hidden fees not mentioned on the phone
5. No written estimate before work started

**Compliments**: arrived fast, quoted before touching anything, explained
what broke, price matched the quote, cleaned up.

**Customer vocabulary**: "spring snapped", "loud bang", "door won't go up",
"off the track", "stuck halfway", "car is trapped", "cable came off".

---

# Action plan

## Differentiation (straight from the complaints)

**Upfront, published, honest pricing in an industry built on bait pricing.**
Every price range on the site, a written estimate before any work, no
service-call bait fee, and an article that teaches customers to spot the
$29-service-charge pattern. This is the exact play that worked on site one,
in a market where the scam pattern is even more established.

Positioning line to develop: fast when it breaks, honest when it is quoted.

## Architecture

| Bucket | Count | Notes |
|---|---|---|
| Core | 8 | Home, About, Contact, Services hub, Areas hub, Blog hub, FAQ, Privacy |
| Services | 9 | Spring replacement, cable repair, opener install, opener repair, off-track, panel/section, roller/track, new door install, maintenance tune-up |
| Cities | 40 | Per tiers above, garage-density weighted, not population weighted |
| Regions | 6 | Nassau, Suffolk, Staten Island, Queens, Brooklyn, Westchester |
| Articles | 45 | Cost guides, symptom guides, lifespan/maintenance, safety, trust/scams |
| Spanish | full mirror | Every page above |

Emergency framing gets a dedicated slot in the header, hero, and every city
page, because the trigger is breakage.

## Content clusters

1. **Cost cluster** (highest opportunity, directories currently own it): one
   guide per job type with real NY ranges
2. **Symptom cluster**: won't open, won't close, loud bang, stuck halfway,
   off track, noisy, remote not working
3. **Lifespan and maintenance**: spring cycles, what shortens them, seasonal
   checks, when to repair vs replace the whole door
4. **Safety**: why never to DIY a torsion spring, what to do when the car is
   trapped, child and pet safety sensors
5. **Trust**: how to spot bait pricing, questions to ask before hiring, what
   a fair quote includes

## Site character (feeds copy and the AI agent persona)

Calm, fast, and straight. The customer is stressed and their car is stuck;
the brand does not sell, it solves. Prices stated plainly, no urgency
theater, no exclamation marks. The agent's job on the phone: confirm the
symptom, give the honest range, book the earliest window, and never quote a
final price sight unseen.

## Open gaps before build starts

1. **Full competitor crawls (pass 4)** are blocked by the sandbox network
   policy. To close: allowlist outbound HTTP for research in the environment
   settings, or paste 3 to 5 competitor homepages and a city page as text.
   Needed to finalize homepage section order and page-depth benchmarks.
2. **Keyword volumes** unverified. Semrush MCP access is not on the current
   plan. Clusters above are directionally right; exact volume and difficulty
   need a keyword export.
3. **Brand name and domain** not chosen.
4. **Fulfillment partner in New York** not identified. Per the launch
   checklist this blocks launch, not build.
