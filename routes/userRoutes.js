const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const  validate = require('../middl/validate');

/*router.get("/testuser", (req, res) => {
  res.send("hello 1 cinfo 2");
});

router.get("/add/:name/:email/:phone/:password/:status", (req, res) => {
  new User({
    name: req.params.name,
    email: req.params.email,
    phone: req.params.phone,
    password: req.params.password,
    status: req.params.status,
  }).save();
  res.send("user added !!!!");
});*/

router.post('/adduser', validate.validateUser, userController.add);

router.get("/showuser", userController.showuser);

router.get("/showuserbyname/:name", userController.searchbyname);

router.get("/showuserbyid/:id", userController.showuserbyid);

router.delete("/deleteuser/:id", userController.deleteuser);

router.put("/updateuser/:id", userController.updateuser);
router.put("/updateuserpassword/:id",validate.validatePassword, userController.updateuserPassword);


//socket test 
router.get("/showtwig",(req ,res)=>{
  res.render('user')
})

module.exports = router;
