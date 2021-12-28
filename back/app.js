const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const db = require("./models");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/", express.static(path.join(__dirname, "/app/uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello api");
});

app.listen(process.env.PORT, () => {
  console.log("서버 실행 중");
});
