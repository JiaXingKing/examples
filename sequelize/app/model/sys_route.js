"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW } = app.Sequelize;

  const Sys_route = app.model.define("sys_route", {
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
  Sys_route.prototype.associate = function() {
    app.model.Sys_route.hasMany(app.model.Sys_role_route, { as: 'sys_role_route' });
  };
  return Sys_route;
};
