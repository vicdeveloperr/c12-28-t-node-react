const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Product = require('../config/Product');

const Photo = db.define('photo', {
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

Photo.belongsToMany(Product, {
    through: 'Product_Photo'
})

module.exports = Photo;