const express=require("express");       
const router = express.Router();
const {createserviceItems , getserviceItems} = require('../controller/serviceItems');
const {adminAccess, requireSignin} = require('../middleware/index');

router.post('/serviceItems/create',requireSignin,adminAccess,createserviceItems);
router.get('/seviceItems/getserviceItems',getserviceItems);

module.exports=router;