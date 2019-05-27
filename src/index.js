import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRoute, { history } from "./routers/AppRouter";
import { firebase } from "./authentication/initializeAuth";
import { login, logout } from "./actions/auth";
import "./styles/styles.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap"

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRoute />
  </Provider>
);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    history.location.pathname === "/" && history.push("/home");
  } else {
    store.dispatch(logout());
    history.push("/");
  }
});

ReactDOM.render(<App />, document.getElementById("app"));
