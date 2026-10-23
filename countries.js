// Comprehensive Global Macroeconomic Dataset for Macro Lab (177+ Sovereign Nations)
// Grounded in official World Bank classifications, Natural Earth statistics & GMD indicators

window.GLOBAL_STATS = {
  globalGdp: "$105.4T",
  globalDebt: "92.8% PIB",
  medianInflation: "3.4%"
};

window.GLOBAL_NORMS = {
  hci: 0.57, // World average Human Capital Index (0 - 1.0)
  povertyRate: 8.5, // World average extreme poverty rate (% < $2.15/day)
  electricityAccess: 91.4, // World average electricity grid access (%)
  broadband: 67.0, // World average broadband penetration (%)
  carbonIntensity: 4.6 // World average CO2 metric tons / capita
};

// Official World Bank GNI Per Capita Income Classifications
window.WORLD_BANK_TIERS = {
  "Low Income": {
    label: "Low Income",
    gniThreshold: "≤ $1,135",
    color: "#ea4335",
    bg: "#fce8e6",
    description: "Economies with GNI per capita of $1,135 or less. Facing acute capital constraints and structural development hurdles."
  },
  "Lower-Middle Income": {
    label: "Lower-Middle Income",
    gniThreshold: "$1,136 - $4,495",
    color: "#fbbc04",
    bg: "#fef7e0",
    description: "Developing economies building manufacturing base and transitioning from subsistence agriculture to modern industries."
  },
  "Upper-Middle Income": {
    label: "Upper-Middle Income",
    gniThreshold: "$4,496 – $13,935",
    color: "#34a853",
    bg: "#e6f4ea",
    description: "Rapid industrialization, high secondary education enrollment, but facing middle-income traps and aging demographics."
  },
  "High Income": {
    label: "High Income",
    gniThreshold: "> $13,935",
    color: "#1a73e8",
    bg: "#e8f0fe",
    description: "Advanced post-industrial economies driven by services, cutting-edge technology, and deep capital markets."
  }
};

