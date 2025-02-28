<template>
  <div class="dashboard">
    <div class="header">
      <h1 class="title">Dashboard</h1>
    </div>
    <ul class="menu">
      <li><router-link to="/case-files">Case Files</router-link></li>
      <li><router-link to="/bestiary">Bestiary</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
    <main>
      <div class="dashboard-sections">
        <div class="dashboard-section">
          <case-files></case-files>
        </div>
        <div class="dashboard-section">
          <profile></profile>
        </div>
        <div class="dashboard-section">
          <bestiary></bestiary>
        </div>
      </div>
    </main>
    <div class="footer">
      <p>&copy; 2024 The Night Watch</p>
    </div>
  </div>
</template>

<script>
import CaseFiles from '../components/CaseFiles.vue';
import Bestiary from '../components/Bestiary.vue';
import Profile from '../components/Profile.vue';

export default {
  name: 'Dashboard',
  components: {
    CaseFiles,
    Bestiary,
    Profile
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.dashboard {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1a1f2a6e;
  border: 1px solid #b9943d;
  border-radius: 8px;
  font-family: 'Newsreader', monospace;
  color: #b9943d;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.title {
  font-size: 36px;
  text-transform: uppercase;
  color: #b9943d;
}

.menu {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  text-align: center;
}

.menu li {
  display: inline-block;
  margin-right: 20px;
}

.menu li a {
  text-decoration: none;
  color: #b9943d;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.menu li a.router-link-exact-active, .menu li a:hover {
  background-color: #b9943d;
  color: #1a1f2a6e;
}

.dashboard-sections {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.dashboard-section {
  min-width: 300px;
  margin-bottom: 10px;
  padding: 20px;
  /* border: 1px solid #b9943d; */
  border-radius: 4px;
}

.footer {
  margin-top: 30px;
  font-size: 14px;
  color: #888;
  text-align: center;
}
</style>
