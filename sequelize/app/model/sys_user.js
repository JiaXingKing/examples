"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW,UUID,UUIDV4 } = app.Sequelize;

  const Sys_user = app.model.define("sys_user", {
    id: {
      type: UUID                        ,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
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
    tableName: 'sys_user',
    underscored: false
  });
  Sys_user.prototype.associate = function() {
    app.model.Sys_user.belongsToMany(app.model.Sys_role, { through: app.model.Sys_user_role,as: 'sys_user' ,constraints: false});
  };
  return Sys_user;
};
