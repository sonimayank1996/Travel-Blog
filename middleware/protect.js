const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.json({
      status: "No token",
    });
  }

  //  Verify Token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return res.json({
      status: "user does not exist",
    });
  }

  req.user = currentUser;
  next();
};
