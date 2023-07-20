const Category = require('../models/Category');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  getCategories
}