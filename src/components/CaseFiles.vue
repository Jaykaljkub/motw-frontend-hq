<template>
  <div class="case-files">
    <h1>Case Files</h1>
    <div v-if="isAdmin">
      <edit-case-files :caseToEdit="caseToEdit" @saved="fetchCaseFiles" />
    </div>
    <ul>
      <li class="casefile-item" v-for="caseFile in caseFiles" :key="caseFile.id">
        <h2>{{ caseFile.title }}</h2>
        <p>{{ caseFile.summary }}</p>
        <div>
          <input type="password" v-model="caseFile.enteredPassword" placeholder="Enter password to view details" />
          <button @click="unlockDetails(caseFile)">Unlock Details</button>
          <p v-if="caseFile.detailsVisible">{{ caseFile.status }}</p>
          <p v-if="caseFile.detailsVisible">{{ caseFile.details }}</p>
          <router-link v-if="caseFile.detailsVisible" :to="'/case-files/' + caseFile.id">Read more</router-link>
        </div>
        <div class="btn-container" v-if="isAdmin">
          <button @click="editCaseFile(caseFile)">Edit</button>
          <button @click="deleteCaseFile(caseFile.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { initializeApp } from "firebase/app";
import Config from '../config';
import EditCaseFiles from './EditCaseFiles.vue';
import { store } from '../scripts/store';
import {removeClean} from '../scripts/removeClean';

export default {
  name: 'CaseFiles',
  components: {
    EditCaseFiles
  },
  data() {
    return {
      caseFiles: [],
      caseToEdit: null,
      isAdmin: store.isAdmin // Use store to determine if the user is an admin
    };
  },
  created() {
    this.app = initializeApp(Config.firebaseConfig);
    this.db = getDatabase(this.app);
    this.fetchCaseFiles();
  },
  methods: {
    fetchCaseFiles() {
    var caseFilesRef = ref(this.db, 'caseFiles');
    onValue(caseFilesRef, (snapshot) => {
      var data = snapshot.val();
      console.log('Fetched data:', data); // Log fetched data
      if (data) {
        let caseFilesArray = [];
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            caseFilesArray.push({
              id: key,
              ...data[key],
              enteredPassword: '',
              detailsVisible: false
            });
          }
        }
        console.log('Processed caseFilesArray:', caseFilesArray); // Log processed data
        this.caseFiles = caseFilesArray;
      } else {
        this.caseFiles = [];
      }
      console.log('Updated caseFiles:', this.caseFiles); // Log final state update
    }, error => {
      console.error('Error fetching case files:', error);
    });
  },
    editCaseFile(caseFile) {
      this.caseToEdit = { ...caseFile };
    },
    deleteCaseFile(id) {
      var caseRef = ref(this.db, 'caseFiles/' + id);
      removeClean(caseRef).catch(error => console.error('Error deleting case:', error));
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
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.case-files {
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

li.casefile-item {
  background-color: #1A1F2A;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #BDA567;
  border-radius: 4px;
  font-family: 'Newsreader', monospace;
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
  width: 95%;
  padding: 8px;
  border: 1px solid #BDA567;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #BDA567;
  font-family: 'Newsreader', monospace;
  margin-bottom: 10px;
}

a:-webkit-any-link {
    margin-top: 10px;
    color: #BDA567;
}

a:-webkit-any-link:hover {
  color: #F8E5AB;
}

.btn-container {
  margin: 10px 0;
}

router-link {
  color: #BDA567;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
