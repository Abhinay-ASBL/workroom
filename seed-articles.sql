-- ============================================================
-- WORKROOM: Delete all existing data & seed 10 real estate
-- case study articles
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. DELETE ALL EXISTING DATA (in dependency order)
-- ─────────────────────────────────────────────────
DELETE FROM project_stats;
DELETE FROM project_sections;
DELETE FROM projects;
DELETE FROM categories;

-- 2. CATEGORIES
-- ─────────────────────────────────────────────────
INSERT INTO categories (name, sort_order) VALUES
  ('Urban Development', 1),
  ('Real Estate Finance', 2),
  ('Proptech', 3),
  ('Sustainability', 4),
  ('Commercial', 5),
  ('Affordable Housing', 6),
  ('Mixed-Use', 7),
  ('Case Studies', 8);


-- 3. PROJECTS
-- ─────────────────────────────────────────────────

-- Article 1: Hudson Yards
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'hudson-yards-new-york-city',
  'Hudson Yards, New York City',
  'The largest private real estate development in U.S. history',
  'A $25 billion mixed-use megaproject that transformed Manhattan''s West Side — Hudson Yards is the definitive case study in large-scale urban development, public-private partnership, and transit-oriented design.',
  'Urban Development',
  'case-study',
  ARRAY['urban development', 'mixed-use', 'public-private partnership', 'NYC', 'transit-oriented design'],
  'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80',
  'ASBL Research Team',
  'Urban Development Division',
  '2025-01-15T09:00:00Z'
);

-- Article 2: Evergrande
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'evergrande-crisis-china',
  'The Evergrande Crisis',
  'How the world''s most indebted developer collapsed',
  'A deep-dive into China Evergrande Group''s $300 billion collapse — one of the most consequential liquidity crises in modern real estate finance, reshaping how analysts, lenders, and policymakers think about developer leverage globally.',
  'Real Estate Finance',
  'research',
  ARRAY['Evergrande', 'China', 'real estate finance', 'debt crisis', 'liquidity', 'property market'],
  'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=1200&q=80',
  'ASBL Research Team',
  'Real Estate Finance Division',
  '2025-01-22T09:00:00Z'
);

-- Article 3: Marina Bay Sands
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'marina-bay-sands-singapore-urban-transformation',
  'Marina Bay Sands & Singapore''s Urban Transformation',
  'Redefining the integrated resort and the land-scarce city',
  'How Singapore turned extreme land scarcity into a design and planning advantage — and how Marina Bay Sands became the symbol of a government-led approach to mixed-use development that cities worldwide now study.',
  'Mixed-Use Development',
  'case-study',
  ARRAY['Singapore', 'Marina Bay', 'mixed-use', 'government planning', 'integrated resort', 'urban design'],
  'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80',
  'ASBL Research Team',
  'Urban Planning Division',
  '2025-02-01T09:00:00Z'
);

-- Article 4: Downtown Chattanooga
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'downtown-chattanooga-revitalization',
  'Downtown Chattanooga Revitalization',
  'How a mid-size American city reinvented its downtown over 30 years',
  'Documented extensively by RCLCO, Chattanooga''s transformation from one of America''s most polluted cities to a thriving urban center is the definitive long-arc case study in strategic real estate consulting, public investment, and community-driven development.',
  'Urban Revitalization',
  'case-study',
  ARRAY['Chattanooga', 'urban revitalization', 'downtown', 'public investment', 'community development', 'RCLCO'],
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
  'ASBL Research Team',
  'Community Development Division',
  '2025-02-08T09:00:00Z'
);

-- Article 5: Zillow
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'zillow-zestimate-digital-transformation',
  'Zillow''s Zestimate & Digital Transformation',
  'How machine learning reshaped real estate valuation — and where it failed',
  'Zillow''s Zestimate algorithm changed how 100 million Americans think about property values. But its ambitious foray into algorithmic home-buying — Zillow Offers — became one of tech''s most studied cautionary tales in model risk and operational execution.',
  'Proptech & Innovation',
  'research',
  ARRAY['Zillow', 'proptech', 'Zestimate', 'iBuying', 'machine learning', 'real estate technology'],
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  'ASBL Research Team',
  'Proptech Research Division',
  '2025-02-14T09:00:00Z'
);

-- Article 6: CBRE
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'cbre-virtual-augmented-reality-integration',
  'CBRE''s Virtual & Augmented Reality Integration',
  'How the world''s largest commercial real estate firm embraced digital transformation',
  'CBRE pioneered virtual property tours, AI-driven portfolio management, and digital twin technology — reshaping how $300 billion in commercial transactions are sourced, underwritten, and managed each year.',
  'Commercial Real Estate',
  'research',
  ARRAY['CBRE', 'proptech', 'virtual reality', 'augmented reality', 'commercial real estate', 'digital transformation'],
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  'ASBL Research Team',
  'Commercial Real Estate Division',
  '2025-02-20T09:00:00Z'
);

-- Article 7: King's Cross
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'kings-cross-redevelopment-london',
  'King''s Cross Redevelopment, London',
  'Brownfield regeneration at its most ambitious',
  'A 67-acre former industrial wasteland in Zone 1 London, transformed over 20 years into one of the city''s most vibrant mixed-use neighbourhoods — home to Google''s UK headquarters, Central Saint Martins, and thousands of new residents.',
  'Urban Regeneration',
  'case-study',
  ARRAY['London', 'King''s Cross', 'brownfield', 'regeneration', 'mixed-use', 'heritage', 'Google'],
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80',
  'ASBL Research Team',
  'Urban Regeneration Division',
  '2025-02-26T09:00:00Z'
);

