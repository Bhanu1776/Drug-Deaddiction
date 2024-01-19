const express = require('express')
const router = require('./route/route')
const app = express()
const mongoose = require('mongoose')

const PORT = 5000
app.use(express.json())
//Router
app.use('/api/doctor',router)

app.use('/',(req,res)=>{
    res.send("Doctor")
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})

//db connect

const DB = "mongodb://localhost:27017"

mongoose.connect(DB,{
    dbName:"Gateway"
}).then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("not connected")
})

