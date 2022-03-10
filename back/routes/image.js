const express = require("express");
const multer = require("multer");
const { isLoggedIn } = require("./middlewares");
const path = require("path");
const fs = require("fs");
const db = require("../models");
const { post } = require("./post");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

const { Post, Image, User } = require("../models");

const router = express.Router();

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "sungkyu.info",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname); // 확장자 추출(.png)
//       const basename = path.basename(file.originalname, ext); // 제로초
//       done(null, basename + "_" + new Date().getTime() + ext); // 제로초15184712891.png
//     },
//   }),
//   limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
// });

router.post("/", isLoggedIn, upload.single("img"), (req, res, next) => {
  // res.json(req.file.filename);
  res.json(req.file.location.replace(/\/original\//, "/thumb/"));
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
