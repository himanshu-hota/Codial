const User = require('../models/user');
const passport = require('passport');
const LocalStragegy = require('passport-local').Strategy;

//Authentication using passport
passport.use(new LocalStragegy({
    usernameField:'email',
    },
    (email,password,done) => {
        //Find user and establish the identity
        User.findOne({email:email },(err,user) => {
            if(err){
                console.log("Error in finding user ---> Passport");
                return done(err);
            }

            if(!user || user.password != password){
                console.log("Invalid credentials");
                return done(null,false);
            }

            return done(null,user);
        })
    }
))

//Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser((user,done) => {
    done(null,user.id);
})

//Deserializing the user from the key in the database
passport.deserializeUser((id,done) => {
    User.findById(id ,(err,user) => {
        if(err){
            console.log("Error in finding user ---> Passport");
            return done(err);
        }

        return done(null,user);
    })
})

//Check if the user is authenticated 
passport.checkAuthentication = (req,res,next) => {
    //if user is signed in , then pass on the request to the next .                   
    if(req.isAuthenticated()){ // req.isAuthenticated() check if user is signed in or not
        
        return next();
    } 

    //if user is not signed in
    return res.redirect('/users/sign-in');
}


passport.setAuthenticatedUser = (req,res,next) => {
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the view
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;