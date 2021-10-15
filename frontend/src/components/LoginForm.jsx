import React, { useEffect } from 'react';
import { Box, TextField, FormControl } from '@mui/material';
import  { auth, googleSignIn, provider } from 'firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function LoginForm(props) {
  const isLoggedIn = props.isLoggedIn;
  
  const signIn = () => signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log('credential', credential, token);
    // The signed-in user info.
    const user = result.user;
    console.log('user', user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.email;
    console.log(email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
    // ...
  });

  const login = async (e) => {
    console.log(auth.currentUser);
    auth.currentUser === null && signIn();
  }

  return (
    <div>
      <button onClick={login}>login</button>
    </div>
  )
}

export default LoginForm;