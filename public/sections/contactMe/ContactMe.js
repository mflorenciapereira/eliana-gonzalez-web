var contactMeModule = angular.module('ElianaGonzalesWebsite.ContactMe',  [
            "ElianaGonzalesWebsite.Common","ngMessages","grecaptcha"
        ]).config(function(grecaptchaProvider){




    //set Google API Public Key
    //Local
   grecaptchaProvider.setParameters({
            sitekey: '6LfEQhYTAAAAAJPQadsFn98ktNMrZgW2ANLu_r5L',
            
        });
		
		
		});

