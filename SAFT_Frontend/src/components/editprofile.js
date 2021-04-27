import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ButtonAppBar from "./ButtonAppBar";
import { CssBaseline } from "@material-ui/core";
const axios = require(`axios`);

export default function EditProfile() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [contactnumber, setcontactnumber] = useState("");
  // const [userObj, setuserObj] = useState();
  const headers = {
    Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  };
  useEffect(() => {
    var userObj = {
      user: {
        _id: localStorage.getItem("userId"),
      },
    };
    axios
      .post(`http://localhost:2000/api/user/getprofile`, userObj, {
        headers: headers,
      })
      .then((res) => {
        console.log("res=> ", res);
        // setuserObj(res.data.user);
        setfirstName(res.data.user.firstname);
        setlastName(res.data.user.lastname);
        setcontactnumber(res.data.user.contactnumber);
      });
  }, []);

  const onClickSaveProfile = (e) => {
    e.preventDefault();
    const userObj = {
      _id: localStorage.getItem("userId"),
      firstname: firstName,
      lastname: lastName,
      contactnumber: contactnumber,
    };
    const data = {
      payload: {
        user: userObj,
      },
    };

    axios
      .post(`http://localhost:2000/api/user/profile/update`, data, { headers })
      .then((res) => {
        console.log("profile update: ", res);
        alert("Profile details changed");
        localStorage.setItem("userFullName", firstName + " " + lastName);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <ButtonAppBar lab="none1" /> */}
      {/* <Container maxWidth="xs" style={{ marginTop: "100px" }}> */}
      {/* <Paper elevation={3} style={{ padding: "20px" }}> */}
      <Typography variant="h6" color="secondary">
        Profile
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="button"
            gutterBottom
            style={{ fontFamily: "Helvetica, sans-serif", fontWeight: "bold" }}
          >
            First name
          </Typography>
          <TextField
            id="firstName"
            fullWidth
            autoComplete="cc-name"
            // label={userObj?userObj.firstname:""}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
            value={firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="button"
            gutterBottom
            style={{ fontFamily: "Helvetica, sans-serif", fontWeight: "bold" }}
          >
            Last name
          </Typography>
          <TextField
            id="lastName"
            // label="Last Name"
            fullWidth
            autoComplete="cc-name"
            // label={userObj?userObj.lastname:""}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            value={lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="button"
            gutterBottom
            style={{ fontFamily: "Helvetica, sans-serif", fontWeight: "bold" }}
          >
            Mobile number
          </Typography>
          <TextField
            id="mobileNumber"
            fullWidth
            autoComplete="cc-mobile"
            // label={userObj?userObj.contactnumber:""}
            onChange={(e) => {
              setcontactnumber(e.target.value);
            }}
            value={contactnumber}
            error={contactnumber.length != 10}
          />
        </Grid>
        {/* <Grid item xs={12}>
                <TextField
                  required
                  id="emailAddress"
                  label="Email"
                  fullWidth
                  autoComplete="cc-email"
                />
              </Grid> */}
        <Grid item xs={12}>
          {/* <TextField
            required
            id="password"
            label="password"
            fullWidth
            autoComplete="cc-password"
          /> */}
        </Grid>
        {/* <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid> */}
        <Button
          variant="contained"
          size="small"
          color="secondary"
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
          }}
          // href="/checkout"
          onClick={onClickSaveProfile}
        >
          <span>SAVE</span>
        </Button>
      </Grid>
      {/* </Paper> */}
      {/* </Container> */}
    </React.Fragment>
  );
}
