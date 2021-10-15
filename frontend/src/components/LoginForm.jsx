import React from 'react';
import { Box, TextField, FormControl } from '@mui/material';
import  { auth, googleSignIn, provider } from 'firebaseConfig';


function LoginForm(props) {
  const isLoggedIn = props.isLoggedIn;
  
  const login = async (e) => {
    const data = googleSignIn();
    console.log(data);
  }

  return (
    <div>
      <button onClick={login}>login</button>
    </div>
  )
}

export default LoginForm;