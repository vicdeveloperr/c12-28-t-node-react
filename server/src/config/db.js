const Sequelize = require('sequelize');

// SI UTILIZO DOTENV PARA LAS VARIABLES
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
require('dotenv').config()
const { DB_NAME, DB_USER, DB_PASSWORD, NODE_ENV, DB_DEPLOY } = process.env

const db = NODE_ENV === 'production' ? 
new Sequelize(
  DB_DEPLOY, {
    dialect: 'mysql',
    define: {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
      timestamps: false,
      freezeTableName: true
    }
  }
): new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    timestamps: false,
    freezeTableName: true
  }
});

module.exports = db;