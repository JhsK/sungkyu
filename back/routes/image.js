const express = require("express");
const multer = require("multer");
const { isLoggedIn } = require("./middlewares");
const path = require("path");
const fs = require("fs");
const db = require("../models");
const { post } = require("./post");

const { Post, Image, User } = require("../models");

const router = express.Router();

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 제로초
      done(null, basename + "_" + new Date().getTime() + ext); // 제로초15184712891.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

router.post("/", isLoggedIn, upload.single("img"), (req, res, next) => {
  res.json(req.file.filename);
});

// router.post("/", isLoggedIn, upload.single("img"), async (req, res, next) => {
//   try {
//     console.log(req.file);
//     // const images = await Promise.all(
//     //   req.body.image.map((image) => Image.create({ src: image }))
//     // );
//     const images = await Image.create({ image_url: req.file.filename });
//     const data = await post.addImage(images);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

module.exports = router;
