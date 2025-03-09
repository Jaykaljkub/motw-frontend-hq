<template>
  <div class="home">
    <div class="grid-container">
      <div class="left-side-flair-top">
        <HomePageFlair></HomePageFlair>
      </div>
      <div class="left-side-flair-mid">
        <UnauthWidget v-if="!store.isAuthenticated"></UnauthWidget>
        <AcquisitionsWidget v-else></AcquisitionsWidget>
      </div>  
      <div class="left-side-flair-bot">
        <UnauthWidget v-if="!store.isAuthenticated"></UnauthWidget>
        <ReliquaryWidget v-else></ReliquaryWidget>
      </div>
      <div  v-if="!store.isAuthenticated" class="box-el-1 center-flair-top">
          <Login></Login>
      </div>
      <div v-else class="auth-center">
        <h1>COMING SOON</h1>
      </div>
      <div class="center-flair-mid-left">
        <UnauthWidget v-if="!store.isAuthenticated"></UnauthWidget>
        <MissionsWidget v-else ></MissionsWidget>
      </div>
      <div class="center-flair-mid-right">
        <UnauthWidget v-if="!store.isAuthenticated"></UnauthWidget>
        <OperationsWidget v-else></OperationsWidget>
      </div>
      <div class="right-side-flair-top">
        <UnauthWidget v-if="!store.isAuthenticated"></UnauthWidget>
        <PersonelWidget v-else></PersonelWidget>
      </div>
      <div class="right-side-flair-mid">
        <UnauthWidget v-if="!store.isAuthenticated"></UnauthWidget>
        <BeastiaryWidget v-else></BeastiaryWidget>
      </div>  
    </div>
  </div>
</template>

<script>
import { store } from '../scripts/store';
import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { RouterView } from 'vue-router';
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
import UnauthWidget from '../components/svgcomps/UnAuthWidget.vue'
import Login from './Login.vue';

export default {
  name: 'Home',
  setup() {
    const text = "The Night Sees Everything.";
    const splitText = ref(text.split(""));// Splitting text into letters
    const text2 = "In the darkness, we watch. In the silence, we act.";
    const splitText2 = ref(text2.split(""));// Splitting text into letters
    const lettersRef = ref(null); // Reference to the span container

  
    onMounted(async () => {
      await nextTick(); // Ensures Vue has finished rendering before GSAP runs

      var tl = gsap.timeline();
      tl.from(".letter", {
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.out",
        stagger: 0.05, // Controls the delay between each letter
      });
      tl.to('.link', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    function showModal() {
      gsap.to('.sign-in-modal', {
        visibility: 'visible',
        height: 'auto',
        duration: 0.6
      })
    }
    function closeModal() {
      gsap.to('.sign-in-modal', {
        height: 0,
        duration: 0.6,
        visibility : 'hidden',
      })
    }

    return { splitText, splitText2, lettersRef, store, showModal, closeModal };
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
    Login
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 20% 30% 30% 20%;
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 5px;
  padding: 5px;
  height: 100vh;
  width: 95vw;
}
/* line-based placement */
.left-side-flair-top { grid-column: 1 / 1; grid-row: 1 / 4; }
.left-side-flair-mid { grid-column: 1 / 1; grid-row: 4 / 7; }
.left-side-flair-bot { grid-column: 1 / 1; grid-row: 7 / 10; }
.left-side-flair-top,
.left-side-flair-mid,
.left-side-flair-bot { 
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.left-side-flair-mid {
  margin-top: 20px;
}
.center-flair-top { grid-column: 2 / 4; grid-row: 1 / 5; }
.center-flair-mid-left { grid-column: 2 / 2; grid-row: 5 / 11; }
.center-flair-mid-right { grid-column: 3 / 3; grid-row: 5 / 11; }
.right-side-flair-top { grid-column: 4 / 4; grid-row: 1 / 5; }
.right-side-flair-mid { grid-column: 4 / 4; grid-row: 5 / 11; }

.grid-container > div {
  text-align: center;
 
}
.grid-container > div::-webkit-scrollbar {
  display: none;
}
* { box-sizing: border-box; margin: 0; }
.sign-in-modal {
  visibility: hidden;
  height: 0;
  position: absolute;
  background-color: #1a1f2af2;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  border-radius: 15px;
  border: 1px solid  #b9943d;
  overflow: hidden;
}
.sign-in-modal .modal-logo {
  width: 150px;
}
.sign-in-modal .st0 {
  fill: #b9943d
} 
.sign-in-modal #close-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
}
.sign-in-modal #BG {
  fill: none;
}
/* Animation start for sign in */
.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave-from {
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  height: 0;
}
/* Animation end for sign in */
.main-logo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.home {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
  align-items: center;
}
.home-text {
  display: block;
  font-size: 2rem;
  font-weight: bold;
}
.home-text-subtitle {
  margin-top: 15px;
}
.letter {
  display: inline-block;
  opacity: 1;
}
.link {
  opacity: 0;
  transform: translateY(20px);
}
a {
  width: 200px;
  margin: 0 auto;
  margin-top: 30px;
  color: #b9943d;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
a.router-link-exact-active, a:hover {
  background-color: #b9943d;
  color: #0c0c0c;
}

.icon {
  width: 100px;
  height: 100px;
  display: block;
  fill: red;
}

</style>
