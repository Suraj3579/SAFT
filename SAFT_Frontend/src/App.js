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
import Services from "./components/services";
import SimpleSlider from "./components/slicker";
import Checkout from "./components/checkoutcomponent/Checkout";

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
          <Route path="/cart">
            <Checkout />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/services/:serviceId" component={Services} />
          <Route path="/slicker">
            <SimpleSlider />
          </Route>
          <Route path="/checkout">
            <Checkout />
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
