angular.module('ElianaGonzalesWebsite.ContactMe').factory('Recaptcha', ['$scope', '$resource', function ($scope, $resource) {
    return $resource(
        '/email/send',
        {id: '@id'},
        {
            send: {
                url: '/email/send',
                method: 'POST'
            }
        }
    )
}]);