-- Article 8: Sacramento Railyards
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'the-railyards-sacramento',
  'The Railyards, Sacramento',
  'Adaptive reuse and urban infill at the largest brownfield in the American West',
  'Documented by RCLCO, Sacramento''s 187-acre former rail depot — the largest urban infill site in the Western United States — is being transformed into a new downtown mixed-use neighbourhood, setting the benchmark for adaptive reuse at scale.',
  'Urban Infill & Adaptive Reuse',
  'case-study',
  ARRAY['Sacramento', 'Railyards', 'adaptive reuse', 'urban infill', 'brownfield', 'mixed-use', 'RCLCO'],
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
  'ASBL Research Team',
  'Urban Development Division',
  '2025-03-04T09:00:00Z'
);

-- Article 9: WeWork
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'wework-rise-and-bankruptcy',
  'WeWork''s Rise and Bankruptcy',
  'The co-working boom, the $47 billion valuation, and the fall',
  'From a single Manhattan loft in 2010 to a $47 billion peak valuation, a failed IPO, and Chapter 11 bankruptcy in 2023 — WeWork''s story is essential reading on the intersection of real estate, venture capital, and the limits of narrative-driven valuation.',
  'Real Estate & Venture Capital',
  'research',
  ARRAY['WeWork', 'co-working', 'venture capital', 'bankruptcy', 'SoftBank', 'Adam Neumann', 'proptech'],
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  'ASBL Research Team',
  'Real Estate Finance Division',
  '2025-03-10T09:00:00Z'
);

-- Article 10: Affordable Green Housing India
INSERT INTO projects (slug, title, subtitle, description, category, type, tags, image_url, author_name, author_role, published_at)
VALUES (
  'affordable-green-housing-india',
  'Affordable Green Housing in India',
  'Proving that sustainability and affordability are not mutually exclusive',
  'Documented by Harvard Business Review, this case follows a young Indian developer who built an affordable, environmentally sustainable residential building in Pune — demonstrating that green construction principles can be applied profitably in emerging market housing at the bottom of the income pyramid.',
  'Sustainable Development',
  'research',
  ARRAY['India', 'affordable housing', 'green building', 'sustainability', 'emerging markets', 'HBR'],
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
  'ASBL Research Team',
  'Sustainable Development Division',
  '2025-03-18T09:00:00Z'
);


-- 4. PROJECT SECTIONS
-- ─────────────────────────────────────────────────

-- HUDSON YARDS SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: A Forgotten West Side',
'For decades, the western edge of Midtown Manhattan sat underutilized — a vast industrial rail yard operated by Amtrak and the MTA, bisected by the elevated High Line and hemmed in by Hudson River piers. The area lacked residential infrastructure, retail, office density, and coherent transit access. Manhattan was running out of room to grow, yet 28 acres of the most valuable urban land in the United States sat idle. The economic case was undeniable, but the logistical and financial complexity was staggering: the platform over the active LIRR rail yard alone would cost over $1 billion to build, before a single column of the development above could be erected.', 1
FROM projects WHERE slug = 'hudson-yards-new-york-city';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Context',
'Hudson Yards drew on decades of precedent in transit-oriented mixed-use development. Planners studied Canary Wharf in London, which transformed a derelict docklands site into a global financial district over 30 years, and Battery Park City in lower Manhattan, developed on landfill since the 1970s. The NYC Economic Development Corporation commissioned multiple impact studies projecting tax revenue, job creation, and housing demand. The 7 Train subway extension — a $2.4 billion infrastructure investment — was structured as a landmark tax-increment financing arrangement, where future property tax revenues would repay the city''s upfront capital. This financing model, rare in U.S. urban development at this scale, became central to the academic study of public-private infrastructure financing. Related Companies and Oxford Properties, the joint venture developers, conducted years of pre-development research on vertical mixed-use programming, concluding that the site needed a "24-hour neighborhood" anchor — meaning residential, hospitality, retail, cultural, and office uses had to coexist at launch rather than phase in sequentially.', 2
FROM projects WHERE slug = 'hudson-yards-new-york-city';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Outcome & Lasting Impact',
'Hudson Yards opened its first phase in March 2019. The development ultimately delivered 18 million square feet of commercial and residential space across multiple towers, anchored by The Vessel — a climbable honeycomb sculpture — and The Shed, a flexible arts center. Major tenants including KKR, SAP, L''Oréal, and Time Warner signed long-term leases, validating the office market thesis. The High Line, originally a grassroots preservation project, became the connective tissue linking Hudson Yards to Chelsea and the Meatpacking District, driving billions in surrounding property appreciation. The project generated an estimated 23,000 permanent jobs and unlocked an additional 4,000 affordable housing units through related city commitments. Hudson Yards is now studied at Harvard, MIT, and Columbia as the gold standard for platform-over-infrastructure development and public-private financing in constrained urban environments.', 3
FROM projects WHERE slug = 'hudson-yards-new-york-city';

