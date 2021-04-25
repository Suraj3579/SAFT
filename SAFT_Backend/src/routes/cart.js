const express=require("express");       
const router = express.Router();
const {addItemToCart,getCartItems,removeCartItems,} = require('../controller/cart');
const {userAccess, requireSignin} = require('../middleware/index');

router.post('/user/cart/add-to-cart',requireSignin,userAccess,addItemToCart);

router.post("/user/getCartItems", requireSignin, userAccess, getCartItems);

router.post("/user/cart/removeItem",requireSignin,userAccess,removeCartItems);

module.exports = router;