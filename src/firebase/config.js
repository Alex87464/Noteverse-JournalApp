// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXL4tII52qC9HEMLZhoiGtxauM0CLvAD8",
  authDomain: "noteverse-journal.firebaseapp.com",
  projectId: "noteverse-journal",
  storageBucket: "noteverse-journal.appspot.com",
  messagingSenderId: "520809236133",
  appId: "1:520809236133:web:046356c1f52b89a80e6f4c"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );