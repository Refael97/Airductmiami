# A catalogue on a lead generation site: what exists, what works, what to build

Research pass, 8 September 2026, for `sites/fl-garage`. The question put by
the owner: what do Florida garage door sites actually do, and should we build
something shaped like an online shop where the button is not "buy" but "have
a technician bring me this part" or "call me back about this item".

Short answer: yes, build it, but not as a shop. The shop shape is the wrong
one and the reason is in section 3. The right shape is a **parts diagnosis
catalogue** for the repair buyer and a **model catalogue** for the replace
buyer, and they are two different things with two different buttons.

Everything below is what was found, with who was checked. Where something was
not verifiable from here it says so.

## 1. What Florida garage door companies actually have

Ten Florida service companies were checked for how they present products.

| Company | Product presentation | Price shown | Button |
|---|---|---|---|
| [Precision South Florida](https://flgaragedoor.com/) | Door gallery, no model pages | "starting at $1795" install | Request quote |
| [Precision Orlando](https://garagedoorsfl.com/) | Corporate template, gallery | No | Schedule / call |
| [All Garage Door Services](https://allgaragedoorsinc.com/) | Service list only | No | Request a quote |
| [Juliao Garage Doors](https://juliaogaragedoors.com/) (Miami) | Service list only | No | Free quote |
| [Florida Garage Door Company](https://www.floridagaragedoorcompany.com/) | Service list only | No | Free no-obligation quote |
| [Paradise Garage Doors](https://www.paradisegaragedoors.biz/) (Melbourne) | Gallery | No | Request appointment |
| [Florida Garage Doors](https://www.floridagaragedoors.net/) (Jacksonville) | Gallery | No | Contact |
| [A Florida Door Sales](https://www.afloridadoorsales.net/) (Okeechobee) | Gallery | No | Contact |
| [Above All Garage Doors](https://www.aboveallgaragedoors.com/) (Miami) | **Has a parts page** | Not published | Visit / call |
| [AAA Garage Doors](https://aaagds.com/garage-door-parts-in-south-florida/) | **Has a parts page** | Not published | Call |

**The finding.** Not one Florida garage door service company runs a catalogue
where an individual part or door model has its own page with its own call to
action. Two have a flat parts page, both of them counter-sales operations
with a physical address, and neither gives a part its own URL, its own
symptoms, or its own price.

This matches what section 2 of `MARKET.md` already found about the price
table: the lane is open, and it is open because the trade does not think this
way, not because it was tried and failed.

## 2. Who owns parts search in Florida today

This is the part that decides the design, so it is worth being exact about.

**National DIY e-commerce owns the transactional query.**
[DIY Garage Door Parts](https://diygaragedoorparts.com/) is the one to look
at closely: it runs **city-targeted landing pages for Florida**, including
"Overhead Door Garage Door Parts Ships To Miami FL" and "Garage Door Torsion
Springs For Sale At Wholesale Tampa Florida". A national parts retailer is
already doing local SEO in our cities.
[DDM](https://ddmgaragedoors.com/parts/),
[My Garage Door Parts](https://mygaragedoorparts.com/),
[Garage Door Parts Depot](https://www.garagedoorpartsdepot.com/products/) and
[Action Direct](https://shopactiondirect.com/hardware/) cover the rest.

**Big box owns the browse query.** [Lowe's](https://www.lowes.com/pl/garage-doors-openers/garage-door-parts-hardware/roller/4294763914-4294711605),
[Menards](https://www.menards.com/main/hardware/garage-door-parts-accessories/c-7577.htm)
and Home Depot, plus Amazon.

**Local counter sales owns the walk-in.** Above All Garage Doors has a
showroom at a real Miami address. AAA covers South Florida.

**What this means.** "Buy garage door torsion spring" is not a winnable query
and it is not a query we want. The person typing it intends to do the job
themselves, and this site already publishes an article arguing that nobody
should replace a torsion spring themselves. Competing for that click means
paying to attract the one visitor who will never become a customer, and
contradicting our own safety content to do it.

## 3. Why the shop shape is wrong, in three specific ways

**Product schema needs a price.** Google's Product structured data treats
price as required. A catalogue of items with no price gets no Product rich
result, and a
[Search Central thread on exactly this](https://support.google.com/webmasters/thread/317847229/structured-data-for-quote-request-tool-handling-missing-price?hl=en)
is the community asking the same question. Publishing invented prices to
satisfy the schema would break the network's own rule against unverifiable
claims, and publishing part prices we cannot honour would break the rule that
the price on the site, in the popup and on the phone must agree.

**A shop implies stock.** A page laid out like a product listing tells the
reader we hold that item. We are a lead generator with fulfilment partners.
The moment someone clicks expecting an item and gets a callback instead, the
site has spent its credibility on a mismatch. This is the same failure mode
as the $99 special the site already argues against, pointed at ourselves.

**Volume without substance is scaled content.** Two hundred SKU pages with a
name, a stock photo and a button is the pattern Google penalises and the
pattern `docs/TRUST-AND-CLAIMS.md` already forbids elsewhere in the network.
The catalogue has to earn each page.

## 4. The pattern that works, found outside Florida

Three companies do a version of what the owner described, none in Florida.

- [Forest Garage Doors](https://www.forestdoor.com/garage-door-parts/),
  Chicago, is the closest. Its parts page invites you to bring the old part in
  so they can match it to spec, **and says plainly that they install
  everything they sell and can arrange a technician if you would rather not
  do it yourself.** That second sentence is the whole idea the owner is
  describing, already proven in another market.
- [Besser Bros](https://www.besserbros.com/garage-door-parts/), Orange County.
- [American Door Works](https://americandoorworks.com/garage-door-parts/),
  parts for homeowners, property managers and contractors.

And on the door side, the industry standard is a manufacturer visualizer
rather than a catalogue: Clopay's
[EZDoor / Door Imagination System](https://www.clopaydoor.com/ezdoor) is
embedded by dealers including [A1 Garage](https://a1garage.com/imagination-system/),
[Oregon City Garage Door](https://www.oregoncitygaragedoor.com/residential-products/door-imagination-system/)
and many others. [Amarr](https://www.amarr.com/us/en) and
[C.H.I.](https://www.chiohd.com/residential-garage-doors) run equivalents.
A dealer who is not a Clopay dealer cannot embed EZDoor, which is worth
knowing before promising a visualizer.

## 5. What to build

Two catalogues, because there are two buyers and the site already knows it
(`products.ts` opens by saying so). They need different pages and different
buttons.

### 5a. The parts catalogue, for the repair buyer

**Organised by symptom, not by SKU.** The valuable visitor is not "buy a
spring", it is **"what is the part I need"**: a homeowner whose door stopped
working, who does not know the part name, who is trying to find out what
broke and what it costs. That person is a lead. The DIY buyer is not.

One page per part, roughly a dozen: torsion spring, extension spring, cable,
roller, hinge, bottom seal, weather seal, track, opener drive gear, safety
sensor, remote, keypad, bracket. Each page carries:

- what the part does, in a sentence a homeowner can check against their door
- **how you know yours failed**, the symptoms, which is the searchable part
- what it costs **installed**, taken from the existing price table in
  `services.ts`, never a part-only price we cannot honour
- whether it is safe to do yourself, honestly, which for a torsion spring is
  a firm no and for a bottom seal is a yes
- the button: **have a technician bring this part**, and a second, quieter
  **ask a question about this part**

The button is the honest version of the owner's idea. It does not say buy, it
does not imply stock, and it says exactly what happens next.

**Schema:** these are not Product pages, they are `HowTo`-adjacent service
pages. Emit `Service` and `FAQPage`, which we already do correctly elsewhere,
and no `Product` and no `Offer`. That sidesteps the price problem entirely
and is the truthful description of what the page is.

### 5b. The model catalogue, for the replace buyer

This is where the money is: $950 to $6,500 against $95 to $800. The site
already has `/buyers-guide/` for materials and `/brands/` for manufacturers
but nothing at model level, which is the layer a person actually chooses at.

Doors and openers by model, each with the wind and impact rating, whether it
carries a Miami-Dade NOA or a Florida Product Approval, insulation value,
and the installed price band. The rating and approval columns are the
differentiator: `MARKET.md` found that nobody in Florida explains the code
plainly, and a model table with an HVHZ column answers the question the
storm-season buyer is actually asking.

Button: **request this door**.

### 5c. What not to build

- No cart, no checkout, no stock counts, no "add to quote" basket. A basket
  is a shop.
- No part-only prices until the owner confirms a number he will honour.
- No visualizer promise. EZDoor belongs to Clopay dealers and we are not one.
- No model page for a door we cannot actually source through a partner. The
  catalogue is only worth building if every entry is real.

## 6. Open questions for the owner

These gate 5b, not 5a. The parts catalogue can be built on what we already
publish; the model catalogue needs answers.

1. Which manufacturers can the fulfilment partners actually supply? The site
   already names Clopay, Amarr, Wayne Dalton, LiftMaster, Chamberlain and
   Genie in `/brands/`. Naming a model we cannot get is worse than naming
   none.
2. Is there a part-only price we would honour if someone asks for a part
   without installation, or is the answer always installed only?
3. For a callback on a specific item, does the lead go to the same phone line
   as everything else, or does it need its own routing so the technician
   arrives with the right part on the truck?
