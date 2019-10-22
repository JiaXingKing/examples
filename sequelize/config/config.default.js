"use strict";

module.exports = (appInfo) => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + "_sequelize-example";
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ["*"]
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };
  config.sequelize = {
    dialect: "mysql", // support: mysql, mariadb, postgres, mssql
    username: "root",
    password: "123456",
    database: "egg-sequelize-example-dev",
    host: "127.0.0.1",
    port: 3306,
    timezone: "+08:00", // 设置东8区, 单单设置这个的话只有写有效**
    dialectOptions: {
      // 添加这个后，读取的才是设置的timezone时区时间。
      typeCast(field, next) {
        if (field.type === "DATETIME" || field.type === "TIMESTAMP") {
          return new Date(field.string() + "Z");
        }
        return next();
      }
    },
    pool: {
      // 连接池
      max: 10,
      min: 1,
      idle: 10000
    },
    retry: { max: 3 }
  };

  return config;
};
