const express = require("express");

const { connection, userModel } = require("./db");

const app = express();
app.use(express.json());

// API
app.get("/", (req, res) => {
    res.send({ msg: "Welcome to my application" });
});

// GET ROUTE: FOR ALL USER DOCUMENT
app.get("./read", async (req, res) => {
    try {
        const users = await userModel.find();
        res.send(users);
    } catch (error) {
        res.send({msg : "Something went wrong"});
    }
});

// GET ROUTE: FOR USER DOCUMENT BASED ON ID
app.get("./read/:id", async (req, res) => {
    const { id } = req.params.id;
    try {
        const user = await userModel.findById({_id:id});
        res.send(user);
    } catch (error) {
        res.send({msg : "Something went wrong"});
    }
});

app.post("/create", async(req,res)=>{
    const payload = req.body;
    try{
        const newUser = new userModel(payload);
        await newuser.save();
        res.send({msg:"New user Successfully added"});
    }catch(error){
        res.send({msg : "Something went wrong"});
    }
})

app.listen(8080, async () => {
    try {
        await connection;
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }

    console.log("Server started");
});