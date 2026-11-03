
const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.mongourl)
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((error) => {
        console.log("DB Connection Failed:", error.message);
    });

module.exports = { connection };
