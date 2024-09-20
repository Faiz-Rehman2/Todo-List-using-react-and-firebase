// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBcnxJHAvlfuP6Lv4x2JN5OsRnD2XWJpE",
  authDomain: "react-todo-list-85c7c.firebaseapp.com",
  projectId: "react-todo-list-85c7c",
  storageBucket: "react-todo-list-85c7c.appspot.com",
  messagingSenderId: "367046706456",
  appId: "1:367046706456:web:aa3d2a7b3c2eeeda6d4a6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

