angular.module('ElianaGonzalesWebsite.ContactMe')
    .controller('ContactMeCtrl',['ContactMeService',
        function (ContactMeService) {
            contactMe = this;
			
			
			contactMe.fullName ='';
			contactMe.email ='';
			contactMe.comments ='';
			contactMe.submitResult='';
			contactMe.submitError=false;
			
			contactMe.showMessages = function (field) {
				return contactMe.sendCommentsForm[field].$touched
				&& contactMe.sendCommentsForm[field].$invalid;
			};

			
			contactMe.reset = function(){
				contactMe.fullName ='';
				contactMe.email ='';
				contactMe.comments ='';
				contactMe.sendCommentsForm.$setPristine();
				contactMe.sendCommentsForm.$setUntouched();
			};

			contactMe.submit = function(){
				console.log(contactMe.sendCommentsForm.$valid);
				if(!contactMe.sendCommentsForm.$valid){
					contactMe.submitResult='We could not send your comment. There are some errors.';
					contactMe.submitError=true;
					return;
				}
				var mailDetails = {
					name: contactMe.fullName,
					email: contactMe.email,
					comments: contactMe.comments,
					captcha: contactMe.captcha
				}
				ContactMeService.send(mailDetails).$promise.then(function(ok){
					console.log("sent");
					contactMe.submitResult="Thank you! Your comment has been sent :) ";
					contactMe.submitError=false;
				}, function(error){
					console.log("error");
					contactMe.submitResult=error.data;
					contactMe.submitError=true;
					
					
					
				});
				
				grecaptcha.reset();
				
				
			};
			
		

			
			
				
				
        }
		
					
    ]);