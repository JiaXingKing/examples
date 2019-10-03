'use strict';

module.exports = app => {
  //系统配置接口
  app.resources('users', '/users', app.controller.systemConfig.sysUser);
  app.resources('userRoles', '/userRoles', app.controller.systemConfig.sysUserRole);
  app.resources('routes', '/routes', app.controller.systemConfig.sysRoute);
  app.resources('roles', '/roles', app.controller.systemConfig.sysRole);
  app.resources('roleRoutes', '/roleRoutes', app.controller.systemConfig.sysRoleRoute);
  app.resources('orgs', '/orgs', app.controller.systemConfig.sysOrg);
  app.resources('buttons', '/buttons', app.controller.systemConfig.sysButton);
};
