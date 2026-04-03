const http = require("http");
const express = require("express");
const mongodb = require("mongoose");
const dbconnection = require("./config/db.json");
const userRout = require("./routes/userRoutes");
const path =require('path');


  try {
 mongodb.connect(dbconnection.url, console.log("database connected"));
} catch (err) {
  console.log(err);
}




const app = express();

app.set('views',path.join(__dirname,"views" ));
app.set("view engine","twig")

//transforme le JSON en objet JavaScript : c'est un middl 
app.use(express.json());
app.use("/user", userRout);

const server = http.createServer(app, console.log("server is run"));

const io= require("socket.io")(server)
io.on("connection",(socket)=>{
  console.log("user connected");
socket.emit('msg',"user connected")

socket.on('msg1',(data)=>{
io.emit('msg1',data)

})

socket.on('typ',(data)=>{
io.emit('typ',data)

})

socket.on('typ',(data)=>{
socket.broadcast.emit('typ',data)

})
  socket.on("disconnect",()=>{
    io.emit('msg',"user disconnected")

    console.log("user disconnected")
  })
});
  
server.listen(3000);