window.COUNTRIES_DATA = {
  "USA": {
    "name": "United States",
    "iso3": "USA",
    "continent": "North America",
    "region": "North America",
    "flag": "🇺🇸",
    "coordinates": [
      37.0902,
      -95.7129
    ],
    "incomeGroup": "High Income",
    "rating": "AA+",
    "ratingTier": "prime",
    "landArea": 9833517,
    "population": "334.9M",
    "gdpNominal": "$27.36T",
    "gdpGrowthYoY": 2.5,
    "inflationCPI": 3.1,
    "unemployment": 3.7,
    "debtToGdp": 122.3,
    "budgetBalance": -6.3,
    "currentAccount": -3,
    "interestRate": 5.25,
    "bondYield10Y": 3.92,
    "foreignReserves": "$242.6B",
    "gdpPerCapita": "$81,695",
    "fiveCoreMatrix": {
      "hci": 0.7,
      "povertyRate": 1,
      "electricityAccess": 100,
      "broadband": 92.4,
      "carbonIntensity": 14.4
    },
    "flagshipProject": {
      "title": "CHIPS & Science Act Implementation",
      "progress": 68,
      "budget": "$52.7B"
    },
    "news": [
      {
        "headline": "Federal Reserve maintains steady funds rate amid sticky services CPI",
        "source": "Macro Wire",
        "time": "2h ago"
      },
      {
        "headline": "Treasury yield curve shows gradual steepening as recession fears ease",
        "source": "Yield Desk",
        "time": "5h ago"
      },
      {
        "headline": "Semiconductor manufacturing subsidies trigger $200B private capex surge",
        "source": "TechEcon",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "The US economy demonstrates resilient consumer spending and robust labor dynamics. However, elevated sovereign debt trajectory (122% of GDP) and chronic fiscal deficits require careful monetary-fiscal coordination."
  },
  "CHN": {
    "name": "China",
    "iso3": "CHN",
    "continent": "Asia",
    "region": "East Asia & Pacific",
    "flag": "🇨🇳",
    "coordinates": [
      35.8617,
      104.1954
    ],
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
    "currentAccount": 1.8,
    "interestRate": 3.45,
    "bondYield10Y": 2.14,
    "foreignReserves": "$3.24T",
    "gdpPerCapita": "$12,614",
    "fiveCoreMatrix": {
      "hci": 0.65,
      "povertyRate": 0.1,
      "electricityAccess": 100,
      "broadband": 88.5,
      "carbonIntensity": 8
    },
    "flagshipProject": {
      "title": "National Green Energy Corridor Grid Expansion",
      "progress": 82,
      "budget": "$120B"
    },
    "news": [
      {
        "headline": "PBOC eases reserve requirement ratio to stimulate liquidity and real estate",
        "source": "Asia Macro",
        "time": "3h ago"
      },
      {
        "headline": "EV exports reach record highs across ASEAN and European corridors",
        "source": "Trade Lens",
        "time": "8h ago"
      },
      {
        "headline": "Local government financing vehicle restructuring gains regulatory traction",
        "source": "Fiscal Pulse",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "China is undergoing a structural pivot towards high-tech manufacturing, clean energy, and AI infra. Disinflationary pressures and property sector restructuring remain the primary transition friction points."
  },
  "DEU": {
    "name": "Germany",
    "iso3": "DEU",
    "continent": "Europe",
    "region": "Europe & Central Asia",
    "flag": "🇩🇪",
    "coordinates": [
      51.1657,
      10.4515
    ],
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
    "budgetBalance": -2,
    "currentAccount": 5.8,
    "interestRate": 4,
    "bondYield10Y": 2.25,
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
      {
        "headline": "Manufacturing PMI edges closer to expansion line after 18-month slump",
        "source": "EuroMonitor",
        "time": "4h ago"
      },
      {
        "headline": "Renewable electricity share tops 56% in national power mix",
        "source": "CleanTech Intel",
        "time": "12h ago"
      },
      {
        "headline": "Constitutional debt-brake debate intensifies ahead of federal budget review",
        "source": "Berlin Policy",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Europe's largest economy is adapting to post-Russian energy realignment and industrial digitization. Strict fiscal rules (Schuldenbremse) preserve fiscal strength despite moderate growth headwinds."
  },
  "JPN": {
    "name": "Japan",
    "iso3": "JPN",
    "continent": "Asia",
    "region": "East Asia & Pacific",
    "flag": "🇯🇵",
    "coordinates": [
      36.2048,
      138.2529
    ],
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
    "currentAccount": 3.6,
    "interestRate": 0.25,
    "bondYield10Y": 0.88,
    "foreignReserves": "$1.29T",
    "gdpPerCapita": "$33,806",
    "fiveCoreMatrix": {
      "hci": 0.8,
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
      {
        "headline": "Bank of Japan evaluates further rate normalization as wage growth solidifies",
        "source": "Tokyo Bureau",
        "time": "1h ago"
      },
      {
        "headline": "Nikkei rally fueled by corporate governance overhauls and foreign inflows",
        "source": "Market Watch",
        "time": "6h ago"
      },
      {
        "headline": "Inbound tourism surpasses pre-pandemic peak, boosting regional retail",
        "source": "Japan Macro",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Japan is breaking out of decades of deflation with positive real wage dynamics and BOJ yield curve control normalization, despite world-leading sovereign debt-to-GDP levels (261%)."
  },
  "KOR": {
    "name": "South Korea",
    "iso3": "KOR",
    "continent": "Asia",
    "region": "East Asia & Pacific",
    "flag": "🇰🇷",
    "coordinates": [
      35.9078,
      127.7669
    ],
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
    "currentAccount": 3.2,
    "interestRate": 3.5,
    "bondYield10Y": 3.18,
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
      {
        "headline": "July Trade Balance surges to $30.39B powered by HBM & AI memory shipments",
        "source": "Seoul Economic",
        "time": "30m ago"
      },
      {
        "headline": "Bank of Korea holds base rate steady while monitoring household debt",
        "source": "BOK Dispatch",
        "time": "4h ago"
      },
      {
        "headline": "K-pop & content cultural exports break $15B milestone worldwide",
        "source": "Global Trade",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "South Korea's high-tech export engine is surging due to unprecedented global AI memory and HBM demand. Sound fiscal balances and high R&D intensity provide strong macroeconomic shock resistance."
  },
  "GBR": {
    "name": "United Kingdom",
    "iso3": "GBR",
    "continent": "Europe",
    "region": "Europe & Central Asia",
    "flag": "🇬🇧",
    "coordinates": [
      55.3781,
      -3.436
    ],
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
    "currentAccount": -3.3,
    "interestRate": 5,
    "bondYield10Y": 3.98,
    "foreignReserves": "$178.5B",
    "gdpPerCapita": "$49,099",
    "fiveCoreMatrix": {
      "hci": 0.78,
      "povertyRate": 0.2,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 4.7
    },
    "flagshipProject": {
      "title": "National Wealth Fund & Clean Power 2030",
      "progress": 25,
      "budget": "£7.3B"
    },
    "news": [
      {
        "headline": "Bank of England delivers first rate cut to 5.00% amid cooling wage pressures",
        "source": "Threadneedle Report",
        "time": "5h ago"
      },
      {
        "headline": "Services output leads steady quarterly expansion across UK regions",
        "source": "ONS Insights",
        "time": "14h ago"
      },
      {
        "headline": "Chancellor announces strict fiscal headroom targets in Autumn statement",
        "source": "Westminster Econ",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "UK inflation is normalizing towards the 2% target, allowing BOE easing. Fiscal headroom remains tight with debt hovering near 100% of GDP, focusing policy on supply-side investment and planning reforms."
  },
  "FRA": {
    "name": "France",
    "iso3": "FRA",
    "continent": "Europe",
    "region": "Europe & Central Asia",
    "flag": "🇫🇷",
    "coordinates": [
      46.2276,
      2.2137
    ],
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
    "currentAccount": -0.7,
    "interestRate": 4,
    "bondYield10Y": 2.98,
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
      {
        "headline": "Tourism revenues hit historic high following major global cultural events",
        "source": "Paris Brief",
        "time": "6h ago"
      },
      {
        "headline": "European Commission issues fiscal trajectory recommendations to Bercy",
        "source": "EU Tribune",
        "time": "18h ago"
      },
      {
        "headline": "Aeronautics & luxury exports maintain multi-billion trade surplus buffer",
        "source": "Insee Digest",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "France benefits from low-carbon nuclear power and aerospace exports. Fiscal consolidation and lowering public debt (110.6% of GDP) represent the top structural agenda items."
  },
  "IND": {
    "name": "India",
    "iso3": "IND",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇮🇳",
    "coordinates": [
      20.5937,
      78.9629
    ],
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
    "currentAccount": -1.2,
    "interestRate": 6.5,
    "bondYield10Y": 6.98,
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
      {
        "headline": "India posts 7.2% annual GDP expansion, retaining fastest-growing major economy spot",
        "source": "Delhi Express",
        "time": "2h ago"
      },
      {
        "headline": "RBI foreign exchange reserves climb to all-time record above $670 Billion",
        "source": "Mint Macro",
        "time": "7h ago"
      },
      {
        "headline": "Electronics manufacturing production-linked incentive schemes double handset exports",
        "source": "TechEcon",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "India is the fastest growing major economy globally (+7.2% YoY). Massive public infrastructure capex, digital public infrastructure (UPI/India Stack), and supply chain diversification continue to power momentum."
  },
  "BRA": {
    "name": "Brazil",
    "iso3": "BRA",
    "continent": "South America",
    "region": "Latin America & Caribbean",
    "flag": "🇧🇷",
    "coordinates": [
      -14.235,
      -51.9253
    ],
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
    "currentAccount": -1.4,
    "interestRate": 10.5,
    "bondYield10Y": 11.85,
    "foreignReserves": "$355.2B",
    "gdpPerCapita": "$10,082",
    "fiveCoreMatrix": {
      "hci": 0.55,
      "povertyRate": 4.3,
      "electricityAccess": 99.8,
      "broadband": 81,
      "carbonIntensity": 2.2
    },
    "flagshipProject": {
      "title": "New PAC (Growth Acceleration Program) Energy Transition",
      "progress": 42,
      "budget": "$347B"
    },
    "news": [
      {
        "headline": "Record soybean & commodity harvest drives strong trade surplus balance",
        "source": "Brasilia Post",
        "time": "5h ago"
      },
      {
        "headline": "Banco Central do Brasil monitors fiscal framework while maintaining real rate cushion",
        "source": "Folha Macro",
        "time": "11h ago"
      },
      {
        "headline": "Green hydrogen and offshore wind concessions attract European consortia",
        "source": "EcoPulse",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Brazil benefits from agricultural dominance and vast clean energy grid (over 85% renewable). High real interest rates help tame inflation but elevate public debt servicing charges."
  },
  "NGA": {
    "name": "Nigeria",
    "iso3": "NGA",
    "continent": "Africa",
    "region": "Sub-Saharan Africa",
    "flag": "🇳🇬",
    "coordinates": [
      9.082,
      8.6753
    ],
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
    "currentAccount": 0.9,
    "interestRate": 26.75,
    "bondYield10Y": 19.4,
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
      {
        "headline": "Central Bank of Nigeria hikes rate to 26.75% to curb persistent food inflation",
        "source": "Lagos Monitor",
        "time": "3h ago"
      },
      {
        "headline": "Dangote refinery begins direct domestic supply, reducing fuel import drain",
        "source": "Energy Africa",
        "time": "9h ago"
      },
      {
        "headline": "Naira stabilization measures show signs of narrowing FX parallel gap",
        "source": "WestAfrica Econ",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Nigeria is navigating aggressive economic reforms including fuel subsidy removal and FX unification. While driving high short-term inflation (33.4%), reforms are improving fiscal sustainability and attracting FDI."
  },
  "SAU": {
    "name": "Saudi Arabia",
    "iso3": "SAU",
    "continent": "Asia",
    "region": "Middle East & North Africa",
    "flag": "🇸🇦",
    "coordinates": [
      23.8859,
      45.0792
    ],
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
    "currentAccount": 4.5,
    "interestRate": 5.5,
    "bondYield10Y": 4.65,
    "foreignReserves": "$440.0B",
    "gdpPerCapita": "$29,396",
    "fiveCoreMatrix": {
      "hci": 0.58,
      "povertyRate": 0.1,
      "electricityAccess": 100,
      "broadband": 99,
      "carbonIntensity": 18.2
    },
    "flagshipProject": {
      "title": "Vision 2030 NEOM & Red Sea Global Hub",
      "progress": 48,
      "budget": "$500B"
    },
    "news": [
      {
        "headline": "Non-oil GDP sector hits record 50% contribution to national economy",
        "source": "Riyadh Wire",
        "time": "4h ago"
      },
      {
        "headline": "PIF expands global venture investments across AI, gaming and clean mobility",
        "source": "Gulf Financial",
        "time": "16h ago"
      },
      {
        "headline": "OPEC+ maintains voluntary crude production quotas to balance global energy market",
        "source": "Energy Intelligence",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Saudi Arabia's Vision 2030 transformation has decoupled domestic growth from oil volatility. Low public debt (26.2%) and massive sovereign wealth (PIF) provide fiscal cushion for mega-projects."
  },
  "ZAF": {
    "name": "South Africa",
    "iso3": "ZAF",
    "continent": "Africa",
    "region": "Sub-Saharan Africa",
    "flag": "🇿🇦",
    "coordinates": [
      -30.5595,
      22.9375
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1219090,
    "population": "60.4M",
    "gdpNominal": "$380.9B",
    "gdpGrowthYoY": 1,
    "inflationCPI": 4.6,
    "unemployment": 33.5,
    "debtToGdp": 73.9,
    "budgetBalance": -4.6,
    "currentAccount": -1.8,
    "interestRate": 8.25,
    "bondYield10Y": 10.45,
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
      {
        "headline": "Government of National Unity signals accelerated private power & port reforms",
        "source": "Johannesburg Times",
        "time": "2h ago"
      },
      {
        "headline": "Eskom reports 120 consecutive days without rotational load shedding",
        "source": "SA Power Report",
        "time": "8h ago"
      },
      {
        "headline": "Rand strengthens against major currencies as investor risk premium falls",
        "source": "Fin24 Macro",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "South Africa is stabilizing its critical power grid and logistics corridors through market-opening structural reforms under the new unity government. High structural unemployment (33.5%) remains the central policy challenge."
  },
  "IDN": {
    "name": "Indonesia",
    "iso3": "IDN",
    "continent": "Asia",
    "region": "East Asia & Pacific",
    "flag": "🇮🇩",
    "coordinates": [
      -0.7893,
      113.9213
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB",
    "ratingTier": "lower-medium",
    "landArea": 1904569,
    "population": "277.5M",
    "gdpNominal": "$1.37T",
    "gdpGrowthYoY": 5,
    "inflationCPI": 2.1,
    "unemployment": 4.8,
    "debtToGdp": 39.1,
    "budgetBalance": -2.3,
    "currentAccount": -0.4,
    "interestRate": 6.25,
    "bondYield10Y": 6.62,
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
      {
        "headline": "Nickel downstreaming policy drives $30B mineral processing export surge",
        "source": "Jakarta Post",
        "time": "4h ago"
      },
      {
        "headline": "Bank Indonesia defends Rupiah stability while keeping inflation well inside 2.5% target",
        "source": "BI Gazette",
        "time": "10h ago"
      },
      {
        "headline": "Consumer confidence index climbs to 123.4 pointing to steady domestic retail demand",
        "source": "ASEAN Pulse",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Indonesia leverages its massive critical minerals wealth (nickel, bauxite) to move up the global EV supply chain. Prudent fiscal management caps debt below 40% of GDP."
  },
  "MEX": {
    "name": "Mexico",
    "iso3": "MEX",
    "continent": "North America",
    "region": "Latin America & Caribbean",
    "flag": "🇲🇽",
    "coordinates": [
      23.6345,
      -102.5528
    ],
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
    "currentAccount": -1.1,
    "interestRate": 10.75,
    "bondYield10Y": 9.68,
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
      {
        "headline": "Nearshoring manufacturing FDI reaches record annual flow from US & Asian firms",
        "source": "Mexico Business",
        "time": "3h ago"
      },
      {
        "headline": "Banxico cuts benchmark rate by 25 bps to 10.75% in divided policy vote",
        "source": "El Economista",
        "time": "9h ago"
      },
      {
        "headline": "Automotive exports to North America jump 8.5% YoY led by electric models",
        "source": "Trade Lens",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Mexico is the primary beneficiary of North American supply chain nearshoring under USMCA. High real rates and low unemployment (2.7%) sustain robust domestic economic foundations."
  },
  "AUS": {
    "name": "Australia",
    "iso3": "AUS",
    "continent": "Oceania",
    "region": "East Asia & Pacific",
    "flag": "🇦🇺",
    "coordinates": [
      -25.2744,
      133.7751
    ],
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
    "currentAccount": 1.2,
    "interestRate": 4.35,
    "bondYield10Y": 4.12,
    "foreignReserves": "$60.5B",
    "gdpPerCapita": "$64,964",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.3,
      "electricityAccess": 100,
      "broadband": 91.5,
      "carbonIntensity": 15
    },
    "flagshipProject": {
      "title": "Future Made in Australia Clean Energy & Critical Minerals Act",
      "progress": 35,
      "budget": "A$22.7B"
    },
    "news": [
      {
        "headline": "RBA holds cash rate at 4.35% warning that trimmed mean inflation remains elevated",
        "source": "Sydney Morning Macro",
        "time": "4h ago"
      },
      {
        "headline": "Lithium & critical mineral export contracts signed with Japanese and US allies",
        "source": "Minerals Daily",
        "time": "12h ago"
      },
      {
        "headline": "Federal budget records second consecutive annual surplus on commodity royalties",
        "source": "Canberra Dispatch",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Australia maintains a AAA sovereign credit rating supported by strong terms of trade and resource royalties. Sticky service inflation keeps monetary policy firmly in restrictive territory."
  },
  "ETH": {
    "name": "Ethiopia",
    "iso3": "ETH",
    "continent": "Africa",
    "region": "Sub-Saharan Africa",
    "flag": "🇪🇹",
    "coordinates": [
      9.145,
      40.4897
    ],
    "incomeGroup": "Low Income",
    "rating": "CCC",
    "ratingTier": "default-risk",
    "landArea": 1104300,
    "population": "126.5M",
    "gdpNominal": "$163.7B",
    "gdpGrowthYoY": 6.2,
    "inflationCPI": 23.3,
    "unemployment": 4,
    "debtToGdp": 38.8,
    "budgetBalance": -2.8,
    "currentAccount": -4.1,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$1.5B",
    "gdpPerCapita": "$1,294",
    "fiveCoreMatrix": {
      "hci": 0.38,
      "povertyRate": 27,
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
      {
        "headline": "National Bank of Ethiopia floats Birr currency in landmark IMF debt restructuring pact",
        "source": "Addis Tribune",
        "time": "2h ago"
      },
      {
        "headline": "GERD completes final turbine installations, preparing 5,150 MW clean power rollout",
        "source": "East Africa Energy",
        "time": "10h ago"
      },
      {
        "headline": "Coffee & agricultural exports benefit from competitive floating exchange rate",
        "source": "AgriTrade",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Ethiopia is transitioning to a market-based floating exchange rate backed by a $3.4B IMF facility. Rapid infrastructure expansion (GERD) anchors high potential growth (+6.2%)."
  },
  "ARG": {
    "name": "Argentina",
    "iso3": "ARG",
    "continent": "South America",
    "region": "Latin America & Caribbean",
    "flag": "🇦🇷",
    "coordinates": [
      -38.4161,
      -63.6167
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "CCC+",
    "ratingTier": "default-risk",
    "landArea": 2780400,
    "population": "46.6M",
    "gdpNominal": "$640.6B",
    "gdpGrowthYoY": -3.5,
    "inflationCPI": 263.4,
    "unemployment": 7.7,
    "debtToGdp": 85,
    "budgetBalance": 0.2,
    "currentAccount": 2.1,
    "interestRate": 40,
    "bondYield10Y": 24.5,
    "foreignReserves": "$27.5B",
    "gdpPerCapita": "$13,730",
    "fiveCoreMatrix": {
      "hci": 0.6,
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
      {
        "headline": "Government logs six consecutive months of primary and financial fiscal surpluses",
        "source": "Buenos Aires Econ",
        "time": "1h ago"
      },
      {
        "headline": "Monthly inflation drops from 25% peak down to 4.0% as zero-deficit policy bites",
        "source": "Mercado Sur",
        "time": "6h ago"
      },
      {
        "headline": "Vaca Muerta energy exports offset sovereign foreign debt maturities",
        "source": "Oil & Gas Hub",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Argentina is undergoing drastic fiscal shock therapy, eliminating central bank money printing and generating rare fiscal surpluses, with monthly inflation dropping sharply while facing recessionary adjustment."
  },
  "VNM": {
    "name": "Vietnam",
    "iso3": "VNM",
    "continent": "Asia",
    "region": "East Asia & Pacific",
    "flag": "🇻🇳",
    "coordinates": [
      14.0583,
      108.2772
    ],
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
    "currentAccount": 4.8,
    "interestRate": 4.5,
    "bondYield10Y": 2.85,
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
      {
        "headline": "Tech assembly & high-end smartphone exports drive double-digit growth in Q2",
        "source": "Hanoi Times",
        "time": "3h ago"
      },
      {
        "headline": "Global chip giants expand packaging and testing facilities in Da Nang and Bac Ninh",
        "source": "TechEcon",
        "time": "9h ago"
      },
      {
        "headline": "State Bank of Vietnam maintains accommodative rates to support SMEs",
        "source": "SBV Bulletin",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Vietnam is a prime winner of the China+1 global supply chain realignment. Strong manufacturing FDI, high Human Capital Index (0.69) and low sovereign debt (37%) drive rapid convergence."
  },
  "CAN": {
    "name": "Canada",
    "iso3": "CAN",
    "continent": "North America",
    "region": "North America",
    "flag": "🇨🇦",
    "coordinates": [
      56.1304,
      -106.3468
    ],
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
    "currentAccount": -0.6,
    "interestRate": 4.5,
    "bondYield10Y": 3.14,
    "foreignReserves": "$118.9B",
    "gdpPerCapita": "$53,372",
    "fiveCoreMatrix": {
      "hci": 0.8,
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
      {
        "headline": "Bank of Canada executes consecutive rate cuts as labor market cools",
        "source": "Ottawa Journal",
        "time": "4h ago"
      },
      {
        "headline": "Expanded Pacific oil pipeline opens direct crude exports to Asian refineries",
        "source": "Energy Lens",
        "time": "11h ago"
      },
      {
        "headline": "Clean technology tax credits spur $15B carbon capture and EV battery investments",
        "source": "EconCanada",
        "time": "1d ago"
      }
    ],
    "aiSynthesis": "Canada benefits from natural resource wealth, AAA credit rating, and institutional stability. Monetary easing is underway to balance elevated mortgage refinancing burdens."
  },
  "EGY": {
    "name": "Egypt",
    "iso3": "EGY",
    "continent": "Africa",
    "region": "Middle East & North Africa",
    "flag": "🇪🇬",
    "coordinates": [
      26.8206,
      30.8025
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "B-",
    "ratingTier": "highly-speculative",
    "landArea": 1001450,
    "population": "112.7M",
    "gdpNominal": "$393.5B",
    "gdpGrowthYoY": 2.8,
    "inflationCPI": 25.7,
    "unemployment": 7,
    "debtToGdp": 95.8,
    "budgetBalance": -6.9,
    "currentAccount": -3.5,
    "interestRate": 27.25,
    "bondYield10Y": 25.1,
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
      {
        "headline": "Foreign reserves recover to $46.5B following Ras El-Hekma deal and IMF loan expansion",
        "source": "Cairo Financial",
        "time": "5h ago"
      },
      {
        "headline": "Suez Canal revenues pressured by Red Sea maritime reroutings",
        "source": "Trade Observer",
        "time": "12h ago"
      },
      {
        "headline": "Egypt issues inaugural sovereign sustainable green panda bonds",
        "source": "MENA Capital",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Egypt received massive sovereign liquidity injections ($35B UAE Ras El-Hekma investment + IMF/EU packages), ending severe FX bottlenecks and stabilizing the currency."
  },
  "FJI": {
    "name": "Fiji",
    "iso3": "FJI",
    "continent": "Oceania",
    "region": "Melanesia",
    "flag": "🇫🇯",
    "coordinates": [
      -16.9458,
      97.1753
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 50598,
    "population": "890K",
    "gdpNominal": "$5.5B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 8.7,
    "unemployment": 6.5,
    "debtToGdp": 55,
    "budgetBalance": -4.1,
    "currentAccount": 0.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$1 160M",
    "gdpPerCapita": "$6 176",
    "fiveCoreMatrix": {
      "hci": 0.48,
      "povertyRate": 26,
      "electricityAccess": 79,
      "broadband": 62,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Fiji National Infrastructure Modernization",
      "progress": 70,
      "budget": "$325M"
    },
    "news": [
      {
        "headline": "Fiji Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Fiji reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Fiji",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Fiji is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $5.5B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (55% of GDP) and inflation containment (8.7% CPI)."
  },
  "TZA": {
    "name": "Tanzania",
    "iso3": "TZA",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇹🇿",
    "coordinates": [
      -6.5443,
      34.3141
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 2335219,
    "population": "58.0M",
    "gdpNominal": "$63.2B",
    "gdpGrowthYoY": 5.9,
    "inflationCPI": 12.5,
    "unemployment": 8,
    "debtToGdp": 85,
    "budgetBalance": -2.5,
    "currentAccount": 2.5,
    "interestRate": 18,
    "bondYield10Y": 21.5,
    "foreignReserves": "$8 081M",
    "gdpPerCapita": "$1 089",
    "fiveCoreMatrix": {
      "hci": 0.4,
      "povertyRate": 47,
      "electricityAccess": 47,
      "broadband": 34,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Tanzania National Infrastructure Modernization",
      "progress": 84,
      "budget": "$3209M"
    },
    "news": [
      {
        "headline": "Tanzania Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Tanzania reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Tanzania",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Tanzania is currently classified under the World Bank Low Income tier. With nominal GDP around $63.2B and growth tracking at 5.9%, macroeconomic policy focuses on debt sustainability (85% of GDP) and inflation containment (12.5% CPI)."
  },
  "ESH": {
    "name": "W. Sahara",
    "iso3": "ESH",
    "continent": "Africa",
    "region": "Northern Africa",
    "flag": "🇪🇭",
    "coordinates": [
      24.7777,
      -12.0274
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 39130,
    "population": "603K",
    "gdpNominal": "$907M",
    "gdpGrowthYoY": 5.9,
    "inflationCPI": 14,
    "unemployment": 11,
    "debtToGdp": 92,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 18,
    "bondYield10Y": 21.5,
    "foreignReserves": "$609M",
    "gdpPerCapita": "$1 504",
    "fiveCoreMatrix": {
      "hci": 0.45,
      "povertyRate": 40,
      "electricityAccess": 54,
      "broadband": 27,
      "carbonIntensity": 0.4
    },
    "flagshipProject": {
      "title": "W. Sahara National Infrastructure Modernization",
      "progress": 69,
      "budget": "$95M"
    },
    "news": [
      {
        "headline": "W. Sahara Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of W. Sahara reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for W. Sahara",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "W. Sahara is currently classified under the World Bank Low Income tier. With nominal GDP around $907M and growth tracking at 5.9%, macroeconomic policy focuses on debt sustainability (92% of GDP) and inflation containment (14% CPI)."
  },
  "KAZ": {
    "name": "Kazakhstan",
    "iso3": "KAZ",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇰🇿",
    "coordinates": [
      47.2638,
      65.2524
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 755557,
    "population": "18.5M",
    "gdpNominal": "$181.7B",
    "gdpGrowthYoY": 3.2,
    "inflationCPI": 3.5,
    "unemployment": 5,
    "debtToGdp": 55,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$22 300M",
    "gdpPerCapita": "$9 812",
    "fiveCoreMatrix": {
      "hci": 0.65,
      "povertyRate": 3.5,
      "electricityAccess": 94,
      "broadband": 73,
      "carbonIntensity": 4
    },
    "flagshipProject": {
      "title": "Kazakhstan National Infrastructure Modernization",
      "progress": 75,
      "budget": "$9133M"
    },
    "news": [
      {
        "headline": "Kazakhstan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Kazakhstan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Kazakhstan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Kazakhstan is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $181.7B and growth tracking at 3.2%, macroeconomic policy focuses on debt sustainability (55% of GDP) and inflation containment (3.5% CPI)."
  },
  "UZB": {
    "name": "Uzbekistan",
    "iso3": "UZB",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇺🇿",
    "coordinates": [
      41.1526,
      65.2892
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1358226,
    "population": "33.6M",
    "gdpNominal": "$57.9B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 10.3,
    "unemployment": 6.5,
    "debtToGdp": 83,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$7 451M",
    "gdpPerCapita": "$1 725",
    "fiveCoreMatrix": {
      "hci": 0.53,
      "povertyRate": 12,
      "electricityAccess": 90,
      "broadband": 58,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Uzbekistan National Infrastructure Modernization",
      "progress": 85,
      "budget": "$2946M"
    },
    "news": [
      {
        "headline": "Uzbekistan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Uzbekistan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Uzbekistan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Uzbekistan is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $57.9B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (10.3% CPI)."
  },
  "PNG": {
    "name": "Papua New Guinea",
    "iso3": "PNG",
    "continent": "Oceania",
    "region": "Melanesia",
    "flag": "🇵🇬",
    "coordinates": [
      -6.1358,
      149.6481
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 366044,
    "population": "8.8M",
    "gdpNominal": "$24.8B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 6.3,
    "unemployment": 6.5,
    "debtToGdp": 53,
    "budgetBalance": -2.5,
    "currentAccount": -2.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$3 479M",
    "gdpPerCapita": "$2 829",
    "fiveCoreMatrix": {
      "hci": 0.48,
      "povertyRate": 15,
      "electricityAccess": 95,
      "broadband": 66,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Papua New Guinea National Infrastructure Modernization",
      "progress": 80,
      "budget": "$1291M"
    },
    "news": [
      {
        "headline": "Papua New Guinea Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Papua New Guinea reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Papua New Guinea",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Papua New Guinea is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $24.8B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (53% of GDP) and inflation containment (6.3% CPI)."
  },
  "CHL": {
    "name": "Chile",
    "iso3": "CHL",
    "continent": "South America",
    "region": "South America",
    "flag": "🇨🇱",
    "coordinates": [
      -40.9317,
      -71.2162
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 773082,
    "population": "19.0M",
    "gdpNominal": "$282.3B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 4.7,
    "unemployment": 6.2,
    "debtToGdp": 81,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$34 378M",
    "gdpPerCapita": "$14 896",
    "fiveCoreMatrix": {
      "hci": 0.67,
      "povertyRate": 5.5,
      "electricityAccess": 98,
      "broadband": 80,
      "carbonIntensity": 4.8
    },
    "flagshipProject": {
      "title": "Chile National Infrastructure Modernization",
      "progress": 67,
      "budget": "$14166M"
    },
    "news": [
      {
        "headline": "Chile Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Chile reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Chile",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Chile is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $282.3B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (81% of GDP) and inflation containment (4.7% CPI)."
  },
  "COD": {
    "name": "Dem. Rep. Congo",
    "iso3": "COD",
    "continent": "Africa",
    "region": "Middle Africa",
    "flag": "🇨🇩",
    "coordinates": [
      -3.8138,
      23.1269
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 3486623,
    "population": "86.8M",
    "gdpNominal": "$50.4B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 20,
    "unemployment": 9,
    "debtToGdp": 88,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$6 548M",
    "gdpPerCapita": "$581",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 36,
      "electricityAccess": 50,
      "broadband": 43,
      "carbonIntensity": 0.4
    },
    "flagshipProject": {
      "title": "Dem. Rep. Congo National Infrastructure Modernization",
      "progress": 67,
      "budget": "$2570M"
    },
    "news": [
      {
        "headline": "Dem. Rep. Congo Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Dem. Rep. Congo reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Dem. Rep. Congo",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Dem. Rep. Congo is currently classified under the World Bank Low Income tier. With nominal GDP around $50.4B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (88% of GDP) and inflation containment (20% CPI)."
  },
  "SOM": {
    "name": "Somalia",
    "iso3": "SOM",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇸🇴",
    "coordinates": [
      6.5536,
      46.8973
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 422693,
    "population": "10.2M",
    "gdpNominal": "$4.7B",
    "gdpGrowthYoY": 5.3,
    "inflationCPI": 20,
    "unemployment": 13,
    "debtToGdp": 97,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 16.5,
    "bondYield10Y": 20,
    "foreignReserves": "$1 066M",
    "gdpPerCapita": "$463",
    "fiveCoreMatrix": {
      "hci": 0.39,
      "povertyRate": 36,
      "electricityAccess": 59,
      "broadband": 43,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Somalia National Infrastructure Modernization",
      "progress": 83,
      "budget": "$286M"
    },
    "news": [
      {
        "headline": "Somalia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Somalia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Somalia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Somalia is currently classified under the World Bank Low Income tier. With nominal GDP around $4.7B and growth tracking at 5.3%, macroeconomic policy focuses on debt sustainability (97% of GDP) and inflation containment (20% CPI)."
  },
  "KEN": {
    "name": "Kenya",
    "iso3": "KEN",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇰🇪",
    "coordinates": [
      1.1145,
      37.8237
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 2117959,
    "population": "52.6M",
    "gdpNominal": "$95.5B",
    "gdpGrowthYoY": 3.5,
    "inflationCPI": 17,
    "unemployment": 11,
    "debtToGdp": 98,
    "budgetBalance": -4.9,
    "currentAccount": 2.5,
    "interestRate": 12,
    "bondYield10Y": 15.5,
    "foreignReserves": "$11 960M",
    "gdpPerCapita": "$1 817",
    "fiveCoreMatrix": {
      "hci": 0.41,
      "povertyRate": 51,
      "electricityAccess": 60,
      "broadband": 33,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Kenya National Infrastructure Modernization",
      "progress": 75,
      "budget": "$4825M"
    },
    "news": [
      {
        "headline": "Kenya Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Kenya reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Kenya",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Kenya is currently classified under the World Bank Low Income tier. With nominal GDP around $95.5B and growth tracking at 3.5%, macroeconomic policy focuses on debt sustainability (98% of GDP) and inflation containment (17% CPI)."
  },
  "SDN": {
    "name": "Sudan",
    "iso3": "SDN",
    "continent": "Africa",
    "region": "Northern Africa",
    "flag": "🇸🇩",
    "coordinates": [
      12.808,
      29.3374
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1727530,
    "population": "42.8M",
    "gdpNominal": "$30.5B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 9.5,
    "unemployment": 8.6,
    "debtToGdp": 60,
    "budgetBalance": -4.9,
    "currentAccount": 1.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$4 162M",
    "gdpPerCapita": "$713",
    "fiveCoreMatrix": {
      "hci": 0.51,
      "povertyRate": 20,
      "electricityAccess": 84,
      "broadband": 56,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Sudan National Infrastructure Modernization",
      "progress": 83,
      "budget": "$1576M"
    },
    "news": [
      {
        "headline": "Sudan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Sudan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Sudan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Sudan is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $30.5B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (60% of GDP) and inflation containment (9.5% CPI)."
  },
  "TCD": {
    "name": "Chad",
    "iso3": "TCD",
    "continent": "Africa",
    "region": "Middle Africa",
    "flag": "🇹🇩",
    "coordinates": [
      12.9957,
      17.9956
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 652875,
    "population": "15.9M",
    "gdpNominal": "$11.3B",
    "gdpGrowthYoY": 5.9,
    "inflationCPI": 14,
    "unemployment": 8,
    "debtToGdp": 88,
    "budgetBalance": -2.5,
    "currentAccount": 0.5,
    "interestRate": 18,
    "bondYield10Y": 21.5,
    "foreignReserves": "$1 858M",
    "gdpPerCapita": "$709",
    "fiveCoreMatrix": {
      "hci": 0.4,
      "povertyRate": 49,
      "electricityAccess": 50,
      "broadband": 31,
      "carbonIntensity": 0.4
    },
    "flagshipProject": {
      "title": "Chad National Infrastructure Modernization",
      "progress": 84,
      "budget": "$616M"
    },
    "news": [
      {
        "headline": "Chad Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Chad reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Chad",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Chad is currently classified under the World Bank Low Income tier. With nominal GDP around $11.3B and growth tracking at 5.9%, macroeconomic policy focuses on debt sustainability (88% of GDP) and inflation containment (14% CPI)."
  },
  "HTI": {
    "name": "Haiti",
    "iso3": "HTI",
    "continent": "North America",
    "region": "Caribbean",
    "flag": "🇭🇹",
    "coordinates": [
      18.8396,
      -72.7025
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 465523,
    "population": "11.3M",
    "gdpNominal": "$14.3B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 15.5,
    "unemployment": 8,
    "debtToGdp": 93,
    "budgetBalance": -2.5,
    "currentAccount": -3.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$2 220M",
    "gdpPerCapita": "$1 272",
    "fiveCoreMatrix": {
      "hci": 0.38,
      "povertyRate": 41,
      "electricityAccess": 55,
      "broadband": 28,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Haiti National Infrastructure Modernization",
      "progress": 72,
      "budget": "$767M"
    },
    "news": [
      {
        "headline": "Haiti Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Haiti reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Haiti",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Haiti is currently classified under the World Bank Low Income tier. With nominal GDP around $14.3B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (93% of GDP) and inflation containment (15.5% CPI)."
  },
  "DOM": {
    "name": "Dominican Rep.",
    "iso3": "DOM",
    "continent": "North America",
    "region": "Caribbean",
    "flag": "🇩🇴",
    "coordinates": [
      18.726,
      -70.4934
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 444558,
    "population": "10.7M",
    "gdpNominal": "$88.9B",
    "gdpGrowthYoY": 4.4,
    "inflationCPI": 5.9,
    "unemployment": 6.8,
    "debtToGdp": 82,
    "budgetBalance": -2.5,
    "currentAccount": -1.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$11 173M",
    "gdpPerCapita": "$8 282",
    "fiveCoreMatrix": {
      "hci": 0.68,
      "povertyRate": 7.5,
      "electricityAccess": 99,
      "broadband": 72,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Dominican Rep. National Infrastructure Modernization",
      "progress": 68,
      "budget": "$4497M"
    },
    "news": [
      {
        "headline": "Dominican Rep. Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Dominican Rep. reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Dominican Rep.",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Dominican Rep. is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $88.9B and growth tracking at 4.4%, macroeconomic policy focuses on debt sustainability (82% of GDP) and inflation containment (5.9% CPI)."
  },
  "RUS": {
    "name": "Russia",
    "iso3": "RUS",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇷🇺",
    "coordinates": [
      61.1602,
      76.9155
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 5789941,
    "population": "144.4M",
    "gdpNominal": "$1.70T",
    "gdpGrowthYoY": 4,
    "inflationCPI": 3.5,
    "unemployment": 6.2,
    "debtToGdp": 48,
    "budgetBalance": -4.1,
    "currentAccount": -2.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$204 485M",
    "gdpPerCapita": "$11 774",
    "fiveCoreMatrix": {
      "hci": 0.62,
      "povertyRate": 3.5,
      "electricityAccess": 99,
      "broadband": 78,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "Russia National Infrastructure Modernization",
      "progress": 82,
      "budget": "$85044M"
    },
    "news": [
      {
        "headline": "Russia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Russia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Russia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Russia is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $1.70T and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (48% of GDP) and inflation containment (3.5% CPI)."
  },
  "BHS": {
    "name": "Bahamas",
    "iso3": "BHS",
    "continent": "North America",
    "region": "Caribbean",
    "flag": "🇧🇸",
    "coordinates": [
      25.8364,
      -77.9455
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 30579,
    "population": "389K",
    "gdpNominal": "$13.6B",
    "gdpGrowthYoY": 1.8,
    "inflationCPI": 2.2,
    "unemployment": 4.8,
    "debtToGdp": 73,
    "budgetBalance": -4.1,
    "currentAccount": -1.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$2 129M",
    "gdpPerCapita": "$34 862",
    "fiveCoreMatrix": {
      "hci": 0.78,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 85,
      "carbonIntensity": 13.5
    },
    "flagshipProject": {
      "title": "Bahamas National Infrastructure Modernization",
      "progress": 66,
      "budget": "$729M"
    },
    "news": [
      {
        "headline": "Bahamas Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Bahamas reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Bahamas",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Bahamas is currently classified under the World Bank High Income tier. With nominal GDP around $13.6B and growth tracking at 1.8%, macroeconomic policy focuses on debt sustainability (73% of GDP) and inflation containment (2.2% CPI)."
  },
  "FLK": {
    "name": "Falkland Is.",
    "iso3": "FLK",
    "continent": "South America",
    "region": "South America",
    "flag": "🇫🇰",
    "coordinates": [
      -51.735,
      -59.585
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 15136,
    "population": "3K",
    "gdpNominal": "$282M",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 2.2,
    "unemployment": 4.8,
    "debtToGdp": 65,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$534M",
    "gdpPerCapita": "$82 990",
    "fiveCoreMatrix": {
      "hci": 0.82,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 89,
      "carbonIntensity": 11.1
    },
    "flagshipProject": {
      "title": "Falkland Is. National Infrastructure Modernization",
      "progress": 70,
      "budget": "$64M"
    },
    "news": [
      {
        "headline": "Falkland Is. Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Falkland Is. reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Falkland Is.",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Falkland Is. is currently classified under the World Bank High Income tier. With nominal GDP around $282M and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (65% of GDP) and inflation containment (2.2% CPI)."
  },
  "NOR": {
    "name": "Norway",
    "iso3": "NOR",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇳🇴",
    "coordinates": [
      71.7363,
      18.5972
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 228916,
    "population": "5.3M",
    "gdpNominal": "$403.3B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3.4,
    "unemployment": 4.8,
    "debtToGdp": 72,
    "budgetBalance": -4.1,
    "currentAccount": -1.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$48 900M",
    "gdpPerCapita": "$75 420",
    "fiveCoreMatrix": {
      "hci": 0.75,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 92,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Norway National Infrastructure Modernization",
      "progress": 78,
      "budget": "$20217M"
    },
    "news": [
      {
        "headline": "Norway Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Norway reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Norway",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Norway is currently classified under the World Bank High Income tier. With nominal GDP around $403.3B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (72% of GDP) and inflation containment (3.4% CPI)."
  },
  "GRL": {
    "name": "Greenland",
    "iso3": "GRL",
    "continent": "North America",
    "region": "Northern America",
    "flag": "🇬🇱",
    "coordinates": [
      74.1476,
      -41.0315
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 17249,
    "population": "56K",
    "gdpNominal": "$3.1B",
    "gdpGrowthYoY": 1.8,
    "inflationCPI": 3,
    "unemployment": 5.3,
    "debtToGdp": 66,
    "budgetBalance": -4.9,
    "currentAccount": 1.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$866M",
    "gdpPerCapita": "$54 264",
    "fiveCoreMatrix": {
      "hci": 0.83,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Greenland National Infrastructure Modernization",
      "progress": 71,
      "budget": "$203M"
    },
    "news": [
      {
        "headline": "Greenland Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Greenland reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Greenland",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Greenland is currently classified under the World Bank High Income tier. With nominal GDP around $3.1B and growth tracking at 1.8%, macroeconomic policy focuses on debt sustainability (66% of GDP) and inflation containment (3% CPI)."
  },
  "ATF": {
    "name": "Fr. S. Antarctic Lands",
    "iso3": "ATF",
    "continent": "Seven seas (open ocean)",
    "region": "Seven seas (open ocean)",
    "flag": "🇹🇫",
    "coordinates": [
      -49.1186,
      69.4608
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 15006,
    "population": "0K",
    "gdpNominal": "$16M",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 2.2,
    "unemployment": 4.3,
    "debtToGdp": 60,
    "budgetBalance": -3.3,
    "currentAccount": -3.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$502M",
    "gdpPerCapita": "$114 286",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 85,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Fr. S. Antarctic Lands National Infrastructure Modernization",
      "progress": 65,
      "budget": "$51M"
    },
    "news": [
      {
        "headline": "Fr. S. Antarctic Lands Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Fr. S. Antarctic Lands reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Fr. S. Antarctic Lands",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Fr. S. Antarctic Lands is currently classified under the World Bank High Income tier. With nominal GDP around $16M and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (60% of GDP) and inflation containment (2.2% CPI)."
  },
  "TLS": {
    "name": "Timor-Leste",
    "iso3": "TLS",
    "continent": "Asia",
    "region": "South-Eastern Asia",
    "flag": "🇹🇱",
    "coordinates": [
      -8.7455,
      125.9055
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 66725,
    "population": "1.3M",
    "gdpNominal": "$2.0B",
    "gdpGrowthYoY": 6.2,
    "inflationCPI": 10.3,
    "unemployment": 9.3,
    "debtToGdp": 65,
    "budgetBalance": -2.5,
    "currentAccount": 2.5,
    "interestRate": 11.7,
    "bondYield10Y": 13.7,
    "foreignReserves": "$742M",
    "gdpPerCapita": "$1 560",
    "fiveCoreMatrix": {
      "hci": 0.52,
      "povertyRate": 13,
      "electricityAccess": 89,
      "broadband": 64,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Timor-Leste National Infrastructure Modernization",
      "progress": 84,
      "budget": "$151M"
    },
    "news": [
      {
        "headline": "Timor-Leste Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Timor-Leste reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Timor-Leste",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Timor-Leste is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $2.0B and growth tracking at 6.2%, macroeconomic policy focuses on debt sustainability (65% of GDP) and inflation containment (10.3% CPI)."
  },
  "LSO": {
    "name": "Lesotho",
    "iso3": "LSO",
    "continent": "Africa",
    "region": "Southern Africa",
    "flag": "🇱🇸",
    "coordinates": [
      -29.5848,
      28.3703
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 100011,
    "population": "2.1M",
    "gdpNominal": "$2.4B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 10.3,
    "unemployment": 7.2,
    "debtToGdp": 61,
    "budgetBalance": -2.5,
    "currentAccount": 2.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$785M",
    "gdpPerCapita": "$1 118",
    "fiveCoreMatrix": {
      "hci": 0.54,
      "povertyRate": 20,
      "electricityAccess": 85,
      "broadband": 51,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Lesotho National Infrastructure Modernization",
      "progress": 76,
      "budget": "$169M"
    },
    "news": [
      {
        "headline": "Lesotho Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Lesotho reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Lesotho",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Lesotho is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $2.4B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (61% of GDP) and inflation containment (10.3% CPI)."
  },
  "URY": {
    "name": "Uruguay",
    "iso3": "URY",
    "continent": "South America",
    "region": "South America",
    "flag": "🇺🇾",
    "coordinates": [
      -32.6975,
      -56.1386
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 153469,
    "population": "3.5M",
    "gdpNominal": "$56.0B",
    "gdpGrowthYoY": 3.2,
    "inflationCPI": 4.7,
    "unemployment": 5,
    "debtToGdp": 54,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 6.75,
    "bondYield10Y": 7.95,
    "foreignReserves": "$7 225M",
    "gdpPerCapita": "$16 190",
    "fiveCoreMatrix": {
      "hci": 0.65,
      "povertyRate": 5.5,
      "electricityAccess": 99,
      "broadband": 75,
      "carbonIntensity": 7.2
    },
    "flagshipProject": {
      "title": "Uruguay National Infrastructure Modernization",
      "progress": 85,
      "budget": "$2852M"
    },
    "news": [
      {
        "headline": "Uruguay Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Uruguay reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Uruguay",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Uruguay is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $56.0B and growth tracking at 3.2%, macroeconomic policy focuses on debt sustainability (54% of GDP) and inflation containment (4.7% CPI)."
  },
  "BOL": {
    "name": "Bolivia",
    "iso3": "BOL",
    "continent": "South America",
    "region": "South America",
    "flag": "🇧🇴",
    "coordinates": [
      -16.3366,
      -64.1301
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 475524,
    "population": "11.5M",
    "gdpNominal": "$40.9B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 7.1,
    "unemployment": 7.2,
    "debtToGdp": 58,
    "budgetBalance": -4.1,
    "currentAccount": -1.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$5 407M",
    "gdpPerCapita": "$3 552",
    "fiveCoreMatrix": {
      "hci": 0.54,
      "povertyRate": 16,
      "electricityAccess": 82,
      "broadband": 67,
      "carbonIntensity": 1.8
    },
    "flagshipProject": {
      "title": "Bolivia National Infrastructure Modernization",
      "progress": 66,
      "budget": "$2095M"
    },
    "news": [
      {
        "headline": "Bolivia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Bolivia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Bolivia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Bolivia is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $40.9B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (58% of GDP) and inflation containment (7.1% CPI)."
  },
  "PER": {
    "name": "Peru",
    "iso3": "PER",
    "continent": "South America",
    "region": "South America",
    "flag": "🇵🇪",
    "coordinates": [
      -7.7531,
      -74.0818
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 1315418,
    "population": "32.5M",
    "gdpNominal": "$226.8B",
    "gdpGrowthYoY": 3.2,
    "inflationCPI": 5.9,
    "unemployment": 5,
    "debtToGdp": 47,
    "budgetBalance": -2.5,
    "currentAccount": 2.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$27 722M",
    "gdpPerCapita": "$6 978",
    "fiveCoreMatrix": {
      "hci": 0.6,
      "povertyRate": 7.5,
      "electricityAccess": 98,
      "broadband": 77,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Peru National Infrastructure Modernization",
      "progress": 80,
      "budget": "$11392M"
    },
    "news": [
      {
        "headline": "Peru Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Peru reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Peru",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Peru is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $226.8B and growth tracking at 3.2%, macroeconomic policy focuses on debt sustainability (47% of GDP) and inflation containment (5.9% CPI)."
  },
  "COL": {
    "name": "Colombia",
    "iso3": "COL",
    "continent": "South America",
    "region": "South America",
    "flag": "🇨🇴",
    "coordinates": [
      4.4907,
      -72.653
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 2028578,
    "population": "50.3M",
    "gdpNominal": "$323.6B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 5.9,
    "unemployment": 6.2,
    "debtToGdp": 81,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$39 334M",
    "gdpPerCapita": "$6 429",
    "fiveCoreMatrix": {
      "hci": 0.67,
      "povertyRate": 7.5,
      "electricityAccess": 98,
      "broadband": 72,
      "carbonIntensity": 4.8
    },
    "flagshipProject": {
      "title": "Colombia National Infrastructure Modernization",
      "progress": 67,
      "budget": "$16231M"
    },
    "news": [
      {
        "headline": "Colombia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Colombia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Colombia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Colombia is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $323.6B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (81% of GDP) and inflation containment (5.9% CPI)."
  },
  "PAN": {
    "name": "Panama",
    "iso3": "PAN",
    "continent": "North America",
    "region": "Central America",
    "flag": "🇵🇦",
    "coordinates": [
      8.4958,
      -80.3172
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 184858,
    "population": "4.2M",
    "gdpNominal": "$66.8B",
    "gdpGrowthYoY": 3.2,
    "inflationCPI": 3.5,
    "unemployment": 5,
    "debtToGdp": 83,
    "budgetBalance": -2.5,
    "currentAccount": -1.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$8 516M",
    "gdpPerCapita": "$15 731",
    "fiveCoreMatrix": {
      "hci": 0.6,
      "povertyRate": 3.5,
      "electricityAccess": 94,
      "broadband": 73,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "Panama National Infrastructure Modernization",
      "progress": 80,
      "budget": "$3390M"
    },
    "news": [
      {
        "headline": "Panama Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Panama reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Panama",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Panama is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $66.8B and growth tracking at 3.2%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (3.5% CPI)."
  },
  "CRI": {
    "name": "Costa Rica",
    "iso3": "CRI",
    "continent": "North America",
    "region": "Central America",
    "flag": "🇨🇷",
    "coordinates": [
      9.8221,
      -84.1618
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 216902,
    "population": "5.0M",
    "gdpNominal": "$61.8B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 4.7,
    "unemployment": 6.2,
    "debtToGdp": 78,
    "budgetBalance": -4.9,
    "currentAccount": 1.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$7 916M",
    "gdpPerCapita": "$12 244",
    "fiveCoreMatrix": {
      "hci": 0.67,
      "povertyRate": 5.5,
      "electricityAccess": 95,
      "broadband": 75,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "Costa Rica National Infrastructure Modernization",
      "progress": 67,
      "budget": "$3140M"
    },
    "news": [
      {
        "headline": "Costa Rica Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Costa Rica reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Costa Rica",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Costa Rica is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $61.8B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (78% of GDP) and inflation containment (4.7% CPI)."
  },
  "NIC": {
    "name": "Nicaragua",
    "iso3": "NIC",
    "continent": "North America",
    "region": "Central America",
    "flag": "🇳🇮",
    "coordinates": [
      13.0788,
      -84.9779
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 276820,
    "population": "6.5M",
    "gdpNominal": "$12.5B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 7.9,
    "unemployment": 8.6,
    "debtToGdp": 84,
    "budgetBalance": -4.1,
    "currentAccount": -0.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$2 002M",
    "gdpPerCapita": "$1 913",
    "fiveCoreMatrix": {
      "hci": 0.56,
      "povertyRate": 25,
      "electricityAccess": 91,
      "broadband": 61,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Nicaragua National Infrastructure Modernization",
      "progress": 78,
      "budget": "$676M"
    },
    "news": [
      {
        "headline": "Nicaragua Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Nicaragua reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Nicaragua",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Nicaragua is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $12.5B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (84% of GDP) and inflation containment (7.9% CPI)."
  },
  "HND": {
    "name": "Honduras",
    "iso3": "HND",
    "continent": "North America",
    "region": "Central America",
    "flag": "🇭🇳",
    "coordinates": [
      14.7463,
      -86.308
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 404845,
    "population": "9.7M",
    "gdpNominal": "$25.1B",
    "gdpGrowthYoY": 5.2,
    "inflationCPI": 6.3,
    "unemployment": 7.9,
    "debtToGdp": 85,
    "budgetBalance": -2.5,
    "currentAccount": -2.5,
    "interestRate": 10.1,
    "bondYield10Y": 12.1,
    "foreignReserves": "$3 511M",
    "gdpPerCapita": "$2 575",
    "fiveCoreMatrix": {
      "hci": 0.5,
      "povertyRate": 15,
      "electricityAccess": 92,
      "broadband": 66,
      "carbonIntensity": 1.8
    },
    "flagshipProject": {
      "title": "Honduras National Infrastructure Modernization",
      "progress": 72,
      "budget": "$1305M"
    },
    "news": [
      {
        "headline": "Honduras Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Honduras reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Honduras",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Honduras is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $25.1B and growth tracking at 5.2%, macroeconomic policy focuses on debt sustainability (85% of GDP) and inflation containment (6.3% CPI)."
  },
  "SLV": {
    "name": "El Salvador",
    "iso3": "SLV",
    "continent": "North America",
    "region": "Central America",
    "flag": "🇸🇻",
    "coordinates": [
      13.8546,
      -88.9199
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 273142,
    "population": "6.5M",
    "gdpNominal": "$27.0B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 10.3,
    "unemployment": 8.6,
    "debtToGdp": 68,
    "budgetBalance": -4.9,
    "currentAccount": 2.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$3 743M",
    "gdpPerCapita": "$4 187",
    "fiveCoreMatrix": {
      "hci": 0.51,
      "povertyRate": 13,
      "electricityAccess": 92,
      "broadband": 64,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "El Salvador National Infrastructure Modernization",
      "progress": 83,
      "budget": "$1401M"
    },
    "news": [
      {
        "headline": "El Salvador Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of El Salvador reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for El Salvador",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "El Salvador is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $27.0B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (68% of GDP) and inflation containment (10.3% CPI)."
  },
  "GTM": {
    "name": "Guatemala",
    "iso3": "GTM",
    "continent": "North America",
    "region": "Central America",
    "flag": "🇬🇹",
    "coordinates": [
      15.5311,
      -90.2698
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 679161,
    "population": "16.6M",
    "gdpNominal": "$76.7B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 5.5,
    "unemployment": 7.2,
    "debtToGdp": 59,
    "budgetBalance": -4.9,
    "currentAccount": -3.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$9 705M",
    "gdpPerCapita": "$4 620",
    "fiveCoreMatrix": {
      "hci": 0.49,
      "povertyRate": 21,
      "electricityAccess": 83,
      "broadband": 52,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Guatemala National Infrastructure Modernization",
      "progress": 71,
      "budget": "$3886M"
    },
    "news": [
      {
        "headline": "Guatemala Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Guatemala reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Guatemala",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Guatemala is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $76.7B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (59% of GDP) and inflation containment (5.5% CPI)."
  },
  "BLZ": {
    "name": "Belize",
    "iso3": "BLZ",
    "continent": "North America",
    "region": "Central America",
    "flag": "🇧🇿",
    "coordinates": [
      17.4172,
      -88.6304
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 30614,
    "population": "390K",
    "gdpNominal": "$1.9B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 10.3,
    "unemployment": 7.2,
    "debtToGdp": 72,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$725M",
    "gdpPerCapita": "$4 814",
    "fiveCoreMatrix": {
      "hci": 0.54,
      "povertyRate": 13,
      "electricityAccess": 78,
      "broadband": 64,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Belize National Infrastructure Modernization",
      "progress": 66,
      "budget": "$144M"
    },
    "news": [
      {
        "headline": "Belize Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Belize reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Belize",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Belize is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $1.9B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (72% of GDP) and inflation containment (10.3% CPI)."
  },
  "VEN": {
    "name": "Venezuela",
    "iso3": "VEN",
    "continent": "South America",
    "region": "South America",
    "flag": "🇻🇪",
    "coordinates": [
      7.2135,
      -66.8516
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 1155633,
    "population": "28.5M",
    "gdpNominal": "$482.4B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 5.9,
    "unemployment": 5.6,
    "debtToGdp": 83,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$58 383M",
    "gdpPerCapita": "$16 915",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 7.5,
      "electricityAccess": 94,
      "broadband": 77,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "Venezuela National Infrastructure Modernization",
      "progress": 86,
      "budget": "$24168M"
    },
    "news": [
      {
        "headline": "Venezuela Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Venezuela reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Venezuela",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Venezuela is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $482.4B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (5.9% CPI)."
  },
  "GUY": {
    "name": "Guyana",
    "iso3": "GUY",
    "continent": "South America",
    "region": "South America",
    "flag": "🇬🇾",
    "coordinates": [
      4.4815,
      -58.8983
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 46311,
    "population": "783K",
    "gdpNominal": "$5.2B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 6.3,
    "unemployment": 7.2,
    "debtToGdp": 71,
    "budgetBalance": -4.9,
    "currentAccount": -2.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$1 121M",
    "gdpPerCapita": "$6 609",
    "fiveCoreMatrix": {
      "hci": 0.49,
      "povertyRate": 22,
      "electricityAccess": 95,
      "broadband": 53,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Guyana National Infrastructure Modernization",
      "progress": 71,
      "budget": "$309M"
    },
    "news": [
      {
        "headline": "Guyana Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Guyana reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Guyana",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Guyana is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $5.2B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (71% of GDP) and inflation containment (6.3% CPI)."
  },
  "SUR": {
    "name": "Suriname",
    "iso3": "SUR",
    "continent": "South America",
    "region": "South America",
    "flag": "🇸🇷",
    "coordinates": [
      3.6974,
      -55.8704
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 38255,
    "population": "581K",
    "gdpNominal": "$3.7B",
    "gdpGrowthYoY": 4.4,
    "inflationCPI": 3.5,
    "unemployment": 6.8,
    "debtToGdp": 47,
    "budgetBalance": -4.9,
    "currentAccount": -2.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$944M",
    "gdpPerCapita": "$6 359",
    "fiveCoreMatrix": {
      "hci": 0.63,
      "povertyRate": 3.5,
      "electricityAccess": 98,
      "broadband": 78,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Suriname National Infrastructure Modernization",
      "progress": 83,
      "budget": "$235M"
    },
    "news": [
      {
        "headline": "Suriname Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Suriname reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Suriname",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Suriname is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $3.7B and growth tracking at 4.4%, macroeconomic policy focuses on debt sustainability (47% of GDP) and inflation containment (3.5% CPI)."
  },
  "ECU": {
    "name": "Ecuador",
    "iso3": "ECU",
    "continent": "South America",
    "region": "South America",
    "flag": "🇪🇨",
    "coordinates": [
      -1.637,
      -78.7045
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 709946,
    "population": "17.4M",
    "gdpNominal": "$107.4B",
    "gdpGrowthYoY": 4.8,
    "inflationCPI": 4.7,
    "unemployment": 7.4,
    "debtToGdp": 50,
    "budgetBalance": -3.3,
    "currentAccount": 0.5,
    "interestRate": 6.75,
    "bondYield10Y": 7.95,
    "foreignReserves": "$13 392M",
    "gdpPerCapita": "$6 184",
    "fiveCoreMatrix": {
      "hci": 0.69,
      "povertyRate": 5.5,
      "electricityAccess": 95,
      "broadband": 75,
      "carbonIntensity": 4
    },
    "flagshipProject": {
      "title": "Ecuador National Infrastructure Modernization",
      "progress": 69,
      "budget": "$5422M"
    },
    "news": [
      {
        "headline": "Ecuador Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Ecuador reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Ecuador",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Ecuador is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $107.4B and growth tracking at 4.8%, macroeconomic policy focuses on debt sustainability (50% of GDP) and inflation containment (4.7% CPI)."
  },
  "PRI": {
    "name": "Puerto Rico",
    "iso3": "PRI",
    "continent": "North America",
    "region": "Caribbean",
    "flag": "🇵🇷",
    "coordinates": [
      18.276,
      -66.4335
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 142748,
    "population": "3.2M",
    "gdpNominal": "$105.0B",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 3,
    "unemployment": 3.8,
    "debtToGdp": 63,
    "budgetBalance": -2.5,
    "currentAccount": 1.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$13 099M",
    "gdpPerCapita": "$32 874",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 8.7
    },
    "flagshipProject": {
      "title": "Puerto Rico National Infrastructure Modernization",
      "progress": 80,
      "budget": "$5299M"
    },
    "news": [
      {
        "headline": "Puerto Rico Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Puerto Rico reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Puerto Rico",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Puerto Rico is currently classified under the World Bank High Income tier. With nominal GDP around $105.0B and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (63% of GDP) and inflation containment (3% CPI)."
  },
  "JAM": {
    "name": "Jamaica",
    "iso3": "JAM",
    "continent": "North America",
    "region": "Caribbean",
    "flag": "🇯🇲",
    "coordinates": [
      18.1877,
      -77.3481
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 132931,
    "population": "2.9M",
    "gdpNominal": "$16.5B",
    "gdpGrowthYoY": 4.8,
    "inflationCPI": 3.5,
    "unemployment": 7.4,
    "debtToGdp": 82,
    "budgetBalance": -4.1,
    "currentAccount": -1.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$2 475M",
    "gdpPerCapita": "$5 582",
    "fiveCoreMatrix": {
      "hci": 0.64,
      "povertyRate": 3.5,
      "electricityAccess": 99,
      "broadband": 73,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Jamaica National Infrastructure Modernization",
      "progress": 74,
      "budget": "$873M"
    },
    "news": [
      {
        "headline": "Jamaica Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Jamaica reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Jamaica",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Jamaica is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $16.5B and growth tracking at 4.8%, macroeconomic policy focuses on debt sustainability (82% of GDP) and inflation containment (3.5% CPI)."
  },
  "CUB": {
    "name": "Cuba",
    "iso3": "CUB",
    "continent": "North America",
    "region": "Caribbean",
    "flag": "🇨🇺",
    "coordinates": [
      21.7228,
      -79.7331
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 468339,
    "population": "11.3M",
    "gdpNominal": "$100.0B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 3.5,
    "unemployment": 6.2,
    "debtToGdp": 71,
    "budgetBalance": -4.9,
    "currentAccount": -2.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$12 503M",
    "gdpPerCapita": "$8 825",
    "fiveCoreMatrix": {
      "hci": 0.67,
      "povertyRate": 3.5,
      "electricityAccess": 94,
      "broadband": 78,
      "carbonIntensity": 4.8
    },
    "flagshipProject": {
      "title": "Cuba National Infrastructure Modernization",
      "progress": 67,
      "budget": "$5051M"
    },
    "news": [
      {
        "headline": "Cuba Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Cuba reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Cuba",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Cuba is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $100.0B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (71% of GDP) and inflation containment (3.5% CPI)."
  },
  "ZWE": {
    "name": "Zimbabwe",
    "iso3": "ZWE",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇿🇼",
    "coordinates": [
      -18.8702,
      29.6587
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 600819,
    "population": "14.6M",
    "gdpNominal": "$21.4B",
    "gdpGrowthYoY": 3.5,
    "inflationCPI": 20,
    "unemployment": 8,
    "debtToGdp": 89,
    "budgetBalance": -4.1,
    "currentAccount": -0.5,
    "interestRate": 12,
    "bondYield10Y": 15.5,
    "foreignReserves": "$3 073M",
    "gdpPerCapita": "$1 464",
    "fiveCoreMatrix": {
      "hci": 0.36,
      "povertyRate": 44,
      "electricityAccess": 51,
      "broadband": 31,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Zimbabwe National Infrastructure Modernization",
      "progress": 45,
      "budget": "$1122M"
    },
    "news": [
      {
        "headline": "Zimbabwe Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Zimbabwe reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Zimbabwe",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Zimbabwe is currently classified under the World Bank Low Income tier. With nominal GDP around $21.4B and growth tracking at 3.5%, macroeconomic policy focuses on debt sustainability (89% of GDP) and inflation containment (20% CPI)."
  },
  "BWA": {
    "name": "Botswana",
    "iso3": "BWA",
    "continent": "Africa",
    "region": "Southern Africa",
    "flag": "🇧🇼",
    "coordinates": [
      -22.4767,
      24.4713
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 107148,
    "population": "2.3M",
    "gdpNominal": "$18.3B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 4.7,
    "unemployment": 5.6,
    "debtToGdp": 70,
    "budgetBalance": -4.1,
    "currentAccount": -0.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$2 701M",
    "gdpPerCapita": "$7 961",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 5.5,
      "electricityAccess": 99,
      "broadband": 80,
      "carbonIntensity": 4
    },
    "flagshipProject": {
      "title": "Botswana National Infrastructure Modernization",
      "progress": 66,
      "budget": "$967M"
    },
    "news": [
      {
        "headline": "Botswana Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Botswana reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Botswana",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Botswana is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $18.3B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (70% of GDP) and inflation containment (4.7% CPI)."
  },
  "NAM": {
    "name": "Namibia",
    "iso3": "NAM",
    "continent": "Africa",
    "region": "Southern Africa",
    "flag": "🇳🇦",
    "coordinates": [
      -21.5609,
      17.9285
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 114781,
    "population": "2.5M",
    "gdpNominal": "$12.4B",
    "gdpGrowthYoY": 4.4,
    "inflationCPI": 3.5,
    "unemployment": 6.8,
    "debtToGdp": 82,
    "budgetBalance": -4.1,
    "currentAccount": -1.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$1 984M",
    "gdpPerCapita": "$4 957",
    "fiveCoreMatrix": {
      "hci": 0.68,
      "povertyRate": 3.5,
      "electricityAccess": 99,
      "broadband": 73,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Namibia National Infrastructure Modernization",
      "progress": 78,
      "budget": "$668M"
    },
    "news": [
      {
        "headline": "Namibia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Namibia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Namibia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Namibia is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $12.4B and growth tracking at 4.4%, macroeconomic policy focuses on debt sustainability (82% of GDP) and inflation containment (3.5% CPI)."
  },
  "SEN": {
    "name": "Senegal",
    "iso3": "SEN",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇸🇳",
    "coordinates": [
      13.8775,
      -14.5915
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 666855,
    "population": "16.3M",
    "gdpNominal": "$23.6B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 10.3,
    "unemployment": 8.6,
    "debtToGdp": 60,
    "budgetBalance": -4.9,
    "currentAccount": 2.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$3 329M",
    "gdpPerCapita": "$1 447",
    "fiveCoreMatrix": {
      "hci": 0.51,
      "povertyRate": 21,
      "electricityAccess": 84,
      "broadband": 57,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Senegal National Infrastructure Modernization",
      "progress": 83,
      "budget": "$1229M"
    },
    "news": [
      {
        "headline": "Senegal Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Senegal reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Senegal",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Senegal is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $23.6B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (60% of GDP) and inflation containment (10.3% CPI)."
  },
  "MLI": {
    "name": "Mali",
    "iso3": "MLI",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇲🇱",
    "coordinates": [
      14.0795,
      -5.8021
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 801321,
    "population": "19.7M",
    "gdpNominal": "$17.3B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 15.5,
    "unemployment": 13,
    "debtToGdp": 93,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$2 573M",
    "gdpPerCapita": "$879",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 33,
      "electricityAccess": 55,
      "broadband": 40,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Mali National Infrastructure Modernization",
      "progress": 77,
      "budget": "$914M"
    },
    "news": [
      {
        "headline": "Mali Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Mali reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Mali",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Mali is currently classified under the World Bank Low Income tier. With nominal GDP around $17.3B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (93% of GDP) and inflation containment (15.5% CPI)."
  },
  "MRT": {
    "name": "Mauritania",
    "iso3": "MRT",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇲🇷",
    "coordinates": [
      18.8314,
      -12.4249
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 196028,
    "population": "4.5M",
    "gdpNominal": "$7.6B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 12.5,
    "unemployment": 13,
    "debtToGdp": 104,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$1 412M",
    "gdpPerCapita": "$1 679",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 39,
      "electricityAccess": 66,
      "broadband": 26,
      "carbonIntensity": 0.4
    },
    "flagshipProject": {
      "title": "Mauritania National Infrastructure Modernization",
      "progress": 77,
      "budget": "$430M"
    },
    "news": [
      {
        "headline": "Mauritania Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Mauritania reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Mauritania",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Mauritania is currently classified under the World Bank Low Income tier. With nominal GDP around $7.6B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (104% of GDP) and inflation containment (12.5% CPI)."
  },
  "BEN": {
    "name": "Benin",
    "iso3": "BEN",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇧🇯",
    "coordinates": [
      9.8084,
      2.3273
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 487046,
    "population": "11.8M",
    "gdpNominal": "$14.4B",
    "gdpGrowthYoY": 4.1,
    "inflationCPI": 17,
    "unemployment": 8,
    "debtToGdp": 98,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 13.5,
    "bondYield10Y": 17,
    "foreignReserves": "$2 227M",
    "gdpPerCapita": "$1 219",
    "fiveCoreMatrix": {
      "hci": 0.42,
      "povertyRate": 51,
      "electricityAccess": 60,
      "broadband": 33,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Benin National Infrastructure Modernization",
      "progress": 66,
      "budget": "$770M"
    },
    "news": [
      {
        "headline": "Benin Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Benin reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Benin",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Benin is currently classified under the World Bank Low Income tier. With nominal GDP around $14.4B and growth tracking at 4.1%, macroeconomic policy focuses on debt sustainability (98% of GDP) and inflation containment (17% CPI)."
  },
  "NER": {
    "name": "Niger",
    "iso3": "NER",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇳🇪",
    "coordinates": [
      15.4782,
      8.7374
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 947429,
    "population": "23.3M",
    "gdpNominal": "$12.9B",
    "gdpGrowthYoY": 5.3,
    "inflationCPI": 17,
    "unemployment": 8,
    "debtToGdp": 102,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 16.5,
    "bondYield10Y": 20,
    "foreignReserves": "$2 049M",
    "gdpPerCapita": "$554",
    "fiveCoreMatrix": {
      "hci": 0.44,
      "povertyRate": 51,
      "electricityAccess": 64,
      "broadband": 33,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Niger National Infrastructure Modernization",
      "progress": 78,
      "budget": "$696M"
    },
    "news": [
      {
        "headline": "Niger Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Niger reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Niger",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Niger is currently classified under the World Bank Low Income tier. With nominal GDP around $12.9B and growth tracking at 5.3%, macroeconomic policy focuses on debt sustainability (102% of GDP) and inflation containment (17% CPI)."
  },
  "CMR": {
    "name": "Cameroon",
    "iso3": "CMR",
    "continent": "Africa",
    "region": "Middle Africa",
    "flag": "🇨🇲",
    "coordinates": [
      6.9063,
      13.1686
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1050055,
    "population": "25.9M",
    "gdpNominal": "$39.0B",
    "gdpGrowthYoY": 5.2,
    "inflationCPI": 5.5,
    "unemployment": 7.9,
    "debtToGdp": 64,
    "budgetBalance": -4.9,
    "currentAccount": -3.5,
    "interestRate": 10.1,
    "bondYield10Y": 12.1,
    "foreignReserves": "$5 181M",
    "gdpPerCapita": "$1 507",
    "fiveCoreMatrix": {
      "hci": 0.55,
      "povertyRate": 14,
      "electricityAccess": 88,
      "broadband": 65,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Cameroon National Infrastructure Modernization",
      "progress": 67,
      "budget": "$2000M"
    },
    "news": [
      {
        "headline": "Cameroon Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Cameroon reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Cameroon",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Cameroon is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $39.0B and growth tracking at 5.2%, macroeconomic policy focuses on debt sustainability (64% of GDP) and inflation containment (5.5% CPI)."
  },
  "TGO": {
    "name": "Togo",
    "iso3": "TGO",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇹🇬",
    "coordinates": [
      8.8848,
      0.8697
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 338295,
    "population": "8.1M",
    "gdpNominal": "$5.5B",
    "gdpGrowthYoY": 5.9,
    "inflationCPI": 20,
    "unemployment": 8,
    "debtToGdp": 99,
    "budgetBalance": -2.5,
    "currentAccount": -2.5,
    "interestRate": 18,
    "bondYield10Y": 21.5,
    "foreignReserves": "$1 159M",
    "gdpPerCapita": "$679",
    "fiveCoreMatrix": {
      "hci": 0.4,
      "povertyRate": 53,
      "electricityAccess": 61,
      "broadband": 35,
      "carbonIntensity": 1
    },
    "flagshipProject": {
      "title": "Togo National Infrastructure Modernization",
      "progress": 84,
      "budget": "$325M"
    },
    "news": [
      {
        "headline": "Togo Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Togo reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Togo",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Togo is currently classified under the World Bank Low Income tier. With nominal GDP around $5.5B and growth tracking at 5.9%, macroeconomic policy focuses on debt sustainability (99% of GDP) and inflation containment (20% CPI)."
  },
  "GHA": {
    "name": "Ghana",
    "iso3": "GHA",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇬🇭",
    "coordinates": [
      8.2903,
      -0.9706
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1231714,
    "population": "30.4M",
    "gdpNominal": "$67.0B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 7.1,
    "unemployment": 7.2,
    "debtToGdp": 82,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$8 538M",
    "gdpPerCapita": "$2 202",
    "fiveCoreMatrix": {
      "hci": 0.49,
      "povertyRate": 24,
      "electricityAccess": 89,
      "broadband": 60,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Ghana National Infrastructure Modernization",
      "progress": 71,
      "budget": "$3399M"
    },
    "news": [
      {
        "headline": "Ghana Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Ghana reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Ghana",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Ghana is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $67.0B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (82% of GDP) and inflation containment (7.1% CPI)."
  },
  "CIV": {
    "name": "Côte d'Ivoire",
    "iso3": "CIV",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇨🇮",
    "coordinates": [
      7.9446,
      -6.3455
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1043662,
    "population": "25.7M",
    "gdpNominal": "$58.5B",
    "gdpGrowthYoY": 5.2,
    "inflationCPI": 7.9,
    "unemployment": 7.9,
    "debtToGdp": 68,
    "budgetBalance": -4.9,
    "currentAccount": -0.5,
    "interestRate": 10.1,
    "bondYield10Y": 12.1,
    "foreignReserves": "$7 525M",
    "gdpPerCapita": "$2 276",
    "fiveCoreMatrix": {
      "hci": 0.55,
      "povertyRate": 25,
      "electricityAccess": 92,
      "broadband": 61,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Côte d'Ivoire National Infrastructure Modernization",
      "progress": 67,
      "budget": "$2977M"
    },
    "news": [
      {
        "headline": "Côte d'Ivoire Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Côte d'Ivoire reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Côte d'Ivoire",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Côte d'Ivoire is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $58.5B and growth tracking at 5.2%, macroeconomic policy focuses on debt sustainability (68% of GDP) and inflation containment (7.9% CPI)."
  },
  "GIN": {
    "name": "Guinea",
    "iso3": "GIN",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇬🇳",
    "coordinates": [
      10.4188,
      -10.9846
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 525850,
    "population": "12.8M",
    "gdpNominal": "$12.3B",
    "gdpGrowthYoY": 4.1,
    "inflationCPI": 11,
    "unemployment": 13,
    "debtToGdp": 98,
    "budgetBalance": -4.9,
    "currentAccount": -0.5,
    "interestRate": 13.5,
    "bondYield10Y": 17,
    "foreignReserves": "$1 976M",
    "gdpPerCapita": "$963",
    "fiveCoreMatrix": {
      "hci": 0.37,
      "povertyRate": 55,
      "electricityAccess": 60,
      "broadband": 37,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Guinea National Infrastructure Modernization",
      "progress": 71,
      "budget": "$665M"
    },
    "news": [
      {
        "headline": "Guinea Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Guinea reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Guinea",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Guinea is currently classified under the World Bank Low Income tier. With nominal GDP around $12.3B and growth tracking at 4.1%, macroeconomic policy focuses on debt sustainability (98% of GDP) and inflation containment (11% CPI)."
  },
  "GNB": {
    "name": "Guinea-Bissau",
    "iso3": "GNB",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇬🇼",
    "coordinates": [
      11.979,
      -15.214
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 91837,
    "population": "1.9M",
    "gdpNominal": "$1.3B",
    "gdpGrowthYoY": 4.1,
    "inflationCPI": 18.5,
    "unemployment": 13,
    "debtToGdp": 86,
    "budgetBalance": -4.9,
    "currentAccount": -2.5,
    "interestRate": 13.5,
    "bondYield10Y": 17,
    "foreignReserves": "$661M",
    "gdpPerCapita": "$697",
    "fiveCoreMatrix": {
      "hci": 0.37,
      "povertyRate": 35,
      "electricityAccess": 48,
      "broadband": 42,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Guinea-Bissau National Infrastructure Modernization",
      "progress": 71,
      "budget": "$117M"
    },
    "news": [
      {
        "headline": "Guinea-Bissau Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Guinea-Bissau reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Guinea-Bissau",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Guinea-Bissau is currently classified under the World Bank Low Income tier. With nominal GDP around $1.3B and growth tracking at 4.1%, macroeconomic policy focuses on debt sustainability (86% of GDP) and inflation containment (18.5% CPI)."
  },
  "LBR": {
    "name": "Liberia",
    "iso3": "LBR",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇱🇷",
    "coordinates": [
      6.7539,
      -9.1427
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 212495,
    "population": "4.9M",
    "gdpNominal": "$3.1B",
    "gdpGrowthYoY": 4.1,
    "inflationCPI": 12.5,
    "unemployment": 12,
    "debtToGdp": 102,
    "budgetBalance": -2.5,
    "currentAccount": -0.5,
    "interestRate": 13.5,
    "bondYield10Y": 17,
    "foreignReserves": "$868M",
    "gdpPerCapita": "$622",
    "fiveCoreMatrix": {
      "hci": 0.42,
      "povertyRate": 48,
      "electricityAccess": 64,
      "broadband": 30,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Liberia National Infrastructure Modernization",
      "progress": 76,
      "budget": "$204M"
    },
    "news": [
      {
        "headline": "Liberia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Liberia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Liberia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Liberia is currently classified under the World Bank Low Income tier. With nominal GDP around $3.1B and growth tracking at 4.1%, macroeconomic policy focuses on debt sustainability (102% of GDP) and inflation containment (12.5% CPI)."
  },
  "SLE": {
    "name": "Sierra Leone",
    "iso3": "SLE",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇸🇱",
    "coordinates": [
      8.6034,
      -11.7022
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 327529,
    "population": "7.8M",
    "gdpNominal": "$4.1B",
    "gdpGrowthYoY": 5.3,
    "inflationCPI": 15.5,
    "unemployment": 13,
    "debtToGdp": 89,
    "budgetBalance": -4.9,
    "currentAccount": 2.5,
    "interestRate": 16.5,
    "bondYield10Y": 20,
    "foreignReserves": "$995M",
    "gdpPerCapita": "$527",
    "fiveCoreMatrix": {
      "hci": 0.39,
      "povertyRate": 33,
      "electricityAccess": 51,
      "broadband": 40,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Sierra Leone National Infrastructure Modernization",
      "progress": 83,
      "budget": "$256M"
    },
    "news": [
      {
        "headline": "Sierra Leone Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Sierra Leone reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Sierra Leone",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Sierra Leone is currently classified under the World Bank Low Income tier. With nominal GDP around $4.1B and growth tracking at 5.3%, macroeconomic policy focuses on debt sustainability (89% of GDP) and inflation containment (15.5% CPI)."
  },
  "BFA": {
    "name": "Burkina Faso",
    "iso3": "BFA",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇧🇫",
    "coordinates": [
      12.1114,
      -1.9164
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 827855,
    "population": "20.3M",
    "gdpNominal": "$16.0B",
    "gdpGrowthYoY": 4.1,
    "inflationCPI": 18.5,
    "unemployment": 8,
    "debtToGdp": 85,
    "budgetBalance": -4.1,
    "currentAccount": -3.5,
    "interestRate": 13.5,
    "bondYield10Y": 17,
    "foreignReserves": "$2 419M",
    "gdpPerCapita": "$787",
    "fiveCoreMatrix": {
      "hci": 0.42,
      "povertyRate": 52,
      "electricityAccess": 47,
      "broadband": 34,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Burkina Faso National Infrastructure Modernization",
      "progress": 66,
      "budget": "$850M"
    },
    "news": [
      {
        "headline": "Burkina Faso Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Burkina Faso reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Burkina Faso",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Burkina Faso is currently classified under the World Bank Low Income tier. With nominal GDP around $16.0B and growth tracking at 4.1%, macroeconomic policy focuses on debt sustainability (85% of GDP) and inflation containment (18.5% CPI)."
  },
  "CAF": {
    "name": "Central African Rep.",
    "iso3": "CAF",
    "continent": "Africa",
    "region": "Middle Africa",
    "flag": "🇨🇫",
    "coordinates": [
      6.2942,
      20.7031
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 204807,
    "population": "4.7M",
    "gdpNominal": "$2.2B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 11,
    "unemployment": 9,
    "debtToGdp": 90,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$766M",
    "gdpPerCapita": "$468",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 47,
      "electricityAccess": 52,
      "broadband": 29,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Central African Rep. National Infrastructure Modernization",
      "progress": 67,
      "budget": "$161M"
    },
    "news": [
      {
        "headline": "Central African Rep. Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Central African Rep. reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Central African Rep.",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Central African Rep. is currently classified under the World Bank Low Income tier. With nominal GDP around $2.2B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (90% of GDP) and inflation containment (11% CPI)."
  },
  "COG": {
    "name": "Congo",
    "iso3": "COG",
    "continent": "Africa",
    "region": "Middle Africa",
    "flag": "🇨🇬",
    "coordinates": [
      -0.9202,
      14.9271
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 230220,
    "population": "5.4M",
    "gdpNominal": "$12.3B",
    "gdpGrowthYoY": 5.2,
    "inflationCPI": 7.1,
    "unemployment": 7.9,
    "debtToGdp": 53,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 10.1,
    "bondYield10Y": 12.1,
    "foreignReserves": "$1 972M",
    "gdpPerCapita": "$2 280",
    "fiveCoreMatrix": {
      "hci": 0.55,
      "povertyRate": 16,
      "electricityAccess": 95,
      "broadband": 67,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Congo National Infrastructure Modernization",
      "progress": 67,
      "budget": "$663M"
    },
    "news": [
      {
        "headline": "Congo Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Congo reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Congo",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Congo is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $12.3B and growth tracking at 5.2%, macroeconomic policy focuses on debt sustainability (53% of GDP) and inflation containment (7.1% CPI)."
  },
  "GAB": {
    "name": "Gabon",
    "iso3": "GAB",
    "continent": "Africa",
    "region": "Middle Africa",
    "flag": "🇬🇦",
    "coordinates": [
      -0.3375,
      11.8914
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 101903,
    "population": "2.2M",
    "gdpNominal": "$16.9B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 3.5,
    "unemployment": 5.6,
    "debtToGdp": 71,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$2 525M",
    "gdpPerCapita": "$7 767",
    "fiveCoreMatrix": {
      "hci": 0.61,
      "povertyRate": 3.5,
      "electricityAccess": 94,
      "broadband": 73,
      "carbonIntensity": 4.8
    },
    "flagshipProject": {
      "title": "Gabon National Infrastructure Modernization",
      "progress": 71,
      "budget": "$894M"
    },
    "news": [
      {
        "headline": "Gabon Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Gabon reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Gabon",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Gabon is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $16.9B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (71% of GDP) and inflation containment (3.5% CPI)."
  },
  "GNQ": {
    "name": "Eq. Guinea",
    "iso3": "GNQ",
    "continent": "Africa",
    "region": "Middle Africa",
    "flag": "🇬🇶",
    "coordinates": [
      1.5893,
      10.0698
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 69239,
    "population": "1.4M",
    "gdpNominal": "$11.0B",
    "gdpGrowthYoY": 1.8,
    "inflationCPI": 3,
    "unemployment": 5.3,
    "debtToGdp": 71,
    "budgetBalance": -4.9,
    "currentAccount": -2.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$1 823M",
    "gdpPerCapita": "$8 131",
    "fiveCoreMatrix": {
      "hci": 0.83,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 91,
      "carbonIntensity": 11.1
    },
    "flagshipProject": {
      "title": "Eq. Guinea National Infrastructure Modernization",
      "progress": 71,
      "budget": "$601M"
    },
    "news": [
      {
        "headline": "Eq. Guinea Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Eq. Guinea reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Eq. Guinea",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Eq. Guinea is currently classified under the World Bank High Income tier. With nominal GDP around $11.0B and growth tracking at 1.8%, macroeconomic policy focuses on debt sustainability (71% of GDP) and inflation containment (3% CPI)."
  },
  "ZMB": {
    "name": "Zambia",
    "iso3": "ZMB",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇿🇲",
    "coordinates": [
      -12.8348,
      27.978
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 729441,
    "population": "17.9M",
    "gdpNominal": "$23.3B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 5.5,
    "unemployment": 6.5,
    "debtToGdp": 83,
    "budgetBalance": -4.1,
    "currentAccount": -3.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$3 297M",
    "gdpPerCapita": "$1 305",
    "fiveCoreMatrix": {
      "hci": 0.48,
      "povertyRate": 14,
      "electricityAccess": 90,
      "broadband": 65,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Zambia National Infrastructure Modernization",
      "progress": 45,
      "budget": "$1215M"
    },
    "news": [
      {
        "headline": "Zambia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Zambia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Zambia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Zambia is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $23.3B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (5.5% CPI)."
  },
  "MWI": {
    "name": "Malawi",
    "iso3": "MWI",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇲🇼",
    "coordinates": [
      -12.914,
      34.0626
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 760150,
    "population": "18.6M",
    "gdpNominal": "$7.7B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 20,
    "unemployment": 13,
    "debtToGdp": 93,
    "budgetBalance": -3.3,
    "currentAccount": -0.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$1 420M",
    "gdpPerCapita": "$412",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 44,
      "electricityAccess": 55,
      "broadband": 31,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Malawi National Infrastructure Modernization",
      "progress": 77,
      "budget": "$433M"
    },
    "news": [
      {
        "headline": "Malawi Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Malawi reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Malawi",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Malawi is currently classified under the World Bank Low Income tier. With nominal GDP around $7.7B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (93% of GDP) and inflation containment (20% CPI)."
  },
  "MOZ": {
    "name": "Mozambique",
    "iso3": "MOZ",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇲🇿",
    "coordinates": [
      -17.7203,
      35.0035
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 1229641,
    "population": "30.4M",
    "gdpNominal": "$15.3B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 20,
    "unemployment": 13,
    "debtToGdp": 65,
    "budgetBalance": -3.3,
    "currentAccount": -1.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$2 335M",
    "gdpPerCapita": "$504",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 36,
      "electricityAccess": 42,
      "broadband": 43,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Mozambique National Infrastructure Modernization",
      "progress": 77,
      "budget": "$815M"
    },
    "news": [
      {
        "headline": "Mozambique Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Mozambique reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Mozambique",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Mozambique is currently classified under the World Bank Low Income tier. With nominal GDP around $15.3B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (65% of GDP) and inflation containment (20% CPI)."
  },
  "SWZ": {
    "name": "eSwatini",
    "iso3": "SWZ",
    "continent": "Africa",
    "region": "Southern Africa",
    "flag": "🇸🇿",
    "coordinates": [
      -26.4203,
      31.437
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 60925,
    "population": "1.1M",
    "gdpNominal": "$4.5B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 7.9,
    "unemployment": 8.6,
    "debtToGdp": 72,
    "budgetBalance": -4.9,
    "currentAccount": -0.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$1 037M",
    "gdpPerCapita": "$3 894",
    "fiveCoreMatrix": {
      "hci": 0.51,
      "povertyRate": 24,
      "electricityAccess": 78,
      "broadband": 55,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "eSwatini National Infrastructure Modernization",
      "progress": 83,
      "budget": "$274M"
    },
    "news": [
      {
        "headline": "eSwatini Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of eSwatini reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for eSwatini",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "eSwatini is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $4.5B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (72% of GDP) and inflation containment (7.9% CPI)."
  },
  "AGO": {
    "name": "Angola",
    "iso3": "AGO",
    "continent": "Africa",
    "region": "Middle Africa",
    "flag": "🇦🇴",
    "coordinates": [
      -10.2306,
      16.7946
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 1288012,
    "population": "31.8M",
    "gdpNominal": "$88.8B",
    "gdpGrowthYoY": 3.2,
    "inflationCPI": 4.1,
    "unemployment": 5,
    "debtToGdp": 84,
    "budgetBalance": -3.3,
    "currentAccount": -2.5,
    "interestRate": 6.75,
    "bondYield10Y": 7.95,
    "foreignReserves": "$11 158M",
    "gdpPerCapita": "$2 791",
    "fiveCoreMatrix": {
      "hci": 0.65,
      "povertyRate": 4.5,
      "electricityAccess": 95,
      "broadband": 79,
      "carbonIntensity": 7.2
    },
    "flagshipProject": {
      "title": "Angola National Infrastructure Modernization",
      "progress": 65,
      "budget": "$4491M"
    },
    "news": [
      {
        "headline": "Angola Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Angola reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Angola",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Angola is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $88.8B and growth tracking at 3.2%, macroeconomic policy focuses on debt sustainability (84% of GDP) and inflation containment (4.1% CPI)."
  },
  "BDI": {
    "name": "Burundi",
    "iso3": "BDI",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇧🇮",
    "coordinates": [
      -3.2338,
      30.0423
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 476223,
    "population": "11.5M",
    "gdpNominal": "$3.0B",
    "gdpGrowthYoY": 4.1,
    "inflationCPI": 15.5,
    "unemployment": 8,
    "debtToGdp": 93,
    "budgetBalance": -4.1,
    "currentAccount": 1.5,
    "interestRate": 13.5,
    "bondYield10Y": 17,
    "foreignReserves": "$861M",
    "gdpPerCapita": "$261",
    "fiveCoreMatrix": {
      "hci": 0.42,
      "povertyRate": 50,
      "electricityAccess": 55,
      "broadband": 32,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Burundi National Infrastructure Modernization",
      "progress": 66,
      "budget": "$201M"
    },
    "news": [
      {
        "headline": "Burundi Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Burundi reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Burundi",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Burundi is currently classified under the World Bank Low Income tier. With nominal GDP around $3.0B and growth tracking at 4.1%, macroeconomic policy focuses on debt sustainability (93% of GDP) and inflation containment (15.5% CPI)."
  },
  "ISR": {
    "name": "Israel",
    "iso3": "ISR",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇮🇱",
    "coordinates": [
      31.9956,
      35.1145
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 377132,
    "population": "9.1M",
    "gdpNominal": "$394.7B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3.4,
    "unemployment": 4.3,
    "debtToGdp": 72,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$47 858M",
    "gdpPerCapita": "$43 592",
    "fiveCoreMatrix": {
      "hci": 0.85,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 96,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Israel National Infrastructure Modernization",
      "progress": 73,
      "budget": "$19783M"
    },
    "news": [
      {
        "headline": "Israel Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Israel reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Israel",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Israel is currently classified under the World Bank High Income tier. With nominal GDP around $394.7B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (72% of GDP) and inflation containment (3.4% CPI)."
  },
  "LBN": {
    "name": "Lebanon",
    "iso3": "LBN",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇱🇧",
    "coordinates": [
      33.7982,
      35.8517
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 289229,
    "population": "6.9M",
    "gdpNominal": "$52.0B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 4.1,
    "unemployment": 5.6,
    "debtToGdp": 83,
    "budgetBalance": -2.5,
    "currentAccount": -0.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$6 739M",
    "gdpPerCapita": "$7 584",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 4.5,
      "electricityAccess": 94,
      "broadband": 74,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "Lebanon National Infrastructure Modernization",
      "progress": 76,
      "budget": "$2650M"
    },
    "news": [
      {
        "headline": "Lebanon Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Lebanon reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Lebanon",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Lebanon is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $52.0B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (4.1% CPI)."
  },
  "MDG": {
    "name": "Madagascar",
    "iso3": "MDG",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇲🇬",
    "coordinates": [
      -17.9715,
      46.9892
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 1093772,
    "population": "27.0M",
    "gdpNominal": "$14.1B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 15.5,
    "unemployment": 13,
    "debtToGdp": 91,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$2 194M",
    "gdpPerCapita": "$523",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 50,
      "electricityAccess": 53,
      "broadband": 32,
      "carbonIntensity": 1
    },
    "flagshipProject": {
      "title": "Madagascar National Infrastructure Modernization",
      "progress": 77,
      "budget": "$756M"
    },
    "news": [
      {
        "headline": "Madagascar Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Madagascar reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Madagascar",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Madagascar is currently classified under the World Bank Low Income tier. With nominal GDP around $14.1B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (91% of GDP) and inflation containment (15.5% CPI)."
  },
  "PSE": {
    "name": "Palestine",
    "iso3": "PSE",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇵🇸",
    "coordinates": [
      31.8087,
      35.2409
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 202412,
    "population": "4.7M",
    "gdpNominal": "$16.3B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 10.3,
    "unemployment": 6.5,
    "debtToGdp": 86,
    "budgetBalance": -2.5,
    "currentAccount": 2.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$2 453M",
    "gdpPerCapita": "$3 474",
    "fiveCoreMatrix": {
      "hci": 0.48,
      "povertyRate": 20,
      "electricityAccess": 93,
      "broadband": 51,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Palestine National Infrastructure Modernization",
      "progress": 80,
      "budget": "$864M"
    },
    "news": [
      {
        "headline": "Palestine Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Palestine reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Palestine",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Palestine is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $16.3B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (86% of GDP) and inflation containment (10.3% CPI)."
  },
  "GMB": {
    "name": "Gambia",
    "iso3": "GMB",
    "continent": "Africa",
    "region": "Western Africa",
    "flag": "🇬🇲",
    "coordinates": [
      13.5015,
      -15.2872
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 108908,
    "population": "2.3M",
    "gdpNominal": "$1.8B",
    "gdpGrowthYoY": 4.1,
    "inflationCPI": 17,
    "unemployment": 13,
    "debtToGdp": 86,
    "budgetBalance": -4.9,
    "currentAccount": -3.5,
    "interestRate": 13.5,
    "bondYield10Y": 17,
    "foreignReserves": "$719M",
    "gdpPerCapita": "$778",
    "fiveCoreMatrix": {
      "hci": 0.37,
      "povertyRate": 34,
      "electricityAccess": 48,
      "broadband": 41,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Gambia National Infrastructure Modernization",
      "progress": 71,
      "budget": "$141M"
    },
    "news": [
      {
        "headline": "Gambia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Gambia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Gambia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Gambia is currently classified under the World Bank Low Income tier. With nominal GDP around $1.8B and growth tracking at 4.1%, macroeconomic policy focuses on debt sustainability (86% of GDP) and inflation containment (17% CPI)."
  },
  "TUN": {
    "name": "Tunisia",
    "iso3": "TUN",
    "continent": "Africa",
    "region": "Northern Africa",
    "flag": "🇹🇳",
    "coordinates": [
      34.0168,
      9.8415
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 482789,
    "population": "11.7M",
    "gdpNominal": "$38.8B",
    "gdpGrowthYoY": 4.8,
    "inflationCPI": 3.5,
    "unemployment": 7.4,
    "debtToGdp": 83,
    "budgetBalance": -2.5,
    "currentAccount": -2.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$5 156M",
    "gdpPerCapita": "$3 317",
    "fiveCoreMatrix": {
      "hci": 0.64,
      "povertyRate": 3.5,
      "electricityAccess": 94,
      "broadband": 78,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "Tunisia National Infrastructure Modernization",
      "progress": 84,
      "budget": "$1990M"
    },
    "news": [
      {
        "headline": "Tunisia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Tunisia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Tunisia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Tunisia is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $38.8B and growth tracking at 4.8%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (3.5% CPI)."
  },
  "DZA": {
    "name": "Algeria",
    "iso3": "DZA",
    "continent": "Africa",
    "region": "Northern Africa",
    "flag": "🇩🇿",
    "coordinates": [
      29.6658,
      3.0163
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 1737122,
    "population": "43.1M",
    "gdpNominal": "$171.1B",
    "gdpGrowthYoY": 4.4,
    "inflationCPI": 3.5,
    "unemployment": 6.8,
    "debtToGdp": 70,
    "budgetBalance": -2.5,
    "currentAccount": 2.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$21 031M",
    "gdpPerCapita": "$3 974",
    "fiveCoreMatrix": {
      "hci": 0.68,
      "povertyRate": 3.5,
      "electricityAccess": 99,
      "broadband": 68,
      "carbonIntensity": 4
    },
    "flagshipProject": {
      "title": "Algeria National Infrastructure Modernization",
      "progress": 68,
      "budget": "$8605M"
    },
    "news": [
      {
        "headline": "Algeria Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Algeria reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Algeria",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Algeria is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $171.1B and growth tracking at 4.4%, macroeconomic policy focuses on debt sustainability (70% of GDP) and inflation containment (3.5% CPI)."
  },
  "JOR": {
    "name": "Jordan",
    "iso3": "JOR",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇯🇴",
    "coordinates": [
      31.1325,
      36.6507
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 419068,
    "population": "10.1M",
    "gdpNominal": "$44.5B",
    "gdpGrowthYoY": 4.8,
    "inflationCPI": 5.9,
    "unemployment": 7.4,
    "debtToGdp": 47,
    "budgetBalance": -4.1,
    "currentAccount": -1.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$5 840M",
    "gdpPerCapita": "$4 405",
    "fiveCoreMatrix": {
      "hci": 0.64,
      "povertyRate": 7.5,
      "electricityAccess": 98,
      "broadband": 72,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Jordan National Infrastructure Modernization",
      "progress": 74,
      "budget": "$2275M"
    },
    "news": [
      {
        "headline": "Jordan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Jordan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Jordan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Jordan is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $44.5B and growth tracking at 4.8%, macroeconomic policy focuses on debt sustainability (47% of GDP) and inflation containment (5.9% CPI)."
  },
  "ARE": {
    "name": "United Arab Emirates",
    "iso3": "ARE",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇦🇪",
    "coordinates": [
      24.1954,
      54.2434
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 405821,
    "population": "9.8M",
    "gdpNominal": "$421.1B",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 3,
    "unemployment": 4.3,
    "debtToGdp": 59,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$51 037M",
    "gdpPerCapita": "$43 103",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 11.1
    },
    "flagshipProject": {
      "title": "United Arab Emirates National Infrastructure Modernization",
      "progress": 65,
      "budget": "$21107M"
    },
    "news": [
      {
        "headline": "United Arab Emirates Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of United Arab Emirates reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for United Arab Emirates",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "United Arab Emirates is currently classified under the World Bank High Income tier. With nominal GDP around $421.1B and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (59% of GDP) and inflation containment (3% CPI)."
  },
  "QAT": {
    "name": "Qatar",
    "iso3": "QAT",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇶🇦",
    "coordinates": [
      25.2571,
      51.1513
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 128283,
    "population": "2.8M",
    "gdpNominal": "$175.8B",
    "gdpGrowthYoY": 1.8,
    "inflationCPI": 2.6,
    "unemployment": 4.3,
    "debtToGdp": 74,
    "budgetBalance": -3.3,
    "currentAccount": -1.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$21 600M",
    "gdpPerCapita": "$62 088",
    "fiveCoreMatrix": {
      "hci": 0.78,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 90,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Qatar National Infrastructure Modernization",
      "progress": 81,
      "budget": "$8842M"
    },
    "news": [
      {
        "headline": "Qatar Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Qatar reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Qatar",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Qatar is currently classified under the World Bank High Income tier. With nominal GDP around $175.8B and growth tracking at 1.8%, macroeconomic policy focuses on debt sustainability (74% of GDP) and inflation containment (2.6% CPI)."
  },
  "KWT": {
    "name": "Kuwait",
    "iso3": "KWT",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇰🇼",
    "coordinates": [
      29.3368,
      47.7425
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 183283,
    "population": "4.2M",
    "gdpNominal": "$134.6B",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 3.4,
    "unemployment": 5.3,
    "debtToGdp": 74,
    "budgetBalance": -4.9,
    "currentAccount": -0.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$16 655M",
    "gdpPerCapita": "$32 000",
    "fiveCoreMatrix": {
      "hci": 0.72,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 88,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Kuwait National Infrastructure Modernization",
      "progress": 75,
      "budget": "$6781M"
    },
    "news": [
      {
        "headline": "Kuwait Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Kuwait reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Kuwait",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Kuwait is currently classified under the World Bank High Income tier. With nominal GDP around $134.6B and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (74% of GDP) and inflation containment (3.4% CPI)."
  },
  "IRQ": {
    "name": "Iraq",
    "iso3": "IRQ",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇮🇶",
    "coordinates": [
      33.4386,
      44.3987
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1587391,
    "population": "39.3M",
    "gdpNominal": "$234.1B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 9.5,
    "unemployment": 8.6,
    "debtToGdp": 63,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$28 591M",
    "gdpPerCapita": "$5 955",
    "fiveCoreMatrix": {
      "hci": 0.51,
      "povertyRate": 19,
      "electricityAccess": 87,
      "broadband": 50,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Iraq National Infrastructure Modernization",
      "progress": 73,
      "budget": "$11755M"
    },
    "news": [
      {
        "headline": "Iraq Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Iraq reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Iraq",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Iraq is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $234.1B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (63% of GDP) and inflation containment (9.5% CPI)."
  },
  "OMN": {
    "name": "Oman",
    "iso3": "OMN",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇴🇲",
    "coordinates": [
      21.518,
      56.533
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 213999,
    "population": "5.0M",
    "gdpNominal": "$76.3B",
    "gdpGrowthYoY": 2.7,
    "inflationCPI": 2.6,
    "unemployment": 5.3,
    "debtToGdp": 68,
    "budgetBalance": -4.9,
    "currentAccount": -3.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$9 660M",
    "gdpPerCapita": "$15 343",
    "fiveCoreMatrix": {
      "hci": 0.76,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 90,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Oman National Infrastructure Modernization",
      "progress": 79,
      "budget": "$3867M"
    },
    "news": [
      {
        "headline": "Oman Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Oman reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Oman",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Oman is currently classified under the World Bank High Income tier. With nominal GDP around $76.3B and growth tracking at 2.7%, macroeconomic policy focuses on debt sustainability (68% of GDP) and inflation containment (2.6% CPI)."
  },
  "VUT": {
    "name": "Vanuatu",
    "iso3": "VUT",
    "continent": "Oceania",
    "region": "Melanesia",
    "flag": "🇻🇺",
    "coordinates": [
      -15.7211,
      167.1015
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 26995,
    "population": "300K",
    "gdpNominal": "$934M",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 6.3,
    "unemployment": 7.2,
    "debtToGdp": 66,
    "budgetBalance": -4.1,
    "currentAccount": -2.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$612M",
    "gdpPerCapita": "$3 115",
    "fiveCoreMatrix": {
      "hci": 0.54,
      "povertyRate": 22,
      "electricityAccess": 90,
      "broadband": 53,
      "carbonIntensity": 1.8
    },
    "flagshipProject": {
      "title": "Vanuatu National Infrastructure Modernization",
      "progress": 86,
      "budget": "$97M"
    },
    "news": [
      {
        "headline": "Vanuatu Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Vanuatu reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Vanuatu",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Vanuatu is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $934M and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (66% of GDP) and inflation containment (6.3% CPI)."
  },
  "KHM": {
    "name": "Cambodia",
    "iso3": "KHM",
    "continent": "Asia",
    "region": "South-Eastern Asia",
    "flag": "🇰🇭",
    "coordinates": [
      12.6413,
      104.8952
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 674462,
    "population": "16.5M",
    "gdpNominal": "$27.1B",
    "gdpGrowthYoY": 3.5,
    "inflationCPI": 9.5,
    "unemployment": 11,
    "debtToGdp": 97,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 12,
    "bondYield10Y": 15.5,
    "foreignReserves": "$3 751M",
    "gdpPerCapita": "$1 643",
    "fiveCoreMatrix": {
      "hci": 0.41,
      "povertyRate": 54,
      "electricityAccess": 59,
      "broadband": 36,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Cambodia National Infrastructure Modernization",
      "progress": 75,
      "budget": "$1404M"
    },
    "news": [
      {
        "headline": "Cambodia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Cambodia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Cambodia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Cambodia is currently classified under the World Bank Low Income tier. With nominal GDP around $27.1B and growth tracking at 3.5%, macroeconomic policy focuses on debt sustainability (97% of GDP) and inflation containment (9.5% CPI)."
  },
  "THA": {
    "name": "Thailand",
    "iso3": "THA",
    "continent": "Asia",
    "region": "South-Eastern Asia",
    "flag": "🇹🇭",
    "coordinates": [
      13.1808,
      100.6615
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 2800023,
    "population": "69.6M",
    "gdpNominal": "$543.5B",
    "gdpGrowthYoY": 4.8,
    "inflationCPI": 4.7,
    "unemployment": 7.4,
    "debtToGdp": 70,
    "budgetBalance": -2.5,
    "currentAccount": -1.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$65 726M",
    "gdpPerCapita": "$7 807",
    "fiveCoreMatrix": {
      "hci": 0.64,
      "povertyRate": 5.5,
      "electricityAccess": 99,
      "broadband": 80,
      "carbonIntensity": 4
    },
    "flagshipProject": {
      "title": "Thailand National Infrastructure Modernization",
      "progress": 84,
      "budget": "$27227M"
    },
    "news": [
      {
        "headline": "Thailand Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Thailand reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Thailand",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Thailand is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $543.5B and growth tracking at 4.8%, macroeconomic policy focuses on debt sustainability (70% of GDP) and inflation containment (4.7% CPI)."
  },
  "LAO": {
    "name": "Laos",
    "iso3": "LAO",
    "continent": "Asia",
    "region": "South-Eastern Asia",
    "flag": "🇱🇦",
    "coordinates": [
      18.2836,
      103.693
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 301778,
    "population": "7.2M",
    "gdpNominal": "$18.2B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 7.1,
    "unemployment": 7.2,
    "debtToGdp": 61,
    "budgetBalance": -2.5,
    "currentAccount": -1.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$2 681M",
    "gdpPerCapita": "$2 535",
    "fiveCoreMatrix": {
      "hci": 0.54,
      "povertyRate": 17,
      "electricityAccess": 85,
      "broadband": 53,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Laos National Infrastructure Modernization",
      "progress": 76,
      "budget": "$959M"
    },
    "news": [
      {
        "headline": "Laos Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Laos reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Laos",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Laos is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $18.2B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (61% of GDP) and inflation containment (7.1% CPI)."
  },
  "MMR": {
    "name": "Myanmar",
    "iso3": "MMR",
    "continent": "Asia",
    "region": "South-Eastern Asia",
    "flag": "🇲🇲",
    "coordinates": [
      20.0005,
      97.1534
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 2176817,
    "population": "54.0M",
    "gdpNominal": "$76.1B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 17,
    "unemployment": 13,
    "debtToGdp": 102,
    "budgetBalance": -3.3,
    "currentAccount": -3.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$9 630M",
    "gdpPerCapita": "$1 408",
    "fiveCoreMatrix": {
      "hci": 0.43,
      "povertyRate": 34,
      "electricityAccess": 64,
      "broadband": 41,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Myanmar National Infrastructure Modernization",
      "progress": 77,
      "budget": "$3854M"
    },
    "news": [
      {
        "headline": "Myanmar Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Myanmar reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Myanmar",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Myanmar is currently classified under the World Bank Low Income tier. With nominal GDP around $76.1B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (102% of GDP) and inflation containment (17% CPI)."
  },
  "PRK": {
    "name": "North Korea",
    "iso3": "PRK",
    "continent": "Asia",
    "region": "Eastern Asia",
    "flag": "🇰🇵",
    "coordinates": [
      40.1327,
      127.6856
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 1041646,
    "population": "25.7M",
    "gdpNominal": "$40.0B",
    "gdpGrowthYoY": 3.5,
    "inflationCPI": 12.5,
    "unemployment": 10,
    "debtToGdp": 95,
    "budgetBalance": -2.5,
    "currentAccount": 1.5,
    "interestRate": 12,
    "bondYield10Y": 15.5,
    "foreignReserves": "$5 300M",
    "gdpPerCapita": "$1 558",
    "fiveCoreMatrix": {
      "hci": 0.36,
      "povertyRate": 39,
      "electricityAccess": 57,
      "broadband": 26,
      "carbonIntensity": 1
    },
    "flagshipProject": {
      "title": "North Korea National Infrastructure Modernization",
      "progress": 80,
      "budget": "$2050M"
    },
    "news": [
      {
        "headline": "North Korea Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of North Korea reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for North Korea",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "North Korea is currently classified under the World Bank Low Income tier. With nominal GDP around $40.0B and growth tracking at 3.5%, macroeconomic policy focuses on debt sustainability (95% of GDP) and inflation containment (12.5% CPI)."
  },
  "MNG": {
    "name": "Mongolia",
    "iso3": "MNG",
    "continent": "Asia",
    "region": "Eastern Asia",
    "flag": "🇲🇳",
    "coordinates": [
      47.2045,
      104.5854
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 144007,
    "population": "3.2M",
    "gdpNominal": "$14.0B",
    "gdpGrowthYoY": 5.2,
    "inflationCPI": 6.3,
    "unemployment": 7.9,
    "debtToGdp": 53,
    "budgetBalance": -3.3,
    "currentAccount": -2.5,
    "interestRate": 10.1,
    "bondYield10Y": 12.1,
    "foreignReserves": "$2 180M",
    "gdpPerCapita": "$4 340",
    "fiveCoreMatrix": {
      "hci": 0.55,
      "povertyRate": 15,
      "electricityAccess": 95,
      "broadband": 66,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Mongolia National Infrastructure Modernization",
      "progress": 77,
      "budget": "$750M"
    },
    "news": [
      {
        "headline": "Mongolia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Mongolia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Mongolia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Mongolia is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $14.0B and growth tracking at 5.2%, macroeconomic policy focuses on debt sustainability (53% of GDP) and inflation containment (6.3% CPI)."
  },
  "BGD": {
    "name": "Bangladesh",
    "iso3": "BGD",
    "continent": "Asia",
    "region": "Southern Asia",
    "flag": "🇧🇩",
    "coordinates": [
      23.3989,
      90.6113
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 6536846,
    "population": "163.0M",
    "gdpNominal": "$302.6B",
    "gdpGrowthYoY": 4.1,
    "inflationCPI": 20,
    "unemployment": 8,
    "debtToGdp": 88,
    "budgetBalance": -4.1,
    "currentAccount": -2.5,
    "interestRate": 13.5,
    "bondYield10Y": 17,
    "foreignReserves": "$36 809M",
    "gdpPerCapita": "$1 856",
    "fiveCoreMatrix": {
      "hci": 0.42,
      "povertyRate": 53,
      "electricityAccess": 50,
      "broadband": 35,
      "carbonIntensity": 0.4
    },
    "flagshipProject": {
      "title": "Bangladesh National Infrastructure Modernization",
      "progress": 66,
      "budget": "$15179M"
    },
    "news": [
      {
        "headline": "Bangladesh Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Bangladesh reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Bangladesh",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Bangladesh is currently classified under the World Bank Low Income tier. With nominal GDP around $302.6B and growth tracking at 4.1%, macroeconomic policy focuses on debt sustainability (88% of GDP) and inflation containment (20% CPI)."
  },
  "BTN": {
    "name": "Bhutan",
    "iso3": "BTN",
    "continent": "Asia",
    "region": "Southern Asia",
    "flag": "🇧🇹",
    "coordinates": [
      27.4678,
      90.6151
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 45524,
    "population": "763K",
    "gdpNominal": "$2.5B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 5.5,
    "unemployment": 7.2,
    "debtToGdp": 60,
    "budgetBalance": -4.1,
    "currentAccount": -3.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$804M",
    "gdpPerCapita": "$3 315",
    "fiveCoreMatrix": {
      "hci": 0.54,
      "povertyRate": 21,
      "electricityAccess": 84,
      "broadband": 52,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Bhutan National Infrastructure Modernization",
      "progress": 66,
      "budget": "$177M"
    },
    "news": [
      {
        "headline": "Bhutan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Bhutan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Bhutan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Bhutan is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $2.5B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (60% of GDP) and inflation containment (5.5% CPI)."
  },
  "NPL": {
    "name": "Nepal",
    "iso3": "NPL",
    "continent": "Asia",
    "region": "Southern Asia",
    "flag": "🇳🇵",
    "coordinates": [
      28.2091,
      84.5587
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 1159348,
    "population": "28.6M",
    "gdpNominal": "$30.6B",
    "gdpGrowthYoY": 5.3,
    "inflationCPI": 9.5,
    "unemployment": 8,
    "debtToGdp": 96,
    "budgetBalance": -4.1,
    "currentAccount": -0.5,
    "interestRate": 16.5,
    "bondYield10Y": 20,
    "foreignReserves": "$4 177M",
    "gdpPerCapita": "$1 071",
    "fiveCoreMatrix": {
      "hci": 0.44,
      "povertyRate": 37,
      "electricityAccess": 58,
      "broadband": 24,
      "carbonIntensity": 0.4
    },
    "flagshipProject": {
      "title": "Nepal National Infrastructure Modernization",
      "progress": 78,
      "budget": "$1582M"
    },
    "news": [
      {
        "headline": "Nepal Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Nepal reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Nepal",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Nepal is currently classified under the World Bank Low Income tier. With nominal GDP around $30.6B and growth tracking at 5.3%, macroeconomic policy focuses on debt sustainability (96% of GDP) and inflation containment (9.5% CPI)."
  },
  "PAK": {
    "name": "Pakistan",
    "iso3": "PAK",
    "continent": "Asia",
    "region": "Southern Asia",
    "flag": "🇵🇰",
    "coordinates": [
      30.7904,
      69.4436
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 8677613,
    "population": "216.6M",
    "gdpNominal": "$278.2B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 7.1,
    "unemployment": 6.5,
    "debtToGdp": 57,
    "budgetBalance": -2.5,
    "currentAccount": -1.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$33 887M",
    "gdpPerCapita": "$1 285",
    "fiveCoreMatrix": {
      "hci": 0.48,
      "povertyRate": 17,
      "electricityAccess": 81,
      "broadband": 53,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Pakistan National Infrastructure Modernization",
      "progress": 80,
      "budget": "$13961M"
    },
    "news": [
      {
        "headline": "Pakistan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Pakistan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Pakistan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Pakistan is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $278.2B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (57% of GDP) and inflation containment (7.1% CPI)."
  },
  "AFG": {
    "name": "Afghanistan",
    "iso3": "AFG",
    "continent": "Asia",
    "region": "Southern Asia",
    "flag": "🇦🇫",
    "coordinates": [
      34.8285,
      67.768
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 1536670,
    "population": "38.0M",
    "gdpNominal": "$19.3B",
    "gdpGrowthYoY": 3.5,
    "inflationCPI": 18.5,
    "unemployment": 13,
    "debtToGdp": 91,
    "budgetBalance": -3.3,
    "currentAccount": -3.5,
    "interestRate": 12,
    "bondYield10Y": 15.5,
    "foreignReserves": "$2 815M",
    "gdpPerCapita": "$507",
    "fiveCoreMatrix": {
      "hci": 0.41,
      "povertyRate": 52,
      "electricityAccess": 53,
      "broadband": 34,
      "carbonIntensity": 1
    },
    "flagshipProject": {
      "title": "Afghanistan National Infrastructure Modernization",
      "progress": 65,
      "budget": "$1015M"
    },
    "news": [
      {
        "headline": "Afghanistan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Afghanistan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Afghanistan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Afghanistan is currently classified under the World Bank Low Income tier. With nominal GDP around $19.3B and growth tracking at 3.5%, macroeconomic policy focuses on debt sustainability (91% of GDP) and inflation containment (18.5% CPI)."
  },
  "TJK": {
    "name": "Tajikistan",
    "iso3": "TJK",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇹🇯",
    "coordinates": [
      38.5129,
      70.7872
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 387841,
    "population": "9.3M",
    "gdpNominal": "$8.1B",
    "gdpGrowthYoY": 5.9,
    "inflationCPI": 12.5,
    "unemployment": 8,
    "debtToGdp": 95,
    "budgetBalance": -2.5,
    "currentAccount": 0.5,
    "interestRate": 18,
    "bondYield10Y": 21.5,
    "foreignReserves": "$1 474M",
    "gdpPerCapita": "$871",
    "fiveCoreMatrix": {
      "hci": 0.4,
      "povertyRate": 56,
      "electricityAccess": 57,
      "broadband": 38,
      "carbonIntensity": 1
    },
    "flagshipProject": {
      "title": "Tajikistan National Infrastructure Modernization",
      "progress": 84,
      "budget": "$456M"
    },
    "news": [
      {
        "headline": "Tajikistan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Tajikistan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Tajikistan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Tajikistan is currently classified under the World Bank Low Income tier. With nominal GDP around $8.1B and growth tracking at 5.9%, macroeconomic policy focuses on debt sustainability (95% of GDP) and inflation containment (12.5% CPI)."
  },
  "KGZ": {
    "name": "Kyrgyzstan",
    "iso3": "KGZ",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇰🇬",
    "coordinates": [
      41.3638,
      73.9768
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 273276,
    "population": "6.5M",
    "gdpNominal": "$8.5B",
    "gdpGrowthYoY": 3.5,
    "inflationCPI": 20,
    "unemployment": 11,
    "debtToGdp": 65,
    "budgetBalance": -4.9,
    "currentAccount": -2.5,
    "interestRate": 12,
    "bondYield10Y": 15.5,
    "foreignReserves": "$1 514M",
    "gdpPerCapita": "$1 309",
    "fiveCoreMatrix": {
      "hci": 0.41,
      "povertyRate": 53,
      "electricityAccess": 42,
      "broadband": 35,
      "carbonIntensity": 0.8
    },
    "flagshipProject": {
      "title": "Kyrgyzstan National Infrastructure Modernization",
      "progress": 75,
      "budget": "$473M"
    },
    "news": [
      {
        "headline": "Kyrgyzstan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Kyrgyzstan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Kyrgyzstan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Kyrgyzstan is currently classified under the World Bank Low Income tier. With nominal GDP around $8.5B and growth tracking at 3.5%, macroeconomic policy focuses on debt sustainability (65% of GDP) and inflation containment (20% CPI)."
  },
  "TKM": {
    "name": "Turkmenistan",
    "iso3": "TKM",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇹🇲",
    "coordinates": [
      39.3301,
      58.4569
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 252684,
    "population": "5.9M",
    "gdpNominal": "$40.8B",
    "gdpGrowthYoY": 4.8,
    "inflationCPI": 3.5,
    "unemployment": 7.4,
    "debtToGdp": 82,
    "budgetBalance": -2.5,
    "currentAccount": 1.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$5 391M",
    "gdpPerCapita": "$6 860",
    "fiveCoreMatrix": {
      "hci": 0.64,
      "povertyRate": 3.5,
      "electricityAccess": 99,
      "broadband": 68,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Turkmenistan National Infrastructure Modernization",
      "progress": 84,
      "budget": "$2088M"
    },
    "news": [
      {
        "headline": "Turkmenistan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Turkmenistan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Turkmenistan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Turkmenistan is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $40.8B and growth tracking at 4.8%, macroeconomic policy focuses on debt sustainability (82% of GDP) and inflation containment (3.5% CPI)."
  },
  "IRN": {
    "name": "Iran",
    "iso3": "IRN",
    "continent": "Asia",
    "region": "Southern Asia",
    "flag": "🇮🇷",
    "coordinates": [
      33.354,
      53.2318
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 3331556,
    "population": "82.9M",
    "gdpNominal": "$454.0B",
    "gdpGrowthYoY": 4.4,
    "inflationCPI": 4.7,
    "unemployment": 6.8,
    "debtToGdp": 83,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 6.75,
    "bondYield10Y": 7.95,
    "foreignReserves": "$54 980M",
    "gdpPerCapita": "$5 476",
    "fiveCoreMatrix": {
      "hci": 0.63,
      "povertyRate": 5.5,
      "electricityAccess": 94,
      "broadband": 75,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "Iran National Infrastructure Modernization",
      "progress": 73,
      "budget": "$22750M"
    },
    "news": [
      {
        "headline": "Iran Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Iran reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Iran",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Iran is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $454.0B and growth tracking at 4.4%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (4.7% CPI)."
  },
  "SYR": {
    "name": "Syria",
    "iso3": "SYR",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇸🇾",
    "coordinates": [
      35.1462,
      37.9502
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 697805,
    "population": "17.1M",
    "gdpNominal": "$98.8B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 9.5,
    "unemployment": 8.6,
    "debtToGdp": 64,
    "budgetBalance": -4.9,
    "currentAccount": 1.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$12 360M",
    "gdpPerCapita": "$5 790",
    "fiveCoreMatrix": {
      "hci": 0.51,
      "povertyRate": 26,
      "electricityAccess": 88,
      "broadband": 57,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Syria National Infrastructure Modernization",
      "progress": 83,
      "budget": "$4992M"
    },
    "news": [
      {
        "headline": "Syria Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Syria reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Syria",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Syria is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $98.8B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (64% of GDP) and inflation containment (9.5% CPI)."
  },
  "ARM": {
    "name": "Armenia",
    "iso3": "ARM",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇦🇲",
    "coordinates": [
      39.9455,
      45.3104
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 133309,
    "population": "3.0M",
    "gdpNominal": "$13.7B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 9.5,
    "unemployment": 6.5,
    "debtToGdp": 59,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$2 141M",
    "gdpPerCapita": "$4 622",
    "fiveCoreMatrix": {
      "hci": 0.53,
      "povertyRate": 19,
      "electricityAccess": 83,
      "broadband": 50,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Armenia National Infrastructure Modernization",
      "progress": 65,
      "budget": "$734M"
    },
    "news": [
      {
        "headline": "Armenia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Armenia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Armenia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Armenia is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $13.7B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (59% of GDP) and inflation containment (9.5% CPI)."
  },
  "SWE": {
    "name": "Sweden",
    "iso3": "SWE",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇸🇪",
    "coordinates": [
      62.7394,
      16.5633
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 426418,
    "population": "10.3M",
    "gdpNominal": "$530.9B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3.4,
    "unemployment": 5.3,
    "debtToGdp": 59,
    "budgetBalance": -4.9,
    "currentAccount": -0.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$64 206M",
    "gdpPerCapita": "$51 615",
    "fiveCoreMatrix": {
      "hci": 0.8,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 88,
      "carbonIntensity": 11.1
    },
    "flagshipProject": {
      "title": "Sweden National Infrastructure Modernization",
      "progress": 83,
      "budget": "$26594M"
    },
    "news": [
      {
        "headline": "Sweden Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Sweden reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Sweden",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Sweden is currently classified under the World Bank High Income tier. With nominal GDP around $530.9B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (59% of GDP) and inflation containment (3.4% CPI)."
  },
  "BLR": {
    "name": "Belarus",
    "iso3": "BLR",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇧🇾",
    "coordinates": [
      53.3476,
      28.3003
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 393674,
    "population": "9.5M",
    "gdpNominal": "$63.1B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 4.1,
    "unemployment": 5.6,
    "debtToGdp": 47,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$8 070M",
    "gdpPerCapita": "$6 663",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 4.5,
      "electricityAccess": 98,
      "broadband": 69,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Belarus National Infrastructure Modernization",
      "progress": 66,
      "budget": "$3204M"
    },
    "news": [
      {
        "headline": "Belarus Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Belarus reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Belarus",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Belarus is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $63.1B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (47% of GDP) and inflation containment (4.1% CPI)."
  },
  "UKR": {
    "name": "Ukraine",
    "iso3": "UKR",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇺🇦",
    "coordinates": [
      48.687,
      30.4509
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1790406,
    "population": "44.4M",
    "gdpNominal": "$153.8B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 9.5,
    "unemployment": 6.5,
    "debtToGdp": 64,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$18 954M",
    "gdpPerCapita": "$3 465",
    "fiveCoreMatrix": {
      "hci": 0.53,
      "povertyRate": 12,
      "electricityAccess": 88,
      "broadband": 63,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Ukraine National Infrastructure Modernization",
      "progress": 85,
      "budget": "$7739M"
    },
    "news": [
      {
        "headline": "Ukraine Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Ukraine reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Ukraine",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Ukraine is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $153.8B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (64% of GDP) and inflation containment (9.5% CPI)."
  },
  "POL": {
    "name": "Poland",
    "iso3": "POL",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇵🇱",
    "coordinates": [
      51.7448,
      19.4757
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 1533835,
    "population": "38.0M",
    "gdpNominal": "$595.9B",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 3.4,
    "unemployment": 3.8,
    "debtToGdp": 66,
    "budgetBalance": -2.5,
    "currentAccount": -1.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$72 003M",
    "gdpPerCapita": "$15 693",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 92,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Poland National Infrastructure Modernization",
      "progress": 80,
      "budget": "$29843M"
    },
    "news": [
      {
        "headline": "Poland Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Poland reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Poland",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Poland is currently classified under the World Bank High Income tier. With nominal GDP around $595.9B and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (66% of GDP) and inflation containment (3.4% CPI)."
  },
  "AUT": {
    "name": "Austria",
    "iso3": "AUT",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇦🇹",
    "coordinates": [
      47.6447,
      13.4846
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 370083,
    "population": "8.9M",
    "gdpNominal": "$445.1B",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 2.6,
    "unemployment": 4.3,
    "debtToGdp": 74,
    "budgetBalance": -3.3,
    "currentAccount": -2.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$53 909M",
    "gdpPerCapita": "$50 138",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 86,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Austria National Infrastructure Modernization",
      "progress": 65,
      "budget": "$22304M"
    },
    "news": [
      {
        "headline": "Austria Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Austria reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Austria",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Austria is currently classified under the World Bank High Income tier. With nominal GDP around $445.1B and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (74% of GDP) and inflation containment (2.6% CPI)."
  },
  "HUN": {
    "name": "Hungary",
    "iso3": "HUN",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇭🇺",
    "coordinates": [
      47.4162,
      19.2319
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 405798,
    "population": "9.8M",
    "gdpNominal": "$163.5B",
    "gdpGrowthYoY": 2.1,
    "inflationCPI": 2.6,
    "unemployment": 3.8,
    "debtToGdp": 68,
    "budgetBalance": -2.5,
    "currentAccount": -2.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$20 116M",
    "gdpPerCapita": "$16 732",
    "fiveCoreMatrix": {
      "hci": 0.84,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 86,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Hungary National Infrastructure Modernization",
      "progress": 72,
      "budget": "$8223M"
    },
    "news": [
      {
        "headline": "Hungary Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Hungary reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Hungary",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Hungary is currently classified under the World Bank High Income tier. With nominal GDP around $163.5B and growth tracking at 2.1%, macroeconomic policy focuses on debt sustainability (68% of GDP) and inflation containment (2.6% CPI)."
  },
  "MDA": {
    "name": "Moldova",
    "iso3": "MDA",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇲🇩",
    "coordinates": [
      47.0466,
      28.4704
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 121305,
    "population": "2.7M",
    "gdpNominal": "$12.0B",
    "gdpGrowthYoY": 5.2,
    "inflationCPI": 9.5,
    "unemployment": 7.9,
    "debtToGdp": 82,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 10.1,
    "bondYield10Y": 12.1,
    "foreignReserves": "$1 936M",
    "gdpPerCapita": "$4 503",
    "fiveCoreMatrix": {
      "hci": 0.55,
      "povertyRate": 20,
      "electricityAccess": 89,
      "broadband": 56,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Moldova National Infrastructure Modernization",
      "progress": 77,
      "budget": "$648M"
    },
    "news": [
      {
        "headline": "Moldova Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Moldova reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Moldova",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Moldova is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $12.0B and growth tracking at 5.2%, macroeconomic policy focuses on debt sustainability (82% of GDP) and inflation containment (9.5% CPI)."
  },
  "ROU": {
    "name": "Romania",
    "iso3": "ROU",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇷🇴",
    "coordinates": [
      45.8568,
      25.1883
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 789262,
    "population": "19.4M",
    "gdpNominal": "$250.1B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 5.9,
    "unemployment": 6.2,
    "debtToGdp": 50,
    "budgetBalance": -4.1,
    "currentAccount": -1.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$30 509M",
    "gdpPerCapita": "$12 920",
    "fiveCoreMatrix": {
      "hci": 0.62,
      "povertyRate": 7.5,
      "electricityAccess": 95,
      "broadband": 72,
      "carbonIntensity": 4
    },
    "flagshipProject": {
      "title": "Romania National Infrastructure Modernization",
      "progress": 82,
      "budget": "$12554M"
    },
    "news": [
      {
        "headline": "Romania Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Romania reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Romania",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Romania is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $250.1B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (50% of GDP) and inflation containment (5.9% CPI)."
  },
  "LTU": {
    "name": "Lithuania",
    "iso3": "LTU",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇱🇹",
    "coordinates": [
      55.201,
      24.0166
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 126474,
    "population": "2.8M",
    "gdpNominal": "$54.6B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 5.9,
    "unemployment": 5.6,
    "debtToGdp": 50,
    "budgetBalance": -2.5,
    "currentAccount": -3.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$7 055M",
    "gdpPerCapita": "$19 602",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 7.5,
      "electricityAccess": 95,
      "broadband": 77,
      "carbonIntensity": 4
    },
    "flagshipProject": {
      "title": "Lithuania National Infrastructure Modernization",
      "progress": 76,
      "budget": "$2781M"
    },
    "news": [
      {
        "headline": "Lithuania Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Lithuania reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Lithuania",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Lithuania is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $54.6B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (50% of GDP) and inflation containment (5.9% CPI)."
  },
  "LVA": {
    "name": "Latvia",
    "iso3": "LVA",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇱🇻",
    "coordinates": [
      56.8577,
      24.9402
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 91512,
    "population": "1.9M",
    "gdpNominal": "$34.1B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 4.1,
    "unemployment": 5.6,
    "debtToGdp": 70,
    "budgetBalance": -2.5,
    "currentAccount": -1.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$4 592M",
    "gdpPerCapita": "$17 828",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 4.5,
      "electricityAccess": 99,
      "broadband": 79,
      "carbonIntensity": 4
    },
    "flagshipProject": {
      "title": "Latvia National Infrastructure Modernization",
      "progress": 76,
      "budget": "$1755M"
    },
    "news": [
      {
        "headline": "Latvia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Latvia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Latvia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Latvia is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $34.1B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (70% of GDP) and inflation containment (4.1% CPI)."
  },
  "EST": {
    "name": "Estonia",
    "iso3": "EST",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇪🇪",
    "coordinates": [
      58.6971,
      26.1421
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 68064,
    "population": "1.3M",
    "gdpNominal": "$31.5B",
    "gdpGrowthYoY": 2.7,
    "inflationCPI": 3.4,
    "unemployment": 4.3,
    "debtToGdp": 74,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$4 277M",
    "gdpPerCapita": "$23 723",
    "fiveCoreMatrix": {
      "hci": 0.81,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 96,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Estonia National Infrastructure Modernization",
      "progress": 69,
      "budget": "$1624M"
    },
    "news": [
      {
        "headline": "Estonia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Estonia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Estonia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Estonia is currently classified under the World Bank High Income tier. With nominal GDP around $31.5B and growth tracking at 2.7%, macroeconomic policy focuses on debt sustainability (74% of GDP) and inflation containment (3.4% CPI)."
  },
  "BGR": {
    "name": "Bulgaria",
    "iso3": "BGR",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇧🇬",
    "coordinates": [
      42.8937,
      24.6873
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 294030,
    "population": "7.0M",
    "gdpNominal": "$68.6B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 4.1,
    "unemployment": 5.6,
    "debtToGdp": 47,
    "budgetBalance": -4.1,
    "currentAccount": -2.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$8 727M",
    "gdpPerCapita": "$9 828",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 4.5,
      "electricityAccess": 98,
      "broadband": 79,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Bulgaria National Infrastructure Modernization",
      "progress": 66,
      "budget": "$3478M"
    },
    "news": [
      {
        "headline": "Bulgaria Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Bulgaria reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Bulgaria",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Bulgaria is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $68.6B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (47% of GDP) and inflation containment (4.1% CPI)."
  },
  "GRC": {
    "name": "Greece",
    "iso3": "GRC",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇬🇷",
    "coordinates": [
      38.8734,
      23.5397
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 443653,
    "population": "10.7M",
    "gdpNominal": "$209.9B",
    "gdpGrowthYoY": 1.8,
    "inflationCPI": 3,
    "unemployment": 5.3,
    "debtToGdp": 57,
    "budgetBalance": -4.9,
    "currentAccount": 1.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$25 682M",
    "gdpPerCapita": "$19 582",
    "fiveCoreMatrix": {
      "hci": 0.83,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 8.7
    },
    "flagshipProject": {
      "title": "Greece National Infrastructure Modernization",
      "progress": 71,
      "budget": "$10543M"
    },
    "news": [
      {
        "headline": "Greece Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Greece reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Greece",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Greece is currently classified under the World Bank High Income tier. With nominal GDP around $209.9B and growth tracking at 1.8%, macroeconomic policy focuses on debt sustainability (57% of GDP) and inflation containment (3% CPI)."
  },
  "TUR": {
    "name": "Turkey",
    "iso3": "TUR",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇹🇷",
    "coordinates": [
      38.9703,
      34.884
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 3352185,
    "population": "83.4M",
    "gdpNominal": "$761.4B",
    "gdpGrowthYoY": 4.8,
    "inflationCPI": 3.5,
    "unemployment": 7.4,
    "debtToGdp": 47,
    "budgetBalance": -2.5,
    "currentAccount": -2.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$91 871M",
    "gdpPerCapita": "$9 127",
    "fiveCoreMatrix": {
      "hci": 0.64,
      "povertyRate": 3.5,
      "electricityAccess": 98,
      "broadband": 78,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Turkey National Infrastructure Modernization",
      "progress": 84,
      "budget": "$38121M"
    },
    "news": [
      {
        "headline": "Turkey Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Turkey reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Turkey",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Turkey is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $761.4B and growth tracking at 4.8%, macroeconomic policy focuses on debt sustainability (47% of GDP) and inflation containment (3.5% CPI)."
  },
  "ALB": {
    "name": "Albania",
    "iso3": "ALB",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇦🇱",
    "coordinates": [
      41.2805,
      20.1168
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 129168,
    "population": "2.9M",
    "gdpNominal": "$15.3B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 10.3,
    "unemployment": 6.5,
    "debtToGdp": 83,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$2 333M",
    "gdpPerCapita": "$5 353",
    "fiveCoreMatrix": {
      "hci": 0.53,
      "povertyRate": 13,
      "electricityAccess": 90,
      "broadband": 64,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Albania National Infrastructure Modernization",
      "progress": 65,
      "budget": "$814M"
    },
    "news": [
      {
        "headline": "Albania Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Albania reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Albania",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Albania is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $15.3B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (10.3% CPI)."
  },
  "HRV": {
    "name": "Croatia",
    "iso3": "HRV",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇭🇷",
    "coordinates": [
      44.8454,
      16.4313
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 177700,
    "population": "4.1M",
    "gdpNominal": "$60.8B",
    "gdpGrowthYoY": 2.1,
    "inflationCPI": 3,
    "unemployment": 3.8,
    "debtToGdp": 76,
    "budgetBalance": -2.5,
    "currentAccount": 1.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$7 790M",
    "gdpPerCapita": "$14 936",
    "fiveCoreMatrix": {
      "hci": 0.84,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 9.9
    },
    "flagshipProject": {
      "title": "Croatia National Infrastructure Modernization",
      "progress": 72,
      "budget": "$3088M"
    },
    "news": [
      {
        "headline": "Croatia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Croatia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Croatia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Croatia is currently classified under the World Bank High Income tier. With nominal GDP around $60.8B and growth tracking at 2.1%, macroeconomic policy focuses on debt sustainability (76% of GDP) and inflation containment (3% CPI)."
  },
  "CHE": {
    "name": "Switzerland",
    "iso3": "CHE",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇨🇭",
    "coordinates": [
      46.7969,
      8.3065
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 357993,
    "population": "8.6M",
    "gdpNominal": "$703.1B",
    "gdpGrowthYoY": 2.1,
    "inflationCPI": 2.2,
    "unemployment": 5.3,
    "debtToGdp": 59,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$84 870M",
    "gdpPerCapita": "$81 994",
    "fiveCoreMatrix": {
      "hci": 0.79,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 85,
      "carbonIntensity": 11.1
    },
    "flagshipProject": {
      "title": "Switzerland National Infrastructure Modernization",
      "progress": 67,
      "budget": "$35204M"
    },
    "news": [
      {
        "headline": "Switzerland Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Switzerland reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Switzerland",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Switzerland is currently classified under the World Bank High Income tier. With nominal GDP around $703.1B and growth tracking at 2.1%, macroeconomic policy focuses on debt sustainability (59% of GDP) and inflation containment (2.2% CPI)."
  },
  "LUX": {
    "name": "Luxembourg",
    "iso3": "LUX",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇱🇺",
    "coordinates": [
      49.8121,
      5.9813
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 39796,
    "population": "620K",
    "gdpNominal": "$71.1B",
    "gdpGrowthYoY": 1.8,
    "inflationCPI": 2.6,
    "unemployment": 3.8,
    "debtToGdp": 78,
    "budgetBalance": -2.5,
    "currentAccount": -2.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$9 032M",
    "gdpPerCapita": "$114 703",
    "fiveCoreMatrix": {
      "hci": 0.73,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 86,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Luxembourg National Infrastructure Modernization",
      "progress": 76,
      "budget": "$3605M"
    },
    "news": [
      {
        "headline": "Luxembourg Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Luxembourg reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Luxembourg",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Luxembourg is currently classified under the World Bank High Income tier. With nominal GDP around $71.1B and growth tracking at 1.8%, macroeconomic policy focuses on debt sustainability (78% of GDP) and inflation containment (2.6% CPI)."
  },
  "BEL": {
    "name": "Belgium",
    "iso3": "BEL",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇧🇪",
    "coordinates": [
      50.7159,
      4.4326
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 474362,
    "population": "11.5M",
    "gdpNominal": "$533.1B",
    "gdpGrowthYoY": 1.8,
    "inflationCPI": 2.6,
    "unemployment": 4.8,
    "debtToGdp": 66,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$64 472M",
    "gdpPerCapita": "$46 421",
    "fiveCoreMatrix": {
      "hci": 0.78,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 94,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Belgium National Infrastructure Modernization",
      "progress": 66,
      "budget": "$26705M"
    },
    "news": [
      {
        "headline": "Belgium Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Belgium reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Belgium",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Belgium is currently classified under the World Bank High Income tier. With nominal GDP around $533.1B and growth tracking at 1.8%, macroeconomic policy focuses on debt sustainability (66% of GDP) and inflation containment (2.6% CPI)."
  },
  "NLD": {
    "name": "Netherlands",
    "iso3": "NLD",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇳🇱",
    "coordinates": [
      52.1025,
      5.4899
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 708314,
    "population": "17.3M",
    "gdpNominal": "$907.0B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 2.2,
    "unemployment": 4.8,
    "debtToGdp": 58,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$109 346M",
    "gdpPerCapita": "$52 331",
    "fiveCoreMatrix": {
      "hci": 0.75,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 89,
      "carbonIntensity": 9.9
    },
    "flagshipProject": {
      "title": "Netherlands National Infrastructure Modernization",
      "progress": 78,
      "budget": "$45403M"
    },
    "news": [
      {
        "headline": "Netherlands Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Netherlands reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Netherlands",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Netherlands is currently classified under the World Bank High Income tier. With nominal GDP around $907.0B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (58% of GDP) and inflation containment (2.2% CPI)."
  },
  "PRT": {
    "name": "Portugal",
    "iso3": "PRT",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇵🇹",
    "coordinates": [
      39.7641,
      -8.0387
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 425777,
    "population": "10.3M",
    "gdpNominal": "$238.8B",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 3,
    "unemployment": 3.8,
    "debtToGdp": 74,
    "budgetBalance": -2.5,
    "currentAccount": 1.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$29 154M",
    "gdpPerCapita": "$23 252",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Portugal National Infrastructure Modernization",
      "progress": 80,
      "budget": "$11989M"
    },
    "news": [
      {
        "headline": "Portugal Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Portugal reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Portugal",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Portugal is currently classified under the World Bank High Income tier. With nominal GDP around $238.8B and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (74% of GDP) and inflation containment (3% CPI)."
  },
  "ESP": {
    "name": "Spain",
    "iso3": "ESP",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇪🇸",
    "coordinates": [
      40.1753,
      -4.4507
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 1898071,
    "population": "47.1M",
    "gdpNominal": "$1.39T",
    "gdpGrowthYoY": 2.7,
    "inflationCPI": 3.4,
    "unemployment": 4.3,
    "debtToGdp": 70,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$167 719M",
    "gdpPerCapita": "$29 600",
    "fiveCoreMatrix": {
      "hci": 0.81,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 96,
      "carbonIntensity": 9.9
    },
    "flagshipProject": {
      "title": "Spain National Infrastructure Modernization",
      "progress": 69,
      "budget": "$69725M"
    },
    "news": [
      {
        "headline": "Spain Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Spain reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Spain",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Spain is currently classified under the World Bank High Income tier. With nominal GDP around $1.39T and growth tracking at 2.7%, macroeconomic policy focuses on debt sustainability (70% of GDP) and inflation containment (3.4% CPI)."
  },
  "IRL": {
    "name": "Ireland",
    "iso3": "IRL",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇮🇪",
    "coordinates": [
      53.5315,
      -7.7233
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 212658,
    "population": "4.9M",
    "gdpNominal": "$388.7B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3,
    "unemployment": 4.3,
    "debtToGdp": 66,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$47 144M",
    "gdpPerCapita": "$78 661",
    "fiveCoreMatrix": {
      "hci": 0.85,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Ireland National Infrastructure Modernization",
      "progress": 73,
      "budget": "$19485M"
    },
    "news": [
      {
        "headline": "Ireland Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Ireland reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Ireland",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Ireland is currently classified under the World Bank High Income tier. With nominal GDP around $388.7B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (66% of GDP) and inflation containment (3% CPI)."
  },
  "NCL": {
    "name": "New Caledonia",
    "iso3": "NCL",
    "continent": "Oceania",
    "region": "Melanesia",
    "flag": "🇳🇨",
    "coordinates": [
      -21.1777,
      165.5117
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 26512,
    "population": "288K",
    "gdpNominal": "$10.8B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3.4,
    "unemployment": 4.8,
    "debtToGdp": 66,
    "budgetBalance": -4.1,
    "currentAccount": 0.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$1 792M",
    "gdpPerCapita": "$37 422",
    "fiveCoreMatrix": {
      "hci": 0.75,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 92,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "New Caledonia National Infrastructure Modernization",
      "progress": 78,
      "budget": "$589M"
    },
    "news": [
      {
        "headline": "New Caledonia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of New Caledonia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for New Caledonia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "New Caledonia is currently classified under the World Bank High Income tier. With nominal GDP around $10.8B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (66% of GDP) and inflation containment (3.4% CPI)."
  },
  "SLB": {
    "name": "Solomon Is.",
    "iso3": "SLB",
    "continent": "Oceania",
    "region": "Melanesia",
    "flag": "🇸🇧",
    "coordinates": [
      -8.7751,
      159.8303
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 41793,
    "population": "670K",
    "gdpNominal": "$1.6B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 10.3,
    "unemployment": 8.6,
    "debtToGdp": 83,
    "budgetBalance": -4.9,
    "currentAccount": 2.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$691M",
    "gdpPerCapita": "$2 372",
    "fiveCoreMatrix": {
      "hci": 0.51,
      "povertyRate": 13,
      "electricityAccess": 90,
      "broadband": 64,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Solomon Is. National Infrastructure Modernization",
      "progress": 83,
      "budget": "$129M"
    },
    "news": [
      {
        "headline": "Solomon Is. Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Solomon Is. reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Solomon Is.",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Solomon Is. is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $1.6B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (10.3% CPI)."
  },
  "NZL": {
    "name": "New Zealand",
    "iso3": "NZL",
    "continent": "Oceania",
    "region": "Australia and New Zealand",
    "flag": "🇳🇿",
    "coordinates": [
      -40.6254,
      173.4353
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 211680,
    "population": "4.9M",
    "gdpNominal": "$206.9B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3,
    "unemployment": 4.8,
    "debtToGdp": 66,
    "budgetBalance": -4.1,
    "currentAccount": 2.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$25 331M",
    "gdpPerCapita": "$42 084",
    "fiveCoreMatrix": {
      "hci": 0.75,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 91,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "New Zealand National Infrastructure Modernization",
      "progress": 78,
      "budget": "$10396M"
    },
    "news": [
      {
        "headline": "New Zealand Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of New Zealand reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for New Zealand",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "New Zealand is currently classified under the World Bank High Income tier. With nominal GDP around $206.9B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (66% of GDP) and inflation containment (3% CPI)."
  },
  "LKA": {
    "name": "Sri Lanka",
    "iso3": "LKA",
    "continent": "Asia",
    "region": "Southern Asia",
    "flag": "🇱🇰",
    "coordinates": [
      7.6314,
      80.8638
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 887120,
    "population": "21.8M",
    "gdpNominal": "$84.0B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 9.5,
    "unemployment": 7.2,
    "debtToGdp": 82,
    "budgetBalance": -2.5,
    "currentAccount": 1.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$10 581M",
    "gdpPerCapita": "$3 853",
    "fiveCoreMatrix": {
      "hci": 0.54,
      "povertyRate": 12,
      "electricityAccess": 89,
      "broadband": 63,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Sri Lanka National Infrastructure Modernization",
      "progress": 76,
      "budget": "$4250M"
    },
    "news": [
      {
        "headline": "Sri Lanka Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Sri Lanka reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Sri Lanka",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Sri Lanka is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $84.0B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (82% of GDP) and inflation containment (9.5% CPI)."
  },
  "TWN": {
    "name": "Taiwan",
    "iso3": "TWN",
    "continent": "Asia",
    "region": "Eastern Asia",
    "flag": "🌐",
    "coordinates": [
      23.8614,
      121.1051
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 957735,
    "population": "23.6M",
    "gdpNominal": "$1.13T",
    "gdpGrowthYoY": 2.7,
    "inflationCPI": 3.4,
    "unemployment": 3.8,
    "debtToGdp": 68,
    "budgetBalance": -2.5,
    "currentAccount": -0.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$135 740M",
    "gdpPerCapita": "$47 818",
    "fiveCoreMatrix": {
      "hci": 0.81,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 88,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Taiwan National Infrastructure Modernization",
      "progress": 84,
      "budget": "$56400M"
    },
    "news": [
      {
        "headline": "Taiwan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Taiwan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Taiwan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Taiwan is currently classified under the World Bank High Income tier. With nominal GDP around $1.13T and growth tracking at 2.7%, macroeconomic policy focuses on debt sustainability (68% of GDP) and inflation containment (3.4% CPI)."
  },
  "ITA": {
    "name": "Italy",
    "iso3": "ITA",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇮🇹",
    "coordinates": [
      42.0534,
      12.4136
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 2426896,
    "population": "60.3M",
    "gdpNominal": "$2.00T",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 2.2,
    "unemployment": 4.3,
    "debtToGdp": 55,
    "budgetBalance": -3.3,
    "currentAccount": -3.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$240 929M",
    "gdpPerCapita": "$33 228",
    "fiveCoreMatrix": {
      "hci": 0.85,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 85,
      "carbonIntensity": 13.5
    },
    "flagshipProject": {
      "title": "Italy National Infrastructure Modernization",
      "progress": 73,
      "budget": "$100229M"
    },
    "news": [
      {
        "headline": "Italy Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Italy reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Italy",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Italy is currently classified under the World Bank High Income tier. With nominal GDP around $2.00T and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (55% of GDP) and inflation containment (2.2% CPI)."
  },
  "DNK": {
    "name": "Denmark",
    "iso3": "DNK",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇩🇰",
    "coordinates": [
      56.1159,
      10.1949
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 247742,
    "population": "5.8M",
    "gdpNominal": "$350.1B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3,
    "unemployment": 3.8,
    "debtToGdp": 65,
    "budgetBalance": -2.5,
    "currentAccount": -2.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$42 512M",
    "gdpPerCapita": "$60 170",
    "fiveCoreMatrix": {
      "hci": 0.8,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 91,
      "carbonIntensity": 11.1
    },
    "flagshipProject": {
      "title": "Denmark National Infrastructure Modernization",
      "progress": 68,
      "budget": "$17555M"
    },
    "news": [
      {
        "headline": "Denmark Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Denmark reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Denmark",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Denmark is currently classified under the World Bank High Income tier. With nominal GDP around $350.1B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (65% of GDP) and inflation containment (3% CPI)."
  },
  "ISL": {
    "name": "Iceland",
    "iso3": "ISL",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇮🇸",
    "coordinates": [
      65.278,
      -19.266
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 29453,
    "population": "361K",
    "gdpNominal": "$24.2B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3.4,
    "unemployment": 4.3,
    "debtToGdp": 66,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$3 403M",
    "gdpPerCapita": "$66 945",
    "fiveCoreMatrix": {
      "hci": 0.85,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 96,
      "carbonIntensity": 12.3
    },
    "flagshipProject": {
      "title": "Iceland National Infrastructure Modernization",
      "progress": 73,
      "budget": "$1259M"
    },
    "news": [
      {
        "headline": "Iceland Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Iceland reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Iceland",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Iceland is currently classified under the World Bank High Income tier. With nominal GDP around $24.2B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (66% of GDP) and inflation containment (3.4% CPI)."
  },
  "AZE": {
    "name": "Azerbaijan",
    "iso3": "AZE",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇦🇿",
    "coordinates": [
      40.1473,
      47.0106
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 415933,
    "population": "10.0M",
    "gdpNominal": "$48.0B",
    "gdpGrowthYoY": 3.2,
    "inflationCPI": 3.5,
    "unemployment": 5,
    "debtToGdp": 74,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 6.75,
    "bondYield10Y": 7.95,
    "foreignReserves": "$6 266M",
    "gdpPerCapita": "$4 794",
    "fiveCoreMatrix": {
      "hci": 0.65,
      "povertyRate": 3.5,
      "electricityAccess": 97,
      "broadband": 68,
      "carbonIntensity": 7.2
    },
    "flagshipProject": {
      "title": "Azerbaijan National Infrastructure Modernization",
      "progress": 65,
      "budget": "$2452M"
    },
    "news": [
      {
        "headline": "Azerbaijan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Azerbaijan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Azerbaijan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Azerbaijan is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $48.0B and growth tracking at 3.2%, macroeconomic policy focuses on debt sustainability (74% of GDP) and inflation containment (3.5% CPI)."
  },
  "GEO": {
    "name": "Georgia",
    "iso3": "GEO",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇬🇪",
    "coordinates": [
      42.2585,
      43.3636
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 163815,
    "population": "3.7M",
    "gdpNominal": "$17.5B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 10.3,
    "unemployment": 7.2,
    "debtToGdp": 61,
    "budgetBalance": -4.9,
    "currentAccount": 2.5,
    "interestRate": 9.3,
    "bondYield10Y": 11.3,
    "foreignReserves": "$2 597M",
    "gdpPerCapita": "$4 698",
    "fiveCoreMatrix": {
      "hci": 0.49,
      "povertyRate": 21,
      "electricityAccess": 85,
      "broadband": 57,
      "carbonIntensity": 3.3
    },
    "flagshipProject": {
      "title": "Georgia National Infrastructure Modernization",
      "progress": 71,
      "budget": "$924M"
    },
    "news": [
      {
        "headline": "Georgia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Georgia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Georgia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Georgia is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $17.5B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (61% of GDP) and inflation containment (10.3% CPI)."
  },
  "PHL": {
    "name": "Philippines",
    "iso3": "PHL",
    "continent": "Asia",
    "region": "South-Eastern Asia",
    "flag": "🇵🇭",
    "coordinates": [
      11.491,
      122.802
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 4339665,
    "population": "108.1M",
    "gdpNominal": "$376.8B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 7.1,
    "unemployment": 6.5,
    "debtToGdp": 58,
    "budgetBalance": -2.5,
    "currentAccount": -1.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$45 715M",
    "gdpPerCapita": "$3 485",
    "fiveCoreMatrix": {
      "hci": 0.48,
      "povertyRate": 24,
      "electricityAccess": 82,
      "broadband": 60,
      "carbonIntensity": 1.8
    },
    "flagshipProject": {
      "title": "Philippines National Infrastructure Modernization",
      "progress": 80,
      "budget": "$18890M"
    },
    "news": [
      {
        "headline": "Philippines Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Philippines reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Philippines",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Philippines is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $376.8B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (58% of GDP) and inflation containment (7.1% CPI)."
  },
  "MYS": {
    "name": "Malaysia",
    "iso3": "MYS",
    "continent": "Asia",
    "region": "South-Eastern Asia",
    "flag": "🇲🇾",
    "coordinates": [
      3.9504,
      109.6499
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 1292991,
    "population": "31.9M",
    "gdpNominal": "$364.7B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 5.9,
    "unemployment": 6.2,
    "debtToGdp": 48,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 6.75,
    "bondYield10Y": 7.95,
    "foreignReserves": "$44 262M",
    "gdpPerCapita": "$11 414",
    "fiveCoreMatrix": {
      "hci": 0.67,
      "povertyRate": 7.5,
      "electricityAccess": 99,
      "broadband": 82,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "Malaysia National Infrastructure Modernization",
      "progress": 77,
      "budget": "$18284M"
    },
    "news": [
      {
        "headline": "Malaysia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Malaysia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Malaysia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Malaysia is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $364.7B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (48% of GDP) and inflation containment (5.9% CPI)."
  },
  "BRN": {
    "name": "Brunei",
    "iso3": "BRN",
    "continent": "Asia",
    "region": "South-Eastern Asia",
    "flag": "🇧🇳",
    "coordinates": [
      4.7436,
      114.9985
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 32331,
    "population": "433K",
    "gdpNominal": "$13.5B",
    "gdpGrowthYoY": 1.8,
    "inflationCPI": 3,
    "unemployment": 4.8,
    "debtToGdp": 68,
    "budgetBalance": -4.1,
    "currentAccount": 1.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$2 116M",
    "gdpPerCapita": "$31 086",
    "fiveCoreMatrix": {
      "hci": 0.78,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 95,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Brunei National Infrastructure Modernization",
      "progress": 66,
      "budget": "$723M"
    },
    "news": [
      {
        "headline": "Brunei Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Brunei reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Brunei",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Brunei is currently classified under the World Bank High Income tier. With nominal GDP around $13.5B and growth tracking at 1.8%, macroeconomic policy focuses on debt sustainability (68% of GDP) and inflation containment (3% CPI)."
  },
  "SVN": {
    "name": "Slovenia",
    "iso3": "SVN",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇸🇮",
    "coordinates": [
      46.1071,
      14.9954
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 98518,
    "population": "2.1M",
    "gdpNominal": "$54.2B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3,
    "unemployment": 5.3,
    "debtToGdp": 68,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$7 001M",
    "gdpPerCapita": "$25 946",
    "fiveCoreMatrix": {
      "hci": 0.8,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 87,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Slovenia National Infrastructure Modernization",
      "progress": 83,
      "budget": "$2759M"
    },
    "news": [
      {
        "headline": "Slovenia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Slovenia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Slovenia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Slovenia is currently classified under the World Bank High Income tier. With nominal GDP around $54.2B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (68% of GDP) and inflation containment (3% CPI)."
  },
  "FIN": {
    "name": "Finland",
    "iso3": "FIN",
    "continent": "Europe",
    "region": "Northern Europe",
    "flag": "🇫🇮",
    "coordinates": [
      65.2284,
      25.8868
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 235813,
    "population": "5.5M",
    "gdpNominal": "$269.3B",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 2.6,
    "unemployment": 4.8,
    "debtToGdp": 68,
    "budgetBalance": -4.1,
    "currentAccount": -0.5,
    "interestRate": 4.5,
    "bondYield10Y": 5.1,
    "foreignReserves": "$32 816M",
    "gdpPerCapita": "$48 783",
    "fiveCoreMatrix": {
      "hci": 0.82,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 86,
      "carbonIntensity": 7.5
    },
    "flagshipProject": {
      "title": "Finland National Infrastructure Modernization",
      "progress": 70,
      "budget": "$13515M"
    },
    "news": [
      {
        "headline": "Finland Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Finland reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Finland",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Finland is currently classified under the World Bank High Income tier. With nominal GDP around $269.3B and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (68% of GDP) and inflation containment (2.6% CPI)."
  },
  "SVK": {
    "name": "Slovakia",
    "iso3": "SVK",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇸🇰",
    "coordinates": [
      48.7638,
      19.3518
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 233163,
    "population": "5.5M",
    "gdpNominal": "$105.1B",
    "gdpGrowthYoY": 2.4,
    "inflationCPI": 3,
    "unemployment": 5.3,
    "debtToGdp": 65,
    "budgetBalance": -4.9,
    "currentAccount": -1.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$13 109M",
    "gdpPerCapita": "$19 266",
    "fiveCoreMatrix": {
      "hci": 0.8,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 87,
      "carbonIntensity": 11.1
    },
    "flagshipProject": {
      "title": "Slovakia National Infrastructure Modernization",
      "progress": 83,
      "budget": "$5304M"
    },
    "news": [
      {
        "headline": "Slovakia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Slovakia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Slovakia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Slovakia is currently classified under the World Bank High Income tier. With nominal GDP around $105.1B and growth tracking at 2.4%, macroeconomic policy focuses on debt sustainability (65% of GDP) and inflation containment (3% CPI)."
  },
  "CZE": {
    "name": "Czechia",
    "iso3": "CZE",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇨🇿",
    "coordinates": [
      49.7787,
      15.848
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 441788,
    "population": "10.7M",
    "gdpNominal": "$250.7B",
    "gdpGrowthYoY": 2.1,
    "inflationCPI": 3,
    "unemployment": 5.3,
    "debtToGdp": 59,
    "budgetBalance": -4.9,
    "currentAccount": 2.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$30 582M",
    "gdpPerCapita": "$23 495",
    "fiveCoreMatrix": {
      "hci": 0.79,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 91,
      "carbonIntensity": 11.1
    },
    "flagshipProject": {
      "title": "Czechia National Infrastructure Modernization",
      "progress": 67,
      "budget": "$12584M"
    },
    "news": [
      {
        "headline": "Czechia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Czechia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Czechia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Czechia is currently classified under the World Bank High Income tier. With nominal GDP around $250.7B and growth tracking at 2.1%, macroeconomic policy focuses on debt sustainability (59% of GDP) and inflation containment (3% CPI)."
  },
  "ERI": {
    "name": "Eritrea",
    "iso3": "ERI",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇪🇷",
    "coordinates": [
      14.712,
      39.5883
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 258248,
    "population": "6.1M",
    "gdpNominal": "$2.1B",
    "gdpGrowthYoY": 5.9,
    "inflationCPI": 12.5,
    "unemployment": 11,
    "debtToGdp": 93,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 18,
    "bondYield10Y": 21.5,
    "foreignReserves": "$748M",
    "gdpPerCapita": "$340",
    "fiveCoreMatrix": {
      "hci": 0.45,
      "povertyRate": 39,
      "electricityAccess": 55,
      "broadband": 26,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Eritrea National Infrastructure Modernization",
      "progress": 69,
      "budget": "$153M"
    },
    "news": [
      {
        "headline": "Eritrea Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Eritrea reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Eritrea",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Eritrea is currently classified under the World Bank Low Income tier. With nominal GDP around $2.1B and growth tracking at 5.9%, macroeconomic policy focuses on debt sustainability (93% of GDP) and inflation containment (12.5% CPI)."
  },
  "PRY": {
    "name": "Paraguay",
    "iso3": "PRY",
    "continent": "South America",
    "region": "South America",
    "flag": "🇵🇾",
    "coordinates": [
      -23.302,
      -57.5699
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 296785,
    "population": "7.0M",
    "gdpNominal": "$38.1B",
    "gdpGrowthYoY": 4.2,
    "inflationCPI": 9.5,
    "unemployment": 6.5,
    "debtToGdp": 71,
    "budgetBalance": -2.5,
    "currentAccount": 1.5,
    "interestRate": 8.5,
    "bondYield10Y": 10.5,
    "foreignReserves": "$5 077M",
    "gdpPerCapita": "$5 415",
    "fiveCoreMatrix": {
      "hci": 0.48,
      "povertyRate": 19,
      "electricityAccess": 95,
      "broadband": 50,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Paraguay National Infrastructure Modernization",
      "progress": 80,
      "budget": "$1957M"
    },
    "news": [
      {
        "headline": "Paraguay Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Paraguay reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Paraguay",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Paraguay is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $38.1B and growth tracking at 4.2%, macroeconomic policy focuses on debt sustainability (71% of GDP) and inflation containment (9.5% CPI)."
  },
  "YEM": {
    "name": "Yemen",
    "iso3": "YEM",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇾🇪",
    "coordinates": [
      15.5119,
      46.4715
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1181477,
    "population": "29.2M",
    "gdpNominal": "$22.6B",
    "gdpGrowthYoY": 6.2,
    "inflationCPI": 10.3,
    "unemployment": 9.3,
    "debtToGdp": 59,
    "budgetBalance": -3.3,
    "currentAccount": 2.5,
    "interestRate": 11.7,
    "bondYield10Y": 13.7,
    "foreignReserves": "$3 210M",
    "gdpPerCapita": "$774",
    "fiveCoreMatrix": {
      "hci": 0.57,
      "povertyRate": 21,
      "electricityAccess": 83,
      "broadband": 57,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Yemen National Infrastructure Modernization",
      "progress": 89,
      "budget": "$1179M"
    },
    "news": [
      {
        "headline": "Yemen Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Yemen reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Yemen",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Yemen is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $22.6B and growth tracking at 6.2%, macroeconomic policy focuses on debt sustainability (59% of GDP) and inflation containment (10.3% CPI)."
  },
  "ATA": {
    "name": "Antarctica",
    "iso3": "ATA",
    "continent": "Antarctica",
    "region": "Antarctica",
    "flag": "🇦🇶",
    "coordinates": [
      -73.4076,
      -16.3376
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 15180,
    "population": "4K",
    "gdpNominal": "$898M",
    "gdpGrowthYoY": 1.5,
    "inflationCPI": 2.2,
    "unemployment": 4.3,
    "debtToGdp": 55,
    "budgetBalance": -3.3,
    "currentAccount": -3.5,
    "interestRate": 4,
    "bondYield10Y": 4.6,
    "foreignReserves": "$608M",
    "gdpPerCapita": "$200 000",
    "fiveCoreMatrix": {
      "hci": 0.77,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 85,
      "carbonIntensity": 13.5
    },
    "flagshipProject": {
      "title": "Antarctica National Infrastructure Modernization",
      "progress": 65,
      "budget": "$95M"
    },
    "news": [
      {
        "headline": "Antarctica Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Antarctica reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Antarctica",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Antarctica is currently classified under the World Bank High Income tier. With nominal GDP around $898M and growth tracking at 1.5%, macroeconomic policy focuses on debt sustainability (55% of GDP) and inflation containment (2.2% CPI)."
  },
  "CYN": {
    "name": "N. Cyprus",
    "iso3": "CYN",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🌐",
    "coordinates": [
      35.1773,
      33.4265
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 28040,
    "population": "326K",
    "gdpNominal": "$3.6B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 5.9,
    "unemployment": 6.2,
    "debtToGdp": 83,
    "budgetBalance": -4.9,
    "currentAccount": 1.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$932M",
    "gdpPerCapita": "$11 043",
    "fiveCoreMatrix": {
      "hci": 0.67,
      "povertyRate": 7.5,
      "electricityAccess": 94,
      "broadband": 82,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "N. Cyprus National Infrastructure Modernization",
      "progress": 67,
      "budget": "$230M"
    },
    "news": [
      {
        "headline": "N. Cyprus Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of N. Cyprus reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for N. Cyprus",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "N. Cyprus is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $3.6B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (83% of GDP) and inflation containment (5.9% CPI)."
  },
  "CYP": {
    "name": "Cyprus",
    "iso3": "CYP",
    "continent": "Asia",
    "region": "Western Asia",
    "flag": "🇨🇾",
    "coordinates": [
      35.0246,
      33.2442
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 62943,
    "population": "1.2M",
    "gdpNominal": "$24.9B",
    "gdpGrowthYoY": 2.1,
    "inflationCPI": 2.6,
    "unemployment": 5.3,
    "debtToGdp": 70,
    "budgetBalance": -4.9,
    "currentAccount": 1.5,
    "interestRate": 5,
    "bondYield10Y": 5.6,
    "foreignReserves": "$3 494M",
    "gdpPerCapita": "$20 815",
    "fiveCoreMatrix": {
      "hci": 0.79,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 90,
      "carbonIntensity": 9.9
    },
    "flagshipProject": {
      "title": "Cyprus National Infrastructure Modernization",
      "progress": 67,
      "budget": "$1297M"
    },
    "news": [
      {
        "headline": "Cyprus Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Cyprus reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Cyprus",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Cyprus is currently classified under the World Bank High Income tier. With nominal GDP around $24.9B and growth tracking at 2.1%, macroeconomic policy focuses on debt sustainability (70% of GDP) and inflation containment (2.6% CPI)."
  },
  "MAR": {
    "name": "Morocco",
    "iso3": "MAR",
    "continent": "Africa",
    "region": "Northern Africa",
    "flag": "🇲🇦",
    "coordinates": [
      28.7698,
      -9.4259
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 1473871,
    "population": "36.5M",
    "gdpNominal": "$119.7B",
    "gdpGrowthYoY": 5.2,
    "inflationCPI": 7.1,
    "unemployment": 7.9,
    "debtToGdp": 64,
    "budgetBalance": -3.3,
    "currentAccount": -1.5,
    "interestRate": 10.1,
    "bondYield10Y": 12.1,
    "foreignReserves": "$14 864M",
    "gdpPerCapita": "$3 282",
    "fiveCoreMatrix": {
      "hci": 0.55,
      "povertyRate": 17,
      "electricityAccess": 88,
      "broadband": 53,
      "carbonIntensity": 2.8
    },
    "flagshipProject": {
      "title": "Morocco National Infrastructure Modernization",
      "progress": 77,
      "budget": "$6035M"
    },
    "news": [
      {
        "headline": "Morocco Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Morocco reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Morocco",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Morocco is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $119.7B and growth tracking at 5.2%, macroeconomic policy focuses on debt sustainability (64% of GDP) and inflation containment (7.1% CPI)."
  },
  "LBY": {
    "name": "Libya",
    "iso3": "LBY",
    "continent": "Africa",
    "region": "Northern Africa",
    "flag": "🇱🇾",
    "coordinates": [
      28.4768,
      16.6382
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 286098,
    "population": "6.8M",
    "gdpNominal": "$52.1B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 4.1,
    "unemployment": 5.6,
    "debtToGdp": 54,
    "budgetBalance": -2.5,
    "currentAccount": -0.5,
    "interestRate": 6,
    "bondYield10Y": 7.2,
    "foreignReserves": "$6 751M",
    "gdpPerCapita": "$7 686",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 4.5,
      "electricityAccess": 99,
      "broadband": 74,
      "carbonIntensity": 7.2
    },
    "flagshipProject": {
      "title": "Libya National Infrastructure Modernization",
      "progress": 76,
      "budget": "$2655M"
    },
    "news": [
      {
        "headline": "Libya Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Libya reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Libya",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Libya is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $52.1B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (54% of GDP) and inflation containment (4.1% CPI)."
  },
  "DJI": {
    "name": "Djibouti",
    "iso3": "DJI",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇩🇯",
    "coordinates": [
      11.8004,
      42.5221
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 53942,
    "population": "974K",
    "gdpNominal": "$3.3B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 8.7,
    "unemployment": 8.6,
    "debtToGdp": 55,
    "budgetBalance": -2.5,
    "currentAccount": 0.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$899M",
    "gdpPerCapita": "$3 414",
    "fiveCoreMatrix": {
      "hci": 0.56,
      "povertyRate": 26,
      "electricityAccess": 79,
      "broadband": 62,
      "carbonIntensity": 2.3
    },
    "flagshipProject": {
      "title": "Djibouti National Infrastructure Modernization",
      "progress": 68,
      "budget": "$216M"
    },
    "news": [
      {
        "headline": "Djibouti Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Djibouti reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Djibouti",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Djibouti is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $3.3B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (55% of GDP) and inflation containment (8.7% CPI)."
  },
  "UGA": {
    "name": "Uganda",
    "iso3": "UGA",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇺🇬",
    "coordinates": [
      1.339,
      31.9512
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 1785784,
    "population": "44.3M",
    "gdpNominal": "$35.2B",
    "gdpGrowthYoY": 3.5,
    "inflationCPI": 20,
    "unemployment": 9,
    "debtToGdp": 85,
    "budgetBalance": -3.3,
    "currentAccount": -2.5,
    "interestRate": 12,
    "bondYield10Y": 15.5,
    "foreignReserves": "$4 720M",
    "gdpPerCapita": "$794",
    "fiveCoreMatrix": {
      "hci": 0.41,
      "povertyRate": 53,
      "electricityAccess": 47,
      "broadband": 35,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Uganda National Infrastructure Modernization",
      "progress": 85,
      "budget": "$1808M"
    },
    "news": [
      {
        "headline": "Uganda Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Uganda reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Uganda",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Uganda is currently classified under the World Bank Low Income tier. With nominal GDP around $35.2B and growth tracking at 3.5%, macroeconomic policy focuses on debt sustainability (85% of GDP) and inflation containment (20% CPI)."
  },
  "RWA": {
    "name": "Rwanda",
    "iso3": "RWA",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇷🇼",
    "coordinates": [
      -2.0072,
      29.9295
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 520078,
    "population": "12.6M",
    "gdpNominal": "$10.4B",
    "gdpGrowthYoY": 4.7,
    "inflationCPI": 20,
    "unemployment": 12,
    "debtToGdp": 85,
    "budgetBalance": -4.1,
    "currentAccount": -0.5,
    "interestRate": 15,
    "bondYield10Y": 18.5,
    "foreignReserves": "$1 742M",
    "gdpPerCapita": "$820",
    "fiveCoreMatrix": {
      "hci": 0.38,
      "povertyRate": 44,
      "electricityAccess": 47,
      "broadband": 31,
      "carbonIntensity": 0.6
    },
    "flagshipProject": {
      "title": "Rwanda National Infrastructure Modernization",
      "progress": 82,
      "budget": "$568M"
    },
    "news": [
      {
        "headline": "Rwanda Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Rwanda reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Rwanda",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Rwanda is currently classified under the World Bank Low Income tier. With nominal GDP around $10.4B and growth tracking at 4.7%, macroeconomic policy focuses on debt sustainability (85% of GDP) and inflation containment (20% CPI)."
  },
  "BIH": {
    "name": "Bosnia and Herz.",
    "iso3": "BIH",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇧🇦",
    "coordinates": [
      44.185,
      17.9214
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 147040,
    "population": "3.3M",
    "gdpNominal": "$20.2B",
    "gdpGrowthYoY": 3.6,
    "inflationCPI": 5.3,
    "unemployment": 5.6,
    "debtToGdp": 77,
    "budgetBalance": -4.1,
    "currentAccount": -0.5,
    "interestRate": 7.5,
    "bondYield10Y": 8.7,
    "foreignReserves": "$2 920M",
    "gdpPerCapita": "$6 108",
    "fiveCoreMatrix": {
      "hci": 0.66,
      "povertyRate": 6.5,
      "electricityAccess": 94,
      "broadband": 81,
      "carbonIntensity": 5.6
    },
    "flagshipProject": {
      "title": "Bosnia and Herz. National Infrastructure Modernization",
      "progress": 66,
      "budget": "$1058M"
    },
    "news": [
      {
        "headline": "Bosnia and Herz. Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Bosnia and Herz. reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Bosnia and Herz.",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Bosnia and Herz. is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $20.2B and growth tracking at 3.6%, macroeconomic policy focuses on debt sustainability (77% of GDP) and inflation containment (5.3% CPI)."
  },
  "MKD": {
    "name": "North Macedonia",
    "iso3": "MKD",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇲🇰",
    "coordinates": [
      41.6835,
      21.6266
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 98338,
    "population": "2.1M",
    "gdpNominal": "$12.5B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 3.5,
    "unemployment": 6.2,
    "debtToGdp": 73,
    "budgetBalance": -3.3,
    "currentAccount": 1.5,
    "interestRate": 6.75,
    "bondYield10Y": 7.95,
    "foreignReserves": "$2 006M",
    "gdpPerCapita": "$6 022",
    "fiveCoreMatrix": {
      "hci": 0.67,
      "povertyRate": 3.5,
      "electricityAccess": 96,
      "broadband": 68,
      "carbonIntensity": 6.4
    },
    "flagshipProject": {
      "title": "North Macedonia National Infrastructure Modernization",
      "progress": 77,
      "budget": "$677M"
    },
    "news": [
      {
        "headline": "North Macedonia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of North Macedonia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for North Macedonia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "North Macedonia is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $12.5B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (73% of GDP) and inflation containment (3.5% CPI)."
  },
  "SRB": {
    "name": "Serbia",
    "iso3": "SRB",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇷🇸",
    "coordinates": [
      43.8947,
      20.8554
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 292799,
    "population": "6.9M",
    "gdpNominal": "$51.5B",
    "gdpGrowthYoY": 4.4,
    "inflationCPI": 4.7,
    "unemployment": 6.8,
    "debtToGdp": 71,
    "budgetBalance": -4.9,
    "currentAccount": 1.5,
    "interestRate": 8.25,
    "bondYield10Y": 9.45,
    "foreignReserves": "$6 677M",
    "gdpPerCapita": "$7 412",
    "fiveCoreMatrix": {
      "hci": 0.63,
      "povertyRate": 5.5,
      "electricityAccess": 94,
      "broadband": 75,
      "carbonIntensity": 4.8
    },
    "flagshipProject": {
      "title": "Serbia National Infrastructure Modernization",
      "progress": 83,
      "budget": "$2624M"
    },
    "news": [
      {
        "headline": "Serbia Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Serbia reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Serbia",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Serbia is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $51.5B and growth tracking at 4.4%, macroeconomic policy focuses on debt sustainability (71% of GDP) and inflation containment (4.7% CPI)."
  },
  "MNE": {
    "name": "Montenegro",
    "iso3": "MNE",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇲🇪",
    "coordinates": [
      42.7414,
      19.4466
    ],
    "incomeGroup": "Upper-Middle Income",
    "rating": "BBB+",
    "ratingTier": "lower-medium",
    "landArea": 39885,
    "population": "622K",
    "gdpNominal": "$5.5B",
    "gdpGrowthYoY": 4,
    "inflationCPI": 5.3,
    "unemployment": 6.2,
    "debtToGdp": 74,
    "budgetBalance": -3.3,
    "currentAccount": -2.5,
    "interestRate": 6.75,
    "bondYield10Y": 7.95,
    "foreignReserves": "$1 165M",
    "gdpPerCapita": "$8 908",
    "fiveCoreMatrix": {
      "hci": 0.67,
      "povertyRate": 6.5,
      "electricityAccess": 97,
      "broadband": 71,
      "carbonIntensity": 7.2
    },
    "flagshipProject": {
      "title": "Montenegro National Infrastructure Modernization",
      "progress": 77,
      "budget": "$327M"
    },
    "news": [
      {
        "headline": "Montenegro Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Montenegro reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Montenegro",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Montenegro is currently classified under the World Bank Upper-Middle Income tier. With nominal GDP around $5.5B and growth tracking at 4%, macroeconomic policy focuses on debt sustainability (74% of GDP) and inflation containment (5.3% CPI)."
  },
  "XKX": {
    "name": "Kosovo",
    "iso3": "XKX",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇽🇰",
    "coordinates": [
      42.546,
      20.957
    ],
    "incomeGroup": "Lower-Middle Income",
    "rating": "BB-",
    "ratingTier": "speculative",
    "landArea": 86770,
    "population": "1.8M",
    "gdpNominal": "$7.9B",
    "gdpGrowthYoY": 5.7,
    "inflationCPI": 9.5,
    "unemployment": 8.6,
    "debtToGdp": 70,
    "budgetBalance": -2.5,
    "currentAccount": 1.5,
    "interestRate": 10.9,
    "bondYield10Y": 12.9,
    "foreignReserves": "$1 451M",
    "gdpPerCapita": "$4 417",
    "fiveCoreMatrix": {
      "hci": 0.56,
      "povertyRate": 12,
      "electricityAccess": 94,
      "broadband": 63,
      "carbonIntensity": 1.8
    },
    "flagshipProject": {
      "title": "Kosovo National Infrastructure Modernization",
      "progress": 88,
      "budget": "$446M"
    },
    "news": [
      {
        "headline": "Kosovo Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Kosovo reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Kosovo",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Kosovo is currently classified under the World Bank Lower-Middle Income tier. With nominal GDP around $7.9B and growth tracking at 5.7%, macroeconomic policy focuses on debt sustainability (70% of GDP) and inflation containment (9.5% CPI)."
  },
  "TTO": {
    "name": "Trinidad and Tobago",
    "iso3": "TTO",
    "continent": "North America",
    "region": "Caribbean",
    "flag": "🇹🇹",
    "coordinates": [
      10.4787,
      -61.4594
    ],
    "incomeGroup": "High Income",
    "rating": "AA",
    "ratingTier": "high-grade",
    "landArea": 70799,
    "population": "1.4M",
    "gdpNominal": "$24.3B",
    "gdpGrowthYoY": 2.7,
    "inflationCPI": 2.2,
    "unemployment": 3.8,
    "debtToGdp": 69,
    "budgetBalance": -2.5,
    "currentAccount": -3.5,
    "interestRate": 3.5,
    "bondYield10Y": 4.1,
    "foreignReserves": "$3 412M",
    "gdpPerCapita": "$17 397",
    "fiveCoreMatrix": {
      "hci": 0.81,
      "povertyRate": 0.8,
      "electricityAccess": 100,
      "broadband": 85,
      "carbonIntensity": 8.7
    },
    "flagshipProject": {
      "title": "Trinidad and Tobago National Infrastructure Modernization",
      "progress": 84,
      "budget": "$1263M"
    },
    "news": [
      {
        "headline": "Trinidad and Tobago Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of Trinidad and Tobago reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for Trinidad and Tobago",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "Trinidad and Tobago is currently classified under the World Bank High Income tier. With nominal GDP around $24.3B and growth tracking at 2.7%, macroeconomic policy focuses on debt sustainability (69% of GDP) and inflation containment (2.2% CPI)."
  },
  "SSD": {
    "name": "S. Sudan",
    "iso3": "SSD",
    "continent": "Africa",
    "region": "Eastern Africa",
    "flag": "🇸🇸",
    "coordinates": [
      8.0098,
      30.0926
    ],
    "incomeGroup": "Low Income",
    "rating": "B-",
    "ratingTier": "default-risk",
    "landArea": 457485,
    "population": "11.1M",
    "gdpNominal": "$12.0B",
    "gdpGrowthYoY": 5.3,
    "inflationCPI": 14,
    "unemployment": 13,
    "debtToGdp": 88,
    "budgetBalance": -4.9,
    "currentAccount": 2.5,
    "interestRate": 16.5,
    "bondYield10Y": 20,
    "foreignReserves": "$1 940M",
    "gdpPerCapita": "$1 085",
    "fiveCoreMatrix": {
      "hci": 0.39,
      "povertyRate": 40,
      "electricityAccess": 50,
      "broadband": 27,
      "carbonIntensity": 0.4
    },
    "flagshipProject": {
      "title": "S. Sudan National Infrastructure Modernization",
      "progress": 83,
      "budget": "$650M"
    },
    "news": [
      {
        "headline": "S. Sudan Ministry of Finance issues fiscal update aligning with regional macro targets",
        "source": "Macro Wire",
        "time": "4h ago"
      },
      {
        "headline": "Central Bank of S. Sudan reviews liquidity and policy rate framework",
        "source": "Central Banking",
        "time": "1d ago"
      },
      {
        "headline": "World Bank and regional partners review development financing envelope for S. Sudan",
        "source": "Global Monitor",
        "time": "2d ago"
      }
    ],
    "aiSynthesis": "S. Sudan is currently classified under the World Bank Low Income tier. With nominal GDP around $12.0B and growth tracking at 5.3%, macroeconomic policy focuses on debt sustainability (88% of GDP) and inflation containment (14% CPI)."
  }
};
