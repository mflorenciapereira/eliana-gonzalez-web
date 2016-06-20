var mongoose = require('mongoose');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;


var PostSchema = new Schema({
	title: {
			type:String,
			required:true
	},
	content:String,
	date:Date,
	place: String,
	tags: [String]
		
});

mongoose.model('Post',PostSchema);