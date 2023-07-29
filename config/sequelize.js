require("dotenv").config();

const defaultConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres",
  protocol: "postgres",
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
  pool: {
    min: 1,
    max: 15,
    idle: 5000,
  },
};

const configs = {
  production: {
    ...defaultConfig,
  },
  development: {
    ...defaultConfig,
    logging: true,
  },
  test: {
    ...defaultConfig,
    dialect: "sqlite",
    storage: "./tests/database.sqlite",
    logging: true,
  },
};

module.exports = configs;
