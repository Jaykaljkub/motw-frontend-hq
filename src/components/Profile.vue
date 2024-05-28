<template>
  <div class="profile">
    <h1>Hunter Profile</h1>
    <form @submit.prevent="saveProfile">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="profile.name" id="name" required />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" v-model="profile.age" id="age" required />
      </div>
      <div>
        <label for="background">Background:</label>
        <textarea v-model="profile.background" id="background" required></textarea>
      </div>
      <div>
        <label for="playbook">Playbook:</label>
        <select v-model="profile.playbook" id="playbook" @change="selectPlaybook">
          <option v-for="playbook in playbooks" :key="playbook.name" :value="playbook.name">{{ playbook.name }}</option>
        </select>
      </div>
      <div v-if="selectedPlaybook">
        <h2>{{ selectedPlaybook.name }}</h2>
        <p>{{ selectedPlaybook.description }}</p>
        <h3>Moves:</h3>
        <ul>
          <li v-for="move in selectedPlaybook.moves" :key="move">{{ move }}</li>
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
      userId: localStorage.getItem('motw-uid')// Replace with actual user ID
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
.profile {
  max-width: 600px;
  margin: 50px auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
}
form {
  margin-bottom: 20px;
}
form div {
  margin-bottom: 10px;
}
</style>
