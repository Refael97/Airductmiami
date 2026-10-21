/**
 * Every Florida ZIP code, and the city and county the Postal Service files it
 * under.
 *
 * Why this exists: a lead arrives with a ZIP and nothing else. "33019" tells
 * whoever picks it up nothing; "33019, Hollywood, Broward County" tells them
 * which crew is nearest and whether it is even our patch. The visitor is never
 * asked for a city, so nothing is added to the form and nothing is asked twice.
 *
 * Source: GeoNames postal code data for the United States
 * (https://download.geonames.org/export/zip/), filtered to FL, downloaded
 * 13 September 2026. Licensed CC BY 4.0. 1,473 ZIP codes, 545 city and county
 * pairs, all 67 Florida counties.
 *
 * A warning about what these names mean. The place name here is the USPS
 * mailing city, not the municipality. A Doral address is filed under Miami,
 * a Weston address under Fort Lauderdale. That is the Postal Service's own
 * answer and it is the right one for an envelope, but it is not the city the
 * customer would say they live in. The county never has this problem, which
 * is why the county travels with the city everywhere this data is used.
 *
 * Stored as ranges because Florida ZIPs run in blocks: "33019-33027,33029"
 * rather than eleven separate entries. Roughly 18KB instead of 41KB, and it
 * is never shipped to a browser in this form anyway. See
 * src/pages/data/fl-zip-cities.json.ts, which expands it once at build time
 * for the lead form to fetch.
 */

