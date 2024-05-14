module.exports = app => {
    const orderController = require('../controllers/orderController')

    app.route('/api/orders')
        .get(orderController.read)

}