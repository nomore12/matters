import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Index.css';
import 'static/fonts/fonts.css';
import store from 'store/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