-- EVERGRANDE SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: $300 Billion in Debt',
'At its peak, China Evergrande Group was the world''s most prolific real estate developer — selling more apartments per year than any company in history and operating across 280 Chinese cities. But beneath the volume lay a catastrophically overleveraged balance sheet. By mid-2021, Evergrande carried over $300 billion in total liabilities, funded by a combination of offshore dollar bonds (priced in USD), onshore bank debt, shadow banking instruments, and — critically — pre-sale deposits from ordinary Chinese homebuyers who had paid in full for apartments not yet built. The company''s business model depended on perpetual credit expansion: borrow to build, sell forward to repay, borrow again to build bigger. When Chinese regulators imposed the "Three Red Lines" policy in August 2020 — capping developer leverage ratios — the entire model collapsed. Evergrande could no longer roll its debt. By September 2021, it missed interest payments on its USD bonds and triggered one of the largest corporate debt crises in history.', 1
FROM projects WHERE slug = 'evergrande-crisis-china';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Analysis',
'The Evergrande case has since been studied exhaustively by Harvard Business School, the IMF, and the Bank for International Settlements as a systemic risk event. Research published in the Journal of Financial Economics traced Evergrande''s collapse to three reinforcing failures: regulatory capture (local governments depended on land sale revenues and were complicit in extending credit), asymmetric information (retail homebuyers and small bond investors bore disproportionate risk without visibility into the firm''s true leverage), and procyclical incentive structures (executive bonuses were tied to sales volume, rewarding expansion regardless of underlying cash flow). The Three Red Lines policy itself — designed to deleverage the sector — is studied as a case of policy-induced credit crunch. Harvard case materials document how Evergrande''s CEO Xu Jiayin expanded aggressively into electric vehicles, bottled water, and professional football clubs even as the core property business deteriorated, a governance failure that destroyed billions in shareholder value. The offshore bond market response — where USD bonds traded at 10 cents on the dollar — is analyzed in CFA curriculum materials as an example of sovereign backstop uncertainty in emerging market corporate debt.', 2
FROM projects WHERE slug = 'evergrande-crisis-china';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Outcome & Policy Lessons',
'By late 2021, Evergrande had ceased construction on over 1.4 million apartments, leaving buyers stranded and triggering a nationwide "mortgage boycott" movement where thousands of homeowners refused to make mortgage payments on unfinished homes. The Chinese government orchestrated a managed restructuring, appointing state-owned enterprise supervisors and allowing offshore creditors to take severe haircuts. In January 2024, a Hong Kong court ordered Evergrande''s liquidation. The broader policy lesson drawn by global regulators: developer pre-sale models that allow firms to spend buyer deposits before delivering units create hidden leverage that standard balance sheet analysis fails to capture. Post-Evergrande, multiple jurisdictions including Australia, India, and Singapore tightened escrow requirements for off-plan property sales. The episode permanently reshaped how institutional investors price Chinese property developer bonds and is now considered foundational context for anyone studying emerging market real estate finance.', 3
FROM projects WHERE slug = 'evergrande-crisis-china';

-- MARINA BAY SANDS SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: 733 Square Kilometres',
'Singapore is a city-state roughly half the size of Los Angeles, with no rural hinterland, no natural resources, and a population that has grown from 1.6 million at independence in 1965 to over 5.5 million today. Every square meter of land must perform multiple functions. The Marina Bay waterfront — reclaimed from the sea between the 1970s and 2000s — presented a once-in-a-generation opportunity: 360 hectares of blank land adjacent to the Central Business District. The Urban Redevelopment Authority (URA) faced the challenge of programming this land in a way that would generate international prestige, economic diversity, tax revenue, and livability simultaneously. A standard monoculture approach — financial district only, or resort only — would waste irreplaceable land. The government needed a catalyst development that could signal Singapore''s ambition to the world while generating the economic returns to justify the $5 billion land reclamation investment.', 1
FROM projects WHERE slug = 'marina-bay-sands-singapore-urban-transformation';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Planning Process',
'The URA''s Master Plan process — studied at the Lee Kuan Yew School of Public Policy and urban planning programs globally — is notable for its 10-year review cycles and legally binding zoning requirements. Unlike advisory plans in most democracies, Singapore''s Master Plan has statutory force: developers cannot deviate from plot ratios, land use designations, or height envelopes without specific government approval. This certainty reduces developer risk and enables longer-term planning horizons. For Marina Bay, the URA designated a mixed-use precinct combining financial services, residential, retail, arts and culture, and the Integrated Resort (IR) concept — a term Singapore invented to distinguish a casino-hotel complex from a pure gambling facility. The IR concept, documented in NUS and Harvard case studies, required integrated resort operators to invest a minimum $5 billion SGD, provide at least 1,000 hotel rooms, a convention center, museum, theater, and retail — with the casino as an incidental component, not the anchor. This programming requirement produced Marina Bay Sands (Las Vegas Sands) and Resorts World Sentosa (Genting) — two of the highest-revenue integrated resorts ever built.', 2
FROM projects WHERE slug = 'marina-bay-sands-singapore-urban-transformation';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Outcome & Global Influence',
'Marina Bay Sands, designed by Moshe Safdie and opened in 2010, became immediately iconic through its SkyPark — a 340-meter sky bridge linking three towers and featuring the world''s longest rooftop infinity pool. The resort generated over $2.7 billion in revenue in its first year alone, making it one of the highest-grossing casino resorts globally. More importantly, it catalyzed the transformation of the surrounding Marina Bay precinct: the ArtScience Museum, Gardens by the Bay (an $1 billion botanical park on reclaimed land), the Singapore Flyer, and the Esplanade arts center collectively turned Marina Bay into one of Asia''s premier destinations. Singapore''s approach — government as master developer, private sector as program implementer under strict contractual obligations — is now the reference model for integrated urban development in Dubai, Doha, and Shenzhen. Annual property values in Marina Bay commercial space have appreciated over 300% since 2010. The case is assigned reading in Harvard''s Urban Planning courses and MIT''s real estate development program.', 3
FROM projects WHERE slug = 'marina-bay-sands-singapore-urban-transformation';

