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
  limits: { fileSize: 50 * 1024 * 1024 },
});

router.post("/", isLoggedIn, upload.single("img"), (req, res, next) => {
  // res.json(req.file.filename);
  res.json(req.file.location.replace(/\/original\//, "/thumb/"));
});

module.exports = router;
