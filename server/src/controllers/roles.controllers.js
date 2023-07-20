const Role = require('../models/Role');

const getRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json(roles);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  getRoles
}