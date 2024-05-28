<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <!-- <li><router-link to="/dashboard">Dashboard</router-link></li> -->
          <li><router-link to="/case-files">Case Files</router-link></li>
          <li><router-link to="/knowledge-base">Knowledge Base</router-link></li>
          <li><router-link to="/acquisitions">Acquisitions</router-link></li>
          <li><router-link to="/inventory">Inventory</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2024 Monster of the Week Portal</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #35495e;
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

main {
  padding: 20px;
}

footer {
  background-color: #35495e;
  color: #fff;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
