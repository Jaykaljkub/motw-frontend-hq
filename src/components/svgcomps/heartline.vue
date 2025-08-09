<!-- Heartline.vue -->
<template>
    <div class="ekg-wrap" :style="wrapStyle" aria-hidden="true">
      <!-- faint grid for flavor; remove if you don't want it -->
      <svg class="ekg-grid" :viewBox="`0 0 ${w} ${h}`" :width="w" :height="h" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" :width="gridGap" :height="gridGap" patternUnits="userSpaceOnUse">
            <path :d="`M ${gridGap} 0 L 0 0 0 ${gridGap}`" :stroke="gridColor" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect :width="w" :height="h" fill="url(#grid)"/>
      </svg>
  
      <!-- sweep glow -->
      <div class="sweep"></div>
  
      <!-- the animated path -->
      <svg class="ekg-line" :viewBox="viewBox" :width="w" :height="h" preserveAspectRatio="none">
        <defs>
          <!-- soft outer glow -->
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
  
        <path
          ref="pathEl"
          :d="d"
          :stroke="color"
          :stroke-opacity="0.9"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          filter="url(#glow)"
          pathLength="1000"
          class="trace"
        />
      </svg>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, computed } from 'vue'
  
  const props = defineProps({
    /** your long SVG path (the one you pasted) */
    d: { type: String, required: true },
    /** width / height of the viewport in px */
    w: { type: Number, default: 300 },
    h: { type: Number, default: 40 },
    /** line color (Bestiary uses red accents) */
    color: { type: String, default: '#DD1920' },
    /** seconds for one sweep */
    duration: { type: Number, default: 2.2 },
    /** line width */
    strokeWidth: { type: Number, default: 1.5 },
    /** grid */
    showGrid: { type: Boolean, default: true },
    gridGap: { type: Number, default: 8 },
    gridColor: { type: String, default: 'rgba(221, 25, 32, 0.08)' },
    /** padding/bg */
    bg: { type: String, default: 'rgba(221,25,32,0.06)' },
    radius: { type: Number, default: 8 }
  })
  
  const pathEl = ref(null)
  
  const viewBox = computed(() => {
    // if your path’s coordinates aren’t 0..w,0..h, you can widen this:
    return `0 0 ${props.w} ${props.h}`
  })
  
  const wrapStyle = computed(() => ({
    '--duration': `${props.duration}s`,
    '--line-color': props.color,
    '--path-length': 1000, // normalized via pathLength
    '--bg': props.bg,
    borderRadius: `${props.radius}px`
  }))
  
  onMounted(() => {
    // if you ever need the *real* length, uncomment:
    // const len = pathEl.value?.getTotalLength?.() ?? 1000
    // pathEl.value.style.strokeDasharray = len
    // pathEl.value.style.strokeDashoffset = len
  })
  </script>
  
  <style scoped>
  .ekg-wrap {
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, transparent, var(--bg) 40%, transparent);
    border: 1px solid rgba(221,25,32,0.18);
  }
  
  .ekg-grid {
    position: absolute;
    inset: 0;
    opacity: v-bind('showGrid ? 1 : 0');
  }
  
  .ekg-line {
    position: relative;
    display: block;
  }
  
  /* draw-on effect */
  .trace {
    stroke-dasharray: var(--path-length);
    stroke-dashoffset: var(--path-length);
    animation: dash var(--duration) linear infinite, glowpulse 3.6s ease-in-out infinite;
    filter: drop-shadow(0 0 6px color-mix(in srgb, var(--line-color) 50%, transparent));
  }
  
  /* sweeping highlight bar */
  .sweep {
    position: absolute;
    top: 0; bottom: 0;
    width: 18%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
    mix-blend-mode: screen;
    animation: sweep var(--duration) linear infinite;
    pointer-events: none;
  }
  
  @keyframes dash {
    to { stroke-dashoffset: 0; }
  }
  @keyframes sweep {
    from { transform: translateX(-20%); }
    to   { transform: translateX(120%); }
  }
  @keyframes glowpulse {
    0%,100% { filter: drop-shadow(0 0 3px rgba(221,25,32,0.35)); }
    50%     { filter: drop-shadow(0 0 7px rgba(221,25,32,0.65)); }
  }
  
  /* accessibility */
  @media (prefers-reduced-motion: reduce) {
    .trace, .sweep { animation: none; }
    .trace { stroke-dashoffset: 0; }
  }
  </style>
  