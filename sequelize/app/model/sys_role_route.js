"use strict";

module.exports = (app) => {
  const { STRING} = app.Sequelize;

  const Sys_role_route = app.model.define("sys_role_route", {
    id:{
      type: STRING,
      primaryKey: true,
      allowNull: false
    },
    routeId: {
      type: STRING,
      allowNull: false
    },
    roleId: {
      type: STRING,
      allowNull: false
    },
  });
  Sys_role_route.prototype.associate = function() {
    app.model.Sys_role_route.belongsTo(app.model.Sys_route, { as: 'sys_route', foreignKey: 'routeId' });
    app.model.Sys_role_route.belongsTo(app.model.Sys_role, { as: 'sys_role', foreignKey: 'roleId' });
  };
  return Sys_role_route;
};
