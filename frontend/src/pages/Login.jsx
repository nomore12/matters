import { Login } from 'ra-ui-materialui';
import React, { useState } from 'react';
import { LoginForm } from 'components/index';
import { auth, googleSignIn } from 'firebaseConfig';

function LoginPage(props) {
  const [isLoggedIn, setLogin] = useState(false);
  // const login = async () => {
  //   const data = googleSignIn.
  // }

  return (
    <div>
      <LoginForm props={{ isLoggedIn: false }} />
    </div>
  );
}

export default LoginPage;
