import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw1W03TZ7TQi2MMtW6YyJBlnh-aswx9RY",
  authDomain: "esmusiclessongenerator.firebaseapp.com",
  databaseURL: "https://esmusiclessongenerator-default-rtdb.firebaseio.com",
  projectId: "esmusiclessongenerator",
  storageBucket: "esmusiclessongenerator.appspot.com",
  messagingSenderId: "201729882751",
  appId: "1:201729882751:web:8fc5eb652facdc5bf6dd4a"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { db, ref, get, child, firestore, auth };