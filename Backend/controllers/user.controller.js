const validator = require("validator");
const userModel = require("../models/user.model");

const userController = {
    register : async (req, res) => {
        try {
            const {username, email, password} = req.body;
            
            const findUser = userModel.findOne({email});

            if(!username || !email || !password){
                return res.json({
                    success : false,
                    msg : "Some fields are not filled properly"
                })
            }

            if(!validator.isEmail(email)){
                return res.json({
                    success : false,
                    msg : "Kindly enter valid email"
                })
            }

            if(findUser){
                return res.json({
                    success : false,
                    msg : "User already exists"
                })
            }

            if(password?.length < 8){
                return res.json({
                    success : false,
                    msg : "Password must be greater than 7 characters"
                })
            }

            const user = await userModel.create({
                username, email, password
            })

            const token = await user.generateToken();

            return res.json({
                success : true,
                msg : `Welcome ${user?.username}`,
                user, token
            });

        } catch (error) {
            return res.json({
                success : false,
                msg : error?.message
            })
        }
    },
    login : async (req, res) => {
        try {
            const {email, password} = req.body;

            if(!email || !password){
                return res.json({
                    success : false,
                    msg : "Some fields are not filled properly"
                })
            }

            if(!validator.isEmail(email)){
                return res.json({
                    success : false,
                    msg : "Kindly enter valid email"
                })
            }

            const user = await userModel.findOne({email});

            if(!user){
                return res.json({
                    success : false,
                    msg : "User doesn't exists! you may need to register"
                })
            }

            const match = await user.passwordMatch(password);
            
            if(!match){
                return res.json({
                    success : false,
                    msg : "Incorrect Credentials"
                }) 
            }

            const token = await user.generateToken();

            return res.json({
                success : true,
                user,
                token
            });

        } catch (error) {
            return res.json({
                success : false,
                msg : error?.message
            })  
        }
    }
}

module.exports = userController;