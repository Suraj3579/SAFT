const address = require("../models/address");
const User = require("../models/user");

exports.updateProfile = (req, res) => {
  //return res.status(200).json({body: req.body})
  const { payload } = req.body;
  if (payload.user) {
    if (payload.user._id) {
      User.findOneAndUpdate(
        { user: req.user._id, "user._id": payload.user._id },
        {
          $set: {
            "user.$": payload.user,
          },
        }
      ).exec((error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
          res.status(201).json({ user });
        }
      });
    } else {
      User.findOneAndUpdate(
        { user: req.user._id },
        {
          $push: {
            user: payload.user,
          },
        },
        { new: true, upsert: true }
      ).exec((error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
          res.status(201).json({ user });
        }
      });
    }
  } else {
    res.status(400).json({ error: "Params user required" });
  }
};

exports.getProfile = (req, res) => {
  User.findOne({ user: req.user._id }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      res.status(200).json({ user });
    }
  });
};