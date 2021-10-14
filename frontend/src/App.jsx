import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Landing } from './pages/index';
import { CssBaseline } from '@mui/material';
import styled from 'styled-components';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';





const AppContainer = styled.div`
  height: 100%;
`;

function App() {
  return (
    <AppContainer className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/admin">
            {/* <Admin dataProvider={dataProvider} >
              <Resource name="uses" list={UserList} edit={EditGuesser} />
            </Admin> */}
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
