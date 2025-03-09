<template>
  <div id="app">
    <nav>
      <img src="../src/assets/svgs/Midnight Watch.svg" @click="toggleTimeline">
      <ul>
        <li ><router-link to="/">Home</router-link></li>
        <li v-if="store.isAuthenticated"><router-link to="/dashboard">Dashboard</router-link></li>
        <li v-if="store.isAuthenticated"><router-link to="/bestiary">Bestiary</router-link></li>
        <li v-if="store.isAuthenticated"><router-link to="/case-files">Case Files</router-link></li>
        <li v-if="store.isAuthenticated"><router-link to="/profile">Profile</router-link></li>
        <!-- <li v-if="!store.isAuthenticated"><router-link to="/login">Login</router-link></li> -->
        <li v-if="store.isAuthenticated"><a href="#" @click="logout">Logout</a></li>
      </ul>
    </nav>
    <main>
      <router-view v-slot="{Component}">
        <transition name="slide-fade">
          <Component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import { store } from './scripts/store';
import { signOut, getAuth } from "firebase/auth";
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

export default {
  name: 'App',
  setup() {
    gsap.registerPlugin(TextPlugin);
   
    return { store };
  },
  methods: {
    logout() {
      store.logout();
      this.$router.push('/');
      signOut(getAuth(this.app)).then(() => {
        store.logout();
      }).catch((error) => {
        console.error(error);
      });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap');

.slide-fade-enter-active {
  transition: all 0.3s ease-out 0.3s;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out ;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(120px);
  opacity: 0;
}
body {
  margin: 0;
}
#app {
  display: flex;
  font-family: 'Newsreader', sans-serif;
  color: #b9943d;
  width: 100%;
  background-image: url('../src/assets/backgrounds/BG_Hero-CLmz8Hzx.webp');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  flex-direction: column;
}
nav {
  display: flex;
  justify-items: center;
  background: #1a1f2a6e;
  border-bottom: 1px solid #b9943d;
  position: relative;
  z-index: 2;
  /* box-shadow: 0 0 15px rgba(255, 215, 0, 0.3); */
}
nav ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
nav li {
  display: flex;
  margin-bottom: 0px;
  align-items: center;
}
nav a {
  color: #b9943d;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
nav a.router-link-exact-active, nav a:hover {
  background-color: #b9943d;
  color: #0c0c0c;
}
nav img {
  width: 60px;
  height: 60px;
}
main {
  flex-grow: 1;
  padding: 20px;
  /* background: #1a1f2a6e; */
  /* box-shadow: inset 0 0 15px rgba(255, 215, 0, 0.3); */
  min-height: 100vh;
}
</style>
