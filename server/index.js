const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express()

//serving static files (index.html and bundle.js are all present in public folder)
app.use(express.static(path.join(__dirname, '../public'))); //setting directory name to public


//middlewares
app.use(morgan('dev'));
//to get request body is req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// serves up/mounts all the routes on /api/{ROUTES}
app.use('/api', require('./apiRoutes')); 

// for any requests that don't match one of our API routes, server should send index.html //always goes after all routes
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
})

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
})

module.exports = app