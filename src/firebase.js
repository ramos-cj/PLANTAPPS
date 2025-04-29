// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ import auth
import { getDatabase } from "firebase/database";              // ✅ import database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPXiiJLDY8O83B6zmFRlNQTTt16yZcMl0",
  authDomain: "plantapp-c960b.firebaseapp.com",
  databaseURL: "https://plantapp-c960b-default-rtdb.firebaseio.com",
  projectId: "plantapp-c960b",
  storageBucket: "plantapp-c960b.firebasestorage.app",
  messagingSenderId: "530796791781",
  appId: "1:530796791781:web:51d87459c461215319510c",
  measurementId: "G-6FBGS2676J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);
