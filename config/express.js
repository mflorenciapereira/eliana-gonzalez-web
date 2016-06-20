var express = require('express');
morgan = require('morgan');
bodyParser = require('body-parser');
methodOverride = require('method-override');

module.exports = function() {
	var app = express();
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	app.set('views', './app/views');
	app.set('view engine', 'ejs');
	
	app.use(express.static('./public'));
	
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/photo.server.routes.js')(app);
	require('../app/routes/photo-category.server.routes.js')(app);
	require('../app/routes/post.server.routes.js')(app);
	require('../app/routes/video.server.routes.js')(app);
	require('../app/routes/email.server.routes.js')(app);
	
	
	return app;
};