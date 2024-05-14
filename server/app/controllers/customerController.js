const Customer = require('../models/customerModel')

// function to read customer details 
exports.read = async(req, res) => {
    const customer = await Customer.read();
    res.status(200).send(customer)
}

