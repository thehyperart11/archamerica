// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxl7tYNi98x6DFjrZVfyrh6gfdVLo1lO4",
  authDomain: "pitching-clients.firebaseapp.com",
  projectId: "pitching-clients",
  storageBucket: "pitching-clients.appspot.com",
  messagingSenderId: "131308691547",
  appId: "1:131308691547:web:be984d1bc308c734dc9f7e",
  measurementId: "G-BJQ2W3TE0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
