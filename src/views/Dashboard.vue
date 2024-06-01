<template>
  <div class="dashboard">
    <div class="header">
      <div class="avatar">
        <img src="" alt="Avatar">
      </div>
      <h1 class="title">Dashboard</h1>
    </div>
    <ul class="menu">
      <li><router-link to="/case-files">Case Files</router-link></li>
      <li><router-link to="/bestiary">Bestiary</router-link></li>
      <li><router-link to="/acquisitions">Acquisitions</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
    <div class="footer">
      <p>&copy; 2024 Your Company</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
.dashboard {
  background-color: #1e1e2f;
  color: #e0e0e0;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.avatar {
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.title {
  font-size: 24px;
  color: #ffd700;
}

.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin: 10px 0;
}

.menu li a {
  text-decoration: none;
  color: #ffd700;
  font-size: 18px;
}

.menu li a:hover {
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.footer {
  margin-top: 30px;
  font-size: 14px;
  color: #888;
}
</style>
