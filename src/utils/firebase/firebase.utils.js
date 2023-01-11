import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,signOut,onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiLsk4QAbH0jntdpB-hSxqnxE1hs452b0",
    authDomain: "pv-clothing.firebaseapp.com",
    projectId: "pv-clothing",
    storageBucket: "pv-clothing.appspot.com",
    messagingSenderId: "465208428785",
    appId: "1:465208428785:web:0f38414cc67d8e71134150",
    measurementId: "G-JEW11XC6PK"
  };

const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleredirect = () => signInWithRedirect(auth, provider);

//Setting Up database 

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionInfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exits){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{displayName, email, createdAt, ...additionInfo})
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, passoword) => {
    if(!email || !passoword) return;

    return await createUserWithEmailAndPassword(auth, email, passoword);
}

export const SignWithAuthUserWithEmailAndPassword = async(email, passoword) => {
    if(!email || !passoword) return;

    return await signInWithEmailAndPassword(auth, email, passoword);
}

export const signOutUSer =async () => {
   await signOut(auth);
}

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback)