var mongoose = require('mongoose');
Schema = mongoose.Schema;

var VideoSchema = new Schema({
	url:String,
	type: String,
	title: String,
	description: String,
	airdate: Date,
	producer: String,
	thumbUrl: String
	
});

mongoose.model('Video',VideoSchema);