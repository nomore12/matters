import React, { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Landing } from 'pages/index';
import { CssBaseline } from '@mui/material';
import styled from 'styled-components';
import './App.css';
import { auth } from 'firebaseConfig';
import { LoginPage } from 'pages/index';
import Router from 'routes/Router';
import { Main } from 'containers';
import axios from 'axios';

const AppContainer = styled.div`
  height: 100%;
`;

function App() {
  return (
    <AppContainer className="App">
      <Router />
    </AppContainer>
  );
}

export default App;
