const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController");
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

router.post('/addbook', validate.validateBook, bookController.add);

router.get("/showbook", bookController.showbook);

router.get("/showbookbytitle/:title", bookController.searchbytitle);
router.get("/showbookbytitlebody", bookController.searchbytitlebody);

router.get("/showbookbyid/:id", bookController.showbookbyid);

router.delete("/deletebook/:id", bookController.deletebook);

router.put("/updatebook/:id", bookController.updatebook);
router.put("/increaseprice", bookController.increaseprice);



//socket test 
router.get("/show",(req ,res)=>{
  console.log("showbook")
  res.render("book")
})

module.exports = router;
