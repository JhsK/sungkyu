const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const User = require("./user");
const Post = require("./post");
const Image = require("./image");

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Image = Image;

User.init(sequelize);
Post.init(sequelize);
Image.init(sequelize);

User.associate(db);
Post.associate(db);
Image.associate(db);

module.exports = db;
