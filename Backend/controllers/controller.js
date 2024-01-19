const Doc = require('../models/schema')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Signup = async(req,res)=>{
    console.log(req.body)
    try{
        const {username, email, password} = req.body

        //check for doctor
        const doctor = await Doc.findOne({email})

        if(doctor){
            console.log('already registered')
        }

        const salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(password,salt)

        const Doctor = await Doc.create({
            username:username,
            email:email,
            password:hashpassword
        })

        const createdoc = await Doctor.save()

        res.send("Doctor registered successfully",createdoc)
        console.log("doctor registered")


    }catch(err){
        console.log(err)
    }
}

const Login = async(req,res)=>{
    console.log(req.body)
    try{
        const {email,password} = req.body

        //check for user
        const doctor = await Doc.findOne({email})

        if(!doctor){
            console.log("Doctor is not registered")
        }

        const comparedpassword = await bcryptjs.compare(password,doctor.password)

        if(!comparedpassword){
            console.log("password is incorrect")
        }

        const tokendata = {
            id:Doc._id,
            email:Doc.email,
            password:Doc.password
        }

        const token = await jwt.sign(tokendata , 'gatewayapp')

        console.log("login successful",token)

    }catch(err){
        console.log(err)
    }
}

module.exports = {Signup,Login}