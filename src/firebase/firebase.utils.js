
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDcUj62rU9AbiVago15aAJHXOFGOQjPMRw",
  authDomain: "shop-fcfca.firebaseapp.com",
  databaseURL: "https://shop-fcfca.firebaseio.com",
  projectId: "shop-fcfca",
  storageBucket: "shop-fcfca.appspot.com",
  messagingSenderId: "699248408872",
  appId: "1:699248408872:web:c3adf7570caf2f01c7b81d",
  measurementId: "G-FHFLY2FPKR"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;