const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Role = db.define('role', {
    idRol: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        initialAutoIncrement: 1,
        timestamps: false
    });

module.exports = Role;