import React from "react";
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

const cards = [1, 2, 3, 4];

export default function Services() {
  const classes = useStyles();

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
                Services At FingerTips
              </Typography>
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
          <Container className={classes.cardGrid} maxWidth="sm">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={12} md={12}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Name of the Service
                      </Typography>
                      <StarRateIcon style={{ color: "green" }} edge="start" />
                      {/* <img
                        src={star}
                        className={classes.star}
                        alt=""
                        width="15"
                      /> */}
                      <Typography variant="subtitle1">$99</Typography>
                      <Button variant="contained" size="small" color="primary">
                        ADD
                      </Button>
                      <Typography variation="caption">
                        This is the first line of the content.The second line
                        would be second line only.
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button variant="contained" size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions> */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
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
