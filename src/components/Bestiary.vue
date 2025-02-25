<template>
  <div class="bestiary">
    <div class="header">
      <h1>Bestiary</h1>
    </div>
    <div class="content">
      <div v-if="isAdmin">
        <edit-beast :beastToEdit="beastToEdit" @saved="fetchBeasts" />
      </div>

      <div v-if="beasts.length">
        <h2>Beasts</h2>
        <ul>
          <li v-for="beast in beasts" :key="beast.id" class="beast-item">
            {{ checkVisibility(beast) }}
            <div v-if="!beast.entryVisible">
              <input v-model="beast.entryPasswordInput" type="password" placeholder="Enter password to view beast">
              <button @click="unlockEntry(beast)">Unlock Beast</button>
            </div>
            <div v-if="beast.entryVisible">
              <h3>{{ beast.name }}</h3>
              <img :src="beast.image" :alt="beast.name">
              <p>{{ beast.description }}</p>
              <div v-if="beast.details && !beast.detailsVisible">
                <input v-model="beast.detailsPasswordInput" type="password" placeholder="Enter password to view details">
                <button @click="unlockDetails(beast)">Unlock Details</button>
              </div>
              <div v-if="beast.detailsVisible">
                <p>Details: {{ beast.details }}</p>
              </div>
              <p v-if="beast.detailsVisible">Stats: {{ beast.stats }}</p>
              <div v-if="isAdmin">
                <button @click="editBeast(beast)">Edit</button>
                <button @click="deleteBeast(beast.id)">Delete</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, remove } from "firebase/database";
import Config from '../config';
import EditBeast from './EditBeast.vue';
import { store } from '../scripts/store';
import { setCookie, getCookie } from '../scripts/helperFunctions';

export default {
  name: 'Bestiary',
  components: {
    EditBeast
  },
  data() {
    return {
      beasts: [],
      beastToEdit: null,
      db: null,
      isAdmin: store.isAdmin // Replace with actual admin check
    };
  },
  created() {
    this.app = initializeApp(Config.firebaseConfig);
    this.db = getDatabase(this.app);
    this.fetchBeasts();
    this.checkAdmin(); // Implement this method based on your auth logic
  },
  methods: {
    fetchBeasts() {
      const beastsRef = ref(this.db, 'bestiary');
      get(beastsRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          this.beasts = Object.keys(data).map(key => ({
            id: key,
            ...data[key],
            detailsVisible: false,
            entryVisible: !data[key].entryPassword,
            entryPasswordInput: '',
            detailsPasswordInput: ''
          }));
        }
      }).catch((error) => {
        console.error('Error fetching beasts:', error);
      });
    },
    editBeast(beast) {
      this.beastToEdit = { ...beast };
    },
    deleteBeast(id) {
      const beastRef = ref(this.db, 'bestiary/' + id);
      remove(beastRef).then(() => {
        this.fetchBeasts();
      }).catch((error) => {
        console.error('Error deleting beast:', error);
      });
    },
    checkAdmin() {
      console.log('Admin check', store.isAdmin);
      this.isAdmin = store.isAdmin; // Replace this with actual admin check logic
    },
    checkVisibility(beast){
      getCookie(beast.id);
      console.log(getCookie(beast.id));
      if(getCookie(beast.id) != null) {
        if(getCookie(beast.id).indexOf('detailsVisible') > -1){
          beast.entryVisible = true;
          beast.detailsVisible = true;
        } else if (getCookie(beast.id).indexOf('entryVisible') > -1) {
          beast.entryVisible = true;
        }
      }
    },
    unlockEntry(beast) {
      if (beast.entryPasswordInput === beast.entryPassword || !beast.entryPassword) {
        beast.entryVisible = true;
        setCookie(beast.id, 'entryVisible = true');
      } else {
        alert('Incorrect password!');
      }
    },
    unlockDetails(beast) {
      if (beast.detailsPasswordInput === beast.detailsPassword || !beast.detailsPassword) {
        beast.detailsVisible = true;
        setCookie(beast.id, 'detailsVisible = true');
      } else {
        alert('Incorrect password!');
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.bestiary {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1A1F2A;
  border: 1px solid #BDA567;
  border-radius: 8px;
  font-family: 'Newsreader', monospace;
  color: #BDA567;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
}
h1, h2 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #BDA567;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li.beast-item {
  background-color: #1A1F2A;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #BDA567;
  border-radius: 4px;
  font-family: 'Newsreader', monospace;
}
img {
  max-width: 100%;
  margin: 0px;
  border-radius: 8px;
}
button {
  background-color: #BDA567;
  color: #1A1F2A;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}
button:hover {
  background-color: #F8E5AB;
}
input[type="password"] {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #BDA567;
  background-color: #1a1a1a;
  color: #BDA567;
  font-family: 'Newsreader', monospace;
  margin-right: 10px;
}
</style>
