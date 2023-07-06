const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Category = db.define('category',{
  idCategory: {
    type: DataTypes.INTEGER,
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
  timestamps: false
});

module.exports = Category;