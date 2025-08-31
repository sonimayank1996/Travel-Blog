const Blog = require("../models/blogModel");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("authors");

    res.json({
      status: "success",
      userLength: blogs.length,
      blogs,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.json({
      status: "success",
      blog,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.json({
      status: "success",
      blog,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: "success",
      updatedBlog,
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
    });
  } catch (err) {
    res.json({
      status: "failed",
      err,
    });
  }
};
