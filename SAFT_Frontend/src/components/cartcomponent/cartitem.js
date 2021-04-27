import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

function CartItem(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1573399054516-90665ecc44be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dGVsZXZpc2lvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
            style={{ width: "120px", height: "120px" }}
          />
          <Typography
            variant="button"
            style={{
              marginRight: "10px",
              marginLeft: "20px",
              fontWeight: "bold",
            }}
          >
            {props.service.category} / {props.service.name}
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "orange",
              marginLeft: "auto",
              marginRight: "40px",
              fontFamily: "Helvetica, sans-serif",
              fontWeight: "bold",
            }}
          >
            ₹{props.service.cost}
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            style={{
              marginBottom: "10px",
              marginLeft: "auto",
              color: "white",
            }}
            href="/checkout"
          >
            <span>REMOVE</span>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartItem;
