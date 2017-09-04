import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "././components/App.jsx";
import LandingPage from "././components/Landing/LandingPage.jsx";
import LoginForm from "././components/Auth/LogIn.jsx";
import RegForm from "././components/Auth/Register.jsx";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/register" component={RegForm} />
    <Route path="/login" component={LoginForm} />
  </Route>
);