/** Keyed "City|County", valued as a comma separated list of ZIPs and ZIP ranges. */
export const flZipRanges: Record<string, string> = {
  "Alachua|Alachua": '32615-32616',
  "Alford|Jackson": '32420',
  "Altamonte Springs|Seminole": '32701,32714-32716',
  "Altha|Calhoun": '32421',
  "Altoona|Lake": '32702',
  "Alturas|Polk": '33820',
  "Alva|Lee": '33920',
  "Anna Maria|Manatee": '34216',
  "Anthony|Marion": '32617',
  "Apalachicola|Franklin": '32320,32329',
  "Apollo Beach|Hillsborough": '33572',
  "Apopka|Orange": '32703-32704,32712',
  "Arcadia|DeSoto": '34265-34266,34269',
  "Archer|Alachua": '32618',
  "Argyle|Walton": '32422',
  "Aripeka|Pasco": '34679',
  "Astatula|Lake": '34705',
  "Astor|Lake": '32102',
  "Atlantic Beach|Duval": '32233',
  "Auburndale|Polk": '33823',
  "Avon Park|Highlands": '33825-33826',
  "Babson Park|Polk": '33827',
  "Bagdad|Santa Rosa": '32530',
  "Baker|Okaloosa": '32531',
  "Balm|Hillsborough": '33503',
  "Barberville|Volusia": '32105',
  "Bartow|Polk": '33830-33831',
  "Bascom|Jackson": '32423',
  "Bay Pines|Pinellas": '33744',
  "Belle Glade|Palm Beach": '33430',
  "Belleair Beach|Pinellas": '33786',
  "Belleview|Marion": '34420-34421',
  "Bell|Gilchrist": '32619',
  "Beverly Hills|Citrus": '34464-34465',
  "Big Pine Key|Monroe": '33043',
  "Blountstown|Calhoun": '32424',
  "Boca Grande|Lee": '33921',
  "Boca Raton|Palm Beach": '33427-33429,33431-33434,33464,33481,33486-33488,33496-33499',
  "Bokeelia|Lee": '33922',
  "Bonifay|Holmes": '32425',
  "Bonita Springs|Lee": '34133-34136',
  "Bostwick|Putnam": '32007',
  "Bowling Green|Hardee": '33834',
  "Boynton Beach|Palm Beach": '33424-33426,33435-33437,33472-33474',
  "Bradenton Beach|Manatee": '34217',
  "Bradenton|Manatee": '34201-34212,34280-34282',
  "Bradley|Polk": '33835',
  "Brandon|Hillsborough": '33508-33511',
  "Branford|Suwannee": '32008',
  "Bristol|Liberty": '32321',
  "Bronson|Levy": '32621',
  "Brooker|Bradford": '32622',
  "Brooksville|Hernando": '34601-34605,34613-34614',
  "Bryceville|Nassau": '32009',
  "Bunnell|Flagler": '32110',
  "Bushnell|Sumter": '33513',
  "Callahan|Nassau": '32011',
  "Campbellton|Jackson": '32426',
  "Canal Point|Palm Beach": '33438',
  "Candler|Marion": '32111',
  "Cantonment|Escambia": '32533',
  "Cape Canaveral|Brevard": '32920',
  "Cape Coral|Lee": '33904,33909-33910,33914-33915,33990-33991,33993',
  "Captiva|Lee": '33924',
  "Carrabelle|Franklin": '32322',
  "Caryville|Washington": '32427',
  "Cassadaga|Volusia": '32706',
  "Casselberry|Seminole": '32707,32718,32730',
  "Cedar Key|Levy": '32625',
  "Center Hill|Sumter": '33514',
  "Century|Escambia": '32535',
  "Chattahoochee|Gadsden": '32324',
  "Chiefland|Levy": '32626,32644',
  "Chipley|Washington": '32428',
  "Chokoloskee|Collier": '34138',
  "Christmas|Orange": '32709',
  "Citra|Marion": '32113',
  "Clarcona|Orange": '32710',
  "Clarksville|Calhoun": '32430',
  "Clearwater Beach|Pinellas": '33767',
  "Clearwater|Pinellas": '33755-33766,33769',
  "Clermont|Lake": '34711-34713,34715',
  "Clermont|Polk": '34714',
  "Clewiston|Hendry": '33440',
  "Cocoa Beach|Brevard": '32931-32932',
  "Cocoa|Brevard": '32922-32924,32926-32927',
  "Coconut Creek|Broward": '33097',
  "Coleman|Sumter": '33521',
  "Copeland|Collier": '34137',
  "Coral Gables|Miami-Dade": '33114',
  "Coral Springs|Broward": '33075',
  "Cortez|Manatee": '34215',
  "Cottondale|Jackson": '32431',
  "Crawfordville|Wakulla": '32326-32327',
  "Crescent City|Putnam": '32112',
  "Crestview|Okaloosa": '32536,32539',
  "Cross City|Dixie": '32628',
  "Crystal Beach|Pinellas": '34681',
  "Crystal River|Citrus": '34423,34428-34429',
  "Crystal Springs|Pasco": '33524',
  "Cypress|Jackson": '32432',
  "Dade City|Pasco": '33523,33525-33526',
  "Dania|Broward": '33004',
  "Davenport|Polk": '33836-33837,33896-33897',
  "Daytona Beach|Volusia": '32114-32122,32124-32126,32198',
  "Day|Lafayette": '32013',
  "De Leon Springs|Volusia": '32130',
  "Debary|Jefferson": '32753',
  "Debary|Volusia": '32713',
  "Deerfield Beach|Broward": '33441-33443',
  "Defuniak Springs|Walton": '32433,32435',
  "Deland|Volusia": '32720-32721,32723-32724',
  "Delray Beach|Palm Beach": '33444-33446,33448,33482-33484',
  "Deltona|Volusia": '32725,32728,32738-32739',
  "Destin|Okaloosa": '32540-32541',
  "Doctors Inlet|Clay": '32030',
  "Dover|Hillsborough": '33527',
  "Dundee|Polk": '33838',
  "Dunedin|Pinellas": '34697-34698',
  "Dunnellon|Citrus": '34433-34434',
  "Dunnellon|Marion": '34430-34432',
  "Durant|Hillsborough": '33530',
  "Eagle Lake|Polk": '33839',
  "Earleton|Alachua": '32631',
  "East Palatka|Putnam": '32131',
  "Eastlake Weir|Marion": '32133',
  "Eastpoint|Franklin": '32328',
  "Eaton Park|Polk": '33840',
  "Ebro|Washington": '32437',
  "Edgewater|Volusia": '32132,32141',
  "Eglin Afb|Okaloosa": '32542',
  "El Jobean|Charlotte": '33927',
  "Elfers|Pasco": '34680',
  "Elkton|Saint Johns": '32033',
  "Ellenton|Manatee": '34222',
  "Englewood|Sarasota": '34223-34224,34295',
  "Estero|Lee": '33928-33929',
  "Eustis|Lake": '32726-32727,32736',
  "Everglades City|Collier": '34139',
  "Evinston|Alachua": '32633',
  "Fairfield|Marion": '32634',
  "Felda|Hendry": '33930',
  "Fellsmere|Indian River": '32948',
  "Fernandina Beach|Nassau": '32034-32035',
  "Ferndale|Lake": '34729',
  "Flagler Beach|Flagler": '32136',
  "Fleming Island|Clay": '32003,32006',
  "Florahome|Putnam": '32140',
  "Floral City|Citrus": '34436',
  "Fort Lauderdale|Broward": '33301-33332,33334-33340,33345-33346,33348-33349,33351,33355,33359,33394',
  "Fort Mc Coy|Marion": '32134',
  "Fort Meade|Polk": '33841',
  "Fort Myers Beach|Lee": '33931-33932',
  "Fort Myers|Lee": '33901-33902,33905-33908,33911-33913,33916,33919,33965-33966,33994',
  "Fort Myers|Polk": '33967',
  "Fort Ogden|DeSoto": '34267',
  "Fort Pierce|St. Lucie": '34945-34951,34954,34979,34981-34982',
  "Fort Walton Beach|Okaloosa": '32547-32549',
  "Fort White|Columbia": '32038',
  "Fountain|Bay": '32438',
  "Freeport|Walton": '32439',
  "Frostproof|Polk": '33843',
  "Fruitland Park|Lake": '34731',
  "Gainesville|Alachua": '32601-32612,32614,32627,32635,32641,32653',
  "Geneva|Seminole": '32732',
  "Georgetown|Putnam": '32139',
  "Gibsonton|Hillsborough": '33534',
  "Glen Saint Mary|Baker": '32040',
  "Glenwood|Volusia": '32722',
  "Goldenrod|Seminole": '32733',
  "Gonzalez|Escambia": '32560',
  "Goodland|Collier": '34140',
  "Gotha|Orange": '34734',
  "Graceville|Jackson": '32440',
  "Graham|Bradford": '32042',
  "Grand Island|Lake": '32735',
  "Grand Ridge|Jackson": '32442',
  "Grandin|Putnam": '32138',
  "Grant|Brevard": '32949',
  "Green Cove Springs|Clay": '32043',
  "Greenacres|Palm Beach": '33454',
  "Greensboro|Gadsden": '32330',
  "Greenville|Madison": '32331',
  "Greenwood|Jackson": '32443',
  "Gretna|Gadsden": '32332',
  "Groveland|Lake": '34736',
  "Gulf Breeze|Santa Rosa": '32561-32563',
  "Gulf Hammock|Levy": '32639',
  "Haines City|Polk": '33844-33845',
  "Hallandale|Broward": '33008-33009',
  "Hampton|Bradford": '32044',
  "Hastings|Saint Johns": '32145',
  "Havana|Gadsden": '32333',
  "Hawthorne|Alachua": '32640',
  "Hernando|Citrus": '34441-34442',
  "Hialeah|Miami-Dade": '33002,33010-33018',
  "High Springs|Alachua": '32643,32655',
  "Highland City|Polk": '33846',
  "Hilliard|Nassau": '32046',
  "Hobe Sound|Martin": '33455,33475',
  "Holder|Citrus": '34445',
  "Holiday|Pasco": '34690-34692',
  "Hollister|Putnam": '32147',
  "Hollywood|Broward": '33019-33027,33029,33081,33083-33084',
  "Holmes Beach|Manatee": '34218',
  "Holt|Okaloosa": '32564',
  "Homeland|Polk": '33847',
  "Homestead|Miami-Dade": '33030-33035,33039,33090,33092',
  "Homosassa Springs|Citrus": '34447',
  "Homosassa|Citrus": '34446,34448,34487',
  "Horseshoe Beach|Dixie": '32648',
  "Hosford|Liberty": '32334',
  "Howey In The Hills|Lake": '34737',
  "Hudson|Pasco": '34667,34669,34674',
  "Hurlburt Field|Okaloosa": '32544',
  "Immokalee|Collier": '34142-34143',
  "Indialantic|Brevard": '32903',
  "Indian Lake Estates|Polk": '33855',
  "Indian Rocks Beach|Pinellas": '33785',
  "Indiantown|Martin": '34956',
  "Inglis|Levy": '34449',
  "Intercession City|Osceola": '33848',
  "Interlachen|Putnam": '32148-32149',
  "Inverness|Citrus": '34450-34453',
  "Islamorada|Monroe": '33036',
  "Island Grove|Alachua": '32654',
  "Istachatta|Hernando": '34636',
  "Jacksonville Beach|Duval": '32240,32250',
  "Jacksonville|Duval": '32099,32201-32212,32214,32216-32229,32231-32232,32234-32239,32241,32244-32247,32254-32258,32277',
  "Jacksonville|Saint Johns": '32260',
  "Jasper|Hamilton": '32052',
  "Jay|Santa Rosa": '32565',
  "Jennings|Hamilton": '32053',
  "Jensen Beach|Martin": '34957-34958',
  "Jupiter|Palm Beach": '33458,33468-33469,33477-33478',
  "Kathleen|Polk": '33849',
  "Kenansville|Osceola": '34739',
  "Key Biscayne|Miami-Dade": '33149',
  "Key Colony Beach|Monroe": '33051',
  "Key Largo|Monroe": '33037',
  "Key West|Monroe": '33040-33041,33045',
  "Keystone Heights|Clay": '32656',
  "Killarney|Orange": '34740',
  "Kissimmee|Osceola": '34741-34747,34758',
  "Kissimmee|Polk": '34759',
  "La Crosse|Alachua": '32658',
  "Labelle|Hendry": '33935,33975',
  "Lacoochee|Pasco": '33537',
  "Lady Lake|Lake": '32158-32159',
  "Lake Alfred|Polk": '33850',
  "Lake Butler|Union": '32054',
  "Lake City|Columbia": '32024-32025,32055-32056',
  "Lake Como|Putnam": '32157',
  "Lake Geneva|Clay": '32160',
  "Lake Hamilton|Polk": '33851',
  "Lake Harbor|Palm Beach": '33459',
  "Lake Helen|Volusia": '32744',
  "Lake Mary|Seminole": '32746,32795',
  "Lake Monroe|Seminole": '32747',
  "Lake Panasoffkee|Sumter": '33538',
  "Lake Placid|Highlands": '33852,33862',
  "Lake Wales|Polk": '33853,33859,33898',
  "Lake Worth|Palm Beach": '33449,33460-33463,33465-33467',
  "Lakeland|Polk": '33801-33807,33809-33813,33815',
  "Lakeshore|Polk": '33854',
  "Lamont|Jefferson": '32336',
  "Lanark Village|Franklin": '32323',
  "Land O Lakes|Pasco": '34637-34639',
  "Largo|Pinellas": '33770-33771,33773-33774,33778-33779',
  "Laurel Hill|Okaloosa": '32567',
  "Laurel|Sarasota": '34272',
  "Lawtey|Bradford": '32058',
  "Lecanto|Citrus": '34460-34461',
  "Leesburg|Lake": '34748-34749,34788-34789',
  "Lee|Madison": '32059',
  "Lehigh Acres|Broward": '33973',
  "Lehigh Acres|Lee": '33936,33970-33972,33974,33976',
  "Lithia|Hillsborough": '33547',
  "Live Oak|Suwannee": '32060,32064',
  "Lloyd|Jefferson": '32337',
  "Lochloosa|Alachua": '32662',
  "Long Key|Monroe": '33001',
  "Longboat Key|Manatee": '34228',
  "Longwood|Seminole": '32750,32752,32779,32791',
  "Lorida|Highlands": '33857',
  "Loughman|Polk": '33858',
  "Lowell|Marion": '32663',
  "Loxahatchee|Palm Beach": '33470',
  "Lulu|Columbia": '32061',
  "Lutz|Hillsborough": '33548-33549,33558',
  "Lutz|Pasco": '33559',
  "Lynn Haven|Bay": '32444',
  "Macclenny|Baker": '32063',
  "Madison|Madison": '32340-32341',
  "Maitland|Orange": '32751,32794',
  "Malabar|Brevard": '32950',
  "Malone|Jackson": '32445',
  "Manasota|Manatee": '34260',
  "Mango|Hillsborough": '33550',
  "Marathon Shores|Monroe": '33052',
  "Marathon|Monroe": '33050',
  "Marco Island|Collier": '34145-34146',
  "Margate|Broward": '33093',
  "Marianna|Jackson": '32446-32448',
  "Mary Esther|Okaloosa": '32569',
  "Mascotte|Lake": '34753',
  "Mayo|Lafayette": '32066',
  "Mc Alpin|Suwannee": '32062',
  "Mc David|Escambia": '32568',
  "Mc Intosh|Marion": '32664',
  "Melbourne Beach|Brevard": '32951',
  "Melbourne|Brevard": '32901-32902,32904,32912,32919,32934-32936,32940-32941',
  "Melrose|Putnam": '32666',
  "Merritt Island|Brevard": '32952-32954',
  "Mexico Beach|Bay": '32410',
  "Miami Beach|Miami-Dade": '33109,33119,33139-33141,33154,33239',
  "Miami Gardens|Miami-Dade": '33056',
  "Miami|Miami-Dade": '33101-33102,33106,33111,33116,33122,33124-33138,33142-33147,33150-33153,33155-33158,33161-33170,33172-33199,33206,33222,33231,33233-33234,33238,33242-33243,33245,33247,33255-33257,33261,33265-33266,33269,33280,33283,33296,33299',
  "Miami|Putnam": '33112',
  "Micanopy|Alachua": '32667',
  "Mid Florida|Seminole": '32799',
  "Mid Florida|Volusia": '32745',
  "Middleburg|Clay": '32050,32068',
  "Midway|Gadsden": '32343',
  "Milligan|Okaloosa": '32537',
  "Milton|Santa Rosa": '32570-32572,32583',
  "Mims|Brevard": '32754',
  "Minneola|Lake": '34755',
  "Miramar Beach|Walton": '32550',
  "Molino|Escambia": '32577',
  "Monticello|Jefferson": '32344-32345',
  "Montverde|Lake": '34756',
  "Moore Haven|Glades": '33471',
  "Morriston|Levy": '32668',
  "Mossy Head|Walton": '32434',
  "Mount Dora|Lake": '32756-32757',
  "Mulberry|Polk": '33860',
  "Murdock|Charlotte": '33938',
  "Myakka City|Manatee": '34251',
  "Nalcrest|Polk": '33856',
  "Naples|Collier": '34101-34110,34112-34114,34116-34117,34119-34120',
  "Navarre|Santa Rosa": '32566',
  "Neptune Beach|Duval": '32266',
  "New Port Richey|Pasco": '34652-34656',
  "New Smyrna Beach|Volusia": '32168-32170',
  "Newberry|Alachua": '32669',
  "Niceville|Okaloosa": '32578,32588',
  "Nichols|Polk": '33863',
  "Nobleton|Hernando": '34661',
  "Nocatee|DeSoto": '34268',
  "Nokomis|Sarasota": '34274-34275',
  "Noma|Holmes": '32452',
  "North Fort Myers|Lee": '33903,33917-33918',
  "North Miami Beach|Miami-Dade": '33160',
  "North Palm Beach|Palm Beach": '33408',
  "North Port|Sarasota": '34286-34291',
  "O Brien|Suwannee": '32071',
  "Oak Hill|Volusia": '32759',
  "Oakland|Orange": '34760',
  "Ocala|Marion": '34470-34483',
  "Ochopee|Collier": '34141',
  "Ocklawaha|Marion": '32179,32183',
  "Ocoee|Orange": '34761',
  "Odessa|Hillsborough": '33556',
  "Okahumpka|Lake": '34762',
  "Okeechobee|Okeechobee": '34972-34974',
  "Old Town|Dixie": '32680',
  "Oldsmar|Pinellas": '34677',
  "Olustee|Baker": '32072',
  "Ona|Hardee": '33865',
  "Oneco|Manatee": '34264',
  "Opa Locka|Miami-Dade": '33054-33055',
  "Orange City|Volusia": '32763,32774',
  "Orange Lake|Marion": '32681',
  "Orange Park|Clay": '32065,32067,32073',
  "Orange Springs|Marion": '32182',
  "Orlando|Brevard": '32815,32899',
  "Orlando|Orange": '32801-32812,32814,32816-32822,32824-32837,32839,32853-32862,32867-32869,32872,32877-32878,32885-32887,32891,32896-32897',
  "Ormond Beach|Volusia": '32173-32176',
  "Osprey|Sarasota": '34229',
  "Osteen|Volusia": '32764',
  "Otter Creek|Levy": '32683',
  "Oviedo|Seminole": '32762,32765-32766',
  "Oxford|Sumter": '34484',
  "Ozona|Pinellas": '34660',
  "Pahokee|Palm Beach": '33476',
  "Paisley|Lake": '32767',
  "Palatka|Putnam": '32177-32178',
  "Palm Bay|Brevard": '32905-32911',
  "Palm Beach Gardens|Palm Beach": '33410,33418',
  "Palm Beach|Palm Beach": '33480',
  "Palm City|Martin": '34990-34991',
  "Palm Coast|Flagler": '32135,32137,32142-32143,32164',
  "Palm Harbor|Pinellas": '34682-34685',
  "Palmdale|Glades": '33944',
  "Palmetto|Manatee": '34220-34221',
  "Panacea|Wakulla": '32346',
  "Panama City Beach|Bay": '32407,32413',
  "Panama City|Bay": '32401-32406,32408-32409,32411-32412,32417',
  "Parrish|Manatee": '34219',
  "Patrick Afb|Brevard": '32925',
  "Paxton|Walton": '32538',
  "Pembroke Pines|Broward": '33028,33082',
  "Penney Farms|Clay": '32079',
  "Pensacola|Escambia": '32501-32509,32511-32514,32516,32520-32524,32526,32534,32559,32591',
  "Perry|Taylor": '32347-32348',
  "Pierson|Volusia": '32180',
  "Pineland|Lee": '33945',
  "Pinellas Park|Pinellas": '33780-33782',
  "Pinetta|Madison": '32350',
  "Placida|Charlotte": '33946',
  "Plant City|Hillsborough": '33563-33567',
  "Plantation|Broward": '33388',
  "Plymouth|Orange": '32768',
  "Polk City|Polk": '33868',
  "Pomona Park|Putnam": '32181',
  "Pompano Beach|Broward": '33060-33069,33071-33074,33076-33077',
  "Ponce De Leon|Holmes": '32455',
  "Ponte Vedra Beach|Saint Johns": '32004,32082',
  "Ponte Vedra|Saint Johns": '32081',
  "Port Charlotte|Charlotte": '33948-33949,33952-33954,33981',
  "Port Orange|Volusia": '32123,32127-32129',
  "Port Richey|Pasco": '34668,34673',
  "Port Saint Joe|Gulf": '32456-32457',
  "Port Saint Lucie|St. Lucie": '34952-34953,34983-34988',
  "Port Salerno|Martin": '34992',
  "Punta Gorda|Charlotte": '33950-33951,33955,33980,33982-33983',
  "Putnam Hall|Putnam": '32185',
  "Quincy|Gadsden": '32351-32353',
  "Raiford|Union": '32026,32083',
  "Reddick|Marion": '32686',
  "River Ranch|Polk": '33867',
  "Riverview|Hillsborough": '33568-33569,33579',
  "Riverview|Pasco": '33578',
  "Rockledge|Brevard": '32955-32956',
  "Roseland|Indian River": '32957',
  "Rosemary Beach|Walton": '32461',
  "Rotonda West|Charlotte": '33947',
  "Royal Palm Beach|Palm Beach": '33421',
  "Ruskin|Hillsborough": '33570,33575',
  "Safety Harbor|Pinellas": '34695',
  "Saint Augustine|Saint Johns": '32080,32084-32086,32092,32095',
  "Saint Cloud|Osceola": '34769-34773',
  "Saint James City|Lee": '33956',
  "Saint Johns|Saint Johns": '32259',
  "Saint Leo|Pasco": '33574',
  "Saint Marks|Wakulla": '32355',
  "Saint Petersburg|Pinellas": '33701-33716,33729-33734,33736-33738,33740-33743,33747,33784',
  "Salem|Taylor": '32356',
  "San Antonio|Pasco": '33576',
  "San Mateo|Putnam": '32187',
  "Sanderson|Baker": '32087',
  "Sanford|Seminole": '32771-32773',
  "Sanibel|Lee": '33957',
  "Santa Rosa Beach|Walton": '32459',
  "Sarasota|Manatee": '34243',
  "Sarasota|Sarasota": '34230-34242,34249,34276-34278',
  "Satellite Beach|Brevard": '32937',
  "Satsuma|Putnam": '32189',
  "Scottsmoor|Brevard": '32775',
  "Sebastian|Brevard": '32976',
  "Sebastian|Indian River": '32958,32978',
  "Sebring|Highlands": '33870-33872,33875-33876',
  "Seffner|Hillsborough": '33583-33584',
  "Seminole|Pinellas": '33772,33775-33777',
  "Seville|Volusia": '32190',
  "Shady Grove|Taylor": '32357',
  "Shalimar|Okaloosa": '32579',
  "Sharpes|Brevard": '32959',
  "Silver Springs|Marion": '34488-34489',
  "Sneads|Jackson": '32460',
  "Sopchoppy|Wakulla": '32358',
  "Sorrento|Lake": '32776',
  "South Bay|Palm Beach": '33493',
  "Sparr|Marion": '32192',
  "Spring Hill|Hernando": '34606-34609,34611',
  "Spring Hill|Pasco": '34610',
  "Starke|Bradford": '32091',
  "Steinhatchee|Taylor": '32359',
  "Stuart|Martin": '34994-34997',
  "Sumatra|Liberty": '32335',
  "Summerfield|Marion": '34491-34492',
  "Summerland Key|Monroe": '33042',
  "Sumterville|Sumter": '33585',
  "Sun City Center|Hillsborough": '33571,33573',
  "Sun City|Hillsborough": '33586',
  "Suwannee|Dixie": '32692',
  "Sydney|Hillsborough": '33587',
  "Tallahassee|Franklin": '32318',
  "Tallahassee|Leon": '32301-32317,32395,32399',
  "Tallevast|Manatee": '34270',
  "Tampa|Hillsborough": '33601-33626,33629-33631,33633-33635,33637,33646-33647,33650,33655,33660-33664,33672-33675,33677,33679-33682,33684-33689,33694',
  "Tangerine|Orange": '32777',
  "Tarpon Springs|Pinellas": '34688-34689',
  "Tavares|Lake": '32778',
  "Tavernier|Monroe": '33070',
  "Telogia|Liberty": '32360',
  "Terra Ceia|Manatee": '34250',
  "The Villages|Sumter": '32162-32163',
  "Thonotosassa|Hillsborough": '33592',
  "Titusville|Brevard": '32780-32781,32783,32796',
  "Trenton|Gilchrist": '32693',
  "Trilby|Pasco": '33593',
  "Umatilla|Lake": '32784',
  "Valparaiso|Okaloosa": '32580',
  "Valrico|Hillsborough": '33594-33596',
  "Venice|Sarasota": '34284-34285,34292-34293',
  "Venus|Highlands": '33960',
  "Vernon|Washington": '32462',
  "Vero Beach|Indian River": '32960-32969',
  "Wabasso|Indian River": '32970',
  "Wacissa|Jefferson": '32361',
  "Waldo|Alachua": '32694',
  "Wauchula|Hardee": '33873',
  "Wausau|Washington": '32463',
  "Waverly|Polk": '33877',
  "Webster|Sumter": '33597',
  "Weirsdale|Marion": '32195',
  "Welaka|Putnam": '32193',
  "Wellborn|Suwannee": '32094',
  "Wellington|Palm Beach": '33414',
  "Wesley Chapel|Pasco": '33543-33545',
  "West Palm Beach|Palm Beach": '33401-33407,33409,33411-33413,33415-33417,33419-33420,33422',
  "Westville|Holmes": '32464',
  "Wewahitchka|Calhoun": '32449',
  "Wewahitchka|Gulf": '32465',
  "White Springs|Hamilton": '32096',
  "Wildwood|Sumter": '34785',
  "Williston|Levy": '32696',
  "Wimauma|Hillsborough": '33598',
  "Windermere|Orange": '34786',
  "Winter Beach|Indian River": '32971',
  "Winter Garden|Orange": '34777-34778,34787',
  "Winter Haven|Polk": '33880-33885,33888',
  "Winter Park|Orange": '32789-32790,32792-32793',
  "Winter Springs|Seminole": '32708,32719',
  "Woodville|Leon": '32362',
  "Worthington Springs|Union": '32697',
  "Yalaha|Lake": '34797',
  "Yankeetown|Levy": '34498',
  "Youngstown|Bay": '32466',
  "Yulee|Nassau": '32041,32097',
  "Zellwood|Orange": '32798',
  "Zephyrhills|Pasco": '33539-33542',
  "Zolfo Springs|Hardee": '33890',
};

