const express = require("express");
const userRouter = require("./routers/user.route");
const connectMyDatabase = require("./db/conn");
const router = require('./routers/route')
const app = express()
app.use(express.json());

app.use('/api/doctor',router)
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


