var photos = require('../../app/controllers/photo.server.controller');

module.exports = function(app){
	app.route('/photos')	
	.get(photos.list);
	
};