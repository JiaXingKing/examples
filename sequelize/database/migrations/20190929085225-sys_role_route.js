'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING  } = Sequelize;
    await queryInterface.createTable('sys_role_route', {
      id:{
        type: STRING,
        primaryKey: true,
        allowNull: false
      },
      roleId: {
        type: STRING,
        allowNull: false
      },
      routeId: {
        type: STRING,
        allowNull: false
      },
    });
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sys_role_route');
  }
};
