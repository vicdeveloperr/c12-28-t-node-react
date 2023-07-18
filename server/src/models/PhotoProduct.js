const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Product = require('../models/Product');

const PhotoProduct = db.define('photoProduct', {
    idPhoto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        timestamps: false
    });

//PhotoProduct.belongsTo(Product);

module.exports = PhotoProduct;