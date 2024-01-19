const Doc = require('../models/schema')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Signup = async(req,res)=>{
    console.log(req.body)
    try{
        const {username, email, password , address , contact} = req.body

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
            password:hashpassword,
            address:address,
            contact:contact
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

const GetDoctor = async(req,res)=>{
    try{
        const doctor = await Doc.find()
        res.send(doctor)
        console.log(doctor)
        res.json(doctor)
    }catch(err){
        console.log(err)
    }
}


const GetById = async(req,res)=>{
    try{
        const id = req.params['id']
        const docbyid = await Doc.findById(id)
        console.log(docbyid)
    }catch(err){
        console.log(err)
    }
}

module.exports = {Signup,Login,GetDoctor,GetById}