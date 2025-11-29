import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "smart-gardeners.firebaseapp.com",
  projectId: "smart-gardeners",
  storageBucket: "smart-gardeners.appspot.com",
  messagingSenderId: "1037423725633",
  appId: "1:1037423725633:web:fa416cb9f93ca2c89a4ac0",
  measurementId: "G-0PQRM1N3TG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
