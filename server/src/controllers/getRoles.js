const Rol = require('../models/Rol');

module.exports = async (req, res) => {
    try {
        const roles = await Rol.findAll();
        res.status(200).json(roles);
    } catch (error) {
        console.log(error);
    }
}