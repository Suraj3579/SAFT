import React from "react";
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

export default function EditProfile() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar lab="none1" />
      <Container maxWidth="xs" style={{ marginTop: "100px" }}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography
            variant="h6"
            gutterBottom
            style={{ fontFamily: "Helvetica, sans-serif" }}
          >
            Edit Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                label="First Name"
                fullWidth
                autoComplete="cc-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                label="Last Name"
                fullWidth
                autoComplete="cc-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="mobileNumber"
                label="Mobile number"
                fullWidth
                autoComplete="cc-mobile"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="emailAddress"
                label="Email"
                fullWidth
                autoComplete="cc-email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                label="password"
                fullWidth
                autoComplete="cc-password"
              />
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
              href="/checkout"
            >
              <span>SAVE</span>
            </Button>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
