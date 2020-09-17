const db = require('./db')
const Users = require('./Users')
const Puppies = require('./Puppies')

//associations
//Puppies.belongsTo(Users)
//Users.hasMany(Puppies)


module.exports = {
    db,
    Users,
    Puppies
}