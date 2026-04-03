const mongo = require("mongoose");
const schema = mongo.Schema;

const user = new schema({
  name: String,
  email: String,
  phone: Number,
  password: Number,
  status: Boolean,
});

module.exports = mongo.model("user", user);
