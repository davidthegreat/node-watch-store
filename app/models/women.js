var mongoose = require('mongoose');
var Schema = mongoose.Schema


var schema = new Schema({
	imagePath: {type: String, require: true},
	secondimagePath: {type: String, require: true},
	thirdimagePath: {type: String, require: true},
	title: {type: String, require: true},
	description: {type: String, require: true},
	price: {type: Number, require: true},
	sale : {type: String, require: true},
	starone: {type: String, require: true},
	startwo: {type: String, require: true},
	starthree: {type: String, require: true},
	starfour: {type: String, require: true},
	starfive: {type: String, require: true}
});

module.exports = mongoose.model('Women', schema);
