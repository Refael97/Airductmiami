# Product taxonomy: doors, openers, brands

Gap found after brief v1. The brief mapped **repair services** but not the
**product catalog**, and competitors clearly build page clusters on it: door
material submenus, opener type pages, and a "Buyer's Guide" section. That is
a whole content bucket, and it targets a different, earlier-stage buyer.

Two buyers, two clusters:

| Buyer | State of mind | Query | Page type |
|---|---|---|---|
| **Repair** | Something broke, car may be trapped | "garage door spring replacement Bayside" | Service + city pages |
| **Replace** | Researching a new door, weeks of consideration | "steel vs fiberglass garage door", "best garage door opener" | Product + buyer's guide pages |

The repair buyer converts today at $170 to $700. The replace buyer converts
in weeks at $1,000 to $4,600. **We were only building for the first one.**

---

## 1. Door materials

| Material | Installed cost | Strengths | Weaknesses | NY fit |
|---|---|---|---|---|
| **Steel** | $800 to $2,000 | Most popular, strong, low maintenance, best value, insulates well in layered builds | Dents, can rust at scratches in salt air | **Default recommendation** |
| **Aluminum** | $1,500 to $2,500 | Light, rust resistant, easy on the opener | Dents easily, weaker | Coastal: Long Beach, Rockaways, South Shore |
| **Wood** | $1,200 to $4,000+ | Best looking, fully customizable | Needs refinishing, heavy, most expensive | Historic and high-end: Douglaston, Todt Hill, Garden City |
| **Fiberglass** | $1,500 to $2,500 | Resists rot, rust, termites, warping | Low R-value (2.9 to 3.8/inch), can crack in deep cold | Limited: cold is a real NY factor |
| **Vinyl** | $1,000 to $2,500 | Dent, rust and rot resistant, low maintenance | Fewer style options | Families, heavy-use doors |

**Insulated doors**: $600 to $3,000+ premium depending on layers and foam.
In New York this is not a luxury: an attached garage under a bedroom, or a
converted garage, changes the heating bill. **R-value is a real selling point
here in a way it is not in Florida**, and it is a natural article.

**Styles** (cut across materials): raised panel (most common), carriage
house, flush/modern, full-view glass and aluminum.

## 2. Opener drive types

| Drive | Cost position | Noise | Best for | Watch out |
|---|---|---|---|---|
| **Chain** | Cheapest | Loudest | Detached garages, budget, heavy doors | Needs lubrication and tightening |
| **Belt** | Mid to upper | Quietest | **Attached garages, bedroom above** | Costs more upfront |
| **Screw** | Middle | Medium | Heavy or oversized doors, fastest at 10 to 12 in/sec | Sensitive to temperature swings, hardest to install |
| **Direct drive** | Upper | Very quiet | Motor in the trolley, few moving parts | Fewer models |
| **Jackshaft / wall mount** | Highest | Quiet | High ceilings, low headroom, car lifts, ceiling storage | Needs torsion spring setup |

**The New York angles nobody is writing**:
- Attached garages with living space above are common across Queens,
  Brooklyn and Staten Island row and semi-detached housing. **Belt drive is
  the correct answer and it is a conversation, not a spec sheet.**
- Screw drives being temperature-sensitive matters in a real winter.
- Jackshaft openers free up ceiling space in the small garages typical of
  the outer boroughs.

**Features that drive queries**: WiFi and app control (myQ), battery backup
(**required by law in some states and a genuine selling point after
outages**), smartphone integration, keypads, security rolling codes,
photo-eye safety sensors, HP ratings (1/2, 3/4, 1 1/4).

## 3. Brands

Competitors advertise brand competence as trust ("We only sell top of the
line brands such as LiftMaster and Genie").

- **Openers**: LiftMaster (pro-installer standard), Chamberlain (retail
  sibling), Genie, Craftsman, Sommer, Ryobi
- **Doors**: Clopay (largest US manufacturer), Amarr, Wayne Dalton,
  Overhead Door, C.H.I., Raynor, Haas

**Query implication**: "LiftMaster repair near me", "Genie opener not
working", "Clopay panel replacement" are real service queries with buying
intent, and each maps to a brand-service page or a section.

## 4. What this adds to the architecture

The brief's plan gets a new bucket and a bigger article count:

| Bucket | Was | Now | Notes |
|---|---|---|---|
| Services | 9 | 9 | Unchanged, repair-focused |
| **Products: door materials** | 0 | **5** | Steel, aluminum, wood, fiberglass, vinyl |
| **Products: opener types** | 0 | **5** | Chain, belt, screw, direct, jackshaft/wall mount |
| **Buyer's guide hub** | 0 | **1** | Entry point to both product clusters |
| **Brand service pages** | 0 | **3 to 5** | LiftMaster, Genie, Chamberlain, Clopay, Amarr |
| Articles | 45 | 55 | +10 comparison and selection guides |

New article angles from this pass:

1. Steel vs fiberglass vs wood in the New York climate
2. Do you need an insulated garage door in New York? (R-value, attached
   garages, real bill impact)
3. Belt vs chain drive when there is a bedroom over the garage
4. Best garage door opener for a small New York garage (jackshaft case)
5. Battery backup openers and why they matter after an outage
6. Carriage house vs raised panel for row houses and semi-detached homes
7. Repair or replace? The honest math (a trust piece, ties to the scam
   article: "this door is written off" is the classic bait)
8. What LiftMaster / Genie / Chamberlain actually differ on
9. Garage door R-value explained
10. Coastal homes: which door material survives salt air (Long Beach,
    Rockaways, South Shore)

## 5. Effect on positioning

The published-price differentiator extends naturally into products: nobody
publishes installed door prices by material either. A page that says **steel
$800 to $2,000 installed, wood $1,200 to $4,000+, here is what changes the
number** is as differentiating as the repair price table, and it targets the
$1,000+ job.

It also feeds the AI agent: when a caller says "I think I need a new door",
the agent can qualify by material, size, insulation and opener, and quote a
real range, instead of dumping the call on a callback.

## 6. Manufacturer-site benchmark (overheaddoor.com)

Checked at request. Direct crawl is blocked by the sandbox network, so this
is from SERP and page-level data.

**What it is**: a manufacturer brand site, not a local competitor. Overhead
Door sells through a "Red Ribbon" authorized distributor network, so the
site's job is to build brand preference and then hand the visitor to a
local dealer. Same model as Clopay.

**Structure worth copying**:
- Clean split at the top level: **Residential / Commercial**, then product
  category, then individual product
- A real **product catalog** ("Shop Residential Garage Doors") with filters
  by material, style, insulation and window options
- A **distributor locator** as a primary navigation item, which is their
  version of our service-area pages
- Education sits alongside the catalog rather than in a separate blog silo

**What not to copy**: no prices anywhere, and the CTA is "find a dealer",
not "book a repair". They are protecting a dealer network; we are the one
answering the phone. Our version of their catalog page ends in a quote
form and a published price range.

**The takeaway**: manufacturers own the aspirational product content
("what door should I buy"), and local companies own nothing except "call
us". A local site that publishes both the catalog knowledge **and** the
installed price is sitting in an empty lane between them.
