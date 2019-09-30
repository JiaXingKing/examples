'use strict';

const Service = require('egg').Service;

class Role extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.SysRole.findAndCountAll({
      offset,
      limit,
      order: [[ 'createdAt', 'desc' ]],
    });
  }

  async find(id) {
    const role = await this.ctx.model.SysRole.findByPk(id);
    if (!role) {
      this.ctx.throw(404, 'prey not found');
    }
    return role;
  }

  async create(role) {
    return this.ctx.model.SysRole.create(role);
  }

  async update({ id, updates }) {
    const role = await this.ctx.model.SysRole.findByPk(id);
    if (!role) {
      this.ctx.throw(404, 'prey not found');
    }
    return role.update(updates);
  }

  async delete(id) {
    const role = await this.ctx.model.SysRole.findByPk(id);
    if (!role) {
      this.ctx.throw(404, 'prey not found');
    }
    return role.destroy();
  }
}

module.exports = Role;
