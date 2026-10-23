// Map Engine: Leaflet Initializer, Choropleth Polygons, Hover Tooltips & Interactions
class MapEngine {
  constructor() {
    this.map = null;
    this.countryGeoLayer = null;
    this.activeMetric = 'income'; // 'income', 'gdpGrowth', 'inflation', 'debt'
    this.selectedIso3 = null;
    this.highlightedIso3List = [];
  }

  init() {
    // Flat light CartoDB Positron / Google style tiles with 360 wrap-around support
    this.map = L.map('map', {
      center: [20, 10],
      zoom: 3,
      minZoom: 2,
      maxZoom: 10,
      worldCopyJump: true, // Enables seamless 360 infinite navigation
      zoomControl: false,
      attributionControl: false
    });

    L.control.attribution({ position: 'bottomleft' }).addTo(this.map);

    // Flat light minimalist basemap - 100% free, no API key required, zero watermarks
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a>, OpenStreetMap | Macro Lab',
      maxZoom: 16
    }).addTo(this.map);

    // Track mouse coordinates for the header pill
    this.map.on('mousemove', (e) => {
      const coordEl = document.getElementById('cursor-coords');
      if (coordEl) {
        coordEl.textContent = `${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`;
      }
    });

    this.renderCountryLayer();
  }

  getWrappedGeoJSON() {
    if (!window.GEOJSON_WORLD || !window.GEOJSON_WORLD.features) return null;
    
    // Shift features horizontally by offsetLng for 360 wrap-around
    const shiftFeatures = (features, offsetLng) => {
      return features.map(f => {
        const shiftCoords = (coords) => {
          if (typeof coords[0] === 'number') {
            return [coords[0] + offsetLng, coords[1]];
          }
          return coords.map(shiftCoords);
        };
        return {
          type: 'Feature',
          properties: f.properties,
          geometry: {
            type: f.geometry.type,
            coordinates: shiftCoords(f.geometry.coordinates)
          }
        };
      });
    };

    return {
      type: 'FeatureCollection',
      features: [
        ...window.GEOJSON_WORLD.features,
        ...shiftFeatures(window.GEOJSON_WORLD.features, 360),
        ...shiftFeatures(window.GEOJSON_WORLD.features, -360)
      ]
    };
  }

  renderCountryLayer() {
    if (this.countryGeoLayer) {
      this.map.removeLayer(this.countryGeoLayer);
    }

    const wrappedGeo = this.getWrappedGeoJSON() || window.GEOJSON_WORLD;

    this.countryGeoLayer = L.geoJSON(wrappedGeo, {
      style: (feature) => this.getCountryStyle(feature.properties.iso_a3),
      onEachFeature: (feature, layer) => {
        const iso3 = feature.properties.iso_a3;
        const country = window.COUNTRIES_DATA[iso3] || {
          name: feature.properties.name || iso3,
          iso3: iso3,
          continent: feature.properties.continent || 'Global',
          region: feature.properties.subregion || 'Global',
          flag: '🌐',
          incomeGroup: 'Lower-Middle Income',
          rating: 'BB',
          ratingTier: 'speculative',
          landArea: 100000,
          population: '10M',
          gdpNominal: '$50B',
          gdpGrowthYoY: 3.0,
          inflationCPI: 4.5,
          unemployment: 6.0
        };

        // Hover Card Tooltip
        const tooltipContent = this.createHoverTooltipHtml(country);
        layer.bindTooltip(tooltipContent, {
          sticky: true,
          className: 'leaflet-tooltip-macro',
          direction: 'auto',
          offset: [15, 0]
        });

        layer.on({
          mouseover: (e) => {
            const target = e.target;
            if (!this.highlightedIso3List.length || this.highlightedIso3List.includes(iso3)) {
              target.setStyle({
                fillOpacity: 0.85,
                weight: 2.5,
                color: '#202124'
              });
            }
          },
          mouseout: (e) => {
            this.countryGeoLayer.resetStyle(e.target);
            if (this.highlightedIso3List.length > 0) {
              this.applyFilterHighlight(this.highlightedIso3List);
            }
          },
          click: () => {
            window.UIController.openCountryDrawer(iso3);
          }
        });
      }
    }).addTo(this.map);
  }

  getCountryStyle(iso3) {
    const country = window.COUNTRIES_DATA[iso3];
    let fillColor = '#d0d7de';
    let fillOpacity = 0.55;

    if (country) {
      if (this.activeMetric === 'income') {
        const tier = window.WORLD_BANK_TIERS[country.incomeGroup];
        if (tier) fillColor = tier.color;
      } else if (this.activeMetric === 'gdpGrowth') {
        fillColor = country.gdpGrowthYoY > 4 ? '#34a853' : country.gdpGrowthYoY > 1 ? '#4285f4' : country.gdpGrowthYoY > 0 ? '#fbbc04' : '#ea4335';
      } else if (this.activeMetric === 'inflation') {
        fillColor = country.inflationCPI > 15 ? '#ea4335' : country.inflationCPI > 5 ? '#f9ab00' : country.inflationCPI > 2.5 ? '#4285f4' : '#34a853';
      } else if (this.activeMetric === 'debt') {
        fillColor = country.debtToGdp > 100 ? '#ea4335' : country.debtToGdp > 60 ? '#f9ab00' : '#34a853';
      }
    }

    return {
      fillColor: fillColor,
      weight: 1.2,
      opacity: 1,
      color: '#ffffff',
      fillOpacity: fillOpacity,
      className: 'country-polygon'
    };
  }

  createHoverTooltipHtml(country) {
    const tier = window.WORLD_BANK_TIERS[country.incomeGroup] || { label: 'N/A', color: '#5f6368', bg: '#f1f3f4' };
    const areaFormatted = Number(country.landArea).toLocaleString() + ' km²';
    const growthClass = country.gdpGrowthYoY >= 0 ? 'green' : 'red';
    const growthSign = country.gdpGrowthYoY > 0 ? '+' : '';
    const inflationClass = country.inflationCPI > 5 ? 'red' : (country.inflationCPI > 3 ? 'amber' : 'green');

    return `
      <div class="macro-hover-card">
        <div class="card-header-row">
          <div class="country-title-group">
            <span class="flag-emoji">${country.flag}</span>
            <div class="country-title-text">
              <span class="country-card-name">${country.name}</span>
              <span class="country-card-region">${country.continent} • ${country.region}</span>
            </div>
          </div>
          <span class="card-tier-tag" style="background: ${tier.bg}; color: ${tier.color};">${tier.label}</span>
        </div>
        <div class="card-grid">
          <div class="card-metric">
            <span class="metric-label">Nominal GDP</span>
            <span class="metric-val">${country.gdpNominal}</span>
          </div>
          <div class="card-metric">
            <span class="metric-label">GDP Growth YoY</span>
            <span class="metric-val ${growthClass}">${growthSign}${country.gdpGrowthYoY}%</span>
          </div>
          <div class="card-metric">
            <span class="metric-label">CPI Inflation</span>
            <span class="metric-val ${inflationClass}">${country.inflationCPI}%</span>
          </div>
          <div class="card-metric">
            <span class="metric-label">Unemployment</span>
            <span class="metric-val">${country.unemployment}%</span>
          </div>
          <div class="card-metric">
            <span class="metric-label">Population</span>
            <span class="metric-val">${country.population}</span>
          </div>
          <div class="card-metric">
            <span class="metric-label">Land Area</span>
            <span class="metric-val">${areaFormatted}</span>
          </div>
          <div class="card-metric">
            <span class="metric-label">Continent</span>
            <span class="metric-val">${country.continent}</span>
          </div>
          <div class="card-metric">
            <span class="metric-label">Sovereign Rating</span>
            <span class="metric-val rating-highlight ${country.ratingTier}">${country.rating}</span>
          </div>
        </div>
        <div class="card-footer-hint">Click country to open full intelligence panel</div>
      </div>
    `;
  }

  setLayerMetric(metric) {
    this.activeMetric = metric;
    this.renderCountryLayer();
  }

  applyFilterHighlight(iso3List) {
    this.highlightedIso3List = iso3List;
    if (!this.countryGeoLayer) return;

    this.countryGeoLayer.eachLayer((layer) => {
      const iso = layer.feature.properties.iso_a3;
      if (iso3List.length === 0) {
        // Reset
        layer.setStyle({ fillOpacity: 0.55, strokeOpacity: 1, weight: 1.2, color: '#ffffff' });
      } else if (iso3List.includes(iso)) {
        // Highlighted
        layer.setStyle({
          fillOpacity: 0.9,
          color: '#1a73e8',
          weight: 3
        });
      } else {
        // Dimmed
        layer.setStyle({
          fillOpacity: 0.12,
          color: '#dadce0',
          weight: 0.8
        });
      }
    });
  }

  flyToCountry(iso3) {
    const country = window.COUNTRIES_DATA[iso3];
    if (country && this.map) {
      this.map.flyTo(country.coordinates, 5, { duration: 1.2 });
    }
  }
}

window.MapEngine = new MapEngine();
