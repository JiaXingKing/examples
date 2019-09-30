'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING,BOOLEAN, NOW,UUID,UUIDV4  } = Sequelize;
    await queryInterface.createTable('sys_button', {
      id: {
        type: UUID                        ,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4
      },
      domId: STRING(30),
      des: STRING(30),
      sortNo: INTEGER,
      status: {
        type: BOOLEAN,
        defaultValue: true
      },
      routeId:STRING(30),
      roleId:STRING(30),
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
    } ,{
      freezeTableName: true,
      tableName: 'sys_button',
      underscored: false
    });
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_button');
  }
};
