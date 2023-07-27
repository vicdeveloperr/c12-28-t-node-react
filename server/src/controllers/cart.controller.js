const Cart = require('../models/Cart');
const Cart_detail = require('../models/Cart_detail');
const User = require('../models/User')
const Product = require('../models/Product');

const getCarts = async (req, res) => {
  try {
      const carts = await Cart.findAll();
      res.status(200).json(carts);
  } catch (error) {
      console.log(error);
  }
};

const addProductCart = async (req, res) => {
  try {
    const { idUser } = req.params;
    const { idProduct, amount } = req.body;

    // Verificar si el usuario y el producto existen
    const user = await User.findByPk(idUser);
    const product = await Product.findByPk(idProduct);

    if (!user || !product) {
      return res.status(404).json({ message: 'User or product not found' });
    }

    // Obtener o crear el carrito del usuario con estado "abierto"
    let cart = await Cart.findOne({
      where: { isUser: idUser, state: 'open' },
    });

    if (!cart) {
      cart = await Cart.create({ state: 'open', idUser: idUser });
    }

    // Calcular el subtotal
    const subtotal = product.price * amount;

    // Crear el detalle del carrito
    const cartDetail = await Cart_detail.create({
      idCart: cart.idCart,
      idProduct,
      amount,
      subtotal,
    });

    return res.status(201).json(cartDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding product to cart' });
  }
}

const deleteProductCart = async (req, res) => {

}

module.exports = {
  getCarts,
  addProductCart,
  deleteProductCart
}