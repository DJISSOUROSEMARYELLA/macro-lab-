// Natural Language AI Engine & Interactive Map Highlighter
class AIEngine {
  constructor() {
    this.currentContextEntity = null; // e.g. { type: 'country', id: 'KOR', name: 'South Korea' }
  }

  setContextEntity(type, id, name) {
    this.currentContextEntity = { type, id, name };
    this.updateInputPill();
  }

  clearContextEntity() {
    this.currentContextEntity = null;
    this.updateInputPill();
  }

  updateInputPill() {
    const container = document.getElementById('ai-tag-container');
    const input = document.getElementById('ai-query-input');
    if (!container || !input) return;

    if (this.currentContextEntity) {
      container.innerHTML = `
        <span class="context-tag-pill">
          <span class="material-symbols-outlined" style="font-size: 14px;">${this.currentContextEntity.type === 'country' ? 'public' : 'bolt'}</span>
          <span>${this.currentContextEntity.name}</span>
          <span class="context-tag-remove material-symbols-outlined" onclick="window.AIEngine.clearContextEntity()">close</span>
        </span>
      `;
      input.placeholder = `Ask anything about ${this.currentContextEntity.name}...`;
    } else {
      container.innerHTML = '';
      input.placeholder = "Ask about any economy — inflation drivers, debt sustainability, growth outlook...";
    }
  }

