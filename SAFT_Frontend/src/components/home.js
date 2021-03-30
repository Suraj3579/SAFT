import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CssBaseline, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SignUpPageRight from "./signUpPageRight";

const useStyles = makeStyles((theme) => ({
  imageForm: {
    display: "flex",
  },

  image: {
    backgroundImage:
      "url(https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/homeservice.jpg)",
    width: "66%",
    height: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid>
      <CssBaseline />
      <ButtonAppBar lab="h" />
      <Grid className={classes.imageForm}>
        <Grid className={classes.image}></Grid>
        <Grid>
          <SignUpPageRight />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
