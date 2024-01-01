const mongoose = require("mongoose");

const vitalSignSchema = new mongoose.Schema({
    aadharNo : {
        type : String,
        required : true
    },
    bloodPressure : {
        type : String,
    },
    bloodPressureCount : {
        type : String,
    },
    respRate : {
        type : String,
    },
    heartRate : {
        type : String,
    },
    pulseRate : {
        type : String,
    },
    height : {
        type : String,
    },
    weight : {
        type : String
    }
})

const userHist = new mongoose.model("userVitalSigns", vitalSignSchema);
module.exports = userHist;