export interface ZipPlace {
  /** USPS mailing city. See the warning in this file's header. */
  city: string;
  /** County name without the word "County". */
  county: string;
}

/** Every ZIP expanded to its place. Built once, on first use. */
let expanded: Record<string, ZipPlace> | null = null;

export function zipIndex(): Record<string, ZipPlace> {
  if (expanded) return expanded;
  const out: Record<string, ZipPlace> = {};
  for (const [key, ranges] of Object.entries(flZipRanges)) {
    const [city, county] = key.split('|');
    for (const part of ranges.split(',')) {
      const dash = part.indexOf('-');
      if (dash === -1) {
        out[part] = { city, county };
      } else {
        const from = Number(part.slice(0, dash));
        const to = Number(part.slice(dash + 1));
        for (let z = from; z <= to; z++) out[String(z).padStart(5, '0')] = { city, county };
      }
    }
  }
  expanded = out;
  return out;
}

/** Null for anything that is not a Florida ZIP, which includes typos. */
export function lookupZip(zip: string): ZipPlace | null {
  const key = String(zip).trim().slice(0, 5);
  return /^\d{5}$/.test(key) ? (zipIndex()[key] ?? null) : null;
}

/**
 * City name to county, for the forms that ask where somebody lives in words
 * rather than in digits.
 *
 * Added 17 September 2026 after a real lead arrived from the contact form
 * reading only "miami". The ZIP lookup above could do nothing with it,
 * because the contact form has never had a ZIP field: the whole feature had
 * been built into the popup, which is the only form that asks for one. The
 * original instruction was that this should work regardless of the form.
 *
 * 528 mailing city names appear in the data. 17 of them span two counties,
 * which is the reason this is not a plain map. Where one county holds at
 * least three times as many ZIPs as the next, it wins: Miami is Miami-Dade
 * by 94 ZIPs to Putnam's 1, Orlando is Orange by 57 to Brevard's 2. Where it
 * is genuinely close, DeBary and Dunnellon and three other small places,
 * this returns null rather than pick. Better blank than a guess is the same
 * rule the ZIP path already follows.
 *
 * Inherits the USPS mailing-city caveat in this file's header: Doral files
 * under Miami. For a county that does not matter, because Doral is in
 * Miami-Dade either way, which is exactly what this is for.
 */
