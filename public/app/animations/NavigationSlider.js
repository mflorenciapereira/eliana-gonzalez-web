angular.module('ElianaGonzalesWebsite')
.animation('.navigation-slider', function(){
	
	return {
		
		addClass: function(element, classname, done){
			
			if(classname='navigation-visible'){
				TweenMax.to(element,0.5,{x:0,onComplete:done});
				console.log("HOLA");
			}
			else{
				done();
			}
			
		},
		removeClass: function(element, classname, done){
			console.log("elementos:"+element);
			if(classname='navigation-visible'){
				var container ="#"+element.attr('id')+"-ul li:last-child";
				console.log("container:"+container);
				TweenMax.to(element, 0.5, {x: -element.width()+$(container).width(),onComplete: done});
				console.log("HOLA2");
			}else{
				done();
			}
				
			
		}
		
	}
	
});