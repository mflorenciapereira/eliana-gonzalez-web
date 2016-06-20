angular.module('ElianaGonzalesWebsite.ContactMe').factory('ContactMeService', ['$resource', 
	function($resource) {
		return $resource('http://localhost\\:3000/email', {}, {
			'send': { 
                    method: 'POST'                    
			 }
		});
	}]);