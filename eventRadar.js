// Event Radar & Shock Propagation Engine
class EventRadar {
  constructor() {
    this.eventMarkers = [];
    this.activeHalos = [];
    this.propagationLines = [];
    this.isVisible = true;
  }

  init(map) {
    this.map = map;
    this.renderEvents();
  }

  renderEvents() {
    this.clearLayers();

    window.ECONOMIC_EVENTS.forEach((evt) => {
      // 1. Custom Google Material Icon Marker
      const markerEl = document.createElement('div');
      markerEl.className = `macro-event-marker ${evt.category}`;
      markerEl.innerHTML = `<span class="material-symbols-outlined marker-icon">${evt.markerIcon}</span>`;

      const customIcon = L.divIcon({
        className: 'custom-leaflet-div-icon',
        html: markerEl,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker(evt.coordinates, { icon: customIcon }).addTo(this.map);

      // Tooltip Hover (Weather Lab Style)
      const popupHtml = `
        <div class="event-hover-card">
          <div class="event-hover-title">${evt.countryName}</div>
          <div class="event-hover-cat">${evt.categoryLabel}</div>
          <div class="event-hover-time">${evt.timestamp}</div>
          <div class="event-stats-row">
            <span>Indicator:</span>
            <strong>${evt.title}</strong>
          </div>
          <div class="event-stats-row">
            <span>Actual:</span>
            <strong style="color: ${evt.haloColor}">${evt.actual}</strong>
          </div>
          <div class="event-stats-row">
            <span>Forecast / Prev:</span>
            <span>${evt.forecast} / ${evt.previous}</span>
          </div>
          <div class="card-footer-hint">Click event to open impact analysis & AI breakdown</div>
        </div>
      `;

      marker.bindTooltip(popupHtml, {
        sticky: true,
        className: 'leaflet-tooltip-macro',
        direction: 'top',
        offset: [0, -15]
      });

      // Hover shows temporary impact halo
      marker.on('mouseover', () => {
        this.showEventHalo(evt);
      });

      marker.on('mouseout', () => {
        if (!this.pinnedEvent || this.pinnedEvent.id !== evt.id) {
          this.removeEventHalo();
        }
      });

      marker.on('click', () => {
        this.pinnedEvent = evt;
        this.showEventHalo(evt, true);
        window.UIController.openEventDrawer(evt);
        this.map.flyTo(evt.coordinates, 5, { duration: 1.2 });
      });

      this.eventMarkers.push(marker);
    });
  }

  showEventHalo(evt, isPinned = false) {
    this.removeEventHalo();

    // 1. Concentric Radial Shock Rings (Google Weather style)
    const haloOuter = L.circle(evt.coordinates, {
      radius: evt.haloRadiusKm * 1000,
      color: evt.haloColor,
      fillColor: evt.haloColor,
      fillOpacity: 0.12,
      weight: 1.5,
      dashArray: '4, 6'
    }).addTo(this.map);

    const haloInner = L.circle(evt.coordinates, {
      radius: (evt.haloRadiusKm * 0.45) * 1000,
      color: evt.haloColor,
      fillColor: evt.haloColor,
      fillOpacity: 0.28,
      weight: 2
    }).addTo(this.map);

    this.activeHalos.push(haloOuter, haloInner);

    // 2. Vector Propagation Lines to trade/economic partners
    if (evt.propagationTargets) {
      evt.propagationTargets.forEach((target) => {
        const polyline = L.polyline([evt.coordinates, target.coords], {
          color: evt.haloColor,
          weight: target.intensity === 'High' ? 2.5 : 1.5,
          opacity: 0.75,
          dashArray: '6, 8'
        }).addTo(this.map);

        // Arrow Decorator / Target Pulse Point
        const targetMarker = L.circleMarker(target.coords, {
          radius: 5,
          color: evt.haloColor,
          fillColor: '#ffffff',
          fillOpacity: 1,
          weight: 2
        }).addTo(this.map);

        targetMarker.bindTooltip(`<b>${target.name}</b><br>${target.relation}`, {
          className: 'leaflet-tooltip-macro',
          direction: 'top'
        });

        this.propagationLines.push(polyline, targetMarker);
      });
    }
  }

  removeEventHalo() {
    this.activeHalos.forEach(h => this.map.removeLayer(h));
    this.activeHalos = [];
    this.propagationLines.forEach(l => this.map.removeLayer(l));
    this.propagationLines = [];
  }

  clearLayers() {
    this.eventMarkers.forEach(m => this.map.removeLayer(m));
    this.eventMarkers = [];
    this.removeEventHalo();
  }

  toggleVisibility(show) {
    this.isVisible = show;
    if (show) {
      this.renderEvents();
    } else {
      this.clearLayers();
    }
  }
}

window.EventRadar = new EventRadar();
