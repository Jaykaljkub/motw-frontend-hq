<template>
  <div class="profile">
    <h1>Hunter Profile</h1>
    <form @submit.prevent="saveProfile">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="profile.name" id="name" required />
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" v-model="profile.age" id="age" required />
      </div>
      <div class="form-group">
        <label for="background">Background:</label>
        <textarea v-model="profile.background" id="background" required></textarea>
      </div>
      <div class="form-group">
        <label for="playbook">Playbook:</label>
        <select v-model="profile.playbook" id="playbook" @change="selectPlaybook">
          <option v-for="playbook in playbooks" :key="playbook.name" :value="playbook.name">{{ playbook.name }}</option>
        </select>
      </div>
      <div v-if="selectedPlaybook">
        <div class="playbook-details">
          <h2>{{ selectedPlaybook.name }}</h2>
          <p>{{ selectedPlaybook.description }}</p>
          <h3>Moves:</h3>
          <ul>
            <li v-for="move in selectedPlaybook.moves" :key="move.name">
              <strong>{{ move.name }}</strong>: {{ move.description }}
            </li>
          </ul>
          <h3>Gear:</h3>
          <ul>
            <li v-for="gearItem in selectedPlaybook.gear" :key="gearItem">{{ gearItem }}</li>
          </ul>
          <h3>Ratings:</h3>
          <ul>
            <li v-for="rating in selectedPlaybook.ratings" :key="rating">{{ rating }}</li>
          </ul>
          <h3>Special:</h3>
          <p>{{ selectedPlaybook.special }}</p>
        </div>
      </div>
      <button type="submit">Save Profile</button>
    </form>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import Config from '../config';
import { playbooks } from '../scripts/playbooks';
import { store } from '../scripts/store';

export default {
  name: 'Profile',
  data() {
    return {
      profile: {
        name: '',
        age: '',
        background: '',
        playbook: ''
      },
      playbooks,
      selectedPlaybook: null,
      db: null,
      userId: localStorage.getItem('motw-uid')
    };
  },
  created() {
    this.app = initializeApp(Config.firebaseConfig);
    this.db = getDatabase(this.app);
    this.fetchProfile();
  },
  methods: {
    fetchProfile() {
      const profileRef = ref(this.db, 'profiles/' + this.userId);
      get(profileRef).then((snapshot) => {
        if (snapshot.exists()) {
          this.profile = snapshot.val();
          this.selectPlaybook();
        } else {
          console.log("No profile data available");
        }
      }).catch((error) => {
        console.error('Error fetching profile:', error);
      });
    },
    saveProfile() {
      const profileRef = ref(this.db, 'profiles/' + this.userId);
      set(profileRef, this.profile).catch(error => {
        console.error('Error saving profile:', error);
      });
    },
    selectPlaybook() {
      this.selectedPlaybook = this.playbooks.find(playbook => playbook.name === this.profile.playbook);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.profile {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1A1F2A;
  border: 1px solid #BDA567;
  border-radius: 8px;
  font-family: 'Major Mono Display', monospace;
  color: #BDA567;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
}
h1, h2, h3 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #BDA567;
}
form {
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #BDA567;
}
input[type="text"],
input[type="number"],
textarea,
select {
  width: 95%;
  padding: 8px;
  border: 1px solid #BDA567;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #BDA567;
  font-family: 'Major Mono Display', monospace;
}
button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #BDA567;
  color: #1A1F2A;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #F8E5AB;
}
.playbook-details {
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  background-color: #1A1F2A;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #BDA567;
  border-radius: 4px;
  font-family: 'Major Mono Display', monospace;
}
</style>
