"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW,UUID,UUIDV4} = app.Sequelize;

  const Sys_org = app.model.define("sys_org", {
    id: {
      type: UUID                        ,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
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
  },
  {
    freezeTableName: true,
    tableName: 'sys_org',
    underscored: false
  }
  );
  Sys_org.prototype.associate = function() {
    app.model.Sys_org.hasMany(app.model.Sys_role, { as: 'sys_role' });
  };
  return Sys_org;
};
