import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <h1>Yo!</h1>
      </div>
    </Fragment>
  );
};

export default App;
