"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, BOOLEAN, NOW, UUID, UUIDV4 } = app.Sequelize;

  let Sys_role = app.model.define(
    "sys_role",
    {
      id: {
        type: UUID,
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
      orgId: STRING(30),
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
      timestamps: false,
      freezeTableName: true,
      tableName: "sys_role",
      underscored: false
    }
  );
  Sys_role.prototype.Association = function() {
    app.model.Sys_role.belongsToMany(app.model.Sys_user, {
      through: app.model.Sys_user_role,
      foreignKey: "roleId",
      otherKey:'userId'
    });
    app.model.Sys_role.belongsToMany(app.model.Sys_route, {
      through: app.model.Sys_role_route,
      as: "sys_role",
      constraints: false
    });
    app.model.Sys_role.belongsTo(app.model.Sys_org, {
      as: "sys_org",
      foreignKey: "orgId"
    });
    app.model.Sys_role.hasMany(app.model.Sys_button, { as: "sys_button" });
  };
  return Sys_role;
};
