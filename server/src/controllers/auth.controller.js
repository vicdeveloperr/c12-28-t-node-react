const User = require('../models/User');
const Rol = require('../models/Rol');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config()

/*** REGISTRO DE NUEVO USUARIO ***/
const signUp = async (req, res) => {
  
  const { idUser, name, email, password, idRol } = req.body;
  // encriptar password
  let salt = await bcrypt.genSalt(10);
  let encryptPassword = await bcrypt.hash(password, salt); 
  // creo nuevo ususario -> si no especifico rol se asigna rol invitado (id: 4)
  const newUser = await User.create({
    idUser,
    name,
    email,
    password: encryptPassword, // -> password encriptado
    idRol: idRol || 4
  });
  // genero token para el usuario que se loguea correctamente
  const token = jwt.sign({ id: newUser.idUser }, process.env.SECRET, {
    expiresIn: 86400 // expira en 24 hs
  });
  // devuelvo el token generado
  res.status(200).json({token});
}

/*** LOGUEO DE USUARIO ***/
const signIn = async (req, res) => {

  const {email, password} = req.body;
  // busco usuario x email
  const userFound = await User.findOne({
    where: {email: email},
    
    include: [
			{
				model: Rol, attributes: {
					exclude: ['idRol']
				}
			}
		],
		attributes: {exclude: ['idRol']}
  });

  // si no existe envío mensaje
  if (!userFound) return res.status(400).json({ message: 'User not found' })
  console.log(userFound.idUser)
  // si existe verifico password encriptado
  let matchPassword = await bcrypt.compare(password, userFound.password)
  
  if (!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'})
  
  // si el password es correcto envío token
  const token = jwt.sign({ id: userFound.idUser }, process.env.SECRET, {
    expiresIn: 86400
  })

  res.json({token})
}

module.exports = {
  signUp,
  signIn
}