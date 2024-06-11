<template>
  <div class="edit-case-files">
    <h1>{{ caseFile.id ? 'Edit' : 'Add' }} Case File</h1>
    <form @submit.prevent="saveCaseFile">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" v-model="caseFile.title" id="title" autocomplete="off" required />
      </div>
      <div class="form-group">
        <label for="summary">Summary:</label>
        <textarea v-model="caseFile.summary" id="summary" required></textarea>
      </div>
      <div class="form-group">
        <label for="details">Details:</label>
        <textarea v-model="caseFile.details" id="details" required></textarea>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="caseFile.password" id="password" autocomplete="off" required />
      </div>
      <button type="submit">{{ caseFile.id ? 'Update' : 'Add' }} Case File</button>
    </form>
  </div>
</template>

<script>
import { initializeApp, } from "firebase/app";
import { getDatabase, ref, push, update, set, onValue } from "firebase/database";
import {setClean} from '../scripts/setClean';
import {updateClean} from '../scripts/updateClean';
import Config from '../config';


export default {
  name: 'EditCaseFiles',
  props: {
    caseToEdit: Object
  },
  data() {
    return {
      caseFile: {
        id: '',
        title: '',
        summary: '',
        details: '',
        status:'',
        objectives:'',
        password: '',
        enteredPassword: '', 
        detailsVisible: false, 
        clues: [],
        locations: [],
        notes: []
      },
      db: null,
    };
  },
  watch: {
    caseToEdit: {
      handler(newVal) {
        if (newVal) {
          this.caseFile = { ...newVal };
          this.initializeCaseFile(this.caseFile);
        }
      },
      immediate: true
    }
  },
  created() {
    this.app = initializeApp(Config.firebaseConfig);
    this.db = getDatabase(this.app);
  },
  methods: {
    initializeCaseFile(caseFile) {
      if (!caseFile.id) caseFile.id = '';
      if (!caseFile.title) caseFile.title = '';
      if (!caseFile.summary) caseFile.summary = '';
      if (!caseFile.details) caseFile.details = '';
      if (!caseFile.password) caseFile.password = '';
    },
    validateCaseFile(caseFile) {
      var requiredProperties = ['id', 'title', 'summary', 'details', 'password'];
      for (var prop of requiredProperties) {
        if (!caseFile.hasOwnProperty(prop)) {
          console.error(`Missing property: ${prop}`);
          return false;
        }
        if (typeof caseFile[prop] !== 'string') {
          console.error(`Incorrect type for property: ${prop}`);
          return false;
        }
      }
      return true;
    },
    saveCaseFile() {
      if (!this.validateCaseFile(this.caseFile)) {
        alert('Case file data is invalid. Please check the input fields.');
        return;
      }

      if (this.caseFile.id) {
        var caseRef = ref(this.db, 'caseFiles/' + this.caseFile.id);
        updateClean(caseRef, this.caseFile).then(() => {
          this.resetForm();
          this.$emit('saved');
        }).catch((error) => {
          console.error('Error updating case:', error);
        });
      } else {
        var caseFilesRef = ref(this.db, 'caseFiles/');
        var newCaseRef = push(caseFilesRef);
        console.log('New Case Ref Key:', newCaseRef.key);
        console.log('caseFile:', this.caseFile);

        setClean(newCaseRef, { ...this.caseFile, id: newCaseRef.key })
          .then(() => {
            console.log('Data successfully written!');
            this.resetForm();
            this.$emit('saved');
          })
          .catch((error) => {
            console.error('Error adding case:', error);
            console.error('Error details:', error.message, error.stack);
          });
      }
    },
    saveCaseFileDebug() {
      var caseFilesRef = ref(this.db, 'casemiles/');
        var newCaseRef = push(caseFilesRef);
        console.log('New Case Ref Key:', newCaseRef.key);
        console.log('caseFile:', this.caseFile);

        setClean(newCaseRef, { ...this.caseFile, id: newCaseRef.key })
        .then(() => {
          console.log('Data successfully written!');
          this.resetForm();
          this.$emit('saved');
        })
        .catch((error) => {
          console.error('Error adding case:', error);
          console.error('Error details:', error.message, error.stack);
        }); 
    },
    resetForm() {
      this.caseFile = {
        id: '',
        title: '',
        summary: '',
        details: '',
        password: ''
      };
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.edit-case-files {
  background-color: #1A1F2A;
  color: #BDA567;
  font-family: 'Major Mono Display', monospace;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #BDA567;
}

input[type="text"],
textarea,
input[type="password"] {
  width: 95%;
  padding: 8px;
  border: 1px solid #BDA567;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #BDA567;
  font-family: 'Major Mono Display', monospace;
}

button {
  background-color: #BDA567;
  color: #0c0c0c;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #F8E5AB;
}

a:-webkit-any-link {
  color: #BDA567;
}

a:-webkit-any-link:hover {
  color: #F8E5AB;
}
</style>
