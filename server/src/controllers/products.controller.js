const Product = require('../models/Product');
const Category = require('../models/Category');
const User = require('../models/User')

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category, attributes: {
            exclude: ['idCategory', 'description', 'state']
          }
        },
        {
          model: User, attributes: {
            exclude: ['idUser', 'email', 'password', 'idRol']
          }
        }
      ],
      attributes: {exclude: ['idCategoryProduct']}
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
}

const createProduct = async (req, res) => {
  
  const {idProduct, name, description, stock, price, idCategoryProduct, idUserProduct} = req.body;
  try {
    const newProduct = await Product.create({
      idProduct, name, description, stock, price, idCategoryProduct, idUserProduct
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);    
  }
};

const deleteProduct = async (req, res) => {
  const {id} = req.params;

  try {
    const product = await Product.findOne({where: { idProduct: id }});
    if (product) {
      await Product.destroy({ where: { idProduct: id }})
      return res.status(204).send('Product deleted');
    } else {
      return res.status(400).send('product not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

module.exports = {
  getProducts,
  createProduct,
  deleteProduct
}