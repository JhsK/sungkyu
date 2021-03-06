const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Tag extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        count: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 1,
        },
      },
      {
        modelName: "Tag",
        tableName: "Tag",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 이모티콘 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Tag.belongsToMany(db.Post, { through: "PostTag" });
  }
};
