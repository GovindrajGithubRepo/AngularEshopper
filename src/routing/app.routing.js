(function() {
    'use strict'
    var app = angular.module('eshopperApp', ['ngRoute']);
    app.config(
        function($routeProvider) {
            $routeProvider.when('/home', {
                title: 'Home | E-Shopper',
                notheader: false,
                templateUrl: 'src/view/home.html'
            })

            //route for the shop page
            .when('/shop', {
                title: 'Shop',
                notheader: false,
                templateUrl: 'src/view/shop.html'
            })

            //route for default page
            .otherwise('/home');
        })
    app.run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }]);
})()