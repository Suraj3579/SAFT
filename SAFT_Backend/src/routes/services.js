const express=require("express");       
const router = express.Router();
const {createService , getServices} = require('../controller/services');
const {adminAccess, requireSignin} = require('../middleware/index');

router.post('/services/create',requireSignin,adminAccess,createService);
router.get('/services/getservices',getServices);

module.exports=router;