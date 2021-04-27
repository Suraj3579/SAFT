const express = require('express');
const { requireSignin, userAccess } = require('../middleware');
const { updateProfile, getProfile } = require('../controller/profile');
const router = express.Router();


router.post('/user/profile/update', requireSignin, userAccess, updateProfile);
router.post('/user/getprofile', requireSignin, userAccess, getProfile);

module.exports = router;