<template>
  <div>
    <h1>{{ message }}</h1>
    <div v-if="!store.isAuthenticated" class="input-container">
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
      <div class="cta-container" v-else>
        <button @click="loginUser">Login</button>
        <p>No account?<br/> <a href="#" @click.prevent="showRegister = true">Click here to register</a></p>
      </div>
    </div>
    <div v-else>
      <p>Welcome, {{ store.user.name }}!</p>
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
import Config from '../config';
import { store } from '../scripts/store';

export default {
  data() {
    return {
      message: 'We doin our best here',
      email: '',
      password: '',
      name: '',
      showRegister: false,
      errorMessage: ''
    }
  },
  created() {
    // Initialize Firebase
    this.app = initializeApp(Config.firebaseConfig);
    this.auth = getAuth(this.app);

    // Check authentication state
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        store.login({ uid: user.uid });
        this.fetchUserName(user.uid);
      } else {
        store.logout();
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
            isAdmin: false,
            last_login: Date.now()
          };
          const db = getDatabase();
          set(ref(db, 'profiles/' + user.uid), profileData);
          store.login({ uid: user.uid, name: this.name, isAdmin: user.isAdmin });
          this.errorMessage = '';
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
    loginUser() {
      setPersistence(this.auth, browserLocalPersistence)
        .then(() => {
          return signInWithEmailAndPassword(this.auth, this.email, this.password);
        })
        .then((userCredential) => {
          store.login({ uid: userCredential.user.uid });
          this.fetchUserName(userCredential.user.uid);
          this.errorMessage = '';
          localStorage.setItem('motw-uid',userCredential.user.uid);
          localStorage.setItem('motw-user',JSON.stringify(userCredential.user));
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
    logoutUser() {
      signOut(this.auth).then(() => {
        store.logout();
        localStorage.removeItem('motw-uid');
        localStorage.removeItem('motw-user');
      }).catch((error) => {
        console.error(error);
      });
    },
    fetchUserName(uid) {
      console.log(128, 'Fetch username');
      const db = getDatabase();
      const userRef = ref(db, 'profiles/' + uid);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          store.user.name = snapshot.val().name;
          store.isAdmin = snapshot.val().isAdmin;
        } else {
          console.log("No user data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  },
  computed: {
    store() {
      return store;
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
.error {
  color: red;
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
  min-width: 100px;
  max-height: 45px;
  align-self: center;
}
.cta-container p {

}
.input-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.input-container div {
    display: flex;
    justify-content: space-between;
}
input[type="password"], input[type="email"], input[type="text"] {
  width: 50%;
  padding: 8px;
  border: 1px solid #BDA567;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #BDA567;
  font-family: 'Newsreader', monospace;
  margin-bottom: 10px;
  margin-left: 50px;
}
a:-webkit-any-link {
    color: #BDA567;
  }
a:-webkit-any-link:hover {
  color: #F8E5AB;
}
</style>
