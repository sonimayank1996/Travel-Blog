const express = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/userController");
const { signUp, login } = require("../controllers/authController");
const { protect } = require("../middleware/protect");
const { restrictTo } = require("../middleware/restrictTo");

const router = express.Router();

router
  .route("/")
  .get(protect, restrictTo("admin"), getAllUser)
  .post(protect, restrictTo("user"), createUser);

router.route("/updateCurrentUser").patch(updateUser);

router.route("/signUp").post(signUp);

router.route("/login").post(login);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
