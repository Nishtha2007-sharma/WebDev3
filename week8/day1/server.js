
const express = require("express");
const connectDB = require("./db");
const { userRoute } = require("./routes/user.route");

const app = express();

app.use(express.json());

app.use("/user", userRoute);

app.get("/home", (req, res) => {
    res.send({
        msg: "Welcome to Notes application"
    });
});

const startServer = async () => {
    await connectDB();

    app.listen(8080, () => {
        console.log("Server Started on port 8080");
    });
};

startServer();
