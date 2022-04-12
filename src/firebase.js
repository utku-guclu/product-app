import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "product-itewm-9e95f.firebaseapp.com",
  projectId: "product-item-9e95f",
  storageBucket: "product-item-9e95f.appspot.com",
  messagingSenderId: "55109699188",
  appId: "1:55109699188:web:3e6baed076342e2b397321",
  measurementId: "G-FEX2YXT3C7",
});

const db = firebaseApp.firestore();

export { db };
