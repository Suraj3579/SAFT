const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, "tuturu", {
    expiresIn: "1d",
  });
};

exports.signup = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        message: "User already Registered",
      });
    const { firstname, lastname, email, mypassword, contactnumber } = req.body;
    const hashpassword = await bcrypt.hash(mypassword, 10);
    const newuser = new User({
      firstname,
      lastname,
      email,
      hashpassword,
      contactnumber,
      username: Math.random().toString(),
    });
    newuser.save((error, data) => {
      if (data) {
        return res.status(201).json({
          user: data,
        });
      }
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
    });
  });
};

exports.login = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).exec(async (error, user) => {
    if (error)
      return res.status(400).json({
        error,
      });
    if (user) {
      if (
        (await user.authenticate(req.body.mypassword)) &&
        user.role === "user"
      ) {
        const token = generateJwtToken(user._id, user.role);
        const {
          firstname,
          lastname,
          email,
          contactnumber,
          role,
          fullname,
        } = user;
        res.status(200).json({
          token,
          user: {
            firstname,
            lastname,
            email,
            contactnumber,
            role,
            fullname,
          },
        });
      } else {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};
