import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SignUpPageRight from "./signUpPageRight";
import homeBGimage from "../images/homeBGimage.jpg";
import Login from "./login";
const useStyles = makeStyles((theme) => ({
  imageForm: {
    display: "flex",
  },

  image: {
    backgroundImage: `url(${homeBGimage})`,
    // "url(https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/homeservice.jpg)",
    // width: "66%",
    height: "90.6vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid>
      <CssBaseline />
      <ButtonAppBar lab="none" />
      <Grid className={classes.imageForm}>
        <Grid className={classes.image}></Grid>
        <Grid className={classes.signUpPage}>
          <SignUpPageRight />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
