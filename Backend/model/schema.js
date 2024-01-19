const mongoose = require('mongoose')

const doctorschema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    review:String,
    appoinment:[
        {
            message:String
        }
    ]
})

const DoctorSchema = mongoose.model('DoctorSchema',doctorschema)

module.exports = DoctorSchema