<template>
  <div class="edit-beast">
    <form @submit.prevent="saveBeast">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="beast.name" id="name" required />
      </div>
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input type="text" v-model="beast.image" id="image" required />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="beast.description" id="description" required></textarea>
      </div>
      <div class="form-group">
        <label for="stats">Stats:</label>
        <input type="text" v-model="beast.stats" id="stats" required />
      </div>
      <div class="form-group">
        <label for="details">Details:</label>
        <textarea v-model="beast.details" id="details"></textarea>
      </div>
      <div class="form-group">
        <label for="detailsPassword">Details Password:</label>
        <input type="password" v-model="beast.detailsPassword" id="detailsPassword" />
      </div>
      <div class="form-group">
        <label for="entryPassword">Entry Password:</label>
        <input type="password" v-model="beast.entryPassword" id="entryPassword" />
      </div>
      <button type="submit">Save Beast</button>
    </form>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, update } from "firebase/database";
import Config from '../config';

export default {
  name: 'EditBeast',
  data() {
    return {
      beast: {
        name: '',
        image: '',
        description: '',
        stats: '',
        details: '',
        detailsPassword: '',
        entryPassword: ''
      },
      db: null,
    };
  },
  props: {
    beastToEdit: Object
  },
  watch: {
    beastToEdit: {
      handler(newVal) {
        this.beast = { ...newVal };
      },
      immediate: true
    }
  },
  created() {
    this.app = initializeApp(Config.firebaseConfig);
    this.db = getDatabase(this.app);
  },
  methods: {
    saveBeast() {
      if (this.beast.id) {
        const beastRef = ref(this.db, 'bestiary/' + this.beast.id);
        update(beastRef, this.beast).then(() => {
          this.resetForm();
          this.$emit('saved');
        }).catch((error) => {
          console.error('Error updating beast:', error);
        });
      } else {
        const beastsRef = ref(this.db, 'bestiary');
        const newBeastRef = push(beastsRef);
        set(newBeastRef, this.beast).then(() => {
          this.resetForm();
          this.$emit('saved');
        }).catch((error) => {
          console.error('Error adding beast:', error);
        });
      }
    },
    resetForm() {
      this.beast = {
        name: '',
        image: '',
        description: '',
        stats: '',
        details: '',
        detailsPassword: '',
        entryPassword: ''
      };
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');

.edit-beast {
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
h1 {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
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
input[type="password"],
textarea {
  width: 100%;
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
</style>
