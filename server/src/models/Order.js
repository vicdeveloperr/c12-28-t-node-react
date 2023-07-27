const { DataTypes } = require('sequelize');
const User = require('../models/User');
const Payment_method = require('../models/Payment_method');
const Adress = require('./Address')
const db = require('../config/db');

const Order = db.define('order', {
  idOrder: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  idUserOrder: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idPayment: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idAdress: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  total: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
},
  {
	  initialAutoIncrement: 1,
    timestamps: false
  },
);

Order.belongsTo(User, {
  foreignKey: 'idUserOrder'
});

Order.belongsTo(Payment_method, {
  foreignKey: 'idPayment'
});

Order.belongsTo(Adress, {
  foreignKey: 'idAdress'
});

module.exports = Order;