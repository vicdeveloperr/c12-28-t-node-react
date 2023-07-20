const Category = require('../models/Category');

const getCategories = async (req, res) => {
	const {name} = req.query
  try {
    const categories = await Category.findAll();
		if (name) {
			const categoryName = categories.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
			categoryName.length ? res.status(200).json(categoryName) : res.status(404).send('no category found');
		}
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
}

const getCategory = async (req, res) => {
	const { id } = req.params;
	try {
  	const category = await Category.findByPk(id);
		category ? res.status(200).send(category) : res.status(404).send('not found')
	} catch (error) {
  }
};

const postCategory = async (req, res) => {
    const { name, description, state } = req.body;
    try {
			const categoryCreated = await Category.create({
				name, 
				description, 
				state: true
			})
			res.status(201).send('category created successfully')
    } catch (error) {
			console.error(error)
    }
}

const deleteCategory = async (req, res) => {
	const {id} = req.params;
	try {
		const category = await Category.findByPk(id);
		if (category) {
			await Category.destroy({ where: {idCategory: id} });
			res.status(200).send('Category removed');
		} else {
			res.status(404).send('Not cotegory found!!');
		}
	} catch (error) {
		console.log(error);
	}
}

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const {name, description, status} = req.body;
  try {
    const category = await Category.findOne({
      where: { idCategory: id }
    })
    // El método set solo actualiza la propiedad que se indica en el body
    category.set(req.body)
    await category.save();
    return res.json(category);  
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategories,
	getCategory,
	postCategory,
	deleteCategory,
	updateCategory
}