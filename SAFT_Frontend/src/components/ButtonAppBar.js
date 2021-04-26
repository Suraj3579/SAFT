import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";
import logo from "../images/logo.jpeg";
import cart from "../images/cart-plus-solid.svg";
import user from "../images/user-circle-solid.svg";
import { IoIosArrowDown, IoIosCart } from "react-icons/io";
import DropdownMenu from "./dropdowncomponent/dropdownmenu";
import "./Buttonstyle.css";
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
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flex: 10,
  },
  button: {
    flex: 1,
    color: "orange",
    sizeLarge: "1",
  },
  logo: {
    height: "8vh",
    weight: "8vw",
  },

  cart: {
    marginRight: "50px",
  },

  user: {
    marginRight: "20px",
  },

  cartspan: {
    background: "orange",
    borderRadius: "20px",
    color: "white",
    position: "absolute",
    top: "15px",
    right: "115px",
    padding: "5px 7px",
    fontSize: "10px",
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  if (props.lab === "none") {
    return (
      <div className={classes.root}>
        <AppBar style={{ position: "relative", backgroundColor: "white" }}>
          <Toolbar>
            <Link href="/" className={classes.title}>
              <img src={logo} className={classes.logo} alt="" />
            </Link>
            <div>
              <DropdownMenu
                menu={
                  <a className="more">
                    <span>More</span>
                    <IoIosArrowDown />
                  </a>
                }
                menus={[
                  {
                    label: "Want to become a SAFT professional?",
                    href: "",
                    icon: null,
                  },
                  { label: "24x7 Customer Care", href: "", icon: null },
                  { label: "Advertise on SAFT", href: "", icon: null },
                ]}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else if (props.lab === "none1") {
    return (
      <div className={classes.root}>
        <AppBar style={{ position: "relative", backgroundColor: "white" }}>
          <Toolbar>
            <Link href="/" className={classes.title}>
              <img src={logo} className={classes.logo} alt="" />
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else if (props.lab === "h") {
    return (
      <div className={classes.root}>
        <AppBar color="white" style={{ position: "relative" }}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Link href="/" className={classes.title}>
              <img src={logo} className={classes.logo} alt="" />
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
  } else if (props.lab === "s") {
    return (
      <div className={classes.root}>
        <AppBar color="white" style={{ position: "relative" }}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Link href="/" className={classes.title}>
              <img src={logo} className={classes.logo} alt="" />
            </Link>
            <Button size="large" href="/login" className={classes.button}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else if (props.lab === "l") {
    return (
      <div className={classes.root}>
        <AppBar color="white" style={{ position: "relative" }}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Link href="/" className={classes.title}>
              <img src={logo} className={classes.logo} alt="" />
            </Link>

            <Button size="large" href="/signUp" className={classes.button}>
              SignUp
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else if (props.lab == "a") {
    return (
      <div className={classes.root}>
        <AppBar style={{ position: "relative", backgroundColor: "white" }}>
          <Toolbar>
            <Link href="/" className={classes.title}>
              <img src={logo} className={classes.logo} alt="" />
            </Link>
            <div>
              <span className={classes.cartspan}>0</span>
              <Link href="/cart">
                <img src={cart} className={classes.cart} alt="" width="30" />
              </Link>
            </div>
            <Link href="/dashboard">
              <img src={user} className={classes.user} alt="" width="30" />
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
