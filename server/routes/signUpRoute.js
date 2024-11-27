const express = require('express');
const {signUp, otpVerification, getUser, logIn} = require('../controller/signUpCtrl');
const router = express.Router();

// POST of signUp
router.post('/sign-up', signUp);

// POST of otpverification
router.post('/verify-otp', otpVerification);
router.get('/verify-otp/:email', getUser);

// POST for login
router.post('/login', logIn);

module.exports = router;