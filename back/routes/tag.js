const express = require("express");
const path = require("path");

const { Post, User, Tag, PostTag, Image } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tags = await Tag.findAll();
    res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
