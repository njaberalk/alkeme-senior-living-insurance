const fs = require('fs');
const path = require('path');

// ===== GENERATE STATES DATA =====
const stateData = [
  {s:'alabama',n:'Alabama',a:'AL',pop:'A growing elderly population in Birmingham, Huntsville, Montgomery metros',reg:'ADPH licenses assisted living facilities',lit:'Contributory negligence state, one of few remaining',risk:'Gulf Coast hurricane exposure and tornado activity in spring'},
  {s:'alaska',n:'Alaska',a:'AK',pop:'A small but growing senior population in Anchorage and Mat-Su Valley',reg:'DHSS licenses senior care facilities',lit:'Comparative fault system with higher claim severity from remote locations',risk:'Extreme cold, remote access, and limited insurance market'},
  {s:'arizona',n:'Arizona',a:'AZ',pop:'A major retirement destination with Phoenix and Tucson metro concentration',reg:'DHS licenses assisted living under behavioral health framework',lit:'Moderate and growing litigation activity',risk:'Extreme summer heat and HVAC failure risk'},
  {s:'arkansas',n:'Arkansas',a:'AR',pop:'An aging population with facilities across the state',reg:'Office of Long Term Care regulates facilities',lit:'Moderate litigation environment',risk:'Tornado and severe weather exposure'},
  {s:'california',n:'California',a:'CA',pop:'The largest senior living market in the nation by facility count',reg:'DSS licenses RCFEs and DPH licenses skilled nursing',lit:'Most aggressive plaintiff environment nationally with high verdicts',risk:'Earthquake, wildfire, and strict regulatory environment'},
  {s:'colorado',n:'Colorado',a:'CO',pop:'A growing retirement population along the Front Range corridor',reg:'CDPHE licenses assisted living residences',lit:'Moderate litigation environment',risk:'Winter weather, hail, and altitude considerations'},
  {s:'connecticut',n:'Connecticut',a:'CT',pop:'An aging population in a high cost-of-care environment',reg:'DPH licenses managed residential communities',lit:'Moderate litigation with strong consumer protection regulations',risk:'Winter weather and aging building infrastructure'},
  {s:'delaware',n:'Delaware',a:'DE',pop:'A senior population concentrated in Wilmington and beach communities',reg:'DHSS licenses under Long Term Care Residents Protection Act',lit:'Moderate litigation environment',risk:'Coastal weather and I-95 corridor density'},
  {s:'florida',n:'Florida',a:'FL',pop:'The largest senior population percentage nationally as the top retirement destination',reg:'AHCA licenses ALFs and nursing homes',lit:'Among most litigious states nationally with nuclear verdict trend',risk:'Hurricane and flood exposure combined with high litigation costs'},
  {s:'georgia',n:'Georgia',a:'GA',pop:'A growing market centered on the Atlanta metro',reg:'Dept of Community Health licenses personal care homes and ALCs',lit:'Growing nuclear verdict trend with Atlanta plaintiff-friendly courts',risk:'Severe weather and growing litigation environment'},
  {s:'hawaii',n:'Hawaii',a:'HI',pop:'A diverse elderly population across multiple islands',reg:'DOH licenses care homes',lit:'Moderate litigation limited by island geography',risk:'Hurricane, volcanic activity, and limited market access'},
  {s:'idaho',n:'Idaho',a:'ID',pop:'A growing retirement population in the Boise metro',reg:'DHW licenses residential care facilities',lit:'Moderate litigation environment',risk:'Winter weather and rural staffing challenges'},
  {s:'illinois',n:'Illinois',a:'IL',pop:'A large market centered on the Chicago metro',reg:'DPH licenses assisted living and shared housing',lit:'Cook County is highly plaintiff-friendly',risk:'Severe weather and Cook County verdict exposure'},
  {s:'indiana',n:'Indiana',a:'IN',pop:'Facilities concentrated in Indianapolis, Fort Wayne, and Evansville',reg:'State Dept of Health licenses facilities separately',lit:'Moderate litigation with medical malpractice cap potentially applying',risk:'Severe weather and tornado exposure'},
  {s:'iowa',n:'Iowa',a:'IA',pop:'An aging rural population with distributed facilities',reg:'DIA licenses assisted living programs',lit:'Moderate litigation environment',risk:'Severe winter weather and rural staffing challenges'},
  {s:'kansas',n:'Kansas',a:'KS',pop:'A growing senior population in KC, Wichita, and Topeka metros',reg:'KDADS licenses adult care homes',lit:'Moderate litigation environment',risk:'Tornado alley exposure and severe weather'},
  {s:'kentucky',n:'Kentucky',a:'KY',pop:'Facilities concentrated in Louisville, Lexington, and Northern Kentucky',reg:'CHFS licenses personal care homes and ALCs separately',lit:'Moderate litigation environment',risk:'Severe weather and flooding in certain areas'},
  {s:'louisiana',n:'Louisiana',a:'LA',pop:'A growing senior care market across the state',reg:'DHH licenses adult residential care facilities',lit:'One of most litigious states for healthcare claims',risk:'Hurricane and flood on Gulf Coast combined with high litigation'},
  {s:'maine',n:'Maine',a:'ME',pop:'The highest median age nationally with strong senior care demand',reg:'DHHS licenses residential care facilities',lit:'Moderate litigation environment',risk:'Severe winter weather and rural staffing challenges'},
  {s:'maryland',n:'Maryland',a:'MD',pop:'A dense market around Baltimore and DC metro',reg:'MDH licenses assisted living programs',lit:'Contributory negligence state',risk:'Coastal weather and dense suburban market'},
  {s:'massachusetts',n:'Massachusetts',a:'MA',pop:'An aging population in a high cost-of-care environment',reg:'EOEA certifies ALRs and DPH licenses nursing facilities',lit:'Strong consumer protection with active regulatory environment',risk:'Winter weather, aging infrastructure, and high operating costs'},
  {s:'michigan',n:'Michigan',a:'MI',pop:'A large market in Detroit, Grand Rapids, and Ann Arbor metros',reg:'LARA licenses adult foster care and homes for the aged',lit:'Moderate litigation with no-fault auto affecting transport costs',risk:'Winter weather and no-fault auto PIP costs'},
  {s:'minnesota',n:'Minnesota',a:'MN',pop:'A progressive senior care market centered on the Twin Cities',reg:'DOH oversees housing with services registration',lit:'Moderate litigation with strong regulatory framework',risk:'Severe winter weather and progressive regulation'},
  {s:'mississippi',n:'Mississippi',a:'MS',pop:'A growing elderly population with statewide facilities',reg:'State Dept of Health licenses personal care homes',lit:'Moderate litigation with lower cost of care environment',risk:'Gulf Coast hurricane exposure and tornado activity'},
  {s:'missouri',n:'Missouri',a:'MO',pop:'Markets centered on KC and St. Louis metros',reg:'DHSS licenses residential care facilities',lit:'Growing nuclear verdict trend in major metros',risk:'Tornado exposure and growing litigation'},
  {s:'montana',n:'Montana',a:'MT',pop:'A dispersed population across vast geography',reg:'DPHHS licenses assisted living facilities',lit:'Moderate litigation with rural factors affecting claims',risk:'Severe winter, rural isolation, and limited insurance markets'},
  {s:'nebraska',n:'Nebraska',a:'NE',pop:'A senior population in Omaha and Lincoln areas',reg:'DHHS licenses assisted living facilities',lit:'Moderate litigation environment',risk:'Severe weather and tornado exposure'},
  {s:'nevada',n:'Nevada',a:'NV',pop:'A growing Las Vegas retirement market',reg:'DPBH licenses residential facilities for groups',lit:'Moderate litigation environment',risk:'Desert heat and limited water resources'},
  {s:'new-hampshire',n:'New Hampshire',a:'NH',pop:'An aging population driving demand growth',reg:'DHHS licenses residential and supported care facilities',lit:'Moderate litigation environment',risk:'Winter weather and aging infrastructure'},
  {s:'new-jersey',n:'New Jersey',a:'NJ',pop:'A dense senior living market with high demand',reg:'DOH licenses assisted living facilities',lit:'Moderate to high litigation in dense population environment',risk:'Coastal weather and high cost environment'},
  {s:'new-mexico',n:'New Mexico',a:'NM',pop:'A growing retiree population in Albuquerque and Santa Fe',reg:'DOH licenses assisted living facilities',lit:'Moderate litigation environment',risk:'Rural access challenges and limited insurance markets'},
  {s:'new-york',n:'New York',a:'NY',pop:'A large market with multiple facility types',reg:'DOH licenses adult care facilities and ALPs separately',lit:'Highly litigious with among highest insurance costs nationally',risk:'High litigation costs, high operating costs, and winter weather'},
  {s:'north-carolina',n:'North Carolina',a:'NC',pop:'A growing retirement destination with Triangle and Charlotte growth',reg:'DHHS licenses adult care homes and family care homes',lit:'Moderate and growing litigation activity',risk:'Hurricane exposure on coast and growing development market'},
  {s:'north-dakota',n:'North Dakota',a:'ND',pop:'A small senior population with rural distribution',reg:'Dept of Health licenses basic care facilities',lit:'Moderate litigation with monopolistic WC state',risk:'Extreme winter and rural staffing challenges'},
  {s:'ohio',n:'Ohio',a:'OH',pop:'A large senior population across major metros',reg:'DOH licenses residential care facilities',lit:'Moderate litigation with monopolistic WC state',risk:'Winter weather and industrial legacy areas'},
  {s:'oklahoma',n:'Oklahoma',a:'OK',pop:'A growing elderly population across the state',reg:'State Dept of Health licenses facilities separately',lit:'Moderate litigation environment',risk:'Tornado alley and severe weather exposure'},
  {s:'oregon',n:'Oregon',a:'OR',pop:'A growing senior population in the Portland metro',reg:'DHS licenses ALFs and residential care separately',lit:'Moderate litigation with progressive regulatory framework',risk:'Winter weather and earthquake exposure'},
  {s:'pennsylvania',n:'Pennsylvania',a:'PA',pop:'A large market and top state for CCRC density',reg:'DOH licenses personal care homes and ALRs separately',lit:'Philadelphia area has aggressive litigation environment',risk:'Weather exposure, Philly verdict trends, and aging buildings'},
  {s:'rhode-island',n:'Rhode Island',a:'RI',pop:'A small state with limited but dense senior living inventory',reg:'DOH licenses assisted living residences',lit:'Moderate litigation with high cost environment',risk:'Coastal weather and aging infrastructure'},
  {s:'south-carolina',n:'South Carolina',a:'SC',pop:'A growing retirement destination market',reg:'DHEC licenses community residential care facilities',lit:'Moderate litigation environment',risk:'Hurricane on coast and rapidly growing market'},
  {s:'south-dakota',n:'South Dakota',a:'SD',pop:'A rural senior population with distributed facilities',reg:'DOH licenses assisted living centers',lit:'Moderate litigation with rural factors',risk:'Severe winter and rural staffing challenges'},
  {s:'tennessee',n:'Tennessee',a:'TN',pop:'Growing markets in Nashville and Memphis',reg:'Dept of Health licenses assisted care living facilities',lit:'Moderate litigation environment',risk:'Tornado and severe weather exposure'},
  {s:'texas',n:'Texas',a:'TX',pop:'The second-largest senior population with major metro growth',reg:'HHSC licenses assisted living facilities',lit:'Active litigation in major metros with optional workers comp',risk:'Hurricane on coast, tornado inland, and optional WC'},
  {s:'utah',n:'Utah',a:'UT',pop:'A growing senior population along the Wasatch Front',reg:'DHHS licenses assisted living facilities',lit:'Moderate litigation environment',risk:'Winter weather in mountains'},
  {s:'vermont',n:'Vermont',a:'VT',pop:'An aging population with rural distribution',reg:'DAIL licenses residential care and ALRs',lit:'Moderate litigation environment',risk:'Severe winter and rural staffing challenges'},
  {s:'virginia',n:'Virginia',a:'VA',pop:'Markets in Northern Virginia and Hampton Roads',reg:'DSS licenses assisted living facilities',lit:'Contributory negligence state',risk:'Coastal weather and dense Northern Virginia market'},
  {s:'washington',n:'Washington',a:'WA',pop:'A competitive Seattle metro senior living market',reg:'DSHS licenses assisted living facilities',lit:'Moderate litigation with monopolistic WC state',risk:'Earthquake and winter weather exposure'},
  {s:'west-virginia',n:'West Virginia',a:'WV',pop:'A rural senior population with staffing challenges',reg:'DHHR licenses residential care communities',lit:'Moderate litigation environment',risk:'Rural access challenges and winter weather'},
  {s:'wisconsin',n:'Wisconsin',a:'WI',pop:'An aging population with progressive care framework',reg:'DHS licenses CBRFs and RCACs separately',lit:'Moderate litigation with progressive regulations',risk:'Severe winter and rural areas'},
  {s:'wyoming',n:'Wyoming',a:'WY',pop:'A limited senior living inventory across a vast state',reg:'DOH licenses assisted living facilities',lit:'Moderate litigation with monopolistic WC state',risk:'Extreme winter, rural isolation, and limited markets'}
];

