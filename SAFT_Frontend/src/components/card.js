import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { IoIosCart, IoIosThunderstorm } from "react-icons/io";
import { Thunder } from "react-icons/ai";
const axios = require(`axios`);
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

const headers = {
  Authorization: "Bearer " + localStorage.getItem("jwtToken"),
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "50px",
  },
  cardMedia: {
    //margin: "20px",
    paddingTop: "56.25%", // 16:9
    //padding: "20px",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "black",
    padding: theme.spacing(6),
  },
  logoIcons: {
    dislay: "flex",
  },
  iconlogo: {
    height: "3vh",
    width: "4vh",
    marginRight: "3px",
  },
  star: {
    marginBottom: "5px",
  },
}));

function Cards(props) {
  const classes = useStyles();

  const onClickAddtoCart = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:2000/api/user/cart/add-to-cart`,
        {
          cartItems: [{
            serviceiteam: props.id,
            quantity: 1,
            price: props.price,
          }],
        },
        { headers }
      )
      .then((res) => {
        alert("service item added to card");
        console.log("res-card--> ", res);
      })
      .catch((error) => {
        console.log("error-card--> ", error);
      });
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={props.image}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* <StarRateIcon
                          style={{ color: "green", marginLeft: "0px" }}
                          edge="start"
                        /> */}
              <Typography variant="h6" style={{ color: "green" }}>
                ★
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: "green", marginRight: "10px" }}
              >
                {props.rating}
              </Typography>
              <Typography variant="caption" style={{ color: "grey" }}>
                {props.ratingsCount}
              </Typography>
              {/* <Button
                variant="contained"
                size="small"
                color="primary"
                style={{
                  marginBottom: "10px",
                  marginLeft: "auto",
                  color: "white",
                }}
                href="/checkout"
              >
                <span>CHECKOUT</span>
              </Button> */}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom="true"
                style={{ color: "crimson" }}
              >
                ₹{props.price}
              </Typography>
              <Button
                variant="contained"
                size="small"
                color="primary"
                style={{
                  marginBottom: "10px",
                  marginLeft: "auto",
                  color: "white",
                }}
                href="/cart"
                onClick={onClickAddtoCart}
              >
                <IoIosCart />
                <span style={{ marginLeft: "10px" }}>ADD TO CART</span>
              </Button>
            </div>
            <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 1,
              }}
            />
            <Typography variation="caption">{props.caption}</Typography>
          </CardContent>
          {/* <CardActions>
                      <Button variant="contained" size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions> */}
        </Card>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Cards;
