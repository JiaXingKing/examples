"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE, BOOLEAN, NOW, UUID, UUIDV4 } = Sequelize;
    await queryInterface.createTable("sys_user", {
      id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4
      },
      accountName: STRING(30),
      actualName: STRING(30),
      Sex: STRING(30),
      status: {
        type: BOOLEAN,
        defaultValue: true
      },
      passWord: {
        type: STRING(30),
        defaultValue: "123456"
      },
      age: INTEGER,
      phone: STRING(30),
      createdAt: {
        type: DATE,
        defaultValue: NOW
      },
      createBy: STRING(30),
      updatedAt: {
        type: DATE,
        defaultValue: NOW
      },
      updatedBy: STRING(30)
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sys_user");
  }
};
