<template>
    <div class="case-detail" v-if="caseFile">
      <h1>{{ caseFile.title }}</h1>
      <p>{{ caseFile.summary }}</p>
      <p>{{ caseFile.details }}</p>
  
      <div class="images">
        <h2>Images</h2>
        <ul>
          <li v-for="image in caseFile.images" :key="image.url">
            <img :src="image.url" :alt="image.name" />
          </li>
        </ul>
        <form @submit.prevent="uploadImage">
          <label for="image">Upload Image:</label>
          <input type="file" @change="onImageChange" required />
          <button type="submit">Upload Image</button>
        </form>
      </div>

      <div class="notes">
        <h2>Notes</h2>
        <ul>
          <li v-for="note in caseFile.notes" :key="note.timestamp">
            {{ note.content }} ({{ new Date(note.timestamp).toLocaleString() }})
          </li>
        </ul>
        <form @submit.prevent="addNote">
          <label for="note">Add Note:</label>
          <textarea v-model="newNote" id="note" required></textarea>
          <button type="submit">Add Note</button>
        </form>
      </div>
  
      <div class="clues">
        <h2>Clues</h2>
        <ul>
          <li class="clue-item" v-for="clue in caseFile.clues" :key="clue.id">
            <p>{{ clue.summary }}</p>
            <input type="password" v-model="clue.enteredPassword" placeholder="Enter password to view clue" />
            <button @click="unlockClue(clue)">Unlock Clue</button>
            <p v-if="clue.detailsVisible">{{ clue.details }}</p>
          </li>
        </ul>
        <form @submit.prevent="addClue">
          <label for="clue-summary">Clue Summary:</label>
          <input type="text" v-model="newClue.summary" id="clue-summary" required />
          <label for="clue-details">Clue Details:</label>
          <textarea v-model="newClue.details" id="clue-details" required></textarea>
          <label for="clue-password">Clue Password:</label>
          <input type="password" v-model="newClue.password" id="clue-password" required />
          <button type="submit">Add Clue</button>
        </form>
      </div>
  
      <div class="locations">
        <h2>Locations</h2>
        <ul>
          <li v-for="location in caseFile.locations" :key="location.name">
            <h3>{{ location.name }}</h3>
            <p>{{ location.description }}</p>
          </li>
        </ul>
        <form @submit.prevent="addLocation">
          <label for="location-name">Location Name:</label>
          <input type="text" v-model="newLocation.name" id="location-name" required />
          <label for="location-description">Location Description:</label>
          <textarea v-model="newLocation.description" id="location-description" required></textarea>
          <button type="submit">Add Location</button>
        </form>
      </div>
  
      <router-link to="/case-files">Back to Case Files</router-link>
    </div>
  </template>
  
  <script>
  import { getDatabase, ref, get, update } from "firebase/database";
  import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
  import { initializeApp } from "firebase/app";
  import Config from '../config';
  
  export default {
    name: 'CaseDetail',
    props: ['id'],
    data() {
      return {
        caseFile: null,
        newNote: '',
        selectedImage: null,
        newClue: {
          summary: '',
          details: '',
          password: ''
        },
        newLocation: {
          name: '',
          description: ''
        }
      };
    },
    created() {
      // Initialize Firebase
      this.app = initializeApp(Config.firebaseConfig);
      this.db = getDatabase(this.app);
      this.storage = getStorage(this.app);
      this.fetchCaseFile();
    },
    methods: {
      fetchCaseFile() {
        const caseRef = ref(this.db, 'caseFiles/' + this.id);
        get(caseRef).then((snapshot) => {
          if (snapshot.exists()) {
            this.caseFile = snapshot.val();
            if (!this.caseFile.notes) this.caseFile.notes = [];
            if (!this.caseFile.images) this.caseFile.images = [];
            if (!this.caseFile.clues) this.caseFile.clues = [];
            if (!this.caseFile.locations) this.caseFile.locations = [];
          } else {
            console.log("No case data available");
          }
        }).catch((error) => {
          console.error('Error fetching case:', error);
        });
      },
      addNote() {
        const note = {
          content: this.newNote,
          timestamp: Date.now()
        };
        this.caseFile.notes.push(note);
        this.updateCaseFile();
        this.newNote = '';
      },
      onImageChange(event) {
        this.selectedImage = event.target.files[0];
      },
      uploadImage() {
        if (!this.selectedImage) return;
        
        const imageRef = storageRef(this.storage, `images/${this.id}/${this.selectedImage.name}`);
        uploadBytes(imageRef, this.selectedImage).then(snapshot => {
          getDownloadURL(snapshot.ref).then(url => {
            const image = {
              name: this.selectedImage.name,
              url: url
            };
            this.caseFile.images.push(image);
            this.updateCaseFile();
            this.selectedImage = null;
          }).catch(error => {
            console.error('Error getting image URL:', error);
          });
        }).catch(error => {
          console.error('Error uploading image:', error);
        });
      },
      addClue() {
        const clue = {
          id: Date.now().toString(),
          summary: this.newClue.summary,
          details: this.newClue.details,
          password: this.newClue.password,
          detailsVisible: false,
          enteredPassword: ''
        };
        this.caseFile.clues.push(clue);
        this.updateCaseFile();
        this.newClue = { summary: '', details: '', password: '' };
      },
      unlockClue(clue) {
        if (clue.enteredPassword === clue.password) {
          clue.detailsVisible = true;
        } else {
          alert('Incorrect password');
        }
      },
      addLocation() {
        const location = {
          name: this.newLocation.name,
          description: this.newLocation.description
        };
        this.caseFile.locations.push(location);
        this.updateCaseFile();
        this.newLocation = { name: '', description: '' };
      },
      updateCaseFile() {
        const caseRef = ref(this.db, 'caseFiles/' + this.id);
        update(caseRef, this.caseFile).catch(error => {
          console.error('Error updating case:', error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .case-detail {
    max-width: 800px;
    margin: 50px auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
  }
  .notes, .images, .clues, .locations {
    margin-top: 20px;
  }
  form {
    margin-top: 10px;
  }
  form div {
    margin-bottom: 10px;
  }
  img {
    max-width: 100px;
    margin: 10px;
  }
  </style>
  