const User = require("../models/user");
async function add(req, res) {
  try {
    const user = new User(req.body);
    await user.save();

    res.send("good added!!!!");
  } catch (err) {
    res.send(err);
  }
}

async function showuser(req, res) {
  try {
    const user = await User.find();

    res.json(user);
  } catch (err) {
    res.send(err);
  }
}

async function searchbyname(req, res) {
  try {
    const user = await User.find({ name: req.params.name });

    res.json(user);
  } catch (err) {
    res.send(err);
  }
}

async function showuserbyid(req, res) {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (err) {
    res.send(err);
  }
}

async function deleteuser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.send("user deleted");
  } catch (err) {
    res.send(err);
  }
}

async function updateuser(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.send(err);
  }
}
async function updateuserPassword(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {password:req.body.password}, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
}
module.exports = {
  add,
  showuser,
  searchbyname,
  showuserbyid,
  deleteuser,
  updateuser,
  updateuserPassword
};
