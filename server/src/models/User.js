const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Rol = require('../models/Rol');
const Photo = require('../models/Photo');

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
	}
},
{
	initialAutoIncrement: 100,
  timestamps: false
},

);

User.belongsTo(Rol, {
    foreignKey: 'idRol',
});

User.belongsTo(Photo, {
    foreignKey: 'idPhoto'
})

module.exports = User;


