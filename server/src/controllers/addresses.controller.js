const Address = require('../models/Address');

const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.findAll();
        res.status(200).json(addresses);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  getAddresses
}