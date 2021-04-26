const express=require("express");       
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const {createService , getServices, deleteServices, getservicesbyserviceId} = require('../controller/services');
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
router.get('/sevices/:parentId',getservicesbyserviceId);
router.post("/services/delete",requireSignin,adminAccess,deleteServices);

module.exports=router;