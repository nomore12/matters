import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Landing, About, Admin, Contact, Login, Matters, Project, Home } from 'pages/index';
import { Main } from 'containers/index';
import { Navigation } from 'components';

function AppRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="/matters" component={Matters} />
        </Switch>
      </Router>
    </div>
  )
}

export default AppRouter;