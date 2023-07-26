const http=require('http');
const hostname = '127.0.0.1';
const express=require('express');
const cors = require('cors');
let Sock = require('websocket').server;
let Client = require('websocket').client;
const { Socket } = require("socket.io");
const cron = require("node-cron");
const port = 3000;

const app = express();
let messages = [];
let array_unique = [];
app.use(cors());
app.use(express.json());
let nr_acces = 0;
const server = http.createServer();

let io = require("socket.io", { rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling'] })(server, {
    cors: {
        origin: "https://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    }

}).listen(process.env.PORT || 5000, () => {
  console.log("server on");
});

io.on("connection", (s) => {
    //  console.log("new user : " + s.id);

    s.on("send", (data) => {
        s.broadcast.emit("receive_socket", data);
        messages.push(data.message);
       
    })

    s.on("name", (data) => {
        s.broadcast.emit("receive_name", data);
        console.log(data.name);

    })
    s.on("image", (data) => {
        s.broadcast.emit("receive_image", data);
        console.log(data)

    })
    
}

)

cron.schedule("*/2 * * * * *", function () {
   
    console.log(messages);

});




