const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Category = require('../models/Category');
const User = require('../models/User');
const Photo = require('../models/Photo');

const Product = db.define('product', {
  // Defino modelo
  idProduct: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
  },
  topic_1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic_2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic_3: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_3: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic_4: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_4: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic_5: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_5: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic_6: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_6: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic_7: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_7: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic_8: {
    type: DataTypes.STRING,
    allowNull: false
  },
  detail_8: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idCategoryProduct: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idUserProduct: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
  {
    timestamps: false
  });

Product.belongsTo(Category, {
  foreignKey: 'idCategoryProduct',
  // sourceKey: 'idCategory'
});
Product.belongsTo(User, {
  foreignKey: 'idUserProduct',
  // sourceKey: 'idCategory'
});
Product.belongsToMany(Photo, {
  through: 'Product_Photo'
})

module.exports = Product;




