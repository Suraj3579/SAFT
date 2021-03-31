import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ButtonAppBar from "./ButtonAppBar";
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
    backgroundColor: theme.palette.primary,
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: "#ff9100",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [userEmail, setUserEmail] = useState({
    val: "",
    errorFlag: false,
    errorMessage: "",
  });
  const [userPassword, setUserPassword] = useState({
    val: "",
    errorFlag: false,
    errorMessage: "",
  });
  const [error, setError] = useState(""); //this error is the error we get from the server
  const onClickLogIn = (e) => {
    e.preventDefault();
    const userObj = {
      email: userEmail,
      mypassword: userPassword,
    };
    setError("");
    axios
      .post(`http://localhost:2000/api/login`, userObj)
      .then((res) => {
        console.log(("response", res));
        console.log("lollll");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });
  };
  return (
    <div styles={{ backgroundColor: "orange" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
                    errorMessage: "",
                  });
                }
              }}
            />
            <p style={{ color: "red" }}>{userPassword.errorMessage}</p>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <p style={{ color: "red" }}>{error}</p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disableElevation
              onClick={onClickLogIn}
            >
              Log In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
