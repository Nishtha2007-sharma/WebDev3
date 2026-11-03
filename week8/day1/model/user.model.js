const mongoose = require("mongoose")



const userschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel = mongoose.model("user",userschema);

model.exports = {userModel}