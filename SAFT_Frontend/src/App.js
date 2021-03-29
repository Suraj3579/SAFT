import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import Login from "./components/login";
import Home from "./components/home";
import SignUp from "./components/signUp";

const App = () => {
  return (
    <div>
      <Router>
        <ButtonAppBar />;
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
