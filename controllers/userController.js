const User = require("../models/userModel");

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find();

    res.json({
      status: "success",
      userLength: user.length,
      user,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  try {
    res.json({
      status: "success",
      user,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

exports.createUser = async (req, res) => {
  console.log("req", req.body);

  try {
    const user = await User.create(req.body);

    res.json({
      status: "success",
      user,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndUpdate(req.user.id, {
      active: false,
    });
    res.json({
      status: "success",
      data: deleteUser,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

exports.updateUser = async (req, res) => {
  if(req.body.password) {
    return res.json({
      status: 'you cannot update the password'
    })
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body);
    res.json({
      status: "success",
      updatedUser,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};
