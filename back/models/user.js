const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        username: {
          type: Sequelize.STRING(25),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(40),
          allowNull: true,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "User",
        tableName: "User",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
  }
};
