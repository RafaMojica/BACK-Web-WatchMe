require("dotenv").config();

const Sequalize = require("sequelize");

const db = new Sequalize(
  process.env.DB_NAME,
  process.env.DB_USER || null,
  process.env.DB_PASS || null,
  {
    host: process.env.SERVIDOR,
    dialect: process.env.DB,
    logging: false,
  }
);

module.exports = db