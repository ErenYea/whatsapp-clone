// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import * as firebase from "firebase/app";
// import firebase from "firebase/app";
// import firebase from "firebase/app";
// import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/firestore";
// import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBoJ6TWxNG55mDZb2oI0VwT8LJvEgzuJyo",
  authDomain: "whatsapp-clone-7908d.firebaseapp.com",
  projectId: "whatsapp-clone-7908d",
  storageBucket: "whatsapp-clone-7908d.appspot.com",
  messagingSenderId: "115571362518",
  appId: "1:115571362518:web:0eb6a20d730a21f30b1777",
  measurementId: "G-PVEM9HQV54",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // initializeApp
const db = firebaseApp.firestore(); // for database using firestore
const auth = firebase.auth(); // for authentication
const provider = new firebase.auth.GoogleAuthProvider(); // for google authentication

export { auth, provider };
export default db;
