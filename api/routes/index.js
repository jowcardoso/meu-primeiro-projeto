const bodyParser = require('body-parser')
const produtos = require('./produtosRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(produtos)
}