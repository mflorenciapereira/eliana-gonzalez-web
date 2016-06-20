var posts = require('../../app/controllers/post.server.controller');

module.exports = function(app){
	app.route('/posts/:limit/:page/:tag/:from/:to')	
	.get(posts.findByCriteria);
	
	app.route('/tags')	
	.get(posts.findAllTags);
	
};