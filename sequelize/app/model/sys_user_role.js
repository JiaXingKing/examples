"use strict";

module.exports = (app) => {
  const { STRING, UUID, UUIDV4 } = app.Sequelize;

  const Sys_user_role = app.model.define(
    "sys_user_role",
    {
      userId: {
        type: UUID,
        allowNull: false,
        primaryKey: true
      },
      roleId: {
        type: UUID,
        allowNull: false,
        primaryKey: true
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "sys_user_role",
      underscored: false
    }
  );
  // Sys_user_role.prototype.associate = function() {
  //   app.model.Sys_user_role.hasMany(app.model.Sys_user, { as: 'sys_user' ,foreignKey: 'userId' });
  //   app.model.Sys_user_role.hasMany(app.model.Sys_role, { as: 'sys_role' ,foreignKey: 'roleId' });
  // };
  return Sys_user_role;
};
