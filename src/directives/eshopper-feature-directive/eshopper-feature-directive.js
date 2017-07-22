var app = angular.module('eshopperApp');

app.directive('featureProduct', function() {
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: true,
        scope: {
            productFeature: '=data'
        },
        templateUrl: 'src/directives/eshopper-feature-directive/eshopper-feature-directive.html',
        controller: eshopperFeatureCtrl
    }
});

app.controller('eshopperFeatureCtrl', eshopperFeatureCtrl);
eshopperSliderCtrl.$inject = ['$scope', '$http'];

function eshopperFeatureCtrl($scope, $http) {
    $http({
        method: "GET",
        url: "src/json/featureproductslist.json"
    }).then(function(response) {
        $scope.productFeature = response.data.productFeature;
        console.log($scope.productFeature + '=====');
    }, function(response) {
        //alert('error on page');
    });

};