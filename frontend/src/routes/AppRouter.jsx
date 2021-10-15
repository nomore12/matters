import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" />
        <Route path="/login" />
        <Route path="/admin" />
      </Switch>
    </Router>
  )
}

export default AppRouter;