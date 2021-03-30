const express=require("express");
const router = express.Router();
const {signup,login} = require('../controller/auth');
const {validateSignupRequest, isRequestValidated, validateLoginRequest} = require('../validation/auth')
    

router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/login',validateLoginRequest, isRequestValidated, login);

module.exports=router;