<template>
  <div class="home">
    <div class="grid-container">
      <!-- Left column stack -->
      <div class="left-side-flair-top">
        <HomePageFlair />
      </div>

      <div class="left-side-flair-mid">
        <UnauthWidget v-if="!store.isAuthenticated" />
        <AcquisitionsWidget v-else />
      </div>

      <div class="left-side-flair-bot">
        <UnauthWidget v-if="!store.isAuthenticated" />
        <ReliquaryWidget v-else />
      </div>

      <!-- Center top (login or main hub) -->
      <div v-if="!store.isAuthenticated" class="center-flair-top">
        <div class="login-wrap">
          <Login />
        </div>
      </div>
      <div v-else class="auth-center">
        <HomePageWidget />
      </div>

      <!-- Center mid -->
      <div class="center-flair-mid-left">
        <UnauthWidget v-if="!store.isAuthenticated" />
        <MissionsWidget v-else />
      </div>

      <div class="center-flair-mid-right">
        <UnauthWidget v-if="!store.isAuthenticated" />
        <OperationsWidget v-else />
      </div>

      <!-- Right column stack -->
      <div class="right-side-flair-top">
        <UnauthWidget v-if="!store.isAuthenticated" />
        <PersonelWidget v-else />
      </div>

      <div class="right-side-flair-mid">
        <UnauthWidget v-if="!store.isAuthenticated" />
        <BeastiaryWidget v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../scripts/store';
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';

import CaseFiles from '../components/CaseFiles.vue';
import Bestiary from '../components/Bestiary.vue';
import Profile from '../components/Profile.vue';

import UnAuthBackGr from '../components/svgcomps/UnAuthBck.vue';
import HomePageFlair from '../components/svgcomps/HomePageFlair.vue';
import AcquisitionsWidget from '../components/svgcomps/AcquisitionsWidget.vue';
import ReliquaryWidget from '../components/svgcomps/ReliquaryWidget.vue';
import MissionsWidget from '../components/svgcomps/MissionWidget.vue';
import OperationsWidget from '../components/svgcomps/OperationsWidget.vue';
import PersonelWidget from '../components/svgcomps/PersonelWidget.vue';
import BeastiaryWidget from '../components/svgcomps/BeastiaryWidget.vue';
import UnauthWidget from '../components/svgcomps/UnAuthWidget.vue';
import Login from './Login.vue';
import HomePageWidget from '../components/svgcomps/HomePageWidget.vue';

export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      await nextTick();
      // place any entrance animations if needed
    });

    function showModal() {
      gsap.to('.sign-in-modal', {
        visibility: 'visible',
        height: 'auto',
        duration: 0.6
      });
    }

    return { store, showModal };
  },
  components: {
    HomePageFlair,
    CaseFiles,
    Bestiary,
    Profile,
    UnAuthBackGr,
    AcquisitionsWidget,
    ReliquaryWidget,
    MissionsWidget,
    OperationsWidget,
    PersonelWidget,
    BeastiaryWidget,
    UnauthWidget,
    Login,
    HomePageWidget
  }
};
</script>

<style scoped>
/* Layout shell */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 40px;
}

/* Named-area grid */
.grid-container {
  display: grid;
  gap: 8px;
  width: 95vw;
  max-width: 1275px;
  grid-template-columns: 20% 1fr 1fr 20%;
  grid-template-rows: auto;
  grid-template-areas:
    "left-top center-top center-top right-top"
    "left-top center-top center-top right-top"
    "left-mid center-left center-right right-mid"
    "left-bot center-left center-right right-mid";
}

/* Grid areas */
.left-side-flair-top   { grid-area: left-top; }
.left-side-flair-mid   { grid-area: left-mid; }
.left-side-flair-bot   { grid-area: left-bot; }
.center-flair-top      { grid-area: center-top; }
.auth-center           { grid-area: center-top; }
.center-flair-mid-left { grid-area: center-left; }
.center-flair-mid-right{ grid-area: center-right; }
.right-side-flair-top  { grid-area: right-top; }
.right-side-flair-mid  { grid-area: right-mid; }

/* Common widget container styling */
.grid-container > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  min-width: 0; /* prevents overflow on responsive shrink */
}

/* Center + size the login card */
.login-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.login-wrap > * {
  width: min(100%, 520px);
  max-width: 100%;
}

/* Make SVGs inside responsive */
:deep(svg) {
  max-width: 100%;
  height: auto;
}

/* Tablet breakpoint: collapse to 2 cols */
@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "center-top center-top"
      "left-top right-top"
      "left-mid right-mid"
      "center-left center-right"
      "left-bot left-bot";
  }
}

/* Mobile-first stacking & centering */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "center-top"
      "left-top"
      "left-mid"
      "left-bot"
      "center-left"
      "center-right"
      "right-top"
      "right-mid";
    /* Allow grid rows to expand to fit content */
    grid-auto-rows: 1fr;
  }

  .grid-container > div {
    width: 100%;
    min-height: 0;
    min-height: 100%;
    height: 100%;
    align-items: stretch;
    justify-content: stretch;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .home {
    padding-block: 20px;
    height: 100%;
  }

  .login-wrap {
    padding-inline: 16px;
    width: 100%;
    height: 100%;
  }
}

/* Very small devices */
@media (max-width: 420px) {
  .login-wrap > * {
    width: 100%;
  }
}
</style>

