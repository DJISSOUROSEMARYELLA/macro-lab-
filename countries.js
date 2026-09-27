// Comprehensive Global Macroeconomic Dataset for Macro Lab
window.COUNTRIES_DATA = {
  "USA": {
    "name": "United States",
    "iso3": "USA",
    "region": "North America",
    "flag": "🇺🇸",
    "coordinates": [37.0902, -95.7129],
    "incomeGroup": "High Income",
    "rating": "AA+",
    "ratingTier": "prime",
    "landArea": 9833517, // sq km
    "population": "334.9M",
    "gdpNominal": "$27.36T",
    "gdpGrowthYoY": 2.5,
    "inflationCPI": 3.1,
    "unemployment": 3.7,
    "debtToGdp": 122.3,
    "budgetBalance": -6.3,
    "interestRate": 5.25,
    "foreignReserves": "$242.6B",
    "gdpPerCapita": "$81,695",
    "fiveCoreMatrix": {
      "hci": 0.70, // Human Capital Index (People)
      "povertyRate": 1.0, // % under $2.15/day (Prosperity)
      "electricityAccess": 100, // % (Infra)
      "broadband": 92.4, // % (Digital)
      "carbonIntensity": 14.4 // Metric tons CO2 / cap (Planet)
    },
    "flagshipProject": {
      "title": "CHIPS & Science Act Implementation",
      "progress": 68,
      "budget": "$52.7B"
    },
    "news": [
      { "headline": "Federal Reserve maintains steady funds rate amid sticky services CPI", "source": "Macro Wire", "time": "2h ago" },
      { "headline": "Treasury yield curve shows gradual steepening as recession fears ease", "source": "Yield Desk", "time": "5h ago" },
      { "headline": "Semiconductor manufacturing subsidies trigger $200B private capex surge", "source": "TechEcon", "time": "1d ago" }
    ],
    "aiSynthesis": "The US economy demonstrates resilient consumer spending and robust labor dynamics. However, elevated sovereign debt trajectory (122% of GDP) and chronic fiscal deficits require careful monetary-fiscal coordination."
  },
  "CHN": {
    "name": "China",
    "iso3": "CHN",
    "region": "East Asia & Pacific",
    "flag": "🇨🇳",
    "coordinates": [35.8617, 104.1954],
    "incomeGroup": "Upper-Middle Income",
    "rating": "A+",
    "ratingTier": "upper-medium",
    "landArea": 9596960,
    "population": "1.41B",
    "gdpNominal": "$17.79T",
    "gdpGrowthYoY": 5.2,
    "inflationCPI": 0.3,
    "unemployment": 5.1,
    "debtToGdp": 77.1,
    "budgetBalance": -3.8,
    "interestRate": 3.45,
    "foreignReserves": "$3.24T",
    "gdpPerCapita": "$12,614",
    "fiveCoreMatrix": {
      "hci": 0.65,
      "povertyRate": 0.1,
      "electricityAccess": 100,
      "broadband": 88.5,
      "carbonIntensity": 8.0
    },
    "flagshipProject": {
      "title": "National Green Energy Corridor Grid Expansion",
      "progress": 82,
      "budget": "$120B"
    },
    "news": [
      { "headline": "PBOC eases reserve requirement ratio to stimulate liquidity and real estate", "source": "Asia Macro", "time": "3h ago" },
      { "headline": "EV exports reach record highs across ASEAN and European corridors", "source": "Trade Lens", "time": "8h ago" },
      { "headline": "Local government financing vehicle restructuring gains regulatory traction", "source": "Fiscal Pulse", "time": "1d ago" }
    ],
    "aiSynthesis": "China is undergoing a structural pivot towards high-tech manufacturing, clean energy, and AI infra. Disinflationary pressures and property sector restructuring remain the primary transition friction points."
  },
  "DEU": {
    "name": "Germany",
    "iso3": "DEU",
    "region": "Europe & Central Asia",
    "flag": "🇩🇪",
    "coordinates": [51.1657, 10.4515],
    "incomeGroup": "High Income",
    "rating": "AAA",
    "ratingTier": "prime",
    "landArea": 357022,
    "population": "84.4M",
    "gdpNominal": "$4.45T",
    "gdpGrowthYoY": -0.3,
    "inflationCPI": 2.4,
    "unemployment": 5.9,
    "debtToGdp": 63.6,
    "budgetBalance": -2.0,
    "interestRate": 4.00,
    "foreignReserves": "$295.4B",
    "gdpPerCapita": "$52,820",
    "fiveCoreMatrix": {
      "hci": 0.75,
      "povertyRate": 0.2,
      "electricityAccess": 100,
      "broadband": 94.1,
      "carbonIntensity": 8.1
    },
    "flagshipProject": {
      "title": "Hydrogen Industrial Backbone Network",
      "progress": 45,
      "budget": "€19.8B"
    },
    "news": [
      { "headline": "Manufacturing PMI edges closer to expansion line after 18-month slump", "source": "EuroMonitor", "time": "4h ago" },
      { "headline": "Renewable electricity share tops 56% in national power mix", "source": "CleanTech Intel", "time": "12h ago" },
      { "headline": "Constitutional debt-brake debate intensifies ahead of federal budget review", "source": "Berlin Policy", "time": "1d ago" }
    ],
    "aiSynthesis": "Europe's largest economy is adapting to post-Russian energy realignment and industrial digitization. Strict fiscal rules (Schuldenbremse) preserve fiscal strength despite moderate growth headwinds."
  },
  "JPN": {
    "name": "Japan",
    "iso3": "JPN",
    "region": "East Asia & Pacific",
    "flag": "🇯🇵",
    "coordinates": [36.2048, 138.2529],
    "incomeGroup": "High Income",
    "rating": "A+",
    "ratingTier": "upper-medium",
    "landArea": 377975,
    "population": "124.5M",
    "gdpNominal": "$4.21T",
    "gdpGrowthYoY": 1.3,
    "inflationCPI": 2.6,
    "unemployment": 2.5,
    "debtToGdp": 261.3,
    "budgetBalance": -5.6,
    "interestRate": 0.25,
    "foreignReserves": "$1.29T",
    "gdpPerCapita": "$33,806",
    "fiveCoreMatrix": {
      "hci": 0.80,
      "povertyRate": 0.4,
      "electricityAccess": 100,
      "broadband": 93.3,
      "carbonIntensity": 8.6
    },
    "flagshipProject": {
      "title": "Next-Gen Rapidus 2nm Foundry Fab Initiative",
      "progress": 52,
      "budget": "¥920B"
    },
    "news": [
      { "headline": "Bank of Japan evaluates further rate normalization as wage growth solidifies", "source": "Tokyo Bureau", "time": "1h ago" },
      { "headline": "Nikkei rally fueled by corporate governance overhauls and foreign inflows", "source": "Market Watch", "time": "6h ago" },
      { "headline": "Inbound tourism surpasses pre-pandemic peak, boosting regional retail", "source": "Japan Macro", "time": "1d ago" }
    ],
    "aiSynthesis": "Japan is breaking out of decades of deflation with positive real wage dynamics and BOJ yield curve control normalization, despite world-leading sovereign debt-to-GDP levels (261%)."
  },
  "KOR": {
    "name": "South Korea",
    "iso3": "KOR",
    "region": "East Asia & Pacific",
    "flag": "🇰🇷",
    "coordinates": [35.9078, 127.7669],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 100210,
    "population": "51.7M",
    "gdpNominal": "$1.71T",
    "gdpGrowthYoY": 2.6,
    "inflationCPI": 2.8,
    "unemployment": 2.8,
    "debtToGdp": 50.4,
    "budgetBalance": -2.3,
    "interestRate": 3.50,
    "foreignReserves": "$413.3B",
    "gdpPerCapita": "$33,147",
    "fiveCoreMatrix": {
      "hci": 0.84,
      "povertyRate": 0.2,
      "electricityAccess": 100,
      "broadband": 98.2,
      "carbonIntensity": 11.6
    },
    "flagshipProject": {
      "title": "Yongin Mega Semiconductor Cluster",
      "progress": 39,
      "budget": "$470B"
    },
    "news": [
      { "headline": "July Trade Balance surges to $30.39B powered by HBM & AI memory shipments", "source": "Seoul Economic", "time": "30m ago" },
      { "headline": "Bank of Korea holds base rate steady while monitoring household debt", "source": "BOK Dispatch", "time": "4h ago" },
      { "headline": "K-pop & content cultural exports break $15B milestone worldwide", "source": "Global Trade", "time": "2d ago" }
    ],
    "aiSynthesis": "South Korea's high-tech export engine is surging due to unprecedented global AI memory and HBM demand. Sound fiscal balances and high R&D intensity provide strong macroeconomic shock resistance."
  },
  "GBR": {
    "name": "United Kingdom",
    "iso3": "GBR",
    "region": "Europe & Central Asia",
    "flag": "🇬🇧",
    "coordinates": [55.3781, -3.4360],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 242495,
    "population": "67.7M",
    "gdpNominal": "$3.34T",
    "gdpGrowthYoY": 0.7,
    "inflationCPI": 2.3,
    "unemployment": 4.2,
    "debtToGdp": 97.6,
    "budgetBalance": -4.4,
    "interestRate": 5.00,
    "foreignReserves": "$178.5B",
    "gdpPerCapita": "$49,099",
    "fiveCoreMatrix": {
      "hci": 0.78,
      "povertyRate": 0.2,
      "electricityAccess": 100,
      "broadband": 95.0,
      "carbonIntensity": 4.7
    },
    "flagshipProject": {
      "title": "National Wealth Fund & Clean Power 2030",
      "progress": 25,
      "budget": "£7.3B"
    },
    "news": [
      { "headline": "Bank of England delivers first rate cut to 5.00% amid cooling wage pressures", "source": "Threadneedle Report", "time": "5h ago" },
      { "headline": "Services output leads steady quarterly expansion across UK regions", "source": "ONS Insights", "time": "14h ago" },
      { "headline": "Chancellor announces strict fiscal headroom targets in Autumn statement", "source": "Westminster Econ", "time": "1d ago" }
    ],
    "aiSynthesis": "UK inflation is normalizing towards the 2% target, allowing BOE easing. Fiscal headroom remains tight with debt hovering near 100% of GDP, focusing policy on supply-side investment and planning reforms."
  },
  "FRA": {
    "name": "France",
    "iso3": "FRA",
    "region": "Europe & Central Asia",
    "flag": "🇫🇷",
    "coordinates": [46.2276, 2.2137],
    "incomeGroup": "High Income",
    "rating": "AA-",
    "ratingTier": "high-grade",
    "landArea": 551695,
    "population": "68.0M",
    "gdpNominal": "$3.05T",
    "gdpGrowthYoY": 0.9,
    "inflationCPI": 2.2,
    "unemployment": 7.3,
    "debtToGdp": 110.6,
    "budgetBalance": -5.5,
    "interestRate": 4.00,
    "foreignReserves": "$244.2B",
    "gdpPerCapita": "$44,780",
    "fiveCoreMatrix": {
      "hci": 0.76,
      "povertyRate": 0.1,
      "electricityAccess": 100,
      "broadband": 93.6,
      "carbonIntensity": 4.2
    },
    "flagshipProject": {
      "title": "France 2030 Deeptech & Small Modular Reactor Program",
      "progress": 55,
      "budget": "€54B"
    },
    "news": [
      { "headline": "Tourism revenues hit historic high following major global cultural events", "source": "Paris Brief", "time": "6h ago" },
      { "headline": "European Commission issues fiscal trajectory recommendations to Bercy", "source": "EU Tribune", "time": "18h ago" },
      { "headline": "Aeronautics & luxury exports maintain multi-billion trade surplus buffer", "source": "Insee Digest", "time": "1d ago" }
    ],
    "aiSynthesis": "France benefits from low-carbon nuclear power and aerospace exports. Fiscal consolidation and lowering public debt (110.6% of GDP) represent the top structural agenda items."
  },
  "IND": {
    "name": "India",
    "iso3": "IND",
    "region": "South Asia",
    "flag": "🇮🇳",
    "coordinates": [20.5937, 78.9629],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BBB-",
    "ratingTier": "lower-medium",
    "landArea": 3287263,
    "population": "1.43B",
    "gdpNominal": "$3.73T",
    "gdpGrowthYoY": 7.2,
    "inflationCPI": 4.8,
    "unemployment": 6.8,
    "debtToGdp": 81.9,
    "budgetBalance": -5.1,
    "interestRate": 6.50,
    "foreignReserves": "$670.6B",
    "gdpPerCapita": "$2,612",
    "fiveCoreMatrix": {
      "hci": 0.49,
      "povertyRate": 10.2,
      "electricityAccess": 99.6,
      "broadband": 62.4,
      "carbonIntensity": 1.9
    },
    "flagshipProject": {
      "title": "PM GatiShakti National Master Plan Multi-Modal Infra",
      "progress": 71,
      "budget": "$1.4T"
    },
    "news": [
      { "headline": "India posts 7.2% annual GDP expansion, retaining fastest-growing major economy spot", "source": "Delhi Express", "time": "2h ago" },
      { "headline": "RBI foreign exchange reserves climb to all-time record above $670 Billion", "source": "Mint Macro", "time": "7h ago" },
      { "headline": "Electronics manufacturing production-linked incentive schemes double handset exports", "source": "TechEcon", "time": "1d ago" }
    ],
    "aiSynthesis": "India is the fastest growing major economy globally (+7.2% YoY). Massive public infrastructure capex, digital public infrastructure (UPI/India Stack), and supply chain diversification continue to power momentum."
  },
  "BRA": {
    "name": "Brazil",
    "iso3": "BRA",
    "region": "Latin America & Caribbean",
    "flag": "🇧🇷",
    "coordinates": [-14.2350, -51.9253],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BB",
    "ratingTier": "speculative",
    "landArea": 8515767,
    "population": "215.3M",
    "gdpNominal": "$2.17T",
    "gdpGrowthYoY": 2.9,
    "inflationCPI": 4.1,
    "unemployment": 7.5,
    "debtToGdp": 74.4,
    "budgetBalance": -7.1,
    "interestRate": 10.50,
    "foreignReserves": "$355.2B",
    "gdpPerCapita": "$10,082",
    "fiveCoreMatrix": {
      "hci": 0.55,
      "povertyRate": 4.3,
      "electricityAccess": 99.8,
      "broadband": 81.0,
      "carbonIntensity": 2.2
    },
    "flagshipProject": {
      "title": "New PAC (Growth Acceleration Program) Energy Transition",
      "progress": 42,
      "budget": "$347B"
    },
    "news": [
      { "headline": "Record soybean & commodity harvest drives strong trade surplus balance", "source": "Brasilia Post", "time": "5h ago" },
      { "headline": "Banco Central do Brasil monitors fiscal framework while maintaining real rate cushion", "source": "Folha Macro", "time": "11h ago" },
      { "headline": "Green hydrogen and offshore wind concessions attract European consortia", "source": "EcoPulse", "time": "2d ago" }
    ],
    "aiSynthesis": "Brazil benefits from agricultural dominance and vast clean energy grid (over 85% renewable). High real interest rates help tame inflation but elevate public debt servicing charges."
  },
  "NGA": {
    "name": "Nigeria",
    "iso3": "NGA",
    "region": "Sub-Saharan Africa",
    "flag": "🇳🇬",
    "coordinates": [9.0820, 8.6753],
    "incomeGroup": "Lower-Middle Income",
    "rating": "B-",
    "ratingTier": "highly-speculative",
    "landArea": 923768,
    "population": "223.8M",
    "gdpNominal": "$374.9B",
    "gdpGrowthYoY": 3.1,
    "inflationCPI": 33.4,
    "unemployment": 5.3,
    "debtToGdp": 42.3,
    "budgetBalance": -4.8,
    "interestRate": 26.75,
    "foreignReserves": "$36.8B",
    "gdpPerCapita": "$1,675",
    "fiveCoreMatrix": {
      "hci": 0.36,
      "povertyRate": 30.9,
      "electricityAccess": 59.5,
      "broadband": 43.5,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Dangote Mega Refinery Full Operational Ramp-up",
      "progress": 89,
      "budget": "$19B"
    },
    "news": [
      { "headline": "Central Bank of Nigeria hikes rate to 26.75% to curb persistent food inflation", "source": "Lagos Monitor", "time": "3h ago" },
      { "headline": "Dangote refinery begins direct domestic supply, reducing fuel import drain", "source": "Energy Africa", "time": "9h ago" },
      { "headline": "Naira stabilization measures show signs of narrowing FX parallel gap", "source": "WestAfrica Econ", "time": "1d ago" }
    ],
    "aiSynthesis": "Nigeria is navigating aggressive economic reforms including fuel subsidy removal and FX unification. While driving high short-term inflation (33.4%), reforms are improving fiscal sustainability and attracting FDI."
  },
  "SAU": {
    "name": "Saudi Arabia",
    "iso3": "SAU",
    "region": "Middle East & North Africa",
    "flag": "🇸🇦",
    "coordinates": [23.8859, 45.0792],
    "incomeGroup": "High Income",
    "rating": "A+",
    "ratingTier": "upper-medium",
    "landArea": 2149690,
    "population": "36.4M",
    "gdpNominal": "$1.07T",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 1.6,
    "unemployment": 4.8,
    "debtToGdp": 26.2,
    "budgetBalance": -2.1,
    "interestRate": 5.50,
    "foreignReserves": "$440.0B",
    "gdpPerCapita": "$29,396",
    "fiveCoreMatrix": {
      "hci": 0.58,
      "povertyRate": 0.1,
      "electricityAccess": 100,
      "broadband": 99.0,
      "carbonIntensity": 18.2
    },
    "flagshipProject": {
      "title": "Vision 2030 NEOM & Red Sea Global Hub",
      "progress": 48,
      "budget": "$500B"
    },
    "news": [
      { "headline": "Non-oil GDP sector hits record 50% contribution to national economy", "source": "Riyadh Wire", "time": "4h ago" },
      { "headline": "PIF expands global venture investments across AI, gaming and clean mobility", "source": "Gulf Financial", "time": "16h ago" },
      { "headline": "OPEC+ maintains voluntary crude production quotas to balance global energy market", "source": "Energy Intelligence", "time": "1d ago" }
    ],
    "aiSynthesis": "Saudi Arabia's Vision 2030 transformation has decoupled domestic growth from oil volatility. Low public debt (26.2%) and massive sovereign wealth (PIF) provide fiscal cushion for mega-projects."
  },
  "ZAF": {
    "name": "South Africa",
    "iso3": "ZAF",
    "region": "Sub-Saharan Africa",
    "flag": "🇿🇦",
    "coordinates": [-30.5595, 22.9375],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1219090,
    "population": "60.4M",
    "gdpNominal": "$380.9B",
    "gdpGrowthYoY": 1.0,
    "inflationCPI": 4.6,
    "unemployment": 33.5,
    "debtToGdp": 73.9,
    "budgetBalance": -4.6,
    "interestRate": 8.25,
    "foreignReserves": "$62.1B",
    "gdpPerCapita": "$6,307",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 20.5,
      "electricityAccess": 89.3,
      "broadband": 72.3,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Just Energy Transition Investment Plan (JET-IP)",
      "progress": 31,
      "budget": "$8.5B"
    },
    "news": [
      { "headline": "Government of National Unity signals accelerated private power & port reforms", "source": "Johannesburg Times", "time": "2h ago" },
      { "headline": "Eskom reports 120 consecutive days without rotational load shedding", "source": "SA Power Report", "time": "8h ago" },
      { "headline": "Rand strengthens against major currencies as investor risk premium falls", "source": "Fin24 Macro", "time": "1d ago" }
    ],
    "aiSynthesis": "South Africa is stabilizing its critical power grid and logistics corridors through market-opening structural reforms under the new unity government. High structural unemployment (33.5%) remains the central policy challenge."
  },
  "IDN": {
    "name": "Indonesia",
    "iso3": "IDN",
    "region": "East Asia & Pacific",
    "flag": "🇮🇩",
    "coordinates": [-0.7893, 113.9213],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB",
    "ratingTier": "lower-medium",
    "landArea": 1904569,
    "population": "277.5M",
    "gdpNominal": "$1.37T",
    "gdpGrowthYoY": 5.0,
    "inflationCPI": 2.1,
    "unemployment": 4.8,
    "debtToGdp": 39.1,
    "budgetBalance": -2.3,
    "interestRate": 6.25,
    "foreignReserves": "$140.2B",
    "gdpPerCapita": "$4,942",
    "fiveCoreMatrix": {
      "hci": 0.54,
      "povertyRate": 2.5,
      "electricityAccess": 99.2,
      "broadband": 78.6,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Nusantara (IKN) Smart Forest Capital City",
      "progress": 46,
      "budget": "$35B"
    },
    "news": [
      { "headline": "Nickel downstreaming policy drives $30B mineral processing export surge", "source": "Jakarta Post", "time": "4h ago" },
      { "headline": "Bank Indonesia defends Rupiah stability while keeping inflation well inside 2.5% target", "source": "BI Gazette", "time": "10h ago" },
      { "headline": "Consumer confidence index climbs to 123.4 pointing to steady domestic retail demand", "source": "ASEAN Pulse", "time": "1d ago" }
    ],
    "aiSynthesis": "Indonesia leverages its massive critical minerals wealth (nickel, bauxite) to move up the global EV supply chain. Prudent fiscal management caps debt below 40% of GDP."
  },
  "MEX": {
    "name": "Mexico",
    "iso3": "MEX",
    "region": "Latin America & Caribbean",
    "flag": "🇲🇽",
    "coordinates": [23.6345, -102.5528],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB",
    "ratingTier": "lower-medium",
    "landArea": 1964375,
    "population": "128.5M",
    "gdpNominal": "$1.79T",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 4.9,
    "unemployment": 2.7,
    "debtToGdp": 49.8,
    "budgetBalance": -4.9,
    "interestRate": 10.75,
    "foreignReserves": "$220.8B",
    "gdpPerCapita": "$13,926",
    "fiveCoreMatrix": {
      "hci": 0.61,
      "povertyRate": 2.8,
      "electricityAccess": 99.4,
      "broadband": 76.5,
      "carbonIntensity": 3.7
    },
    "flagshipProject": {
      "title": "Interoceanic Corridor of the Isthmus of Tehuantepec",
      "progress": 64,
      "budget": "$2.8B"
    },
    "news": [
      { "headline": "Nearshoring manufacturing FDI reaches record annual flow from US & Asian firms", "source": "Mexico Business", "time": "3h ago" },
      { "headline": "Banxico cuts benchmark rate by 25 bps to 10.75% in divided policy vote", "source": "El Economista", "time": "9h ago" },
      { "headline": "Automotive exports to North America jump 8.5% YoY led by electric models", "source": "Trade Lens", "time": "1d ago" }
    ],
    "aiSynthesis": "Mexico is the primary beneficiary of North American supply chain nearshoring under USMCA. High real rates and low unemployment (2.7%) sustain robust domestic economic foundations."
  },
  "AUS": {
    "name": "Australia",
    "iso3": "AUS",
    "region": "East Asia & Pacific",
    "flag": "🇦🇺",
    "coordinates": [-25.2744, 133.7751],
    "incomeGroup": "High Income",
    "rating": "AAA",
    "ratingTier": "prime",
    "landArea": 7692024,
    "population": "26.5M",
    "gdpNominal": "$1.72T",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 3.8,
    "unemployment": 4.1,
    "debtToGdp": 49.3,
    "budgetBalance": 0.5,
    "interestRate": 4.35,
    "foreignReserves": "$60.5B",
    "gdpPerCapita": "$64,964",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.3,
      "electricityAccess": 100,
      "broadband": 91.5,
      "carbonIntensity": 15.0
    },
    "flagshipProject": {
      "title": "Future Made in Australia Clean Energy & Critical Minerals Act",
      "progress": 35,
      "budget": "A$22.7B"
    },
    "news": [
      { "headline": "RBA holds cash rate at 4.35% warning that trimmed mean inflation remains elevated", "source": "Sydney Morning Macro", "time": "4h ago" },
      { "headline": "Lithium & critical mineral export contracts signed with Japanese and US allies", "source": "Minerals Daily", "time": "12h ago" },
      { "headline": "Federal budget records second consecutive annual surplus on commodity royalties", "source": "Canberra Dispatch", "time": "1d ago" }
    ],
    "aiSynthesis": "Australia maintains a AAA sovereign credit rating supported by strong terms of trade and resource royalties. Sticky service inflation keeps monetary policy firmly in restrictive territory."
  },
  "ETH": {
    "name": "Ethiopia",
    "iso3": "ETH",
    "region": "Sub-Saharan Africa",
    "flag": "🇪🇹",
    "coordinates": [9.1450, 40.4897],
    "incomeGroup": "Low Income",
    "rating": "CCC",
    "ratingTier": "default-risk",
    "landArea": 1104300,
    "population": "126.5M",
    "gdpNominal": "$163.7B",
    "gdpGrowthYoY": 6.2,
    "inflationCPI": 23.3,
    "unemployment": 4.0,
    "debtToGdp": 38.8,
    "budgetBalance": -2.8,
    "interestRate": 15.00,
    "foreignReserves": "$1.5B",
    "gdpPerCapita": "$1,294",
    "fiveCoreMatrix": {
      "hci": 0.38,
      "povertyRate": 27.0,
      "electricityAccess": 54.2,
      "broadband": 29.8,
      "carbonIntensity": 0.2
    },
    "flagshipProject": {
      "title": "Grand Ethiopian Renaissance Dam (GERD) Hydropower Station",
      "progress": 96,
      "budget": "$4.8B"
    },
    "news": [
      { "headline": "National Bank of Ethiopia floats Birr currency in landmark IMF debt restructuring pact", "source": "Addis Tribune", "time": "2h ago" },
      { "headline": "GERD completes final turbine installations, preparing 5,150 MW clean power rollout", "source": "East Africa Energy", "time": "10h ago" },
      { "headline": "Coffee & agricultural exports benefit from competitive floating exchange rate", "source": "AgriTrade", "time": "1d ago" }
    ],
    "aiSynthesis": "Ethiopia is transitioning to a market-based floating exchange rate backed by a $3.4B IMF facility. Rapid infrastructure expansion (GERD) anchors high potential growth (+6.2%)."
  },
  "ARG": {
    "name": "Argentina",
    "iso3": "ARG",
    "region": "Latin America & Caribbean",
    "flag": "🇦🇷",
    "coordinates": [-38.4161, -63.6167],
    "incomeGroup": "Upper-Middle Income",
    "rating": "CCC+",
    "ratingTier": "default-risk",
    "landArea": 2780400,
    "population": "46.6M",
    "gdpNominal": "$640.6B",
    "gdpGrowthYoY": -3.5,
    "inflationCPI": 263.4,
    "unemployment": 7.7,
    "debtToGdp": 85.0,
    "budgetBalance": 0.2,
    "interestRate": 40.00,
    "foreignReserves": "$27.5B",
    "gdpPerCapita": "$13,730",
    "fiveCoreMatrix": {
      "hci": 0.60,
      "povertyRate": 8.9,
      "electricityAccess": 100,
      "broadband": 87.2,
      "carbonIntensity": 4.1
    },
    "flagshipProject": {
      "title": "Vaca Muerta Shale Gas Pipeline Infrastructure Network",
      "progress": 78,
      "budget": "$3.2B"
    },
    "news": [
      { "headline": "Government logs six consecutive months of primary and financial fiscal surpluses", "source": "Buenos Aires Econ", "time": "1h ago" },
      { "headline": "Monthly inflation drops from 25% peak down to 4.0% as zero-deficit policy bites", "source": "Mercado Sur", "time": "6h ago" },
      { "headline": "Vaca Muerta energy exports offset sovereign foreign debt maturities", "source": "Oil & Gas Hub", "time": "1d ago" }
    ],
    "aiSynthesis": "Argentina is undergoing drastic fiscal shock therapy, eliminating central bank money printing and generating rare fiscal surpluses, with monthly inflation dropping sharply while facing recessionary adjustment."
  },
  "VNM": {
    "name": "Vietnam",
    "iso3": "VNM",
    "region": "East Asia & Pacific",
    "flag": "🇻🇳",
    "coordinates": [14.0583, 108.2772],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB+",
    "ratingTier": "speculative",
    "landArea": 331212,
    "population": "100.3M",
    "gdpNominal": "$433.7B",
    "gdpGrowthYoY": 6.4,
    "inflationCPI": 4.3,
    "unemployment": 2.3,
    "debtToGdp": 37.1,
    "budgetBalance": -3.6,
    "interestRate": 4.50,
    "foreignReserves": "$94.2B",
    "gdpPerCapita": "$4,324",
    "fiveCoreMatrix": {
      "hci": 0.69,
      "povertyRate": 1.2,
      "electricityAccess": 99.5,
      "broadband": 79.1,
      "carbonIntensity": 3.4
    },
    "flagshipProject": {
      "title": "National Power Development Plan VIII (PDP8)",
      "progress": 40,
      "budget": "$135B"
    },
    "news": [
      { "headline": "Tech assembly & high-end smartphone exports drive double-digit growth in Q2", "source": "Hanoi Times", "time": "3h ago" },
      { "headline": "Global chip giants expand packaging and testing facilities in Da Nang and Bac Ninh", "source": "TechEcon", "time": "9h ago" },
      { "headline": "State Bank of Vietnam maintains accommodative rates to support SMEs", "source": "SBV Bulletin", "time": "1d ago" }
    ],
    "aiSynthesis": "Vietnam is a prime winner of the China+1 global supply chain realignment. Strong manufacturing FDI, high Human Capital Index (0.69) and low sovereign debt (37%) drive rapid convergence."
  },
  "CAN": {
    "name": "Canada",
    "iso3": "CAN",
    "region": "North America",
    "flag": "🇨🇦",
    "coordinates": [56.1304, -106.3468],
    "incomeGroup": "High Income",
    "rating": "AAA",
    "ratingTier": "prime",
    "landArea": 9984670,
    "population": "40.1M",
    "gdpNominal": "$2.14T",
    "gdpGrowthYoY": 1.2,
    "inflationCPI": 2.5,
    "unemployment": 6.4,
    "debtToGdp": 107.4,
    "budgetBalance": -1.8,
    "interestRate": 4.50,
    "foreignReserves": "$118.9B",
    "gdpPerCapita": "$53,372",
    "fiveCoreMatrix": {
      "hci": 0.80,
      "povertyRate": 0.2,
      "electricityAccess": 100,
      "broadband": 94.8,
      "carbonIntensity": 14.2
    },
    "flagshipProject": {
      "title": "Trans Mountain Pipeline Expansion Full Commercial Flow",
      "progress": 98,
      "budget": "C$34B"
    },
    "news": [
      { "headline": "Bank of Canada executes consecutive rate cuts as labor market cools", "source": "Ottawa Journal", "time": "4h ago" },
      { "headline": "Expanded Pacific oil pipeline opens direct crude exports to Asian refineries", "source": "Energy Lens", "time": "11h ago" },
      { "headline": "Clean technology tax credits spur $15B carbon capture and EV battery investments", "source": "EconCanada", "time": "1d ago" }
    ],
    "aiSynthesis": "Canada benefits from natural resource wealth, AAA credit rating, and institutional stability. Monetary easing is underway to balance elevated mortgage refinancing burdens."
  },
  "EGY": {
    "name": "Egypt",
    "iso3": "EGY",
    "region": "Middle East & North Africa",
    "flag": "🇪🇬",
    "coordinates": [26.8206, 30.8025],
    "incomeGroup": "Lower-Middle Income",
    "rating": "B-",
    "ratingTier": "highly-speculative",
    "landArea": 1001450,
    "population": "112.7M",
    "gdpNominal": "$393.5B",
    "gdpGrowthYoY": 2.8,
    "inflationCPI": 25.7,
    "unemployment": 7.0,
    "debtToGdp": 95.8,
    "budgetBalance": -6.9,
    "interestRate": 27.25,
    "foreignReserves": "$46.5B",
    "gdpPerCapita": "$3,491",
    "fiveCoreMatrix": {
      "hci": 0.49,
      "povertyRate": 17.6,
      "electricityAccess": 100,
      "broadband": 72.2,
      "carbonIntensity": 2.5
    },
    "flagshipProject": {
      "title": "Ras El-Hekma Mediterranean Mega Urban Development",
      "progress": 20,
      "budget": "$35B"
    },
    "news": [
      { "headline": "Foreign reserves recover to $46.5B following Ras El-Hekma deal and IMF loan expansion", "source": "Cairo Financial", "time": "5h ago" },
      { "headline": "Suez Canal revenues pressured by Red Sea maritime reroutings", "source": "Trade Observer", "time": "12h ago" },
      { "headline": "Egypt issues inaugural sovereign sustainable green panda bonds", "source": "MENA Capital", "time": "2d ago" }
    ],
    "aiSynthesis": "Egypt received massive sovereign liquidity injections ($35B UAE Ras El-Hekma investment + IMF/EU packages), ending severe FX bottlenecks and stabilizing the currency."
  }
};

window.WORLD_BANK_TIERS = {
  "High Income": { label: "High Income", color: "#1a73e8", bg: "#e8f0fe", gniThreshold: "> $13,935" },
  "Upper-Middle Income": { label: "Upper-Middle Income", color: "#34a853", bg: "#e6f4ea", gniThreshold: "$4,496 - $13,935" },
  "Lower-Middle Income": { label: "Lower-Middle Income", color: "#fbbc04", bg: "#fef7e0", gniThreshold: "$1,136 - $4,495" },
  "Low Income": { label: "Low Income", color: "#ea4335", bg: "#fce8e6", gniThreshold: "≤ $1,135" }
};
