var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
	name: String,
	email: String,
	locationString: String,
	location : [Number],
	SMS: Boolean,
	html:Boolean
});

var user = mongoose.model('songcard', user_schema);

module.exports = user;