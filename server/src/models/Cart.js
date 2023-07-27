const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User');

const Cart = db.define('cart', {
  idCart: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  idUser: {
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

module.exports = Cart;