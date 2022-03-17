"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Tag", "count", {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 1,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Tag", "count");
  },
};
