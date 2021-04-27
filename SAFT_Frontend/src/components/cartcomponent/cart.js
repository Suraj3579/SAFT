import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ButtonAppBar from "../ButtonAppBar";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffa000",
    },
    secondary: {
      main: "#dc143c",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    verticalAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: "125px",
      width: theme.spacing(50),
      height: theme.spacing(75),
    },
  },

  leftpaper: {
    width: "1000px",
  },
  cartTotal: {
    margin: "20px",
    marginLeft: "40px",
    marginBottom: "15px",
    color: "orange",
    fontFamily: "Helvetica, sans-serif",
  },
  subtotal: {
    margin: "15px",
    marginLeft: "40px",
    marginBottom: "15px",
    color: "black",
    fontFamily: "Helvetica, sans-serif",
  },
  submit: {
    marginTop: "100px",
    marginRight: "40px",
    marginLeft: "40px",
    marginBottom: "10px",
    height: "50px",
    width: "320px",
  },
  submit1: {
    margin: "10px",
    marginLeft: "40px",
    marginRight: "40px",
    height: "50px",
    width: "320px",
    color: "white",
  },
}));

function Cart() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ButtonAppBar lab="a" />
        <div className={classes.root}>
          <Paper elevation={1} className={classes.leftpaper} />
          <Paper elevation={3}>
            <Typography
              variant="h5"
              color="primary"
              className={classes.cartTotal}
            >
              CART TOTAL
            </Typography>
            <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 1,
                marginLeft: "40px",
                marginRight: "40px",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h6"
                color="primary"
                className={classes.subtotal}
              >
                SUBTOTAL
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "crimson",
                  marginLeft: "auto",
                  marginRight: "40px",
                  fontFamily: "Helvetica, sans-serif",
                }}
              >
                ₹99
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h6"
                color="primary"
                className={classes.subtotal}
              >
                GST & Other Charges
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "crimson",
                  marginLeft: "auto",
                  marginRight: "40px",
                  fontFamily: "Helvetica, sans-serif",
                }}
              >
                ₹10
              </Typography>
            </div>
            <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 1,
                marginLeft: "40px",
                marginRight: "40px",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h6"
                color="primary"
                className={classes.subtotal}
              >
                TOTAL
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "crimson",
                  marginLeft: "auto",
                  marginRight: "40px",
                  fontFamily: "Helvetica, sans-serif",
                  fontWeight: "bold",
                }}
              >
                ₹109
              </Typography>
            </div>
            <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 1,
                marginLeft: "40px",
                marginRight: "40px",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              WANT MORE SERVICES ??
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit1}
            >
              PROCEED TO CHECKOUT
            </Button>
          </Paper>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Cart;
