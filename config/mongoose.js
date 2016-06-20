var config = require('./config')
mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);
	
	require('../app/models/photo.server.model');
	require('../app/models/photo-category.server.model');
	require('../app/models/post.server.model');
	require('../app/models/video.server.model');
	
	return db;
};