const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://0.0.0.0/codial_development');
// mongoose.connect('mongodb://0.0.0.0:27017/codial_development');

// Check for error
const db = mongoose.connection;

db.on('error',console.log.bind(console,("Error connecting to MongoDB")));

db.once('open',() => {
    console.log("Connected to Database :: MongoDB");
});


module.exports = db;