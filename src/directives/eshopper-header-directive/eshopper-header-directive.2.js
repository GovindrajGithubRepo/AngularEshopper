var app = angular.module('eshopperApp', []);
app.directive('eshopperHeaderTop', function() {

    /*function findElm(scope, element, attrs) {
        // element.css('cursor', 'pointer');
        // element.addClass('sa');
        // angular.element("social-icons"); // Vanilla jqLite!
        // var elementResult = element[0].getElementsByClassName('social-icons');
        var myEl = angular.element(document.querySelector('.social-icons'));
        myEl.addClass('abc');
    }
*/
    return {
        restrict: 'AE',
        transclude: 'true',
        replace: true,
        scope: {
            phone: '@',
            email: '@',
            socials: '=data',

        },

        link: function(scope, element, attrs) {

            var myEl = angular.element(document.querySelector('.social-icons'));
            myEl.addClass('abc');

        },

        templateUrl: 'src/directives/eshopper-header-directive/eshopper-header-directive.html',
        controller: (function($scope, $http) {

            $scope.phone = "<i class='fa fa-phone'></i> +2 95 01 88 821</a>";
            $scope.email = "<i class='fa fa-envelope'></i> info@domain.com</a>";

            $http({
                method: "GET",
                url: "src/json/headerSocialLinks.json"
            }).then(function mySucces(response) {
                $scope.socials = response.data.headerTopLinks;
                console.log($scope.socials);
            }, function myError(response) {
                alert('error on page');
            });

        })
    }
});