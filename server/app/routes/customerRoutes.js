module.exports = app => {
    const authorController = require('../controllers/customerController')

    app.route('/api/customers')
        .get(authorController.read)

}