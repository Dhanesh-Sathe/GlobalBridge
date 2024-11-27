const Company = require('../models/companyModel');


const getAllCompanyies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies); // Send response once here
    } catch (error) {
        res.status(500).json({ message: error.message }); // Or send error response once
    }
};

module.exports = {getAllCompanyies};