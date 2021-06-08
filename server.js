const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
  origin: 'http://localhost:5000'
}

app.use(cors(corsOptions))
app.use(express.json())

//const db = require('./src/models')

//db.sequelize.sync()
//drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.')
// })

require('./src/routes/book.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
