const Cart = require('../models/Cart');
const Cart_detail = require('../models/Cart_detail');
const User = require('../models/User')
const Product = require('../models/Product');
const {Op} = require('sequelize');

const getCarts = async (req, res) => {
  try {
      const carts = await Cart.findAll({
        include: [
          {
            model: User, attributes: ['firstName', 'lastName']
          }
        ],
        attributes: {exclude: ['idUser']}
      });
      res.status(200).json(carts);
  } catch (error) {
      console.log(error);
  }
};

const getCartUser = async (req, res) => {
  const {idUser} = req.params;
  console.log(idUser)
  try {
    const user = await User.findByPk(idUser);
    console.log(user)
    
    if (!user) {
      return res.status(404).json({ message: 'User not found!!' });
    }

    const cart = await Cart.findAll({
      where: {
        idUser: idUser
      },
      include: [
        {
          model: User, attributes: ['firstName', 'lastName']
        }
      ],
      attributes: {exclude: ['idUser']}
    })
    cart.length ? res.status(200).json(cart) : res.status(400).json({ message: 'This user has no products in his car!!' });
  } catch (error) {
    console.log(error);
  }
}

const getProductsCartUser = async (req, res) => {
  const {idUser} = req.params;
  try {

    const user = await User.findByPk(idUser);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found!!' });
    }

    const idCartUser = await Cart.findAll({
      raw:true,
      where: {
        idUser: idUser
      }
    })
    
    if (idCartUser.length) {
      const productsCart = await Cart_detail.findAll({
        where: {
          idCart: idCartUser[0].idCart
        },
        include: [
          {
            model: Product, attributes: ['idProduct', 'name', 'price']
          },
          {
            model: Cart, attributes: {exclude: ['idCart']},
              include: [
                {
                  model: User, attributes: ['firstName', 'lastName']
                }
              ]
          }
        ],
        attributes: {exclude: [/* 'idCart', */ 'idCart_detail', 'idProduct']}
      })
      res.status(200).json(productsCart)
    } else {
      res.status(400).json({ message: 'This user has no products in his car!!' });
    }
  } catch (error) {
    console.log(error)
  }
}

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
      where: { idUser: idUser/* , state: 'open' */ },
    });

    if (!cart) {
      cart = await Cart.create({ idUser: idUser/*, state: 'open' */  });
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
  const {idUser, idProduct} = req.params
  try {

    const user = await User.findByPk(idUser);
    const product = await Product.findByPk(idProduct);

    if (!user || !product) {
      return res.status(404).json({ message: 'User or product not found!!' });
    }

    const userCart = await Cart.findAll({
      where: {idUser: idUser},
      raw: true
    });

    if (userCart.length) {
      
      const product = await Cart_detail.findAll({where: {idProduct: idProduct}});
      
      if (!product.length) {
        return res.status(404).json({ message: 'The product is not in the cart!!' });
      }

      await Cart_detail.destroy({ 
        where: { 
          [Op.and]: [{idCart: userCart[0].idCart }, {idProduct: idProduct }]
        },
      });
      res.status(200).send('Product removed from cart');
    } else {
      res.status(400).json({ message: 'This user has no products in his car!!' });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCarts,
  addProductCart,
  getCartUser,
  getProductsCartUser,
  deleteProductCart
}