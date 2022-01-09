const express = require("express");
const path = require("path");

const { Post, User } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const where = {};
    const posts = await Post.findAll({
      where,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/create", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      UserId: req.user.id,
    });
    res.status(200).json("success");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  try {
    const deletePost = await Post.findOne({
      where: { id: req.params.postId },
    });
    await deletePost.destroy();
    res.status(200).json(parseInt(req.params.postId, 10));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
