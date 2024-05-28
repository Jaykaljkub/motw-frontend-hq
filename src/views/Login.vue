<template>
  <div>
    <h1>{{ message }}</h1>
    <div v-if="!isLoggedIn">
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" />
      </div>
      <div v-if="showRegister">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" />
      </div>
      <div v-if="showRegister">
        <button @click="registerUser">Register</button>
      </div>
      <div v-else>
        <button @click="loginUser">Login</button>
        <p>No account? <a href="#" @click.prevent="showRegister = true">Click here to register</a></p>
      </div>
    </div>
    <div v-else>
      <p>Welcome, {{ userName }}!</p>
      <button @click="logoutUser">Logout</button>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  setPersistence,  
  browserLocalPersistence,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getDatabase, ref, child, get, set } from "firebase/database";
import Config from '../config'

export default {
  data() {
    return {
      message: 'We doin our best here',
      email: '',
      password: '',
      name: '',
      isLoggedIn: false,
      userName: '',
      showRegister: false,
      errorMessage: ''
    }
  },
  created() {
    // Initialize Firebase
    this.app = initializeApp(Config.firebaseConfig);
    this.auth = getAuth(this.app);

    const dbRef = ref(getDatabase(this.app));
    get(child(dbRef, `profiles/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    // Check authentication state
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
        this.fetchUserName(user.uid);
      } else {
        this.isLoggedIn = false;
        this.userName = '';
      }
    });
  },
  methods: {
    setCookie(name, value, daysToExpire) {
      const date = new Date();
      date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    },
    displayMessage(props) {
      console.log(props);
    },
    registerUser() {
      createUserWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const profileData = {
            name: this.name,
            email: this.email,
            last_login: Date.now()
          };
          const db = getDatabase();
          set(ref(db, 'profiles/' + user.uid), profileData);

          console.log("Created!");
          this.isLoggedIn = true;
          this.userName = this.name;
          this.errorMessage = '';
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
    loginUser() {
      setPersistence(this.auth, browserLocalPersistence)
        .then(() => {
          return signInWithEmailAndPassword(this.auth, this.email, this.password)
        })
        .then((userCredential) => {
          console.log('Logged in');
          this.isLoggedIn = true;
          this.fetchUserName(userCredential.user.uid);
          this.errorMessage = '';
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
    logoutUser() {
      signOut(this.auth).then(() => {
        console.log("Signed Out!");
        this.isLoggedIn = false;
        this.userName = '';
      }).catch((error) => {
        console.error(error);
      });
    },
    fetchUserName(uid) {
      const db = getDatabase();
      const userRef = ref(db, 'profiles/' + uid);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          this.userName = snapshot.val().name;
        } else {
          console.log("No user data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
.error {
  color: red;
}
</style>
