const http = require("http");
const express = require("express");
const mongodb = require("mongoose");
const dbconnection = require("./config/db.json");
const bookRout = require("./routes/bookRoutes");
const path =require('path');
const { getnbrbook } = require("./controller/bookController");
const Book = require("./models/book");


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
app.use("/Book", bookRout);

const server = http.createServer(app, console.log("server is run"));

const io= require("socket.io")(server)
io.on("connection",async (socket)=>{
  console.log("user connected");
socket.emit('msgconection',"user connected")

const res=await getnbrbook();
console.log(res)
socket.emit('nbrbook',res)




// ajouter depuis le navigateur

socket.on('bookt',async(data)=>{
try {
    const book = new Book({title:data.title});  
    await book.save();

  } catch (err) {
  
    console.log(err)
  }

})

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
    io.emit('msgconection',"user disconnected")

    console.log("user disconnected")
  })
});
  
server.listen(3000);
