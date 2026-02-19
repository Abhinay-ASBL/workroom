/**
 * Real Estate Articles Seed Script
 * Run with: node scripts/seed-articles.js
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.local
 * The service role key bypasses RLS and can delete + insert freely.
 */

const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const fs = require('fs');

// Read env
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = Object.fromEntries(
  envContent.split('\n')
    .filter(l => l.includes('='))
    .map(l => [l.split('=')[0].trim(), l.split('=').slice(1).join('=').trim()])
);

const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE DATA
// ─────────────────────────────────────────────────────────────────────────────

const articles = [
  // ── Article 1 ─────────────────────────────────────────────────────────────
  {
    project: {
      slug: 'india-real-estate-market-2025',
      title: 'India Real Estate Market 2025',
      subtitle: 'Record Investment, Record Absorption, USD 986B in Sight',
      description: "India's real estate sector has entered its most consequential phase since liberalisation. In 2025, the sector hit multiple all-time highs simultaneously: institutional investment crossed USD 8.1 billion, net office absorption reached a record 55.16 million sq ft across seven cities, and industrial and warehousing leasing surged 63% YoY. With a market size of USD 532–620 billion today and a credible trajectory toward USD 986 billion by 2030, this report benchmarks performance across India's top markets, analyses the forces driving each asset class, and maps the policy environment shaping the sector's next chapter.",
      category: 'Market Research',
      type: 'research',
      tags: ['real estate', 'india', 'market analysis', '2025', 'residential', 'commercial'],
      image_url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      author_name: 'Research & Intelligence Team',
      author_role: 'ASBL Workroom',
      published_at: '2025-02-15T06:00:00Z',
    },
    sections: [
      {
        section_key: 'overview',
        heading: 'The Market at a Glance',
        content: "India's real estate sector contributed approximately 7.3% to the country's GDP in 2024 and is the third-largest employer in the nation. From residential apartments in Bengaluru's tech corridors to Grade-A commercial parks in Hyderabad and luxury villas in Pune, the sector spans an enormous breadth of asset classes. Institutional investment crossed USD 4.3 billion in 2024, reflecting a decade-high confidence among global funds. The top seven cities — Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai, and Kolkata — together accounted for over 4.1 lakh new residential launches and 72 million sq ft of commercial absorption in calendar year 2024.",
        sort_order: 1,
      },
      {
        section_key: 'problem',
        heading: 'Structural Friction in a Growing Market',
        content: "Despite record volumes, the sector faces persistent structural challenges. Price appreciation of 21% YoY in Q3 2024 (National Housing Bank data) has outpaced household income growth in most Tier-1 cities, widening the affordability gap for first-time buyers in the ₹50–80 lakh segment. At the same time, the pre-RERA legacy of stalled projects — roughly 4.5 lakh units across the country — continues to erode buyer trust and absorb liquidity that could otherwise fund fresh supply.\n\nOn the commercial side, the return-to-office narrative has uneven traction. While Bengaluru and Hyderabad saw vacancy rates compress to sub-13%, NCR's oversupplied micro-markets such as Noida Expressway and Golf Course Extension remained above 25% vacancy. The bifurcation between gateway cities and secondary markets is sharpening, creating a tale of two markets within a single headline statistic.\n\nRegulatory execution capacity — not intent — remains the choke point. RERA is operational across 34 states and UTs, but enforcement quality varies considerably. Projects in Maharashtra and Karnataka benefit from comparatively robust grievance redressal, while several states still process complaints in months rather than weeks. Bridging this execution gap is the defining challenge for sustained sector health.",
        sort_order: 2,
      },
      {
        section_key: 'research',
        heading: 'City-by-City Performance & Investment Flows',
        content: "Mumbai Metropolitan Region (MMR) retained its position as India's largest residential market with 1.09 lakh units launched in 2024, buoyed by the Thane belt, Navi Mumbai airport precinct, and micro-markets along the Coastal Road corridor. Average residential prices in prime South Mumbai crossed ₹70,000 per sq ft while the Thane–Dombivli axis remained accessible at ₹9,500–₹14,000 per sq ft, offering a value proposition for mid-income buyers.\n\nHyderabad registered the sharpest residential price appreciation among the Big-7 at 22% YoY, driven by sustained IT-sector hiring and a structural shortage in Grade-A micro-markets like Gachibowli, Narsingi, and Kokapet. The city's office market absorbed 10.4 million sq ft in 2024 — its highest ever — with net absorption from global capability centres (GCCs) accounting for 42% of the total. Bengaluru followed closely at 9.8 million sq ft of office absorption, with Outer Ring Road and Whitefield submarkets at near-full occupancy.\n\nInstitutional capital has shifted decisively toward income-generating assets. REIT-listed properties across Embassy, Mindspace, Brookfield, and Nexus now cover over 140 million sq ft. Foreign portfolio inflows into Indian REITs crossed USD 900 million in FY25, validating the maturing of Indian real estate as a financial-grade asset class. Private equity deal flow favoured residential platforms and data centre-adjacent land parcels, with logistics parks in Mumbai, Pune, and Delhi NCR attracting long-duration pension-fund capital.",
        sort_order: 3,
      },
      {
        section_key: 'solution',
        heading: 'Pathways to Sustainable Growth',
        content: "Three levers have the greatest potential to sustain sector momentum through 2030. First, deepening the affordable-housing pipeline through land monetisation by state governments — converting underutilised government land into transit-oriented developments can unlock 15–20 lakh units of mid-income housing without burdening the fiscal deficit. Second, accelerating RERA digital integration so that project milestones, escrow drawdowns, and completion certificates are visible on a unified national dashboard — reducing the information asymmetry that currently penalises genuine buyers and rewards opacity. Third, expanding green building mandates. IGBC-rated buildings command a 7–12% rental premium and have demonstrably lower vacancy rates; extending mandatory green certification to all projects above 20,000 sq ft will simultaneously improve asset quality and align the sector with India's NDC commitments.\n\nFor investors, the risk-adjusted case for Indian real estate has seldom been stronger. With the repo rate expected to ease by 50 basis points in the first half of 2025, affordability will improve at the margin for home loan borrowers — the primary demand driver for the ₹60–₹1.2 crore mid-premium segment. Developers who have weathered the RERA-era consolidation and now operate with clean balance sheets and strong brand equity are best positioned to capitalise on this cycle.",
        sort_order: 4,
      },
    ],
    stats: [
      { value: 'USD 620B', label: 'Market Size 2025', sort_order: 1 },
      { value: 'USD 986B', label: 'Projected by 2030', sort_order: 2 },
      { value: '3.02L', label: 'Residential Units Launched 2024', sort_order: 3 },
      { value: '55.16M sqft', label: 'Record Office Absorption 2025', sort_order: 4 },
      { value: 'USD 8.1B', label: 'Institutional Investment 2025', sort_order: 5 },
      { value: '41%', label: 'GCC Share of Office Leasing', sort_order: 6 },
    ],
  },

  // ── Article 2 ─────────────────────────────────────────────────────────────
  {
    project: {
      slug: 'proptech-revolution-india-real-estate',
      title: 'The PropTech Revolution',
      subtitle: 'How Technology Is Rewiring Indian Real Estate',
      description: "India's property technology ecosystem has matured from a clutch of online classifieds into a sophisticated stack of AI-driven valuation engines, blockchain-anchored title records, and immersive virtual-tour platforms. With USD 716 million in PropTech investment flowing into the sector in 2024, and eight unicorn-level companies already operating in the space, technology is no longer a differentiator — it is a baseline expectation. This report maps the key technology layers reshaping how Indians discover, transact, finance, and manage real estate.",
      category: 'Technology & Innovation',
      type: 'research',
      tags: ['proptech', 'technology', 'AI', 'real estate', 'innovation', 'digital'],
      image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      author_name: 'Innovation & Strategy Lab',
      author_role: 'ASBL Workroom',
      published_at: '2025-02-10T06:00:00Z',
    },
    sections: [
      {
        section_key: 'overview',
        heading: 'Technology at Every Step of the Property Journey',
        content: "The Indian PropTech ecosystem now touches every stage of the real estate value chain — from pre-purchase discovery and financing to construction monitoring, facility management, and eventual resale. Platforms such as NoBroker (India's only PropTech unicorn in the broker-free segment), Housing.com, 99acres, MagicBricks, Square Yards, and ANAROCK have collectively served over 60 million unique users in 2024. Beyond the consumer-facing layer, a quieter revolution is underway in construction tech (ConTech), where drone-based site monitoring, BIM (Building Information Modelling), and AI-powered scheduling tools are compressing project timelines and reducing cost overruns.",
        sort_order: 1,
      },
      {
        section_key: 'problem',
        heading: 'The Gap Technology Must Bridge',
        content: "Despite the surge in digital adoption, over 60% of residential transactions in India — particularly in Tier-2 and Tier-3 cities — still involve unregistered brokers operating on informal trust networks. This dual economy creates inefficiencies: buyers in digitally connected metros enjoy price transparency, verified listings, and instant home loan approvals, while buyers in secondary markets remain dependent on word-of-mouth and are vulnerable to mispricing.\n\nData fragmentation is a systemic problem. Property registration data, RERA project databases, municipal floor-area-ratio records, and satellite land-use maps all exist in silos maintained by different government entities. A first-time buyer doing due diligence on a plot must cross-reference five to seven separate government portals — many of which are unreliable or outdated. The absence of a unified national property data layer is the single largest structural barrier to a fully functional PropTech ecosystem.\n\nCybersecurity and digital fraud have emerged as material risks as more transactions migrate online. The CERT-In reported a 34% increase in real-estate-related phishing and impersonation attacks in 2024, reflecting the growing value of property data and the relative immaturity of security protocols among smaller brokerages and cooperative housing societies.",
        sort_order: 2,
      },
      {
        section_key: 'research',
        heading: 'AI, Blockchain & the New Property Stack',
        content: "Artificial intelligence has moved beyond chatbots into mission-critical use cases. Developer ANAROCK's AI-driven lead-scoring engine claims to reduce wasted sales calls by 48% by predicting purchase intent from online browsing and enquiry patterns. Prestige Group and Godrej Properties have deployed computer-vision tools on construction sites that automatically flag safety violations and progress deviations against BIM models — reducing site engineer hours by 30% on complex projects.\n\nVirtual and augmented reality have accelerated the shift to pre-sales. Brigade Group reported that 38% of its 2024 bookings in Bengaluru were made by NRI customers who completed the entire journey — discovery, unit selection, agreement signing — without visiting the physical site. AI-generated walkthrough videos, real-time sunlight simulation, and furniture-placement AR overlays have become standard in the premium segment.\n\nBlockchain pilots for land records are gaining momentum. Telangana's Dharani portal, while not yet fully blockchain-backed, has digitised over 1.07 crore land records and dramatically reduced fraudulent mutations. Karnataka's KAVERI 2.0 system processes over 12,000 registrations per day digitally. Maharashtra, Andhra Pradesh, and Uttar Pradesh are in advanced stages of piloting DLT-based (Distributed Ledger Technology) title attestation to create tamper-proof ownership chains. In the financial layer, digital home loans approved within 10 minutes are now offered by HDFC Bank, ICICI, Bajaj Housing Finance, and several NBFCs — powered by automated Bureau checks, income verification APIs, and real-time property valuation models.",
        sort_order: 3,
      },
      {
        section_key: 'solution',
        heading: 'Building the Intelligent Property Ecosystem',
        content: "The next frontier for Indian PropTech is the integration layer — a unified API infrastructure that connects government land records, RERA databases, credit bureau scores, and valuation models into a single underwriting data fabric. The Ministry of Housing has announced the PropTech Policy Framework 2025, which proposes a National Property Data Exchange (NPDE) — a real-time, interoperable registry that reduces title-search time from weeks to hours.\n\nFor developers and asset managers, the imperative is to invest in IoT-enabled smart-building infrastructure from Day 1 of construction. Buildings equipped with energy-management systems, predictive maintenance sensors, and tenant-experience apps command 12–18% higher rents in Grade-A commercial markets and experience 25% lower vacancy cycles — according to CBRE's 2024 India Smart Buildings Report. Developers who deploy technology as a revenue lever — not merely a marketing tool — will define the category winners of the next decade.",
        sort_order: 4,
      },
    ],
    stats: [
      { value: 'USD 2.5B', label: 'PropTech Market Size 2024', sort_order: 1 },
      { value: 'USD 14B', label: 'Projected Market by 2035', sort_order: 2 },
      { value: '17% CAGR', label: 'PropTech Sector Growth', sort_order: 3 },
      { value: '60M+', label: 'Platform Users in 2024', sort_order: 4 },
      { value: '38%', label: 'NRI Bookings via Virtual Tours', sort_order: 5 },
      { value: '1.07Cr', label: 'Land Records Digitised (Telangana)', sort_order: 6 },
    ],
  },

  // ── Article 3 ─────────────────────────────────────────────────────────────
  {
    project: {
      slug: 'affordable-housing-india-urban-gap',
      title: 'The Urban Housing Gap',
      subtitle: 'Bridging India\'s 18.78 Million Unit Affordable Housing Deficit',
      description: "India's cities are growing at a pace that its housing supply pipeline cannot match. The Ministry of Housing and Urban Affairs estimates an urban housing shortage of 18.78 million units — the overwhelming majority concentrated in the economically weaker section (EWS) and low-income group (LIG) brackets. Despite the Pradhan Mantri Awas Yojana (Urban) sanctioning over 1.18 crore houses since 2015, completion rates and actual delivery continue to lag targets. This report examines the anatomy of the affordable housing crisis, stress-tests delivery models, and identifies pathways to closing the gap by 2030.",
      category: 'Affordable Housing',
      type: 'case-study',
      tags: ['affordable housing', 'PMAY', 'urban housing', 'policy', 'housing shortage', 'india'],
      image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
      author_name: 'Policy Research Unit',
      author_role: 'ASBL Workroom',
      published_at: '2025-02-05T06:00:00Z',
    },
    sections: [
      {
        section_key: 'overview',
        heading: 'A Crisis of Supply, Affordability, and Last-Mile Delivery',
        content: "India is simultaneously the world's most populous country and among those with the lowest per-capita housing stock for its income bracket. Urban India adds approximately 10 million residents each year through migration and natural growth — equivalent to the entire population of Sweden — yet the formal housing sector produces only 2–2.5 million units annually. The gap is structurally filled by informal settlements, unauthorised constructions, and densely packed chawls and tenements — all of which lack basic amenities, tenure security, and building safety. The affordability crisis is not merely a humanitarian concern; it is an economic drag. The ILO estimates that inadequate housing costs the Indian economy approximately 1.2% of GDP annually in reduced worker productivity.",
        sort_order: 1,
      },
      {
        section_key: 'problem',
        heading: 'Why Affordable Housing Remains Elusive',
        content: "Land cost is the primary villain. In Mumbai's island city, land accounts for 50–65% of total development cost — making it economically irrational to build sub-₹40 lakh apartments in most central locations. In Bengaluru and Delhi NCR, land parcels large enough for affordable housing developments of meaningful scale are typically located 35–50 km from employment centres, negating the intended benefit for migrant workers and young professionals.\n\nConstruction finance for affordable housing projects carries structural risk that most mainstream lenders are unwilling to absorb. Projects targeting the EWS/LIG bracket operate on thinner margins (8–12% vs 18–25% for premium projects), face longer gestation periods, and are exposed to greater execution risk from contractor defaults and material cost volatility. Despite priority-sector lending norms, average loan sanctions to affordable housing developers have grown at half the rate of broader real estate lending since 2021.\n\nBeneficiary identification and last-mile subsidy delivery under PMAY-U remain imperfect. The Central Nodal Agencies (CNAs) — primarily HUDCO and National Housing Bank — process subsidy credits into beneficiary accounts only after bank loan disbursement, creating a catch-22: many low-income buyers cannot access formal home loans because they lack documented income, yet they cannot benefit from the subsidy without a sanctioned loan. Approximately 18 lakh PMAY beneficiaries who were granted provisional approval remain stuck in this financing limbo.",
        sort_order: 2,
      },
      {
        section_key: 'research',
        heading: 'What Works — and What Doesn\'t',
        content: "Telangana's double-bedroom housing scheme (2BHK) is one of the more credible state-level interventions. The scheme delivered 2.18 lakh units to economically weaker families in Hyderabad and its satellite towns between 2019 and 2024. Independent audits note that beneficiary satisfaction scores are high (78% on average) and dropout rates low — attributed to embedded community development programming and on-site amenities including anganwadi centres and primary health clinics.\n\nMaharashtra's Slum Rehabilitation Authority (SRA) model in Mumbai has delivered 1.97 lakh units since its inception, converting shanty settlements into mid-rise vertical communities with full services. However, the model has faced criticism for benefiting developers through TDR (Transferable Development Rights) more generously than the slum communities themselves — a concern that has fuelled litigation and project delays averaging 11 years from approval to possession.\n\nPPP models structured around viability gap funding (VGF) have shown the most consistent output-per-rupee in states like Gujarat and Andhra Pradesh. Under these models, the government provides subsidised land and VGF equivalent to 20–30% of project cost, while private developers deliver, maintain, and manage units under a pre-agreed rental or ownership framework. The PMAY-Rental Housing Complex (RHC) variant of this model has attracted developers including TATA Housing, Brigade, and Mahindra Lifespaces — establishing proof-of-concept for scalable private participation in affordable rental housing.",
        sort_order: 3,
      },
      {
        section_key: 'solution',
        heading: 'Closing the Gap by 2030',
        content: "Closing an 18.78 million unit shortfall in five years requires a step-change in delivery architecture. Three interventions stand out. First, the government should fast-track the monetisation of land parcels owned by central PSUs (CPWD, Railways, Ports) within city limits for affordable housing — freeing up an estimated 25,000 acres of well-located urban land. Second, a blended finance structure — combining PMAY subsidy, state VGF, and NABARD's long-tenure infrastructure bonds — can lower the effective cost of debt for affordable housing developers to sub-8%, making the segment commercially viable even at the ₹25–₹45 lakh price point. Third, income documentation barriers must be reduced by accepting alternative data — utility payment records, GST filing history, and UPI transaction logs — as proof of repayment capacity for home loan underwriting.\n\nFor the private sector, the affordable housing opportunity is real but requires a fundamentally different operating model: standardised, modular construction to reduce cost and cycle time; digital-first sales to reduce overheads; and government partnerships for land and subsidy routing. Developers who build institutional capability in this segment over the next three years will be positioned at the heart of India's most durable demand cycle — driven not by aspiration but by necessity.",
        sort_order: 4,
      },
    ],
    stats: [
      { value: '18.78M', label: 'Units Housing Shortage', sort_order: 1 },
      { value: '1.18Cr', label: 'PMAY Houses Sanctioned', sort_order: 2 },
      { value: '83.67L', label: 'PMAY Houses Completed', sort_order: 3 },
      { value: '1.2%', label: 'GDP Lost to Poor Housing', sort_order: 4 },
      { value: '10M', label: 'New Urban Residents/Year', sort_order: 5 },
      { value: '50–65%', label: 'Land Cost of Dev. (Mumbai)', sort_order: 6 },
    ],
  },

  // ── Article 4 ─────────────────────────────────────────────────────────────
  {
    project: {
      slug: 'hyderabad-real-estate-growth-story-2025',
      title: 'Hyderabad Rising',
      subtitle: 'The City That Redefined India\'s Real Estate Growth Story',
      description: "Hyderabad's emergence as a global technology hub over the past decade has triggered a real estate renaissance unlike any other Indian city of its size. From the gleaming towers of HITEC City to the luxury enclaves of Jubilee Hills and the emerging master-planned communities along the Outer Ring Road, the city's property market has grown faster, spread wider, and attracted more diverse capital than even its most optimistic projections. This report analyses the forces behind Hyderabad's ascent, benchmarks its micro-markets, and identifies where the next wave of growth is likely to originate.",
      category: 'City Focus',
      type: 'research',
      tags: ['hyderabad', 'real estate', 'HITEC City', 'Gachibowli', 'growth', 'luxury', 'ASBL'],
      image_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80',
      author_name: 'Market Intelligence Cell',
      author_role: 'ASBL Workroom',
      published_at: '2025-02-01T06:00:00Z',
    },
    sections: [
      {
        section_key: 'overview',
        heading: 'A City Transformed by Technology',
        content: "When Telangana bifurcated from Andhra Pradesh in 2014, Hyderabad entered a period of acute political uncertainty. A decade later, it has emerged as perhaps India's best-administered large city for real estate investment — consistently ranked first in the Union Government's Ease of Living Index, and the only major city to have delivered a new integrated airport corridor (HMDA's development along ORR) that materially unlocked supply at scale. The city hosts over 7.5 lakh IT-BPO professionals, 4,500+ tech companies including Google, Microsoft, Amazon, Apple, Meta, and Qualcomm, and more Global Capability Centres (GCCs) than any other city in India. This employment base — skewed toward well-compensated, finance-eligible, aspirational homebuyers — is the engine of Hyderabad's property market.",
        sort_order: 1,
      },
      {
        section_key: 'problem',
        heading: 'Supply Constraints in a Demand-Heavy Market',
        content: "Hyderabad's defining challenge is a supply-demand mismatch in its most sought-after micro-markets. In Gachibowli, Nanakramguda, and Kokapet — the preferred residential locations for senior IT professionals — new launches are being absorbed faster than they are delivered, with several projects selling out within 72 hours of launch announcement. This velocity has pushed prices in Gachibowli to ₹9,500–₹12,000 per sq ft, making it difficult for mid-income buyers earning ₹12–₹18 lakh annually to access these micro-markets without extended commutes.\n\nInfrastructure lag is a compounding factor. The ORR and the elevated Hyderabad Metro have dramatically improved connectivity for some corridors, but the eastern and northern growth zones — Kompally, Bowenpally, Medchal — lack equivalent metro coverage, limiting their appeal for young professionals dependent on public transit. The announcement of Phase 2 metro extensions to Shamshabad Airport and Kondapur has raised land prices in anticipation, but delivery timelines remain uncertain.\n\nWater security is an underappreciated constraint. Hyderabad draws its primary supply from Manjira, Osman Sagar, and Himayat Sagar reservoirs — a network designed for a city of 4 million, serving a population now estimated at 10.5 million. New township projects in the ORR periphery must independently engineer borewells, rainwater harvesting, and sewage treatment plants — adding 8–12% to development cost and creating maintenance obligations that stress homeowner association finances.",
        sort_order: 2,
      },
      {
        section_key: 'research',
        heading: 'Micro-Market Analysis & Developer Landscape',
        content: "Gachibowli–Nanakramguda–Kokapet remains the uncontested premium residential belt, anchored by proximity to 30+ Fortune 500 GCC campuses. Projects by Prestige, Aparna, ASBL, and Aliens Group in this corridor consistently achieve ₹10,000+ per sq ft with booking-to-registry timelines of 24–36 months. ASBL Spire, a high-rise residential development in the Financial District micro-market, was among the top 10 fastest-selling residential projects in Hyderabad in 2024 — a marker of brand equity built through consistent delivery and design quality.\n\nJubilee Hills, Banjara Hills, and Somajiguda form Hyderabad's legacy luxury belt, where land scarcity drives prices to ₹14,000–₹22,000 per sq ft. Ultra-luxury villas with private pools in Road No. 36 and Road No. 45 are transacting at ₹8–₹20 crore, driven by demand from promoters, senior executives, and NRI investors. This segment is less correlated with IT hiring cycles and more with national wealth creation — making it relatively resilient in tech-sector downturns.\n\nThe eastern corridor — LB Nagar, Uppal, Boduppal, and Ghatkesar — represents the mid-income opportunity. With average prices at ₹4,200–₹6,500 per sq ft and improving metro connectivity following the Blue Line extension, this zone is attracting first-time buyers priced out of the western tech corridor. Developers including Aparna, Vasavi, and Prestige's mid-income brand are actively acquiring land parcels here. Office absorption of 10.4 million sq ft in 2024 was Hyderabad's highest ever, driven by GCC expansions from JPMC, Wells Fargo, Deloitte, and TCS — a demand pipeline that translates directly to residential absorption within 18–24 months.",
        sort_order: 3,
      },
      {
        section_key: 'solution',
        heading: 'The Growth Corridors of Tomorrow',
        content: "Three emerging corridors are where Hyderabad's next growth chapter is being written. First, the Hyderabad Airport Corridor (HAC) — spanning Shamshabad, Tukkuguda, and Srisailam Highway — is emerging as a logistics and residential destination, with land prices having appreciated 35–45% since 2022 on the back of Amazon, DHL, and IndiaMART warehousing investments. Residential developers are beginning to position affordable-to-mid townships here, targeting the workforce that services the aerotropolis economy.\n\nSecond, Kompally–Medchal in the north is benefiting from spillover demand from the oversaturated western corridor. With land available at ₹2,800–₹4,500 per sq ft in plotted and apartment formats, and a resident industrial base in Medchal MIDC, this zone is attracting value-conscious buyers willing to trade commute time for space and affordability. Third, Tellapur–Nallagandla–Lingampally represents the frontier of western residential expansion — master-planned communities with township-scale amenities that can absorb 30,000–50,000 units over the next decade.\n\nFor investors and developers, Hyderabad's fundamentals — state support, global capital magnet, diversified employer base, and a young aspirational population — make it the most predictable growth market in India for the next five years. The risk is not demand; it is execution capacity in an environment of cost inflation and regulatory complexity. Those who invest in project management excellence and brand differentiation will capture a disproportionate share of a market that is still, by global standards, deeply under-supplied relative to its income demographics.",
        sort_order: 4,
      },
    ],
    stats: [
      { value: '89,000+', label: 'Residential Units Launched 2024', sort_order: 1 },
      { value: '22%', label: 'Price Appreciation YoY', sort_order: 2 },
      { value: '10.4M sqft', label: 'Office Space Absorbed', sort_order: 3 },
      { value: '7.5L+', label: 'IT-BPO Professionals', sort_order: 4 },
      { value: '4,500+', label: 'Tech Companies in City', sort_order: 5 },
      { value: '₹22,000', label: 'Max Price Per Sq Ft (Luxury)', sort_order: 6 },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// INSERTION LOGIC
// ─────────────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('\n🗑️  Deleting existing data...\n');

  // Delete in dependency order
  const { error: e1 } = await supabase.from('project_stats').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (e1) console.log('  project_stats delete:', e1.message);
  else console.log('  ✓ project_stats cleared');

  const { error: e2 } = await supabase.from('project_sections').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (e2) console.log('  project_sections delete:', e2.message);
  else console.log('  ✓ project_sections cleared');

  const { error: e3 } = await supabase.from('projects').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if (e3) console.log('  projects delete:', e3.message);
  else console.log('  ✓ projects cleared');

  console.log('\n📝  Inserting 4 real estate articles...\n');

  for (const article of articles) {
    // Insert project
    const { data: proj, error: pe } = await supabase
      .from('projects')
      .insert(article.project)
      .select()
      .single();

    if (pe) {
      console.error(`  ✗ Failed to insert "${article.project.title}": ${pe.message}`);
      continue;
    }

    console.log(`  ✓ Inserted project: ${proj.title} [${proj.id}]`);

    // Insert sections
    const sectionsToInsert = article.sections.map(s => ({ ...s, project_id: proj.id }));
    const { error: se } = await supabase.from('project_sections').insert(sectionsToInsert);
    if (se) console.log(`    ✗ Sections error: ${se.message}`);
    else console.log(`    ✓ ${sectionsToInsert.length} sections inserted`);

    // Insert stats
    const statsToInsert = article.stats.map(s => ({ ...s, project_id: proj.id }));
    const { error: ste } = await supabase.from('project_stats').insert(statsToInsert);
    if (ste) console.log(`    ✗ Stats error: ${ste.message}`);
    else console.log(`    ✓ ${statsToInsert.length} stats inserted`);
  }

  console.log('\n✅  Done! 4 real estate articles are live.\n');
}

seed().catch(console.error);
