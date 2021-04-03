const express=require("express");       
const router = express.Router();
const {addItemToCart} = require('../controller/cart');
const {userAccess, requireSignin} = require('../middleware/index');

router.post('/user/cart/add-to-cart',requireSignin,userAccess,addItemToCart);

module.exports=router;