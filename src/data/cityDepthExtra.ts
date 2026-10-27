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
};
