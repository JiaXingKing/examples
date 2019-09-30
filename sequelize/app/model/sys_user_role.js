"use strict";

module.exports = (app) => {
  const { STRING,UUID,UUIDV4} = app.Sequelize;

  const Sys_user_role = app.model.define("sys_user_role", {
    id:{
      type: UUID                        ,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    userId: {
      type: STRING,
      allowNull: false
    },
    roleId: {
      type: STRING,
      allowNull: false
    },
  },{
    timestamps: false,
    freezeTableName: true,
    tableName: 'sys_user_role',
    underscored: false
  });
  return Sys_user_role;
};
