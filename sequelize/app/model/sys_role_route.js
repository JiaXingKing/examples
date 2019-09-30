"use strict";

module.exports = (app) => {
  const { STRING,UUID,UUIDV4} = app.Sequelize;

  const Sys_role_route = app.model.define("sys_role_route", {
    id:{
      type: UUID                        ,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    routeId: {
      type: STRING,
      allowNull: false
    },
    roleId: {
      type: STRING,
      allowNull: false
    },
  }  ,{
    freezeTableName: true,
    tableName: 'sys_role_route',
    underscored: false
  });
  return Sys_role_route;
};
