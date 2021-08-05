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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;