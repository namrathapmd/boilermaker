const Sequelize = require('sequelize')
const db = require('./db')

const Puppies = db.define('puppies', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
})

module.exports = Puppies