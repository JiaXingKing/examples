"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW,UUID,UUIDV4 } = app.Sequelize;

  const Sys_button = app.model.define("sys_button", {
    id: {
      type: UUID                        ,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    domId: STRING(30),
    des: STRING(30),
    sortNo: INTEGER,
    status: {
      type: BOOLEAN,
      defaultValue: true
    },
    routeId:STRING(30),
    roleId:STRING(30),
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
  } ,{
    freezeTableName: true,
    tableName: 'sys_button',
    underscored: false
  });
  Sys_button.prototype.associate = function() {
    app.model.Sys_button.belongsTo(app.model.Sys_route, { as: 'sys_button' ,foreignKey: "routeId"});
    app.model.Sys_button.belongsTo(app.model.Sys_role, { as: 'sys_button' ,foreignKey: "roleId"});
  };
  return Sys_button;
};
