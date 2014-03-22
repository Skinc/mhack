var model = require('../User.js') 
var user = model.user;

/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.addUser = function(req, res){
	console.log(req.body) 
    var user = new user({
    	name: req.body.name,
		email: req.body.email,
		locationString: req.body.locationString,
		location : req.body.location,
		SMS: req.body.SMS,
		html:req.body.html})
    user.save(function(){})
    res.send()	

};


// var model = require('../model.js') 
// var user = model.user;
// var twit = model.twit;


// exports.start = function(req, res){
//     console.log(req.session.user)
//     res.render('newuser', {title: "Tweeter SignIn"});
// };


// exports.signin = function(req, res){
//     console.log(req.body)
//     user.find({name:req.body.user}).exec(function(err, orders) {
//         console.log(orders.length)
//         if (orders.length<1){
//             var newuser = new user({name:req.body.user})
//             newuser.save(function(){}); 
//         }   
//         req.session.user = req.body.user
//         res.redirect("/")  
//     }); 
//  };


// exports.addUser = function(req, res){
// 	console.log(req) 
//     var User = new twit({user:req.session.user, twit:req.body.twit})
//     newtwit.save(function(){})
//     res.send()
// };