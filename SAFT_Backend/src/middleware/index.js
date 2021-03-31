const jwt = require('jsonwebtoken');

exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, "tuturu");
      req.user = user;
    } else {
      return res.status(400).json({ message: "Authorization required" });
    }
    next();
    //jwt.decode()
  };

exports.adminAccess = (req,res,next) => {
  if(req.user.role !=='admin'){
    return res.status(400).json({
      message :"Admin access denied"
    });
  }
  next();
};

exports.userAccess = (req,res,next) => {
  if(req.user.role !=='user'){
    return res.status(400).json({
      message :"User access denied"
    });
  }
  next();
};