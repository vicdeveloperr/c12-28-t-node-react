const Favorite = require('../models/Favorite');

const getFavorites = async (req, res) => {
  try {
      const favorites = await Favorite.findAll();
      res.status(200).json(favorites);
  } catch (error) {
      console.log(error);
  }
}

module.exports = {
  getFavorites
}