  processQuery(rawQuery) {
    const query = rawQuery.trim();
    if (!query) return;

    const lower = query.toLowerCase();
    let responseText = "";
    let highlightedCountries = [];

    // 1. Check for Map Filtering Commands
    if (lower.includes('inflation > 6') || lower.includes('inflation > 5') || lower.includes('high inflation')) {
      highlightedCountries = Object.keys(window.COUNTRIES_DATA).filter(
        iso => window.COUNTRIES_DATA[iso].inflationCPI > 5.0
      );
      responseText = `**Highlighted High Inflation Economies (> 5% CPI)**: Found **${highlightedCountries.length}** countries including **${highlightedCountries.map(k => window.COUNTRIES_DATA[k].name).join(', ')}**. These regions are grappling with elevated food prices, currency depreciation, or structural energy import shocks.`;
      window.MapEngine.applyFilterHighlight(highlightedCountries);
    } 
    else if (lower.includes('debt > 90') || lower.includes('debt > 100') || lower.includes('high debt')) {
      highlightedCountries = Object.keys(window.COUNTRIES_DATA).filter(
        iso => window.COUNTRIES_DATA[iso].debtToGdp > 90.0
      );
      responseText = `**Highlighted High Sovereign Debt Economies (> 90% of GDP)**: Found **${highlightedCountries.length}** economies: **${highlightedCountries.map(k => window.COUNTRIES_DATA[k].name).join(', ')}**. Tightening monetary conditions have elevated debt servicing costs, requiring targeted fiscal consolidation.`;
      window.MapEngine.applyFilterHighlight(highlightedCountries);
    }
    else if (lower.includes('low income') || lower.includes('lowest income')) {
      highlightedCountries = Object.keys(window.COUNTRIES_DATA).filter(
        iso => window.COUNTRIES_DATA[iso].incomeGroup === 'Low Income'
      );
      responseText = `**Highlighted World Bank Low Income Economies**: Filtered **${highlightedCountries.length}** countries (GNI per capita $\\le \\$1,135$). Highlighted on map: **${highlightedCountries.map(k => window.COUNTRIES_DATA[k].name).join(', ')}**. Priority areas focus on agricultural productivity, basic grid access, and debt sustainability.`;
      window.MapEngine.applyFilterHighlight(highlightedCountries);
    }
    else if (lower.includes('high income') || lower.includes('advanced economies')) {
      highlightedCountries = Object.keys(window.COUNTRIES_DATA).filter(
        iso => window.COUNTRIES_DATA[iso].incomeGroup === 'High Income'
      );
      responseText = `**Highlighted World Bank High Income Economies**: Filtered **${highlightedCountries.length}** countries (GNI per capita > $13,935): **${highlightedCountries.map(k => window.COUNTRIES_DATA[k].name).join(', ')}**. These nations exhibit diversified services, high human capital, and sound institutional governance.`;
      window.MapEngine.applyFilterHighlight(highlightedCountries);
    }
    else if (lower.includes('growth > 5') || lower.includes('fastest growing')) {
      highlightedCountries = Object.keys(window.COUNTRIES_DATA).filter(
        iso => window.COUNTRIES_DATA[iso].gdpGrowthYoY >= 5.0
      );
      responseText = `**Fastest Growing Economies (GDP Growth $\\ge 5\\%$)**: Highlighted **${highlightedCountries.length}** momentum economies: **${highlightedCountries.map(k => window.COUNTRIES_DATA[k].name).join(', ')}**. Growth is primarily driven by industrial expansion, export surges, and extensive public infrastructure investment.`;
      window.MapEngine.applyFilterHighlight(highlightedCountries);
    }
    else if (lower.includes('reset') || lower.includes('clear filter')) {
      window.MapEngine.applyFilterHighlight([]);
      responseText = `**Map Filters Reset**: All geographic layers and choropleth polygons have been restored to default global view.`;
    }
    // 2. Entity Specific Context Question
    else if (this.currentContextEntity && this.currentContextEntity.type === 'country') {
      const country = window.COUNTRIES_DATA[this.currentContextEntity.id];
      responseText = `**Macro Deep Dive: ${country.name} (${country.flag})**\n\n` +
        `• **Monetary & Fiscal Balance**: Policy rate is **${country.interestRate}%** with inflation at **${country.inflationCPI}%**. Sovereign debt stands at **${country.debtToGdp}% of GDP** with a budget balance of **${country.budgetBalance}%**.\n` +
        `• **Human & Digital Development**: Human Capital Index is **${country.fiveCoreMatrix.hci}** with **${country.fiveCoreMatrix.broadband}%** broadband penetration.\n` +
        `• **AI Strategic Outlook**: ${country.aiSynthesis}`;
      
      window.MapEngine.flyToCountry(this.currentContextEntity.id);
    }
    else if (this.currentContextEntity && this.currentContextEntity.type === 'event') {
      const evt = window.ECONOMIC_EVENTS.find(e => e.id === this.currentContextEntity.id);
      responseText = `**Shock Propagation Analysis: ${evt.title} (${evt.countryName})**\n\n` +
        `• **Event Shock Magnitude**: Tier **${evt.severity}/5** with a direct impact halo of **${evt.haloRadiusKm} km**.\n` +
        `• **Observed Print**: Actual **${evt.actual}** vs Forecast **${evt.forecast}**.\n` +
        `• **Spillover Channels**: Primary propagation lines target **${evt.propagationTargets.map(t => t.name).join(', ')}**.\n` +
        `• **AI Synthesis**: ${evt.aiAnalysis}`;
    }
    else if (this.currentContextEntity && this.currentContextEntity.type === 'corridor') {
      responseText = `**Analyse de Transmission Géodésique: ${this.currentContextEntity.name}**\n\n` +
        `• **Mécanisme de propagation** : Le canal de transmission s'appuie sur les flux d'échanges bilatéraux, les spreads de taux souverains et l'arbitrage de devises (FX carry trade).\n` +
        `• **Impact macroéconomique anticipé** : Répercussion sur la prime de risque locale, ajustement des coûts d'importation et réallocation des portefeuilles obligataires transfrontaliers.\n` +
        `• **Recommandation stratégique** : Surveiller le niveau des réserves de change et l'écart de rendement avec les obligations souveraines à 10 ans pour amortir les tensions de liquidité.`;
    }
    // 3. Fallback General AI Explanation
    else {
      responseText = `**Macro Lab Intelligence Analysis**\n\n` +
        `Analyzing your query: "*${query}*".\n\n` +
        `Global macroeconomic conditions in 2026 reflect divergent monetary easing paths between the Federal Reserve / ECB and emerging market central banks. Supply chain nearshoring, energy transition investments, and artificial intelligence infrastructure demand continue to drive regional trade surpluses (notably in East Asia), while fiscal discipline remains the primary determinant of sovereign credit stability.`;
    }

    window.UIController.showAIResponse(rawQuery, responseText);
  }
}

window.AIEngine = new AIEngine();
