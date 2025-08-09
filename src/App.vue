<template>
  <div id="app">
    <nav class="nav">
      <div class="nav-inner">
        <img
          src="/mw_logo.svg"
          class="logo"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen.toString()"
          aria-label="Toggle navigation"
          alt="Midnight Watch"
          tabindex="0"
        />

        <ul class="links desktop">
          <li><router-link to="/">Home</router-link></li>
          <li v-if="store.isAuthenticated"><router-link to="/dashboard">Dashboard</router-link></li>
          <li v-if="store.isAuthenticated"><router-link to="/bestiary">Bestiary</router-link></li>
          <li v-if="store.isAuthenticated"><router-link to="/case-files">Case Files</router-link></li>
          <li v-if="store.isAuthenticated"><router-link to="/profile">Profile</router-link></li>
          <li v-if="store.isAuthenticated"><a href="#" @click.prevent="logout">Logout</a></li>
        </ul>
      </div>

      <!-- Mobile flyout -->
      <transition name="menu-slide">
        <div v-if="menuOpen" class="mobile-panel" ref="mobilePanel">
          <ul class="links mobile">
            <li @click="closeMenu"><router-link to="/">Home</router-link></li>
            <li v-if="store.isAuthenticated" @click="closeMenu"><router-link to="/dashboard">Dashboard</router-link></li>
            <li v-if="store.isAuthenticated" @click="closeMenu"><router-link to="/bestiary">Bestiary</router-link></li>
            <li v-if="store.isAuthenticated" @click="closeMenu"><router-link to="/case-files">Case Files</router-link></li>
            <li v-if="store.isAuthenticated" @click="closeMenu"><router-link to="/profile">Profile</router-link></li>
            <li v-if="store.isAuthenticated"><a href="#" @click.prevent="logoutAndClose">Logout</a></li>
          </ul>
        </div>
      </transition>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
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
import { onMounted, onUnmounted, ref, watch } from 'vue';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

export default {
  name: 'App',
  setup(_, { emit, expose }) {
    gsap.registerPlugin(TextPlugin);
    const menuOpen = ref(false);
    const mobilePanel = ref(null);

    const closeMenu = () => { menuOpen.value = false; };

    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    const onResize = () => {
      if (window.matchMedia('(min-width: 900px)').matches) {
        // Ensure menu is closed when switching up to desktop layout
        menuOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', onKey);
      window.addEventListener('resize', onResize, { passive: true });
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    });

    return { store, menuOpen, mobilePanel, closeMenu };
  },
  methods: {
    logout() {
      this.$router.push('/');
      signOut(getAuth(this.app)).then(() => {
        store.logout();
      }).catch((error) => {
        console.error(error);
      });
    },
    logoutAndClose() {
      this.logout();
      this.closeMenu();
    }
  },
  watch: {
    // Close mobile menu on route change
    $route() {
      if (this.menuOpen) this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap');

:root {
  --gold: #b9943d;
  --ink: #0c0c0c;
  --nav-bg: #1a1f2a6e;
  --panel-bg: rgba(10, 12, 18, 0.82);
  --ring: rgba(185, 148, 61, 0.45);
}

body { margin: 0; }

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

/* Top nav */
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--nav-bg);
  border-bottom: 1px solid #b9943d;
  backdrop-filter: blur(6px);
}
.nav-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px;
  padding: 8px 14px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo */
.logo {
  width: 56px;
  height: 56px;
  transition: transform .25s ease;
  cursor: pointer;
  grid-column: 1;
  justify-self: start;
  border: 1px solid #b9943d;
  border-radius: 10px;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  /* Hamburger-like focus/hover/active styles */
  transition: background .25s ease, transform .2s ease;
}
.logo:hover { background: rgba(185,148,61,0.08); transform: scale(1.04) rotate(-1.5deg); }
.logo:active { transform: scale(0.98); }
.logo:focus-visible { box-shadow: 0 0 0 3px var(--ring); }
.logo.open { /* mimic hamburger open state if needed */ }

@media (min-width: 900px) {
  .logo { grid-column: 1; }
}

/* Desktop links */
.links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.links.desktop {
  display: none; /* hidden on mobile, shown >=900px */
  gap: 4px;
  justify-self: end;
  align-items: center;
}
.links li { display: flex; align-items: center; }

a {
  color: #b9943d;
  text-decoration: none;
  font-weight: 700;
  display: block;
  padding: 10px 12px;
  border-radius: 6px;
  transition: background-color .25s ease, color .25s ease, transform .15s ease;
  outline: none;
}
a:focus-visible {
  box-shadow: 0 0 0 2px var(--ring);
}
a.router-link-exact-active, a:hover {
  background-color: #b9943d;
  color: var(--ink);
  transform: translateY(-1px);
}

/* Hamburger button (no longer used, but kept for reference)
.hamburger {
  grid-column: 1;
  justify-self: start;
  width: 44px;
  height: 44px;
  border: 1px solid #b9943d;
  background: transparent;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: background .25s ease, transform .2s ease;
}
.hamburger:hover { background: rgba(185,148,61,0.08); }
.hamburger:active { transform: scale(0.98); }
.hamburger:focus-visible { box-shadow: 0 0 0 3px var(--ring); }

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #b9943d;
  border-radius: 2px;
  transition: transform .25s ease, opacity .2s ease, width .25s ease;
}
.hamburger span:nth-child(1) { transform-origin: 4px 1px; }
.hamburger span:nth-child(3) { transform-origin: 4px 1px; }

.hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; width: 6px; }
.hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
*/

/* Mobile panel */
.mobile-panel {
  position: absolute;
  inset: 64px 10px auto 10px;
  background: var(--panel-bg);
  border: 1px solid #b9943d;
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.45);
  overflow: hidden;
  /* Fix for backdrop-filter not working in some browsers: add vendor prefixes and ensure background is semi-transparent */
  background: rgba(24, 24, 24, 0.85); /* fallback for var(--panel-bg) if not semi-transparent */
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  /* For Safari: force stacking context */
  will-change: backdrop-filter;
}
.links.mobile {
  display: grid;
  gap: 4px;
  padding: 10px;
}
.links.mobile a {
  width: 100%;
  padding: 12px 14px;
  color: #b9943d !important;
}

/* Panel transition */
.menu-slide-enter-from { opacity: 0; transform: translateY(-8px) scale(0.98); }
.menu-slide-enter-active { transition: all .22s ease; }
.menu-slide-leave-to { opacity: 0; transform: translateY(-8px) scale(0.98); }
.menu-slide-leave-active { transition: all .18s ease; }

/* Route view transition (kept from your code) */
.slide-fade-enter-active { transition: all 0.3s ease-out 0.3s; }
.slide-fade-leave-active { transition: all 0.3s ease-out; }
.slide-fade-enter-from,
.slide-fade-leave-to { transform: translateY(120px); opacity: 0; }

/* Main */
main {
  flex-grow: 1;
  padding: 20px;
  min-height: 100vh;
}

/* Breakpoints */
@media (min-width: 900px) {
  /* .hamburger { display: none; } */
  .logo { grid-column: 1; }
  .links.desktop {
    display: flex;
  }
  .mobile-panel { display: none; }
}
</style>
