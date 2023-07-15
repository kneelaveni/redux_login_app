// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAIll6_g2LznAU2TQmEusWAY9aI1iEJQns",
  authDomain: "loginpage-5e0ab.firebaseapp.com",
  projectId: "loginpage-5e0ab",
  storageBucket: "loginpage-5e0ab.appspot.com",
  messagingSenderId: "957272516235",
  appId: "1:957272516235:web:1ce1fa4641fa924ff7d68e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;