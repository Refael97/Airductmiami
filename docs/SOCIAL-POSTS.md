# Facebook posts, and what they are actually for

Written 10 September 2026, after the owner asked for posts so that "Google
will cite us in search results."

## The premise, checked

That specific mechanism does not work, and it is worth writing down why so
nobody spends a year on it.

**What was measured, not assumed.** Facebook's `robots.txt` was pulled and
the `User-agent: Googlebot` block read in full. Page permalinks are not
disallowed, so Facebook is not blocking Google outright. Both pages were
then fetched with a Googlebot user agent. Both return HTTP 200 with a real
`<title>` and `<meta name="description">`:

- `Garage door fixers Florida | Palm Beach Gardens FL`
- `Florida Breeze AirDuct services. 6 likes. Fresh air, cleaner homes...`

So the **Page** is indexable. What comes back is page-level metadata and a
login-walled shell, not a crawlable feed of individual posts. Google indexes
the profile, not the posts on it, and a post is not a document it can quote
from. Nothing published to these pages will appear as a cited passage in a
search result.

## What does do the thing that was wanted

**Google Business Profile posts.** They appear inside the business panel and
in Maps, attached to the business, with an image and a call to action. That
is the mechanism being described, on the platform where it exists. Neither
business has a profile yet, which has been the largest single gap since the
competitor teardown: roughly a third of local ranking signal, and the whole
of the Map Pack, sits behind it.

**The site itself.** Already the strongest asset here and already answering
in the format Google quotes: a direct answer near the top of a page, real
prices, `FAQPage` schema. That is where citations come from.

## What Facebook posts are genuinely worth

Real, but not what was assumed:

1. **A second listing for brand searches.** Someone who hears the name and
   searches it should find the site and the page, both controlled by us.
2. **Entity corroboration.** `sameAs` on the site claims the page; the link
   back from the page confirms it. Consistent name, phone and area across
   both is what makes Google treat them as one business.
3. **A place for real job photos.** The gallery gap the site cannot fill
   until fulfilment partners photograph their work; the page can hold them
   the day they exist.
4. **Somewhere alive to land on.** A page with six likes and no activity
   reads worse to a person who clicks it than no page at all.

## Fix first: the name does not match

Local ranking rewards an identical name, phone and area everywhere. Right
now:

| | Site says | Facebook says |
|---|---|---|
| Air duct | Florida Breeze Air Duct | Florida Breeze AirDuct services |
| Garage | Garage Door Fixers | Garage door fixers Florida |

Rename both pages to match the site exactly. It costs a minute and it is
worth more than the first ten posts.

## Rules these posts follow

The same ones the sites follow, because a claim is a claim wherever it is
published. See `docs/TRUST-AND-CLAIMS.md`.

- Prices match the site exactly. A post quoting a different number breaks
  the rule that the site, the popup, the phone and the agent all agree.
- No review, rating, star count or testimonial that did not come from a real
  customer.
- No years in business, no certification, no award.
- No before and after photo unless it is a real job.
- Every post links to the page that answers it in full. The post is the
  hook; the site is the answer.

---

# Garage Door Fixers

**Page:** facebook.com/GaragedoorfixersFlorida
**Site:** garage-door-fixers.com

### 1. The loud bang

That single loud bang from the garage, usually at night or on the first
opening of a cold morning, is almost always the torsion spring. The door is
now carrying its full weight with nothing helping it, which is why the
opener strains or does nothing at all.

Do not try to lift it and do not keep running the opener. Spring
replacement is $150 to $350 per spring installed, and you get that number
before anyone is dispatched.

garage-door-fixers.com/services/garage-door-spring-replacement/

### 2. The $29 service call

If a garage door company advertises a $29 or $39 service call, ask what the
$29 covers. Usually it covers arriving. The diagnosis, the part and the
labour are quoted once a technician is standing in your driveway, which is
the moment you have the least leverage.

Every price on our site is published before we book. Spring $150 to $350.
Cable $95 to $300. Opener repair $95 to $300. Tune up $85 to $160.

garage-door-fixers.com/prices/

### 3. Hurricane season, the honest version

A garage door is the largest opening in most Florida houses. When it fails
in high wind the pressure inside the house rises and the roof is what pays
for it.

Two different things get confused here. Wind rated means the door is built
to take a pressure. Impact rated means it is also built to take flying
debris, which is what the HVHZ counties require. Hurricane rated
installation runs $1,800 to $6,500 depending on size and rating.

garage-door-fixers.com/services/hurricane-rated-garage-door-installation/

### 4. Book a real arrival window

You can now pick an actual two hour arrival window on our site, without
calling anyone. Choose what the job is, put in your ZIP, pick a slot.

The windows shown are real ones in Florida time, generated live, so you
never see a slot that has already passed.

garage-door-fixers.com/contact/

