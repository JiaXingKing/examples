"use strict";

module.exports = (app) => {
  const { STRING} = app.Sequelize;

  const Sys_user_role = app.model.define("sys_user_role", {
    userId: {
      type: STRING,
      allowNull: false
    },
    roleId: {
      type: STRING,
      allowNull: false
    },
  });
  Sys_user_role.prototype.associate = function() {
    app.model.Sys_user_role.belongsTo(app.model.Sys_user, { as: 'sys_user', foreignKey: 'userId' });
    app.model.Sys_user_role.belongsTo(app.model.Sys_role, { as: 'sys_role', foreignKey: 'roleId' });
  };
  return Sys_user_role;
};
