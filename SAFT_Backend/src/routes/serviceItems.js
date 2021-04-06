const express=require("express");       
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
const {createserviceItems , getserviceItems} = require('../controller/serviceItems');
const {adminAccess, requireSignin} = require('../middleware/index');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
const upload = multer({ storage });

router.post('/serviceItems/create',requireSignin,adminAccess,upload.array("serviceItemsPictures"),createserviceItems);
router.get('/seviceItems/getserviceItems',getserviceItems);

module.exports=router;