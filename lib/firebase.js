import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADPqkJ9idn-3L2fJ40MMFcgLtaf7gaQ_Q",
  authDomain: "discotecheroma.firebaseapp.com",
  projectId: "discotecheroma",
  storageBucket: "discotecheroma.appspot.com",
  messagingSenderId: "798628967383",
  appId: "1:798628967383:web:f19c7977d4f2230a5c5192",
  measurementId: "G-ZXXVJHT2HX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

