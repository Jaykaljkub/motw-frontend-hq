<template>
    <div class="homewidget">
      <div ref="globeWrap" class="globe-holder">
        <div ref="globeDiv" class="globe-canvas"></div>
  
        <!-- Overlay content -->
        <div class="midnight-message">
          <div class="date">
            <div class="day">{{ day }}</div>
            <div class="month-year">{{ monthYear }}</div>
          </div>
          <div class="message">{{ homeMessage }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Globe from 'globe.gl';
  import rawjsonData from '@/assets/dataset/ne_110m_populated_places_simple.geojson?raw';
  
  const globeWrap = ref(null);
  const globeDiv = ref(null);
  
  const homeMessage = 'In the darkness, we watch. In the silence, we act.';
  const thisDate = new Date().toDateString().split(' ');
  const day = `${thisDate[0]}day`;
  const monthYear = `${thisDate[1]} ${thisDate[2]}, ${thisDate[3]}`;
  
  let myGlobe = null;
  let resizeObs = null;
  
  const geojsonData = JSON.parse(rawjsonData);
  const N = 10;
  const ringsData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    maxR: Math.random() * 10 + 3,
    propagationSpeed: 1,
    repeatPeriod: 2000
  }));
  
  onMounted(() => {
    const colorInterpolator = t => `rgba(255,100,50,${Math.sqrt(1 - t)})`;
  
    myGlobe = Globe()(globeDiv.value)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .atmosphereColor('#b9943d')
      .showGraticules(true)
      .labelsData(geojsonData.features)
      .labelLat(d => d.geometry.coordinates[1])
      .labelLng(d => d.geometry.coordinates[0])
      .labelText(d => d.properties.name)
      .labelSize(d => Math.sqrt(d.properties.pop_max || 1) * 4e-4)
      .labelColor(() => 'rgba(255, 165, 0, 0.75)')
      .labelResolution(2)
      .ringsData(ringsData)
      .ringColor(() => colorInterpolator)
      .ringMaxRadius('maxR')
      .ringPropagationSpeed('propagationSpeed')
      .ringRepeatPeriod('repeatPeriod');
  
    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 0.5;
  
    const fitToParent = () => {
      const { width, height } = globeWrap.value.getBoundingClientRect();
      myGlobe.width(width).height(height);
    };
  
    resizeObs = new ResizeObserver(fitToParent);
    resizeObs.observe(globeWrap.value);
    fitToParent();
  });
  
  onUnmounted(() => {
    if (resizeObs) resizeObs.disconnect();
    myGlobe = null;
  });
  </script>
  
  <style scoped>
  .homewidget {
    width: 100%;
    max-width: 620px;
    margin: 0 auto;
  }
  
  .globe-holder {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1; /* keeps globe square */
  }
  
  .globe-canvas {
    position: absolute;
    inset: 0;
  }
  
  .midnight-message {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    pointer-events: none;
  }
  
  .date {
    font-size: clamp(14px, 2vw, 20px);
    color: #fff;
    margin-bottom: 0.5rem;
  }
  
  .message {
    font-size: clamp(12px, 1.5vw, 14px);
    max-width: 160px;
    color: #fff;
  }
  @media (max-width: 768px) {
    .homewidget {
      max-width: 100% !important;
      width: 100% !important;
      margin: 0 !important;
    }
    .globe-holder {
      width: 100% !important;
      aspect-ratio: 1 / 1 !important;
      max-width: 100vw !important;
      max-height: 100vw !important;
    }
    .globe-canvas {
      width: 100% !important;
      height: 100% !important;
      max-width: 100vw !important;
      max-height: 100vw !important;
      left: 0 !important;
      top: 0 !important;
    }
  }
  @media (max-width: 480px) {
    .midnight-message {
      align-items: center;
      text-align: center;
    }
    .message {
      max-width: 100%;
    }
  }
  </style>
  