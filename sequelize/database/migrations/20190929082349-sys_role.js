'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING,BOOLEAN, NOW  } = Sequelize;
    await queryInterface.createTable('sys_role', {
      id: {
        type: STRING,
        primaryKey: true,
        allowNull: false
      },
      enName: STRING(30),
      chName: STRING(30),
      status: {
        type: BOOLEAN,
        defaultValue: true
      },
      orgId:STRING(30),
      created_at: {
        type: DATE,
        defaultValue: NOW
      },
      create_by: STRING(30),
      updated_at: {
        type: DATE,
        defaultValue: NOW
      },
      updated_by: STRING(30)
    });
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_role');
  }
};
