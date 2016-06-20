var myApp = angular.module('ElianaGonzalesWebsite.Common', []);

myApp.directive("datepicker", function ($parse) {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, elem, attrs, ngModelCtrl) {
		
			 ngModelCtrl.$formatters.push(function(value) {
				 console.log("el valor recibido"+value );
				 
				 if(!value) return value;
				return moment(value).format('DD/MM/YYYY');
			  });
		
		
      var updateModel = function (dateObject,dateText) {
        scope.$apply(function () {
			
			var ngModelParse = $parse(attrs.ngModel);			
			ngModelParse.assign(scope, dateObject);	

		
			
			
			
        });
      };
	  
      var options = {
        dateFormat: "dd/mm/yy",
        onSelect: function (dateText) {
			var dateAsObject = $(this).datepicker( 'getDate' )			
			updateModel(dateAsObject,dateText);
        }
      };
      elem.datepicker(options);
	  
	  
    }
  }
});