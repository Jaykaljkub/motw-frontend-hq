<template>
    <div class="profile">
      <h1>Profile</h1>
      <form @submit.prevent="updateProfile">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="user.username" id="username" disabled />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="user.email" id="email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" placeholder="New password" />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Profile',
    data() {
      return {
        user: {
          username: '',
          email: '',
        },
        password: '',
      };
    },
    mounted() {
      // Fetch user profile from the backend
      fetch('/api/profile')
        .then(response => response.json())
        .then(data => {
          this.user = data;
        })
        .catch(error => console.error('Error fetching profile:', error));
    },
    methods: {
      updateProfile() {
        // Update user profile logic here
        const updatedData = {
          email: this.user.email,
          password: this.password,
        };
        fetch('/api/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Profile updated:', data);
            alert('Profile updated successfully');
          })
          .catch(error => console.error('Error updating profile:', error));
      },
    },
  };
  </script>
  
  <style scoped>
  .profile {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  .profile form div {
    margin-bottom: 15px;
  }
  .profile label {
    display: block;
    margin-bottom: 5px;
  }
  .profile input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  </style>
  