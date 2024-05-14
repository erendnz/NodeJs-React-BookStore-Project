const Order = require('../models/orderModel')

// function to read order details 
exports.read = async(req, res) => {
    const order = await Order.read();
    res.status(200).send(order)
}

