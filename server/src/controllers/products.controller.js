const Product = require('../models/Product');
const Category = require('../models/Category');
const User = require('../models/User');

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
        },
        {
          model: PhotoProduct, attributes: {
            exclude: []
          }
        }
      ],
      attributes: { exclude: ['idCategoryProduct'] }
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
}

const createProduct = async (req, res) => {

  const { idProduct, name, description, stock, price, topic_1, detail_1, topic_2, detail_2, topic_3, detail_3,
    topic_4, detail_4, topic_5, detail_5, topic_6, detail_6, topic_7, detail_7, topic_8, detail_8,
    idCategoryProduct, idUserProduct, photo } = req.body;
  try {
    const newProduct = await Product.create({
      idProduct, name, description, stock, price, topic_1, detail_1, topic_2, detail_2, topic_3, detail_3,
      topic_4, detail_4, topic_5, detail_5, topic_6, detail_6, topic_7, detail_7, topic_8, detail_8,
      category: [{ idCategoryProduct }],
      user: [{ idUserProduct }]/* ,
      photos: [{ photo }] */
    },
      {
        include: [{
          association: Product.Category,
          include: [Category.idCategoryProduct]
        }]
      },
      {
        include: [{
          association: Product.User,
          include: [User.idUserProduct]
        }]
      },
      {
        include: [{
          association: PhotoProduct,
          include: [PhotoProduct.idPhoto]
        }]
      });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ where: { idProduct: id } });
    if (product) {
      await Product.destroy({ where: { idProduct: id } })
      return res.status(204).send('Product deleted');
    } else {
      return res.status(400).send('product not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  getCategories
}