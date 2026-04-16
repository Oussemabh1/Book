const mongoose = require("mongoose");
const schema = mongoose.Schema;

const vehicule = new schema({
  Brand: String,
  Model: String,
  Year  : Number,
  PricePerDay : Number,
  Available : Boolean,
});

module.exports = mongoose.model("vehicule", vehicule);
