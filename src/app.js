const express = require("express");
const app = express();
const session = require('express-session');

require("./db/conn");
const userRegister = require("./models/userRegistration");
const doctorRegister = require("./models/doctorRegistration");
const chemistRegister = require("./models/chemistRegistration");
const userMedicalHistory = require("./models/usersMedicalHistory");
const userVitals = require("./models/userVitalSigns");

const port = process.env.PORT || 3000;


 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");

app.use(express.static('public'))


app.get("/",(req,res)=>{
    res.render("index");
})

app.get('/userform', function(req, res) {
    res.render('userform');
});

app.use(session({
    secret: 'siddhesh@858',
    resave: false,
    saveUninitialized: true
  }));
 

var aadharNo = "";

app.post("/index",async(req,res)=>{ // login
    try{
        const username = req.body.username;
        const password = req.body.password;

        const userDetails = await userRegister.findOne({userAadharNo : username});
        if(userDetails.userPassword === password){
            aadharNo = username;
            res.status(201).render("user");
        }
        else{
            res.send("password are not matching");
        }
  

    }catch(error){
        try{
            const username = req.body.username;
            const password = req.body.password;
            const DocDetails = await doctorRegister.findOne({doctorUsername : username});
            if(DocDetails.doctorPassword === password){
                res.status(201).render("doctor");
            }
            else{
                res.send("password are not matching");
            }
        }catch(error){
            try{
                const username = req.body.username;
                const password = req.body.password;
                const chemDetails = await chemistRegister.findOne({chemistUsername : username});
            if(chemDetails.chemistPassword === password){
                res.status(201).render("chemist");
            }
            else{
                res.send("password are not matching");
            }
            }catch(error){
                res.send("Invalid Cred")
            }
        }
    }
})

app.post('/vitalbtn', async(req, res) => {
    aadharNo = req.body.aadhar;
    
})

app.get('/api/patientHistory',async(req,res)=>{
    try{
        const history = await userMedicalHistory.find({userAadharNo:aadharNo})
        res.json({
            history
        })
    }catch(err){
    }
})

app.get('/api/patient',async(req,res)=>{
    try{
        const response = await userRegister.find({});
        res.json({
            response
        })
    }catch(err){
    }
})

app.get('/api/chemist',async(req,res)=>{
    try{
        const response = await chemistRegister.find({});
        res.json({
            response
        })
    }catch(err){
    }
})

app.get('/api/doctor',async(req,res)=>{
    try{
        const response = await doctorRegister.find({});
        res.json({
            response
        })
    }catch(err){
    }
})

app.get('/api/history',async(req,res)=>{
    try{
        const response = await userMedicalHistory.find({});
        res.json(response)
    }catch(err){
        console.log(err);
    }
})














app.post('/userform', async(req, res) => { // registration
    try{
        const userPass = req.body.userPassword;
        const userConfirmPass = req.body.userConfirmPassword;
        if(userPass === userConfirmPass){
            const registerUser = new userRegister({
                userFirstName : req.body.userFirstName,
                userMiddleName : req.body.userMiddleName,
                userLastName : req.body.userLastName,
                userAge : req.body.userAge,
                userBirthDate : req.body.userBirthDate,
                userGender : req.body.userGender,
                userAddressLineOne : req.body.userAddressLineOne,
                userAddressLineTwo : req.body.userAddressLineTwo,
                userTaluka : req.body.userTaluka,
                userDistrict : req.body.userDistrict,
                userState : req.body.userState,
                userCountry : req.body.userCountry,
                userPincode : req.body.userPincode,
                userAadharNo : req.body.userAadharNo,
                userAadharNoFile : req.body.userAadharFile,
                userMobileNo : req.body.userMobile,
                userPassword : req.body.userPassword,
                userConfirmPassword : req.body.userConfirmPassword
            })
            const registered = await registerUser.save();
            res.status(201).render("index");
        }
        else{
            res.send("Passwords are not matching");
        }
    }catch(error){
        res.status(400).send(error);
    }
});

app.post('/doctorform', async(req, res) => { // doctor registration
    try{
        const docPass = req.body.password;
        const docconfirmPass = req.body.confirmpassword;
        if(docPass === docconfirmPass){
            const registerDoctor = new doctorRegister({
                doctorFirstName : req.body.firstname,
                doctorMiddleName : req.body.middlename,
                doctorLastName : req.body.lastname,
                doctorAge : req.body.age,
                doctorBirthDate : req.body.birthdate,
                doctorGender : req.body.gender,
                doctorAadharNo : req.body.aadharno,
                doctorAadharNoFile : req.body.aadharnofile,
                doctorTenth : req.body.tenth,
                doctorTenthFile : req.body.tenthfile,
                doctortwelve : req.body.twelve,
                doctorTwelveFile : req.body.twelvefile,
                doctorDegreeName : req.body.degreename,
                doctorDegreeCGPA : req.body.degreecgpa,
                doctorDegreeFile : req.body.degreefile,
                doctorLicenceNo : req.body.licenceno,
                doctorLicenceFile : req.body.licencenofile,
                doctorJobTitle : req.body.job,
                doctorOrgName : req.body.orgname,
                doctorWorkYr : req.body.workexp,
                doctorSpecializationOne : req.body.specone,
                doctorSpecializationTwo : req.body.spectwo,
                doctorContactNo : req.body.contactno,
                doctorAddressLineOne : req.body.orgaddresslineone,
                doctorAddressLineTwo : req.body.orgaddresslinetwo,
                doctorTaluka : req.body.taluka,
                doctorDistrict : req.body.district,
                doctorState : req.body.state,
                doctorCountry : req.body.country,
                doctorPincode : req.body.pincode,
                doctorPersonalMobileNo : req.body.mobile,
                doctorUsername : req.body.username,
                doctorPassword : req.body.password,
                doctorConfirmPassword : req.body.confirmpassword
            })
            const registered = await registerDoctor .save();
            res.status(201).render("index");
        }
        else{
            res.send("Passwords are not matching");
        }
    }catch(error){
        res.status(400).send(error);
    }
});

