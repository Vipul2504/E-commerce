import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup} from 'firebase/auth'

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
    prompt:"Select_Account"
})

export const auth = getAuth();
export const signInWithGooglePopUp = signInWithPopup(auth, provider);