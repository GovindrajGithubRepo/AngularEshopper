var appController = angular.module('app.controller', []);

appController.controller('eshopperSliderCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('src/json/slider.json').then(function(obj) {
        $scope.slider = obj.data.slider;
    }.bind(this), function(err) {
        // alert("Something went wrong!!");
    });

}]);