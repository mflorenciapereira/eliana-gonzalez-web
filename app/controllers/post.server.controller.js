var Post = require('mongoose').model('Post');

exports.findByCriteria = function(req,res,next){
	var tag = req.params.tag;
	var from = req.params.from;
	var to =req.params.to;
	var limit =req.params.limit*1;
	var offset =limit *(req.params.page-1);
	
	console.log(tag);
	console.log(from);
	console.log(to);
	console.log(limit);
	console.log(offset);
	
	console.log("tag"+tag);
	
	console.log("from"+from);
	console.log("to"+to);
	
	var criteria = [];

	
	var query = { $and: [] };
	
		
	if(tag!='All'){
		query.$and.push({tags: { $in: [tag]}});		
	};	
	
	if(from!='All'){
		query.$and.push({date: {$gte:  new Date(from)}});
		
	};
	
	if(to!='All'){
		query.$and.push({date: {$lte:  new Date(to)}});
	}
	
	console.log(query);
	console.log(query.$and.length);
	
	if(query.$and.length==0){
		console.log("empty");
		delete query.$and;
	}
	
	var queryResult ={};
	
	Post.find(query).skip(offset).limit(limit).sort('-date').exec(function(error,posts){	
		if(error){
			return next(error);
		}else{
			queryResult.posts = posts;
			console.log("posts:"+posts);
			Post.find(query).count().exec(function(error,total){			
				if(error){
					return next(error);
				}else{
					console.log("total:"+total);
					queryResult.total=total;
					return res.json(queryResult);
				}
			})
			
		}
	});
}

exports.findAllTags = function(req, res, next){
	Post.distinct("tags").exec(function(error, tags){
		if(error){
			return next(error);
		}else{
			return res.json(tags);
		}
	})
	
};