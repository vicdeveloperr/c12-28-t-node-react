const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Category = require('../models/Category')

const Product = db.define('product', {
  // Defino modelo
  idProduct: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
},
{
  timestamps: false
});

module.exports = Product;

Product.belongsTo(Category, {
  foreignKey: 'idCategoryProduct',
  // sourceKey: 'idCategory'
});



