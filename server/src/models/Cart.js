const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Product = require('./Product');
const User = require('./User');

const Cart = db.define('cart', {
  idCart: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  idProduct: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
  {
	  initialAutoIncrement: 1,
    timestamps: false
  },
);

Cart.belongsTo(User, {
  foreignKey: 'idUser',
});

Cart.belongsTo(Product, {
  foreignKey: 'idProduct'
})

module.exports = Cart;