const User = require('../models/User');
const Role = require('../models/Role');
const Address = require('../models/Address');
const Photo = require('../models/Photo');
const {Op} = require('sequelize')

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

const getUser = async (req, res) => {
  const {id} = req.params
  try {
    const user = await User.findOne({
      where: {
        idUser: id
      },
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
    res.status(200).json(user);
  } catch (error) {
      console.log(error);
    }
};

const getUserByEmail = async (req, res) => {
  const { email } = req.query;

  try {
    const userfound = await User.findOne({
      where: {
        email: {
          [Op.like]: `%${email}%`
        }
      },
      include: [
        {
          model: Role, attributes: {exclude: ['idRol']}
        }
      ],
      attributes: { exclude: ['idRol'] }
    }
    );
    res.status(200).json(userfound);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const {id} = req.params
  const { user, email, firstName, lastName, phone, idUserAddress, idPhoto } = req.body;
  try {
    const user = await User.findOne({
      where: { idUser: id }
    })
    // El método set solo actualiza la propiedad que se indica en el body
    user.set(req.body)
    await user.save();
    return res.json(user);  
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  getUserByEmail
}
