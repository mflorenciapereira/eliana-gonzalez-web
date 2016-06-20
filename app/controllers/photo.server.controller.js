var Photo = require('mongoose').model('Photo');

exports.create = function(req, res, next){
	
	var examplePhoto = {	
			id: "2",
			category: "headshots",
			url: "sections/portfolio/models/photos/headshots/2.jpg"
			
		};
	
	var photo = new Photo(examplePhoto);
	photo.save(function(error){
		if(error){
			return next(error);
		}else{
			res.json(photo);
		}
	})	
};

exports.list = function(req,res,next){
	Photo.find().populate('category').exec(function(error,photos){
		if(error){
			return next(error);
		}else{
			res.json(photos)
		}
	});
}