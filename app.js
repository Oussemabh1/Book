const http = require("http");
const express = require("express");
const mongoose = require("mongoose");

const vehiculeController = require("./controller/vehiculeController");

const vehiculeRout = require("./routes/vehiculeRoutes");
const path =require('path');
const dbconnection = require("./config/db");
const vehicule = require("./models/vehicule");



  try {
   mongoose.connect(dbconnection.url, console.log("database connected"));
    } catch (err) {
  console.log(err);
    }



const app = express();

app.set('views',path.join(__dirname,"views" ));
app.set("view engine","twig")



app.use(express.json());
app.use("/vehicules", vehiculeRout);



const server = http.createServer(app, console.log("server is run"));

//require socket io
const socketIo = require("socket.io")(server);  


socketIo.on("connection",async  (socket) => {
console.log("a user connected");
        socket.emit("messageConnection", "welcome to our application");
 
 
app.put('/vehicules/updateAvailability/:id', async (req, res) => {
        const { id } = req.params;
        try {
        // 1. Mise à jour dans la base de données
        const updatedVehicle = await vehicule.findByIdAndUpdate(id, { Available: false }, { new: true });

         socketIo.emit("vehiculeAlert", `the vehicule ${updatedVehicle.Brand} ${updatedVehicle.Model} is not available now`);
        
        res.status(200).json(updatedVehicle);
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la mise à jour" });
    }
});


    
socket.on("disconnect", () => { 
console.log("user disconnected");
    });
});

server.listen(3000);
