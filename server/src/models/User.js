const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Rol = require('../models/Rol');
const Photo = require('../models/Photo');

const User = db.define('user', {
    idUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idUserAddress: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false,
    },

);

User.belongsTo(Rol, {
    foreignKey: 'idRol',
});

User.belongsTo(Photo, {
    foreignKey: 'idPhoto'
})

module.exports = User;