-- CHATTANOOGA SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: America''s Most Polluted City',
'In 1969, the U.S. federal government declared Chattanooga, Tennessee to have the worst air quality in the United States. The city''s economy had been built around heavy manufacturing — steel, chemicals, and textiles — but by the 1970s those industries were declining, leaving behind contaminated sites, a blighted riverfront, and a population exodus to the suburbs. Downtown retail was devastated by mall development and white flight. The Tennessee River waterfront, which should have been the city''s greatest asset, was occupied by aging industrial facilities and cut off from the urban core by a highway. By 1980, the city faced a crisis familiar to dozens of post-industrial American cities: falling tax base, concentrated poverty, declining public services, and no clear path to private investment. The standard playbook — wait for the market to recover — had failed for a decade.', 1
FROM projects WHERE slug = 'downtown-chattanooga-revitalization';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Strategy',
'Chattanooga''s turnaround has been studied by RCLCO, the Urban Land Institute, and the Brookings Institution as a model for mid-size city revitalization. The key innovation was the 1984 Chattanooga Venture process — a public engagement initiative that brought together 1,700 residents to define 40 goals for the city''s future. This bottom-up strategic planning process, unusual for its era, produced a consensus vision centered on riverfront redevelopment, arts and culture investment, and downtown residential conversion. The economic development strategy combined public catalytic investment (the Tennessee Aquarium, opened 1992, was the first freshwater aquarium in the U.S. and immediately drew 1.3 million visitors in year one) with patient private follow-on investment. The Lyndhurst Foundation, a local philanthropy, played a critical early role in funding planning and feasibility work that the private market would not finance. RCLCO''s research documents how each phase of public investment — the aquarium, the waterfront parkway, the bluff views, the arts district designation — sequentially unlocked new tranches of private residential and commercial development at increasing price points.', 2
FROM projects WHERE slug = 'downtown-chattanooga-revitalization';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Outcome & Model for Mid-Size Cities',
'Over three decades, Chattanooga invested approximately $800 million in public and philanthropic funds in downtown infrastructure and catalytic projects. This leveraged an estimated $2 billion in private real estate development. The riverfront Coolidge Park, Tennessee Riverwalk, Hunter Museum, and Bluff View Arts District transformed the Tennessee River from a barrier into the city''s primary amenity. Downtown residential population grew from near zero in 1985 to over 8,000 residents by 2020, with market-rate apartments and condominiums at price points previously unimaginable in Chattanooga. The city also invested in world-class broadband infrastructure — in 2010 EPB (the municipal utility) became the first U.S. provider of true gigabit internet citywide, attracting tech startups and earning Chattanooga the title "Gig City." The broader lesson drawn by urban economists: in mid-size cities, public catalytic investment in a single transformative anchor (rather than dispersed small grants) more reliably triggers private market momentum. Chattanooga is now a fixture in urban planning curricula as proof that the post-industrial city can be genuinely revitalized without relying on a single major employer.', 3
FROM projects WHERE slug = 'downtown-chattanooga-revitalization';

-- ZILLOW SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: An Opaque Market',
'Before Zillow launched the Zestimate in 2006, real estate pricing was intentionally opaque. Access to comparable sales data (comps) was tightly controlled by Multiple Listing Services (MLS) — databases owned by real estate agent associations and inaccessible to the public. A homeowner wanting to understand their home''s value had to hire an agent or pay for an appraisal. This information asymmetry benefited incumbent brokers: without data, sellers and buyers were dependent on agent guidance, maintaining the 5-6% commission structure that had defined the industry for decades. The consumer internet had disrupted nearly every other industry by giving individuals access to professional-grade information. But real estate remained stubbornly behind. The question was whether machine learning could price 100+ million homes accurately enough to be useful — and whether data access could be compelled from resistant industry incumbents.', 1
FROM projects WHERE slug = 'zillow-zestimate-digital-transformation';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Model Evolution',
'The Zestimate''s academic and industry history is now studied in data science programs as a benchmark case for automated valuation models (AVMs). Zillow initially used a hedonic regression model trained on publicly available tax records, incorporating square footage, lot size, bedroom/bathroom count, year built, and school district ratings. The first-generation model had median error rates of approximately 8% nationally — high by appraisal standards but revolutionary for a free, real-time, publicly accessible tool. Research published by Zillow''s data science team (and independently replicated by academic economists including those at the Federal Reserve) showed that Zestimate accuracy improved substantially in high-transaction urban markets with rich comp data, and degraded significantly in rural and unique-property markets. The iBuying thesis — launched as Zillow Offers in 2018 — extended the algorithm from valuation to trading: Zillow would use the Zestimate to make instant cash offers on homes, renovate them, and resell at a profit within 90 days. MIT Sloan case studies documented how Zillow''s model failed to price renovation costs accurately and could not anticipate rapid market inflection. When home prices peaked in mid-2021 and began correcting, Zillow held an inventory of homes purchased at cyclical highs. In Q3 2021, the company reported it had purchased homes at prices $80,000 above eventual sale prices on average.', 2
FROM projects WHERE slug = 'zillow-zestimate-digital-transformation';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Outcome & Industry Lessons',
'Zillow shut down Zillow Offers in November 2021, taking a $528 million write-down and laying off 25% of its workforce. The episode is analyzed in risk management and data science courses as a case study in model overfitting, operational underestimation, and the limits of algorithmic pricing in illiquid, heterogeneous markets. However, the Zestimate itself endured and continued improving — by 2023, the median national error rate had fallen to under 3% for on-market homes. The broader industry impact of Zillow''s data democratization is lasting: the National Association of Realtors reported that 97% of homebuyers used online resources in their search, compared to under 20% before 2005. Commission rates have fallen from an average 5.5% pre-Zillow to approximately 4.9% today, with further compression expected following the 2024 NAR settlement. The Zestimate case demonstrates that proptech''s most durable value creation comes from information democratization, not from attempting to algorithmically eliminate the human judgment required in low-liquidity, high-heterogeneity markets.', 3
FROM projects WHERE slug = 'zillow-zestimate-digital-transformation';

