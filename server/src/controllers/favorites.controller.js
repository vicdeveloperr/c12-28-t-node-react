const Favorite = require('../models/Favorite');
const Product = require('../models/Product');
const { Op } = require('sequelize')

const getFavorites = async (req, res) => {
  try {
      const favorites = await Favorite.findAll({
        include: [
          {
            model: Product, attributes: ['name']
          }
        ]
      });
      res.status(200).json(favorites);
  } catch (error) {
      console.log(error);
  }
}

const getFavoritesByUser = async (req, res) => {
  const { id } = req.params;
  try {
    const allFavoritesUser = await Favorite.findAll({
      where: {idUserFavorite: id},
      include: [
        {
          model: Product, attributes: ['name']
        }
      ]
    })
    allFavoritesUser ? res.status(200).send(allFavoritesUser) : res.status(400).send('favorites not found');
  }catch(error) {
    console.log(error);
  }
}

const postFavorites = async (req, res) => {
  const {idUserFavorite, idProductFavorite} = req.body;
  try {
    const newFavorites = await Favorite.create({
      idUserFavorite, idProductFavorite
    })
    res.status(201).send(newFavorites);
  } catch (error) {
    console.log(error);
  }
}

const deleteFavoriteUser = async (req, res) => {
  const {idUser, idProduct} = req.params
  try {
    await Favorite.destroy({ 
      where: { 
        [Op.and]: [{idUserFavorite: idUser}, {idProductFavorite: idProduct }]
      }
    });
    res.status(200).send('Favorite deleted');
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  getFavorites,
  getFavoritesByUser,
  postFavorites,
  deleteFavoriteUser
}