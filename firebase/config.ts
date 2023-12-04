// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGWc5PF3euUrF1m2Wl4EfbmiUIoaUmH2c",
  authDomain: "capellari-coderhouse.firebaseapp.com",
  projectId: "capellari-coderhouse",
  storageBucket: "capellari-coderhouse.appspot.com",
  messagingSenderId: "686022474693",
  appId: "1:686022474693:web:a75fc6938252eb3ad329ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )