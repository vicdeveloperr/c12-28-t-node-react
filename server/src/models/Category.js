const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Category = db.define('category', {
  idCategory: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
},
  {
    initialAutoIncrement: 1,
    timestamps: false
  });

module.exports = Category;
