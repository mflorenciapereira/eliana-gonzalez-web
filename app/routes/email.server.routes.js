var email = require('../../app/controllers/email.server.controller');

module.exports = function(app){
	app.route('/email')	
	.post(email.send);
	
};