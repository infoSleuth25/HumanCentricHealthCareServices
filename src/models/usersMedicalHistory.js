const mongoose = require("mongoose");

const userHistorySchema = new mongoose.Schema({

    userAadharNo : {
        type : String,
        required : true
    },
    userPresentIllness : {
        type : String,
        required : true
    },
    DateOfIllness : {
        type : String,
        required : true
    },

    MedicineFirst : {
        type : String,
        required : true
    },
    MedicineFirstManufact : {
        type : String,
        required : true,
    },
    MedicineFirstExpiry : {
        type : String,
        required : true,
    },

    MedicineSecond : {
        type : String,
    },
    MedicineSecondManufact : {
        type : String,
    },
    MedicineSecondExpiry : {
        type : String,
    },

    MedicineThird : {
        type : String,
    },
    MedicineThirdManufact : {
        type : String,
    },
    MedicineThirdExpiry : {
        type : String,
    },

    MedicineForth : {
        type : String,
    },
    MedicineForthManufact : {
        type : String,
    },
    MedicineForthExpiry : {
        type : String,
    },

    MedicineFifth : {
        type : String,
    },
    MedicineFifthManufact : {
        type : String,
    },
    MedicineFifthExpiry : {
        type : String,
    },

})

const userHis = new mongoose.model("userHistoryRegistration", userHistorySchema);
module.exports = userHis;