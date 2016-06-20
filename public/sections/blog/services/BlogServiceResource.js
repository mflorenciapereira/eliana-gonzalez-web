angular.module('ElianaGonzalesWebsite.Blog').factory('BlogServiceResource', ['$resource', 
	function($resource) {
		return $resource('http://localhost\\:3000/posts', {}, 
		{
			 'query': { 
                    method: 'GET', 
					isArray: false,
                    url:'http://localhost\\:3000/posts/:limit/:page/:tag/:from/:to', 
                    params: { limit: '@limit', page: '@page', tag: '@tag', from: '@from', to: '@to'}
			 },
			 'getAllTags': {
				 method: 'GET',
				 isArray: true,
				 url:'http://localhost\\:3000/tags'
			 }
		}
		);
		
		
					;
	}]);