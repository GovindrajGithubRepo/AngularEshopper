var app = angular.module('eshopperApp');

app.directive('eshopperBrands', function() {
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: true,
        scope: {
            brands: '=data'
        },
        templateUrl: 'src/directives/eshopper-brands-directive/eshopper-brands-directive.html',
        controller: eshopperBrandCtrl
    }
});

app.controller('eshopperBrandCtrl', eshopperBrandCtrl);
eshopperBrandCtrl.$inject = ['$scope', '$http'];

function eshopperBrandCtrl($scope, $http) {

    $http({
        method: "GET",
        url: "src/json/brands.json"
    }).then(function(response) {
        $scope.brands = response.data;
        console.log($scope.brands + '=====');
    }, function(response) {
        //alert('error on page');
    });

};