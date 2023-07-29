// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEHFsj62UBnBvYZc0vWqes2sGFjwbmSno",
  authDomain: "emcar-tutoring-app.firebaseapp.com",
  projectId: "emcar-tutoring-app",
  storageBucket: "emcar-tutoring-app.appspot.com",
  messagingSenderId: "1096230466420",
  appId: "1:1096230466420:web:01f6c3477f4252dc2f3221",
  measurementId: "G-W5VJHP48KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
