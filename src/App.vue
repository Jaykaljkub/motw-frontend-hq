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
      <router-view />
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

#app {
  display: flex;
  font-family: 'Major Mono Display', sans-serif;
  color: #BDA567;
  width: 100%;
  background: #1A1F2A;
  min-height: 100vh;
}

nav {
  background: #1A1F2A;
  padding: 20px;
  width: 200px;
  min-height: 100vh;
  border-right: 1px solid #BDA567;
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
