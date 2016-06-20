var Video = require('mongoose').model('Video');

exports.list = function(req,res,next){
	Video.find().exec(function(error,videos){
		if(error){
			return next(error);
		}else{
			res.json(videos)
		}
	});
}