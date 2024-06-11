<template>
    <div class="home">
      <h1>Welcome to The Midnight Watch</h1>
      <router-link to="/Login">Login</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  a:-webkit-any-link {
    color: #BDA567;
  }
  a:-webkit-any-link:hover {
    color: #F8E5AB;
  }
  </style>
  