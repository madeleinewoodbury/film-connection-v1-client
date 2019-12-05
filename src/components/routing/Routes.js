import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Discover from '../discover/Discover';
import Movie from '../movie/Movie';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/movie" component={Movie} />
      </Switch>
    </section>
  );
};

export default Routes;
