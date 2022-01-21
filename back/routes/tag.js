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

// router.get('/:id', async (req, res, next) => {
//     try {
//         const posts = await Post.findAll({
//             where:
//         })
//     }
// })

module.exports = router;
