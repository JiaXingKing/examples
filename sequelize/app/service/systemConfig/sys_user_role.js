'use strict';

const Service = require('egg').Service;

class User extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.SysUserRole.findAndCountAll({
      offset,
      limit,
    });
  }

  async find(id) {
    const user = await this.ctx.model.SysUserRole.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'prey not found');
    }
    return user;
  }

  async create(userRole) {
    return this.ctx.model.SysUserRole.create(userRole);
  }

  async update({ id, updates }) {
    const userRole = await this.ctx.model.SysUserRole.findByPk(id);
    if (!userRole) {
      this.ctx.throw(404, 'prey not found');
    }
    return userRole.update(updates);
  }

  async delete(id) {
    const userRole = await this.ctx.model.SysUserRole.findByPk(id);
    if (!userRole) {
      this.ctx.throw(404, 'prey not found');
    }
    return user.destroy();
  }
}

module.exports = User;
