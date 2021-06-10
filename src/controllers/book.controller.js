const db = require('../models')
const Book = db.Book

exports.create = async (req, res) => {
  const newBook = {
    name: req.body.name,
    author: req.body.author,
    userId: req.body.userId
  }
  try {
    const book = await Book.create(newBook)
    res.status(201).send(book)
  } catch (err) {
    res.status(500).send(err)
  }
}
