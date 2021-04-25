import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const user = {
  firstName: "Phanindra Reddy",
  lastName: "Vajrala",
  email: "vajrala@iitg.ac.in",
  contactNumber: "6302781108",
};

const useStyles = makeStyles((theme) => ({
  // root: {
  //   margin: "auto",
  // },
  large: {
    backgroundColor: "orange",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography variant="h6" color="primary">
          User Info
        </Typography>
        <hr
          style={{
            color: "orange",
            backgroundColor: "orange",
            height: 1,
            marginLeft: "0px",
            marginRight: "0px",
          }}
        />
        <Avatar className={classes.large}>
          {user.firstName[0]}
          {user.lastName[0]}
        </Avatar>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="button" style={{ marginRight: "10px" }}>
            First Name :
          </Typography>
          <Typography variant="body1">{user.firstName}</Typography>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="button" style={{ marginRight: "10px" }}>
            Last Name :
          </Typography>
          <Typography variant="body1">{user.lastName}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="button" style={{ marginRight: "10px" }}>
            Email :
          </Typography>
          <Typography variant="body1">{user.email}</Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="button" style={{ marginRight: "10px" }}>
            Mobile :
          </Typography>
          <Typography variant="body1">{user.contactNumber}</Typography>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
