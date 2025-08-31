const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  content: {
    type: String,
  },
  images: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
  },
  authors: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  // ref: "Author",
  publishStatus: String,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
