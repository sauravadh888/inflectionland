// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDnyeyN1hMsQt-w_ZthwECpVhXVlPXxTLk",

  authDomain: "inflectionland.firebaseapp.com",

  projectId: "inflectionland",
  storageBucket: "inflectionland.firebasestorage.app",
  messagingSenderId: "279614473328",
  appId: "1:279614473328:web:8188011d14d8f65735a0b5",
  measurementId: "G-HJ2JDBN8JG"

};
const app = initializeApp(firebaseCongif);
const analytics = getAnalytics(app);
