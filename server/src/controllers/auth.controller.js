const User = require('../models/User');
// const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config()

/*** REGISTRO DE NUEVO USUARIO ***/
const signUp = async (req, res) => {

  const { user, firstName, lastName, email, password, idRol } = req.body;
  // encriptar password
  let salt = await bcrypt.genSalt(10);
  let encryptPassword = await bcrypt.hash(password, salt);
  // creo nuevo usuario -> si no especifico rol se asigna rol guest (id: 3)
  const newUser = await User.create({
    user,
    email,
    firstName,
    lastName,
    password: encryptPassword, // -> password encriptado
    idRol: idRol || 2
  });
  // genero token para el usuario que se loguea correctamente
  const token = jwt.sign({ id: newUser.idUser }, process.env.SECRET, {
    expiresIn: 86400 // expira en 24 hs
  });
  // devuelvo el token generado
  res.status(200).json({ token });
}

/*** LOGIN DE USUARIO ***/
const signIn = async (req, res) => {

  const { email, password } = req.body;

  // busco usuario x email
  if (!email || !password) return res.status(400).send('falta email o contraseña!!!');

  const userFound = await User.findOne({ where: { email: email } });

  // si no existe envío mensaje
  if (!userFound) return res.status(400).json({ message: 'User not found' })
  
  // si existe verifico password encriptado
  let matchPassword = await bcrypt.compare(password, userFound.password)

  if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' })

  // si el password es correcto envío token
  const token = jwt.sign({ id: userFound.idUser }, process.env.SECRET, {
    expiresIn: 86400
  })
  res.json({ message: `Usuario ${userFound.user} autenticado`, token: token, user: userFound });
}

module.exports = {
  signUp,
  signIn
}