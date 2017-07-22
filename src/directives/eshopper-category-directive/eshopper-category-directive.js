var app = angular.module('eshopperApp');

app.directive('eshopperCategory', function() {
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: {
            categorytab: '=data'
        },
        templateUrl: 'src/directives/eshopper-category-directive/eshopper-category-directive.html',
        controller: eshopperCategoryCtrl
    }
});

app.controller('eshopperCategoryCtrl', eshopperCategoryCtrl);
eshopperCategoryCtrl.$inject = ['$scope', '$http'];

function eshopperCategoryCtrl($scope, $http) {
    $http({
        method: 'GET',
        url: 'src/json/categorytablist.json',
    }).then(function(response) {
        $scope.categorytab = response.data.categoryAllList;
        console.log($scope.categorytab);
    }, function(response) {
        //alert(error on page);
    });
}