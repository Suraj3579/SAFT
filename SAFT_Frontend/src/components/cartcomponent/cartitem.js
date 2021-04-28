import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const axios=require(`axios`)
const headers = {
  Authorization: "Bearer " + localStorage.getItem("jwtToken"),
};

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

  const removeItem = () => {
    axios
      .post(
        `http://localhost:2000/api/user/cart/removeItem`,
        {
            serviceitem: props.id,
        },
        { headers }
      )
      .then((res) => {
        alert("service item remove from card");
        console.log("res-card--> ", res);
      })
      .catch((error) => {
        console.log("error-card--> ", error);
      });
  };
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
            src={`http://localhost:2000/public/${props.service.img}`}
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
            {props.service.name}
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
            ₹{props.service.price}
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
            // onClick={removeItem}
          >
            <span>REMOVE</span>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartItem;
