const User = require('../models/User');
const Role = require('../models/Role');
const Address = require('../models/Address');
const Photo = require('../models/Photo');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Role, attributes: {exclude: ['idRol']}
        },
        {
          model: Address, attributes: {exclude: ['idAddress']}
        },
        {
          model: Photo, attributes: {exclude: ['idPhoto']}
        }
      ],
      attributes: {exclude: ['idRol', 'password', 'idUserAddress', 'idPhoto']}
    });
    res.status(200).json(users);
  } catch (error) {
      console.log(error);
    }
};

const getUserByEmail = async (req, res) => {

  const {email} = req.query;

  try {
    const userfound = await User.findOne({
      where: {email: email},
      include: [
        {
          model: Role, attributes: {exclude: ['idRol']}
        }
      ],
      attributes: {exclude: ['idRol']}
    }
    );
    res.status(200).json(userfound);
  } catch (error) {
      console.log(error);
    }
};

module.exports = {
  getUsers,
  getUserByEmail
}