-- CBRE SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: An Analog Industry at Scale',
'Commercial real estate is the world''s largest asset class by value, yet until recently its operating practices were largely unchanged from the 1980s. Property tours required physical presence. Portfolio management relied on spreadsheets and PDFs. Lease negotiations involved paper documents couriered between parties. For an industry handling trillions of dollars in assets, the information infrastructure was startlingly primitive. CBRE, which manages over 5 billion square feet of commercial space for institutional clients globally, faced a specific operational challenge: at that scale, even a 1% improvement in leasing efficiency or a 0.5% reduction in vacancy rates translates to billions of dollars of value. The firm also faced a structural demographic threat — a generation of younger professionals accustomed to Netflix-quality digital experiences was entering the tenant and investor market with expectations the industry''s paper-based workflows could not satisfy.', 1
FROM projects WHERE slug = 'cbre-virtual-augmented-reality-integration';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Technology Adoption',
'CBRE''s digital transformation journey has been documented by MIT Center for Real Estate and McKinsey Global Institute as a case study in enterprise-scale technology adoption in a relationship-driven industry. The company established CBRE Ventures, a dedicated proptech investment arm, and acquired or invested in over 30 technology companies between 2015 and 2023. Key technology investments studied in industry research include: 360-degree virtual tours (reducing site visits by 40% while improving lease conversion rates), AI-powered lease abstraction tools (reducing the time to extract key terms from complex commercial leases from 4 hours to 8 minutes), predictive vacancy analytics (identifying properties likely to have lease rollovers 18 months in advance), and smart building IoT systems (enabling real-time energy optimization, reducing operating costs by 15-20% in managed properties). The VR integration is particularly studied in conjunction with the COVID-19 pandemic period: between March and December 2020, CBRE processed over $4 billion in leasing transactions entirely through virtual means, demonstrating that high-value commercial decisions could be made without physical presence.', 2
FROM projects WHERE slug = 'cbre-virtual-augmented-reality-integration';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Outcome & Industry Transformation',
'By 2023, CBRE had integrated digital tools across its global platform serving 115,000 employees in 100 countries. The firm''s Hana flexible workspace brand — powered by digital check-in, app-based space booking, and IoT-enabled workplace analytics — showed occupancy rates 15-20 points above market in its managed portfolio. Revenue grew to $31 billion, with a growing share from technology-enabled services including advisory tools, data analytics licenses, and digital transaction facilitation. The broader industry impact: JLL, Cushman & Wakefield, and Colliers all accelerated proptech investment in response, effectively creating a "digital arms race" in commercial real estate services. McKinsey research projects that AI and automation could add $110-180 billion in value to the commercial real estate services industry by 2030. CBRE''s case shows that in traditional industries, scale incumbents with deep client relationships and transaction data have structural advantages in deploying technology — a lesson often overlooked by startup-centric proptech narratives.', 3
FROM projects WHERE slug = 'cbre-virtual-augmented-reality-integration';

