const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userFirstName : {
        type : String,
        required : true
    },
    userMiddleName : {
        type : String,
        required : true
    },
    userLastName : {
        type : String,
        required : true
    },
    userAge : {
        type : Number,
        required : true
    },
    userBirthDate : {
        type : String,
        required : true
    },
    userGender : {
        type : String,
        required : true
    },
    userAddressLineOne : {
        type : String,
        required : true
    },
    userAddressLineTwo : {
        type : String,
        required : true
    },
    userTaluka : {
        type : String,
        required : true
    },
    userDistrict : {
        type : String,
        required : true
    },
    userState : {
        type : String,
        required : true
    },
    userCountry : {
        type : String,
        required : true
    },
    userPincode : {
        type : Number,
        required : true
    },
    userAadharNo : {
        type : Number,
        required : true
    },
    userAadharNoFile : {
        type : Buffer,
        required : true
    },
    userMobileNo : {
        type : String,
        required : true
    },
    userPassword : {
        type : String,
        required : true
    },
    userConfirmPassword : {
        type : String,
        required : true
    }
})

const UserRegister = new mongoose.model("UserRegistration", userSchema);
module.exports = UserRegister;