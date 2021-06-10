const db = require('../models')
const User = db.User

exports.create = async (req, res) => {
  const newUser = {
    name: req.body.name,
    age: req.body.age
  }
  try {
    const user = await User.create(newUser)
    res.status(201).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}
