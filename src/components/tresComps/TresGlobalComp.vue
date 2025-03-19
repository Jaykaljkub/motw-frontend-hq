<template>
  <div ref="globeDiv" style="width: 100%; height: auto;"></div>
</template>

<script setup>
import Globe from 'globe.gl';
import { ref, onMounted } from 'vue';
import rawjsonData from '@/assets/dataset/ne_110m_populated_places_simple.geojson?raw';

const globeDiv = ref(null);
var geojsonData = JSON.parse(rawjsonData);

const N = 10;
const gData = [...Array(N).keys()].map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  maxR: Math.random() * 10 + 3,
  propagationSpeed: 1,
  repeatPeriod: 2000
}));

onMounted(() => {
  if (globeDiv.value) {
    const colorInterpolator = t => `rgba(255,100,50,${Math.sqrt(1-t)})`;
    const myGlobe = Globe()(globeDiv.value) // Corrected instantiation
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .atmosphereColor('#b9943d')
      .width(300)
      .height(300)
      .showGraticules(true)
      .labelsData(geojsonData.features)
      .labelLat(d => d.geometry.coordinates[1]) // Corrected GeoJSON access
      .labelLng(d => d.geometry.coordinates[0]) // Corrected GeoJSON access
      .labelText(d => d.properties.name)
      .labelSize(d => Math.sqrt(d.properties.pop_max || 1) * 4e-4) // Added safety check
      .labelColor(() => 'rgba(255, 165, 0, 0.75)')
      .labelResolution(2)
      .ringsData(gData)
      .ringColor(() => colorInterpolator)
      .ringMaxRadius('maxR')
      .ringPropagationSpeed('propagationSpeed')
      .ringRepeatPeriod('repeatPeriod');
    myGlobe.controls().autoRotate = true;  
    myGlobe.controls().autoRotateSpeed = 0.5;  
  }
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
