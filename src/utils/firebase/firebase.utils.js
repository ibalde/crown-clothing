import {initializeApp} from 'firebase/app';
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbsWsT95IJddv0P11KKh4J3j68tR9VZaw",
    authDomain: "crown-clothing-db-45645.firebaseapp.com",
    projectId: "crown-clothing-db-45645",
    storageBucket: "crown-clothing-db-45645.appspot.com",
    messagingSenderId: "1067499819250",
    appId: "1:1067499819250:web:f6e9a37d304d52d53e806b"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {
    displayName: 'John'
  }) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation});
      }
      catch(error){
        console.log('error creating the user', error.message)
      }
    }

    return userDocRef;
  }

  export const createNewUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const singInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }