const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

//db.Sequelize = Sequelize;
//db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
