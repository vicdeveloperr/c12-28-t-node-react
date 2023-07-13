const User = require('../models/User');

const checkDuplicateUser = async (req, res, next) => {
  const user = await User.findOne({ where: { user: req.body.user } })

  if (user) return res.status(400).json({ message: 'The user already exists' })

  const email = await User.findOne({ where: { email: req.body.email } })

  if (email) return res.status(400).json({ message: 'The email already exists' })

  next();
}

module.exports = {
  checkDuplicateUser
}