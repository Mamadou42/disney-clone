// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyA3lorrJdq12roNIt8SrEjhLmZccPK2JIE",
  authDomain: "disney-97086.firebaseapp.com",
  projectId: "disney-97086",
  storageBucket: "disney-97086.appspot.com",
  messagingSenderId: "923128538739",
  appId: "1:923128538739:web:fcda227482d8037b42ec06"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

export { db }