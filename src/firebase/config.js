import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDFQsgYbovvmKXr8sbbv1Cd4Dj5L3zxXS4",
    authDomain: "mui-note-app.firebaseapp.com",
    projectId: "mui-note-app",
    storageBucket: "mui-note-app.appspot.com",
    messagingSenderId: "705572750396",
    appId: "1:705572750396:web:64b37a548758f5f75e2f39",
    measurementId: "G-L1KPCHHKL0"
  };

const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
export const FirebaseStorage = getStorage( FirebaseApp );