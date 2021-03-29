import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, CssBaseline, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage:
      "url(https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Banner.png)",
    // backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[50]
    //     : theme.palette.grey[900],
    // backgroundSize: "cover",
    // backgroundPosition: "center",
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
