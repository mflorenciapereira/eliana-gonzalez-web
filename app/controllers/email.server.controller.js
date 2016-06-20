var nodemailer = require('nodemailer');
var config = require('../../config/config')
var mg = require('nodemailer-mailgun-transport');
var captcha = require('./captcha.server.controller');
var request = require('request');



exports.send = function(req, res, next){
	
	console.log("received: "+req.connection.remoteAddress);
	console.log("received: "+req.body.captcha);
	console.log("received: "+req.body.captcha.response);
	console.log("received: "+config.recaptchaPrivateKey);
	
	request.post('https://www.google.com/recaptcha/api/siteverify', {        
        form: {secret: config.recaptchaPrivateKey,                        
            response: req.body.captcha}
	},
    function (err, result, body) {
		console.log('ERROR EEEEEEEEESDSDSDSDSEEEEEEEEEEEEEEE:\n ', err );
		console.log('ERROR EEEEEEEEESDSDSDSDSEEEEEEEEEEEEEEE:\n ', result);
		
        if(err){
            console.log('ERROR EEEEEEEEEEEEEEEEEEEEEEEE:\n ', err );
        }
        //if the request to googles verification service returns a body which has false within it means server failed
        //validation, if it doesnt verification passed
        if (body.match(/false/) === null) {
			console.log("no hay false. envio");
			sendEmail(req,res,next);
           
        } else {
			console.log("hay false");
			next("Recaptcha validation failed. Please reenter captcha.")
           
        }
	}
	);
	
	
};


var sendEmail = function(req, res, next){
			
			
	var name = req.body.name;
	var email = req.body.email;
	var comments = req.body.comments;
	
	if(!name || !email || !comments){
		return next("Name, email and comments are required.");		
	}
	
	var auth = {
		auth: {
			api_key: config.apiKey,
			domain: config.domain
		}
	}

	var nodemailerMailgun = nodemailer.createTransport(mg(auth));

	nodemailerMailgun.sendMail({
	  from: email,
	  to: config.emailReceptor, // An array if you have multiple recipients.
	  subject: 'Comments from website',
	  html: "<html><body><b>"+name+"</b> sent you the following comments: <br><br> "+comments+" </body></html>",
	}, function (err, info) {
	  if (err) {
		console.log('Error: ' + err);
		return next(err);		
	  }
	  else {
		console.log('Response: ' + info);
		res.json(info);
	  }
	});
};
