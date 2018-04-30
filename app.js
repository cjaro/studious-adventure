var app = angular.module('ggApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/views/main.html',
            controller  : 'MainController'
        })
        .when('/about', {
            templateUrl : '/views/about.html',
            controller  : 'AboutController'
        })
        .when('/work', {
          templateUrl: '/views/work.html',
          controller: 'WorkController'
        })
        .when('/contact', {
            templateUrl : '/views/contact.html',
            controller  : 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

    // create the controller and inject Angular's $scope
    app.controller('MainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
    app.controller('AboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });
    app.controller('WorkController', function($scope) {
        $scope.message = 'ayo I am an work/resume page.';
    });
    app.controller('ContactController', function($scope) {
        $scope.message = 'Contact us! fuck you.';
    });

});
