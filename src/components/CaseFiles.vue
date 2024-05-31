<template>
  <div class="case-files">
    <h1>Case Files</h1>
    <form @submit.prevent="addCaseFile">
      <div>
        <label for="title">Title:</label>
        <input type="text" v-model="newCase.title" id="title" required />
      </div>
      <div>
        <label for="summary">Summary:</label>
        <textarea v-model="newCase.summary" id="summary" required></textarea>
      </div>
      <div>
        <label for="details">Details:</label>
        <textarea v-model="newCase.details" id="details" required></textarea>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="newCase.password" id="password" required />
      </div>
      <button type="submit">{{ editingCase ? 'Update' : 'Add' }} Case File</button>
    </form>
    <ul>
      <li class="casefile-item" v-for="caseFile in caseFiles" :key="caseFile.id">
        <h2>{{ caseFile.title }}</h2>
        <p>{{ caseFile.summary }}</p>
        <div>
          <input type="password" v-model="caseFile.enteredPassword" placeholder="Enter password to view details" />
          <button @click="unlockDetails(caseFile)">Unlock Details</button>
          <p v-if="caseFile.detailsVisible">{{ caseFile.details }}</p>
        </div>
        <button @click="editCaseFile(caseFile)">Edit</button>
        <button @click="deleteCaseFile(caseFile.id)">Delete</button>
        <router-link :to="'/case-files/' + caseFile.id">Read more</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDatabase, ref, push, onValue, update, remove } from "firebase/database";
import { initializeApp } from "firebase/app";
import Config from '../config';

export default {
  name: 'CaseFiles',
  data() {
    return {
      caseFiles: [],
      newCase: {
        title: '',
        summary: '',
        details: '',
        password: ''
      },
      editingCase: null
    };
  },
  created() {
    // Initialize Firebase
    this.app = initializeApp(Config.firebaseConfig);
    this.db = getDatabase(this.app);

    // Fetch case files from Firebase
    const caseFilesRef = ref(this.db, 'caseFiles');
    onValue(caseFilesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.caseFiles = Object.keys(data).map(key => ({ id: key, ...data[key], enteredPassword: '', detailsVisible: false }));
      } else {
        this.caseFiles = [];
      }
    });
  },
  methods: {
    addCaseFile() {
      const caseFilesRef = ref(this.db, 'caseFiles');
      if (this.editingCase) {
        const caseRef = ref(this.db, 'caseFiles/' + this.editingCase.id);
        update(caseRef, this.newCase)
          .then(() => {
            this.newCase = { title: '', summary: '', details: '', password: '' };
            this.editingCase = null;
          })
          .catch(error => console.error('Error updating case:', error));
      } else {
        push(caseFilesRef, this.newCase)
          .then(() => {
            this.newCase = { title: '', summary: '', details: '', password: '' };
          })
          .catch(error => console.error('Error adding case:', error));
      }
    },
    editCaseFile(caseFile) {
      this.newCase = { title: caseFile.title, summary: caseFile.summary, details: caseFile.details, password: caseFile.password };
      this.editingCase = caseFile;
    },
    deleteCaseFile(id) {
      const caseRef = ref(this.db, 'caseFiles/' + id);
      remove(caseRef)
        .catch(error => console.error('Error deleting case:', error));
    },
    unlockDetails(caseFile) {
      if (caseFile.enteredPassword === caseFile.password) {
        caseFile.detailsVisible = true;
      } else {
        alert('Incorrect password');
      }
    }
  }
};
</script>

<style scoped>
.case-files {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5dc;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'Courier New', Courier, monospace;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1, h2, h3 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
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
}
input[type="text"],
input[type="number"],
textarea,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 4px;
  background-color: #f0f0f0;
  font-family: 'Courier New', Courier, monospace;
}
button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
}
button:hover {
  background-color: #555;
}
.playbook-details {
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
