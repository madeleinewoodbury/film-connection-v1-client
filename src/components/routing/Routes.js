import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Register from '../forms/Register';
import Login from '../forms/Login';
import Dashboard from '../dashboard/Dashboard';
import Discover from '../collections/Discover';
import Movie from '../movie/Movie';
import Movies from '../movie/Movies';
import Collection from '../collections/Collection';
import Collections from '../collections/Collections';
import CreateCollection from '../forms/CreateCollection';
import EditCollection from '../forms/EditCollection';
import Alert from '../layout/Alert';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/collections" component={Collections} />
        <Route exact path="/create" component={CreateCollection} />
        <Route exact path="/edit" component={EditCollection} />
      </Switch>
    </section>
  );
};

export default Routes;
