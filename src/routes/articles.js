const express = require("express");
const router = express.Router();
const blogModel = require("../models/blogModel");

router.get("/", (req, res) => {
  res.send("article");
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", async (req, res) => {
  try {
    const blogData = new blogModel(req.body);
    await blogData.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

//delete route
router.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await blogModel.findByIdAndDelete({ _id: id });
  res.redirect("/");
});

//Edit Route

router.get("/edit/:id", async (req, res) => {
  const EditBlog = await blogModel.findById(req.params.id);
  res.render("edit", { article: EditBlog });
});

router.post("/update/:id", async (req, res) => {
  const _id = req.params.id;
  const updateBlog = req.body;
  await blogModel.findByIdAndUpdate(_id, updateBlog);
  res.redirect("/");
});

router.get("/readMore/:id", async (req, res) => {
  const _id = req.params.id;
  const desc = await blogModel.findById(_id);
  res.render("fullDesc", { article: desc });
});

module.exports = router;
