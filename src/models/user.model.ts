import { Model } from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      User.hasMany(models.Book, {
        foreignKey: {
          name: 'userId'
        }
      })
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  })
  return User
}