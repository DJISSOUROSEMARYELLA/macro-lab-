// UI Controller: Drawers, Modals, Spotlight Search, Legend Tabs & Interactive Actions
class UIController {
  constructor() {
    this.countryDrawer = document.getElementById('country-drawer');
    this.eventsDrawer = document.getElementById('events-drawer');
    this.legendDrawer = document.getElementById('legend-drawer');
    this.controlsPanel = document.getElementById('controls-panel');
    this.aiResponseSheet = document.getElementById('ai-response-sheet');
    this.spotlightModal = document.getElementById('spotlight-search-modal');
    this.arcDetailModal = document.getElementById('arc-detail-modal');

    this.activeSpotlightFilter = 'all';
    this.spotlightSelectedIndex = 0;
    this.filteredSpotlightList = [];
    this.currentCountryTab = 'overview';
  }

  init() {
    this.attachEventListeners();
    this.setupLegendInteractions();
    this.setupSpotlightSearch();
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
    const legendBtn = document.getElementById('quick-legend-btn');

    if (radarBtn) {
      radarBtn.addEventListener('click', () => {
        this.countryDrawer.classList.add('hidden');
        this.legendDrawer.classList.add('hidden');
        if (this.eventsDrawer.classList.contains('hidden')) {
          this.renderEventsList();
          this.eventsDrawer.classList.remove('hidden');
        } else {
          this.eventsDrawer.classList.add('hidden');
        }
      });
    }

    if (legendBtn) {
      legendBtn.addEventListener('click', () => {
        this.countryDrawer.classList.add('hidden');
        this.eventsDrawer.classList.add('hidden');
        this.legendDrawer.classList.toggle('hidden');
      });
    }

    const closeLegendBtn = document.getElementById('close-legend-btn');
    if (closeLegendBtn) {
      closeLegendBtn.addEventListener('click', () => {
        this.legendDrawer.classList.add('hidden');
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        this.openSpotlightModal();
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

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openSpotlightModal();
      } else if (e.key === 'Escape') {
        this.closeSpotlightModal();
        if (this.arcDetailModal) this.arcDetailModal.classList.add('hidden');
      }
    });
  }

