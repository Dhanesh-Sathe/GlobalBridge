const Company = require('../models/companyModel');
const User = require('../models/userModel');

const getCompany = async (req, res) => {
    try {
        console.log(req.params.id);
        const companies = await Company.find({user: req.params.id});
        if (!companies || companies.length === 0) {
            return res.status(404).json({ success: false, message: 'Company not found' });
        }
        const count = companies.length;
        console.log(count, companies);
        res.status(200).json({ success: true, data: company });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const getUser = async (req,res) => {
    try {
        const user = await User.findOne({_id: req.params.id});
        if(!user) {
            return res.status(404).json({success:false, message: 'User not found'});
        }
        console.log(user);
        res.status(200).json({success:true, message: err.message});
    }
    catch(err) {
        res. status(500).json({success:false, message: err.message});
    }
}

module.exports = { getCompany };    