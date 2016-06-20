var PhotoCategory = require('mongoose').model('PhotoCategory');

exports.list = function(req,res,next){
	PhotoCategory.find({}, function(error,categories){
		if(error){
			return next(error);
		}else{
			var categoryNames =[];
			categories.forEach(function(category){
				categoryNames.push(category.name);
			})
			res.json(categoryNames)
		}
	})
};
