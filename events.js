// Economic Events Dataset with Geospatial Impact Halos & Propagations
window.ECONOMIC_EVENTS = [
  {
    "id": "EVT-KOR-TRADE",
    "title": "Trade Balance (Jul)",
    "countryCode": "KOR",
    "countryName": "South Korea",
    "coordinates": [35.9078, 127.7669],
    "timestamp": "Sat, Aug 15 2026, 01:00",
    "category": "trade",
    "categoryLabel": "Trade & Export Shock",
    "markerIcon": "swap_horiz",
    "severity": 4, // 1 - 5
    "actual": "$30.39B",
    "forecast": "$30.32B",
    "previous": "$36.09B",
    "unit": "USD Surplus",
    "haloRadiusKm": 1400,
    "haloColor": "#34a853", // Green positive expansion
    "affectedIndicators": [
      { "name": "Semiconductor Exports", "direction": "up", "change": "+14.2%", "impact": "Positive" },
      { "name": "KRW / USD FX Rate", "direction": "up", "change": "+0.6%", "impact": "Positive" },
      { "name": "Regional Tech Supply Chain", "direction": "up", "change": "Expanding", "impact": "Moderate" },
      { "name": "Manufacturing PMI", "direction": "up", "change": "52.8", "impact": "Positive" }
    ],
    "propagationTargets": [
      { "iso3": "CHN", "name": "China", "coords": [35.8617, 104.1954], "intensity": "High", "relation": "Intermediate Tech Inflows" },
      { "iso3": "USA", "name": "United States", "coords": [37.0902, -95.7129], "intensity": "High", "relation": "AI Chip & Server Delivery" },
      { "iso3": "JPN", "name": "Japan", "coords": [36.2048, 138.2529], "intensity": "Medium", "relation": "Silicon Wafer Equipment" },
      { "iso3": "VNM", "name": "Vietnam", "coords": [14.0583, 108.2772], "intensity": "Medium", "relation": "Final Assembly Corridors" }
    ],
    "aiAnalysis": "South Korea's July trade surplus of $30.39B exceeded expectations, fueled by unprecedented global HBM3e and DRAM memory shipments for generative AI infrastructure. This provides a strong external buffer for the Korean Won and confirms an accelerating upcycle in the regional technology supply chain across East Asia."
  },
  {
    "id": "EVT-USA-FED",
    "title": "FOMC Interest Rate Decision",
    "countryCode": "USA",
    "countryName": "United States",
    "coordinates": [38.8951, -77.0364], // Washington DC
    "timestamp": "Wed, Aug 12 2026, 18:00",
    "category": "central-bank",
    "categoryLabel": "Monetary Policy Decision",
    "markerIcon": "account_balance",
    "severity": 5,
    "actual": "5.25%",
    "forecast": "5.25%",
    "previous": "5.50%",
    "unit": "Benchmark Rate",
    "haloRadiusKm": 2500,
    "haloColor": "#1a73e8", // Blue policy action
    "affectedIndicators": [
      { "name": "US 10Y Treasury Yield", "direction": "down", "change": "-12 bps", "impact": "Easing" },
      { "name": "Dollar Index (DXY)", "direction": "down", "change": "-0.7%", "impact": "Weaker USD" },
      { "name": "Emerging Market FX Basket", "direction": "up", "change": "+1.4%", "impact": "Relief" },
      { "name": "Global Sovereign Debt Costs", "direction": "down", "change": "-0.2%", "impact": "Positive" }
    ],
    "propagationTargets": [
      { "iso3": "DEU", "name": "Germany", "coords": [51.1657, 10.4515], "intensity": "High", "relation": "Transatlantic Yield Spread" },
      { "iso3": "BRA", "name": "Brazil", "coords": [-14.2350, -51.9253], "intensity": "High", "relation": "Capital Inflow & FX Easing" },
      { "iso3": "MEX", "name": "Mexico", "coords": [23.6345, -102.5528], "intensity": "High", "relation": "Banxico Rate Alignment" },
      { "iso3": "NGA", "name": "Nigeria", "coords": [9.0820, 8.6753], "intensity": "Medium", "relation": "Eurobond Yield Compression" }
    ],
    "aiAnalysis": "The Federal Reserve's rate easing cycle reduces global financing stress. A softer US Dollar eases debt servicing pressure for emerging markets holding dollar-denominated sovereign obligations, while narrowing transatlantic interest rate differentials."
  },
  {
    "id": "EVT-DEU-CPI",
    "title": "German Harmonized CPI (YoY)",
    "countryCode": "DEU",
    "countryName": "Germany",
    "coordinates": [50.1109, 8.6821], // Frankfurt
    "timestamp": "Thu, Aug 13 2026, 12:00",
    "category": "inflation",
    "categoryLabel": "Inflation & Price Pressure",
    "markerIcon": "local_fire_department",
    "severity": 3,
    "actual": "2.4%",
    "forecast": "2.5%",
    "previous": "2.6%",
    "unit": "Annual %",
    "haloRadiusKm": 1100,
    "haloColor": "#fbbc04", // Yellow inflation notice
    "affectedIndicators": [
      { "name": "Eurozone Core CPI Expectation", "direction": "down", "change": "-0.2%", "impact": "Positive" },
      { "name": "German Bund 10Y Yield", "direction": "down", "change": "-6 bps", "impact": "Easing" },
      { "name": "Real Wage Growth", "direction": "up", "change": "+1.1%", "impact": "Positive" }
    ],
    "propagationTargets": [
      { "iso3": "FRA", "name": "France", "coords": [46.2276, 2.2137], "intensity": "High", "relation": "ECB Policy Consensus" },
      { "iso3": "GBR", "name": "United Kingdom", "coords": [55.3781, -3.4360], "intensity": "Medium", "relation": "European Energy Benchmarks" }
    ],
    "aiAnalysis": "German inflation decelerating to 2.4% confirms sustained disinflation across Europe's industrial core. This clears the runway for the European Central Bank to continue rate normalization without triggering second-round wage spiral fears."
  },
  {
    "id": "EVT-SAU-OPEC",
    "title": "OPEC+ Crude Production Target",
    "countryCode": "SAU",
    "countryName": "Saudi Arabia",
    "coordinates": [24.7136, 46.6753],
    "timestamp": "Mon, Aug 10 2026, 09:00",
    "category": "commodity",
    "categoryLabel": "Commodity & Energy Supply",
    "markerIcon": "oil_barrel",
    "severity": 4,
    "actual": "9.0M bpd",
    "forecast": "9.0M bpd",
    "previous": "8.9M bpd",
    "unit": "Barrels / Day",
    "haloRadiusKm": 2200,
    "haloColor": "#e37400", // Orange energy
    "affectedIndicators": [
      { "name": "Brent Crude Benchmark", "direction": "up", "change": "$82.40/bbl", "impact": "Supply Tightness" },
      { "name": "Global Shipping Freight Rates", "direction": "up", "change": "+3.1%", "impact": "Cost Inflation" },
      { "name": "Net Energy Importers CPI", "direction": "up", "change": "+0.3%", "impact": "Vulnerability" }
    ],
    "propagationTargets": [
      { "iso3": "IND", "name": "India", "coords": [20.5937, 78.9629], "intensity": "High", "relation": "Import Bill Expansion" },
      { "iso3": "CHN", "name": "China", "coords": [35.8617, 104.1954], "intensity": "High", "relation": "Strategic Reserves Rebalancing" },
      { "iso3": "JPN", "name": "Japan", "coords": [36.2048, 138.2529], "intensity": "High", "relation": "Thermal Energy Import Cost" }
    ],
    "aiAnalysis": "Disciplined supply management by Saudi Arabia and OPEC+ maintains crude prices in the $80-85 range, securing GCC fiscal breakeven levels while transferring terms-of-trade pressure onto energy-intensive importers in Asia."
  },
  {
    "id": "EVT-ARG-DEBT",
    "title": "Sovereign Bond Restructuring & Fiscal Surplus",
    "countryCode": "ARG",
    "countryName": "Argentina",
    "coordinates": [-34.6037, -58.3816],
    "timestamp": "Tue, Aug 11 2026, 15:30",
    "category": "debt",
    "categoryLabel": "Sovereign Debt & Fiscal Reform",
    "markerIcon": "warning",
    "severity": 4,
    "actual": "+$840M Surplus",
    "forecast": "+$210M Surplus",
    "previous": "+$450M Surplus",
    "unit": "Fiscal Balance",
    "haloRadiusKm": 1600,
    "haloColor": "#ea4335", // Red sovereign shock/turnaround
    "affectedIndicators": [
      { "name": "Argentina Country Risk Index (EMBI)", "direction": "down", "change": "-320 bps", "impact": "Positive" },
      { "name": "ARS Parallel Exchange Gap", "direction": "down", "change": "Compressed to 9%", "impact": "Stabilization" },
      { "name": "Monthly Inflation Rate", "direction": "down", "change": "4.0% MoM", "impact": "Cooling" }
    ],
    "propagationTargets": [
      { "iso3": "BRA", "name": "Brazil", "coords": [-14.2350, -51.9253], "intensity": "Medium", "relation": "Mercosur Bilateral Trade" }
    ],
    "aiAnalysis": "Argentina's fiscal shock therapy delivered an $840M surplus, crushing country risk spreads and compressing parallel exchange rates. While domestic consumption is constrained, debt solvency expectations are undergoing a major structural reset."
  }
];

window.GLOBAL_STATS = {
  worldPopulation: "8.12 Billion",
  globalGdp: "$105.4 Trillion",
  globalDebt: "$315 Trillion (330% GDP)",
  medianInflation: "3.2%",
  energyIndex: "114.8 pts",
  merchandiseTradeGrowth: "+3.6% YoY",
  worldBankUpdated: "2026 Q3 Cycle"
};
