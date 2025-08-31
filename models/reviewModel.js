const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  rating: {
    type: Number,
    required: [true, "please add the rating"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  blog: {
    type: mongoose.Schema.ObjectId,
    ref: "Blog",
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
