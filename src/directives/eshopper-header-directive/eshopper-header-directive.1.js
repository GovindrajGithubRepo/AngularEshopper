var app = angular.module('eshopperApp');

app.directive('eshopperHeaderTop', function() {
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: false,
        scope: {
            phone: '@',
            email: '@',
            socials: '=data'
        },

        templateUrl: 'src/directives/eshopper-header-directive/eshopper-header-directive.html',
        controller: eshopperHeaderCtrl
    }
});

app.controller('eshopperHeaderCtrl', eshopperHeaderCtrl);
eshopperHeaderCtrl.$inject = ['$scope', '$http'];

function eshopperHeaderCtrl($scope, $http) {
    $scope.phone = "<i class='fa fa-phone'></i> +2 95 01 88 821</a>";
    $scope.email = "<i class='fa fa-envelope'></i> info@domain.com</a>";
    $http({
        method: "GET",
        url: "src/json/headerSocialLinks.json"
    }).then(function(response) {
        $scope.socials = response.data.headerTopLinks;
        console.log($scope.socials);
    }, function(response) {
        //alert('error on page');
    });

}