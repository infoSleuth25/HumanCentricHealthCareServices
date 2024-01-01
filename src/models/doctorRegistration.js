const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    doctorFirstName : {
        type : String,
        required : true
    },
    doctorMiddleName : {
        type : String,
        required : true
    },
    doctorLastName : {
        type : String,
        required : true
    },
    doctorAge : {
        type : Number,
        required : true
    },
    doctorBirthDate : {
        type : String,
        required : true
    },
    doctorGender : {
        type : String,
        required : true
    },
    doctorAadharNo : {
        type : Number,
        required : true
    },
    doctorAadharNoFile : {
        type : Buffer,
        required : true
    },
    doctorTenth : {
        type : Number,
        required : true
    },
    doctorTenthFile : {
        type : Buffer,
        required : true
    },
    doctortwelve : {
        type : Number,
        required : true
    },
    doctorTwelveFile : {
        type : Buffer,
        required : true
    },
    doctorDegreeName : {
        type : String,
        required : true
    },
    doctorDegreeCGPA : {
        type : Number,
        required : true
    },
    doctorDegreeFile : {
        type : Buffer,
        required : true
    },
    doctorLicenceNo : {
        type : Number,
        required : true
    },
    doctorLicenceFile : {
        type : Buffer,
        required : true
    },
    doctorJobTitle : {
        type : String,
        required : true
    },
    doctorOrgName : {
        type : String,
        required : true
    },
    doctorWorkYr : {
        type : Number,
        required : true
    },
    doctorSpecializationOne : {
        type : String,
        required : true
    },
    doctorSpecializationTwo : {
        type : String,
        required : true
    },
    doctorContactNo : {
        type : Number,
        required : true
    },

    doctorAddressLineOne : {
        type : String,
        required : true
    },
    doctorAddressLineTwo : {
        type : String,
        required : true
    },
    doctorTaluka : {
        type : String,
        required : true
    },
    doctorDistrict : {
        type : String,
        required : true
    },
    doctorState : {
        type : String,
        required : true
    },
    doctorCountry : {
        type : String,
        required : true
    },
    doctorPincode : {
        type : Number,
        required : true
    },
    doctorPersonalMobileNo : {
        type : Number,
        required : true
    },
    doctorUsername : {
        type : String,
        required : true
    },
    doctorPassword : {
        type : String,
        required : true
    },
    doctorConfirmPassword : {
        type : String,
        required : true
    }
})

const docRegister = new mongoose.model("DoctorRegistration", doctorSchema);
module.exports = docRegister;