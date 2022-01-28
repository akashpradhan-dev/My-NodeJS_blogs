const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  author: String,
  title: String,
  intro: String,
  desc: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
