
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {
    getAuth,
  } from "firebase/auth";
  import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA5qpFBhHsFGRT30T5ZHeU7f7qvpLJ9SUw",
    authDomain: "ecommerce-ff9ac.firebaseapp.com",
    projectId: "ecommerce-ff9ac",
    storageBucket: "ecommerce-ff9ac.appspot.com",
    messagingSenderId: "427713358526",
    appId: "1:427713358526:web:0835645d08817d7e870cef",
    measurementId: "G-518K59GW5G"
  };
  const app =firebase.initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export default firebase;

export const  db= getFirestore(app)