app.post('/chemistform', async(req, res) => { // registration
    try{
        const chemPass = req.body.password;
        const chemconfirmPass = req.body.confirmpassword;
        if(chemPass === chemconfirmPass){
            const registerChemist = new chemistRegister({
                chemistFirstName : req.body.firstname,
                chemistMiddleName : req.body.middlename,
                chemistLastName :req.body.lastname,
                chemistAge : req.body.age,
                chemistBirthDate : req.body.birthdate,
                chemistGender : req.body.gender,
                chemistAadharNo : req.body.aadharno,
                chemistAadharNoFile : req.body.aadharnofile,
                chemistTenth : req.body.tenth,
                chemistTenthFile : req.body.tenthfile,
                chemisttwelve : req.body.twelve,
                chemistTwelveFile : req.body.twelvefile,
                chemistDegreeName : req.body.degree,
                chemistDegreeCGPA : req.body.degreecgpa,
                chemistDegreeFile : req.body.degreefile,
                chemistLicenceNo : req.body.licenceno,
                chemistLicenceFile : req.body.licencefile,
                chemistAddressLineOne : req.body.addone,
                chemistAddressLineTwo : req.body.addtwo,
                chemistTaluka : req.body.taluka,
                chemistDistrict : req.body.district,
                chemistState : req.body.state,
                chemistCountry : req.body.country,
                chemistPincode : req.body.pincode,
                chemistPersonalMobileNo : req.body.contact,
                chemistContactNo : req.body.mobile,
                chemistUsername : req.body.username,
                chemistPassword : req.body.password,
                chemistConfirmPassword : req.body.confirmpassword
            })
            const registered = await registerChemist .save();
            res.status(201).render("index");
        }
        else{
            res.send("Passwords are not matching");
        }
    }
    catch(error){
        res.status(400).send(error);
    }
})

app.post('/chemist', async(req, res) => { // medical history
    try{
        const aadhar = req.body.aadharno;
        console.log(aadhar);
        const userDetails = await userRegister.findOne({userAadharNo : aadhar});
        const userHistory = new userMedicalHistory({
            userAadharNo : req.body.aadharno,
            userPresentIllness : req.body.presentillness,
            DateOfIllness : req.body.date,
            MedicineFirst : req.body.med1,
            MedicineFirstManufact : req.body.med1man,
            MedicineFirstExpiry : req.body.med1exp,
            MedicineSecond : req.body.med2,
            MedicineSecondManufact : req.body.med2man,
            MedicineSecondExpiry : req.body.med2exp,
            MedicineThird : req.body.med3,
            MedicineThirdManufact : req.body.med3man,
            MedicineThirdExpiry : req.body.med3exp,
            MedicineForth : req.body.med4,
            MedicineForthManufact : req.body.med4man,
            MedicineForthExpiry : req.body.med4exp,
            MedicineFifth : req.body.med5,
            MedicineFifthManufact : req.body.med5man,
            MedicineFifthExpiry : req.body.med5exp,
        })
        const registered = await userHistory .save();
        res.status(201).render("chemist");
    }
    catch(error){
        console.log(error);
        res.send("User is not registered");
    }
})

app.post('/vitals', async(req, res) => {
    try{
        const aadhar = req.body.aadhar;
        console.log(aadhar);
        const userDetails = await userRegister.findOne({userAadharNo : aadhar});
        const userVital = new userVitals({
            aadharNo : req.body.aadhar,
            bloodPressure : req.body.bp,
            bloodPressureCount : req.body.bpcount,
            respRate : req.body.resp,
            heartRate : req.body.heartrate,
            pulseRate : req.body.pulse,
            height : req.body.height,
            weight : req.body.weight
        })
        const registered = await userVital .save();
        res.status(201).render("vitals");

    }catch(err){
        console.log(error);
        res.send("Invalid");
    }
})







app.get('/api/patientHi',async(req,res)=>{
    try{
        const history = await userMedicalHistory.find({userAadharNo:aad})
        res.json({
            history
        })
    }catch(err){
    }
})


app.get('/doctorForm', function(req, res) {
    res.render('doctorForm');
});

app.get('/chemistForm', function(req, res) {
    res.render('chemistForm');
});

app.get('/chemist', function(req, res) {
    res.render('chemist');
});

app.get('/index', async(req, res) => {
    res.render('index');
});

app.get('/user', async(req, res) => {
    res.render('user');
});

app.get('/physican', async(req, res) => {
    res.render('physican');
});

app.get('/chem', async(req, res) => {
    res.render('chem');
});

app.get('/vitals', async(req, res) => {
    res.render('vitals');
});

app.get('/doctor', async(req, res) => {
    res.render('doctor');
});

app.get('/vitalbtn', async(req, res) => {
    res.render('vitalbtn');
});


app.get('/logout', function(req, res) {
    // Clear any session or authentication data
    req.session.destroy(function(err) {
      if (err) {
        console.log(err);
      }
      // Redirect the user to the first page or login page
      res.setHeader('Cache-Control', 'no-cache, no-store');
      res.redirect('/');
    });
  });

app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
})
