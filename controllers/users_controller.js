//Profile 
module.exports.profile = (req,res) => {
    return res.end('<h1>User Profile</h1>');
}

//feed
module.exports.feed = (req,res) => {
    return res.end(('<h1>Feed section</h1>'));
}

//Posts 
module.exports.posts = (req,res) => {
    return res.end('<h1>Posts section</h1>');
}

//Testing

module.exports.home = (req,res) => {
    return res.render('users',{title:"Users"})
}
