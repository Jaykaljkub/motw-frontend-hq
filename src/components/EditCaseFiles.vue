<template>
  <div class="edit-case-files">
    <h1>{{ editingCase ? 'Edit' : 'Add' }} Case File</h1>
    <form @submit.prevent="saveCaseFile">
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" v-model="caseFile.title" id="title" required />
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
        <input type="password" v-model="caseFile.password" id="password" required />
      </div>
      <button type="submit">{{ editingCase ? 'Update' : 'Add' }} Case File</button>
    </form>
  </div>
</template>

<script>
import { getDatabase, ref, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import Config from '../config';

export default {
  name: 'EditCaseFiles',
  props: {
    caseToEdit: Object
  },
  data() {
    return {
      caseFile: {
        title: '',
        summary: '',
        details: '',
        password: ''
      },
      db: null,
    };
  },
  watch: {
    caseToEdit: {
      handler(newVal) {
        if (newVal) {
          this.caseFile = { ...newVal };
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
    saveCaseFile() {
      if (this.caseFile.id) {
        const caseRef = ref(this.db, 'caseFiles/' + this.caseFile.id);
        update(caseRef, this.caseFile).then(() => {
          this.resetForm();
          this.$emit('saved');
        }).catch((error) => {
          console.error('Error updating case:', error);
        });
      } else {
        const caseFilesRef = ref(this.db, 'caseFiles');
        const newCaseRef = push(caseFilesRef);
        newCaseRef.set(this.caseFile).then(() => {
          this.resetForm();
          this.$emit('saved');
        }).catch((error) => {
          console.error('Error adding case:', error);
        });
      }
    },
    resetForm() {
      this.caseFile = {
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
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
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
  width: 100%;
  padding: 8px;
  border: 1px solid #BDA567;
  border-radius: 4px;
  background-color: #1A1F2A;
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
