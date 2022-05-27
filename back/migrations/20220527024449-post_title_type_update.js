"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Post", "title", {
      type: Sequelize.STRING(60),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Post", "title", {
      type: Sequelize.STRING(30),
      allowNull: false,
    });
  },
};
