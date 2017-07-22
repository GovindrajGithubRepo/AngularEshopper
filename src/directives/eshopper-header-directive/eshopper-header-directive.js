var app = angular.module('ehsopperApp');

app.directive('header', function() {
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: true,
        scope: {
            phone: '@',
            email: '@',
            socials: '=data'
        },

        templateUrl: 'src/directives/eshopper-header-directive/eshopper-header-directive.html',
        controller: '@', //specify the controller is an attribute
        name: 'headerCtrl' //name of the attribute.*/
    }
});