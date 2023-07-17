const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Rol = db.define('rol', {
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
        timestamps: false
    });

module.exports = Rol;