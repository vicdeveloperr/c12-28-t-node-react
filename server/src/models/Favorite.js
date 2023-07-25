const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User');
const Product = require('./Product');

const Favorite = db.define('favorite', {
  idFavorite: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  idUserFavorite: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idProductFavorite: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
  {
    initialAutoIncrement: 1,
    timestamps: false
  }
);

Favorite.belongsTo(User, {
  foreignKey: 'idUserFavorite'
});

Favorite.belongsTo(Product, {
  foreignKey: 'idProductFavorite'
})

module.exports = Favorite;