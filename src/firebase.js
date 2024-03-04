import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase.auth"
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrPcknyZPsfgEyJXf8pjGqq3tLOs011PI",
  authDomain: "chat-50571.firebaseapp.com",
  projectId: "chat-50571",
  storageBucket: "chat-50571.appspot.com",
  messagingSenderId: "965537970447",
  appId: "1:965537970447:web:6b7ba3455a120d8a8a267a",
  measurementId: "G-GER2BPW1V0"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth()