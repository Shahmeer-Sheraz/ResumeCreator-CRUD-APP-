// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIg-uT0Nv32tk5jIRLn3DgweMrGiS2VwA",
  authDomain: "crud-321f1.firebaseapp.com",
  projectId: "crud-321f1",
  storageBucket: "crud-321f1.appspot.com",
  messagingSenderId: "540940095783",
  appId: "1:540940095783:web:7d54541e63692a6a3bd902",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

