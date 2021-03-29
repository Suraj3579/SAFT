import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@material-ui/core";
import logo from "../images/logo.jpeg";
// import { createMuiTheme } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "white",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: 10,
  },
  button: {
    flex: 1,
    color: "orange",
    sizeLarge: "1",
  },
  logo: {
    height: "10vh",
    weight: "10vw",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="white" style={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <img src={logo} className={classes.logo} />
          </Link>
          <Button size="large" href="/login" className={classes.button}>
            Login
          </Button>
          <Button size="large" href="/signUp" className={classes.button}>
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
