'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING,BOOLEAN, NOW  } = Sequelize;
    await queryInterface.createTable('sys_route', {
      id: {
        type: STRING,
        primaryKey: true,
        allowNull: false
      },
      path: STRING(30),
      enName: STRING(30),
      chName: STRING(30),
      isLeaf: {
        type: BOOLEAN,
      },
      customCode:STRING(30),
      sortNo:{
        type:INTEGER,
        defaultValue: 0
      },
      parentId:{
        type: STRING,
      },
      level:{
        type:INTEGER,
        defaultValue: 0
      },
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
    await queryInterface.dropTable('sys_route');
  }
};
