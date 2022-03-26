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
  const tag = req.query.tag;

  try {
    const where = {};
    const whereTag = {};

    if (search !== "") {
      where.title = { [Op.substring]: `${search}` };
    }
    if (tag !== "") {
      whereTag.id = tag;
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
          where: whereTag,
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
      await result.map(async (v) => {
        if (v[1] == false) {
          await Tag.update(
            {
              count: v[0].dataValues.count + 1,
            },
            {
              where: { name: v[0].dataValues.name.toLowerCase() },
            }
          );
        }
      });
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

    const post = await Post.findOne({
      where: { id: req.params.id },
    });

    if (req.body.image) {
      const image = await Image.create({ image_url: req.body.image });
      await post.setImages(image);
    }
    res.status(200).json("success");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:id", isLoggedIn, async (req, res, next) => {
  try {
    const tags = await Post.findOne({
      where: { id: req.params.id },
      include: Tag,
    });
    await tags.dataValues.Tags.map(async (v) => {
      if (v.dataValues.count === 1) {
        await Tag.destroy({ where: { id: v.dataValues.id } });
      } else {
        await Tag.update(
          {
            count: v.dataValues.count - 1,
          },
          {
            where: { id: v.dataValues.id },
          }
        );
      }
    });
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
