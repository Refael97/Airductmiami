/**
 * Extra hand written depth for the English city pages that already produce
 * calls and leads, rendered on /service-areas/{slug}/ right after the
 * existing `depth` blocks from cityDetail.ts. Same block shape.
 *
 * Added 26 October 2026, after a record lead week was followed by a quiet
 * one with rankings unchanged. These pages were already converting; the
 * blocks below answer the Search Console queries each page was being shown
 * for but did not answer well: "air vent cleaning miami", "furnace cleaning
 * west palm beach", "residential duct repair sarasota county", "air duct
 * cleaning cost naples fl", the dryer vent searches landing on Kissimmee
 * and Coconut Creek, "air duct installation hialeah", and "air duct
 * cleaning services" on St. Petersburg.
 *
 * Plain text only: the template renders each paragraph inside a <p> as
 * text, so no HTML. Written per city; no paragraph is shared between pages.
 * Prices are the published ones from src/lib/meta.ts and src/data/services.ts.
 */

export const cityDepthExtra: Record<string, { heading: string; body: string[] }[]> = {
  miami: [
    {
      heading: "Air vent cleaning in Miami: the grille, or the whole system behind it",
      body: [
        "Most people in Miami who call about air vent cleaning are looking at the grille in the ceiling: grey streaks fanning out from the louvers, or black dots on the slats of the vent over the bed. The grille is the only part you can see and the smallest part of the job. Behind it is a boot, a branch running back to the trunk, the trunk itself, and the air handler where the air was cooled and wrung out before it ever reached the room.",
        "In Miami the black dots deserve a second look before anyone wipes them. Air leaving a supply vent is cold, the room air around it is humid, and the louvers sit exactly where the two meet, so they sweat and grow a film of mildew that comes back in the same pattern a few weeks after it is cleaned. Washing the grille treats the symptom. The source is usually upstream: a wet coil, a slow drain pan, or a supply boot whose insulation has slipped, and that is what we look for first.",
        "So an air vent cleaning in Miami is a whole system visit. We count the supplies and returns, put a camera into the trunk, hold the system under negative air at the plenum, seal every register and work each branch one at a time, then clean the blower wheel and the face of the coil. Every grille comes off and is washed, the boot behind it is cleaned by hand, and you get photos of the same spots before and after. A condo with a closet unit takes a few hours. A house with an attic takes two to four.",
      ],
    },
    {
      heading: "What air duct cleaning costs in Miami, and what moves it between $300 and $600",
      body: [
        "The figure is per system, and in Miami the building decides most of where it lands.",
        "A high rise unit in Brickell, Edgewater or downtown often has no condenser of its own outside. The closet holds a fan coil or a water cooled unit fed by the building, with a handful of registers on short runs above a dropped ceiling, and those sit at the bottom of the range. What takes time there is the building: the service elevator, the insurance certificate the association wants on file, and its working hours. The building water loop and anything shared belong to the association, and we clean the part that is yours.",
        "The older concrete block houses in Shenandoah, Silver Bluff and Allapattah, built before central air was standard, sit in the middle. The duct went in later, through an attic that is often too low to stand in, and getting a hose and a technician to every boot in that space is slower work than the register count suggests.",
        "The top of the range is the larger house. A two storey home in Coconut Grove with an air handler for each floor is two systems, each priced on its own. Heavy buildup and a long register count move the figure up. Growth inside the ducts or the air handler is quoted as mold removal, on a separate line, and sanitizing is $75 to $200 on top only when there is a reason for it. You hear all of it before the visit is booked.",
      ],
    },
  ],

  "west-palm-beach": [
    {
      heading: "Furnace cleaning in West Palm Beach: what is actually in the closet",
      body: [
        "Searches for furnace cleaning in West Palm Beach pick up every fall, and the honest answer starts with the fact that almost no house here has a furnace. Open the air handler closet in a Northwood bungalow, an Ibis two storey or a downtown condo and you find a blower, a cooling coil and a bank of electric heat strips. Many newer homes also have a heat pump, which runs the outdoor unit in reverse and only calls on the strips on the colder nights.",
        "Those strips sit idle for most of the year and collect dust. The first real cold front of the winter switches them on, the dust burns off, and the smell comes through every register, which is usually what sends people searching. It should fade within the first hour. If it smells like hot plastic or wiring, or it does not fade, switch the system off at the thermostat and call an HVAC contractor, because that is an electrical question and not a cleaning one.",
        "What we clean is the air handler: the blower wheel and housing, the coil, the cabinet and the area around the strips, and the condensate drain. That is our AC and HVAC system cleaning at $200 to $450, and October or November is the time for it, before the strips are needed. If your house does have a gas furnace, which is rare this far south, the burner and heat exchanger belong to a licensed HVAC contractor, and the ducts and air handler are still ours.",
      ],
    },
    {
      heading: "Duct cleaning in West Palm Beach when the house has two systems",
      body: [
        "Out west in Ibis, Andros Isle and the planned communities beyond the turnpike, the typical house has one air handler for each floor, often one in the garage and one upstairs. That is two duct systems that never share air, and the price is per system, so the $300 to $600 figure covers one of them and the second is quoted as its own job.",
        "Both are done on the same visit. With two technicians a single system takes two to four hours, so a two system house is most of a day, and we tell you that when you book rather than rushing the second half. The upstairs system usually earns more attention: it serves the bedrooms, its returns pull bedding lint and dander, and its air handler sits where the heat collects.",
        "If only one floor has a complaint, it is fair to ask whether both need doing, and sometimes the answer is no. A downstairs system cleaned four years ago, with clean grilles and no smell, can wait while the upstairs one with grey shadowing around its ceiling grilles is done now. We would rather quote you one system honestly than two out of habit.",
      ],
    },
  ],

  sarasota: [
    {
      heading: "AC duct cleaning in Sarasota: the same job, and where the AC part comes in",
      body: [
        "AC duct cleaning, air duct cleaning and AC vent cleaning are one service. Floridians name the ducts after the air conditioner because cooling is almost the only thing they carry here. What the name does get right is that in Sarasota the air conditioning side of the system, the coil and the blower, is usually where the trouble starts, and a visit that only brushes the ducts misses it.",
        "A Sarasota visit runs in the same order every time. We count the registers, look into the trunk with a camera, connect the negative air machine at the plenum, seal every supply and return and work each branch to its boot, then open the blower compartment and clean the wheel, the housing and the face of the coil. The grilles are washed and you see before and after photos of the same places. A single system is two to four hours with two technicians.",
        "What changes is the house. On Siesta Key and Lido Key the condo units have short runs and a salted coil, and the coil may be the whole job, an AC and HVAC system cleaning at $200 to $450, rather than a $300 to $600 duct cleaning. In Gulf Gate and Arlington Park the ducts usually come first. If you are not sure which you have, describe the smell and where the dust shows up when you call, and we will tell you before booking.",
      ],
    },
    {
      heading: "Residential duct repair in Sarasota County: what it covers and how it is priced",
      body: [
        "Repair is a different job from cleaning and it is quoted differently. Cleaning removes what has built up inside a duct. Repair deals with air escaping before it reaches a room: a run that has come off its collar in the attic, a torn jacket, flex crushed by storage, or insulation that has gone wet and flat. We do not guess at those from the doorway. The registers are sealed, the system is pressurised with a calibrated fan, and the leakage is measured before anything is quoted and again after the work, so the result is a number rather than a promise.",
        "The published range is $250 to $2,000 and up, and scope decides where you land. A few reconnected collars and joints sealed with mastic sit at the bottom. New flex across a whole attic, with new supports and insulation, sits at the top. Sections with saturated insulation are replaced, not cleaned.",
        "Two patterns come up in this county. Milton came ashore at Siesta Key in October 2024, and where a roof leaked for even a few days, the duct under the damaged section took the water; the jacket holds it against the insulation long after the ceiling has been patched. And the flex in Palmer Ranch and the planned communities east of the Trail has had enough summers on it for the attic heat to work the joints loose. A bedroom that never cools, a brown stain on a ceiling under an attic run, or a bill that climbs on the same thermostat setting points to repair before cleaning.",
      ],
    },
  ],

  kissimmee: [
    {
      heading: "Dryer vent cleaning in Kissimmee: a separate job at $100 to $200",
      body: [
        "Many of the people who land on this page are looking for dryer vent cleaning rather than air ducts, so it is worth saying plainly that the two are different jobs. The dryer vent is its own duct, from the back of the machine to a hood on the wall or a cap on the roof. Cleaning it costs $100 to $200 with the hose behind the dryer included, and it takes 45 to 90 minutes. Kissimmee has its own dryer vent page, linked further down, on what the runs are like here.",
        "The visit goes like this. Airflow is measured at the outside hood, the dryer is pulled out, and the transition hose is disconnected at both ends and cleaned. The full run is brushed and blown through to the outside, the hood is cleaned and the damper checked so it opens freely, the hose is clamped back on in a gentle curve, and the airflow is measured a second time. If the hose is plastic, foil or crushed, you hear that it should be replaced and what that costs, and you can say no.",
        "In a rental the useful fact is the time. A dryer vent fits inside a changeover. If towels come out damp after a full cycle, the laundry room stays hot, or the housekeeper is running loads twice to finish, the vent is the first thing to check, before anyone books an appliance repair.",
      ],
    },
    {
      heading: "Duct cleaning in Kissimmee and the dryer vent on the same visit",
      body: [
        "Owners in Celebration, Kissimmee Bay and the rental communities along 192 often want both done in one trip, and that works. The air duct cleaning is $300 to $600 per system and takes two to four hours. The dryer vent is quoted on its own line at $100 to $200. You get both numbers before booking and either one can be dropped.",
        "Doing them together matters more in a rental than in a family home because of who is watching, which is nobody. No one living there notices a musty start to the air conditioning or a dryer that needs two cycles, and both problems grow in the weeks the house sits closed. One visit between bookings, with before and after photos of the coil, the ducts and the vent run, gives an owner who lives out of state a look at a system they never see.",
        "For a family home in Buenaventura Lakes or Poinciana the pairing makes the same sense on a different schedule: the ducts every three to five years, the dryer vent once a year, and the two lined up whenever the duct cleaning comes due.",
      ],
    },
  ],

  naples: [
    {
      heading: "Air duct cleaning cost in Naples, FL",
      body: [
        "The published price is $300 to $600 per system, and in Naples the words per system do most of the work. A unit in a Park Shore or Pelican Bay tower has one compact air handler in a closet and short runs, and it sits at the low end. A single storey house in Golden Gate or the Vineyards with one system and a dozen registers lands in the middle. A large house in Port Royal, Aqualane Shores or The Moorings commonly has two or three air handlers, and each one is its own system with its own figure.",
        "Inside the range, the number moves with the register count, how much buildup the camera shows, and how hard the air handler is to reach. A garage air handler on a platform is quick to open. One squeezed into an attic over a three car garage is slower. Those things are settled on the phone and on the camera, before booking.",
        "Three things are quoted separately, so you can say no to each. If the November reopening finds growth on the coil or inside the ducts, that is air duct mold removal, priced on severity from $500 to $3,000 and up. If the musty smell comes from the coil and blower alone and the ducts are sound, the right job is the AC and HVAC system cleaning at $200 to $450, not a duct cleaning. Sanitizing, $75 to $200, only ever follows a cleaning and only when there is a reason for it. And sealing a leaky return platform in the garage, the most useful fix in many Naples houses, is repair work priced on its scope after a pressure test.",
      ],
    },
    {
      heading: "Booking a Naples house with several systems, or with nobody in it",
      body: [
        "A three system house is a long day. With two technicians each system takes two to four hours, so we tell you at booking whether the work fits one visit or needs two, rather than rushing the third air handler at the end of the afternoon.",
        "Seasonal owners do not have to be in Naples for the work. What we need is someone to let us in at the start and walk through with us at the end, which can be a house manager or a neighbour with the key, and the before and after photos show you what was found either way. Booking in October, before the house reopens and the system carries a full season of family and guests, is better timing than booking after the first complaint.",
      ],
    },
  ],

  kendall: [
    {
      heading: "The older Kendall ranch houses, where the closet is the return",
      body: [
        "Kendall is not all townhouses. Devon-Aire, Snapper Creek and the older streets either side of Kendall Drive have a lot of single storey concrete block houses from the sixties and seventies, and many of those systems have a feature newer ones do not: the air handler closet is the return. There is a louvered door or a grille in the closet wall, a filter at the bottom of the unit, and the closet itself acting as the duct back to the blower.",
        "That works until the closet fills with whatever is stored in it, its walls turn out to be unsealed drywall and framing, and the gap around the door or the filter rack lets air reach the blower without passing through the filter. Dust that never meets a filter coats the blower wheel and the coil, and the house is back to grey grilles within weeks of a cleaning. On these houses we look at the closet before the ducts, and sealing that return path is often worth more than anything done downstream of it.",
        "The air handlers in these houses are usually on their second or third replacement, each one dropped into the same closet and connected to the same ducts. A new unit on old distribution does not reach its rating, and if the bedroom at the end of the hall never keeps up, the run to that room is the first suspect rather than the equipment.",
      ],
    },
    {
      heading: "Air duct cleaning in Kendall condos and villas",
      body: [
        "The garden condominiums and villa rows along Kendall Drive and around Dadeland are a third kind of Kendall system. The air handler is in a closet inside the unit, the runs above the ceiling are short, and a full cleaning, blower and coil included, takes a few hours.",
        "Two things are particular to them. The condensate drain from a closet unit on an upper floor runs past the unit below, so a slow drain is a neighbour's ceiling stain as well as your own problem, and we look at the pan and the line on every visit in these buildings. And the association usually wants a certificate of insurance before anyone works inside, which we issue in the association's name and send ahead.",
        "The price follows the system rather than the address. A one bedroom villa with a handful of registers sits at the bottom of the $300 to $600 range, and you have the figure before we book.",
      ],
    },
  ],

  homestead: [
    {
      heading: "What air duct cleaning costs in Homestead, and what decides it",
      body: [
        "The range is $300 to $600 per system, and Homestead housing spreads across all of it. A townhome in Keys Gate with one air handler and short runs sits at the low end. A four bedroom single storey in Waterstone or Malibu Bay, with a dozen or more registers spread across a vented attic, lands in the middle. An older house out toward the Redland that has had a room or two added over the years can carry more registers than its size suggests, or a second system for the addition, and a second system is quoted on its own.",
        "Heavy field dust is part of the buildup that moves the figure inside the range, but it does not create extras. The blower wheel and the coil face, where that fine soil settles, are cleaned on every visit as part of the job. What does add a line is growth on the coil or in the ducts, which is quoted as mold removal, and sanitizing at $75 to $200, which only ever follows a cleaning. You hear all of it on the phone before anything is booked.",
      ],
    },
    {
      heading: "Brown dust or black specks on a Homestead vent: which one you have",
      body: [
        "Homestead families describe two different things at their vents, and they lead to different jobs. Brown or grey dust on the grille and on the ceiling around it, dry to the touch and back within a week or two of wiping, is field dust that the system is pulling in through a gap in the return or past a loaded filter.",
        "Black specks on the louvers themselves, coming back in the same places after every wipe, are usually something else. Cold supply air meets humid room air right at the grille, a film of moisture forms, and mildew grows on it. That points back to a wet surface upstream, the coil, the drain pan, or a supply boot whose insulation has slipped, and wiping the grille does nothing about any of them.",
        "We do not diagnose either one from a photo of a vent. The camera in the trunk and a look at the coil decide it, and if what we find is growth rather than dust, we tell you it is a mold removal job before anything is quoted as a cleaning.",
      ],
    },
  ],

  clearwater: [
    {
      heading: "Clearwater Beach and Sand Key condos: duct cleaning or coil cleaning?",
      body: [
        "A condo on Clearwater Beach or Sand Key usually has its air handler in a closet, a handful of registers, and runs short enough to see the end of with a flashlight. In a unit like that the ducts are rarely what the owner is complaining about. The complaint is a smell when the system starts, or a unit that runs and runs without drying the air, and both point at the coil and the blower, where salt and dust hold moisture.",
        "That is the AC and HVAC system cleaning, $200 to $450: the coil, the blower wheel, the cabinet and the drain line. A full duct cleaning at $300 to $600 makes sense on top of it when the camera shows buildup in the runs, when the unit was renovated and the drywall dust went into the system, or when there are pets. We tell you which one the unit needs before quoting both.",
      ],
    },
    {
      heading: "Duct cleaning in Countryside and the inland subdivisions",
      body: [
        "Countryside, Coachman Ridge and the inland subdivisions of north Clearwater are mostly slab houses from the seventies and eighties, with the air handler in the garage or a hallway closet and the ducts spread across the attic. Most of those systems are on their second or third air handler, and the ductwork behind them is often original or patched once.",
        "A duct cleaning there covers every supply and return counted and sealed, the system held under negative air at the plenum, and each branch brushed or whipped to its boot depending on whether it is sheet metal or flex. The trunks and plenums are worked directly and the blower and coil face are cleaned. Two technicians, two to four hours, $300 to $600 for the system, and the figure given before booking.",
        "The camera matters more in these houses than the brushing. Thirty or forty years of attic heat leaves flex sagging, jackets split and joints held by tape that let go long ago, and those are found while the system is open. If a run is torn or off its collar, we photograph it and tell you it needs repair rather than clean a duct that is blowing into the attic.",
      ],
    },
  ],

  "hialeah-gardens": [
    {
      heading: "Air duct installation in Hialeah Gardens: what we replace and what we do not",
      body: [
        "Searches for air duct installation in Hialeah and Hialeah Gardens usually come from one of two situations. Either the ducts in the attic are falling apart, or a new air conditioner is going in and someone has said the ducts should be replaced with it. We do the duct side. We do not sell or install air conditioning equipment, which is work for a licensed HVAC contractor.",
        "Replacing ductwork starts with a pressure test, not a tape measure. The registers are sealed, the system is pressurised and the leakage is measured, so you know whether the system needs sections replaced or the whole attic redone. In houses from the eighties and nineties the common answer is that the flex has outlived what a Florida attic allows, which is realistically ten to fifteen years, and the joints were taped rather than strapped and sealed with mastic. Replaced runs go in with new supports and insulation at R-6 to R-8, and the system is tested again afterwards.",
        "The price is set by scope. The published range for repair and replacement is $250 to $2,000 and up, with a few reconnected joints at the bottom and a full attic of new flex at the top. If a new air handler is going in, it is worth doing the ducts first or at the same time, because a new unit pushing air through twenty five year old distribution will not deliver what it was sold on.",
      ],
    },
    {
      heading: "The converted garage and the room the ducts never reached",
      body: [
        "A lot of houses in this part of the county have a room that was not in the original plan: a garage closed in as a bedroom, an efficiency added at the back, a patio enclosed. That room was either given a branch tapped off the nearest run, usually smaller and longer than it should be, or never connected at all and cooled with a wall unit.",
        "The tapped branch is the one that shows up on the phone as the room that is always hot. It is starving for air because it was hung off a system sized for the house without it, and no cleaning changes its diameter. Sometimes the fix is a properly sized run from the trunk. Sometimes the honest answer is that the system was never big enough for the added room and a separate unit would serve it better, which is an HVAC contractor's decision, and we will tell you so.",
      ],
    },
  ],

  "coconut-creek": [
    {
      heading: "Dryer vent cleaning in Coconut Creek",
      body: [
        "If you searched for dryer vent cleaning and landed here, the dryer vent is a separate service with its own Coconut Creek page, linked lower down. The short version: it costs $100 to $200, takes 45 to 90 minutes, and covers the hose behind the machine, the full run to the outside, and the hood and damper at the exit, with the airflow measured before and after.",
        "In Wynmoor and the other association buildings, the part that needs planning is the exterior hood on an upper floor. It is reached from the outside of the building, and associations often want notice of exterior work, so a call to the office when you book saves a second trip. In a Winston Park or Regency Lakes house with an attic run to the roof, the questions are how long the run is and whether it has come apart somewhere in the attic.",
        "The signs it is due are simple: a load that needs a second cycle, a laundry room that stays hot, or a dryer that shuts itself off partway through. Any one of those is worth dealing with before the next load.",
      ],
    },
    {
      heading: "HVAC cleaning in Coconut Creek: when the air handler is the job",
      body: [
        "HVAC cleaning is the other search that brings people to this page, and it is a different job from duct cleaning. It covers the parts that cool and move the air: the evaporator coil, the blower wheel, the cabinet and the condensate drain. It costs $200 to $450 per air handler and takes one and a half to three hours.",
        "For a Wynmoor unit it is often the more useful of the two. The air handler sits in a closet in a building where neighbours share walls and ceilings, and a condensate line that slows down in August does not just shut the system off, it can put water into the unit below. Flushing that line and cleaning the coil and the pan is the maintenance that matters most in a stacked building, and once a year is the right interval for it.",
        "In the single family houses the two jobs tend to go together: the ducts on a three to five year cycle, the air handler every year, and both on one visit when the ducts come due. Each is quoted on its own line, and you have both numbers before we book.",
      ],
    },
  ],

  "st-petersburg": [
    {
      heading: "Air duct cleaning services in St. Petersburg: what each one is",
      body: [
        "Air duct cleaning services covers several separate jobs, and many quotes blur them together. Here is what each one is and what it costs in St. Petersburg.",
        "Air duct cleaning, $300 to $600 per system: the supply and return ducts, trunks and plenums cleaned under negative air with every register sealed, plus the blower wheel and the face of the coil. Two technicians, two to four hours. AC and HVAC system cleaning, $200 to $450 per air handler: the coil, blower, cabinet and condensate drain without the ducts, which is the job for a musty smell at startup when the ducts themselves are sound, as they often are in a downtown condo.",
        "Dryer vent cleaning, $100 to $200: the hose, the full run and the outside hood, with airflow measured before and after. St. Pete has its own dryer vent page, linked below. Sanitizing, $75 to $200, only after a cleaning and only with a reason for it. Air duct repair, priced on scope after a pressure test, for runs that have separated, sagged or soaked, with its own St. Petersburg page further down. Commercial duct cleaning for offices and shops, quoted per site after a walkthrough.",
        "And air duct mold removal, for growth inside the ducts or the air handler. Mold on the walls, the floor framing or the crawl space around the system is separate licensed work, and we tell you so rather than treat it.",
      ],
    },
    {
      heading: "Which of those services a St. Petersburg home actually needs",
      body: [
        "Start from the symptom rather than the list. A smell for the first few minutes after the air comes on is the coil and the blower, so HVAC cleaning. Dust back on the furniture within days, grey shadowing at the ceiling grilles, a recent renovation or new pets point to duct cleaning. One room that never cools, or a bill that climbs on the same setting, is a leak or a disconnected run, and that needs repair rather than cleaning. Damp towels after a full cycle is the dryer vent.",
        "Two St. Pete situations deserve their own mention. In an Old Northeast or Kenwood bungalow with ducts under the floor, an earthy smell in the room over the crawl space hatch usually comes from a run down there, and a camera look comes before any quote. In Shore Acres, or any house that took water, the ducts need opening before cleaning is even discussed, because wet insulation inside a jacket is replaced, not cleaned.",
        "If you are not sure which you have, describe it when you call. We would rather tell you that a coil cleaning will do than book a duct cleaning that never touches the cause.",
      ],
    },
  ],

  /*
   * Added 29 October 2026, second wave: the English city pages sitting at
   * positions 10 to 20 on hundreds of impressions with no clicks. Each pair
   * of blocks answers the queries in the Search Console export of 27 October
   * that the page did not yet answer: "ductwork repair bradenton", "ac vent
   * cleaning deerfield beach fl", "furnace cleaning boynton beach", "hvac duct
   * cleaning" on Pompano Beach, Sunrise and Davie, "air duct repair coral
   * gables", "home ventilation services coral gables", and the property
   * management and HOA searches on Plantation. Dryer vent searches belong to
   * each city's own dryer vent page, so they get one sentence here at most.
   */
  bradenton: [
    {
      heading: "Air duct cleaning in Bradenton: what the visit includes and what it costs",
      body: [
        "Duct cleaning, AC duct cleaning and air duct cleaning all name one job in Bradenton, priced at $300 to $600 per system, and how the house was built decides where it lands. A single storey block house in Bayshore Gardens or West Bradenton with one air handler in a hall closet sits toward the bottom. A two storey house on the Lakewood Ranch side with one air handler in the garage and a second one for the upstairs is two systems, and each gets its own line on the quote.",
        "In the older houses the visit starts with the return rather than the supplies. Where the return air travels through a wall cavity or a joist bay, as described above, that path has to be closed and sealed before cleaning means anything, because an open cavity keeps feeding crawl space and wall dust to the blower. Once the return is sound, two technicians put the ducts under suction from the plenum, tape off every register, work each branch back to the trunk, and finish with the blower and coil. Expect two to four hours for one system, with camera shots of the same spots before and after.",
        "Separate lines, each one optional: mold growth on the coil or in the ducts, which is air duct mold removal at $500 to $3,000 and up by severity; sanitizing at $75 to $200 when a cleaning gives cause for it; and repair, below. A dryer vent that is due too is its own $100 to $200 job, with a Bradenton page of its own.",
      ],
    },
    {
      heading: "Ductwork repair in Bradenton: when a cleaning will not fix it",
      body: [
        "Cleaning removes what has settled inside a duct and does nothing for a duct that is losing air. In Bradenton the two are easy to confuse, because the houses that most need cleaning are often the ones with the oldest ductwork. The signs that point to repair are a room that never reaches the thermostat setting, a power bill that has crept up on the same habits, insulation fibre or attic grit blowing out of a supply grille, and grilles that whistle when the system starts.",
        "We put a number on it before quoting. With the grilles taped off, a test fan pressurises the duct system and reads how much air it loses, and the same test runs again when the work is finished, so you see two figures rather than a promise. Repair is priced on the scope that test shows, from $250 to $2,000 and up.",
        "In a Bayshore Gardens or Samoset house on its original ductwork, the test often shows leakage spread along whole runs rather than at a few joints, and that is a replacement conversation: new flex, new supports and new insulation, not tape over a jacket that has gone brittle. East of the interstate the answer is usually smaller, a collar pulled off the plenum or a branch dropped off its fitting above the garage, and reconnecting it with straps and mastic is a few hours of work.",
        "When a house needs both, repair goes first and the cleaning second. A duct that is still drawing from the attic or a crawl space refills with that air within months, and cleaning it first only means paying for the cleaning twice.",
      ],
    },
  ],

  "deerfield-beach": [
    {
      heading: "AC vent cleaning in Deerfield Beach, FL: what the grilles are telling you",
      body: [
        "Most calls about AC vent cleaning in Deerfield Beach start with something seen on a grille: a grey, furry layer on the return in the hallway ceiling, a dark shadow fanned across the ceiling beside a supply, or rust weeping from the screws of an old steel register. Each one points somewhere different, and only some of them are solved at the vent.",
        "Grey felt on the return means the filter behind it is loaded or air is slipping around it, which in a Century Village unit is usually the return and filter seal problem described above. A dark fan on the ceiling beside a supply is air leaking at the boot, pulling dust from the space above the ceiling and printing it on the paint. Rust is the coastal one. In The Cove and on the Hillsboro side, a steel grille carrying cold supply air in a humid, salty house sweats and corrodes, and the stain runs down from the screw holes.",
        "So an AC vent cleaning here is the full duct cleaning rather than a wipe of the louvers. Every grille comes off and is washed, each branch is cleaned back to the trunk under negative air, and the blower wheel and coil face are done before the grilles go back. It is priced per system at $300 to $600, and a Century Village unit, with its closet air handler and a few short runs, is near the bottom of that. A grille too corroded to come clean is photographed, and replacing it is your decision.",
      ],
    },
    {
      heading: "Air duct cleaning services and duct repair in Deerfield Beach",
      body: [
        "Duct services in Deerfield Beach divide by building more than by name. In a Century Village condo the usual combination is the coil, blower, cabinet and drain line, our AC and HVAC system cleaning at $200 to $450, together with sealing the return and filter housing, and the ducts are cleaned when the camera shows they need it. In the houses and townhomes around Deer Creek and the newer western side of the city, the full duct cleaning per system is the usual job, and a house with a system for each floor counts as two. Close to the beach, the dampers and terminations are checked before anything is cleaned.",
        "Repair is its own line, with its own Deerfield Beach page further down. It is quoted after a pressure test, from $250 to $2,000 and up, and in the condominiums it starts with where your part ends and the association's begins. Mold in the ducts or on the coil is quoted as air duct mold removal according to how far it has spread, and sanitizing, $75 to $200, is offered after a cleaning only if the inspection calls for it. Dryer vent cleaning, $100 to $200, also has a page of its own.",
        "In association buildings two things prevent a wasted trip. Management usually wants proof of insurance on file before a crew goes inside, and we email the certificate to the office ahead of the day. Many buildings also limit contractor work to weekday hours. Tell us the building and the unit when you call, and the visit is planned around both.",
      ],
    },
  ],

  "boynton-beach": [
    {
      heading: "Furnace cleaning in Boynton Beach: what the heating side of your system really is",
      body: [
        "Plenty of people in Boynton Beach grew up with a gas furnace in the basement and a service call every fall, so searching for furnace cleaning here makes sense. Very few Boynton homes have one, though. The air handler in the closet or the garage holds a blower, a cooling coil and a set of electric heat strips. In many houses whose equipment has been replaced in the last twenty years, the outdoor unit is a heat pump that does most of the heating, and the strips come on only when it cannot keep up or when the thermostat is set to emergency or auxiliary heat.",
        "So the heating side sits unused from spring to the first cold front, the strips gather dust, and the first night they run the house smells hot and dusty for an hour or so. That is ordinary and it passes. A breaker that trips when the heat comes on, or a smell like scorched wire that lingers, is something else: leave the heat off and have an HVAC contractor look, because that is a fault, not dust.",
        "What people want from a furnace cleaning is what our AC and HVAC system cleaning does, at $200 to $450 per air handler: the compartment around the strips vacuumed, the blower wheel cleaned, the coil cleaned, the cabinet sanitized and the drain line flushed. For seasonal owners in Hunters Run, Leisureville and the other 55 plus communities, the useful moment is the weeks before you come back down, so the strips are clean before the first cool night and the drain is clear before the system carries a full house again. A true gas furnace is unusual in Palm Beach County, and if you have one, its burner is outside what we do.",
      ],
    },
    {
      heading: "Air duct cleaning in Boynton Beach: villa, condo or house out west",
      body: [
        "Duct cleaning in Boynton Beach is $300 to $600 per system, and the city's housing covers the whole range. A villa or condo in Hunters Run, or a single storey home in Leisureville, usually has one compact air handler and a short duct layout, and sits at the low end. The mid rise condos at Renaissance Commons have closet air handlers and short runs, with the building's rules on access and working hours to plan around. The larger houses in the gated communities west of the turnpike often have two air handlers, which means two systems and two prices.",
        "In the older villas the camera usually decides the job. Ducting in place since the seventies or eighties behind a newer air handler, the pattern described above, can look fairly clean inside and still leak at every joint. Then the photos go to you with a repair quote, because cleaning a run that empties into the attic is wasted money. Where it is sound, the cleaning is the standard one: everything under negative air, each branch worked to its boot, the blower and coil face cleaned, two technicians and two to four hours.",
        "Twenty years in the same Boynton villa with ducts never touched does not, on its own, prove the job is due. The camera shows what is actually in there. If the runs are light and the grilles stay clean, we will say that a coil cleaning is the better use of the money this year, and leave the ducts for later.",
      ],
    },
  ],

  "fort-myers": [
    {
      heading: "Air duct cleaning in Fort Myers, FL: what is included and what it costs",
      body: [
        "In Fort Myers the price runs $300 to $600 per system, and the housing it applies to covers a long stretch of years. The bungalows of Dean Park and the older houses off McGregor Boulevard went up before central air conditioning, so their ducts were added later and fitted wherever there was room. Whiskey Creek is single storey ranch housing with the air handler in the garage or a hall closet and the ducts across the attic. Gateway and Pelican Preserve are newer master planned communities with larger floor plans, and a house with a second air handler counts as two systems.",
        "The work does not change from one neighborhood to the next. Each register is counted and taped off, a collection unit holds the system under negative air at the plenum, every branch is cleaned back to the trunk, and the blower wheel and the face of the coil are cleaned before the cabinet is closed. Two technicians spend two to four hours on one system, and you get photographs of the same places before and after.",
        "Within that range, more registers, heavier buildup and an awkward attic or closet push the number up. Growth on the coil or in the ducts, common in a house that sat closed through the summer, is quoted on its own line as air duct mold removal. When the camera shows clean runs and the odor is coming off the coil, a coil and blower cleaning, $200 to $450, may be all the house needs.",
      ],
    },
    {
      heading: "Duct cleaning in Fort Myers, FL when the air handler lives in the garage",
      body: [
        "In a great many Fort Myers houses the air handler stands in the garage, on a stand or platform near the water heater, and that one fact explains a lot of dirty ducts. Return air has to get from the house to the blower, and on a garage unit it usually passes through a box or platform under the air handler. If that box is not sealed, the system draws part of its air straight from the garage.",
        "A Lee County garage in August is hot and dusty, and it holds the car, the mower, the fertilizer and, in a house with a pool, the chlorine. Garage air pulled into the return carries all of it to the coil. The dust coats the coil within a season or two, and chlorine fumes corrode the copper and aluminum the coil is made of, so a leaky return in a garage full of pool chemicals shortens the life of the equipment as well as soiling the ducts.",
        "So on a garage system we look at the return before quoting the cleaning. Sealing the platform and the gaps around the filter is repair work priced on its scope, and it is usually worth doing first, because cleaning ducts that keep drawing garage air buys a few months at most. Moving the pool chemicals to the far side of the garage costs nothing and helps as much as anything we do.",
      ],
    },
  ],

  "bonita-springs": [
    {
      heading: "Air duct cleaning in Bonita Springs, FL: price, timing and what is done",
      body: [
        "Air duct cleaning in Bonita Springs is $300 to $600 per system. Most homes in Pelican Landing, Spanish Wells, Palmira and the other gated golf communities are single storey, with one air handler in the garage or a utility room and the ducts across the attic, and they sit in the lower half of the range unless the house is large or carries a second system for a guest wing. The older homes along the Imperial River and in Bonita Farms vary more, some with additions tied into the original ducts, and there the register count matters more than the size of the house.",
        "On the visit every supply and return is sealed, suction goes on at the plenum, each branch is cleaned to the trunk, and the blower and coil face are cleaned, because in a house that sat closed all summer that is where growth tends to start. Two technicians take two to four hours on one system. If the camera finds growth on the coil or in the ducts, we stop and quote it as air duct mold removal, a separate line, before going any further.",
        "Timing matters more here than in a city where people live all year. Booking for October, before you return or in the first days after, means the system is clean before the house fills for the season, and it leaves time to set the humidity control described above before you leave again in spring. Dryer vents have their own Bonita Springs page, at $100 to $200 a cleaning.",
      ],
    },
    {
      heading: "Duct cleaning in Bonita Springs coach homes, villas and towers",
      body: [
        "A lot of Bonita Springs living is attached: coach homes with one residence above another, villas sharing a wall, and the high rise towers in Bonita Bay. Each residence has its own system, and each brings an association into the scheduling.",
        "In a coach home the upper and lower residences each have their own air handler, and they are separate jobs even when one family owns both. When neighbours book together, or one owner holds both, the two can be done on the same visit, each priced as its own system. A villa is usually one compact system with short runs, and it sits toward the bottom of the range.",
        "In the towers, the closet air handler and short runs make the job a few hours, and the coil is often the larger part of it. Where the runs look clean, we recommend cleaning the coil, blower and drain, $200 to $450, and leaving the ducts alone.",
        "Associations in these communities commonly ask for proof of insurance and notice before a contractor arrives, and the gate needs our name. Give us the community and the residence when you book, and the paperwork is settled before the day rather than at the gatehouse.",
      ],
    },
  ],

  "pompano-beach": [
    {
      heading: "HVAC duct cleaning in Pompano Beach: the ducts and the air handler together",
      body: [
        "HVAC duct cleaning, the way most people use the phrase, means the ducts and the equipment that pushes air through them, and in Pompano Beach that is the right way to think about it. A clean duct fed by a blower wheel caked in dust and a coil carrying a salt film stays clean for a few weeks. So the blower wheel and the face of the coil are part of our duct cleaning, along with the supply and return ducts, the trunks and the plenums, all under negative air.",
        "Where the balance falls depends on the building. In a Palm Aire or Cypress Bend apartment the runs are short and the riser above the ceiling belongs to the association, so the part you own is the closet air handler and a few feet of duct. There the coil, blower, cabinet and drain line are usually most of the work, and the AC and HVAC system cleaning at $200 to $450 may be enough on its own. In a Cresthaven or Old Pompano house, where the ducts were added after the house was built and carry more joints and more buildup, the full duct cleaning at $300 to $600 per system is the job.",
        "When a musty smell comes back every summer however often the system is cleaned, the question is humidity rather than dirt. Our indoor air quality check, $200 to $500, measures humidity room by room and puts a camera on the coil and the ducts to find where the moisture is coming from. It does not include air sampling or lab tests, and it tells you whether another cleaning would help at all.",
      ],
    },
    {
      heading: "Air duct cleaning in Pompano Beach canal homes: cost and what to expect",
      body: [
        "The houses along the canals in Garden Isles and around Harbor Village are a mix of original ranch houses, many of them remodeled at least once, and newer rebuilds. An original house usually runs on one system with the air handler in a garage or utility closet, and the price is $300 to $600 depending on the register count, what the camera finds, and how hard the attic is to work in. A rebuilt two storey house on the same street may have two systems, and each is priced on its own.",
        "Remodeling is the detail worth mentioning when you call. A kitchen or bathroom redone with the system running sends drywall and tile dust into the returns, and it settles in the ducts nearest the work and on the blower wheel. That is the dust owners describe as coming back a day after they wipe the furniture.",
        "Salt reaches these houses from the water side as well as the beach, and the outside parts of the system show it first. During the visit we look at the outdoor unit and at any exterior damper or termination for corrosion, and if something out there needs replacing, you get photographs and a note to pass to your HVAC contractor rather than a surprise on the invoice.",
      ],
    },
  ],

  hollywood: [
    {
      heading: "HVAC cleaning in Hollywood, FL: the coil and blower, or the whole duct system",
      body: [
        "HVAC cleaning and duct cleaning get used as if they were the same in Hollywood searches, and they are two jobs with two prices. HVAC cleaning is the air handler: the coil, the blower wheel and housing, the cabinet and the condensate drain, $200 to $450 per unit and one and a half to three hours. Duct cleaning works through every supply run, return, trunk and plenum with the system under suction, and also takes in the blower wheel and coil face, at $300 to $600 per system.",
        "Which one a Hollywood home needs follows its era. In the beachside and Hillcrest condos, where the closet air handler sits near the kitchen and the ducts are short, a greasy coil and a smell at startup are often the whole complaint, and HVAC cleaning alone usually fixes it when the camera shows the ducts are sound. In the ranch houses of Hollywood Hills, Driftwood and Boulevard Heights, the attic ducts carry decades of buildup, and the full duct cleaning, coil included, is the job. In the Hollywood Lakes bungalows the camera matters more than either price, because a retrofit run that has come apart inside a closet chase needs repair before anything is cleaned.",
        "Some Emerald Hills houses are large enough for two systems, and each is quoted separately. If you are not sure which job you need, a description of the smell, where the dust shows up and where the air handler sits usually settles it on the phone.",
      ],
    },
    {
      heading: "Vent cleaning in Hollywood, Florida: the grilles, the returns and what is behind them",
      body: [
        "Vent cleaning in Hollywood usually starts with the grilles, and in a city with this many repainted houses and apartments, the grilles have often been painted over, sometimes several times. A supply grille with its louvers half closed by paint throws less air than it should, and a painted return grille has lost part of its opening. Every grille comes off during a duct cleaning and is washed, and where paint has closed one up, we show you so you can decide whether to replace it.",
        "The return is the vent that matters most. In a condo it is usually a ceiling grille with the filter behind it. In a ranch house it is a large grille in the hallway or a wall, with the filter there or at the air handler. Either way, dust building up on the face of the grille or around its frame means air is passing the filter instead of going through it, and that is fixed with a filter that fits and a sealed frame, not by cleaning the vent.",
        "So a vent cleaning in Hollywood is the duct cleaning: grilles off and washed, every supply and return cleaned back to the air handler under negative air, the blower and coil face cleaned, $300 to $600 per system. The dryer vent is a separate job at $100 to $200, with its own Hollywood page further down.",
      ],
    },
  ],

  "delray-beach": [
    {
      heading: "Air duct cleaning services in Delray Beach: which job fits which home",
      body: [
        "Air duct cleaning services in Delray Beach covers several jobs, and the right one depends on the part of the city you live in. A full duct cleaning, $300 to $600 per system, reaches every run from the grilles back to the air handler and finishes on the blower and coil. Cleaning the air handler on its own is $200 to $450. Repair is quoted once a leakage test has shown the scope, starting at $250 and running past $2,000 for a full attic. Mold found inside the system is its own line as air duct mold removal, and sanitizing at $75 to $200 is added to a cleaning when the camera gives a reason.",
        "In a Kings Point condo or villa, the closet air handler and short runs mean the coil and drain are often most of the problem, and HVAC cleaning may be the right first step if the ducts look sound on camera. In a Lake Ida, Del-Ida Park or Osceola Park bungalow, with retrofit ducts routed through closets and low attics, the duct cleaning comes with a close look at every joint, because a separated connection in that kind of system has to be fixed before cleaning is worth the money. On Tropic Isle and the barrier island, the dampers and terminations are checked first.",
        "Dryer vent cleaning is a different job, $100 to $200, with a Delray Beach page of its own. Everything else is quoted before booking, each item on its own line, so you can turn any of them down.",
      ],
    },
    {
      heading: "Duct cleaning in Delray Beach's new and renovated homes",
      body: [
        "Downtown Delray has been rebuilding for years. Townhomes and condos have gone up around Pineapple Grove and on the blocks off Atlantic Avenue, and the older bungalows east of Swinton are being renovated one after another. Both leave the same thing inside the ducts: construction dust.",
        "During a build or a renovation the system is often run, or left open, while drywall is sanded, tile is cut and old plaster comes down. The fine dust goes into the returns and settles in the first runs past the air handler. New owners notice it as dust back on surfaces a day or two after cleaning, or sneezing that started the week they moved in. A cleaning after the last trade has left, not before, is the one that removes it.",
        "A newer townhome may have its air handler in a closet or up in the attic, and an attic unit takes longer to work on than a closet one. Each system is priced on its own. If the renovation took ceilings out, tell us when you call: new ceilings often mean new boots and reconnected runs, and those joints are worth checking while we are there.",
      ],
    },
  ],

  "coral-gables": [
    {
      heading: "Air duct repair in Coral Gables: finding the leak before anyone opens plaster",
      body: [
        "Air duct repair in Coral Gables starts from a constraint most cities do not have: much of the system cannot be seen without cutting into plaster. So the work starts with measurement and a camera rather than a demolition plan. The registers are taped off, a test fan reads how much air the duct system loses, and a camera goes in through the grilles and the plenum to find where it is going.",
        "In the older houses the leak is usually at a transition, where a run fed through a soffit or a closet chase changes direction or size, or at a boot where the duct meets a plaster ceiling and the seal has dried out over the decades. Many of those can be reached from the grille opening or from whatever attic space exists, and repaired with mechanical fasteners and mastic without opening anything. Where a section truly cannot be reached, you hear that before any plaster is touched, and a single access panel placed where it will not show usually beats opening a whole ceiling.",
        "In the post war slab houses near Riviera and Coral Bay the work is ordinary attic repair: flex reconnected at its collars, sagging runs strapped back up, torn jackets replaced. Repair is priced on scope after the test, from $250 to $2,000 and up, and the test runs again when the work is done, so the improvement is a number you can see. Coral Gables has its own duct repair page further down.",
      ],
    },
    {
      heading: "Home ventilation in Coral Gables: how air moves through an older house",
      body: [
        "Ventilation in an air conditioned house is the route air takes out of the supply grilles, through the rooms and back to the return, plus whatever outdoor air gets in along the way. In a Coral Gables house from the twenties, that route was never designed. The system was added after the fact, bedrooms close against a single return, and outdoor air arrives through casements and gaps rather than through anything controlled.",
        "Three things usually improve it without new equipment. Giving the bedrooms a way back to the return, with a transfer grille or an undercut door, lets supply air flow into a closed room instead of stalling. Sealing the gaps where duct chases pass through plaster stops the system drawing unfiltered air out of the walls. And measuring humidity room by room shows whether a closed wing or a guest suite is sitting much wetter than the rooms the family lives in.",
        "Our indoor air quality check does that measurement, with a camera on the ducts and the air handler and a photo report, for $200 to $500. We do not take air samples or send anything to a lab. If the answer turns out to be new equipment, such as a dehumidifier or a fresh air system, that is an HVAC contractor's work, and we will say so rather than sell you a cleaning in its place.",
      ],
    },
  ],

  sunrise: [
    {
      heading: "HVAC duct cleaning in Sunrise, FL: what one visit covers",
      body: [
        "HVAC duct cleaning in Sunrise covers both halves of the system on one visit. The duct side is every supply and return run, the trunks and the plenums, cleaned under negative air with each register sealed and each branch worked back to the trunk. The equipment side is the blower wheel and the face of the evaporator coil inside the air handler, cleaned before the cabinet is closed. A single system costs $300 to $600 and takes a crew of two most of a morning or an afternoon.",
        "In a Sunrise Lakes or Sunrise Golf Village unit, the short runs mean the duct side goes quickly and most of the time goes into the air handler, where the felted coil and the drain pan described above are found. If the camera shows the ducts are light, the AC and HVAC system cleaning at $200 to $450 on its own is often the better buy, and we will say so. In Welleby, Springtree and the houses toward Sawgrass, with flex across a hot attic, the duct side is most of the work, and the camera also looks for the separated connections that need repair rather than cleaning.",
        "One thing is not part of it: refrigerant checks and electrical work on the equipment. That is an HVAC contractor's tune up, and if we see a reason for one while the cabinet is open, it goes into the photo notes for you to pass along.",
      ],
    },
    {
      heading: "Air duct cleaning in Sunrise, FL: price by home, and offices near Sawgrass",
      body: [
        "Air duct cleaning in Sunrise is $300 to $600 per system. A one or two bedroom unit in Sunrise Lakes sits at the bottom of that range and is often done in a morning, and the association usually wants notice and proof of insurance before we go in. A three or four bedroom house in Welleby or Springtree with one air handler and a full attic of flex lands in the middle. A larger house with a second system is two prices.",
        "Where a home falls inside the range comes down to how many grilles it has, how much the camera shows and where the air handler sits. Growth on the coil or in the ducts is quoted separately as air duct mold removal before any more work is done, and sanitizing at $75 to $200 is added only when there is a reason. Dryer vent cleaning has its own Sunrise page, at $100 to $200.",
        "Sunrise also has offices around Sawgrass Mills and along the Sawgrass Expressway, and commercial duct cleaning there is a different job. It is quoted per site after a walkthrough, scheduled in the evening or at the weekend so the office keeps working, and finished with a written record of what was cleaned for the building file.",
      ],
    },
  ],

  plantation: [
    {
      heading: "Property managers and HOAs in Plantation: scheduling duct and vent work across many units",
      body: [
        "A good share of Plantation homes are looked after by someone other than the person living in them: villa and condominium associations, townhouse communities, and single family rentals run by a management company. Duct and vent work in those settings is mostly a scheduling question, and it helps to know how we book it.",
        "Inside a unit, the air handler and its ducts belong to the owner, so each unit is a residential job at the published $300 to $600 per system, booked with the owner or with a manager acting for the owner. What we can do for a manager is line the units up: several in the same building or row on the same day, one after another, with access, parking and any gate or elevator arrangements settled with the office once rather than unit by unit. Each unit gets its own before and after photos, so the record goes to the right owner.",
        "Common areas are a different job. A clubhouse, an office or a corridor served by the association's own equipment is commercial work, quoted per site after a walkthrough and scheduled around the association's rules on noise and access, often after hours. Dryer vents can be done on the same day at $100 to $200 each, and Plantation has its own dryer vent page further down.",
        "For rentals, the useful moment is the turnover between tenants. The unit is empty, nobody has to be home, and a cleaning between leases gives the next tenant a clean start, with photos on file if a complaint comes later. The office usually wants a certificate of insurance first, and we send it ahead.",
      ],
    },
    {
      heading: "Air duct cleaning in Plantation, FL: what it costs in each kind of house",
      body: [
        "Air duct cleaning in Plantation is $300 to $600 per system. The older houses on the east side, in Plantation Park and around Sunset Park, mostly run on one air handler and sit toward the bottom or the middle depending on the register count. The seventies and eighties houses in Jacaranda tend to be larger, with longer runs to the far bedrooms. The big houses in Plantation Acres can carry two or three systems, each priced on its own.",
        "The cleaning itself is the same across the city: every supply and return sealed, the system under negative air at the plenum, each branch cleaned back to the trunk, the blower and coil face cleaned, the grilles washed. In Plantation the central return described above is part of the inspection, because a kinked return duct or a grille painted half shut is often why the far bedroom never cools, and cleaning the supplies without dealing with it changes little.",
        "In the Acres the coil usually shows the load the filters have been carrying. If the camera shows growth on the coil or in the ducts, that is quoted as air duct mold removal on its own line. If it is mineral film and soil dust, the coil cleaning is part of the job. Either way you have the price before anything is booked.",
      ],
    },
  ],

  davie: [
    {
      heading: "HVAC duct cleaning in Davie: why the air handler gets as much time as the ducts",
      body: [
        "HVAC duct cleaning in Davie means the ducts and the air handler on the same visit, and in this town the air handler often needs it more. The fine dust from paddocks, arenas and sand drives that gets past a filter does not spread evenly through the ducts. Most of it hits the blower wheel first and then the wet face of the coil, where it sticks. A blower wheel with its blades packed with that dust moves noticeably less air, and the whole house feels it as weak airflow at every register.",
        "So on a Davie job the blower wheel and coil face are cleaned as part of the duct cleaning, at $300 to $600 per system, and where the coil needs more than its face cleaned, the AC and HVAC system cleaning at $200 to $450 covers the full coil, the blower, the cabinet and the drain line. On the horse properties and the large lots, the camera often finds the return side heavier than the supply side, because the return is where dust from the floor arrives first.",
        "Davie houses vary enough that the price depends closely on the house. A house in Forest Ridge with one air handler usually sits in the middle of the range. A large house on an acreage lot with two systems is two prices. A manufactured home with ducts in the floor is a different job, described above, and is quoted after we have seen whether the belly and the crossover are intact.",
      ],
    },
    {
      heading: "Air duct cleaning in Davie rentals near Nova Southeastern and Broward College",
      body: [
        "Davie has a large rental market around Nova Southeastern University and the Broward College campus, with townhomes, apartments and single family houses let to students and staff, often by owners who live somewhere else. Rentals like that turn over every year or two, and the air conditioning system is the part of the unit nobody looks at between tenants.",
        "What builds up in a student rental is what you would expect: dust and lint from a house full of people, pet hair, filters changed late or not at all, and returns blocked by furniture. A loaded filter in a house running the air all day sends dust around its frame and onto the coil, and by the time a new tenant complains about a smell or weak air, the coil and the blower are coated.",
        "The right time to clean is the gap between leases, when the unit is empty and nobody needs to be home. Each system costs $300 to $600, and the before and after photos go to the owner or the manager, which is useful if the next tenant reports a problem. Owners with several units nearby can book them for the same day, and anything the photos show that needs an HVAC contractor goes into the notes.",
      ],
    },
  ],

  "coral-springs": [
    {
      heading: "Air duct cleaning in Coral Springs, FL: one system or two, and what it costs",
      body: [
        "Air duct cleaning in Coral Springs is $300 to $600 per system, and the first question on the phone is how many systems the house has. Many of the single storey houses in Ramblewood and Westchester have one air handler, in the garage or an interior closet, and sit in the lower or middle part of the range. The two storey houses in Eagle Trace, Turtle Run and the later neighborhoods are split: some run both floors on one air handler, and some have a second unit for the upstairs, often in the attic. A second unit is a second system and is priced on its own.",
        "On the visit every register is sealed, the collection unit is hooked to the plenum, and each branch is cleaned back to the trunk, including the vertical trunk to the upstairs where there is one, then clean the blower wheel and coil face. Two technicians take two to four hours on a single system. An attic air handler takes longer to work around than one in a garage, which is part of why two system houses come in toward the top.",
        "A few things are quoted on separate lines, each one optional: growth on the coil or in the ducts, as air duct mold removal; sanitizing at $75 to $200 after a cleaning when there is a reason; and repair, priced after a pressure test, for the separated runs and joints that houses of this age tend to have. Dryer vents have their own Coral Springs page.",
      ],
    },
    {
      heading: "Duct cleaning in Coral Springs homes with children, pets and allergies",
      body: [
        "Coral Springs is a family city, and its houses are lived in hard: children, pets, laundry, and the air running all day. That changes the cleaning interval. Three to five years is the general guidance for a Florida home, and a Coral Springs house with a dog or two, a child with allergies, or a recent remodel belongs at the short end of it.",
        "Pet hair and dander collect first at the return grille and in the first few feet behind it, then on the blower wheel, which is why a house with pets often shows weak airflow before it shows dusty vents. In the children's rooms the supplies carry bedding lint, and those grilles tend to grey up first. The camera shows which of the two you have before anything is quoted.",
        "Two habits do more than any cleaning between visits. A filter of MERV 8 to 11, changed on schedule, catches most of what children and pets put into the air without starving the system, and a grille frame that fits keeps air from going around it. The return grille itself can be vacuumed every few weeks with a brush attachment, which keeps the first layer from ever reaching the blower. When the cleaning is due, you have the price before booking, and if the camera says it can wait, we tell you that too.",
      ],
    },
  ],
};