-- KING'S CROSS SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: 67 Acres of Industrial Brownfield in Zone 1',
'For most of the 20th century, the land behind King''s Cross and St Pancras railway stations was occupied by a complex of Victorian-era goods yards, gasworks, canal wharves, and light industrial facilities that had fallen progressively into dereliction. By the 1990s, the site — located in Zone 1 of the London Underground, adjacent to two of Europe''s busiest international rail stations, and roughly equidistant between the City and the West End — was contaminated, underutilized, and a barrier between the thriving Camden and Islington neighbourhoods on either side. The challenge for any developer was extraordinary: the site contained 50 listed and locally listed historic structures, extensive ground contamination from gasworks and industrial operations, active canal infrastructure, and a community with deep suspicion of large-scale speculative development following the acrimonious docklands experience. Planning permission took over a decade to obtain.', 1
FROM projects WHERE slug = 'kings-cross-redevelopment-london';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Planning Framework',
'King''s Cross is studied in urban regeneration programs at UCL, LSE, and Harvard''s Graduate School of Design as a model for heritage-led brownfield development. The developer, Argent, pursued an unusually collaborative planning process: rather than submitting a fixed masterplan for approval, they engaged in a three-year pre-application dialogue with the London Borough of Camden, Historic England, and Transport for London, producing a parameters plan that set maximum envelopes, minimum public space ratios, and tenure mix requirements while leaving architectural flexibility within those parameters. Research by UCL''s Bartlett School documented how Argent''s commitment to 40% affordable housing (by unit count, substantially higher than the London average) and 50% public realm was instrumental in securing community support. The Granary Square development — converting a Victorian granary complex into Central Saint Martins art college — is specifically studied as a model for heritage-led cultural anchoring: the institution''s 3,000 students and faculty created immediate foot traffic, café and restaurant demand, and a creative identity that attracted tech and media tenants.', 2
FROM projects WHERE slug = 'kings-cross-redevelopment-london';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Outcome & Legacy',
'By the early 2020s, King''s Cross had delivered approximately 2,000 new homes, 4 million square feet of commercial space, 50 new and restored buildings, 10 new public parks and squares, and 20 new streets. The anchor tenants read as a who''s who of the knowledge economy: Google signed a lease for a 1 million square foot UK headquarters designed by Thomas Heatherwick and BIG Architects; Facebook established a major London campus; Universal Music Group relocated its UK headquarters; and Havas Media joined several hundred smaller technology and creative firms. The neighbourhood attracted the highest tech company concentration outside of Silicon Roundabout, with commercial rents rising from approximately £30 per square foot pre-development to over £80 per square foot by 2023. The ULI awarded King''s Cross its Award for Excellence in 2017. Perhaps most significantly, the project demonstrated that heritage preservation and commercial development are not in tension — the retained Victorian gas holder structures became the most photographed architectural feature of the entire development, with apartments in the refurbished circular gas holders selling at premiums of 20-30% over equivalent new-build product.', 3
FROM projects WHERE slug = 'kings-cross-redevelopment-london';

-- SACRAMENTO RAILYARDS SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: 187 Acres of Post-Industrial Land at the City''s Heart',
'The Central Pacific Railyards, built in the 1860s as the western terminus of the first transcontinental railroad, were once the industrial heart of Sacramento and the entire American West. At peak operation, the facility employed 2,500 workers and produced locomotives, freight cars, and maintenance equipment. By the late 20th century, rail operations had consolidated elsewhere and the site sat vacant — 187 acres of brownfield land within walking distance of the California State Capitol, downtown Sacramento''s central business district, and the Sacramento River. The scale of the contamination challenge was substantial: decades of coal, oil, and chemical use had left hydrocarbon and heavy metal contamination requiring tens of millions of dollars of remediation. Meanwhile, Sacramento''s downtown remained one of the least economically dense state capitals in the country, with significant suburban sprawl, a weak housing stock, and a reputation for emptiness after business hours.', 1
FROM projects WHERE slug = 'the-railyards-sacramento';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Development Framework',
'RCLCO''s documentation of the Railyards redevelopment has become foundational reading in urban land development courses at USC, UC Berkeley, and Cornell. The project is notable for its multiple-developer, phased approach — rather than a single master developer, the Railyards is being delivered through a consortium of specialized developers (residential, office, retail, and civic uses), coordinated under a Development Agreement with the City of Sacramento that locks in public benefits while providing entitlement certainty. Research on the project highlights the role of anchor civic investment: the $557 million Kaiser Permanente Arena (opened 2016 as the Sacramento Kings NBA arena), though technically adjacent to the Railyards rather than within it, functions as the project''s demand catalyst — generating year-round foot traffic, hotel demand, and restaurant activity that underwrites the viability of mixed-income housing and office development on the brownfield. Environmental studies document the extraordinary complexity of remediating railroad brownfield land: soil removal to depths of 15 feet in some areas, groundwater treatment systems, and vapor intrusion barriers that add $50-100 per square foot to development cost compared to greenfield sites.', 2
FROM projects WHERE slug = 'the-railyards-sacramento';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Emerging Outcome & National Significance',
'The Railyards redevelopment is a multi-decade project still in active construction, but its early phases have delivered over 1,000 residential units, a new elementary school, retail anchored by a mixed-use complex, and the beginnings of an office submarket. Projections call for the completed development to contain 10,000+ residential units, 5 million square feet of office space, 2 million square feet of retail and entertainment, and a new Sacramento Intermodal Transportation Facility serving Amtrak and future high-speed rail. The project is significant nationally for several reasons: it represents the first large-scale demonstration that railroad brownfield remediation can be economically viable without extraordinary public subsidy; it is testing new frameworks for developer coordination on mega-sites; and it is directly adjacent to proposed California High Speed Rail infrastructure, potentially making it one of the country''s most transit-integrated new urban neighborhoods. RCLCO''s ongoing documentation of the project is assigned reading in graduate real estate programs precisely because it is an in-progress case — students can study decision-making under uncertainty rather than post-hoc narrative.', 3
FROM projects WHERE slug = 'the-railyards-sacramento';

