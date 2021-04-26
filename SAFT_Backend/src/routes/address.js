const express = require('express');
const { requireSignin, userAccess } = require('../middleware');
const { addAddress, getAddress } = require('../controller/address');
const router = express.Router();


router.post('/user/address/create', requireSignin, userAccess, addAddress);
router.post('/user/getaddress', requireSignin, userAccess, getAddress);

module.exports = router;