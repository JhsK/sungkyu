const express = require("express");
const path = require("path");

const { Post, User, Tag, PostTag } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const where = {};
    const posts = await Post.findAll({
      where,
      order: [["createdAt", "DESC"]],
      // include: [
      //   {
      //     model: Tag,
      //     // where: { PostId: Post.id },
      //     attributes: ["name"],
      //   },
      // ],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
    });
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
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

    if (req.body.tag.length > 0) {
      const tags = req.body.tag;
      const result = await Promise.all(
        tags.map((tag) =>
          Tag.findOrCreate({
            where: { name: tag.toLowerCase() },
          })
        )
      ); // [[노드, true], [리액트, true]]
      await post.addTags(result.map((v) => v[0]));
    }
    res.status(200).json("success");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const deletePost = await Post.findOne({
      where: { id: req.params.id },
    });
    await deletePost.destroy();
    res.status(200).json(parseInt(req.params.id, 10));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
