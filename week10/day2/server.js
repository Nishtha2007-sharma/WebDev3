const express = require("express");

const http = require("http");
const {Server} = require("socket.io");

const app = express();
const httpserver = http.createServer(app);

const io = new Server (httpserver);

io.on("connected",(socket)=> {
    socket.emit("gyankibaat", "wlcm to socket.io server");

    socket.on("kuchbhi", (msg) => {
    console.log(msg);
});
});

httpserver.listen(8080,()=> {
    console.log("Server Started");
})