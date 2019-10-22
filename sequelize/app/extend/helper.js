"use strict";
const jwt = require('jsonwebtoken');
module.exports = {
  secretOrPrivateKey: "Admin-Token", // 这是加密的key（密钥）
  parseInt(string) {
    if (typeof string === "number") return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },
  checkDataIsNullOrUndefined(data) {
    return ((data!==null || data!==undefined)? true : false);
  },
  signIn(content) {
    const token = jwt.sign(content, this.secretOrPrivateKey);
    return token;
  },
  decode(token) {
    return jwt.decode(token);
  }
};
