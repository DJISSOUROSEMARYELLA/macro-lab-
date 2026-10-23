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

    // 2. Vector Curved Propagation Arcs to trade/economic partners (Bézier curves)
    if (evt.propagationTargets) {
      evt.propagationTargets.forEach((target) => {
        const curvePoints = this.computeBezierPoints(evt.coordinates, target.coords);
        
        const polyline = L.polyline(curvePoints, {
          color: evt.haloColor,
          weight: target.intensity === 'High' ? 3 : 2,
          opacity: 0.85,
          dashArray: '8, 8',
          className: 'bezier-shock-arc'
        }).addTo(this.map);

        // Tooltip on arc hover
        polyline.bindTooltip(`
          <div style="font-family: var(--g-font-family); font-size: 12px; padding: 4px;">
            <strong>${evt.countryName} ➔ ${target.name}</strong><br>
            <span style="color: var(--g-text-secondary); font-size: 11px;">Canal: ${target.relation}</span><br>
            <span style="color: #1a73e8; font-size: 10px; font-weight: 600;">Cliquez pour analyser la transmission</span>
          </div>
        `, {
          sticky: true,
          className: 'leaflet-tooltip-macro'
        });

        polyline.on('click', () => {
          window.UIController.showArcDetail(evt, target);
        });

        polyline.on('mouseover', () => {
          polyline.setStyle({ weight: 4.5, opacity: 1 });
        });

        polyline.on('mouseout', () => {
          polyline.setStyle({ weight: target.intensity === 'High' ? 3 : 2, opacity: 0.85 });
        });

        // Target Pulse Marker at destination
        const targetMarker = L.circleMarker(target.coords, {
          radius: 5.5,
          color: evt.haloColor,
          fillColor: '#ffffff',
          fillOpacity: 1,
          weight: 2.5
        }).addTo(this.map);

        targetMarker.bindTooltip(`<b>${target.name}</b><br>${target.relation}`, {
          className: 'leaflet-tooltip-macro',
          direction: 'top'
        });

        targetMarker.on('click', () => {
          window.UIController.showArcDetail(evt, target);
        });

        this.propagationLines.push(polyline, targetMarker);
      });
    }
  }

  computeBezierPoints(start, end, curvature = 0.22, numPoints = 28) {
    const lat1 = start[0], lng1 = start[1];
    const lat2 = end[0], lng2 = end[1];

    let adjLng2 = lng2;
    if (adjLng2 - lng1 > 180) adjLng2 -= 360;
    else if (lng1 - adjLng2 > 180) adjLng2 += 360;

    const midLat = (lat1 + lat2) / 2;
    const midLng = (lng1 + adjLng2) / 2;

    const dLat = lat2 - lat1;
    const dLng = adjLng2 - lng1;

    // Curved normal vector offset
    const normLat = -dLng * curvature;
    const normLng = dLat * curvature;

    const ctrlLat = midLat + normLat;
    const ctrlLng = midLng + normLng;

    const points = [];
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const invT = 1 - t;
      const lat = invT * invT * lat1 + 2 * invT * t * ctrlLat + t * t * lat2;
      let lng = invT * invT * lng1 + 2 * invT * t * ctrlLng + t * t * adjLng2;
      points.push([lat, lng]);
    }
    return points;
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
