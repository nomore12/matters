import React, { useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Landing } from './pages/index';
import { CssBaseline } from '@mui/material';
import styled from 'styled-components';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import fadeDataProvider from 'ra-data-fakerest';
import { ImageCreate, ImageEdit, ImageList } from './admin/images';
import jsonServerProvider from 'ra-data-simple-rest';
import simpleRestProvider from 'ra-data-simple-rest';

// https://jsonplaceholder.typicode.com/

const AppContainer = styled.div`
  height: 100%;
`;

// const provider = 

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
            <Admin dataProvider={simpleRestProvider('http://localhost:5000/api')} >
              <Resource name="images" list={ImageList} create={ImageCreate} edit={ImageEdit} />
            </Admin>
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
