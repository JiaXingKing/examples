"use strict";

module.exports = {
  secretOrPrivateKey: "cehuiyuanzhaobiaoxiangmu", // 这是加密的key（密钥）
  parseInt(string) {
    if (typeof string === "number") return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },
  checkDataIsNullOrUndefined(data) {
    return data ? true : false;
  },
  signIn(content) {
    const token = jwt.sign(content, this.secretOrPrivateKey);
    return token;
  },
  decode(req) {
    const token =
      req.body.token || req.query.token || req.headers["authorization"]; // 从body或query或者header中获取token
    return jwt.decode(token);
  }
};
