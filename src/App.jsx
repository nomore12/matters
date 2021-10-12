import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Landing } from './pages/index';
import { CssBaseline, CSSBaseLine } from '@mui/material';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  height: 100%;
`;

function App() {
  return (
    <AppContainer className="App">
      <CssBaseline />
      <Router>
        <Landing />
      </Router>
    </AppContainer>
  );
}

export default App;
