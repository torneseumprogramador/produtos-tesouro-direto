const {Router} = require('express')
const TesouroController = require('./controllers/TesouroController')
const route = Router()

route.put('/tesouro/:id', TesouroController.update)

module.exports = route
