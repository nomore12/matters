import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Landing } from 'pages/index';
import { CssBaseline } from '@mui/material';
import styled from 'styled-components';
import './App.css';
import { auth } from 'firebaseConfig';
import { LoginPage } from 'pages/index';


const AppContainer = styled.div`
  height: 100%;
`;

// const provider = 

function App() {

  return (
    <AppContainer className="App">
      <CssBaseline />
      <LoginPage />
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router> */}
    </AppContainer>
  );
}

export default App;
