const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { protect } = require("../middleware/protect");
const { restrictTo } = require("../middleware/restrictTo");

const router = express.Router();

router.route("/").get(getAllBlogs).post(protect, createBlog);

router
  .route("/:id")
  .get(getBlog)
  .patch(protect, restrictTo("admin"), updateBlog)
  .delete(protect, restrictTo("admin"), deleteBlog);

module.exports = router;
