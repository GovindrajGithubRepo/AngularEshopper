var app = angular.module('eshopperApp');


app.directive('recommendedItems', function() {
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: true,
        scope: {
            name: '@',
            ritems: '=data'
        },
        templateUrl: 'src/directives/recommended-items-directive/recommended-items-directive.html',
        controller: recommendedCtrl
    }
});

app.controller('recommendedCtrl', recommendedCtrl);
recommendedCtrl.$inject = ['$scope', '$http'];

function recommendedCtrl($scope, $http) {

    $scope.name = "RECOMMENDED ITEMS";

    $http({
        method: "GET",
        url: "src/json/recommendedItems.json"
    }).then(function(response) {
        $scope.ritems = response.data.rItemsList;
        console.log($scope.ritems + '=====');
    }, function(response) {
        //alert('error on page');
    });

};