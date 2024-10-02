
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  export const auth = getAuth(firebaseApp);
  export const firestore = getFirestore(firebaseApp);
  export const functions = getFunctions(firebaseApp);