const Order_detail = require('../models/Order_detail');

const getOrder_details = async (req, res) => {
    try {
        const od = await Order_detail.findAll();
        res.status(200).json(od);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  getOrder_details
}