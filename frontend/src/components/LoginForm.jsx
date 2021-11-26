import React, { useEffect } from 'react';
import { Box, TextField, FormControl } from '@mui/material';
import { auth, googleSignIn, provider } from 'firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function LoginForm(props) {
  const isLoggedIn = props.isLoggedIn;

  const signIn = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log('credential', credential, token);
        const user = result.user;
        console.log('user', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.email;
        console.log(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  const login = async (e) => {
    console.log(auth.currentUser);
    auth.currentUser === null && signIn();
  };

  return (
    <div>
      <button onClick={login}>login</button>
    </div>
  );
}

export default LoginForm;
