'use strict';
const jwt = require("jsonwebtoken"); // 生成token
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.systemConfig.sysUser.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.systemConfig.sysUser.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.systemConfig.sysUser.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.systemConfig.sysUser.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.systemConfig.sysUser.delete(id);
    ctx.status = 200;
  }
  async login() {
    const ctx = this.ctx;
    const accountName = ctx.query.accountName;
    const passWord = ctx.query.passWord;
    if(!ctx.helper.checkDataIsNullOrUndefined(accountName) || !ctx.helper.checkDataIsNullOrUndefined(passWord))  {ctx.status = 200; return;}
    const result = await ctx.model.SysUser.findOne({
      where:{accountName: accountName, passWord: passWord}
    });
    if(!result)
    {ctx.status = 200;ctx.body = {status:'error',message:'用户名或者密码错误'}; return;}
    else{
      const token  = ctx.helper.signIn(result.id);
      ctx.body = {status:'success',token:token};
    }
  }
}

module.exports = UserController;
