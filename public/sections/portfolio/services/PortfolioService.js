angular.module('ElianaGonzalesWebsite.Portfolio').factory('PortfolioService', ['$resource', 
	function($resource) {
		return $resource('http://localhost\\:3000/photos', {}, {
			 'getAllCategories': { 
                    method: 'GET', 
					isArray: true,
                    url:'http://localhost\\:3000/photo-categories'                    
			 }
		});
	}]);