// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG3YjMu9pIZ08-wQDB-YO2VtcWAQ_huQY",
  authDomain: "coderhouse-ecommerce-715b1.firebaseapp.com",
  projectId: "coderhouse-ecommerce-715b1",
  storageBucket: "coderhouse-ecommerce-715b1.appspot.com",
  messagingSenderId: "595420726770",
  appId: "1:595420726770:web:8ba2a48663dfdff970976b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)