const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Payment_method = db.define('payment_method', {
  idPayment: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    initialAutoIncrement: 1,
    timestamps: false
  }
);

module.exports = Payment_method;