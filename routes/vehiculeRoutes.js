const express = require("express");
const router = express.Router();
const  validate = require('../middl/validate');
const vehiculeController=require("../controller/vehiculeController")





//add new vehicule
router.post('/create', validate.validateVehicule, vehiculeController.create);


//get all vehicules
router.get("/showVehicules", vehiculeController.showVehicules);


//get vehicule by id
router.get("/showVehicules/:id", vehiculeController.showVehiculebyid);



//delete vehicule by id
router.delete("/DeleteVehicule/:id", vehiculeController.deleteVehicule);

//update vehicule by id
router.put("/UpdateVehicule/:id", vehiculeController.updateVehicule);

//search by brand and model
router.get("/search/:Brand/:Model", vehiculeController.searchbybrandandModel);

//calculer recent
router.get("/calculateRent/:id", vehiculeController.calculerRecent);

//get vehicule with year greater than 2020
router.get("/recent", vehiculeController.getvehiculeGT);


//get total number of vehicules
router.get("/total", vehiculeController.gettotal);





//socket test 
router.get("/vehiculeNotification",(req ,res)=>{
  res.render("vehicule")
})

module.exports = router;
