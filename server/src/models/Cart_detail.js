const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Product = require('./Product');
const Cart = require('./Cart');

const Cart_detail = db.define('cart_detail', {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  subtotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // idCartDetail: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   autoIncrement: true,
  //   primaryKey: true
  // },
  // idProduct: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  // amount: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  // price: {
  //   type: DataTypes.DOUBLE,
  //   allowNull: false
  // },
  // idCart: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
},
  {
	  initialAutoIncrement: 1,
    timestamps: false
  },
);

Cart_detail.belongsTo(Cart, {
  foreignKey: 'idCart',
});

Cart.belongsTo(Product, {
  foreignKey: 'idProduct'
})

module.exports = Cart_detail;