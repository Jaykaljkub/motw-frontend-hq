<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="store.isAuthenticated"><router-link to="/dashboard">Dashboard</router-link></li>
        <li v-if="store.isAuthenticated"><router-link to="/bestiary">Bestiary</router-link></li>
        <li v-if="store.isAuthenticated"><router-link to="/case-files">Case Files</router-link></li>
        <li v-if="store.isAuthenticated"><router-link to="/profile">Profile</router-link></li>
        <li v-if="!store.isAuthenticated"><router-link to="/login">Login</router-link></li>
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

export default {
  name: 'App',
  setup() {
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
  transform: translateX(-120px);
  opacity: 0;
}

#app {
  display: flex;
  font-family: 'Newsreader', sans-serif;
  color: #BDA567;
  width: 100%;
  background: #1A1F2A;
  min-height: 100vh;
}
nav {
  background: #1A1F2A;
  padding: 20px;
  min-width: 150px;
  min-height: 100vh;
  border-right: 1px solid #BDA567;
  position: relative;
  z-index: 2;
  /* box-shadow: 0 0 15px rgba(255, 215, 0, 0.3); */
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav li {
  margin-bottom: 10px;
}
nav a {
  color: #BDA567;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
nav a.router-link-exact-active, nav a:hover {
  background-color: #BDA567;
  color: #0c0c0c;
}
main {
  flex-grow: 1;
  padding: 20px;
  background: #1A1F2A;
  border-left: 1px solid #BDA567;
  /* box-shadow: inset 0 0 15px rgba(255, 215, 0, 0.3); */
  min-height: 100vh;
}
</style>