-- WEWORK SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Structural Problem: Long Leases, Short Contracts',
'WeWork''s business model was architecturally simple but financially precarious: sign 10-15 year leases with commercial landlords, fit out the space with high-design interiors and community amenities, then sublet the space on monthly or annual contracts to startups, freelancers, and enterprise clients at a 20-40% markup. The model worked when occupancy was high and credit markets were loose. But it contained a fatal structural mismatch: WeWork''s obligations to landlords were long-term and largely fixed; its revenues from members were short-term and cyclical. In a downturn, members could cancel on 30 days'' notice while WeWork''s lease obligations ran for another decade. This is the fundamental operating leverage risk that Harvard Business School and Stanford GSB case studies identify as central to the company''s collapse — a risk that was visible in WeWork''s financial statements but obscured by the narrative that WeWork was a technology company, not a real estate company, and therefore deserved a technology company multiple.', 1
FROM projects WHERE slug = 'wework-rise-and-bankruptcy';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Governance Analysis',
'The WeWork case has generated an extraordinary volume of academic study — Harvard Business School alone has published multiple cases on its governance, valuation, and SoftBank relationship. Research from the NYU Stern Center for Real Estate Finance documents the mechanics of the valuation inflation: SoftBank''s $4.4 billion investment at a $47 billion valuation in January 2019 gave WeWork''s "community-adjusted EBITDA" metric — a non-GAAP figure that excluded most of the company''s actual costs — apparent credibility. Stanford''s Corporate Governance Research Initiative analyzed WeWork''s S-1 filing, withdrawn in September 2019 under investor pressure, as containing some of the most aggressive related-party transactions ever proposed in a public offering: Adam Neumann had leased properties he personally owned to WeWork at above-market rates, borrowed hundreds of millions from WeWork, and registered the trademark "We" personally, for which WeWork later paid him $5.9 million. The governance research is widely taught as a case in how venture capital governance norms — acceptable in private markets — become catastrophically inadequate at public company scale. The COVID-19 pandemic accelerated WeWork''s financial distress: enterprise clients paused expansion, retail members cancelled, and the company''s revenue fell 26% in 2020 while lease obligations remained fixed.', 2
FROM projects WHERE slug = 'wework-rise-and-bankruptcy';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Bankruptcy, Lessons & the Co-Working Market',
'WeWork filed for Chapter 11 bankruptcy protection in November 2023, listing approximately $18.65 billion in total debt. The bankruptcy filing allowed the company to reject over 100 leases — relieving the structural mismatch at the core of its problems, but devastating landlords in major cities including New York, San Francisco, and London who had structured buildings around WeWork as anchor tenant. Post-bankruptcy, WeWork emerged with a dramatically smaller footprint, focused on profitable locations. Ironically, the co-working market itself survived and has grown in the post-pandemic environment: hybrid work has increased enterprise demand for flexible workspace enormously, and competitors including IWG (Regus), Industrious, and Convene have expanded profitably using asset-light management models rather than WeWork''s capital-heavy lease model. The enduring academic lesson: the real estate industry''s fundamental economics — long capital commitment cycles, physical asset exposure, and fixed cost structures — resist the asset-light, high-multiple narratives that work for pure software businesses. WeWork''s story is now assigned in every first-year MBA real estate finance course as a reminder that narrative does not change underlying cash flow mechanics.', 3
FROM projects WHERE slug = 'wework-rise-and-bankruptcy';

-- INDIA HOUSING SECTIONS
INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'problem', 'The Problem: A Housing Deficit of 19 Million Units',
'India faces one of the world''s most severe urban housing deficits. Government estimates place the shortage at 19 million units, concentrated almost entirely among economically weaker section (EWS) and lower income group (LIG) households earning under ₹3 lakh per year. This population has historically been served by informal housing — slums, unauthorized constructions, and incremental self-built structures — that lack durability, sanitation, and legal title. Formal affordable housing developers face a vicious challenge: land in urban India has become extraordinarily expensive, construction costs have risen sharply, buyers cannot access mortgage finance, and profit margins are thin. The assumption — accepted across the industry for decades — was that green building features (better insulation, solar systems, rainwater harvesting, efficient fixtures) were incompatible with affordable price points. Green buildings cost more to build, and that cost had to be passed on to buyers who could not afford it. The HBR case challenges this assumption directly.', 1
FROM projects WHERE slug = 'affordable-green-housing-india';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'research', 'Research & Innovation Model',
'The HBR case, written by V. Kasturi Rangan and co-authors at Harvard Business School, documents how developer Bipin Shah at Sakar Group in Pune designed a 185-unit EWS housing project applying green construction principles specifically selected for their lifecycle cost advantage rather than their capital cost. The research identifies three key insights: First, passive design — south-facing unit orientations, cross-ventilation layouts, and shading overhangs — cost nothing to specify but reduce cooling energy demand by 15-20%, directly lowering residents'' monthly electricity bills. In households spending 15-20% of income on energy, this represents a meaningful improvement in disposable income. Second, rainwater harvesting and greywater recycling systems add approximately ₹8,000 per unit to construction cost but reduce water bills by 40%, paying back in under 3 years. Third, durability of materials — using fly ash bricks (an industrial waste product) rather than fired clay bricks reduces embodied carbon by 90% and increases structural life expectancy, reducing long-term maintenance costs that resident welfare associations otherwise struggle to fund. Academic researchers at IIT Bombay who reviewed the project''s methodology found that the developer''s integrated cost-of-ownership framing — presenting green features in terms of monthly savings rather than upfront cost — was critical to sales success in a market where buyers make purchasing decisions based on total monthly outlay including loan EMI, utility bills, and maintenance.', 2
FROM projects WHERE slug = 'affordable-green-housing-india';

