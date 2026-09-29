// step -1 import
const mongoose = require("mongoose");

// Step -4 Schema/ Blueprint/ structure
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String
},{
    versionKey: false,
});

const userModel = mongoose.model
("user",userSchema);

const main = async () => {
    // Step-2 build connection with mon

    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/monalisa")

    console.log("DB Connected");

    await userModel.insertOne({
    name: "monalisa",
    email: "monalisa@gmail.com",
    age: 325,
    password: "mona@lisa"
    });

    console.log("data added successfully")

    const user = await userModel.find();
    console.log(user);

    // step -3 disconnect

    // mongoose.disconnect();
    // console.log("DB Disconnected");
};

main();

// in Command prompt

// C:\Users\Nishtha>mongosh
// Current Mongosh Log ID: 6ab612048552357bde9c5dba
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.12.0
// Using MongoDB:          8.3.11
// Using Mongosh:          2.12.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2026-09-25T09:13:21.170+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// HwData   8.00 KiB
// admin   40.00 KiB
// config  72.00 KiB
// local   72.00 KiB
// test> show dbs
// HwData    8.00 KiB
// admin    40.00 KiB
// config  108.00 KiB
// local    72.00 KiB
// test> show dbs
// HwData     8.00 KiB
// admin     40.00 KiB
// config    96.00 KiB
// local     72.00 KiB
// monalisa   8.00 KiB
// test> use monalisa
// switched to db monalisa
// monalisa> db.users.find()
// [
//   {
//     _id: ObjectId('6ab6175eabdfc2e34d14f57e'),
//     name: 'monalisa',
//     email: 'monalisa@gmail.com',
//     age: 325,
//     password: 'mona@lisa'
//   }
// ]
// monalisa> db.monalisa.updateOne({name:"monalisa"},{$set:{name:"monaco"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 0,
//   modifiedCount: 0,
//   upsertedCount: 0
// }
// monalisa> show dbs
// HwData      8.00 KiB
// admin      40.00 KiB
// config    108.00 KiB
// local      72.00 KiB
// monalisa   40.00 KiB
// monalisa> use monalisa
// already on db monalisa
// monalisa> db.users.find()
// [
//   {
//     _id: ObjectId('6ab6175eabdfc2e34d14f57e'),
//     name: 'monalisa',
//     email: 'monalisa@gmail.com',
//     age: 325,
//     password: 'mona@lisa'
//   }
// ]
// monalisa> db.users.updateOne({name:"monalisa"},{$set:{name:"monaco"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// monalisa> show dbs
// HwData     8.00 KiB
// admin     40.00 KiB
// config    96.00 KiB
// local     72.00 KiB
// monalisa  40.00 KiB
// monalisa> use monalisa
// already on db monalisa
// monalisa> db.users.find()
// [
//   {
//     _id: ObjectId('6ab6175eabdfc2e34d14f57e'),
//     name: 'monaco',
//     email: 'monalisa@gmail.com',
//     age: 325,
//     password: 'mona@lisa'
//   }
// ]
// monalisa>