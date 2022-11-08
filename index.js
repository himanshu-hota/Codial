const express = require("express");
const router = require("./routes");
const port = 8000;
const app = express();
const homeController = require('./controllers/home_controller');
// Use Express router
app.use('/',require('./routes'));

router.get('/',homeController.home);




app.listen(port,(err) => {
    if(err)    
        console.log(`Error : ${err}`);
    else
        console.log(`Server started at port no. ${port}`);        
});


