import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/Redux';

import Views from './views';

const App = () => (
  <ConnectedRouter key="router" history={history}>
    <Switch>
      <Route key="home" name="Home" exact path="/" component={Views.Home} />
    </Switch>
  </ConnectedRouter>
);

export default App;
