import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import UserInfo from "../components/UserInfo";

export const history = createBrowserHistory();

const AppRoute = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact={true} component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/user/:id" component={UserInfo} />
        <Route path="/edit/:id" component={UserInfo} />
      </Switch>
    </div>
  </Router>
);

export default AppRoute;
