const Role = require('../models/Role');
const User = require('../models/User');
const Photo = require('../models/Photo');
const Address = require('../models/Address');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Payment_method = require('../models/Payment_method');

const bcrypt = require('bcryptjs');

const preloadData = async () => {

  let salt = await bcrypt.genSalt(10);

    /*** Precarga modelo Fotos ***/
  const photos = await Photo.findAll();
  if (!photos.length) {
    await Photo.create({
      name: 'https://i.pinimg.com/564x/a5/e6/6c/a5e66c47ad99bb70c3e93a0760f1e3ea.jpg'
    });
    await Photo.create({
      name: 'https://i.pinimg.com/564x/5c/51/24/5c51247e075d08bb2726fe8aedc97cfe.jpg'
    });
    await Photo.create({
      name: 'https://i.pinimg.com/564x/62/65/1f/62651f2df5591425497dc4387cd0dbb1.jpg'
    });
    await Photo.create({
      name: 'https://i.pinimg.com/564x/7f/be/cd/7fbecd8564b06b245e81c5ef9dfddbe1.jpg'
    });
    await Photo.create({
      name: 'https://i.pinimg.com/564x/e1/70/9b/e1709bc86114102d04cf73089946ceda.jpg'
    });
    await Photo.create({
      name: 'https://images.start.com.ar/SM-S918BZKMARO-4.jpg'
    });
    await Photo.create({
      name: 'https://images.samsung.com/es/smartphones/galaxy-s23-ultra/buy/02_Image_Carousel/02-5_Offer_KV_General_Trade-in/S23Ultra_offerkv_tradein_PC.jpg'
    });
    await Photo.create({
      name: 'https://images.samsung.com/es/smartphones/galaxy-s23-ultra/buy/02_Image_Carousel/02-3_Group_KV_Exclusive_Color/S23Ultra_groupkv_exclusive_PC.jpg'
    });
  }
  
  /*** Precarga modelo Metodo de Pago ***/
  const payments = await Payment_method.findAll();
  if (!payments.length) {
    await Payment_method.create({
      name: "Mercado Pago",
    });
    await Payment_method.create({
      name: "Paypal",
    });
    await Payment_method.create({
      name: "Stripe",
    });
    await Payment_method.create({
      name: "Amazon Pay",
    });
  }

  /*** Precarga modelo Roles ***/
  const roles = await Role.findAll();
  if (!roles.length) {
    await Role.create({
      name: "Admin",
    });
    await Role.create({
      name: "User",
    });
    await Role.create({
      name: "Guest",
    });
  }

  /*** Precarga modelo Direcciones ***/
  const addresses = await Address.findAll();
  if (!addresses.length) {
    await Address.bulkCreate([
      {
        country: 'Argentina',
        province: 'Tucumán',
        city: 'San Miguel de Tucumán',
        street:'Calle 1',
        number: 1234,
        flat: '',
        district: '',
        cp: '4000',
        // idUserAddress: 1
      },
      {
        country: 'Argentina',
        province: 'Misiones',
        city: 'Posadas',
        street:'Calle 2',
        number: 1234,
        flat: '',
        district: '',
        cp: '3300',
        // idUserAddress: 2
      },
      {
        country: 'Argentina',
        province: 'Buenos Aires',
        city: 'Buenos Aires',
        street:'Calle 3',
        number: 1234,
        flat: '',
        district: '',
        cp: '1228',
        // idUserAddress: 3
      },
      {
        country: 'Paraguay',
        province: 'Alta Parana',
        city: 'Ciudad del Este',
        street:'Calle 4',
        number: 1234,
        flat: '',
        district: '',
        cp: '7000',
        // idUserAddress: 4
      },
      {
        country: 'Argentina',
        province: 'Misiones',
        city: 'Posadas',
        street:'Calle 5',
        number: 1234,
        flat: '',
        district: '',
        cp: '3300',
        // idUserAddress: 5
      },
    ])
  }
 
  /*** Precarga modelo Categorias ***/
  const category = await Category.findAll();
  if (!category.length) {
    await Category.bulkCreate([
      {
        name: 'Indumentaria',
        description: 'Ropa masculina y femenina',
        state: true
      },
      {
        name: 'Informatica',
        description: 'Dispositivos y componentes de computación',
        state: true
      },
      {
        name: 'Repuestos Automotor',
        description: 'Repuestos y accesorios de automoviles',
        state: true
      },
      {
        name: 'Celulares',
        description: 'Telefonos moviles y accesorios',
        state: true
      },
      {
        name: 'Muebles de Oficina',
        description: 'Mobiliario de oficina',
        state: true
      }
    ])
  }

  /*** Precarga modelo Usuarios ***/
  const users = await User.findAll();
  if (!users.length) {
    await User.bulkCreate([
      {
        user: 'Ernest21',
        email: 'ernesto@mail.com',
        password: await bcrypt.hash('123456', salt),
        firstName:'Ernesto',
        lastName: 'Villagra',
        phone: '123456',
        idRol: 1,
        idPhoto: 1,
        idUserAddress: 1
      },
      {
        user: 'fabio',
        email: 'fabio@mail.com',
        password: await bcrypt.hash('123456', salt),
        firstName:'Fabio',
        lastName: 'Cicerelli',
        phone: '123456',
        idRol: 2,
        idPhoto: 2,
        idUserAddress: 2
      },
      {
        user: 'victor',
        email: 'victor@mail.com',
        password: await bcrypt.hash('123456', salt),
        firstName:'Victor',
        lastName: 'Ayala',
        phone: '123456',
        idRol: 1,
        idPhoto: 3,
        idUserAddress: 4
      },
      {
        user: 'alondra',
        email: 'alondra@mail.com',
        password: await bcrypt.hash('123456', salt),
        firstName:'Alondra',
        lastName: 'Cena',
        phone: '123456',
        idRol: 2,
        idPhoto: 4,
        idUserAddress: 3
      },
      {
        user: 'elias',
        email: 'elias@mail.com',
        password: await bcrypt.hash('123456', salt),
        firstName:'Elias',
        lastName: 'Pereyra',
        phone: '123456',
        idRol: 3,
        idPhoto: 5,
        idUserAddress: 5
      }
  ])
  }

  /*** Precarga modelo Productos ***/
  const products = await Product.findAll();
  if (!products.length) {
    await Product.bulkCreate([
      {
        name: 'Samsung Galaxy S23',
        description: 'Celular Samsung',
        stock: 10,
        price: 500000,
        topic_1: 'topic 1',
        detail_1: 'detail 1',
        idCategoryProduct: 4,
        idUserProduct: 2,
        photos: [
          {
            name: 'https://ruta.com/S23-1.jpg'
          },
          {
            name: 'https://ruta.com/S23-2.jpg'
          },
          {
            name: 'https://ruta.com/S23-3.jpg'
          }
        ]
      },
      {
        name: 'Monitor LG 23" ',
        description: 'Monitor LCD',
        stock: 15,
        price: 100000,
        topic_1: 'topic 1',
        detail_1: 'detail 1',
        idCategoryProduct: 2,
        idUserProduct: 4
      },
      {
        name: 'Remera Lisa Manga Corta',
        description: 'Remera básica unisex',
        stock: 50,
        price: 2000,
        topic_1: 'topic 1',
        detail_1: 'detail 1',
        idCategoryProduct: 1,
        idUserProduct: 4
      },
      {
        name: 'Pantalón Cargo Hombre',
        description: 'Pantalón de gabardina elastizado',
        stock: 20,
        price: 6000,
        topic_1: 'topic 1',
        detail_1: 'detail 1',
        idCategoryProduct: 1,
        idUserProduct: 4
      },
      {
        name: 'Filtro Combustible Fiat Toro',
        description: 'Filtro Diesel Motor 2.0',
        stock: 5,
        price: 10000,
        topic_1: 'topic 1',
        detail_1: 'detail 1',
        idCategoryProduct: 3,
        idUserProduct: 2
      },
      {
        name: 'Pastillas de Freno Fiat Cronos',
        description: 'Pastillas de freno delanteras y traseras',
        stock: 5,
        price: 20000,
        topic_1: 'topic 1',
        detail_1: 'detail 1',
        idCategoryProduct: 3,
        idUserProduct: 2
      },
      {
        name: 'Impresora HP M176n',
        description: 'Impresora Laser Color',
        stock: 3,
        price: 150000,
        topic_1: 'topic 1',
        detail_1: 'detail 1',
        idCategoryProduct: 2,
        idUserProduct: 4
      },
      {
        name: 'Silla Gamer',
        description: 'Silla ergonómica',
        stock: 7,
        price: 80000,
        topic_1: 'topic 1',
        detail_1: 'detail 1',
        idCategoryProduct: 5,
        idUserProduct: 4
      },
      
  ])
  }
}

module.exports = preloadData;