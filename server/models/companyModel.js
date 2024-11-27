const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
        unique:true
    },
    companyEmail:{
        type:String,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true
    },
    businessType:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    companyRegistrationNum:{
        type:Number,
        required:true,
        unique:true
    },
    licenseNumber:{
        type:Number,
        required:true,
        unique:true
    },
    establishYear:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    companyWebsite:{
        type:String,
        required:true
    },
    companyRegistrationDoc:{
        filename: String,
        contentType: String,
        image: Buffer
    },
    customRegistrationDoc:{
        filename: String,
        contentType: String,
        image: Buffer
    },
    tradeAssociationMembership:{
        filename: String,
        contentType: String,
        image: Buffer
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
});

module.exports = mongoose.model('Company', companySchema);