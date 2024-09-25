
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyAiu236y80SzOp95eaue9_5GgMkWdvfL8w",
    authDomain: "smart-helmet-2c330.firebaseapp.com",
    projectId: "smart-helmet-2c330",
    storageBucket: "smart-helmet-2c330.appspot.com",
    messagingSenderId: "207907262619",
    appId: "1:207907262619:web:f6e4cbf14cce8aed9d363e",
    measurementId: "G-RTPLNL6XJG"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  export const auth = getAuth(firebaseApp);
  export const firestore = getFirestore(firebaseApp);
  export const functions = getFunctions(firebaseApp);