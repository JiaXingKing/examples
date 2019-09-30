'use strict';

const Service = require('egg').Service;

class User extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.SysUser.findAndCountAll({
      offset,
      limit,
      order: [[ 'createdAt', 'desc' ], [ 'accountName', 'desc' ]],
    });
  }

  async find(id) {
    const user = await this.ctx.model.SysUser.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

  async create(user) {
    return this.ctx.model.SysUser.create(user);
  }

  async update({ id, updates }) {
    const user = await this.ctx.model.SysUser.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.update(updates);
  }

  async delete(id) {
    const user = await this.ctx.model.SysUser.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user.destroy();
  }
}

module.exports = User;
