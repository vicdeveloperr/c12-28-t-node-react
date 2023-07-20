const Order = require('../models/Order');

const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  getOrders
}