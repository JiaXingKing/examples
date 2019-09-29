'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING,BOOLEAN, NOW  } = Sequelize;
    await queryInterface.createTable('sys_user', {
      id: {
        type: STRING,
        primaryKey: true,
        allowNull: false
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
        defaultValue: '123456'
      },
      age: INTEGER,
      phone: STRING(30),
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
    await queryInterface.dropTable('sys_user');
  }
};
