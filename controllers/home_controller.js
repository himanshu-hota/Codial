module.exports.home = (req,res) => {
    res.cookie('user_id',4234);
    console.log(req.cookies);
    return res.render('home',{
        title:"HOME"
    })
}