const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Role = require('./Role');
const Photo = require('../models/Photo');
const Address = require('../models/Address');

const User = db.define('user', {
	idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
        allowNull: true
	},
	idUserAddress: {
        type: DataTypes.INTEGER,
        allowNull: true
	},
    idRol: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idPhoto: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
	{
		initialAutoIncrement: 1,
  	    timestamps: false
	},
);

User.belongsTo(Role, {
    foreignKey: 'idRol',
});

User.belongsTo(Address, {
    foreignKey: 'idUserAddress',
});

User.belongsTo(Photo, {
    foreignKey: 'idPhoto'
})

module.exports = User;


