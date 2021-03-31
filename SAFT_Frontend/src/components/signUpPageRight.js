import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SignUpComponent from "./signUp";
import Link from "@material-ui/core/Link";
import LoginComponent from "./login";

class SignUpPageRight extends Component {
  constructor(props) {
    super(props);
    this.signUpScreen = (
      <Grid>
        <SignUpComponent />
        <Grid container justify="center">
          <Grid item>
            <Link href="#" onClick={() => this.changeToLogin()}>
              Already have an account? <b>Log in</b>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );

    this.loginScreen = (
      <Grid>
        <LoginComponent />
        <Grid container>
          <Grid item xs style={{ paddingLeft: 10 }}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item style={{ paddingRight: 10 }}>
            <Link
              href="#"
              variant="body2"
              onClick={() => this.changeToSignUp()}
            >
              Don't have an account? <b>Sign Up</b>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
    this.state = { displayContent: this.signUpScreen };
    this.setState = this.setState.bind(this);
  }
  changeToLogin() {
    this.setState({ displayContent: this.loginScreen });
  }

  changeToSignUp() {
    this.setState({ displayContent: this.signUpScreen });
  }
  render() {
    return this.state.displayContent;
  }
}

export default SignUpPageRight;
