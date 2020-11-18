import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCox6F84TRlzWc-A50KumJRj6p7lI4VBFE",
  authDomain: "instagram-clone-d87ad.firebaseapp.com",
  databaseURL: "https://instagram-clone-d87ad.firebaseio.com",
  projectId: "instagram-clone-d87ad",
  storageBucket: "instagram-clone-d87ad.appspot.com",
  messagingSenderId: "857206053809",
  appId: "1:857206053809:web:e9ac765e8156426e8b7b90",
  measurementId: "G-2L8DJXD9C3"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };