// step -1 import
const mongoose = require("mongoose");

const main = async () => {
    // Step-2 build connection with mon

    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/")

    console.log("DB Connected");

    // step -3 disconnect

    mongoose.disconnect();
    console.log("DB Disconnected");
};

main();