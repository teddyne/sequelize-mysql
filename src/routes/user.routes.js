module.exports = (app) => {
  const controller = require('../controllers/user.controller.js')
  var router = require('express').Router()
  router.post('/', controller.create)
  app.use('/api/users', router)
}
