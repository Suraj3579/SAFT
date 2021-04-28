import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
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
import Paper from "@material-ui/core/Paper";
import logo from "../images/logo.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import cleaningImage from "../images/broom-solid.svg";
// import { useHistory } from "react-router";
var axios = require(`axios`);

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
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0),
      width: theme.spacing(16),
      height: theme.spacing(20),
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(8),
    paddingBottom: "1%",
    boxShadow: "0px 1px 10px 10px #9E9E9E",
    marginBottom: "10%",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "80%", // 16:9
    width: "30",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "black",
    padding: theme.spacing(6),
  },
  mycard: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  logoIcons: {
    dislay: "flex",
  },
  logo: {
    height: "4vh",
    weight: "4vw",
  },
  iconlogo: {
    height: "3vh",
    width: "4vh",
    marginRight: "3px",
  },
}));
{
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cards = [
//   {
//     id: 1,
//     serviceName: "Cleaning",
//     image: cleaningImage,
//   },
//   {
//     id: 2,
//     serviceName: "Electronics",
//     image:
//       "https://images.unsplash.com/photo-1573399054516-90665ecc44be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dGVsZXZpc2lvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//   },
//   {
//     id: 3,
//     serviceName: "Assembly",
//     image:
//       "https://image.freepik.com/free-vector/furniture-assembly-isometric-illustration_1284-24376.jpg",
//   },
//   {
//     id: 4,
//     serviceName: "Handyman",
//     image:
//       "https://content3.jdmagicbox.com/comp/bangalore/y7/080pxx80.xx80.200126073512.l3y7/catalogue/quick-time-handyman-services-mahalakshmipuram-layout-bangalore-plumbers-fnt0xst1jf.jpg?clr=263340",
//   },
//   {
//     id: 5,
//     serviceName: "Plumbing",
//     image:
//       "https://cdn4.vectorstock.com/i/1000x1000/45/88/plumbing-service-flat-poster-plumber-vector-18794588.jpg",
//   },
//   {
//     id: 6,
//     serviceName: "Electrical",
//     image:
//       "https://thumbs.dreamstime.com/b/electrical-service-worker-electrician-tools-electrician-profession-man-work-tools-electrical-equipment-vector-lineman-154121084.jpg",
//   },
//   {
//     id: 7,
//     serviceName: "Painting",
//     image:
//       "https://secureservercdn.net/160.153.137.14/v6t.3da.myftpupload.com/wp-content/uploads/2020/05/Interior-Painting-Homezist-Painter-300x300.jpg",
//   },
//   {
//     id: 8,
//     serviceName: "Moving",
//     image:
//       "https://www.shiftingwale.com/resources/media/Packing_and_Moving_Services,_Moving_and_Packing_Services.jpg",
//   },
//   {
//     id: 9,
//     serviceName: "SmartHome",
//     image: "https://www.asmag.com/upload/pic/case/65711.136375.jpg",
//   },
//   {
//     id: 10,
//     serviceName: "Salon",
//     image:
//       "https://media.istockphoto.com/vectors/-vector-id1220134013?k=6&m=1220134013&s=612x612&w=0&h=2dDMsVq-X1ALxsnV1TwA8PVN7af7uvCB-Oia45-NZ-Y=",
//   },
// ];
}
export default function AfterLogin() {
  const classes = useStyles();
  // const history = useHistory();
  // const { useremail, userfullname } = history.location.state;
  const [allServicesArray, setallServicesArray] = useState([]);
  const [userObj, setuserObj] = useState()
  useEffect(() => {
    console.log("useffect");
    var userObject={
      _id:localStorage.getItem('userId'),
      fullname:localStorage.getItem('userFullName'),
      email:localStorage.getItem('userEmail')
    }
    setuserObj(userObject);
    axios.get("http://localhost:2000/api/services/getservices").then((res) => {
      setallServicesArray(res.data.servicesList);
      console.log('res.data :>> ', res.data.servicesList);
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
              <Typography align="center" style={{fontWeight:"bold", marginBottom:'10px', fontSize:'25px'}}>Welcome {userObj?userObj.fullname:""}</Typography>
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
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={1} className={classes.root}>
              {allServicesArray.map((card) => (
                <Grid
                  item
                  key={card._id}
                  xs={12}
                  sm={6}
                  md={2}
                  className={classes.mycard}
                >
                  <Card className={classes.card} elevation={0} square="false">
                    <CardActionArea href={`services/${card._id}`}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={`http://localhost:2000/public/${card.servicePictures[0].img}`}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="h2"
                          align="center"
                        >
                          {card.name}
                        </Typography>
                        {/* <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography> */}
                      </CardContent>
                      {/* <CardActions>
                      <Button size="small" color="primary">
                        Add to Cart
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions> */}
                    </CardActionArea>
                  </Card>
                  {/* <Paper elevation={0}>
                    <Typography
                      href="/"
                      gutterBottom
                      variant="h6"
                      component="h2"
                    >
                      {card.serviceName}
                    </Typography>
                  </Paper> */}
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
