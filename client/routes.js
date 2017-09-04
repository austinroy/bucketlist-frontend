import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "././components/App.jsx";
import LandingPage from "././components/Landing/LandingPage.jsx"

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
  </Route>
);
