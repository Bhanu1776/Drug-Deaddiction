const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
}, {
    timestamps : true,
});


userSchema.pre('save', async function(){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.methods.passwordMatch = async function(password){
    return bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = async function() {
    return jwt.sign({id : this._id}, "WERDTYFUHILOKHJGFCBHJKUIYKHIUHJYDFSGHJKUIUGFDVGBHNJKGFDVGBHJ");
}

module.exports = mongoose.model("User", userSchema);
