// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2w9bwAC9e5FlbNm7izRk3yXpFbGuYulU',
  authDomain: 'matters-a5b7b.firebaseapp.com',
  projectId: 'matters-a5b7b',
  storageBucket: 'matters-a5b7b.appspot.com',
  messagingSenderId: '730944483120',
  appId: '1:730944483120:web:5033c781e6fc3b733322f5',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
auth.languageCode = 'ko';

// 구글 회원가입. 즉시 실행되는듯.
// export const googleSignIn = signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     console.log('credential', credential, token);
//     // The signed-in user info.
//     const user = result.user;
//     console.log('user', user);
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     console.log(errorCode);
//     const errorMessage = error.message;
//     console.log(errorMessage);
//     // The email of the user's account used.
//     const email = error.email;
//     console.log(email);
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     console.log(credential);
//     // ...
//   });
