const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");

userRouter.post("/register", userController.register)
.post("/login", userController.login)
.get("/profile/:id", userController.getProfile)
.put("/update/password", userController.updatePassword);

module.exports = userRouter;