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
import ButtonAppBar from "./ButtonAppBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [
  {
    id: 1,
    serviceName: "cleaning",
    image:
      "https://image.freepik.com/free-vector/poster-template-house-cleaning-services-with-various-cleaning-items_1416-1235.jpg",
  },
  {
    id: 2,
    serviceName: "TV and Electronics",
    image:
      "https://images.unsplash.com/photo-1573399054516-90665ecc44be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dGVsZXZpc2lvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: 3,
    serviceName: "Furniture Assembly",
    image:
      "https://image.freepik.com/free-vector/furniture-assembly-isometric-illustration_1284-24376.jpg",
  },
  {
    id: 4,
    serviceName: "General Handyman",
    image:
      "https://content3.jdmagicbox.com/comp/bangalore/y7/080pxx80.xx80.200126073512.l3y7/catalogue/quick-time-handyman-services-mahalakshmipuram-layout-bangalore-plumbers-fnt0xst1jf.jpg?clr=263340",
  },
  {
    id: 5,
    serviceName: "Plumbing",
    image:
      "https://cdn4.vectorstock.com/i/1000x1000/45/88/plumbing-service-flat-poster-plumber-vector-18794588.jpg",
  },
  {
    id: 6,
    serviceName: "Electrical",
    image:
      "https://thumbs.dreamstime.com/b/electrical-service-worker-electrician-tools-electrician-profession-man-work-tools-electrical-equipment-vector-lineman-154121084.jpg",
  },
  {
    id: 7,
    serviceName: "Painting",
    image:
      "https://secureservercdn.net/160.153.137.14/v6t.3da.myftpupload.com/wp-content/uploads/2020/05/Interior-Painting-Homezist-Painter-300x300.jpg",
  },
  {
    id: 8,
    serviceName: "Moving",
    image:
      "https://www.shiftingwale.com/resources/media/Packing_and_Moving_Services,_Moving_and_Packing_Services.jpg",
  },
  {
    id: 9,
    serviceName: "Smart Home",
    image: "https://www.asmag.com/upload/pic/case/65711.136375.jpg",
  },
  {
    id: 10,
    serviceName: "Window Treatments",
    image:
      "https://i.pinimg.com/originals/6d/24/77/6d24771302dd67e5735d09de7b2a9e49.jpg",
  },
];

export default function AfterLogin() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ButtonAppBar lab="none" />
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
              {/* <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div> */}
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.serviceName}
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
}
