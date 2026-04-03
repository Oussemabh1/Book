const mongo = require("mongoose");
const schema = mongo.Schema;

const book = new schema({
  title: String,
  author: String,
  price  : Number,
  stock : Number,

});

module.exports = mongo.model("book", book);
