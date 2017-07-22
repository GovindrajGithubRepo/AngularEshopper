var app = angular.module('eshopperApp');

app.directive('eshopperFooter', function() {
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: true,
        scope: {
            footerData: '=data'
        },
        templateUrl: 'src/directives/eshopper-footer-directive/eshopper-footer-directive.html',
        controller: footerCtrl
    }
});

app.controller('footerCtrl', footerCtrl);
footerCtrl.$inject = ['$scope', '$http'];

function footerCtrl($scope, $http) {

    $http({
        method: "GET",
        url: "src/json/footer.json"
    }).then(function(response) {
        $scope.footerData = response.data;
        console.log($scope.footerData + '=====');
    }, function(response) {
        //alert('error on page');
    });

};