const multer = require('multer');
const Company = require('../models/companyModel');

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Company Registration Controller Function
const registerCompany = async (req, res) => {
    console.log('Entering registerCompany function');
    console.log('req.body:', req.body);
    console.log('req.files:', req.files);
    console.log('req.file:', req.file); 
    
    try {
        const {
            companyName,
            companyEmail,
            country,
            businessType,
            product,
            companyRegistrationNum,
            licenseNumber,
            establishYear,
            address,
            contact,
            companyWebsite,
            user
        } = req.body;

        const company = await Company.findOne({companyName})

            if(company)
            return res.status(400).json({msg:"This product already exists"})

        // Check if files are present
        if (!req.files) {
            console.log('No files uploaded');
            return res.status(400).json({ message: 'No files were uploaded' });
        }

        // Check for required documents
        const requiredDocs = ['companyRegistrationDoc', 'customRegistrationDoc', 'tradeAssociationMembership'];
        for (const doc of requiredDocs) {
            if (!req.files[doc]) {
                console.log(`Missing required document: ${doc}`);
                return res.status(400).json({ message: `Missing required document: ${doc}` });
            }
        }

        // Create new company
        const newCompany = new Company({
            companyName,
            companyEmail,
            country,
            businessType,
            product,
            companyRegistrationNum,
            licenseNumber,
            establishYear,
            address,
            contact,
            companyWebsite,
            user,
            companyRegistrationDoc: {
                filename: req.files['companyRegistrationDoc'][0].originalname,
                contentType: req.files['companyRegistrationDoc'][0].mimetype,
                image: req.files['companyRegistrationDoc'][0].buffer
            },
            customRegistrationDoc: {
                filename: req.files['customRegistrationDoc'][0].originalname,
                contentType: req.files['customRegistrationDoc'][0].mimetype,
                image: req.files['customRegistrationDoc'][0].buffer
            },
            tradeAssociationMembership: {
                filename: req.files['tradeAssociationMembership'][0].originalname,
                contentType: req.files['tradeAssociationMembership'][0].mimetype,
                image: req.files['tradeAssociationMembership'][0].buffer
            }
        });

        // Save the new Company
        await newCompany.save();

        res.status(200).json({ message: 'Company Registered Successfully' });
    }
    catch (err) {
        console.error('Error in registerCompany:', err);
        res.status(500).json({ message: 'An error occurred while registering the company', error: err.message });
    }
}


module.exports = { upload, registerCompany };