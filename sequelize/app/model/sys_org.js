"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW } = app.Sequelize;

  const Sys_org = app.model.define("sys_org", {
    id: {
      type: STRING,
      primaryKey: true,
      allowNull: false
    },
    enName: STRING(30),
    chName: STRING(30),
    status: {
      type: BOOLEAN,
      defaultValue: true
    },
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
  Sys_org.prototype.associate = function() {
    app.model.Sys_org.hasMany(app.model.Sys_role, { as: 'sys_role' });
  };
  return Sys_org;
};
