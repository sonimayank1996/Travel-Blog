const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Signup functionality
exports.signUp = async (req, res) => {
  console.log(process.env.JWT_SECRET);

  try {
    const newUser = await User.create(req.body);
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.json({
      status: "success",
      token,
      newUser,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

// Login functionality with JWT
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // email and password exist
  if (!email || !password) {
    return res.send({
      json: {
        status: "fails",
      },
    });
  }
  const user = await User.findOne({ email });

  // check user is exist or not
  if (!user) {
    return res.json({
      status: "user does not exist",
    });
  }

  // password check
  if (user.password !== password) {
    return res.json({
      status: "password does not match",
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  // everything is good
  res.json({
    status: "login sucessfully",
    token,
  });
};

// Password reset functionality (forgot password, reset password)
const forgotPassword = (req, res) => {};

const passwordReset = (req, res) => {};

// Update current user data
const updateCurrentUserData = (req, res) => {};

// Delete current user (soft delete by setting active to false)
const deleteCurrentUserData = (req, res) => {};
