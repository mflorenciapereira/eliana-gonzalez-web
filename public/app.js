// app.js
var ElianaGonzalesWebsite = angular.module('ElianaGonzalesWebsite', ['ngAnimate','ElianaGonzalesWebsite.Common','ngRoute','ElianaGonzalesWebsite.Bio','ElianaGonzalesWebsite.Resume','ElianaGonzalesWebsite.Portfolio','ElianaGonzalesWebsite.Reel','ElianaGonzalesWebsite.Blog','ElianaGonzalesWebsite.ContactMe'])
.controller('MainCtrl', function($scope,$timeout) {
   var main = this;
   
   main.showNavigation = true;
   main.showFavIcons = true;
   

  main.toggleNavigationVisible = function(){
	  main.showNavigation=!main.showNavigation;
	  return main.showNavigation;
  }; 

  main.toggleFavIconsVisible = function(){
	  main.showFavIcons=!main.showFavIcons;
	  return main.showFavIcons;
  };

  $timeout(function() {
           main.showNavigation = false;
           main.showFavIcons = false;
		   console.log("era "+ main.showNavigation)
		   console.log("llama timeout");
    }, 1000);
	 
	 $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
		 
		 if($previousRoute.originalPath=='/'){
			 
			main.showNavigation=true;	 
			main.showFavIcons=true;	 
		 }
		else {
			main.showNavigation=false;
			main.showFavIcons=false;
		console.log($previousRoute);
		console.log("route timeout");
		}
	});
  

});

ElianaGonzalesWebsite.config(['$routeProvider', function($routeProvider) {
	
  $routeProvider
        .when('/', {
            templateUrl: 'sections/main/views/main.html'           
            
        })
        .when('/bio', {
            templateUrl: 'sections/bio/views/bio.html',
            controller: 'BioCtrl',
            controllerAs: 'bio'
            
        })
        .when('/resume', {
            templateUrl: 'sections/resume/views/resume.html',
            controller: 'ResumeCtrl',
            controllerAs: 'resume'
            
        })
		.when('/portfolio', {
            templateUrl: 'sections/portfolio/views/portfolio.html',
            controller: 'PortfolioCtrl',
            controllerAs: 'portfolio'
            
        })
		.when('/reel', {
            templateUrl: 'sections/reel/views/reel.html',
            controller: 'ReelCtrl',
            controllerAs: 'reel'
            
        })		
		.when('/blog', {
            templateUrl: 'sections/blog/views/blog.html',
            controller: 'BlogCtrl',
            controllerAs: 'blog'
            
        }).when('/contact-me', {
            templateUrl: 'sections/contactMe/views/contactMe.html',
            controller: 'ContactMeCtrl',
            controllerAs: 'contactMe'
            
        })
        
        .otherwise({
            templateUrl: 'notFound.html',
            
            
        });
		

}

]);
