const db = require('./db.js')

const app = require('./server')

const port = process.env.PORT || 3000

db.sync()
.then(function() {
    app.listen(port)
})

