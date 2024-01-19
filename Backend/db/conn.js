const mongoose = require("mongoose");

const connectMyDatabase = () => {
    return mongoose.connect("mongodb://localhost:27017", {
        dbName : "Gateway"
    })
}

module.exports = connectMyDatabase;