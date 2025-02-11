"use strict";
const Controller = require("egg").Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset)
    };
    ctx.body = await ctx.service.systemConfig.sysUser.list(query);
    ctx.body.status = true;
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.systemConfig.sysUser.find(
      ctx.helper.parseInt(ctx.params.id)
    );
  }

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.systemConfig.sysUser.create(
      ctx.request.body
    );
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.systemConfig.sysUser.update({
      id,
      updates: body
    });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.systemConfig.sysUser.delete(id);
    ctx.status = 200;
  }

  async info() {
    const ctx = this.ctx;
    const token = ctx.request.body.token;
    if (token) {
      const userId = ctx.helper.decode(token);
      ctx.body = await ctx.model.SysUser.findAll({
        where: { id: userId },
        include: [
          {
            model: ctx.model.SysRole,
            as: "roles",
          }
        ]
      });
      ctx.body.status=true;
    } else {
      ctx.body = { status: false, message: "请重新登录" };
    }
  }
  async login() {
    const ctx = this.ctx;
    const accountName = ctx.request.body.accountName;
    const passWord = ctx.request.body.passWord;
    if (accountName && passWord) {
      const user = await ctx.model.SysUser.findOne({
        where: { accountName: accountName, passWord: passWord }
      });
      if (!user) {
        ctx.body = { status: false, message: "用户名或者密码错误" };
      } else {
        const token = ctx.helper.signIn(user.id);
        ctx.body = { status: true, token: token };
      }
    } else {
      ctx.body = { status: false, message: "请填写用户名或者密码" };
    }
  }
}

module.exports = UserController;
