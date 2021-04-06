import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ButtonAppBar from "./components/ButtonAppBar";
import AfterLogin from "./components/afterlogin";
import Login from "./components/login";
import Home from "./components/home";
import SignUp from "./components/signUp";
import Notfound from "./components/notfound";

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
          <Route path="/">
            <Home />
          </Route>
          <Route path="/after">
            <AfterLogin />
          </Route>
          <Route path="*" exact component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
