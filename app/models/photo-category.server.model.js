var mongoose = require('mongoose');
Schema = mongoose.Schema;

var PhotoCategorySchema = new Schema({
	id: {
		type: Number,
		unique: true,
		required: true
	},
	name:{
		type: String,
		required: true
	}
});

mongoose.model('PhotoCategory',PhotoCategorySchema);