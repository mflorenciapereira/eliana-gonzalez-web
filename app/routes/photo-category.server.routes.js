var photoCategories = require('../../app/controllers/photo-category.server.controller');

module.exports = function(app){
	app.route('/photo-categories')	
	.get(photoCategories.list);
	
};