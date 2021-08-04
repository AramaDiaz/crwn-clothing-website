import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDj3R9DOUuxLGZE0vWUx-tAFoj4iDYVeZs",
    authDomain: "crwn-clothing-db-85295.firebaseapp.com",
    projectId: "crwn-clothing-db-85295",
    storageBucket: "crwn-clothing-db-85295.appspot.com",
    messagingSenderId: "197169493208",
    appId: "1:197169493208:web:d7c722c76f85e26b1c53ad",
    measurementId: "G-N9NGQKD3LW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;