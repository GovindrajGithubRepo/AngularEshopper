var app = angular.module('eshopperApp');


app.directive('eshopperCategoryProduct', function() {
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: true,
        scope: {
            title: "@",
            category: '=data'
        },
        templateUrl: 'src/directives/eshopper-category-product-directive/eshopper-category-product-directive.html',
        controller: categoryProductCtrl
    }
});

app.controller('categoryProductCtrl', categoryProductCtrl);
eshopperBrandCtrl.$inject = ['$scope', '$http'];

function categoryProductCtrl($scope, $http) {
    $http({
        method: "GET",
        url: "src/json/productCategory.json"
    }).then(function(response) {
        $scope.category = response.data.LeftNav;
        console.log($scope.category + '=====');
    }, function(response) {
        //alert('error on page');
    });

    $scope.title = "category";
};