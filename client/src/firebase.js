// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-76f82.firebaseapp.com",
  projectId: "real-estate-76f82",
  storageBucket: "real-estate-76f82.appspot.com",
  messagingSenderId: "285679318536",
  appId: "1:285679318536:web:d1ea5dc4c771fef0ff03bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);