"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW } = app.Sequelize;

  const Sys_role = app.model.define("sys_role", {
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
    orgId:STRING(30),
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
  Sys_role.prototype.associate = function() {
    app.model.Sys_user.hasMany(app.model.Sys_user_role, { as: 'sys_user_role' });
    app.model.Sys_user.belongsTo(app.model.Sys_org, { as: 'sys_org' , foreignKey: 'orgId' });
  };
  return Sys_role;
};
