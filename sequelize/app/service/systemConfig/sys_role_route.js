'use strict';

const Service = require('egg').Service;

class RoleRoute extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.SysRoleRoute.findAndCountAll({
      offset,
      limit,
    });
  }

  async find(id) {
    const roleRoute = await this.ctx.model.SysRoleRoute.findByPk(id);
    if (!roleRoute) {
      this.ctx.throw(404, 'prey not found');
    }
    return roleRoute;
  }

  async create(roleRoute) {
    return this.ctx.model.SysRoleRoute.create(roleRoute);
  }

  async update({ id, updates }) {
    const roleRoute = await this.ctx.model.SysRoleRoute.findByPk(id);
    if (!roleRoute) {
      this.ctx.throw(404, 'prey not found');
    }
    return roleRoute.update(updates);
  }

  async delete(id) {
    const roleRoute = await this.ctx.model.SysRoleRoute.findByPk(id);
    if (!roleRoute) {
      this.ctx.throw(404, 'prey not found');
    }
    return roleRoute.destroy();
  }
}

module.exports = RoleRoute;
