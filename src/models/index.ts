import fs from 'fs'
import path from 'path'
import { Sequelize, DataTypes } from 'sequelize'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const basename = path.basename(__filename)

const sequelize = new Sequelize(config.database, config.username, config.password, config)

const db: any = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

fs.readdirSync(__dirname)
  .filter((file: any) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

module.exports = db
