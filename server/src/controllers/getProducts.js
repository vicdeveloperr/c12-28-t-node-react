const Product = require('../models/Product');
const Category = require('../models/Category');

module.exports = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category, attributes: {
            exclude: ['idCategory', 'description', 'state']
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