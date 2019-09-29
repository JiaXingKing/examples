"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW } = app.Sequelize;

  const Sys_user = app.model.define("sys_user", {
    id: {
      type: STRING,
      primaryKey: true,
      allowNull: false
    },
    accountName: STRING(30),
    actualName: STRING(30),
    Sex: STRING(30),
    status: {
      type: BOOLEAN,
      defaultValue: true
    },
    passWord: {
      type: STRING(30),
      defaultValue: '123456'
    },
    age: INTEGER,
    phone: STRING(30),
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
  Sys_user.prototype.associate = function() {
    app.model.Sys_user.hasMany(app.model.Sys_user_role, { as: 'sys_user_role' });
  };
  return Sys_user;
};
