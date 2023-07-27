const Address = require('../models/Address');

const getAddresses = async (req, res) => {
	const { country } = req.query;
	try {
		const addresses = await Address.findAll();
		if (country) {
			const countryName = addresses.filter(a => a.country.toLowerCase().includes(country.toLowerCase()));
			countryName.length ? res.status(200).json(countryName) : res.status(404).send('no country found');
		}
		res.status(200).json(addresses);
	} catch (error) {
			console.log(error);
	}
};

const getAddress = async (req, res) => {
	const { id } = req.params;
	try {
  	const address = await Address.findByPk(id);
		address ? res.status(200).send(address) : res.status(404).send('not found')
	} catch (error) {
  }
};

const postAddress = async (req, res) => {
    const { country, province, city, district, cp, street, number, flat } = req.body;
    try {
			const addressCreated = await Address.create({
				country, 
				province, 
				city, 
				district, 
				cp, 
				street, 
				number, 
				flat
			})
			res.status(201).send('Address created successfully')
    } catch (error) {
			console.error(error)
    }
}

const deleteAddress = async (req, res) => {
	const {id} = req.params;
	try {
		const address = await Address.findByPk(id);
		if (address) {
			await Address.destroy({ where: {idAddress: id} });
			res.status(200).send('address removed');
		} else {
			res.status(404).send('not address found');
		}
	} catch (error) {
		console.log(error);
	}
}

const updateAddress = async (req, res) => {
  const { id } = req.params;
  const {country, province, city, district, cp, street, number, flat} = req.body;
  try {
    const address = await Address.findOne({
      where: { idAddress: id }
    })
    // El método set solo actualiza la propiedad que se indica en el body
    address.set(req.body)
    await address.save();
    return res.json(address);  
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAddresses,
  getAddress,
	postAddress,
	deleteAddress,
	updateAddress
}