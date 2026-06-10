import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtK-BO_RNg8HG09mKNnmds_UWeYToQDuM",
  authDomain: "auction-2026-b7c1b.firebaseapp.com",
  projectId: "auction-2026-b7c1b",
  storageBucket: "auction-2026-b7c1b.firebasestorage.app",
  messagingSenderId: "913588030123",
  appId: "1:913588030123:web:8dce75698c30a1547b05ee",
  measurementId: "G-FQH0YSF3FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
