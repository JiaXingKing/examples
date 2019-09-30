'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING,BOOLEAN, NOW,UUID,UUIDV4  } = Sequelize;
    await queryInterface.createTable('sys_route', {
      id: {
        type: UUID                        ,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4
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

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_route');
  }
};
