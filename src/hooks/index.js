import firebase from "../firebase";
import { auth } from "../firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection, query } from "@firebase/firestore";
import { db } from "../firebase";
export const register = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then((res) => {
    let user = res.user;
    console.log(user.uid);
    addDoc(collection(db, "name"), {
      uid: user.uid,
      name,
      email,
    });
  });
};
export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
export const logout = () => {
  firebase.auth().signOut();
  console.log("logged out");
};
