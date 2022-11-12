const User = require('../models/user');

//Profile 
module.exports.profile = (req, res) => {
    return res.end('<h1>User Profile</h1>');
}

//Sign up

module.exports.signup = (req, res) => {
    return res.render('user_sign_up', {});
}

//Sign in

module.exports.signin = (req, res) => {
    return res.render('user_sign_in', {});
}

//Get the signup data

module.exports.create = (req, res) => {

    if (req.body.password != req.body.confirmPassword) {
        console.log("password to match kara le");
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log("error finding user in signing up");
            return;
        }

        if (!user) {
            User.create(req.body, (err, user) => {
                if (err) { console.log("Error creating user",err); return }
                console.log('User created successfully');
                return res.redirect('/users/sign-in');
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    });


}
//Sign in ans create session for the user

module.exports.createSession = (req, res) => {
    // res.render();
    //to do
}