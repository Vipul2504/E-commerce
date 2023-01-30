import { initializeApp } from "firebase/app";
import {getAuth,signOut,onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiLsk4QAbH0jntdpB-hSxqnxE1hs452b0",
    authDomain: "pv-clothing.firebaseapp.com",
    projectId: "pv-clothing",
    storageBucket: "pv-clothing.appspot.com",
    messagingSenderId: "465208428785",
    appId: "1:465208428785:web:0f38414cc67d8e71134150",
    measurementId: "G-JEW11XC6PK"
  };

// const firebaseapp = initializeApp(firebaseConfig);
// getAnalytics(firebaseapp);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//     prompt:"select_account"
// })

// export const auth = getAuth();
// export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
// export const signInWithGoogleredirect = () => signInWithRedirect(auth, provider);

// //adding collection in the database

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd,
//   field
// ) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log('done');
// };

// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, 'categories');
//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q);
//   return querySnapshot.docs.map((doc) => doc.data());
// };
// //Setting Up database 

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth, additionInfo = {}) => {
//     if (!userAuth) return;
//     const userDocRef = doc(db, 'users', userAuth.uid)

//     const userSnapshot = await getDoc(userDocRef);
    

//     if(!userSnapshot.exits){
//         const {displayName, email} = userAuth;
//         const createdAt = new Date();

//         try {
//             await setDoc(userDocRef,{displayName, email, createdAt, ...additionInfo})
//         } catch (error) {
//             console.log('error creating the user', error.message);
//         }
//     }
//     return userDocRef;
// }

// export const createAuthUserWithEmailAndPassword = async (email, passoword) => {
//     if(!email || !passoword) return;

//     return await createUserWithEmailAndPassword(auth, email, passoword);
// }

// export const SignWithAuthUserWithEmailAndPassword = async(email, passoword) => {
//     if(!email || !passoword) return;

//     return await signInWithEmailAndPassword(auth, email, passoword);
// }

// export const signOutUser =async () => {
//    await signOut(auth);
// }

// export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback)

// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
//       unsubscribe();
//       resolve(userAuth)
//     })
//   })
// }

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};