const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      min: 3,
      max: 20,
      required: true,
    },
    lastname: {
      type: String,
      trim: true,
      min: 3,
      max: 20,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      min: 3,
      max: 20,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      lowercase: true,
    },
    hashpassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    contactnumber: {
      type: String,
      //   required: false,
    },
    profilepic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.virtual('mypassword')
// .set(function(mypassword){
//     this.hashpassword = bcrypt.hashSync(mypassword,10);
// });

userSchema.virtual("fullname").get(function () {
  return `${this.firstname} ${this.lastname}`;
});

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hashpassword);
  },
};

module.exports = mongoose.model("User", userSchema);
