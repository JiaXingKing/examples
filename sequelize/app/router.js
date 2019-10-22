'use strict';

module.exports = app => {
  const { router, controller } = app;
  //系统配置接口
  // app.resources('user', '/user', app.controller.systemConfig.sysUser);
  router.get('/user/index', controller.systemConfig.sysUser.index);
  router.post('/user/login', controller.systemConfig.sysUser.login);
  router.post('/user/info', controller.systemConfig.sysUser.info);
  
  // app.resources('userRole', '/userRole', app.controller.systemConfig.sysUserRole);
  // app.resources('route', '/route', app.controller.systemConfig.sysRoute);
  // app.resources('role', '/role', app.controller.systemConfig.sysRole);
  // app.resources('roleRoute', '/roleRoute', app.controller.systemConfig.sysRoleRoute);
  // app.resources('org', '/org', app.controller.systemConfig.sysOrg);
  // app.resources('button', '/button', app.controller.systemConfig.sysButton);
};
