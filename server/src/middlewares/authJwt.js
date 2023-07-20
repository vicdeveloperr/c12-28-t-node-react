// middleware para rutas para verificar si el token existe antes de acceder

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Rol = require('../models/Role');
require('dotenv').config()

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"]; // -> lo que tiene en la propiedad headers se guarda en token
    // recibimos el token, si no existe se envía mensaje
    if (!token) return res.status(403).json({message: 'No token provided'});
    // si existe, extremos lo información 
    const decoded = jwt.verify(token, process.env.SECRET);
    // buscamos el usuario en el modelo con el id guardado en el token 
    const user = await User.findByPk(decoded.id, {password: 0})
    // si no existe enviamos mensaje
    if (!user) return res.status(404).json({ message: 'not user found'})
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

const isUser = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  const decoded = jwt.verify(token, process.env.SECRET);
  
  const user = await User.findByPk(decoded.id);
  const roles = await Rol.findOne({where: { idRol: user.idRol }});
  
  if (roles.name === 'User') {
    next();
    return;
  } else {
    return res.status(403).json({ message: 'Require Seller role'})
  }
}

const isAdmin = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  const decoded = jwt.verify(token, process.env.SECRET);
  
  const user = await User.findByPk(decoded.id);
  const roles = await Rol.findOne({where: { idRol: user.idRol }});
  
  if (roles.name === 'Admin') {
    next();
    return;
  } else {
    return res.status(403).json({ message: 'Require Administrador role'})
  }
}

module.exports = {
  verifyToken,
  isUser,
  isAdmin
}