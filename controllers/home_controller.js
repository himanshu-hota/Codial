const Post = require('../models/post');
const User = require('../models/user');


module.exports.home = (req,res) => {

    // Post.find({},(err,posts) => {

    //     if(err){
    //         console.log("Couldn't show posts",err);
    //     }else{
    //         return res.render('home',{
    //             posts:posts
    //         })
    //     }
        
    // })



    Post.find({}).populate('user').exec((err,posts) => {

        if(err){
            console.log("Couldn't show posts",err);
        }else{
            return res.render('home',{
                posts:posts
            })
        }
        
    })

    
}