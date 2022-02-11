const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const tagRouter = require("./routes/tag");
const imageRouter = require("./routes/image");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
passportConfig();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    // proxy: true,
    // cookie: {
    //   httpOnly: true,
    //   secure: true,
    // },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello api");
});

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/tag", tagRouter);
app.use("/image", imageRouter);

app.listen(process.env.PORT, () => {
  console.log("서버 실행 중");
});
