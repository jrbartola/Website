import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';

/** App will be the main container for the website **/
const Router = () => (
  <Switch>
    <Route exact path="/" component={Container} />
  </Switch>
);

export default Router;