  /* ==========================================================================
     Spotlight Search Implementation (Google Weather Lab / Flight Atlas Style)
     ========================================================================== */
  setupSpotlightSearch() {
    const input = document.getElementById('spotlight-search-input');
    const closeBtn = document.getElementById('close-spotlight-btn');
    const overlay = document.getElementById('spotlight-search-modal');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeSpotlightModal());
    }

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeSpotlightModal();
      });
    }

    if (input) {
      input.addEventListener('input', (e) => {
        this.renderSpotlightResults(this.activeSpotlightFilter, e.target.value);
      });

      input.addEventListener('keydown', (e) => {
        const items = document.querySelectorAll('.spotlight-item-card');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.spotlightSelectedIndex = (this.spotlightSelectedIndex + 1) % items.length;
          this.updateSpotlightSelection();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.spotlightSelectedIndex = (this.spotlightSelectedIndex - 1 + items.length) % items.length;
          this.updateSpotlightSelection();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (this.filteredSpotlightList[this.spotlightSelectedIndex]) {
            const selectedIso = this.filteredSpotlightList[this.spotlightSelectedIndex].iso3;
            this.selectSpotlightCountry(selectedIso);
          }
        }
      });
    }

    // Quick Filter Pills
    const filterPills = document.querySelectorAll('.spotlight-filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeSpotlightFilter = pill.getAttribute('data-filter');
        this.renderSpotlightResults(this.activeSpotlightFilter, input ? input.value : '');
      });
    });
  }

  openSpotlightModal() {
    if (!this.spotlightModal) return;
    this.spotlightModal.classList.remove('hidden');
    const input = document.getElementById('spotlight-search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
    this.activeSpotlightFilter = 'all';
    document.querySelectorAll('.spotlight-filter-pill').forEach((p, idx) => {
      p.classList.toggle('active', idx === 0);
    });
    this.renderSpotlightResults('all', '');
  }

  closeSpotlightModal() {
    if (this.spotlightModal) {
      this.spotlightModal.classList.add('hidden');
    }
  }

  renderSpotlightResults(filter = 'all', query = '') {
    const listContainer = document.getElementById('spotlight-results-list');
    if (!listContainer) return;

    const q = query.trim().toLowerCase();
    const countries = Object.values(window.COUNTRIES_DATA || {});

    this.filteredSpotlightList = countries.filter(c => {
      // 1. Text Query Matching
      const matchesQuery = !q ||
        c.name.toLowerCase().includes(q) ||
        c.iso3.toLowerCase().includes(q) ||
        c.continent.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q);

      if (!matchesQuery) return false;

      // 2. Filter Category Matching
      if (filter === 'all') return true;
      if (filter === 'high-income') return c.incomeGroup === 'High Income';
      if (filter === 'high-growth') return c.gdpGrowthYoY >= 4.0;
      if (filter === 'high-inflation') return c.inflationCPI >= 5.0;
      if (filter === 'Europe') return c.continent === 'Europe';
      if (filter === 'Asia') return c.continent === 'Asia';
      if (filter === 'Africa') return c.continent === 'Africa';
      if (filter === 'Americas') return c.continent.includes('America');
      return true;
    });

    this.spotlightSelectedIndex = 0;

    if (this.filteredSpotlightList.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align: center; padding: 32px 16px; color: var(--g-text-tertiary); font-size: 13px;">
          <span class="material-symbols-outlined" style="font-size: 32px; margin-bottom: 6px; opacity: 0.6;">search_off</span>
          <div>Aucun pays trouvé correspondant à "${query}"</div>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = this.filteredSpotlightList.slice(0, 30).map((c, idx) => `
      <div class="spotlight-item-card ${idx === 0 ? 'selected' : ''}" data-iso="${c.iso3}" onclick="window.UIController.selectSpotlightCountry('${c.iso3}')">
        <div class="spotlight-country-info">
          <span class="spotlight-flag">${c.flag}</span>
          <div class="spotlight-name-block">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="spotlight-country-name">${c.name}</span>
              <span style="font-family: var(--g-mono-family); font-size: 11px; color: var(--g-text-tertiary); font-weight: 500;">${c.iso3}</span>
            </div>
            <span class="spotlight-country-sub">${c.continent} • ${c.incomeGroup}</span>
          </div>
        </div>
        <div class="spotlight-metrics-preview">
          <div class="spotlight-kpi">
            <span class="spotlight-kpi-val">${c.gdpNominal}</span>
            <span class="spotlight-kpi-lbl">PIB Nominal</span>
          </div>
          <div class="spotlight-kpi">
            <span class="spotlight-kpi-val ${c.gdpGrowthYoY >= 0 ? 'green' : 'red'}" style="color: ${c.gdpGrowthYoY >= 0 ? '#34a853' : '#ea4335'};">
              ${c.gdpGrowthYoY > 0 ? '+' : ''}${c.gdpGrowthYoY}%
            </span>
            <span class="spotlight-kpi-lbl">Croissance</span>
          </div>
          <div class="spotlight-kpi">
            <span class="spotlight-kpi-val" style="color: ${c.inflationCPI > 5 ? '#ea4335' : (c.inflationCPI > 3 ? '#b06000' : '#34a853')};">
              ${c.inflationCPI}%
            </span>
            <span class="spotlight-kpi-lbl">Inflation</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  updateSpotlightSelection() {
    const cards = document.querySelectorAll('.spotlight-item-card');
    cards.forEach((card, idx) => {
      card.classList.toggle('selected', idx === this.spotlightSelectedIndex);
      if (idx === this.spotlightSelectedIndex) {
        card.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  selectSpotlightCountry(iso3) {
    this.closeSpotlightModal();
    this.openCountryDrawer(iso3);
    window.MapEngine.flyToCountry(iso3);
  }

  /* ==========================================================================
     Floating Legend Tabs & Interactive Interactions
     ========================================================================== */
  setupLegendInteractions() {
    // Navigation Tabs inside Legend
    const tabs = document.querySelectorAll('.legend-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabKey = tab.getAttribute('data-tab');

        document.querySelectorAll('.legend-tab-content').forEach(content => {
          content.classList.toggle('active', content.id === `legend-tab-${tabKey}`);
        });
      });
    });

    // Clicking Income Tiers to Filter Map
    const segments = document.querySelectorAll('.progression-segment, .tier-item-row');
    segments.forEach(el => {
      el.addEventListener('click', () => {
        const tierKey = el.getAttribute('data-tier');
        const matchingIsoList = Object.keys(window.COUNTRIES_DATA).filter(
          k => window.COUNTRIES_DATA[k].incomeGroup === tierKey
        );
        window.MapEngine.applyFilterHighlight(matchingIsoList);
      });
    });
  }

  /* ==========================================================================
     Flight Atlas Country Drawer Implementation
     ========================================================================== */
  openCountryDrawer(iso3) {
    const country = window.COUNTRIES_DATA[iso3];
    if (!country) return;

    this.eventsDrawer.classList.add('hidden');
    this.legendDrawer.classList.add('hidden');
    this.countryDrawer.classList.remove('hidden');

    const tier = window.WORLD_BANK_TIERS[country.incomeGroup] || { label: 'N/A', color: '#5f6368', bg: '#f1f3f4' };
    const norms = window.GLOBAL_NORMS;

    // 5-Core Matrix Calculations
    const hciNorm = norms.hci;
    const hciVal = country.fiveCoreMatrix ? country.fiveCoreMatrix.hci : 0.58;
    const hciDiff = (hciVal - hciNorm).toFixed(2);
    const hciPct = Math.min(Math.max(hciVal * 100, 5), 100);
    const hciNormPct = hciNorm * 100;

    const povNorm = norms.povertyRate;
    const povVal = country.fiveCoreMatrix ? country.fiveCoreMatrix.povertyRate : 5.0;
    const povPct = Math.min(povVal * 3, 100);
    const povNormPct = povNorm * 3;

    const elecNorm = norms.electricityAccess;
    const elecVal = country.fiveCoreMatrix ? country.fiveCoreMatrix.electricityAccess : 90;

    const broadNorm = norms.broadband;
    const broadVal = country.fiveCoreMatrix ? country.fiveCoreMatrix.broadband : 65;

    const carbNorm = norms.carbonIntensity;
    const carbVal = country.fiveCoreMatrix ? country.fiveCoreMatrix.carbonIntensity : 3.5;
    const carbPct = Math.min(carbVal * 5, 100);
    const carbNormPct = carbNorm * 5;

    const growthClass = country.gdpGrowthYoY >= 0 ? 'green' : 'red';
    const growthSign = country.gdpGrowthYoY > 0 ? '+' : '';
    const inflationClass = country.inflationCPI > 5 ? 'red' : (country.inflationCPI > 3 ? 'amber' : 'green');

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
            <span style="font-size: 11px; color: var(--g-text-secondary);">${country.continent} • ${country.region}</span>
          </div>
        </div>
        <button class="icon-btn" onclick="window.UIController.closeCountryDrawer()">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Flight Atlas Big Bold Hero Numbers -->
      <div class="flight-hero-grid">
        <div class="flight-hero-card">
          <span class="flight-hero-num">${country.gdpNominal}</span>
          <span class="flight-hero-label">Nominal GDP</span>
        </div>
        <div class="flight-hero-card">
          <span class="flight-hero-num ${growthClass}">${growthSign}${country.gdpGrowthYoY}%</span>
          <span class="flight-hero-label">Real Growth YoY</span>
        </div>
        <div class="flight-hero-card">
          <span class="flight-hero-num ${inflationClass}">${country.inflationCPI}%</span>
          <span class="flight-hero-label">CPI Inflation</span>
        </div>
      </div>

      <!-- Segmented Rounded Tab Selector -->
      <div class="drawer-tab-pills">
        <button class="drawer-tab-pill active" onclick="window.UIController.switchCountryTab('overview', this)">
          📊 Vue d'ensemble
        </button>
        <button class="drawer-tab-pill" onclick="window.UIController.switchCountryTab('matrix', this)">
          🧭 Matrice 5-Core
        </button>
        <button class="drawer-tab-pill" onclick="window.UIController.switchCountryTab('spillovers', this)">
          ⚡ Spillovers & News
        </button>
      </div>

      <div class="drawer-content">
        <!-- Tab 1: Overview (Macro-Financial Depth) -->
        <div id="country-tab-overview" class="drawer-tab-panel active">
          <div>
            <div class="control-section-title">
              <span class="material-symbols-outlined">monitoring</span>
              Profondeur Macro-Financière
            </div>
            <div class="depth-grid">
              <div class="depth-tile">
                <span class="tile-label">Réserves de Change</span>
                <span class="tile-val" style="color: #1a73e8;">${country.foreignReserves}</span>
              </div>
              <div class="depth-tile">
                <span class="tile-label">Dette Publique / PIB</span>
                <span class="tile-val ${country.debtToGdp > 90 ? 'red' : ''}">${country.debtToGdp}%</span>
              </div>
              <div class="depth-tile">
                <span class="tile-label">Compte Courant</span>
                <span class="tile-val ${country.currentAccount >= 0 ? 'green' : 'red'}">${country.currentAccount >= 0 ? '+' : ''}${country.currentAccount}% PIB</span>
              </div>
              <div class="depth-tile">
                <span class="tile-label">Taux Directeur (BC)</span>
                <span class="tile-val">${country.interestRate}%</span>
              </div>
              <div class="depth-tile">
                <span class="tile-label">Rendement 10Y</span>
                <span class="tile-val">${country.bondYield10Y}%</span>
              </div>
              <div class="depth-tile">
                <span class="tile-label">Solde Budgétaire</span>
                <span class="tile-val ${country.budgetBalance >= 0 ? 'green' : 'red'}">${country.budgetBalance >= 0 ? '+' : ''}${country.budgetBalance}% PIB</span>
              </div>
            </div>
          </div>

          <div style="background: white; border: 1px solid var(--g-border); border-radius: 12px; padding: 12px 16px;">
            <div class="control-section-title" style="margin-bottom: 8px;">
              <span class="material-symbols-outlined">domain</span>
              Démographie & Géographie
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 13px;">
              <div>
                <span style="color: var(--g-text-secondary); font-size: 11px;">Population</span>
                <div style="font-weight: 600;">${country.population} habitants</div>
              </div>
              <div>
                <span style="color: var(--g-text-secondary); font-size: 11px;">Superficie</span>
                <div style="font-weight: 600;">${Number(country.landArea).toLocaleString()} km²</div>
              </div>
              <div>
                <span style="color: var(--g-text-secondary); font-size: 11px;">PIB / Habitant</span>
                <div style="font-weight: 600;">${country.gdpPerCapita}</div>
              </div>
              <div>
                <span style="color: var(--g-text-secondary); font-size: 11px;">Chômage</span>
                <div style="font-weight: 600;">${country.unemployment}%</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: 5-Core Matrix with Benchmark Norm Markers & (?) Tooltips -->
        <div id="country-tab-matrix" class="drawer-tab-panel">
          <div class="matrix-section" style="padding: 0; background: transparent; border: none;">
            <div class="matrix-title">
              <span>World Bank 5-Core Matrix</span>
              <span style="font-size: 11px; font-weight: 500; color: var(--g-text-tertiary);">Repères Normes Mondiales (●)</span>
            </div>

            <!-- 1. HCI -->
            <div class="matrix-row">
              <div class="matrix-row-header">
                <span class="matrix-label-with-help">
                  <span>HCI (Human Capital Index)</span>
                  <span class="matrix-help-icon" title="Mesure le niveau de savoir, compétences et santé accumulé jusqu'à 18 ans (0 à 1.0).">?</span>
                </span>
                <div class="matrix-val-group">
                  <span class="matrix-status-pill ${hciVal >= hciNorm ? 'above' : 'below'}">${hciVal >= hciNorm ? `+${hciDiff} Sup. Norme` : `${hciDiff} Inf. Norme`}</span>
                  <strong>${hciVal} / 1.0</strong>
                </div>
              </div>
              <div class="matrix-bar-track">
                <div class="matrix-bar-fill ${hciVal >= hciNorm ? 'good' : 'warning'}" style="width: ${hciPct}%;"></div>
                <div class="matrix-norm-marker" style="left: ${hciNormPct}%;" title="Norme mondiale: ${hciNorm}"></div>
              </div>
              <div class="matrix-bar-scale">
                <span>0.0</span>
                <span class="matrix-norm-caption" style="left: ${hciNormPct}%;">Norme ${hciNorm}</span>
                <span>1.0</span>
              </div>
            </div>

            <!-- 2. Poverty Rate -->
            <div class="matrix-row">
              <div class="matrix-row-header">
                <span class="matrix-label-with-help">
                  <span>Pauvreté Extrême (&lt; $2.15/j)</span>
                  <span class="matrix-help-icon" title="Part de la population vivant avec moins de 2,15 $ par jour (seuil international de pauvreté).">?</span>
                </span>
                <div class="matrix-val-group">
                  <span class="matrix-status-pill ${povVal <= povNorm ? 'above' : 'below'}">${povVal <= povNorm ? 'Favorable' : 'Élevée'}</span>
                  <strong>${povVal}%</strong>
                </div>
              </div>
              <div class="matrix-bar-track">
                <div class="matrix-bar-fill ${povVal <= povNorm ? 'good' : 'danger'}" style="width: ${povPct}%;"></div>
                <div class="matrix-norm-marker" style="left: ${povNormPct}%;" title="Norme mondiale: ${povNorm}%"></div>
              </div>
              <div class="matrix-bar-scale">
                <span>0%</span>
                <span class="matrix-norm-caption" style="left: ${povNormPct}%;">Norme ${povNorm}%</span>
                <span>30%+</span>
              </div>
            </div>

            <!-- 3. Electricity Access -->
            <div class="matrix-row">
              <div class="matrix-row-header">
                <span class="matrix-label-with-help">
                  <span>Accès au Réseau Électrique</span>
                  <span class="matrix-help-icon" title="Pourcentage des habitants raccordés au réseau électrique moderne national.">?</span>
                </span>
                <div class="matrix-val-group">
                  <span class="matrix-status-pill ${elecVal >= elecNorm ? 'above' : 'below'}">${elecVal >= elecNorm ? 'Complet' : 'Déficit Réseau'}</span>
                  <strong>${elecVal}%</strong>
                </div>
              </div>
              <div class="matrix-bar-track">
                <div class="matrix-bar-fill ${elecVal >= elecNorm ? 'good' : 'danger'}" style="width: ${elecVal}%;"></div>
                <div class="matrix-norm-marker" style="left: ${elecNorm}%;" title="Norme mondiale: ${elecNorm}%"></div>
              </div>
              <div class="matrix-bar-scale">
                <span>0%</span>
                <span class="matrix-norm-caption" style="left: ${elecNorm}%;">Norme ${elecNorm}%</span>
                <span>100%</span>
              </div>
            </div>

            <!-- 4. Broadband Connectivity -->
            <div class="matrix-row">
              <div class="matrix-row-header">
                <span class="matrix-label-with-help">
                  <span>Pénétration Haut Débit (Digital)</span>
                  <span class="matrix-help-icon" title="Part des citoyens utilisant des abonnements internet mobile haut débit (4G/5G) ou fibre optique.">?</span>
                </span>
                <div class="matrix-val-group">
                  <span class="matrix-status-pill ${broadVal >= broadNorm ? 'above' : 'below'}">${broadVal >= broadNorm ? 'Avance Digitale' : 'Fracture Numérique'}</span>
                  <strong>${broadVal}%</strong>
                </div>
              </div>
              <div class="matrix-bar-track">
                <div class="matrix-bar-fill ${broadVal >= broadNorm ? 'good' : 'warning'}" style="width: ${broadVal}%;"></div>
                <div class="matrix-norm-marker" style="left: ${broadNorm}%;" title="Norme mondiale: ${broadNorm}%"></div>
              </div>
              <div class="matrix-bar-scale">
                <span>0%</span>
                <span class="matrix-norm-caption" style="left: ${broadNorm}%;">Norme ${broadNorm}%</span>
                <span>100%</span>
              </div>
            </div>

            <!-- 5. Carbon Intensity -->
            <div class="matrix-row">
              <div class="matrix-row-header">
                <span class="matrix-label-with-help">
                  <span>Intensité Carbone (t CO2 / hab)</span>
                  <span class="matrix-help-icon" title="Émissions annuelles de dioxyde de carbone par habitant. Mesure la trajectoire de décarbonation.">?</span>
                </span>
                <div class="matrix-val-group">
                  <span class="matrix-status-pill ${carbVal <= carbNorm ? 'above' : 'below'}">${carbVal <= carbNorm ? 'Bas Carbone' : 'Émissions Élevées'}</span>
                  <strong>${carbVal} t</strong>
                </div>
              </div>
              <div class="matrix-bar-track">
                <div class="matrix-bar-fill ${carbVal <= carbNorm ? 'good' : 'danger'}" style="width: ${carbPct}%;"></div>
                <div class="matrix-norm-marker" style="left: ${carbNormPct}%;" title="Norme mondiale: ${carbNorm} t"></div>
              </div>
              <div class="matrix-bar-scale">
                <span>0 t</span>
                <span class="matrix-norm-caption" style="left: ${carbNormPct}%;">Norme ${carbNorm} t</span>
                <span>20 t+</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 3: Spillovers & News (AI Synthesis + Flagship Project) -->
        <div id="country-tab-spillovers" class="drawer-tab-panel">
          <!-- AI Macro Synthesis Card with Standard auto_awesome Icon -->
          <div class="ai-synthesis-card">
            <div class="ai-card-title">
              <span class="material-symbols-outlined">auto_awesome</span>
              Synthèse Macro IA
            </div>
            <div class="ai-card-body">${country.aiSynthesis}</div>
            <button class="ask-country-ai-btn" onclick="window.UIController.triggerAICountryPrompt('${country.iso3}', '${country.name}')">
              <span class="material-symbols-outlined" style="font-size: 16px;">auto_awesome</span>
              Poser une question spécifique sur ${country.name}
            </button>
          </div>

          <!-- Flagship Project -->
          ${country.flagshipProject ? `
            <div class="flagship-card">
              <div class="control-section-title">
                <span class="material-symbols-outlined">flag</span>
                Projet d'Infrastructure Phare
              </div>
              <div class="project-title">${country.flagshipProject.title}</div>
              <div class="project-progress-bar">
                <div class="project-progress-fill" style="width: ${country.flagshipProject.progress}%;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--g-text-secondary); margin-top: 4px;">
                <span>Progression: <strong>${country.flagshipProject.progress}%</strong></span>
                <span>Budget: <strong>${country.flagshipProject.budget}</strong></span>
              </div>
            </div>
          ` : ''}

          <!-- Live News Feed -->
          <div>
            <div class="control-section-title">
              <span class="material-symbols-outlined">newspaper</span>
              Fil d'Actualités & Dépêches Économiques
            </div>
            ${(country.news || []).map(n => `
              <div style="padding: 10px 0; border-bottom: 1px solid var(--g-border-subtle); font-size: 13px;">
                <div style="font-weight: 500; margin-bottom: 2px;">${n.headline}</div>
                <div style="font-size: 11px; color: var(--g-text-tertiary); display: flex; justify-content: space-between;">
                  <span>${n.source}</span>
                  <span>${n.time}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  switchCountryTab(tabKey, btn) {
    document.querySelectorAll('.drawer-tab-pill').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    document.querySelectorAll('.drawer-tab-panel').forEach(p => {
      p.classList.toggle('active', p.id === `country-tab-${tabKey}`);
    });
  }

  closeCountryDrawer() {
    this.countryDrawer.classList.add('hidden');
  }

  /* ==========================================================================
     Events Drawer & Shock Halos
     ========================================================================== */
  renderEventsList() {
    this.eventsDrawer.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title-box">
          <div class="country-main-title">
            <span class="material-symbols-outlined" style="color: #ea4335;">crisis_alert</span>
            <span>Radar des Chocs Macro</span>
          </div>
          <div style="font-size: 12px; color: var(--g-text-secondary);">
            ${window.ECONOMIC_EVENTS.length} catalyseurs en cours & arcs de propagation
          </div>
        </div>
        <button class="icon-btn" onclick="window.UIController.closeEventDrawer()">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="drawer-content">
        <p style="font-size: 12px; color: var(--g-text-secondary); margin-bottom: 4px;">
          Sélectionnez un événement pour visualiser ses ondes concentriques et ses courbes de transmission :
        </p>
        ${window.ECONOMIC_EVENTS.map(evt => `
          <div class="event-card-item" onclick="window.UIController.selectEventFromFeed('${evt.id}')">
            <div class="event-item-top">
              <span class="card-tier-tag" style="background: #e8f0fe; color: #1a73e8;">${evt.categoryLabel}</span>
              <span class="rating-chip prime">Sévérité ${evt.severity}/5</span>
            </div>
            <div class="event-item-title">${evt.countryName}: ${evt.title}</div>
            <div class="event-item-sub">
              <span class="material-symbols-outlined" style="font-size: 14px;">schedule</span>
              <span>${evt.timestamp}</span>
            </div>
            <div class="event-actual-box">
              <div>
                <span style="color: var(--g-text-secondary);">Réel</span>
                <div style="font-size: 15px; font-weight: 700; color: ${evt.haloColor}">${evt.actual}</div>
              </div>
              <div>
                <span style="color: var(--g-text-secondary);">Prévision</span>
                <div style="font-size: 14px; font-weight: 600;">${evt.forecast}</div>
              </div>
              <div>
                <span style="color: var(--g-text-secondary);">Rayon</span>
                <div style="font-size: 14px; font-weight: 600;">${evt.haloRadiusKm} km</div>
              </div>
            </div>
            <div style="font-size: 11px; color: #1a73e8; font-weight: 500; display: flex; align-items: center; gap: 4px;">
              <span>Explorer le halo et les courbes de propagation</span>
              <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  selectEventFromFeed(eventId) {
    const evt = window.ECONOMIC_EVENTS.find(e => e.id === eventId);
    if (evt) {
      window.EventRadar.pinnedEvent = evt;
      window.EventRadar.showEventHalo(evt, true);
      this.openEventDrawer(evt, true);
      window.MapEngine.map.flyTo(evt.coordinates, 5, { duration: 1.2 });
    }
  }

  openEventDrawer(evt, showBackBtn = false) {
    this.countryDrawer.classList.add('hidden');
    this.eventsDrawer.classList.remove('hidden');

    this.eventsDrawer.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title-box">
          ${showBackBtn ? `
            <button class="back-to-feed-btn" onclick="window.UIController.renderEventsList()">
              <span class="material-symbols-outlined" style="font-size: 14px;">arrow_back</span>
              <span>Tous les événements</span>
            </button>
          ` : ''}
          <div class="country-main-title">
            <span class="material-symbols-outlined" style="color: ${evt.haloColor};">${evt.markerIcon}</span>
            <span>${evt.title}</span>
          </div>
          <div class="drawer-badges">
            <span class="card-tier-tag" style="background: #e8f0fe; color: #1a73e8;">${evt.categoryLabel}</span>
            <span class="rating-chip prime">Sévérité ${evt.severity}/5</span>
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
            <span style="color: var(--g-text-secondary);">Réel</span>
            <div style="font-size: 18px; font-weight: 700; color: ${evt.haloColor}">${evt.actual}</div>
          </div>
          <div>
            <span style="color: var(--g-text-secondary);">Prévision</span>
            <div style="font-size: 16px; font-weight: 600;">${evt.forecast}</div>
          </div>
          <div>
            <span style="color: var(--g-text-secondary);">Précédent</span>
            <div style="font-size: 16px; font-weight: 600;">${evt.previous}</div>
          </div>
        </div>

        <!-- Affected Indicators -->
        <div>
          <div class="control-section-title">
            <span class="material-symbols-outlined">crisis_alert</span>
            Indicateurs Affectés Directs
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${evt.affectedIndicators.map(ind => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: white; border: 1px solid var(--g-border); border-radius: 10px; font-size: 13px;">
                <span>${ind.name}</span>
                <span style="font-weight: 600; color: #1a73e8;">${ind.change} (${ind.impact})</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Propagation Targets -->
        <div>
          <div class="control-section-title">
            <span class="material-symbols-outlined">conversion_path</span>
            Canaux de Propagation Géodésiques (${evt.haloRadiusKm} km)
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${evt.propagationTargets.map(t => `
              <div style="display: flex; justify-content: space-between; font-size: 12px; padding: 10px 12px; background: white; border: 1px solid var(--g-border-subtle); border-radius: 8px; cursor: pointer;" onclick="window.UIController.showArcDetail(window.EventRadar.pinnedEvent, ${JSON.stringify(t).replace(/"/g, '&quot;')})">
                <div>
                  <strong>${t.name}</strong>
                  <div style="color: var(--g-text-secondary); font-size: 11px;">${t.relation}</div>
                </div>
                <span class="rating-chip ${t.intensity === 'High' ? 'default-risk' : 'high-grade'}">${t.intensity}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- AI Synthesis -->
        <div class="ai-synthesis-card">
          <div class="ai-card-title">
            <span class="material-symbols-outlined">auto_awesome</span>
            Analyse d'Impact IA
          </div>
          <div class="ai-card-body">${evt.aiAnalysis}</div>
          <button class="ask-country-ai-btn" onclick="window.UIController.triggerAIEventPrompt('${evt.id}', '${evt.title}')">
            <span class="material-symbols-outlined" style="font-size: 16px;">auto_awesome</span>
            Poser une question sur l'impact de cet événement
          </button>
        </div>
      </div>
    `;
  }

  closeEventDrawer() {
    this.eventsDrawer.classList.add('hidden');
    window.EventRadar.removeEventHalo();
  }

  /* ==========================================================================
     Curved Bézier Arc Spillover Detail Card
     ========================================================================== */
  showArcDetail(evt, target) {
    if (!this.arcDetailModal || !evt || !target) return;

    this.arcDetailModal.classList.remove('hidden');
    this.arcDetailModal.innerHTML = `
      <div class="arc-card-header">
        <div class="arc-card-title">
          <span class="material-symbols-outlined" style="color: #1a73e8;">conversion_path</span>
          <span>Transmission de Choc Macro</span>
        </div>
        <button class="icon-btn" onclick="document.getElementById('arc-detail-modal').classList.add('hidden')">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div class="arc-flow-corridor">
        <div class="arc-flow-node">
          <strong>${evt.countryName}</strong>
          <span>${evt.title}</span>
        </div>
        <span class="material-symbols-outlined" style="color: #1a73e8;">trending_flat</span>
        <div class="arc-flow-node" style="text-align: right;">
          <strong>${target.name}</strong>
          <span>Impact ${target.intensity}</span>
        </div>
      </div>

      <div style="font-size: 12px; color: var(--g-text-primary); line-height: 1.4;">
        <strong>Canal de Transmission :</strong> ${target.relation}
      </div>

      <div class="arc-forecast-badge">
        <strong>Prévision d'Impact :</strong> Risque de volatilité sur la devise locale, ajustement des spreads souverains et flux d'importation technologique.
      </div>

      <button class="ask-country-ai-btn" style="width: 100%; justify-content: center;" onclick="window.UIController.triggerAIArcPrompt('${evt.countryName}', '${target.name}', '${target.relation}')">
        <span class="material-symbols-outlined" style="font-size: 16px;">auto_awesome</span>
        Analyser la transmission ${evt.countryName} ➔ ${target.name} avec l'IA
      </button>
    `;
  }

  /* ==========================================================================
     AI Prompt Triggers with Context Entity Tagging
     ========================================================================== */
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

  triggerAIArcPrompt(origin, target, channel) {
    if (this.arcDetailModal) this.arcDetailModal.classList.add('hidden');
    window.AIEngine.setContextEntity('corridor', `${origin}-${target}`, `${origin} ➔ ${target}`);
    const input = document.getElementById('ai-query-input');
    if (input) {
      input.value = `Explique comment ${origin} transmet son choc macro à ${target} via le canal "${channel}"`;
      input.focus();
      const bar = document.querySelector('.ai-input-bar');
      if (bar) {
        bar.classList.add('highlighted');
        setTimeout(() => bar.classList.remove('highlighted'), 1200);
      }
    }
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
          Intelligence Macro Lab
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
