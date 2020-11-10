import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  // switch para mostar apenas uma rota
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
