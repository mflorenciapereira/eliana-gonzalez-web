var mongoose = require('mongoose');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var PhotoSchema = new Schema({
	id: {
		type: Number,
		unique: true,
		required: true
	},
	category:{
		type: Schema.ObjectId,	 
		ref: 'PhotoCategory'		
	},
	url:String
});

mongoose.model('Photo',PhotoSchema);