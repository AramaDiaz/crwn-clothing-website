import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDj3R9DOUuxLGZE0vWUx-tAFoj4iDYVeZs',
  authDomain: 'crwn-clothing-db-85295.firebaseapp.com',
  projectId: 'crwn-clothing-db-85295',
  storageBucket: 'crwn-clothing-db-85295.appspot.com',
  messagingSenderId: '197169493208',
  appId: '1:197169493208:web:d7c722c76f85e26b1c53ad',
  measurementId: 'G-N9NGQKD3LW',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }
  return userDocRef;
};

export default app;
