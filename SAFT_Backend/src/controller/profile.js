const address = require("../models/address");
const User = require("../models/user");

exports.updateProfile = (req, res) => {
  //return res.status(200).json({body: req.body})
  const { payload } = req.body;
  if (payload.user) {
    if (payload.user._id) {
        console.log(payload.user)
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $set: {
            contactnumber: payload.user.contactnumber,
            firstname: payload.user.firstname,
            lastname: payload.user.lastname,
          },
        },
        {
            new:true,
            returnOriginal: false
        }).exec((error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
          res.status(201).json({ user });
        }
      });
    } 
}
    else {
    res.status(400).json({ error: "Params user required" });
  }
};

exports.getProfile = (req, res) => {
  User.findOne({ _id: req.user._id }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      res.status(200).json({ user });
    }
  });
};