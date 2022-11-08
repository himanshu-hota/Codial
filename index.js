const express = require("express");
const router = require("./routes");
const port = 8000;
const app = express();

//Set view engine
app.set('view-engine','ejs');
app.set('views','./views');

// Use Express router
app.use('/',require('./routes'));













app.listen(port,(err) => {
    if(err)    
        console.log(`Error : ${err}`);
    else
        console.log(`Server started at port no. ${port}`);        
});


