import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CssBaseline, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage:
      "url(https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/homeservice.jpg)",
    width: "100vw",
    height: "90vh",
    backgroundSize: "cover",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <ButtonAppBar />
      <div className={classes.image}>
        <Typography variant="h6">.</Typography>
      </div>
    </div>
  );
};

export default Home;
