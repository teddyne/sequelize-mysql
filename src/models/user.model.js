// const db = require('../models')
// const model = require('../models/book.model')

// console.log('user', model)
// const Book = model(db.sequelize, db.Sequelize)

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.STRING
    }
  })
  //   User.hasMany(Book, {
  //     foreignKey: 'userId'
  //   })
  return User
}
