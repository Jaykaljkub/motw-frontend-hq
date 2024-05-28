import { initializeApp } from "firebase/app";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  setPersistence,  
  browserLocalPersistence,
  signOut
} from "firebase/auth";

import { getDatabase, ref, child, get, set } from "firebase/database";
// import Config from '../config.js'

// Initialize Firebase
const app = initializeApp(Config.firebaseConfig);
const auth = getAuth(app);

function setCookie(name, value, daysToExpire) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

const displayMessage = (props) => {
  console.log(props);
}
const julianMessage = 'We doin our best here'

const dbRef = ref(getDatabase(app));
get(child(dbRef, `profiles/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    // Now pass the database to the child
    // check to see if account exists
    // if yes, return true
    // if not return false
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

// Register function
const register = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      // Create a profile for the newly created account
      const profile_data = {
        name: name,
        email: email,
        last_login: Date.now()
      }
      const db = getDatabase();
      set(ref(db, 'profiles/' + user.uid), {
        name: name,
        email: email,
        last_login: Date.now()
      });

      console.log("Created!")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(`${errorMessage}`);
    });
}

// Login function that also makes the login persistent using localstorage
const login = (email, password) => {
  setPersistence(auth, browserLocalPersistence)
    .then(()=> {
      console.log('Logging in');
      return signInWithEmailAndPassword(auth, email, password)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorMessage}`);
    });
}

const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Signed Out!!")
  }).catch((error) => {
    // An error happened.
    console.error(error);
  });
}

export {displayMessage, register, login, logOut, julianMessage}
