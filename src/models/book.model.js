const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.User, {
        foreignKey: {
          name: 'userId'
        }
      })
    }
  }

  Book.init({
    name: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Book' // We need to choose the model name
  })
  return Book
}