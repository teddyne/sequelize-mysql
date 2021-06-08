const db = require('../models')
const model = require('../models/book.model')
const Book = model(db.sequelize, db.Sequelize)

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
    return
  }

  const book = {
    name: req.body.name,
    author: req.body.author
  }

  Book.create(book)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Book.'
      })
    })
}
