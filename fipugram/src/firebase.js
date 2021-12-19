import firebase from "firebase/compat/app";
import auth from "firebase/compat/auth";
import firestore from "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCFMPNrg9ahPBKchGDvcg8iE53BqPteqY4",
  authDomain: "gipugram.firebaseapp.com",
  projectId: "gipugram",
  storageBucket: "gipugram.appspot.com",
  messagingSenderId: "548293780223",
  appId: "1:548293780223:web:06ff97a3010fc624b862ca",
};
firebase.initializeApp(firebaseConfig);

export { firebase, auth, firestore };
