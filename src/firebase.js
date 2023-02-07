import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCg8fqT8rmSDzKCwNMla3m3Vu-BhLEHGlQ",
  authDomain: "chat-svelte-fe599.firebaseapp.com",
  projectId: "chat-svelte-fe599",
  storageBucket: "chat-svelte-fe599.appspot.com",
  messagingSenderId: "958466687491",
  appId: "1:958466687491:web:751e8a7e4d557e73d28436"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()


export  {db, auth, googleProvider}
