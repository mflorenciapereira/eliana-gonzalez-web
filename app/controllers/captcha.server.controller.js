var request = require('request');
var config = require('../../config/config')

exports.verify = function(captcha, req){
	
	console.log("received: "+req.connection.remoteAddress);
	console.log("received: "+captcha.challenge);
	console.log("received: "+captcha.response);
	console.log("received: "+config.recaptchaPrivateKey);
	
	request.post('http://www.google.com/recaptcha/api/verify', {        
        form: {privatekey: config.recaptchaPrivateKey,
            //need requestors ip address
            remoteip: req.connection.remoteAddress,
            challenge: captcha.challenge,
            response: captcha.response}
	},
    function (err, res, body) {
		console.log('ERROR EEEEEEEEESDSDSDSDSEEEEEEEEEEEEEEE:\n ', err );
		console.log('ERROR EEEEEEEEESDSDSDSDSEEEEEEEEEEEEEEE:\n ', res.body);
		
        if(err){
            console.log('ERROR EEEEEEEEEEEEEEEEEEEEEEEE:\n ', err );
        }
        //if the request to googles verification service returns a body which has false within it means server failed
        //validation, if it doesnt verification passed
        if (body.match(/false/) === null) {
			console.log("NO hay false");
           return true;
        } else {
			console.log("hay false");
            return false;
        }
	}
	);
	
	
};