const half = Math.ceil(stateData.length / 2);
const part1 = stateData.slice(0, half);
const part2 = stateData.slice(half);

function genState(st) {
  return {
    slug: st.s, name: st.n, abbreviation: st.a,
    metaTitle: 'Senior Living Insurance in ' + st.n,
    metaDescription: 'Senior living insurance for assisted living, nursing homes, and care facilities in ' + st.n + '. ' + st.reg + '. State-specific coverage guidance.',
    heroHeading: st.n + ' Senior Living Insurance',
    heroSubheading: 'Coverage for senior care facilities operating in ' + st.n + '.',
    overview: st.n + ' senior living facilities serve ' + st.pop.toLowerCase() + '. ' + st.reg + '. The insurance landscape is shaped by ' + st.lit.toLowerCase() + '.',
    sections: [
      { heading: 'State Licensing & Requirements', content: st.reg + '. Proof of liability insurance is required as part of the licensing process. Most facilities carry general liability, professional liability, and workers\' compensation as foundational coverages.\n\nFacilities participating in Medicare and Medicaid must also meet CMS Conditions of Participation and maintain survey compliance. The regulatory environment directly affects insurance availability and pricing.' },
      { heading: 'Market & Risk Factors', content: st.pop + '. Key risk factors include ' + st.risk.toLowerCase() + '.\n\nStaffing challenges are present across the state, with competition for qualified caregivers affecting both operational quality and insurance outcomes. Facilities that invest in competitive compensation, training, and retention programs typically achieve better insurance terms.' },
      { heading: 'Recommended Coverage', bullets: [
        'Professional liability with limits reflecting ' + st.n + '\'s litigation environment and care acuity level',
        'General liability for premises exposure including common areas, dining, and amenity spaces',
        'Workers\' compensation structured for the caregiving workforce with injury prevention emphasis',
        'Commercial property covering buildings, equipment, and business interruption',
        'Abuse and molestation coverage with dedicated limits for vulnerable adult care',
        'Umbrella or excess liability for catastrophic claim protection'
      ]}
    ],
    faqs: [
      { q: 'What insurance is required for senior care facilities in ' + st.n + '?', a: st.reg + '. Most states require proof of general liability and professional liability as a condition of licensure. Workers\' compensation is required for all facilities with employees. Specific minimums vary — consult with a specialized broker to ensure compliance.' },
      { q: 'What are the primary insurance risks for ' + st.n + ' senior living facilities?', a: 'Key risks include ' + st.risk.toLowerCase() + '. ' + st.lit + '. Facilities should work with a broker who understands the specific risk environment to structure appropriate coverage.' },
      { q: 'How does ' + st.n + '\'s litigation environment affect insurance costs?', a: st.lit + '. This affects both the availability and pricing of professional liability coverage. Facilities with clean claims histories and strong risk management programs typically achieve the most competitive terms.' }
    ],
    recommendedCoverages: ['professional-liability', 'general-liability', 'workers-compensation', 'commercial-property']
  };
}

