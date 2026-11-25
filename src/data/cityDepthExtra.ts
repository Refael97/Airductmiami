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
    /* 25 Nov 2026: "air duct cleaning shore acres" 83 impressions at 10.5 in
       the 28 days to 22 Nov, no clicks. The page named Shore Acres in passing
       only; this block answers the neighborhood search directly. */
    {
      heading: "Air duct cleaning in Shore Acres, St. Petersburg",
      body: [
        "Air duct cleaning in Shore Acres starts with one question the rest of St. Petersburg rarely gets: did this house take water. Shore Acres sits low on the water in the northeast of the city, and many of its ranch houses had water inside during the 2024 storm surge. Where it reached the air handler closet or the ducts, cleaning is not the job.",
        "Flex duct and ductboard that sat in floodwater hold it in the insulation and the jacket, and no brush or vacuum gets it out. Those runs are replaced, and the air handler is judged on its own. We open a run, photograph what is inside and tell you which parts can be cleaned and which cannot, before any price is agreed.",
        "A Shore Acres house that stayed dry, or one that has already been rebuilt, is an ordinary visit: $300 to $600 per system, every supply and return under negative air, the blower wheel and the face of the coil, two to four hours. After a rebuild, the useful time to book it is once the drywall and the floors are finished, because the dust from that work is exactly what ends up in the new ducts.",
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

  /*
   * Added 4 November 2026, wave 3: English city pages with Search Console
   * impressions (28 days to 2 November) for queries the page did not yet
   * answer: "air duct cleaning boca raton", "duct repair boca raton" and "air
   * conditioning duct cleaning service boca raton"; "duct cleaning lake worth"
   * and "air duct cleaning lake worth beach"; "air duct cleaning services
   * greenacres" and "furnace cleaning greenacres"; "air duct cleaning orlando
   * cost", "residential duct cleaning orlando" and "air vent cleaning services
   * orlando"; "ac duct cleaning hillsborough county" and "air duct cleaning cost
   * tampa"; "air duct cleaning weston" and "hvac duct cleaning weston"; "air
   * duct cleaning jacksonville fl cost", "air duct cleaning service jacksonville
   * beach" and "air duct repair jacksonville"; "commercial duct cleaning in
   * winter park" and "air duct repair in winter park"; "air duct cleaning miami
   * beach". Dryer vent queries belong to each city's dryer vent page, so they
   * get one sentence here at most.
   */
  "boca-raton": [
    {
      heading: "Air conditioning duct cleaning in Boca Raton: price per system, from condo to country club house",
      body: [
        "Air conditioning duct cleaning, duct cleaning and air duct cleaning are one service in Boca Raton, priced at $300 to $600 for each system in the home, and where a home lands depends mostly on which side of I-95 it is on. A condominium east of the interstate, near the beach, on the Intracoastal or around Mizner Park, usually has one air handler in a closet and short runs to each room, and it sits toward the bottom. A house in Boca Del Mar, Broken Sound, Boca Woods or Millpond is more often two systems, one for each floor, and each one is priced on its own line.",
        "The upstairs system in those houses is the slower half of the day. Its air handler often sits in the attic, worked from a platform in the heat, which is part of why a two system house comes in near the top of the range. The method is the same on both, down to the blower wheel and coil face, with photos of the same spots before and after.",
        "A house that sat closed from May to November is worth calling about early. If the camera finds growth on the coil or in the ducts, that becomes air duct mold removal, priced on severity from $500 to $3,000 and up. Offices and medical suites around Glades Road are commercial work, quoted per site after a walkthrough and cleaned after hours.",
      ],
    },
    {
      heading: "Duct repair in Boca Raton: when the upstairs never cools",
      body: [
        "Most duct repair calls in Boca Raton come from the two storey houses west of the interstate, and the complaint is the same: the ground floor is comfortable and the bedrooms upstairs run warm whatever the thermostat says. Before anyone replaces an air handler over it, the ducts should be measured. We seal every register, pressurise the system with a calibrated test fan and read how much air it loses, then run the same test after the work so you have two figures to compare.",
        "In the houses built between the mid eighties and 2000, the test and the camera usually find the original R-6 flex with a jacket gone brittle, joints where the mastic has let go, and runs slumped between the trusses. When the damage is at the joints, reconnecting collars with straps and fresh mastic and hanging the runs back on proper supports is often a few hours of work, at the low end of the $250 to $2,000 and up range. When the jacket is cracking along whole runs, the honest answer is new flex for that system, and that is the top of it.",
        "The attic air handler gets the same scrutiny. A cabinet whose seams have opened draws attic air straight into the blower, and sealing it is part of the repair. Where a house needs repair and cleaning both, the repair goes first, since clean ducts still pulling from the attic refill within months. And if the numbers show tight ducts, we tell you that, because then the upstairs equipment is the next thing for an HVAC contractor to check. The dryer vent is a separate $100 to $200 job with its own Boca Raton page.",
      ],
    },
  ],

  "lake-worth": [
    {
      heading: "Air duct cleaning in Lake Worth Beach: what it costs in a cottage, a divided house or a ranch house",
      body: [
        "Air duct cleaning in Lake Worth Beach is priced per system at $300 to $600, and the city's housing makes the per system part worth spelling out. A cottage in College Park, Bryant Park or downtown usually has one small air handler and only a handful of registers, which puts it near the bottom of the range. Its runs, though, were fitted into closets, soffits and sometimes the crawl space long after the house was built, so reaching each one can take longer than the register count suggests. A house divided into two or three units may have a system for each unit or one system shared between them, and that is the first question on the phone, because it decides whether there is one price or several.",
        "Out toward Lake Osborne the houses are later and more conventional: a slab, an air handler in a closet or the garage, and flex across the attic. Those land in the middle of the range and clean the way most Palm Beach County houses do, with two technicians in two to four hours.",
        "This close to the ocean the coil is often the real complaint rather than the ducts. When the camera shows clean runs and the smell comes from a salted, wet coil, the AC and HVAC system cleaning at $200 to $450 is the right job and the cheaper one. And if a cottage is cooled by window units or a ductless system, there is nothing for a duct cleaning to do, and we will tell you so rather than book a visit.",
      ],
    },
    {
      heading: "Duct cleaning in Lake Worth when the runs are under the floor or inside a soffit",
      body: [
        "In the older parts of the city the ducts are rarely where people expect them. Some cottages raised on piers have runs in the crawl space feeding floor registers. Others carry the supply through a dropped soffit over a hallway or above the kitchen cabinets, with one return grille in a closet door. Neither is visible from a room, so a Lake Worth Beach visit starts with a camera through the grilles and the plenum before anything is quoted as a cleaning.",
        "Under the floor, what the camera finds decides the job. A run that is dusty but intact is cleaned from the register back to the trunk like any other. A run that has dropped off its fitting, been flattened by whatever was stored under the house, or picked up moisture from the ground is a repair, because it keeps blowing into the crawl space or drawing from it however clean it is. Repair is quoted after a leakage test, from $250 to $2,000 and up, and a soaked run is replaced rather than cleaned.",
        "For landlords the useful part is the record. Each visit ends with before and after photos of the same places, so an owner who does not live in the building can see what was done in each unit, and a tenant who reports a smell later has something to compare it with. Dryer vents, which here usually end up in a converted porch or a back room, have their own Lake Worth Beach page.",
      ],
    },
  ],

  greenacres: [
    {
      heading: "Furnace cleaning in Greenacres: what that means for a Florida air handler",
      body: [
        "A furnace cleaning in Greenacres is really an air handler cleaning, because a gas furnace is a rare find in a Palm Beach County house. The cabinet in the garage or the hall closet of a seventies or eighties block house holds a blower, an evaporator coil and a row of electric heat strips. Where the outdoor unit has been replaced with a heat pump, the strips only back it up on the coldest nights.",
        "The strips are the part that acts like a furnace, and they are also the part left idle longest. Dust settles on them from spring to the first cold front, and the night the heat first comes on it burns off and the house smells of it for a while. Once a season that is normal. A smell like melting plastic, a breaker that trips, or a smell that returns every time the heat runs is an electrical fault for an HVAC contractor, and the heat should stay off until then.",
        "What a furnace cleaning should mean here is our AC and HVAC system cleaning, $200 to $450 per air handler: the cabinet and the strip compartment vacuumed, the blower wheel and housing cleaned, the coil cleaned, and the condensate drain flushed. In the older houses the cabinet is often the second or third one set on the original return, so we check that the return still seals to it, because a gap there feeds garage or attic dust straight onto the strips and the coil. If your house does have a gas furnace, its burner and heat exchanger are for an HVAC contractor, and the blower and ducts are still ours.",
      ],
    },
    {
      heading: "Air duct cleaning services in Greenacres: matching the job to a thirty year old system",
      body: [
        "Air duct cleaning services in Greenacres covers several separate jobs, and in houses of this age the order they are done in matters as much as which ones are chosen. Duct cleaning, $300 to $600 per system, takes in every supply and return, the trunks and the plenum, along with the blower wheel and coil face. Air handler cleaning on its own is $200 to $450. Duct repair is quoted after a pressure test, from $250 to $2,000 and up. Growth inside the ducts or the air handler is air duct mold removal, from $500 to $3,000 and up by severity, and sanitizing at $75 to $200 follows a cleaning only when there is a reason for it.",
        "In a single storey house in Original Greenacres, Rainbow Lakes or Pine Ridge still on its first attic flex, the camera usually decides whether cleaning or repair comes first. Sagging runs and dried out joints lose air into the attic and pull attic dust back through the same gaps, so cleaning those ducts before they are reconnected and sealed only buys a short break. Where the runs are sound, the cleaning goes ahead the same day.",
        "In the low rise condominiums the answer is usually smaller: the coil and drain, and a look at where your duct meets anything the association owns. If none of these jobs is due yet, you hear that too, along with what would change our mind.",
      ],
    },
  ],

  orlando: [
    {
      heading: "Air duct cleaning cost in Orlando: what moves a system up or down the range",
      body: [
        "Air duct cleaning in Orlando costs $300 to $600 per system, and the house sets the figure rather than the zip code. A single storey house in Conway or College Park with one air handler and ten or twelve registers usually falls in the lower or middle part of the range. A two storey house in Lake Nona, Baldwin Park or Horizon West may run both floors from one air handler or have a second unit for the upstairs, and a second unit is a second system with its own price. The larger houses in Dr. Phillips often have two or more.",
        "Inside the range, three things move the number: how many registers the system feeds, how much the camera shows in the trunk and branches, and how hard the air handler is to reach. A garage unit on a stand is quick to open up. An attic unit over a second floor, or a closet unit in an older College Park house that was fitted wherever it would go, takes longer.",
        "Some things are priced separately so you can decline them. A short term rental closed between bookings often shows growth on the coil, and that is quoted as air duct mold removal, $500 to $3,000 and up by severity. Sanitizing is $75 to $200 and only ever follows a cleaning. If the ducts are clean and the smell is the coil, the AC and HVAC system cleaning at $200 to $450 replaces the duct cleaning rather than adding to it. Leaking or kinked runs are repair work, which Orlando has its own page for.",
      ],
    },
    {
      heading: "Residential duct and air vent cleaning in Orlando: what happens at the vents",
      body: [
        "Air vent cleaning in Orlando is usually booked because of something on the ceiling. In the newer subdivisions it is often a grey fan of dust on the paint around a supply grille. That pattern is rarely dirt blowing out of the vent. It is air slipping around a boot that was never sealed to the drywall, pulling attic dust through the gap and printing it on the ceiling, and it returns after every wipe until the boot is sealed.",
        "So a residential vent cleaning here is the whole system: every grille removed and washed, each boot checked where it meets the ceiling, each branch cleaned back to the trunk under negative pressure, and the blower and coil face cleaned last. Loose boots are photographed and sealed as a repair item you approve first. In College Park and Delaney Park the return grille gets its own look in spring, when oak pollen loads the filter and whatever slips past it lands on the coil.",
        "Residential and commercial work are booked differently. A house, condo or townhome is priced per system before the visit and done in a morning or an afternoon. An office, a medical suite or a shop is commercial duct cleaning: we walk the site first, quote it in writing, and clean in the evening or at the weekend so the space stays open. Orlando's dryer vents have their own page.",
      ],
    },
  ],

  tampa: [
    {
      heading: "Air duct cleaning cost in Tampa: bungalow, slab house or tower",
      body: [
        "Air duct cleaning in Tampa costs $300 to $600 per system. A condominium in one of the downtown or Channel District towers usually has a closet air handler and short runs, and it sits at the bottom of the range. A single storey slab house in Carrollwood with one system across the attic falls in the middle. A two storey house in New Tampa or Westchase with a second air handler for the upstairs is two systems and two prices.",
        "The raised bungalows of Seminole Heights, Tampa Heights and parts of Hyde Park are priced the same way and worked differently. The registers are in the floor and the runs are in the crawl space, so part of the job is done from under the house through the access hatch. The camera matters more there than anywhere else in the city, because a run separated at a joint or flattened under the floor needs repair before it is worth cleaning, and Tampa has its own duct repair page for that.",
        "Three things are quoted on separate lines and can be turned down: growth on the coil or in the ducts, which is air duct mold removal at $500 to $3,000 and up; sanitizing at $75 to $200 after a cleaning when there is a reason; and a coil and blower cleaning alone, $200 to $450, when the ducts are clean and the smell is coming from the air handler. Dryer vents have their own Tampa page.",
      ],
    },
    {
      heading: "AC duct cleaning in Hillsborough County, from Town 'n' Country to Riverview",
      body: [
        "AC duct cleaning is what most people in Hillsborough County call air duct cleaning, and it is the same service at the same price wherever in the county the house is. What changes across the county is the house. Town 'n' Country is largely single storey slab houses from the sixties and seventies, often still on their original duct layout behind a newer air handler, so the camera there tends to find sagging runs and old taped joints alongside the dust.",
        "Riverview, east of the city, and the subdivisions toward the Pasco line are newer, with younger ducts and different buildup: drywall dust in a house under ten years old, pet hair and lint in one that has been lived in hard. Those are standard cleanings, two technicians and two to four hours for each system.",
        "Water is the exception across the whole county. Houses near the bay in South Tampa took surge in the 2024 storms, and others have taken water from flooding or a roof leak. Wet insulation inside a duct jacket does not dry out and is not cleaned; it is replaced. If your house took water, tell us when you call, and the ducts are inspected with a camera before any cleaning is quoted.",
      ],
    },
  ],

  weston: [
    {
      heading: "HVAC duct cleaning in Weston: the ducts and both air handlers",
      body: [
        "HVAC duct cleaning in Weston means the duct system and the equipment that pushes air through it, cleaned on the same visit. The supply and return runs, the trunks and the plenums are cleaned with every register sealed and the system under negative pressure, and before the cabinet is closed the blower wheel and the face of the coil are cleaned as well. In a city where coils stay wet for long hours because of the background humidity, leaving the air handler out would leave the likeliest source of a smell in place.",
        "Most two storey houses in Weston have two air handlers, and they rarely need the same thing. The downstairs one, in the garage or a closet, is usually the easier of the two. The upstairs one often sits in the attic, with its drain line running above a ceiling and a secondary pan under the unit, and the pan and the line get a look on every visit, because a blocked drain up there ends as a stain on the ceiling below.",
        "Each air handler is its own system: $300 to $600 for a duct cleaning, or $200 to $450 for the AC and HVAC system cleaning when the ducts look light on camera and the coil is the real problem. Refrigerant and electrical work stay with your HVAC contractor, and anything we see that needs one, such as a rusted pan, is photographed for you.",
      ],
    },
    {
      heading: "Air duct cleaning in Weston: what twenty five summers in the attic do",
      body: [
        "Weston is no longer new. The houses in Indian Trace, Savanna and Weston Hills that went up from the late eighties onward have had twenty five or more summers in an attic that reaches 120 degrees, and the flexible duct in them is at the age where the outer jacket cracks and the joints loosen.",
        "That changes what a cleaning visit is for. The camera goes into each trunk and branch before the cleaning starts, and in houses of this age it often finds a run slumped between the trusses, a collar pulled off at the plenum, or a jacket split along its length. Those are photographed and quoted as repair after a pressure test, from $250 to $2,000 and up, and a run that is blowing into the attic is repaired before it is cleaned.",
        "The price follows the system count. A townhouse in Bonaventure with one air handler sits low in the $300 to $600 range. A two storey house in Savanna or The Ridges is usually two systems, and the large houses in Windmill Ranch Estates can have more than two, each priced on its own and all of it settled on the phone before the day. The dryer vent, often a second floor run up to the roof here, has its own Weston page.",
      ],
    },
  ],

  jacksonville: [
    {
      heading: "Air duct cleaning cost in Jacksonville, FL, and when it needs repair instead",
      body: [
        "Air duct cleaning in Jacksonville costs $300 to $600 per system, and the house decides where it lands. A slab house in Mandarin or on the Southside with one air handler in the garage and ducts in the attic usually falls in the middle. A house in Riverside, Avondale, San Marco or Ortega with floor registers and runs in the crawl space takes longer, because part of the job is done from under the house. A larger house with one system for each floor is two prices.",
        "Jacksonville heats in earnest, so the equipment varies more than it does further south. With a heat pump, the air handler is cleaned as it would be anywhere: the blower wheel, coil face and cabinet along with the ducts, or the full coil, blower and drain as an AC and HVAC system cleaning at $200 to $450. With a gas furnace, the ducts, the blower compartment and the cooling coil fitted to it are ours to clean, while the burner, the heat exchanger and the flue are work for an HVAC contractor, and the quote says so.",
        "Air duct repair is quoted separately, from $250 to $2,000 and up, after a pressure test with the registers sealed. The two cases we see most here are crawl space runs in the historic districts that have separated or been crushed, and attic joints that have worked loose from years of swinging between summer cooling and winter heating. A run leaking into a crawl space or an attic is fixed before it is cleaned, and the test is repeated afterwards so you see the difference as a number.",
      ],
    },
    {
      heading: "Air duct cleaning service in Jacksonville Beach and the Beaches",
      body: [
        "Jacksonville Beach, Neptune Beach and Atlantic Beach sit across the Intracoastal Waterway from the rest of the city, right on the ocean, and the air there behaves more like a coastal town's than like Mandarin's. Salt reaches the outdoor unit first and the indoor coil through any gap in the return, and a coil carrying salt and dust stays wet longer after each cycle. Near the ocean that is a more common source of a musty smell at start up than the ducts.",
        "Housing at the Beaches comes in three broad kinds. The condominium buildings facing the ocean usually have a closet air handler and short runs, and the coil and drain line are most of the work: the AC and HVAC system cleaning, $200 to $450, with the duct cleaning added when the camera shows buildup. The older beach houses on the streets behind the oceanfront have often been remodeled more than once, and the full duct cleaning at $300 to $600 per system is the usual job. The newer townhomes and rebuilt houses often have two systems, each quoted on its own.",
        "Two things get checked on any Beaches visit. Exterior dampers and terminations corrode quickly in salt air and can stick open, letting humid air sit in the duct overnight, so we look at them before cleaning. And a condominium association will usually want our certificate of insurance before a crew goes into a unit, so it goes to the office ahead of the day.",
      ],
    },
  ],

  "winter-park": [
    {
      heading: "Air duct cleaning and air duct repair in Winter Park: which the house needs",
      body: [
        "Air duct cleaning in Winter Park costs $300 to $600 per system. A condominium or newer townhome near Park Avenue, with a closet air handler and short runs, sits at the low end. A house in Winter Park Pines with one system across the attic lands in the middle, and a larger lakefront house with a second system is two prices. In the older houses around Hannibal Square and Orwin Manor, where the ducts were fitted after the house was built, reaching each run takes longer than the size of the house suggests.",
        "The camera usually settles whether the job is cleaning, repair or both. Cleaning is right when the runs are intact and carrying pollen, leaf debris and household dust, which the oak canopy supplies every spring. Repair is right when one room never reaches temperature, the bill has climbed on the same settings, or the camera finds a run through an unconditioned knee wall that has come apart at a joint. Repair is quoted after a pressure test, from $250 to $2,000 and up, the test is repeated when the work is done, and Winter Park has its own air duct repair page that goes further into it.",
        "Where both are needed, the joints are fixed first. A retrofit run still drawing from the attic or a wall cavity refills with that dust within a season, and cleaning it beforehand is wasted. Dryer vents in Winter Park, often long interior runs to the roof, have a separate page.",
      ],
    },
    {
      heading: "Commercial duct cleaning in Winter Park: offices, shops and restaurants",
      body: [
        "Most of Winter Park's commercial space is small: shops, restaurants and professional offices along Park Avenue and the streets around it, medical and dental suites, and offices along Fairbanks and Aloma. Many of them run on several split systems or rooftop units rather than one large plant, each with its own ductwork, and each is cleaned as its own section.",
        "Commercial duct cleaning is quoted per site rather than per register. We walk the building first, looking at each system, the access above the ceiling and on the roof, and the hours you need kept clear, and you get a written scope and price before anything is booked. The work is done after hours: an office in the evening or at the weekend, a shop after closing, a restaurant dining room between the last service and the next morning. We clean the air conditioning ductwork and the blower compartments of the units in the scope. A restaurant's kitchen hood and grease duct are a separate trade under NFPA 96, and we do not do them.",
        "At the end you get before and after photos of the same locations, a list of the systems and areas cleaned, anything we could not reach and why, and notes on anything that needs your HVAC contractor. A landlord can keep it on file and show it to a tenant who asks what was done. An apartment above a shop on its own system is booked as a residential cleaning at the published price.",
      ],
    },
  ],

  "miami-beach": [
    {
      heading: "Air duct cleaning in Miami Beach: what it costs in a condo, a walk up or a house on the islands",
      body: [
        "Air duct cleaning in Miami Beach is $300 to $600 per system, and most systems here are small. A condo in a tower on Collins or a walk up apartment around Flamingo Park usually has a closet air handler, one return grille in the hallway and a few short supply runs, and it sits at the bottom of the range. Because the runs are short, most of the time goes into the air handler, where the coil and blower collect the salt and dust that a barrier island delivers.",
        "Houses are the other end of the range. On the Sunset Islands, the Venetian Islands and the residential streets of Mid-Beach, a larger house may run two or three air handlers, and each one is a separate system with its own figure. A house of any size whose air handler sits in a hard to reach attic or a tight mechanical closet takes longer, and that shows in where it falls.",
        "Two other prices come up often. When the camera shows clean ducts and the smell is the coil, the AC and HVAC system cleaning at $200 to $450 replaces the duct cleaning. Sanitizing at $75 to $200 follows a cleaning only when there is a reason for it. Each is quoted before the visit, on its own line. The dryer vent, usually tied into a building riser here, has its own Miami Beach page.",
      ],
    },
    {
      heading: "Mold in AC ducts in Miami Beach: what we remove and what we do not",
      body: [
        "A Miami Beach unit closed for the summer often comes back in the autumn with the smell that sends owners searching for mold in the ducts. Inside the system, growth usually starts on the coil, in the drain pan and along the first stretch of supply duct, where cold metal meets humid air. Removing it is our air duct mold removal service, priced on how far it has spread, from $500 to $3,000 and up. It covers cleaning the affected parts of the air handler and ducts, treating them, and finding the moisture source behind the growth.",
        "Growth on the drywall, inside a wall cavity or on the framing around the closet is a different matter. That is separate licensed work in Florida, and we tell you so rather than treat it. We also do not take air samples or send anything to a lab. What we offer when you want to know before committing to anything is our indoor air quality check at $200 to $500: humidity readings room by room, a camera on the coil and the ducts, and a photo report you can pass to the association.",
        "The cleaning only holds if the humidity is dealt with. A unit left at 80 degrees with nothing controlling moisture will grow again by the next autumn, so the report ends with the setting or the equipment change that would stop it, and who would install it if that is not us.",
      ],
    },
  ],

  /*
   * Added 14 November 2026, wave 5: twelve English city pages that had never
   * been given extra depth and were sitting at positions 7 to 25 in the owner's
   * Search Console export (top 1,000 queries): "air duct cleaning north miami",
   * "air duct cleaning north miami beach", "air duct cleaning aventura", "air
   * duct cleaning pinecrest", "air duct repair pinecrest" and "home ventilation
   * services pinecrest", "air duct cleaning cutler bay", "air duct cleaning
   * doral", "air duct cleaning miramar fl" and "duct cleaning miramar", "air
   * duct cleaning palm beach gardens", "air duct cleaning wellington", "duct
   * cleaning lehigh acres", "air duct cleaning cape coral", "ac vent cleaning
   * cape coral fl" and "air duct repair company cape coral fl", and Miami
   * Lakes. Each pair answers the price by type of home and one local question
   * the existing depth did not cover. Written per city.
   */
  "north-miami": [
    {
      heading: "Air duct cleaning in North Miami: what it costs for a house, a duplex or a condo",
      body: [
        "Air duct cleaning in North Miami is $300 to $600 per system, and the type of home sets most of where it lands. A single storey block house in Griffing Park, Sunkist Grove or Cloverleaf usually has one air handler in a hallway closet or the garage, eight to twelve registers and a shallow attic. It sits in the lower half of the range, and what moves it up is the attic: getting a hose to every boot under a low pitched roof is slow work.",
        "A duplex is two systems more often than one, because each side normally has its own air handler and thermostat. Each is priced on its own line, and an owner can have both done on the same visit, ideally between tenants when the rooms are empty. The larger houses on Keystone Point and in Sans Souci Estates are where a second system, for an addition or an upstairs, is most likely.",
        "An apartment or condo along Biscayne Boulevard, with a closet air handler and short runs above the ceiling, sits at the bottom. If the camera shows clean ducts and the smell is coming from the coil, the AC and HVAC system cleaning at $200 to $450 is the better job, and that is what we quote. Where the plenum is old duct board that has started to shed, we photograph it and quote its replacement as duct repair rather than brush it harder.",
      ],
    },
    {
      heading: "Duct cleaning after a renovation in North Miami: terrazzo, drywall and the hallway return",
      body: [
        "Many of the fifties and sixties houses in North Miami are being renovated now, and the work follows a pattern. The tile or carpet laid over the original terrazzo comes up, the terrazzo is ground and polished, walls are opened for new wiring, and the kitchen is gutted. Every one of those jobs makes fine dust, and in a house with one central return in the hallway, that grille is the closest opening to all of it.",
        "If the system runs during the work, the return pulls the dust past a filter that was never meant for that load, and much of it settles on the coil, in the blower and along the supply runs. Dry polishing throws a very fine stone powder that settles in the low points and stays there. The cheapest protection comes before the work starts: switch the system off on the dustiest days, cover the return and the supply grilles with plastic, and change the filter as soon as the floors are finished.",
        "The cleaning belongs at the end of the renovation, once the last sanding is done. A duct cleaned while the drywall crew is still working is a duct cleaned twice. It is the ordinary visit at the ordinary price, $300 to $600 per system, with photos before and after. If the renovation moved a wall or added a room, tell us when you call: a supply that now feeds a closet, or a room with no way back to the return, is easier to fix while the ceiling is open.",
      ],
    },
  ],

  "north-miami-beach": [
    {
      heading: "Air duct cleaning in North Miami Beach: the price for each type of home",
      body: [
        "The range is $300 to $600 per system, and the common homes in North Miami Beach fall into it in a predictable way.",
        "A single storey block house in Fulford or Highland Village, with one air handler and a hallway return, is one system and usually sits in the lower half. The runs in those attics are short and the register count is modest, but the attics are shallow, and a house whose plenum or trunk is still the original duct board takes longer. That material is cleaned with soft brushes and care, not with the rotary heads used on sheet metal and flex, because a hard brush tears the surface it is meant to clean.",
        "The waterfront houses in Eastern Shores are larger, and many have had a room or a second floor added since they were built, so two systems is common there. Each is priced separately, and you hear both numbers before booking. Condo and apartment units along NE 163rd Street and the Intracoastal sit at the bottom of the range, and for many of them the coil and drain pan cleaning at $200 to $450 is the right job instead of the ducts.",
        "Sanitizing, at $75 to $200, is offered only after a cleaning and only with a reason for it. The dryer vent is $100 to $200 on the same visit, with the hose behind the machine included.",
      ],
    },
    {
      heading: "Duct board in North Miami Beach: when to clean it and when to replace it",
      body: [
        "Many North Miami Beach houses from the fifties and sixties got central air with plenums, and sometimes whole trunks, made of fibreglass duct board: rigid panels with a foil face on the outside and bare fibreglass inside. Board in good condition is a perfectly good duct. The question is what shape it is in after fifty or sixty years, and the camera answers that before anyone quotes.",
        "Board that can be cleaned has a smooth, firm inner surface, sound seams and foil tape that still holds on the outside. Board that should be replaced shows exposed, fraying fibre, a darkened and pitted surface where the air hits it hardest at the turns, seams opening along their length, or a soft patch where water got in from a leaking pan above it. Brushing eroded board only puts more fibre into the air, so at that point we stop, photograph it and tell you.",
        "Replacement is quoted as duct repair, priced on scope from $250 to $2,000 and up after a pressure test. A single supply plenum sits toward the lower part of that range, and a whole trunk through a shallow attic sits higher. If a new air handler is going in soon, ask the HVAC contractor to replace the plenum while the old unit is out, which is easier then, and have the branches cleaned afterwards. If the board is sound, you hear that too, and it is cleaned like any other duct.",
      ],
    },
  ],

  aventura: [
    {
      heading: "Air duct cleaning in Aventura condos: what it costs and what you are paying for",
      body: [
        "Most Aventura units have one closet air handler and short runs, so most are one system at the lower end of $300 to $600. Larger units, the penthouses and combined units in the towers around Turnberry, Williams Island and Porto Vita, sometimes run two air handlers, one for the bedrooms and one for the living space, and each of those is its own line on the quote.",
        "Because there is so little duct, the useful question in Aventura is which job to buy. If the camera finds the supply runs clean and the trouble is in the coil, the drain pan and the blower wheel, our AC and HVAC system cleaning at $200 to $450 covers exactly those parts, and it is the honest recommendation. If the runs above the ceiling are carrying dust and kitchen grease, which happens when the return sits near the kitchen, the full duct cleaning is the job, and it includes the blower and the coil face anyway. You get one recommendation and one price, not both stacked on top of each other.",
        "Two other lines come up here. Sanitizing at $75 to $200 follows a cleaning only when there is a reason for it. Visible growth found at the coil or inside the ducts is quoted as air duct mold removal, priced on severity from $500 to $3,000 and up, and you decide before anything is done. The in unit dryer run is $100 to $200 and has its own Aventura page.",
      ],
    },
    {
      heading: "Booking duct cleaning in Aventura while you are out of town",
      body: [
        "A good share of Aventura owners are away between May and November, and the best time to have the unit cleaned is a few weeks before they come back, not the week they arrive and notice the smell. None of it needs you to be there.",
        "What it does need is arranging through the building. We send the certificate of insurance to the management office, book the service elevator for a weekday inside the building's working hours, and arrange entry through the front desk or whoever holds your key. Tell us the unit number, how many air handlers it has and where the closet is, and the price is agreed by phone before anything is scheduled, so nobody has to approve a number at the door.",
        "Before the day, the air handler closet has to be emptied if it has been used for storage, which in a condo it often has, because the unit is worked from the front and the filter grille from below. A single closet system takes a morning. The walkthrough is done with whoever let us in, and the before and after photos of the coil, the pan and the supply runs can be sent to you as well. If the thermostat was left high all summer, ask us to note the state of the drain pan and the setting it was on, so the next summer does not undo the work before you are back.",
      ],
    },
  ],

  pinecrest: [
    {
      heading: "Air duct repair in Pinecrest: what gets tested and what gets fixed",
      body: [
        "Air duct repair in Pinecrest starts with a number rather than a guess. Every register on the system is sealed, a calibrated test fan pressurises the ducts, and the reading shows how much air the system loses before it reaches a room. In a house with two or three systems each one is tested on its own, because the leak behind a hot bedroom usually belongs to one system and not the others. A camera then goes in to find where the air is going.",
        "The findings follow the houses. On the long horizontal runs of a wide ranch house, the usual repairs are collars pulled off their fittings, runs hung on too few straps and sagging between the joists, and jackets torn where someone crawled over them to reach the far side of the attic. On an addition, the repair is often a new, properly sized run from the trunk to replace a branch tapped off the nearest duct. Reconnected joints get metal straps and mastic rather than tape, new runs go in at R-6 to R-8, and the test is run again afterwards so you have both figures.",
        "Repair is priced on scope, from $250 to $2,000 and up, with the price before any work. Where a system needs repair and cleaning both, the repair goes first. We do not sell or install air conditioning equipment, so when the test shows tight ducts and the room is still hot, we tell you the equipment is the next thing for an HVAC contractor to check. Pinecrest has its own duct repair page further down.",
      ],
    },
    {
      heading: "Home ventilation services in Pinecrest: exhaust, fresh air and where the air really goes",
      body: [
        "Ventilation in a large Pinecrest house is more than the air conditioning. It is every path air takes in and out: the bathroom and kitchen exhaust, the dryer vent, the fresh air intake some newer houses have on the return, and the gaps the system pulls through when nobody meant it to. In a house rebuilt or fitted with impact windows, those paths matter more, because the tighter house no longer leaks enough to hide a problem.",
        "Three things turn up most often. Bathroom exhaust fans whose duct ends in the attic rather than at a roof or soffit outlet, which puts shower moisture straight onto the attic ducts. A fresh air intake whose damper has stuck open, letting humid outdoor air into the return around the clock. And a kitchen hood that recirculates instead of venting outside, sending cooking grease to the nearest return.",
        "Our indoor air quality check, at $200 to $500, traces those paths: humidity read room by room, including the guest wing and the pool house, a camera on the ducts and each air handler, and a photo report of every exhaust that does not end outside. We do not take air samples or send anything to a lab. Rerouting an exhaust or fitting a dehumidifier or fresh air unit is work for an HVAC contractor, and we say so rather than sell you a cleaning in its place.",
      ],
    },
  ],

  "cutler-bay": [
    {
      heading: "Air duct cleaning in Cutler Bay: what it costs in Saga Bay, Lakes by the Bay or a townhome",
      body: [
        "Air duct cleaning in Cutler Bay is $300 to $600 per system, and the housing here splits into clear types. The older single storey houses in Cutler Ridge, Saga Bay and Bel Aire usually have one air handler, in a hallway closet or the garage, with the ducts in a low attic. They sit in the lower half of the range unless the attic is hard to move through or the system has never been cleaned.",
        "Lakes by the Bay went up after Andrew, and its houses are larger, many of them two storey. Some run one system for both floors and some have a second air handler for the upstairs. Each system is priced on its own, and the upstairs one, in a closet or the attic, is usually the slower half of the day. Townhomes and the condos off Old Cutler Road are typically one closet unit with short runs, toward the bottom of the range.",
        "What moves any of them up is what the camera finds. A house that took water in a storm and kept its ducts has them opened first, and insulation that was soaked is replaced as duct repair, priced on scope from $250 to $2,000 and up. Growth inside the air handler or the ducts is quoted as air duct mold removal, from $500 to $3,000 and up. You see the photos and the price before anything beyond the cleaning is done.",
      ],
    },
    {
      heading: "AC smell after a power outage in Cutler Bay: the garage, the generator and the return",
      body: [
        "After a storm, Cutler Bay can go days without power, and the calls that follow are about a smell when the air comes back on. Two things cause most of them. The first is the system sitting off in summer heat: the coil and the pan stay wet with nothing drying them, and what grows there is the first thing the blower sends out. The second is the garage.",
        "In many houses here the air handler sits in the garage, on a return platform or in a closet with its return grille on the garage side. If the platform or the cabinet seams are not sealed, the system draws part of its air from the garage, which during an outage is where the fuel cans, the generator and the car are. That is a comfort problem on a normal day and a safety problem after a storm. A portable generator belongs outdoors and well away from doors and windows, never in the garage even with the door open, and a battery carbon monoxide alarm near the bedrooms is worth having whatever else you do.",
        "Sealing a leaking return platform or cabinet is duct repair, quoted on scope from $250, and in these houses it is often the most useful thing we do. If the smell after an outage comes from the coil and the pan, the AC and HVAC system cleaning at $200 to $450 covers them. If it is in the ducts, the cleaning is $300 to $600 per system. We look first and tell you which.",
      ],
    },
  ],

  doral: [
    {
      heading: "Air duct cleaning in Doral: price for an apartment, a townhome or a house",
      body: [
        "Air duct cleaning in Doral is priced per system, $300 to $600, and most homes in the city are one of three types. An apartment in a mid-rise around Downtown Doral or CityPlace Doral usually has a closet air handler and short runs, and it sits at the bottom of the range. A townhome is often two systems, one per floor, each priced on its own. A single family house in Doral Isles, Islands at Doral or Costa del Sol has more registers and one or two systems, which puts each one toward the middle or the top.",
        "In the newest buildings the first cleaning is mostly removing what the construction left, and it is the one where the difference shows most. In the older houses of Doral Park and the streets built before the city incorporated in 2003, the camera is also looking for sagging flex and joints that have let go, and a run that is off its collar is quoted as repair rather than cleaned. If the complaint is a smell and the ducts look clean, the coil and pan cleaning at $200 to $450 is the job instead.",
        "Many Doral homes are rented, and for an owner the useful version of this is the turnover visit: the unit is empty, the closet is clear, and the before and after photos of the coil and ducts go in the file for the next lease. The price is the same, and you have it before we book.",
      ],
    },
    {
      heading: "Commercial duct cleaning in Doral: offices, showrooms and the office inside the warehouse",
      body: [
        "Doral is one of the busiest warehouse and logistics districts in Miami-Dade, a short drive from the airport, and much of its commercial work is not the warehouse at all but the office inside one: a mezzanine or front office, a showroom, a training room or a break room, each on its own rooftop or split system.",
        "Those spaces collect a particular load. Forklift traffic, cardboard and pallet dust from the floor travel into an office whose return is often a ceiling grille a few feet from the warehouse door. The filter loads fast, the ducts above the drop ceiling take the overflow, and staff notice dust on the desks and a stale smell that comes back the day after the cleaners have been.",
        "Commercial work is quoted per site rather than per register, after a walkthrough, because the number of systems, how the ducts are reached above the ceiling and what is inside them all move the price. You get the scope and the price in writing before anything is booked. The work is scheduled after hours so the office stays open, and if the crew finds something outside the agreed scope, you hear about it before any extra work is done. For a showroom or office with its own small system, the price can be as simple as a house: one system, one figure.",
      ],
    },
  ],

  miramar: [
    {
      heading: "Duct cleaning in Miramar FL: what it costs on the east side and the west side",
      body: [
        "Duct cleaning in Miramar is $300 to $600 per system, and which side of the city the house is on is a fair guide to where it lands. In Historic Miramar, east of University Drive, the typical house is single storey on a small lot with one air handler and short runs. It sits in the lower half of the range, and the time goes into a tight attic rather than a long register count.",
        "West of the turnpike, in Riviera Isles, Vizcaya, Silver Lakes, Monarch Lakes and Sunset Lakes, the houses are newer and larger, most of them two storey. Some run a single system for both floors, with a long trunk up to the second floor, and some have a second air handler in an upstairs closet. A single system house sits around the middle, and two systems are two prices, both given before we book. The upstairs closet unit usually takes longer, worked in a tight space under the hottest part of the attic.",
        "In either half, a sagging run that is still whole is cleaned. A run that has separated at its collar, or a jacket split open in the attic, is repair, priced on scope from $250 to $2,000 and up. The dryer vent, which in the west side houses often runs up to the roof, is $100 to $200 on the same visit, and Miramar has its own dryer vent page.",
      ],
    },
    {
      heading: "Air duct cleaning in western Miramar: smoke, dust and the filter slot",
      body: [
        "Miramar's western neighbourhoods run out to US 27, and past it is the Everglades. In a dry spring, smoke from brush and muck fires out there can drift east over Sunset Lakes and Silver Lakes for days, and smoke particles are far finer than ordinary house dust. Add the dust from the building that moved west through the two thousands, and filters on this side have carried more than the age of the houses suggests.",
        "What decides how much of that reaches the ducts is the return. If the filter fits its slot and the slot is sealed, most of it stops there. If there is a gap around the filter, or the return box is open to the wall or the closet behind it, the system pulls air around the filter and sends it straight to the coil and the supply runs. A filter that turns grey in a couple of weeks during a smoky spell is doing its job. A filter that stays white while dust gathers on the furniture is being bypassed.",
        "A MERV 8 to 11 filter is right for most Miramar systems, and a higher rating than the system was built for can starve it of air. During smoke, keep the windows shut, let the system run, and change the filter once the air clears. If the house smelled of smoke indoors, a cleaning after the dry season removes what settled in the ducts and on the coil, at $300 to $600 per system, and sealing a leaking return box is quoted as repair.",
      ],
    },
  ],

  "palm-beach-gardens": [
    {
      heading: "Air duct cleaning in Palm Beach Gardens: price for a golf community house, a villa or a condo",
      body: [
        "Air duct cleaning in Palm Beach Gardens is $300 to $600 per system. The large houses in PGA National, BallenIsles, Mirasol and Old Palm usually run two or three systems, and each is priced on its own, so a three system house gets three figures, all given before we book. The register count on each one, and whether its air handler is in the garage, a closet or the attic, decides where in the range it falls.",
        "Not everything inside the golf communities is a large house. The villas, coach homes and cluster homes in PGA National and the other clubs are typically one system with a closet or garage air handler and a modest register count, and they sit toward the lower half. Condos and apartments around Downtown at the Gardens and along PGA Boulevard are usually one closet unit with short runs, at the bottom of the range, and for many of them the coil and drain pan cleaning at $200 to $450 is the more useful job.",
        "The city's older streets, from its first decades after it was incorporated in 1959, are mostly one system on original or once replaced ductwork, and there the price depends more on what the camera finds than on the size of the house. Flex that has separated or torn is repair, quoted on scope from $250, and growth on the coil or inside the ducts is air duct mold removal, from $500 to $3,000 and up. You decide on each line before anything is done.",
      ],
    },
    {
      heading: "Air handler in the attic in Palm Beach Gardens: the drain pan, the float switch and the ceiling below",
      body: [
        "In a lot of two storey Gardens houses the upstairs air handler sits on a platform in the attic, and that changes what a cleaning has to cover. An air handler in a garage that overflows wets a slab. One in the attic that overflows wets a ceiling.",
        "An attic unit should sit in a secondary pan under the cabinet, with a float switch that shuts the system off when water collects, or a separate drain line that ends somewhere you will see it. That line is often a short pipe above a window or at the soffit. If water drips from it, the main drain is blocked and the system is telling you so before the water reaches the ceiling. On a cleaning we check both pans, flush the main line and make sure the float lifts freely.",
        "The work takes longer than in a garage. The attic is coolest in the morning, so the upstairs system is usually done first, and the access is often a hatch in a closet ceiling, which means a clear path to and through that closet. If the coil and the pans are what need attention, the AC and HVAC system cleaning at $200 to $450 covers them. If the ducts need it too, the duct cleaning at $300 to $600 includes the blower wheel and the coil face.",
      ],
    },
  ],

  wellington: [
    {
      heading: "Air duct cleaning in Wellington: price for a single storey house, a two system house or an estate",
      body: [
        "Air duct cleaning in Wellington is $300 to $600 per system. A single storey house with one air handler in the garage, common in Binks Forest and the older parts of the village, sits toward the lower half unless the system has gone a long time without a cleaning. The two storey houses in Olympia and across the newer communities are often two systems, each priced separately, and the upstairs one usually takes longer.",
        "The large estate houses in Palm Beach Polo and around the Equestrian Preserve can run three or more systems, plus a guest house, and each system has its own figure. You can start with the one serving the main living space and do the others later. Villas and condos inside Palm Beach Polo and the other clubs are usually one closet or garage unit and sit toward the bottom of the range.",
        "Within the range, a house next to a barn or a paddock carries more dust in its returns than one on a lake lot, and a system that has been through several seasons without a cleaning takes longer to bring back. Growth on the coil or in the ducts is quoted as air duct mold removal, from $500 to $3,000 and up, and the dryer vent is $100 to $200 on the same visit. Every line is given before we book.",
      ],
    },
    {
      heading: "Guest houses and grooms' quarters in Wellington: the system that only runs in season",
      body: [
        "Many Wellington equestrian properties have a second place to live on them: a guest house, an apartment over the barn, or grooms' quarters used from December to April and closed the rest of the year. Those systems lead the opposite life to the main house. They sit off or set high through the wettest months, then run hard for four months once the property fills up.",
        "A system that sits idle through a Wellington summer, on land kept drained over a high water table, comes back with a damp coil, a drain pan that has either crusted over or never dried, and a smell the first evening it runs. The time to deal with it is before the season, in November or early December, not after the first rider has moved in. A cleaning then means the quarters start the season with the summer's dust and growth already gone.",
        "Whether that visit is a duct cleaning or a coil cleaning depends on what we find. A ducted system with dust in its runs gets the full cleaning at $300 to $600. A small unit where the trouble is the coil and the pan gets the AC and HVAC system cleaning at $200 to $450. If the quarters run a ductless wall unit, that is outside what we clean, and we tell you so rather than send a crew.",
      ],
    },
  ],

  "lehigh-acres": [
    {
      heading: "Duct cleaning in Lehigh Acres: what it costs for an older block house or a boom era house",
      body: [
        "Duct cleaning in Lehigh Acres is $300 to $600 per system, and almost every house here is one system, so it is one price. Where it falls depends on which Lehigh the house belongs to. An older block house on a mid-century lot is small, with one air handler in the garage or a utility room and short runs, and it sits in the lower half of the range.",
        "A house from the two thousands boom, in Westminster, around Mirror Lakes or on the newer streets off Lee Boulevard, is larger, with more registers and runs laid the fast way through the attic. It sits around the middle, and higher if it has never been cleaned, which in a boom house is common: the debris from the build is often still in the system.",
        "Two things are priced on their own lines rather than folded into the cleaning. A return that was solved with a gap under the doors, or a return box open to the wall, needs a proper path back to the air handler, and that is duct repair, quoted on scope from $250 after a pressure test. A filter slot that leaks lets the open-lot dust straight past the filter, so it is sealed first or the cleaning will not last. Many Lehigh houses are rentals, and the price and the photos are the same whether the owner lives down the street or out of state. The dryer vent, $100 to $200, has its own Lehigh Acres page.",
      ],
    },
    {
      heading: "Rodents in the ducts in Lehigh Acres: what we clean and what we do not",
      body: [
        "With so much open land between the streets, rats and mice moving into the attic is a common Lehigh Acres call, and the duct system is where they do their damage out of sight. Flex duct is soft enough to chew, its insulation makes good nesting, and a return plenum or air handler platform with a gap in it is an easy way into the airstream.",
        "From inside the house the signs are a smell at one or two registers that gets worse when the system runs, droppings or insulation fragments at a grille, scratching above the ceiling in the evening, or a room that suddenly runs hot because a run has been chewed open. The camera usually finds it quickly: torn jackets, nests at the boots and debris gathered in the return.",
        "What we do is the duct side. Contaminated debris is removed under negative air, chewed or fouled runs are replaced as duct repair, priced on scope from $250 to $2,000 and up, and this is one of the cases where sanitizing, at $75 to $200 after the cleaning, has a clear reason. What we do not do is trapping or closing the entry points in the roof and soffits. That is pest control's work, and it comes first, because cleaning a duct while the animals still have a way in only clears space for the next nest.",
      ],
    },
  ],

  "cape-coral": [
    {
      heading: "AC vent cleaning in Cape Coral FL: what it covers and what it costs by type of home",
      body: [
        "AC vent cleaning, air vent cleaning and air duct cleaning are the same job in Cape Coral: the supply and return ducts, the grilles and the boots behind them, the trunk and plenums, the blower wheel and the coil face, all cleaned under negative air with every register sealed. Cleaning only the grilles you can see leaves the source where it was.",
        "The price is $300 to $600 per system. A single storey house from the seventies or eighties in the southeast Cape, with a floor level air handler and short runs, is usually one system toward the bottom. The larger two thousands houses toward Sandoval and Burnt Store carry more registers and sometimes a second system for the upstairs, each priced on its own. Condos at Cape Harbour and Tarpon Point, and the duplexes found all over the city, are one closet or garage unit per home and sit toward the lower end.",
        "On a canal lot the vents themselves often show the salt. Steel grilles near the water rust at the louvers and stain the ceiling around them, and a rusted grille can be washed but not made new, so we tell you which are worth replacing. Seized dampers and exterior hoods are photographed, since a clean duct behind a stuck damper does not stay clean. The dryer vent, which here often runs from the garage across the attic to the roof, is $100 to $200 and has its own Cape Coral page.",
      ],
    },
    {
      heading: "Choosing an air duct repair company in Cape Coral: what the quote should be based on",
      body: [
        "Since Ian, plenty of Cape Coral owners have been quoted duct work from a doorway. A duct repair quote should rest on two things: a pressure test and a look inside. We seal the registers, pressurise the system with a calibrated test fan and read the leakage, then put a camera into the trunk and the worst runs. That gives a figure for how much air is lost and photos of where, before any price is given.",
        "The repairs that follow are usually one of four here. Flex that was soaked in 2022 and dried in place is cut out and replaced, not cleaned. A return that is just a grille into a hallway wall cavity is given a sealed path back to the air handler. Collars and joints that have let go in the attic heat are reconnected with straps and mastic. And galvanized fittings eaten by salt are replaced where the camera shows rust through. New runs go in at R-6 to R-8 and are hung on proper supports.",
        "Repair is priced on scope, from $250 for a few joints to $2,000 and up for an attic of new flex, and the test is run again afterwards so you see the change as a number. Repair goes before any cleaning. We do not sell air conditioning equipment, so if the ducts test tight and a room is still warm, we tell you the equipment is the next thing for an HVAC contractor to check. Cape Coral has its own duct repair page further down.",
      ],
    },
  ],

  "miami-lakes": [
    {
      heading: "Air duct cleaning in Miami Lakes: price for an older house, a two storey house or a townhome",
      body: [
        "Air duct cleaning in Miami Lakes is $300 to $600 per system, and the town's three eras of housing land in three different parts of that range. The single storey houses of the sixties and seventies around the original lakes, in Loch Lomond and around Lake Sarah, are usually one system with a hallway return and a modest register count, and they sit in the lower half. Their attics are low, and a house whose equipment has been replaced on the original ducting often needs more time at the boots than the count suggests.",
        "The larger houses from the eighties and nineties are more often two storey, and some have a second system for the upstairs, each priced separately. The townhomes and apartments around Main Street and the Town Center are typically one closet unit with short runs, at the bottom of the range, and if the camera shows clean ducts and a dirty coil, the coil and drain pan cleaning at $200 to $450 is the job we quote.",
        "Sanitizing, at $75 to $200, is offered only after a cleaning and only with a reason. Growth found on the coil or inside the ducts is air duct mold removal, from $500 to $3,000 and up. You hear every line before the visit is booked, and nothing is added at the door.",
      ],
    },
    {
      heading: "AC vent cleaning in Miami Lakes: the hallway return and what sits behind it",
      body: [
        "Most Miami Lakes houses have one large return grille in the hallway, often with the filter right behind it, and it is the vent people mean when they call about AC vent cleaning: grey louvers, a filter caked by the end of the month, and dust on the ceiling around it. Washing the grille takes ten minutes. What is behind it decides whether the job means anything.",
        "So we open that return before anything else. If it is a bare stud cavity rather than a lined box, the fix is to line it, with sheet metal or duct board sealed at every edge, and to make sure the filter sits in a frame with no gap around it. That is duct repair, quoted on scope from $250, and it is usually a morning's work. Cleaning a system that keeps drawing from the wall only resets the clock.",
        "Then the supply vents. Ceiling grilles in Miami Lakes show the canopy too: a grey ring around the louvers from fine dust carried in the air, and in the houses nearest the lakes, spots of mildew where the cold air meets damp room air. Each grille comes off, is washed and refitted, and the boot behind it is cleaned by hand as part of the duct cleaning at $300 to $600 per system. Filters at a return grille should be MERV 8 to 11 and the right size to the quarter inch, because a filter one size small lets air around its edges.",
      ],
    },
  ],
};
