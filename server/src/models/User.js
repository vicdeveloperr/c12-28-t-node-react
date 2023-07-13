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
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idUserRol: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUserPhoto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false
    });

User.belongsTo(Rol, {
    through: 'idUserRol'
})

User.belongsTo(Photo, {
    through: 'idUserPhoto'
})

module.exports = User;


