<template>
  <div id="map" style="height: 400px;"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon for Vite/Webpack
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

export default {
  props: ['chargers'],
  data() {
    return {
      map: null,
      markers: []
    };
  },
  mounted() {
    this.map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    this.renderMarkers(this.chargers);
  },
  watch: {
    chargers: {
      handler(newChargerList) {
        this.renderMarkers(newChargerList);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    renderMarkers(chargers) {
      this.markers.forEach(m => this.map.removeLayer(m));
      this.markers = [];

      chargers.forEach(c => {
        const lat = parseFloat(c.location_lat);
        const lng = parseFloat(c.location_lng);
        if (!isNaN(lat) && !isNaN(lng)) {
          const marker = L.marker([lat, lng])
            .addTo(this.map)
            .bindPopup(`<b>${c.name}</b><br>${c.status} - ${c.power_output}kW`);
          this.markers.push(marker);
        }
      });
    }
  }
};
</script>


<style scoped>
#map {
  height: 400px;
  width: 100%;
}
</style>
