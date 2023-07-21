const Product = require('../models/Product');
const Category = require('../models/Category');
const User = require('../models/User');
const Photo = require('../models/Photo');

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
          model: Photo, attributes: {
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
const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByPk(id,
      {
        include: [
          {
            model: Category/* , attributes: {
              exclude: ['idCategory', 'description', 'state']
            } */
          },
          {
            model: User/* , attributes: {
              exclude: ['idUser', 'email', 'password', 'idRol']
            } */
          },
          {
            model: Photo/* , attributes: {
              exclude: []
            } */
          }
        ]/* ,
        attributes: { exclude: ['idCategoryProduct'] } */
      }
    );
    if (product) {
      res.status(200).json(product);
    } else {
      return res.status(400).send('product not found');
    }
  } catch (error) {
    console.log(error);
  }
}

const createProduct = async (req, res) => {

  const { name, description, stock, price, topic_1, detail_1, topic_2, detail_2, topic_3, detail_3,
    topic_4, detail_4, topic_5, detail_5, topic_6, detail_6, topic_7, detail_7, topic_8, detail_8,
    idCategoryProduct, idUserProduct, photos } = req.body;
  try {
    const newProduct = await Product.create({
      name, description, stock, price, topic_1, detail_1, topic_2, detail_2, topic_3, detail_3,
      topic_4, detail_4, topic_5, detail_5, topic_6, detail_6, topic_7, detail_7, topic_8, detail_8,
      idCategoryProduct, idUserProduct
    });
    const createdPhotos = await Promise.all(
      photos.map(async (photoData) => {
        const photo = await Photo.create(photoData);
        await newProduct.addPhoto(photo);
        return photo;
      })
    );
    const newProductWithPhotos = { newProduct, "photos": createdPhotos }
    res.status(201).json(newProductWithPhotos);
  } catch (error) {
    console.log(error);
  }
};

const editProductPhoto = async (req, res) => {
  const { idProduct, name, description, stock, price, topic_1, detail_1, topic_2, detail_2, topic_3, detail_3,
    topic_4, detail_4, topic_5, detail_5, topic_6, detail_6, topic_7, detail_7, topic_8, detail_8,
    idCategoryProduct, idUserProduct, photos } = req.body;
  try {
    const product = await Product.findByPk(idProduct, {
      include: { model: Photo, as: 'photos' }
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.name = name;
    product.description = description;
    product.stock = stock;
    product.price = price;
    product.topic_1 = topic_1;
    product.detail_1 = detail_1;
    product.topic_2 = topic_2;
    product.detail_2 = detail_2;
    product.topic_3 = topic_3;
    product.detail_3 = detail_3;
    product.topic_4 = topic_4;
    product.detail_4 = detail_4;
    product.topic_5 = topic_5;
    product.detail_5 = detail_5;
    product.topic_6 = topic_6;
    product.detail_6 = detail_6;
    product.topic_7 = topic_7;
    product.detail_7 = detail_7;
    product.topic_8 = topic_8;
    product.detail_8 = detail_8;
    product.idCategoryProduct = idCategoryProduct;
    product.idUserProduct = idUserProduct;
    await product.save();

    const photosToUpdate = product.photos.map((photo, i) => {
      photo.name = photos[i].name;
      return photo;
    });

    await Promise.all(photosToUpdate.map((photo) => photo.save()));

    res.status(200).json({ message: 'Foto editada exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al editar la foto del producto' });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ where: { idProduct: id } });
    if (product) {
      /* const photosToDelete = await Photo.findAll({ where: { idPhoto: product_photo.photoIdPhoto product.idProduct } });
      for (const photo of photosToDelete) {
        await photo.destroy();
      } */
      await Product.destroy({
        where: { idProduct: id },
        include: [Photo]
      })
      return res.status(202).send('Product deleted');
    } else {
      return res.status(400).send('product not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  editProductPhoto,
  deleteProduct
}