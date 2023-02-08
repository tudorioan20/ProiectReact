import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5Ih8akZjjrjnrdyjujpRFYODrHc7tE9c",
  authDomain: "proiectreact-da941.firebaseapp.com",
  projectId: "proiectreact-da941",
  storageBucket: "proiectreact-da941.appspot.com",
  messagingSenderId: "453131389384",
  appId: "1:453131389384:web:300402f2aac367360098fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);