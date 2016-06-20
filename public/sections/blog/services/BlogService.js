angular.module('ElianaGonzalesWebsite.Blog').service('BlogService', ['$q', 'BlogServiceResource',
	function($q, BlogServiceResource) {
		blogService = this;
		
		blogService.filter = function(limit , page, tag, from, to){
			if(!tag){
				tag='All';
			}
			
			if(!from){
				from='All';
			}
			
			if(!to){
				to='All';
			}
			
			 var deferred = $q.defer();
			 var queryResult;
			 			 
			 var queryArguments={
					limit: limit,
					page: page,
					tag: tag,
					from: from,
					to: to
			};
				
			if(queryResult){
				console.log("resuelto antes");
				deferred.resolve(queryResult);
			}else{
				BlogServiceResource.query(queryArguments).$promise.then(function(result){
					console.log("result es:"+result);
					queryResult=result;
					
					deferred.resolve(queryResult);					
				},
				 function (result) { 
					console.log("fails");
                    return $q.reject(result); 
				});
			}		
				
			return deferred.promise;
		};
		
		blogService.findAllTags = function(){
			var deferred = $q.defer();
			BlogServiceResource.getAllTags().$promise.then(function(result){
			deferred.resolve(result);
			}, function(error){
				console.log("fails");
				$q.reject(error);
			});
			return deferred.promise;
		}
		
	}]);