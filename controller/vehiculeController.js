const Vehicule = require("../models/vehicule");



//add new vehicule
async function create(req, res) {
  try {
    const vehicule = new Vehicule(req.body);
    await vehicule.save();
    res.send("good added!!!!");
  } catch (err) {
    res.send(err);
  }
}



//get all vehicules
async function showVehicules(req, res) {
  try {
    const vehicules = await Vehicule.find();

    res.json(vehicules);
  } catch (err) {
    res.send(err);
  }
}



//get vehicule by id
async function showVehiculebyid(req, res) {
  try {
    const vehicule = await Vehicule.findById(req.params.id);

    res.json(vehicule);
  } catch (err) {
    res.send(err);
  }
}







//delete vehicule by id
async function deleteVehicule(req, res) {
  try {
    await Vehicule.findByIdAndDelete(req.params.id);

    res.send("vehicule deleted");
  } catch (err) {
    res.send(err);
  }
}



//update vehicule by id
async function updateVehicule(req, res) {
  try {

    const vehicule = await Vehicule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(vehicule);
  } catch (err) {
    res.send(err);
  }
}




//search by brand and model
async function searchbybrandandModel(req, res) {
  try {
    const vehicule = await Vehicule.find({Brand:req.params.Brand,Model:req.params.Model});
    res.json(vehicule);
  } catch (err) {
    res.send(err);
  }
}



//calculer recent
async function calculerRecent(req, res) {
  const {days}=req.body
  try {
    const vehicule = await Vehicule.findById(req.params.id);
    
    let recent= vehicule.PricePerDay * days;

      res.send({msg:"Recent",recent:recent})

  } catch (err) {
    res.send(err);
  }
}




//get vehicule with year greater than 2020
async function getvehiculeGT(req, res) {
  try {
    let tab = [];

    const vehicules = await Vehicule.find();

    for (let i = 0; i < vehicules.length; i++) {
      if (vehicules[i].Year > 2020) {
        tab.push(vehicules[i]);
      }
    }
    res.json(tab);
  } catch (err) {
    return err;
  }
}



//get total number of vehicules
async function gettotal(req, res) {
  try {
    const vehicules = await Vehicule.find();
  res.json(vehicules.length)
  } catch (err) {
    return err;
  }
}











module.exports = {
create,
getvehiculeGT,
showVehicules,
showVehiculebyid,
deleteVehicule,
updateVehicule,
searchbybrandandModel,
gettotal,
calculerRecent,

};
