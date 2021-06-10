const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())

const db = require('./src/models')

// db.sequelize.sync()
// NOTE: DROP TABLE IF EXIST ALREADY
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.')
// })

require('./src/routes/book.routes')(app)
require('./src/routes/user.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
