var appController = angular.module('app.controller', []);

appController.controller('eshopperHeaderCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.phone = "<i class='fa fa-phone'></i> +2 95 01 88 821</a>";
    $scope.email = "<i class='fa fa-envelope'></i> info@domain.com</a>";

    $http.get('src/json/headerSocialLinks.json').then(function(obj) {
        $scope.socials = obj.data.headerTopLinks;
    }.bind(this), function(err) {
        // alert("Something went wrong!!");
    });

}]);