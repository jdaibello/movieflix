import React from 'react';
import PrivateRoute from 'core/Routes/PrivateRoute';
import Catalog from 'pages/Catalog';
import { Switch, Route, Router } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import history from 'core/utils/history';
import MovieDetails from 'pages/Catalog/components/MovieDetails';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies" exact>
        <Catalog />
      </PrivateRoute>
      <PrivateRoute path="/movies/:movieId">
        <MovieDetails />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;