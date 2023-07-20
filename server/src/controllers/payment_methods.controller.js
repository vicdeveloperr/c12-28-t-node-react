const Payment_method = require('../models/Payment_method');

const getPayment_method = async (req, res) => {
  try {
      const pm = await Payment_method.findAll();
      res.status(200).json(pm);
  } catch (error) {
      console.log(error);
  }
}

module.exports = {
  getPayment_method
}