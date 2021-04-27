const mongoose = require("mongoose");

// C
const addressSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 50,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 50,
  },
  mobilenumber: {
    type: String,
    required: true,
    min: 10,
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
  },
  address1: {
    type: String,
    required: true,
    trim: true,
    min: 10,
    max: 100,
  },
  address2: {
    type: String,
    trim: true,
    min: 10,
    max: 100,
  },
  cityDistrictTown: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  // addressType: {
  //   type: String,
  //   required: true,
  //   enum: ["home", "work"],
  //   required: true,
  // },
});

const userAddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    address: [addressSchema],
  },
  { timestamps: true }
);

mongoose.model("Address", addressSchema);
module.exports = mongoose.model("UserAddress", userAddressSchema);