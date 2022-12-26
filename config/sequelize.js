module.exports = {
  development: {
    username: "kpop_user",
    password: "2f9x&l597FgQ",
    database: "kpop_info",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: "0",
    logging: true,
  },
  test: {
    username: "kpop_user",
    password: "2f9x&l597FgQ",
    database: "kpop_info",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: "0",
    logging: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: "0",
  },
};
