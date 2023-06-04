// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK6nqRigFgFXBP8ynVXmlpiXDnkq3cuVY",
  authDomain: "house-marketplace-app-aaa97.firebaseapp.com",
  projectId: "house-marketplace-app-aaa97",
  storageBucket: "house-marketplace-app-aaa97.appspot.com",
  messagingSenderId: "995343126329",
  appId: "1:995343126329:web:52547dc2d81557b64962e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
