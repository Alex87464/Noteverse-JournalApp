// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk_zVqj2bL0ePV9Aowob1C1JrKDGvQ8jM",
  authDomain: "clothesapp-26fa6.firebaseapp.com",
  projectId: "clothesapp-26fa6",
  storageBucket: "clothesapp-26fa6.appspot.com",
  messagingSenderId: "68884066620",
  appId: "1:68884066620:web:62c7a50b87a39440726e39",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
