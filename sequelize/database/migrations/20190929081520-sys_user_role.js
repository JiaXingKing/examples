'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING  } = Sequelize;
    await queryInterface.createTable('sys_user_role', {
      id:{
        type: STRING,
        primaryKey: true,
        allowNull: false
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