fs.writeFileSync(path.join('.', 'data', 'states-part1.js'),
  'export const statesPart1 = ' + JSON.stringify(part1.map(genState), null, 2) + ';\n');
fs.writeFileSync(path.join('.', 'data', 'states-part2.js'),
  'export const statesPart2 = ' + JSON.stringify(part2.map(genState), null, 2) + ';\n');
console.log('States: ' + stateData.length + ' states written');

// ===== GENERATE CITIES DATA =====
const cityList = [
  // CA
  {c:'Los Angeles',st:'California',ss:'california',a:'CA'},{c:'San Diego',st:'California',ss:'california',a:'CA'},{c:'San Francisco',st:'California',ss:'california',a:'CA'},{c:'San Jose',st:'California',ss:'california',a:'CA'},{c:'Sacramento',st:'California',ss:'california',a:'CA'},
  // FL
  {c:'Miami',st:'Florida',ss:'florida',a:'FL'},{c:'Tampa',st:'Florida',ss:'florida',a:'FL'},{c:'Orlando',st:'Florida',ss:'florida',a:'FL'},{c:'Jacksonville',st:'Florida',ss:'florida',a:'FL'},{c:'Fort Lauderdale',st:'Florida',ss:'florida',a:'FL'},{c:'Sarasota',st:'Florida',ss:'florida',a:'FL'},{c:'Naples',st:'Florida',ss:'florida',a:'FL'},{c:'Boca Raton',st:'Florida',ss:'florida',a:'FL'},
  // TX
  {c:'Houston',st:'Texas',ss:'texas',a:'TX'},{c:'Dallas',st:'Texas',ss:'texas',a:'TX'},{c:'San Antonio',st:'Texas',ss:'texas',a:'TX'},{c:'Austin',st:'Texas',ss:'texas',a:'TX'},{c:'Fort Worth',st:'Texas',ss:'texas',a:'TX'},
  // NY
  {c:'New York City',st:'New York',ss:'new-york',a:'NY'},{c:'Buffalo',st:'New York',ss:'new-york',a:'NY'},{c:'Rochester',st:'New York',ss:'new-york',a:'NY'},{c:'Albany',st:'New York',ss:'new-york',a:'NY'},{c:'White Plains',st:'New York',ss:'new-york',a:'NY'},
  // PA
  {c:'Philadelphia',st:'Pennsylvania',ss:'pennsylvania',a:'PA'},{c:'Pittsburgh',st:'Pennsylvania',ss:'pennsylvania',a:'PA'},{c:'Allentown',st:'Pennsylvania',ss:'pennsylvania',a:'PA'},
  // OH
  {c:'Columbus',st:'Ohio',ss:'ohio',a:'OH'},{c:'Cleveland',st:'Ohio',ss:'ohio',a:'OH'},{c:'Cincinnati',st:'Ohio',ss:'ohio',a:'OH'},
  // IL
  {c:'Chicago',st:'Illinois',ss:'illinois',a:'IL'},{c:'Springfield',st:'Illinois',ss:'illinois',a:'IL'},{c:'Naperville',st:'Illinois',ss:'illinois',a:'IL'},
  // MI
  {c:'Detroit',st:'Michigan',ss:'michigan',a:'MI'},{c:'Grand Rapids',st:'Michigan',ss:'michigan',a:'MI'},{c:'Ann Arbor',st:'Michigan',ss:'michigan',a:'MI'},
  // NC
  {c:'Charlotte',st:'North Carolina',ss:'north-carolina',a:'NC'},{c:'Raleigh',st:'North Carolina',ss:'north-carolina',a:'NC'},{c:'Asheville',st:'North Carolina',ss:'north-carolina',a:'NC'},
  // GA
  {c:'Atlanta',st:'Georgia',ss:'georgia',a:'GA'},{c:'Savannah',st:'Georgia',ss:'georgia',a:'GA'},
  // AZ
  {c:'Phoenix',st:'Arizona',ss:'arizona',a:'AZ'},{c:'Scottsdale',st:'Arizona',ss:'arizona',a:'AZ'},{c:'Tucson',st:'Arizona',ss:'arizona',a:'AZ'},
  // MA
  {c:'Boston',st:'Massachusetts',ss:'massachusetts',a:'MA'},{c:'Worcester',st:'Massachusetts',ss:'massachusetts',a:'MA'},
  // NJ
  {c:'Newark',st:'New Jersey',ss:'new-jersey',a:'NJ'},{c:'Princeton',st:'New Jersey',ss:'new-jersey',a:'NJ'},
  // VA
  {c:'Virginia Beach',st:'Virginia',ss:'virginia',a:'VA'},{c:'Richmond',st:'Virginia',ss:'virginia',a:'VA'},{c:'Arlington',st:'Virginia',ss:'virginia',a:'VA'},
  // WA
  {c:'Seattle',st:'Washington',ss:'washington',a:'WA'},{c:'Spokane',st:'Washington',ss:'washington',a:'WA'},
  // CO
  {c:'Denver',st:'Colorado',ss:'colorado',a:'CO'},{c:'Colorado Springs',st:'Colorado',ss:'colorado',a:'CO'},
  // TN
  {c:'Nashville',st:'Tennessee',ss:'tennessee',a:'TN'},{c:'Memphis',st:'Tennessee',ss:'tennessee',a:'TN'},
  // MN
  {c:'Minneapolis',st:'Minnesota',ss:'minnesota',a:'MN'},{c:'St. Paul',st:'Minnesota',ss:'minnesota',a:'MN'},
  // IN
  {c:'Indianapolis',st:'Indiana',ss:'indiana',a:'IN'},
  // MO
  {c:'Kansas City',st:'Missouri',ss:'missouri',a:'MO'},{c:'St. Louis',st:'Missouri',ss:'missouri',a:'MO'},
  // WI
  {c:'Milwaukee',st:'Wisconsin',ss:'wisconsin',a:'WI'},{c:'Madison',st:'Wisconsin',ss:'wisconsin',a:'WI'},
  // OR
  {c:'Portland',st:'Oregon',ss:'oregon',a:'OR'},
  // CT
  {c:'Hartford',st:'Connecticut',ss:'connecticut',a:'CT'},{c:'Stamford',st:'Connecticut',ss:'connecticut',a:'CT'},
  // SC
  {c:'Charleston',st:'South Carolina',ss:'south-carolina',a:'SC'},{c:'Greenville',st:'South Carolina',ss:'south-carolina',a:'SC'},
  // MD
  {c:'Baltimore',st:'Maryland',ss:'maryland',a:'MD'},{c:'Bethesda',st:'Maryland',ss:'maryland',a:'MD'},
  // LA
  {c:'New Orleans',st:'Louisiana',ss:'louisiana',a:'LA'},{c:'Baton Rouge',st:'Louisiana',ss:'louisiana',a:'LA'},
  // NV
  {c:'Las Vegas',st:'Nevada',ss:'nevada',a:'NV'},{c:'Reno',st:'Nevada',ss:'nevada',a:'NV'},
  // KY
  {c:'Louisville',st:'Kentucky',ss:'kentucky',a:'KY'},{c:'Lexington',st:'Kentucky',ss:'kentucky',a:'KY'},
  // AL
  {c:'Birmingham',st:'Alabama',ss:'alabama',a:'AL'},{c:'Huntsville',st:'Alabama',ss:'alabama',a:'AL'},
  // OK
  {c:'Oklahoma City',st:'Oklahoma',ss:'oklahoma',a:'OK'},{c:'Tulsa',st:'Oklahoma',ss:'oklahoma',a:'OK'},
  // IA
  {c:'Des Moines',st:'Iowa',ss:'iowa',a:'IA'},
  // KS
  {c:'Wichita',st:'Kansas',ss:'kansas',a:'KS'},
  // NE
  {c:'Omaha',st:'Nebraska',ss:'nebraska',a:'NE'},
  // NM
  {c:'Albuquerque',st:'New Mexico',ss:'new-mexico',a:'NM'},{c:'Santa Fe',st:'New Mexico',ss:'new-mexico',a:'NM'},
  // UT
  {c:'Salt Lake City',st:'Utah',ss:'utah',a:'UT'},
  // ID
  {c:'Boise',st:'Idaho',ss:'idaho',a:'ID'},
  // AR
  {c:'Little Rock',st:'Arkansas',ss:'arkansas',a:'AR'},
  // MS
  {c:'Jackson',st:'Mississippi',ss:'mississippi',a:'MS'},
  // HI
  {c:'Honolulu',st:'Hawaii',ss:'hawaii',a:'HI'},
  // DE
  {c:'Wilmington',st:'Delaware',ss:'delaware',a:'DE'},
  // RI
  {c:'Providence',st:'Rhode Island',ss:'rhode-island',a:'RI'},
  // MT
  {c:'Billings',st:'Montana',ss:'montana',a:'MT'},
  // NH
  {c:'Manchester',st:'New Hampshire',ss:'new-hampshire',a:'NH'},
  // ME
  {c:'Portland',st:'Maine',ss:'maine',a:'ME'},
  // SD
  {c:'Sioux Falls',st:'South Dakota',ss:'south-dakota',a:'SD'},
  // ND
  {c:'Fargo',st:'North Dakota',ss:'north-dakota',a:'ND'},
  // AK
  {c:'Anchorage',st:'Alaska',ss:'alaska',a:'AK'},
  // VT
  {c:'Burlington',st:'Vermont',ss:'vermont',a:'VT'},
  // WV
  {c:'Charleston',st:'West Virginia',ss:'west-virginia',a:'WV'},
  // WY
  {c:'Cheyenne',st:'Wyoming',ss:'wyoming',a:'WY'},
];

