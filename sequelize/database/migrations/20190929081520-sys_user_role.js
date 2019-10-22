"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, UUID, UUIDV4 } = Sequelize;
    await queryInterface.createTable("sys_user_role", {
      userId: {
        type: UUID,
        allowNull: false,
        primaryKey: true
      },
      roleId: {
        type: UUID,
        allowNull: false,
        primaryKey: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sys_user_role");
  }
};
