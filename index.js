const express = require("express");
const router = require("./routes");
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

//Set static files
app.use(express.static('./assets'))

// Extract Styles and Scripts from Subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Set layouts
app.use(expressLayouts);

//Set view engine
app.set('view engine','ejs');
app.set('views','./views');

// Use Express router
app.use('/',require('./routes'));













app.listen(port,(err) => {
    if(err)    
        console.log(`Error : ${err}`);
    else
        console.log(`Server started at port no. ${port}`);        
});


