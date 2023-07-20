const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Order = require('../models/Order');
const Product = require('../models/Product');

const Order_detail = db.define('order_detail', {
  idDetail: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  idOrder: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idProductOrder: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
},
  {
	  initialAutoIncrement: 1,
    timestamps: false
  }
);

Order_detail.belongsTo(Order, {
  foreignKey: 'idOrder'
});

Order_detail.hasMany(Product, {
  foreignKey: 'idProductOrder'
})

module.exports = Order_detail;