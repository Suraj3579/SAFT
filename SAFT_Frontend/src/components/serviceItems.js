//serviceItems not being retrieved, should be able to delete serviceItems.
import React, { Component, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ButtonAppBar from "./ButtonAppBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import StarRateIcon from "@material-ui/icons/StarRate";
import star from "../images/star-solid.svg";
import ruppee from "../images/rupee-sign-solid.svg";
import Cards from "./card";
import Slider from "react-slick";
import GeoLocation from "./GeoLocation";
import Subservices from "./subservices";
const axios = require(`axios`);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffa000",
    },
    secondary: {
      main: "#ffa500",
    },
  },
});

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
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
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

const cards = [1, 2, 3, 4, 5, 6];

export default function Services(props) {
  const classes = useStyles();

  const settings = {
    arrows: true,
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const [subServices, setSubServices] = useState([])
  useEffect(() => {
    console.log("useffect");
    axios.get(`http://localhost:2000/api/serviceItems/${props.match.params.serviceId}`).then((res) => {
      setSubServices(res.data.serviceitems);
      console.log('res.data :>> ', res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ButtonAppBar lab="a" />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="me">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Services at your Finger Tips
                {/* {props.match.params.serviceId} */}
              </Typography>
              <GeoLocation />
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Here are the services available at your location.
              </Typography>
            </Container>
          </div>
          <Typography
            variant="h4"
            style={{ marginLeft: "50px", marginTop: "20px" }}
          >
            Service Category
          </Typography>
          <Slider {...settings} style={{ margin: "20px" }}>
            {subServices.map((card) => (
              <div key={card._id} style={{ padding: "20px" }}>
                <Cards cards1={card.name}
                      image={`http://localhost:2000/public/${card.servicePictures[0].img}`}
                      />
              </div>
            ))}
          </Slider>
          <hr
            style={{
              color: "orange",
              backgroundColor: "orange",
              height: 1,
              marginLeft: "50px",
              marginRight: "50px",
            }}
          />
          {/* <Typography
            variant="h4"
            style={{ marginLeft: "50px", marginTop: "20px" }}
          >
            Service Category
          </Typography>
          <Slider {...settings} style={{ margin: "20px" }}>
            {cards.map((card) => (
              <div key={card} style={{ padding: "20px" }}>
                <Cards cards1={card} />
              </div>
            ))}
          </Slider> */}
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Grid container className={classes.logoIcons}>
            <Grid item style={{ flex: 2 }}>
              <Typography variant="h3" color="primary">
                SAFT
              </Typography>
            </Grid>
            <Grid item style={{ flex: 3, marginTop: "1%" }}>
              <a href="www.facebook.com">
                <FacebookIcon
                  style={{ color: "white" }}
                  className={classes.iconlogo}
                />
              </a>
              <TwitterIcon
                style={{ color: "white" }}
                className={classes.iconlogo}
              />
              <InstagramIcon
                style={{ color: "white" }}
                className={classes.iconlogo}
              />
              <YouTubeIcon
                style={{ color: "white" }}
                className={classes.iconlogo}
              />
              <LinkedInIcon
                style={{ color: "white" }}
                className={classes.iconlogo}
              />
            </Grid>
          </Grid>
        </footer>
        {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
}
