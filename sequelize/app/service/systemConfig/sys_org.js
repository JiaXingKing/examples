'use strict';

const Service = require('egg').Service;

class Org extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.SysOrg.findAndCountAll({
      offset,
      limit,
    });
  }

  async find(id) {
    const org = await this.ctx.model.SysOrg.findByPk(id);
    if (!org) {
      this.ctx.throw(404, 'prey not found');
    }
    return org;
  }

  async create(org) {
    return this.ctx.model.SysOrg.create(org);
  }

  async update({ id, updates }) {
    const org = await this.ctx.model.SysOrg.findByPk(id);
    if (!org) {
      this.ctx.throw(404, 'prey not found');
    }
    return org.update(updates);
  }

  async delete(id) {
    const org = await this.ctx.model.SysOrg.findByPk(id);
    if (!org) {
      this.ctx.throw(404, 'prey not found');
    }
    return org.destroy();
  }
}

module.exports = Org;
