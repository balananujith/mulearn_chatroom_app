// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3c_MSd51T5rSlFZzaBdRnrjcTtOFwUxg",
  authDomain: "chatroomapp-cb05a.firebaseapp.com",
  projectId: "chatroomapp-cb05a",
  storageBucket: "chatroomapp-cb05a.appspot.com",
  messagingSenderId: "1059963718220",
  appId: "1:1059963718220:web:487108d56524a5eff642e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();