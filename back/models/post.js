const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(60),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Post",
        tableName: "Post",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Tag, { through: "PostTag" }); // post.PostTag
  }
};
