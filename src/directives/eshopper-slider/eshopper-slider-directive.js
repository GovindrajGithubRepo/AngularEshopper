var app = angular.module('eshopperApp');
// debugger;

app.directive('eshopperSlider', function() {
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: true,
        scope: {
            slider: '=data'
        },
        templateUrl: 'src/directives/eshopper-slider/eshopper-slider-directive.html',
        controller: eshopperSliderCtrl
    }
});

app.controller('eshopperSliderCtrl', eshopperSliderCtrl);
eshopperSliderCtrl.$inject = ['$scope', '$http'];

function eshopperSliderCtrl($scope, $http) {
    $http({
        method: "GET",
        url: "src/json/slider.json"
    }).then(function mySucces(response) {
        $scope.slider = response.data.slider;
        console.log($scope.slider + '=====');
    }, function myError(response) {
        //alert('error on page');
    });

};