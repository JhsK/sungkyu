const express = require("express");
const path = require("path");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const { Post, User, Tag, PostTag, Image } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const search = req.query.search;
  const category = req.query.category;

  try {
    const where = {};
    if (search !== "") {
      where.title = { [Op.substring]: `${search}` };
    }
    if (Number(req.query.lastId)) {
      if (category === "ASC") where.id = { [Op.gt]: Number(req.query.lastId) };
      else where.id = { [Op.lt]: Number(req.query.lastId) };
    }
    const posts = await Post.findAll({
      where,
      order: category ? [["createdAt", category]] : [["createdAt", "DESC"]],
      limit: 5,
      include: [
        {
          model: Tag,
        },
        {
          model: Image,
        },
      ],
    });
    console.log(posts.length);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/main", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      limit: 3,
      include: [
        {
          model: Image,
        },
      ],
    });
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Tag,
        },
        {
          model: Image,
        },
      ],
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

    if (req.body.image) {
      const image = await Image.create({ image_url: req.body.image });
      await post.addImages(image);
    }
    res.status(200).json("success");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.put("/:id", isLoggedIn, async (req, res, next) => {
  try {
    await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({ result: true });
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
