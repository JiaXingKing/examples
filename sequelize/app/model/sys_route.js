"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW,UUID,UUIDV4 } = app.Sequelize;

  const Sys_route = app.model.define("sys_route", {
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
  },{
    freezeTableName: true,
    tableName: 'sys_route',
    underscored: false
  });
  Sys_route.prototype.associate = function() {
    app.model.Sys_route.belongsToMany(app.model.Sys_role, { through: app.model.Sys_role_route,as: 'sys_route' ,constraints: false});
  };
  return Sys_route;
};