function genCity(ct) {
  const slug = (ct.c.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '').replace(/^-+/, '') + '-' + ct.a.toLowerCase());
  return {
    slug, city: ct.c, state: ct.st, stateSlug: ct.ss, abbreviation: ct.a,
    metaTitle: 'Senior Living Insurance in ' + ct.c + ', ' + ct.a,
    metaDescription: 'Senior living insurance in ' + ct.c + ', ' + ct.st + '. Coverage for assisted living, nursing homes, and senior care facilities.',
    heroHeading: ct.c + ' Senior Living Insurance',
    heroSubheading: 'Coverage for senior care facilities in ' + ct.c + ', ' + ct.a + '.',
    overview: ct.c + ' is a key market for senior living facilities in ' + ct.st + ', with growing demand for assisted living, memory care, skilled nursing, and independent living communities serving the local aging population.',
    sections: [
      { heading: 'Senior Living in ' + ct.c, content: ct.c + '\'s senior living market serves the local aging population with a range of care options from independent living through skilled nursing. The local market is shaped by demographics, cost of living, regulatory requirements, and competition among providers.' },
      { heading: 'Coverage Recommendations', bullets: ['Professional liability for clinical and personal care services', 'General liability for premises exposure in the ' + ct.c + ' market', 'Workers\' compensation for all facility employees', 'Commercial property covering buildings and specialized equipment'] },
    ],
    faqs: [
      { q: 'What insurance do ' + ct.c + ' senior care facilities need?', a: 'At minimum, general liability, professional liability, and workers\' compensation. Most facilities also carry commercial property, abuse and molestation, and umbrella coverage.' },
      { q: 'How does the ' + ct.c + ' market affect insurance costs?', a: 'Local factors including facility density, litigation environment, cost of care, staffing market conditions, and property values all influence insurance pricing for ' + ct.c + ' senior living facilities.' },
    ],
    recommendedCoverages: ['professional-liability', 'general-liability', 'workers-compensation'],
  };
}

const allCities = cityList.map(genCity);
const chalf = Math.ceil(allCities.length / 2);

fs.writeFileSync(path.join('.', 'data', 'cities-part1.js'),
  'export const citiesPart1 = ' + JSON.stringify(allCities.slice(0, chalf), null, 2) + ';\n');
fs.writeFileSync(path.join('.', 'data', 'cities-part2.js'),
  'export const citiesPart2 = ' + JSON.stringify(allCities.slice(chalf), null, 2) + ';\n');
console.log('Cities: ' + allCities.length + ' cities written');
console.log('All geo data generation complete');
