import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Landing, About, Contact, Matters, Project } from 'pages/index';
import { Main, GridMain } from 'containers/index';
import { Navigation } from 'components';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/main" component={GridMain} />
    </Switch>
  );
}

export default Router;
