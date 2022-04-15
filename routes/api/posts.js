const express = require("express");
const router = express.Router();
const posts = require("../../Posts");

router.get("/", (req, res) => {
  res.status(200).json(posts);
});

router.get("/:id", (req, res) => {
  const found = posts.some((post) => post.id === parseInt(req.params.id));

  if (found) {
    const post = posts.filter((post) => post.id === parseInt(req.params.id));
    res.status(200).json(post);
  }
});

module.exports = router;
