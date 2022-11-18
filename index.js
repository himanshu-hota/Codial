const express = require("express");
const cookieParser = require('cookie-parser');
// const router = require("./routes");
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//Used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session); // Store session

//Manage post request
app.use(express.urlencoded());
//Set cookie parser
app.use(cookieParser());
//Set static files
app.use(express.static('./assets'))

// Extract Styles and Scripts from Subpages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//Set layouts
app.use(expressLayouts);

//Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Pasport JS , MongoStore is used to store the session cookie
app.use(session({
    name: 'codial',
    secret: 'kuchhtohai', //change the key before production build
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore( //this will permanently store cookie in browser even if server is restarted
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        (err) => {
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));
// Passport Js helping in maintaining session
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


// Use Express router
app.use('/', require('./routes'));



app.listen(port, (err) => {
    if (err)
        console.log(`Error : ${err}`);
    else
        console.log(`Server started at port no. ${port}`);
});


