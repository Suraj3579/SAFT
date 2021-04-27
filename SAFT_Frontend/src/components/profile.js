import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const user = {
  firstName: "Phanindra Reddy",
  lastName: "Vajrala",
  email: "vajrala@iitg.ac.in",
  contactNumber: "6302781108",
};

const Address = {
  firstName: "Phanindra Reddy",
  lastName: "Vajrala",
  addressline1: "Address Line 1",
  city: "City",
  country: "Country",
  postalcode: "PostalCode",
};

const paymentdetails = {
  nameoncard: "Name on Card",
  cardnumber: "Card Number",
  expirydate: "Expiry Date",
  cvv: "CVV",
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  large: {
    backgroundColor: "orange",
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

function Profile(props) {
  const classes = useStyles();

  if (props.name === "up") {
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Typography variant="h6" color="secondary">
            USER INFO
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
  } else if (props.name === "ad") {
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Typography variant="h6" color="secondary">
            ADDRESS
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
          <Typography variant="body1">
            {Address.firstName} {Address.lastName}
          </Typography>
          <Typography variant="body1">{Address.addressline1}</Typography>
          <Typography variant="body1">{Address.city}</Typography>
          <Typography variant="body1">{Address.country}</Typography>
          <Typography variant="body1">{Address.postalcode}</Typography>
        </div>
      </React.Fragment>
    );
  } else if (props.name === "pd") {
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Typography variant="h6" color="secondary">
            CARD DETAILS
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="button" style={{ marginRight: "10px" }}>
              NAME ON CARD :
            </Typography>
            <Typography variant="body1">{paymentdetails.nameoncard}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="button" style={{ marginRight: "10px" }}>
              CARD NUMBER :
            </Typography>
            <Typography variant="body1">{paymentdetails.cardnumber}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="button" style={{ marginRight: "10px" }}>
              EXPIRY DATE :
            </Typography>
            <Typography variant="body1">{paymentdetails.expirydate}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="button" style={{ marginRight: "10px" }}>
              CVV :
            </Typography>
            <Typography variant="body1">{paymentdetails.cvv}</Typography>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
