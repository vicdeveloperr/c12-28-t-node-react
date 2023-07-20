const Cart = require('../models/Cart');

const getCarts = async (req, res) => {
  try {
      const carts = await Cart.findAll();
      res.status(200).json(carts);
  } catch (error) {
      console.log(error);
  }
}

module.exports = {
  getCarts
}