// Main Application Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing Macro Lab - Global Economic Intelligence Map...');

  // 1. Initialize Map
  window.MapEngine.init();

  // 2. Initialize Event Radar
  window.EventRadar.init(window.MapEngine.map);

  // 3. Initialize UI & Event Listeners
  window.UIController.init();

  // 4. Populate global ticker stats from GLOBAL_STATS
  const tickerStatsEl = document.getElementById('header-global-stats');
  if (tickerStatsEl && window.GLOBAL_STATS) {
    tickerStatsEl.innerHTML = `
      <div class="ticker-pill">
        <span class="material-symbols-outlined" style="font-size: 16px; color: #1a73e8;">public</span>
        <span>Global GDP: <strong>${window.GLOBAL_STATS.globalGdp}</strong></span>
      </div>
      <div class="ticker-pill">
        <span class="material-symbols-outlined" style="font-size: 16px; color: #ea4335;">account_balance_wallet</span>
        <span>Global Debt: <strong>${window.GLOBAL_STATS.globalDebt}</strong></span>
      </div>
      <div class="ticker-pill">
        <span class="material-symbols-outlined" style="font-size: 16px; color: #f9ab00;">trending_up</span>
        <span>Median CPI: <strong>${window.GLOBAL_STATS.medianInflation}</strong></span>
      </div>
    `;
  }

  console.log('Macro Lab operational.');
});
