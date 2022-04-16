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
  } else {
    res
      .status(400)
      .json({ message: `Post with ID ${req.params.id} is not found` });
  }
});

router.post("/", (req, res) => {
  const newPost = {
    ...req.body,
  };

  if (!newPost.userId || !newPost.id || !newPost.title || !newPost.body) {
    return res.status(400).json({
      message: "Please inculde User ID, Title and Body",
    });
  }

  posts.push(newPost);
  res.status(200).json({
    message: "Successfully added new post",
    newPost,
  });
});

router.put("/:id", (req, res) => {
  const found = posts.some((post) => post.id === parseInt(req.params.id));

  if (found) {
    posts.forEach((post, index) => {
      if (post.id === parseInt(req.params.id)) {
        const updatedPost = { ...post, ...req.body };
        posts[index] = updatedPost;
        res.json({ message: "Successfully updated the post", updatedPost });
      }
    });
  } else {
    res
      .status(400)
      .json({ message: `Post with ID ${req.params.id} is not found` });
  }
});

router.delete("/:id", (req, res) => {
  const found = posts.some((post) => post.id === parseInt(req.params.id));

  const updatedPosts = posts.filter((post) => post.id != req.params.id);
  if (found) {
    res.json({
      message: `Successfully deleted the post with ID ${req.params.id}`,
      updatedPosts,
    });
  } else {
    res
      .status(400)
      .json({ message: `Post with ID ${req.params.id} is not found` });
  }
});

module.exports = router;