INSERT INTO project_sections (project_id, section_key, heading, content, sort_order)
SELECT id, 'solution', 'Outcome & Scalability',
'The Sakar project achieved IGBC (Indian Green Building Council) Green Homes certification at a total construction cost within 5% of comparable non-green affordable projects in the same micro-market — within the margin of error of normal project-to-project cost variation. All 185 units sold within 18 months, outperforming comparable non-green projects in the same submarket by a factor of 2. Residents of the completed project reported average energy bill savings of ₹500-800 per month — significant in households where total monthly expenditure may be ₹15,000-20,000. The HBR case has been cited in India''s Housing for All national policy discussions and by green building standards bodies in Sri Lanka, Bangladesh, and Kenya as evidence that green affordable housing is viable without subsidy. The research has influenced PMAY (Pradhan Mantri Awas Yojana) — India''s flagship affordable housing scheme — to pilot green certification requirements in select states. The broader academic contribution: the case provides a replicable methodology for developers to evaluate green features through a resident financial benefit lens, replacing the industry''s default "green costs more" framing with a "green saves money over time" paradigm that changes procurement decisions at every project stage.', 3
FROM projects WHERE slug = 'affordable-green-housing-india';


-- 5. PROJECT STATS
-- ─────────────────────────────────────────────────

-- Hudson Yards stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$25B', 'Total Development Cost', 1 FROM projects WHERE slug = 'hudson-yards-new-york-city';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '28 acres', 'Site Area', 2 FROM projects WHERE slug = 'hudson-yards-new-york-city';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '23,000', 'Permanent Jobs Created', 3 FROM projects WHERE slug = 'hudson-yards-new-york-city';

-- Evergrande stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$300B+', 'Total Liabilities', 1 FROM projects WHERE slug = 'evergrande-crisis-china';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '1.4M', 'Unfinished Apartments', 2 FROM projects WHERE slug = 'evergrande-crisis-china';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '280', 'Cities Affected', 3 FROM projects WHERE slug = 'evergrande-crisis-china';

-- Marina Bay stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$8B', 'Construction Investment', 1 FROM projects WHERE slug = 'marina-bay-sands-singapore-urban-transformation';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '2,561', 'Hotel Rooms', 2 FROM projects WHERE slug = 'marina-bay-sands-singapore-urban-transformation';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '15M+', 'Annual Visitors', 3 FROM projects WHERE slug = 'marina-bay-sands-singapore-urban-transformation';

-- Chattanooga stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$800M', 'Public & Philanthropic Investment', 1 FROM projects WHERE slug = 'downtown-chattanooga-revitalization';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$2B+', 'Private Development Leveraged', 2 FROM projects WHERE slug = 'downtown-chattanooga-revitalization';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '30 years', 'Transformation Timeline', 3 FROM projects WHERE slug = 'downtown-chattanooga-revitalization';

-- Zillow stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '100M+', 'Homes with a Zestimate', 1 FROM projects WHERE slug = 'zillow-zestimate-digital-transformation';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$528M', 'iBuying Write-Down (2021)', 2 FROM projects WHERE slug = 'zillow-zestimate-digital-transformation';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '<3%', 'Median Error Rate (2023)', 3 FROM projects WHERE slug = 'zillow-zestimate-digital-transformation';

-- CBRE stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$31B', 'Annual Revenue', 1 FROM projects WHERE slug = 'cbre-virtual-augmented-reality-integration';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '5B sqft', 'Commercial Space Managed', 2 FROM projects WHERE slug = 'cbre-virtual-augmented-reality-integration';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '115,000', 'Employees Worldwide', 3 FROM projects WHERE slug = 'cbre-virtual-augmented-reality-integration';

-- King's Cross stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '67 acres', 'Total Site Area', 1 FROM projects WHERE slug = 'kings-cross-redevelopment-london';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '£3B+', 'Development Investment', 2 FROM projects WHERE slug = 'kings-cross-redevelopment-london';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '20 years', 'Master Development Timeline', 3 FROM projects WHERE slug = 'kings-cross-redevelopment-london';

-- Sacramento Railyards stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '187 acres', 'Site Area', 1 FROM projects WHERE slug = 'the-railyards-sacramento';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$8B', 'Projected Total Investment', 2 FROM projects WHERE slug = 'the-railyards-sacramento';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '10,000+', 'Planned Residential Units', 3 FROM projects WHERE slug = 'the-railyards-sacramento';

-- WeWork stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$47B', 'Peak Valuation (2019)', 1 FROM projects WHERE slug = 'wework-rise-and-bankruptcy';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '700+', 'Global Locations at Peak', 2 FROM projects WHERE slug = 'wework-rise-and-bankruptcy';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '$18.65B', 'Debt at Bankruptcy Filing', 3 FROM projects WHERE slug = 'wework-rise-and-bankruptcy';

-- India Green Housing stats
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '185 units', 'Project Scale', 1 FROM projects WHERE slug = 'affordable-green-housing-india';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '40%', 'Water Bill Reduction', 2 FROM projects WHERE slug = 'affordable-green-housing-india';
INSERT INTO project_stats (project_id, value, label, sort_order)
SELECT id, '20%', 'Energy Demand Reduction', 3 FROM projects WHERE slug = 'affordable-green-housing-india';


-- ============================================================
-- Verify the results
-- ============================================================
SELECT 'Projects inserted:' as status, count(*) FROM projects;
SELECT 'Sections inserted:' as status, count(*) FROM project_sections;
SELECT 'Stats inserted:' as status, count(*) FROM project_stats;
SELECT 'Categories inserted:' as status, count(*) FROM categories;
