angular.module('ElianaGonzalesWebsite.Reel').factory('ReelService', ['$resource', 
	function($resource) {
		return $resource('http://localhost\\:3000/videos', {}, {
			 'query': { 
                    method: 'GET', 
					isArray: true                    
			 }
		});
	}]);