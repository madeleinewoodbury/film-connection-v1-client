import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Fragment>
  );
};

export default App;
