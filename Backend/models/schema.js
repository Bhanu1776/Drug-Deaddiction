const mongoose = require('mongoose')

const doctorschema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    address:String,
    contact:Number
})

const DoctorSchema = mongoose.model('DoctorSchema',doctorschema)

module.exports = DoctorSchema