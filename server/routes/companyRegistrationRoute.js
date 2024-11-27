const  express = require('express');
const router = express.Router();
const  {upload,registerCompany} = require('../controller/companyRegistrationCtrl');

router.post('/registerCompany', upload.fields([
    { name: 'companyRegistrationDoc', maxCount: 1 },
    { name: 'customRegistrationDoc', maxCount: 1 },
    { name: 'tradeAssociationMembership', maxCount: 1 }
]), registerCompany);

module.exports = router;