import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "././components/App.jsx";
import LandingPage from "././components/Landing/LandingPage.jsx";
import LoginForm from "././components/Auth/LogIn.jsx";
import RegForm from "././components/Auth/Register.jsx";
import BucketlistsPage from "././components/BucketlistView/BucketPage.jsx";


// function loggedIn() {
//   let token = localStorage.getItem("bucket-token");
//   if(token) {
//     return true
//   } else {
//     return false
//   }
// }
//
// function requireAuth(nextState, replace) {
//   if (!loggedIn()) {
//     replace({
//       pathname: '/login'
//     })
//   }
// }

function isAdmin(nextState, replace) {
  let token = localStorage.getItem("token");
  //decode the token
  // Check whether the user is an admin
  //if not admin redirect to the dashboard.
}


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/register" component={RegForm} />
    <Route path="/login" component={LoginForm} />
    <Route path="/bucketlists" component={BucketlistsPage} />
    {/*<Route path="/bucketlists" component={BucketlistsPage} onEnter={requireAuth}/>*/}
  </Route>
);
