const express = require("express");
const userRouter = require("./routers/user.route");
const connectMyDatabase = require("./db/conn");
const app = express();
app.use(express.json());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.json({
        success : true,
    })
})

app.listen(5000, () => {
    connectMyDatabase();
    console.log("Running Successfully");
})
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

