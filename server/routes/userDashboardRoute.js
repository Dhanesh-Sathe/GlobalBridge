const express = require('express');
const { getCompany } = require('../controller/userDashboardCtrl');
const router = express.Router();

// // GET for company
router.get('/dashboard/user/:id', getCompany);

module.exports = router;