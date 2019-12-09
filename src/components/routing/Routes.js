import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../forms/Register';
import Login from '../forms/Login';
import Dashboard from '../dashboard/Dashboard';
import Discover from '../collections/Discover';
import Movie from '../movie/Movie';
import Collection from '../collections/Collection';
import Collections from '../collections/Collections';
import CreateCollection from '../forms/CreateCollection';
import EditCollection from '../forms/EditCollection';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/movies" component={Collection} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/create" component={CreateCollection} />
        <Route exact path="/edit" component={EditCollection} />
      </Switch>
    </section>
  );
};

export default Routes;
