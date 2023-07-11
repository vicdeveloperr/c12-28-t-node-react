const Sequelize = require('sequelize');

// SI UTILIZO DOTENV PARA LAS VARIABLES
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
require('dotenv').config()

const db = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
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