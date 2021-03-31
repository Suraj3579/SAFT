import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const axios = require("axios");
const emailValidator = require("email-validator");
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#ff9100",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [userFirstName, setUserFirstName] = useState({
    val: "",
    errorFlag: false,
    error: "",
  });
  const [userLastName, setUserLastName] = useState({
    val: "",
    errorFlag: false,
    errorMessage: "",
  });
  const [userEmail, setUserEmail] = useState({
    val: "",
    errorFlag: false,
    errorMessage: "",
  });
  const [userContactNumber, setUserContactNumber] = useState({
    val: "",
    errorFlag: false,
    errorMessage: "",
  });
  const [userPassword, setUserPassword] = useState({
    val: "",
    errorFlag: false,
    errorMessage: "",
  });
  const onClickSignUp = (e) => {
    e.preventDefault();
    const userObj = {
      firstname: userFirstName.val,
      lastname: userLastName.val,
      email: userEmail.val,
      contactnumber: userContactNumber.val,
      mypassword: userPassword.val,
    };
    // console.log(userObj);
    axios
      .post(`http://localhost:2000/api/signup`, userObj)
      .then((res) => {
        console.log(("response", res));
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={userFirstName.val}
                  onChange={(e) => {
                    setUserFirstName({ val: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={userLastName.val}
                  onChange={(e) => {
                    setUserLastName({ val: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={userEmail.errorFlag}
                  value={userEmail.val}
                  onChange={(e) => {
                    if (!emailValidator.validate(e.target.value)) {
                      setUserEmail({
                        val: e.target.value,
                        errorFlag: true,
                        errorMessage: "Check your email address",
                      });
                    } else {
                      setUserEmail({
                        val: e.target.value,
                        errorFlag: false,
                        errorMessage: "",
                      });
                    }
                  }}
                />
                <p>{userEmail.errorMessage}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="contactnumber"
                  label="Contact Number"
                  type="tel"
                  id="contact number"
                  autoComplete="tel"
                  error={userContactNumber.errorFlag}
                  value={userContactNumber.val}
                  onChange={(e) => {
                    if (e.target.value.length != 10) {
                      setUserContactNumber({
                        errorFlag: true,
                        errorMessage: "Invalid Contact number",
                        val: e.target.value,
                      });
                    } else {
                      setUserContactNumber({
                        val: e.target.value,
                        errorFlag: false,
                      });
                    }
                  }}
                />
                <p>{userContactNumber.errorMessage}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="********"
                  error={userPassword.errorFlag}
                  value={userPassword.val}
                  onChange={(e) => {
                    if (e.target.value.length < 6) {
                      setUserPassword({
                        val: e.target.value,
                        errorFlag: true,
                        errorMessage: "Number of characters less than 6",
                      });
                    } else {
                      setUserPassword({
                        val: e.target.value,
                        errorFlag: false,
                      });
                    }
                  }}
                />
                <p>{userPassword.errorMessage}</p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disableElevation
              onClick={onClickSignUp}
              // disabled={
              //   userEmail.errorFlag ||
              //   userContactNumber.errorFlag ||
              //   userPassword.errorFlag
              // }
            >
              Sign Up
            </Button>
            {/* <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
        {/* <Box mt={5}>
        <Copyright />
      </Box> */}
      </Container>
    </div>
  );
}
