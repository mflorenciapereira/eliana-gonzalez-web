var photos = require('../../app/controllers/video.server.controller');

module.exports = function(app){
	app.route('/videos')	
	.get(photos.list);
	
};