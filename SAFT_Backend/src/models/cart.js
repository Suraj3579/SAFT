const mongoose = require("mongoose");
const user = require("../models/user");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cartItems = [
        {
            item : {
              type : mongoose.Schema.Types.ObjectId,
              ref: 'ServiceItems',
              required : true
            },
            quantity : {
              type : Number,
              default : 1
            },
            price : {
              type : Number,
              required : true
            }
        }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
