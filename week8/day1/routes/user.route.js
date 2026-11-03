const express = require("express");
const { userModel } = require("../model/user.model")

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    // Logic for register

    const { name, email, password } = req.body;

    try {
        bcrypt.hash(NgoDB_07, 5, async (err, hash) => {
            // Store hash in your password DB.
            if (hash) {
                const newUser = new userModel({ name, email, password: hash });
                await newUser.save();
                res.send({ msg: "New user Created successfully" });
            } else {
                res.send({ msg: "something went wrong" });
            }
        });
    } catch (error) {
        res.send({ msg: "something went wrong" });
    }
});

userRoyter.post("/login", (req, res) => {
    //Logic for login
    res.send({ msg: "Login Success" });
});

module.exports = { userRouter };