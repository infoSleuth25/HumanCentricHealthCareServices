const mongoose = require("mongoose");

const chemistSchema = new mongoose.Schema({
    chemistFirstName : {
        type : String,
        required : true
    },
    chemistMiddleName : {
        type : String,
        required : true
    },
    chemistLastName : {
        type : String,
        required : true
    },
    chemistAge : {
        type : Number,
        required : true
    },
    chemistBirthDate : {
        type : String,
        required : true
    },
    chemistGender : {
        type : String,
        required : true
    },
    chemistAadharNo : {
        type : Number,
        required : true
    },
    chemistAadharNoFile : {
        type : Buffer,
        required : true
    },

    chemistTenth : {
        type : Number,
        required : true
    },
    chemistTenthFile : {
        type : Buffer,
        required : true
    },
    chemisttwelve : {
        type : Number,
        required : true
    },
    chemistTwelveFile : {
        type : Buffer,
        required : true
    },
    chemistDegreeName : {
        type : String,
        required : true
    },
    chemistDegreeCGPA : {
        type : Number,
        required : true
    },
    chemistDegreeFile : {
        type : Buffer,
        required : true
    },
    chemistLicenceNo : {
        type : Number,
        required : true
    },
    chemistLicenceFile : {
        type : Buffer,
        required : true
    },

    chemistAddressLineOne : {
        type : String,
        required : true
    },
    chemistAddressLineTwo : {
        type : String,
        required : true
    },
    chemistTaluka : {
        type : String,
        required : true
    },
    chemistDistrict : {
        type : String,
        required : true
    },
    chemistState : {
        type : String,
        required : true
    },
    chemistCountry : {
        type : String,
        required : true
    },
    chemistPincode : {
        type : Number,
        required : true
    },
    chemistPersonalMobileNo : {
        type : Number,
        required : true
    },
    chemistContactNo : {
        type : Number,
        required : true
    },
    chemistUsername : {
        type : String,
        required : true
    },
    chemistPassword : {
        type : String,
        required : true
    },
    chemistConfirmPassword : {
        type : String,
        required : true
    }
})

const chemRegister = new mongoose.model("ChemistRegistration", chemistSchema);
module.exports = chemRegister;