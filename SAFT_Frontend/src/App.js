import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ButtonAppBar from "./components/ButtonAppBar";
import AfterLogin from "./components/afterlogin";
import Login from "./components/login";
import Home from "./components/home";
import SignUp from "./components/signUp";
import Notfound from "./components/notfound";
import Products from "./components/products";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <Router>
        {/* <ButtonAppBar /> */}
        <Switch>
          <Route path="/after">
            <AfterLogin />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route> */}

          <Route path="/after">
            <AfterLogin />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
