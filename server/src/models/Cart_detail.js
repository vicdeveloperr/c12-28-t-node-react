const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Product = require('./Product');
const Cart = require('./Cart');

const Cart_detail = db.define('cart_detail', {
  idCart_detail: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  idCart: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idProduct: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // defaultValue: 1,
  },
  subtotal: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
},
  {
	  initialAutoIncrement: 1,
    timestamps: false
  },
);

Cart_detail.belongsTo(Cart, {
  foreignKey: 'idCart',
});

Cart_detail.belongsTo(Product, {
    foreignKey: 'idProduct'
})

// Cart.hasMany(Product, {
//   foreignKey: 'idProduct'
// })

module.exports = Cart_detail;