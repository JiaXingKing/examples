'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING ,UUID,UUIDV4 } = Sequelize;
    await queryInterface.createTable('sys_role_route', {
      id:{
        type: UUID                        ,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4
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
