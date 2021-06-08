module.exports = (app) => {
  const tutorials = require('../controllers/book.controller.js')

  var router = require('express').Router()

  router.post('/', tutorials.create)

  app.use('/api/books', router)
}
