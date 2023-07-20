const User = require('../models/User');
const Role = require('../models/Role');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Role, attributes: {
            exclude: ['idRol']
          }
        }
      ],
      attributes: {exclude: ['idRol', 'password']}
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
          model: Role, attributes: {
            exclude: ['idRol']
          }
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

const createUser = async (req, res) => {
  res.send('creating user')
}

module.exports = {
  getUsers,
  getUserByEmail,
  createUser
}