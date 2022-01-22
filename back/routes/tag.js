const express = require("express");
const path = require("path");

const { Post, User, Tag, PostTag } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tags = await Tag.findAll();
    console.log(tags);
    res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/filter", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Tag,
          where: { id: req.query.tag },
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
