import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDoDc3EVB_XOeLngHl6excKZkX-B0PV5o",
  authDomain: "blog-77dfe.firebaseapp.com",
  projectId: "blog-77dfe",
  storageBucket: "blog-77dfe.appspot.com",
  messagingSenderId: "1030855587943",
  appId: "1:1030855587943:web:215eca24bd7724d549bcc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();



