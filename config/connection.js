const Sequelize = require('sequelize');

//use env files to obfuscate important DB information. .env file is in the .gitignore and not pushed to the repo
require('dotenv').config();
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.PORT,
  });

module.exports = sequelize;