### 5. Salt air

If you are within a few miles of the water, the part that goes first is
rarely the door. It is the lift cable at the bottom bracket, where salt
sits in the strands, and the rollers, whose bearings seize.

Both are cheap while they are still just worn. A frayed cable that snaps
under load takes the door down with it. Cable repair is $95 to $300.

garage-door-fixers.com/parts/lift-cable/

### 6. Repair or replace

A rough rule: if the repair is under a third of what a new door costs, and
the sections themselves are sound, repair. If the panels are dented through,
rusted at the bottom, or the door is single layer steel in a coastal county,
the money goes further on a replacement.

New door installation is $950 to $4,200 fitted, depending on material and
rating.

garage-door-fixers.com/buyers-guide/

### 7. The opener is not the problem

If the opener runs and the door does not move, the opener is usually fine.
Either the trolley has been disconnected from the arm, or the drive gear
inside the housing has stripped, which sounds like a grinding whirr with no
movement at all.

That is a $95 to $300 repair, not a new opener.

garage-door-fixers.com/parts/opener-drive-gear/

### 8. Se habla español

Todo nuestro sitio está en español, con los mismos precios publicados antes
de reservar. Reemplazo de resorte $150 a $350. Reparación de cable $95 a
$300. Puerta nueva instalada $950 a $4,200.

Puede agendar una ventana de llegada real de dos horas sin llamar a nadie.

garage-door-fixers.com/es/

---

# Florida Breeze Air Duct

**Page:** facebook.com/FloridaBreezeAirDuctservices
**Site:** floridabreezeairduct.com

### 1. Why $99 duct cleaning is not duct cleaning

Real source removal means a negative air machine connected at the plenum,
holding the whole system under suction and exhausting through a HEPA filter.
Two technicians, real equipment, two to four hours in one house.

That work has a real cost. A $49 to $99 advertised special is either twenty
minutes of vacuuming at the registers, or a way through your front door
after which the number climbs.

Ours is $300 to $600 per system, and you have the number before we book.

floridabreezeairduct.com/blog/air-duct-cleaning-scams/

### 2. AC duct cleaning and air duct cleaning are the same thing

Almost nobody in Florida has a furnace, so people name the ducts after the
air conditioner. AC duct cleaning, AC vent cleaning, air vent cleaning,
ductwork cleaning: same job.

The one phrase that means something genuinely different is dryer vent
cleaning. Separate duct, separate equipment, separate price, and the one
that is actually a fire risk.

floridabreezeairduct.com/services/air-duct-cleaning/

### 3. Florida humidity is the whole story

The same air recirculates through your house five to seven times a day. In
this climate the ductwork stays warm and damp, which is exactly what mould
wants, and every cycle redistributes whatever is growing in there into the
rooms where people sleep.

Every three to five years is the interval for most Florida homes. Sooner
after construction work, a roof leak, or a flood.

floridabreezeairduct.com/services/air-duct-cleaning/

### 4. The dryer that takes three cycles

If a load of towels needs two or three cycles, the dryer is usually fine.
The vent is blocked. Lint packs the duct, the machine cannot exhaust, and it
runs hot against its own back pressure.

That is the single most common house fire cause in this category, and it is
a cheap job to fix.

floridabreezeairduct.com/services/dryer-vent-cleaning/

### 5. Limpieza de ductos, en español

Todo el sitio está en español. La limpieza de ductos cuesta $300 a $600 por
sistema, y usted recibe el precio antes de agendar, no después.

Si alguien le ofrece $99 por toda la casa, pregunte qué incluye. La limpieza
real con equipo de presión negativa toma de dos a cuatro horas con dos
técnicos.

floridabreezeairduct.com/es/

### 6. What we will not tell you

We will not tell you your ducts are full of mould from a photograph taken at
one register. Mould in a duct system is diagnosed, and the honest answer
after looking is often that you need a cleaning and not a remediation.

If someone shows you a scary picture and quotes four figures on the spot,
get a second opinion.

floridabreezeairduct.com/services/mold-remediation/

### 7. Sliding glass doors

Also us. The rollers under a Florida slider carry the whole panel across
salt air and sand, and once they flat spot the door drags, the track wears,
and eventually it stops locking properly.

Rollers and track are a repair. Replacing the whole door is not usually
necessary and is a much bigger job.

floridabreezeairduct.com/services/sliding-glass-door-repair/

### 8. New construction and remodels

If you have just had building work done, clean the ducts before you use the
system properly. Drywall dust is fine enough to pass a filter and it coats
the inside of the trunk, and once the system runs it distributes that
through the house for months.

floridabreezeairduct.com/services/air-duct-cleaning/

---

## Cadence

Two a week per page, alternating a useful answer and a service post. Post
the same content to the Google Business Profile the day each one exists,
where it will do the job the owner originally had in mind.
