
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

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
export const storage = getStorage( app )
export const auth = getAuth( app )