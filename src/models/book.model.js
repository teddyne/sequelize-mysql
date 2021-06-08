const db = require('../models')
const model = require('../models/user.model')
console.log('model', model)
const User = model(db.sequelize, db.Sequelize)

module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('book', {
    name: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    }
  })
  Book.belongsTo(User, {
    foreignKey: 'userId'
  })
  return Book
}
