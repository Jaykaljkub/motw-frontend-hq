<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <ul>
        <li><router-link to="/case-files">Case Files</router-link></li>
        <li><router-link to="/knowledge-base">Knowledge Base</router-link></li>
        <li><router-link to="/acquisitions">Acquisitions</router-link></li>
        <li><router-link to="/inventory">Inventory</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
    margin-top: 50px;
  }
  .dashboard ul {
    list-style-type: none;
    padding: 0;
  }
  .dashboard li {
    margin: 10px 0;
  }
  </style>
  