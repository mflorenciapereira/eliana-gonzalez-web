angular.module('ElianaGonzalesWebsite.Portfolio')
    .controller('PortfolioCtrl',['$scope','PortfolioService',
    function ($scope,PortfolioService) {
		var portfolio = this;
		
		
		portfolio.findAll = function(){
			console.log("findall call");
			return PortfolioService.query();			
		};	
		
		
		portfolio.selectCategory = function(selectedCategory){
			portfolio.currentCategory = selectedCategory;	
			portfolio.currentIndex=0;
			
			console.log(portfolio);
					
		};
		
		portfolio.selectPhoto = function(indexSelectedPhoto){
			portfolio.currentPhoto = portfolio.filteredPhotos[indexSelectedPhoto];
			portfolio.currentIndex = indexSelectedPhoto;
			console.log(portfolio);
		};		
		
		portfolio.isPhotoSelected = function(index){
			return index==portfolio.currentIndex;
			console.log(portfolio);
		};	
		
		portfolio.selectPreviousPhoto = function(){
			portfolio.currentIndex--;
			if(portfolio.currentIndex==-1)
				portfolio.currentIndex=0;
			portfolio.selectPhoto(portfolio.currentIndex);
			
			
		}
		
		portfolio.selectNextPhoto = function(){
			portfolio.currentIndex++;
			if(portfolio.currentIndex==portfolio.filteredPhotos.length)
				portfolio.currentIndex=portfolio.filteredPhotos.length-1;
			portfolio.selectPhoto(portfolio.currentIndex);
			
			
		}
		
			
		portfolio.photos = portfolio.findAll();		
		portfolio.getAllCategories = function(){
			return PortfolioService.getAllCategories();
		};
			
		portfolio.categories = portfolio.getAllCategories();
		
		portfolio.currentCategory = "headshots";
		portfolio.currentPhoto = portfolio.photos[0]; 
		portfolio.currentPhoto = 0; 
				
		portfolio.filteredPhotos = portfolio.photos; 
		
		$scope.$watch('portfolio.filteredPhotos', function (newValue, oldValue) {			
			portfolio.selectPhoto(0);
		},true);
			
    }]);