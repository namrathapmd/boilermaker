const Sequelize = require('sequelize')
const db = require('db')

const Users = db.define('users', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    location: Sequelize.TEXT
})

module.exports = Users