const express=require("express");       
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const {createService , getServices} = require('../controller/services');
const {adminAccess, requireSignin} = require('../middleware/index');
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
const upload = multer({ storage });


router.post('/services/create',requireSignin,adminAccess,upload.array("servicePictures"),createService);
router.get('/services/getservices',getServices);

module.exports=router;