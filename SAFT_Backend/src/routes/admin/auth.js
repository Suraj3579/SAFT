const express=require("express");
const router = express.Router();
const {signup,login} = require('../../controller/admin/auth');
const {validateSignupRequest, isRequestValidated, validateLoginRequest} = require('../../validation/auth')
    

router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/admin/login',validateLoginRequest, isRequestValidated,login);

module.exports=router;