angular.module('ElianaGonzalesWebsite.Common', ['ngAnimate'])
    .animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                     TweenMax.to(element, 0.2, {opacity:0, onComplete: done });                 
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    
                    TweenMax.to(element, 0.2, {opacity:0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });