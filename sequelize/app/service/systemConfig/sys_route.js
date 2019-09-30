'use strict';

const Service = require('egg').Service;

class Route extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.SysRoute.findAndCountAll({
      offset,
      limit,
      order: [[ 'createdAt', 'desc' ]],
    });
  }

  async find(id) {
    const route = await this.ctx.model.SysRoute.findByPk(id);
    if (!route) {
      this.ctx.throw(404, 'prey not found');
    }
    return route;
  }

  async create(route) {
    return this.ctx.model.SysRoute.create(route);
  }

  async update({ id, updates }) {
    const route = await this.ctx.model.SysRoute.findByPk(id);
    if (!route) {
      this.ctx.throw(404, 'prey not found');
    }
    return route.update(updates);
  }

  async delete(id) {
    const route = await this.ctx.model.SysRoute.findByPk(id);
    if (!route) {
      this.ctx.throw(404, 'prey not found');
    }
    return route.destroy();
  }
}

module.exports = Route;
