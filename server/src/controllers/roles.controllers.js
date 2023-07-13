const Rol = require('../models/Rol');

const getRoles = async (req, res) => {
    try {
        const roles = await Rol.findAll();
        res.status(200).json(roles);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  getRoles
}