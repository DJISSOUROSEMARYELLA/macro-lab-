// UI Controller: Drawers, Modals, Legend Expander, Quick Tools & Chat Actions
class UIController {
  constructor() {
    this.countryDrawer = document.getElementById('country-drawer');
    this.eventsDrawer = document.getElementById('events-drawer');
    this.controlsPanel = document.getElementById('controls-panel');
    this.aiResponseSheet = document.getElementById('ai-response-sheet');
    this.legendExpanded = false;
  }

  init() {
    this.attachEventListeners();
    this.renderEventsList();
  }

  attachEventListeners() {
    // Top-Left Controls Toggle
    const closeControlsBtn = document.getElementById('close-controls-btn');
    const openControlsBtn = document.getElementById('toggle-controls-btn');
    if (closeControlsBtn) {
      closeControlsBtn.addEventListener('click', () => {
        this.controlsPanel.classList.add('collapsed');
      });
    }
    if (openControlsBtn) {
      openControlsBtn.addEventListener('click', () => {
        this.controlsPanel.classList.toggle('collapsed');
      });
    }

    // Right Floating Quick Action Buttons
    const searchBtn = document.getElementById('quick-search-btn');
    const radarBtn = document.getElementById('quick-radar-btn');

    if (radarBtn) {
      radarBtn.addEventListener('click', () => {
        this.eventsDrawer.classList.toggle('hidden');
        if (!this.eventsDrawer.classList.contains('hidden')) {
          this.countryDrawer.classList.add('hidden');
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        const query = prompt("Search Country by name or ISO code (e.g. South Korea, USA, Germany, India):");
        if (query) {
          const match = Object.keys(window.COUNTRIES_DATA).find(
            k => window.COUNTRIES_DATA[k].name.toLowerCase().includes(query.toLowerCase()) || k.toLowerCase() === query.toLowerCase()
          );
          if (match) {
            this.openCountryDrawer(match);
            window.MapEngine.flyToCountry(match);
          } else {
            alert(`No country found matching "${query}".`);
          }
        }
      });
    }

    // Layer Radio changes
    const layerRadios = document.querySelectorAll('input[name="macro-layer"]');
    layerRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        window.MapEngine.setLayerMetric(e.target.value);
      });
    });

    // Radar Toggle Switch
    const radarSwitch = document.getElementById('radar-toggle-switch');
    if (radarSwitch) {
      radarSwitch.addEventListener('change', (e) => {
        window.EventRadar.toggleVisibility(e.target.checked);
      });
    }

    // AI Form Submission
    const aiForm = document.getElementById('ai-input-form');
    const aiInput = document.getElementById('ai-query-input');
    if (aiForm && aiInput) {
      aiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        window.AIEngine.processQuery(aiInput.value);
        aiInput.value = '';
      });
    }

    // Suggestion Chips
    const chips = document.querySelectorAll('.suggestion-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        window.AIEngine.processQuery(query);
      });
    });

    // Legend Toggle
    const legend = document.getElementById('retractable-legend');
    if (legend) {
      legend.addEventListener('click', () => {
        this.toggleLegend();
      });
    }
  }

  toggleLegend() {
    this.legendExpanded = !this.legendExpanded;
    const compact = document.getElementById('legend-compact');
    const expanded = document.getElementById('legend-expanded');
    if (this.legendExpanded) {
      compact.style.display = 'none';
      expanded.style.display = 'flex';
    } else {
      compact.style.display = 'flex';
      expanded.style.display = 'none';
    }
  }

  openCountryDrawer(iso3) {
    const country = window.COUNTRIES_DATA[iso3];
    if (!country) return;

    this.eventsDrawer.classList.add('hidden');
    this.countryDrawer.classList.remove('hidden');

    const tier = window.WORLD_BANK_TIERS[country.incomeGroup] || { label: 'N/A', color: '#5f6368', bg: '#f1f3f4' };
    const growthClass = country.gdpGrowthYoY >= 0 ? 'green' : 'red';
    const growthSign = country.gdpGrowthYoY > 0 ? '+' : '';

    this.countryDrawer.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title-box">
          <div class="country-main-title">
            <span>${country.flag}</span>
            <span>${country.name}</span>
          </div>
          <div class="drawer-badges">
            <span class="card-tier-tag" style="background: ${tier.bg}; color: ${tier.color};">${tier.label}</span>
            <span class="rating-chip ${country.ratingTier}">${country.rating}</span>
            <span style="font-size: 13px; color: var(--g-text-secondary);">${country.gdpNominal} GDP</span>
          </div>
        </div>
        <button class="icon-btn" onclick="window.UIController.closeCountryDrawer()">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="drawer-content">
        <!-- 6 Macro-Financial Depth Tiles -->
        <div>
          <div class="control-section-title">
            <span class="material-symbols-outlined">monitoring</span>
            Macro-Financial Depth
          </div>
          <div class="depth-grid">
            <div class="depth-tile">
              <span class="tile-label">Debt / GDP</span>
              <span class="tile-val">${country.debtToGdp}%</span>
            </div>
            <div class="depth-tile">
              <span class="tile-label">Budget Balance</span>
              <span class="tile-val ${country.budgetBalance >= 0 ? 'green' : 'red'}">${country.budgetBalance}%</span>
            </div>
            <div class="depth-tile">
              <span class="tile-label">Policy Rate</span>
              <span class="tile-val">${country.interestRate}%</span>
            </div>
            <div class="depth-tile">
              <span class="tile-label">Inflation CPI</span>
              <span class="tile-val">${country.inflationCPI}%</span>
            </div>
            <div class="depth-tile">
              <span class="tile-label">Foreign Reserves</span>
              <span class="tile-val">${country.foreignReserves}</span>
            </div>
            <div class="depth-tile">
              <span class="tile-label">GDP / Capita</span>
              <span class="tile-val">${country.gdpPerCapita}</span>
            </div>
          </div>
        </div>

        <!-- World Bank 5-Core Matrix -->
        <div class="matrix-section">
          <div class="matrix-title">
            <span>World Bank 5-Core Matrix</span>
            <span class="material-symbols-outlined" title="Human Capital, Poverty, Infrastructure, Digital & Planet" style="font-size: 16px; color: var(--g-text-tertiary);">help</span>
          </div>

          <div class="matrix-row">
            <div class="matrix-row-header">
              <span>Human Capital Index (People)</span>
              <strong>${country.fiveCoreMatrix.hci} / 1.0</strong>
            </div>
            <div class="matrix-bar-track">
              <div class="matrix-bar-fill" style="width: ${country.fiveCoreMatrix.hci * 100}%;"></div>
            </div>
          </div>

          <div class="matrix-row">
            <div class="matrix-row-header">
              <span>Poverty Headcount Rate (Prosperity)</span>
              <strong>${country.fiveCoreMatrix.povertyRate}%</strong>
            </div>
            <div class="matrix-bar-track">
              <div class="matrix-bar-fill" style="width: ${Math.min(country.fiveCoreMatrix.povertyRate * 3, 100)}%; background: #ea4335;"></div>
            </div>
          </div>

          <div class="matrix-row">
            <div class="matrix-row-header">
              <span>Electricity Access (Infrastructure)</span>
              <strong>${country.fiveCoreMatrix.electricityAccess}%</strong>
            </div>
            <div class="matrix-bar-track">
              <div class="matrix-bar-fill" style="width: ${country.fiveCoreMatrix.electricityAccess}%; background: #34a853;"></div>
            </div>
          </div>

          <div class="matrix-row">
            <div class="matrix-row-header">
              <span>Broadband Connectivity (Digital)</span>
              <strong>${country.fiveCoreMatrix.broadband}%</strong>
            </div>
            <div class="matrix-bar-track">
              <div class="matrix-bar-fill" style="width: ${country.fiveCoreMatrix.broadband}%;"></div>
            </div>
          </div>

          <div class="matrix-row">
            <div class="matrix-row-header">
              <span>Carbon Intensity (Planet)</span>
              <strong>${country.fiveCoreMatrix.carbonIntensity} t CO2/cap</strong>
            </div>
            <div class="matrix-bar-track">
              <div class="matrix-bar-fill" style="width: ${Math.min(country.fiveCoreMatrix.carbonIntensity * 5, 100)}%; background: #f9ab00;"></div>
            </div>
          </div>
        </div>

        <!-- Flagship Project -->
        <div class="project-box">
          <div class="project-title">Flagship Transformation Project</div>
          <div style="font-size: 13px; color: var(--g-text-secondary);">${country.flagshipProject.title} (${country.flagshipProject.budget})</div>
          <div class="project-progress-bar">
            <div class="project-progress-fill" style="width: ${country.flagshipProject.progress}%;"></div>
          </div>
          <div style="font-size: 11px; color: var(--g-text-tertiary); text-align: right;">Progress: ${country.flagshipProject.progress}% Completed</div>
        </div>

        <!-- AI Macro Synthesis Card with Ask More Button -->
        <div class="ai-synthesis-card">
          <div class="ai-card-title">
            <span class="material-symbols-outlined">smart_toy</span>
            AI Macro Synthesis
          </div>
          <div class="ai-card-body">${country.aiSynthesis}</div>
          <button class="ask-country-ai-btn" onclick="window.UIController.triggerAICountryPrompt('${country.iso3}', '${country.name}')">
            <span class="material-symbols-outlined" style="font-size: 16px;">chat_spark</span>
            Ask more with AI about ${country.name}
          </button>
        </div>

        <!-- 3 Recent Economic News Items -->
        <div>
          <div class="control-section-title">
            <span class="material-symbols-outlined">newspaper</span>
            Live Intelligence Feed
          </div>
          ${country.news.map(n => `
            <div style="padding: 10px 0; border-bottom: 1px solid var(--g-border-subtle); font-size: 13px;">
              <div style="font-weight: 500; margin-bottom: 2px;">${n.headline}</div>
              <div style="font-size: 11px; color: var(--g-text-tertiary);">${n.source} • ${n.time}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  triggerAICountryPrompt(iso3, name) {
    window.AIEngine.setContextEntity('country', iso3, name);
    const input = document.getElementById('ai-query-input');
    if (input) {
      input.focus();
      const bar = document.querySelector('.ai-input-bar');
      if (bar) {
        bar.classList.add('highlighted');
        setTimeout(() => bar.classList.remove('highlighted'), 1200);
      }
    }
  }

  triggerAIEventPrompt(id, title) {
    window.AIEngine.setContextEntity('event', id, title);
    const input = document.getElementById('ai-query-input');
    if (input) {
      input.focus();
      const bar = document.querySelector('.ai-input-bar');
      if (bar) {
        bar.classList.add('highlighted');
        setTimeout(() => bar.classList.remove('highlighted'), 1200);
      }
    }
  }

  closeCountryDrawer() {
    this.countryDrawer.classList.add('hidden');
  }

  openEventDrawer(evt) {
    this.countryDrawer.classList.add('hidden');
    this.eventsDrawer.classList.remove('hidden');

    this.eventsDrawer.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title-box">
          <div class="country-main-title">
            <span class="material-symbols-outlined" style="color: ${evt.haloColor};">${evt.markerIcon}</span>
            <span>${evt.title}</span>
          </div>
          <div class="drawer-badges">
            <span class="card-tier-tag" style="background: #e8f0fe; color: #1a73e8;">${evt.categoryLabel}</span>
            <span class="rating-chip prime">Severity ${evt.severity}/5</span>
            <span style="font-size: 12px; color: var(--g-text-secondary);">${evt.countryName}</span>
          </div>
        </div>
        <button class="icon-btn" onclick="window.UIController.closeEventDrawer()">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="drawer-content">
        <div class="event-actual-box">
          <div>
            <span style="color: var(--g-text-secondary);">Actual</span>
            <div style="font-size: 18px; font-weight: 700; color: ${evt.haloColor}">${evt.actual}</div>
          </div>
          <div>
            <span style="color: var(--g-text-secondary);">Forecast</span>
            <div style="font-size: 16px; font-weight: 600;">${evt.forecast}</div>
          </div>
          <div>
            <span style="color: var(--g-text-secondary);">Previous</span>
            <div style="font-size: 16px; font-weight: 600;">${evt.previous}</div>
          </div>
        </div>

        <!-- Affected Indicators -->
        <div>
          <div class="control-section-title">
            <span class="material-symbols-outlined">radar</span>
            Affected Macro Indicators
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${evt.affectedIndicators.map(ind => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: white; border: 1px solid var(--g-border); border-radius: 8px; font-size: 13px;">
                <span>${ind.name}</span>
                <span style="font-weight: 600; color: #1a73e8;">${ind.change} (${ind.impact})</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Propagation Targets -->
        <div>
          <div class="control-section-title">
            <span class="material-symbols-outlined">share</span>
            Spillover & Regional Halo (${evt.haloRadiusKm} km)
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${evt.propagationTargets.map(t => `
              <div style="display: flex; justify-content: space-between; font-size: 12px; padding: 6px 0; border-bottom: 1px solid var(--g-border-subtle);">
                <strong>${t.name}</strong>
                <span style="color: var(--g-text-secondary);">${t.relation} [${t.intensity}]</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- AI Event Explanation -->
        <div class="ai-synthesis-card">
          <div class="ai-card-title">
            <span class="material-symbols-outlined">psychology</span>
            What Does This Mean? (AI Impact Synthesis)
          </div>
          <div class="ai-card-body">${evt.aiAnalysis}</div>
          <button class="ask-country-ai-btn" onclick="window.UIController.triggerAIEventPrompt('${evt.id}', '${evt.title}')">
            <span class="material-symbols-outlined" style="font-size: 16px;">chat_spark</span>
            Ask AI about this event's impact
          </button>
        </div>
      </div>
    `;
  }

  closeEventDrawer() {
    this.eventsDrawer.classList.add('hidden');
    window.EventRadar.removeEventHalo();
  }

  renderEventsList() {
    // Pre-populate events inside the drawer if opened directly
  }

  showAIResponse(query, markdown) {
    const sheet = document.getElementById('ai-response-sheet');
    if (!sheet) return;

    sheet.classList.remove('hidden');
    const formattedHtml = markdown
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/• /g, '• ');

    sheet.innerHTML = `
      <div class="ai-response-header">
        <div style="display: flex; align-items: center; gap: 8px; font-weight: 600; color: var(--g-blue);">
          <span class="material-symbols-outlined">auto_awesome</span>
          AI Macro Intelligence
        </div>
        <button class="icon-btn" onclick="window.UIController.closeAIResponse()">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <div class="ai-response-body">${formattedHtml}</div>
    `;
  }

  closeAIResponse() {
    const sheet = document.getElementById('ai-response-sheet');
    if (sheet) sheet.classList.add('hidden');
  }
}

window.UIController = new UIController();
