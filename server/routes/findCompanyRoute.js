const  express = require('express');
const router = express.Router();
const {getAllCompanyies} = require('../controller/findCompanyCtrl');

router.get('/find', getAllCompanyies);

module.exports = router;