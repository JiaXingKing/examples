'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING,UUID,UUIDV4  } = Sequelize;
    await queryInterface.createTable('sys_user_role', {
      id:{
        type: UUID                        ,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4
      },
      userId: {
        type: STRING,
        allowNull: false
      },
      roleId: {
        type: STRING,
        allowNull: false
      },
    });
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_user_role');
  }
};
