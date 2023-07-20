const { DataTypes } = require("sequelize");
const db = require("../config/db");
const User = require("./User");

const Address = db.define('address', {
  idAddress: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  province: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  flat: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idUserAddress: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
  {
		initialAutoIncrement: 1,
    timestamps: false,
  }
);

Address.belongsTo(User, {
  foreignKey: "idUserAddress",
});

module.exports = Address;
