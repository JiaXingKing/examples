'use strict';

const Service = require('egg').Service;

class Button extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.SysButton.findAndCountAll({
      offset,
      limit,
    });
  }

  async find(id) {
    const button = await this.ctx.model.SysButton.findByPk(id);
    if (!button) {
      this.ctx.throw(404, 'prey not found');
    }
    return button;
  }

  async create(button) {
    return this.ctx.model.SysButton.create(button);
  }

  async update({ id, updates }) {
    const button = await this.ctx.model.SysButton.findByPk(id);
    if (!button) {
      this.ctx.throw(404, 'prey not found');
    }
    return button.update(updates);
  }

  async delete(id) {
    const button = await this.ctx.model.SysButton.findByPk(id);
    if (!button) {
      this.ctx.throw(404, 'prey not found');
    }
    return button.destroy();
  }
}

module.exports = Button;