function normalizeCity(name: string): string {
  return String(name)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\bft\b/g, 'fort')
    .replace(/\bst\b/g, 'saint')
    .replace(/\s+/g, ' ')
    .trim();
}

/** How many ZIPs a range spec covers, used only to break a tie. */
function zipsIn(spec: string): number {
  let n = 0;
  for (const part of spec.split(',')) {
    const dash = part.indexOf('-');
    if (dash === -1) n += 1;
    else n += Number(part.slice(dash + 1)) - Number(part.slice(0, dash)) + 1;
  }
  return n;
}

let cityCounties: Record<string, string> | null = null;

/** Normalised city name to county, ambiguous names omitted. */
export function cityCountyIndex(): Record<string, string> {
  if (cityCounties) return cityCounties;
  const tally: Record<string, Record<string, number>> = {};
  for (const [key, ranges] of Object.entries(flZipRanges)) {
    const [city, county] = key.split('|');
    const k = normalizeCity(city);
    (tally[k] ??= {})[county] = (tally[k][county] ?? 0) + zipsIn(ranges);
  }
  const out: Record<string, string> = {};
  for (const [city, counties] of Object.entries(tally)) {
    const ordered = Object.entries(counties).sort((a, b) => b[1] - a[1]);
    const [top, second] = ordered;
    /* One county, or one that dominates. Otherwise say nothing. */
    if (!second || top[1] >= second[1] * 3) out[city] = top[0];
  }
  cityCounties = out;
  return out;
}

/**
 * The county for a city typed by hand. Null for out of state, a typo, or
 * one of the handful of names Florida uses in two counties at once.
 */
export function lookupCity(name: string): string | null {
  if (!name) return null;
  return cityCountyIndex()[normalizeCity(name)] ?? null;
}
